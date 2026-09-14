# polymer_smiles_tool

ポリマー組成を BigSMILES で入力し、データベース登録用の JSON を生成するツール。
GitHub Pages: <https://atsumitanaka.github.io/apps/polymer_smiles_tool/>

## ファイル構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | UI + ロジック（単一 HTML） |
| `polymer_db.json` | ポリマー DB 本体（**編集はこちら**） |
| `polymer_db.js` | `polymer_db.json` から自動生成される JS 版（ブラウザ用） |

## 新しいポリマーを DB に追加する

コードを直接触らずに Issue Form から追加できます。

1. リポジトリ上部の **Issues → New issue → "📥 ポリマーDB追加リクエスト"** を開く
2. フォーム項目を入力（key / label / SMILES など）
3. 送信すると GitHub Actions が自動で PR を作成
4. PR の内容を確認して merge → 数分後に GitHub Pages に反映

## 手動で編集する場合（メンテナ）

`polymer_db.json` を編集後、以下でブラウザ用 JS を再生成する:

```sh
python3 .github/scripts/build_polymer_db.py
```

## Issue Form が拾えないケース

- key が既存のものと重複している
- elements JSON がパースできない（クォート・カンマ抜け）
- 必須項目（key / label / displayName / elements）が空

Actions が失敗すると Issue にコメントでエラーログの URL が投稿されます。
