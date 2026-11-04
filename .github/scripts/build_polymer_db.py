#!/usr/bin/env python3
"""polymer_db/ 以下の分割 JSON から polymer_db.js を再生成する。

ディレクトリ構成:
  polymer_db/
    polymers/*.json       # 繰り返し単位（Homopolymer / Copolymer）
    monomers/*.json       # 原料モノマー・化合物
    sentinels.json        # Other / Crosslinker (UI 末尾固定)
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DB_DIR = ROOT / "polymer_db"
JS_PATH = ROOT / "polymer_db.js"

# 連結順。UI のドロップダウン順になる。sentinel は必ず最後。
POLY_ORDER = ["high-performance", "commodity", "thermoset", "specialty", "fiber"]
MONO_ORDER = [
    "bisphenols", "diamines", "dianhydrides", "diaryl-halides",
    "diacids", "diols", "cyclic-monomers", "epoxides",
    "diisocyanates", "vinyls", "thermoset-monomers", "others",
]

HEADER = """// =============================================
// ポリマー BigSMILES データベース
// 編集は polymer_db/ 以下の分割 JSON で行ってください
// このファイルは build_polymer_db.py で自動生成されます
// =============================================
// AUTO-GENERATED — do not edit by hand
"""


def load_ordered(subdir: str, order: list[str]) -> list[dict]:
    """subdir 以下の JSON を order 通りに読んで連結。order に無いファイルは末尾に追加。"""
    base = DB_DIR / subdir
    if not base.is_dir():
        return []
    files = {p.stem: p for p in base.glob("*.json")}
    merged: list[dict] = []
    for name in order:
        p = files.pop(name, None)
        if p:
            merged.extend(json.loads(p.read_text(encoding="utf-8")))
    for name in sorted(files):
        merged.extend(json.loads(files[name].read_text(encoding="utf-8")))
    return merged


def main() -> int:
    polymers = load_ordered("polymers", POLY_ORDER)
    monomers = load_ordered("monomers", MONO_ORDER)
    sentinel_path = DB_DIR / "sentinels.json"
    sentinels = json.loads(sentinel_path.read_text(encoding="utf-8")) if sentinel_path.exists() else []

    data = polymers + monomers + sentinels
    body = json.dumps(data, ensure_ascii=False, indent=2)
    JS_PATH.write_text(f"{HEADER}const POLYMER_DB = {body};\n", encoding="utf-8")
    print(f"wrote {JS_PATH} ({len(data)} entries = {len(polymers)} polymers + {len(monomers)} monomers + {len(sentinels)} sentinels)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
