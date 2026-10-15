#!/usr/bin/env python3
"""polymer_db.json から polymer_db.js を再生成する。"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
JSON_PATH = ROOT / "polymer_db.json"
JS_PATH = ROOT / "polymer_db.js"

HEADER = """// =============================================
// ポリマー BigSMILES データベース
// 編集は polymer_db.json 側で行ってください
// このファイルは polymer_db.json から自動生成されます
// =============================================
// AUTO-GENERATED — do not edit by hand
"""


def main() -> int:
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    body = json.dumps(data, ensure_ascii=False, indent=2)
    JS_PATH.write_text(f"{HEADER}const POLYMER_DB = {body};\n", encoding="utf-8")
    print(f"wrote {JS_PATH} ({len(data)} entries)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
