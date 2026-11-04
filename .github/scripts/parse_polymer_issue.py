#!/usr/bin/env python3
"""Issue Form 本文から polymer_db/ の分割 JSON に新規エントリを追記する。

環境変数:
  ISSUE_BODY   Issue Form の Markdown 本文
  ISSUE_NUMBER Issue 番号（PR 説明用）
  ISSUE_TITLE  Issue タイトル

Issue Form のフィールドは以下の Markdown 見出し形式で来る:
  ### key
  PSU
  ### label
  PSU|Polysulfone

複数行フィールドはコードブロック（```json ... ```）で囲まれる。

カテゴリ判定:
- 要素 SMILES に `[$]` を含む → ポリマー → polymer_db/polymers/uncategorized.json
  （カテゴリは後でメンテナが手動で適切な *.json へ移動）
- それ以外 → モノマー → polyGroup から polymer_db/monomers/<category>.json を推定
"""
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DB_DIR = ROOT / "polymer_db"

# polyGroup → monomers サブカテゴリ名
PG_TO_MONO_CAT = {
    "diamine": "diamines", "amine": "diamines", "diaminodiol": "diamines",
    "bisphenol": "bisphenols", "biphenol": "bisphenols",
    "phenol": "bisphenols", "thiophenol": "bisphenols",
    "dianhydride": "dianhydrides", "anhydride": "dianhydrides",
    "diaryl halide": "diaryl-halides", "acid chloride": "diaryl-halides",
    "carbonyl chloride": "diaryl-halides",
    "diacid": "diacids", "hydroxyacid": "diacids",
    "diol": "diols",
    "ethylene oxide": "cyclic-monomers", "cyclic ether": "cyclic-monomers",
    "cyclic ester": "cyclic-monomers", "lactam": "cyclic-monomers",
    "cyclic olefin": "cyclic-monomers", "cyclic siloxane": "cyclic-monomers",
    "epoxide": "epoxides", "epoxy": "epoxides",
    "diisocyanate": "diisocyanates",
    "vinyl": "vinyls", "olefin": "vinyls", "diene": "vinyls",
    "methacrylate": "vinyls", "trifluorovinyl ether": "vinyls",
    "fluoroolefin": "vinyls", "acryloyl chloride": "vinyls",
    "maleimide": "thermoset-monomers", "cyanate ester": "thermoset-monomers",
    "benzoxazine": "thermoset-monomers", "allyl ether": "thermoset-monomers",
    "cyanation agent": "thermoset-monomers",
    "aldehyde": "others", "alkyl halide": "others", "carbonate": "others",
}


def parse_issue_body(body: str) -> dict[str, str]:
    sections: dict[str, str] = {}
    current: str | None = None
    buf: list[str] = []
    for line in body.splitlines():
        m = re.match(r"^###\s+(.+?)\s*$", line)
        if m:
            if current is not None:
                sections[current] = "\n".join(buf).strip()
            current = m.group(1).strip()
            buf = []
        else:
            buf.append(line)
    if current is not None:
        sections[current] = "\n".join(buf).strip()
    return sections


def strip_code_fence(text: str) -> str:
    m = re.match(r"^```(?:\w+)?\n(.*?)\n```\s*$", text, re.DOTALL)
    return m.group(1) if m else text


def parse_bool_checkbox(text: str) -> bool:
    return "[x]" in text.lower() or "[X]" in text


def find_by_label(sections: dict[str, str], *needles: str) -> str:
    for heading, value in sections.items():
        low = heading.lower()
        if all(n.lower() in low for n in needles):
            return value.strip()
    return ""


def all_existing_keys() -> set[str]:
    keys: set[str] = set()
    for path in DB_DIR.rglob("*.json"):
        for e in json.loads(path.read_text(encoding="utf-8")):
            if "key" in e:
                keys.add(e["key"])
    return keys


def target_file(new_entry: dict) -> Path:
    """new_entry を書き込むべき JSON ファイルを決める。"""
    elements = new_entry.get("elements", [])
    is_polymer = any("[$]" in (el.get("smiles", "") or "") for el in elements)
    if is_polymer:
        return DB_DIR / "polymers" / "uncategorized.json"
    for el in elements:
        pg = (el.get("polyGroup") or "").strip()
        if pg in PG_TO_MONO_CAT:
            return DB_DIR / "monomers" / f"{PG_TO_MONO_CAT[pg]}.json"
    return DB_DIR / "monomers" / "others.json"


def main() -> int:
    body = os.environ.get("ISSUE_BODY", "")
    if not body:
        print("::error::ISSUE_BODY is empty", file=sys.stderr)
        return 1

    sections = parse_issue_body(body)

    key = find_by_label(sections, "key")
    label = find_by_label(sections, "label")
    display_name = find_by_label(sections, "displayname")
    default_class = find_by_label(sections, "defaultclass") or "Homopolymer"
    dropdown_hidden_text = find_by_label(sections, "dropdown")
    aliases_text = find_by_label(sections, "aliases")
    elements_text = find_by_label(sections, "elements")
    monomers_text = find_by_label(sections, "monomers")

    if not key or key.startswith("_No response_"):
        print("::error::key is required", file=sys.stderr)
        return 1
    if not label or label.startswith("_No response_"):
        print("::error::label is required", file=sys.stderr)
        return 1

    existing = all_existing_keys()
    if key in existing:
        print(f"::error::key '{key}' already exists in polymer_db/", file=sys.stderr)
        return 1

    aliases = []
    if aliases_text and not aliases_text.startswith("_No response_"):
        aliases = [a.strip() for a in aliases_text.split(",") if a.strip()]

    elements_json = strip_code_fence(elements_text)
    try:
        elements = json.loads(elements_json)
    except json.JSONDecodeError as e:
        print(f"::error::elements JSON parse error: {e}", file=sys.stderr)
        print(f"::error::Received:\n{elements_json}", file=sys.stderr)
        return 1

    if not isinstance(elements, list) or not elements:
        print("::error::elements must be a non-empty JSON array", file=sys.stderr)
        return 1

    for i, el in enumerate(elements):
        if not isinstance(el, dict):
            print(f"::error::elements[{i}] must be an object", file=sys.stderr)
            return 1
        el.setdefault("name", "")
        el.setdefault("smiles", "")
        el.setdefault("polyGroup", "")
        el.setdefault("note", "")

    monomers: list = []
    if monomers_text and not monomers_text.startswith("_No response_"):
        try:
            parsed = json.loads(strip_code_fence(monomers_text))
            if isinstance(parsed, list):
                for m in parsed:
                    if not isinstance(m, dict):
                        continue
                    m.setdefault("name", "")
                    m.setdefault("smiles", "")
                    m.setdefault("role", "")
                    monomers.append(m)
        except json.JSONDecodeError as e:
            print(f"::warning::monomers JSON parse skipped: {e}", file=sys.stderr)

    new_entry: dict = {
        "key": key,
        "label": label,
        "displayName": display_name,
        "defaultClass": default_class,
        "aliases": aliases,
        "elements": elements,
    }
    if monomers:
        new_entry["monomers"] = monomers
    if parse_bool_checkbox(dropdown_hidden_text):
        new_entry["dropdownHidden"] = True

    path = target_file(new_entry)
    path.parent.mkdir(parents=True, exist_ok=True)
    entries = json.loads(path.read_text(encoding="utf-8")) if path.exists() else []
    entries.append(new_entry)
    path.write_text(
        json.dumps(entries, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    rel = path.relative_to(ROOT)
    print(f"added key='{key}' to {rel}")

    gh_output = os.environ.get("GITHUB_OUTPUT")
    if gh_output:
        with open(gh_output, "a", encoding="utf-8") as f:
            f.write(f"polymer_key={key}\n")
            f.write(f"polymer_label={label}\n")
            f.write(f"target_file={rel}\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
