#!/usr/bin/env python3
"""Issue Form 本文から polymer_db.json エントリを組み立てて追記する。

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
"""
import json
import os
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
JSON_PATH = ROOT / "polymer_db.json"


def parse_issue_body(body: str) -> dict[str, str]:
    """### <field> の見出しで区切って dict にする。"""
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
    """```json ... ``` の外側を除去。"""
    m = re.match(r"^```(?:\w+)?\n(.*?)\n```\s*$", text, re.DOTALL)
    return m.group(1) if m else text


def parse_bool_checkbox(text: str) -> bool:
    return "[x]" in text.lower() or "[X]" in text


def find_by_label(sections: dict[str, str], *needles: str) -> str:
    """見出しに含まれる文字列で緩く照合する（絵文字や括弧付きに対応）。"""
    for heading, value in sections.items():
        low = heading.lower()
        if all(n.lower() in low for n in needles):
            return value.strip()
    return ""


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

    entries = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    if any(e.get("key") == key for e in entries):
        print(f"::error::key '{key}' already exists in polymer_db.json", file=sys.stderr)
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

    # Other / Crosslinker sentinel の直前に挿入
    sentinel_start = next(
        (i for i, e in enumerate(entries) if e.get("sentinel")),
        len(entries),
    )
    entries.insert(sentinel_start, new_entry)

    JSON_PATH.write_text(
        json.dumps(entries, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print(f"added key='{key}' at index {sentinel_start}")

    # 後続ステップ用に出力
    gh_output = os.environ.get("GITHUB_OUTPUT")
    if gh_output:
        with open(gh_output, "a", encoding="utf-8") as f:
            f.write(f"polymer_key={key}\n")
            f.write(f"polymer_label={label}\n")
    return 0


if __name__ == "__main__":
    sys.exit(main())
