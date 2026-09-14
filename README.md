# polymer_smiles_tool

ポリマー組成を BigSMILES で入力し、データベース登録用の JSON を生成するツール。
GitHub Pages: <https://atsumitanaka.github.io/apps/polymer_smiles_tool/>

## できること

- 主要ポリマー（PPE, PSU, PES, BMI, CE, PI, Epoxy など 26 種）のプリセット
- 略称 / 商品名 / 別名からの高速検索（Noryl, Ryton, Kapton など）
- **画像認識**: 分子構造画像を検索窓にドロップ → Gemini で SMILES 抽出
- **モノマー逆推定**: ポリマー SMILES から Gemini が構成モノマーを推定
- **PubChem 連携**: 化合物名 → SMILES / SMILES → 化合物名を都度取得
- **構造描画**: SMILES を SmilesDrawer で描画確認（`[$]` は `*` に置換）
- **DB 追加**: Issue Form → GitHub Actions → PR フローで永続反映（コード知識不要）

## ファイル構成

| ファイル | 役割 |
| --- | --- |
| `index.html` | UI + ロジック（単一 HTML） |
| `polymer_db.json` | ポリマー DB 本体（**編集はこちら**） |
| `polymer_db.js` | `polymer_db.json` から自動生成される JS 版（ブラウザ用） |
| `README.md` | この文書 |

DB 追加フロー用:
- `.github/ISSUE_TEMPLATE/add-polymer.yml` — Issue Form 定義
- `.github/workflows/add-polymer.yml` — 自動 PR 作成ワークフロー
- `.github/scripts/parse_polymer_issue.py` — Issue 本文パーサ
- `.github/scripts/build_polymer_db.py` — JSON → JS 再生成スクリプト

## DB スキーマ

各ポリマーエントリのフィールド:

```json
{
  "key": "PSU",                                     // 一意の短縮記号
  "label": "PSU|Polysulfone (bisphenol A type)",   // ドロップダウン表示
  "displayName": "poly(oxy-4,4'-...)",             // 正式名
  "defaultClass": "Homopolymer",                    // Homopolymer / Copolymer
  "dropdownHidden": true,                           // (任意) 検索のみヒット
  "aliases": ["PSF", "Udel"],                       // 別名・商品名
  "elements": [                                     // 繰り返し単位（BigSMILES）
    { "name": "...", "smiles": "[$]Oc1ccc(...)[$]", "polyGroup": "", "note": "" }
  ],
  "monomers": [                                     // (任意) 構成モノマー（化合物SMILES）
    { "name": "bisphenol A", "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1", "role": "bisphenol" },
    { "name": "DCDPS",       "smiles": "Clc1ccc(S(=O)(=O)c2ccc(Cl)cc2)cc1", "role": "diaryl halide" }
  ]
}
```

`sentinel: true` は `Other` / `Crosslinker` のフリー記入用ダミーで、リストの末尾に固定。

## 新しいポリマーを DB に追加する

コードを直接触らずに Issue Form から追加できます。

1. リポジトリ上部の **Issues → New issue → "📥 ポリマーDB追加リクエスト"** を開く
2. フォーム項目を入力（key / label / displayName / elements JSON など）
3. 送信すると GitHub Actions が自動で PR を作成
4. PR の内容を確認して merge → 数分後に GitHub Pages に反映

ツール内から Issue Form を自動プリフィルで開くルートもあります:

- 検索結果カードの **＋ DB 登録** ボタン
- 画像認識カードの **＋ DB に登録リクエスト（全体）** / **＋ 部品として登録**
- モノマー行の **＋ DB 登録**
- 編集モーダルの **＋ DB 登録リクエスト**

## 画像 → SMILES → モノマー フロー

1. 分子構造画像を検索窓にドロップ
2. **Gemini Vision API** で SMILES 認識（要 API Key、⚙ から設定）
3. **PubChem** で化合物名を照合（成功すれば IUPAC 名表示）
4. **Gemini** が SMILES → 構成モノマーを逆推定
5. カードに繰り返し単位 + 構成モノマーが並び、それぞれ:
   - 構造確認（SmilesDrawer で描画）
   - 手動編集
   - このセッションで localStorage に追加
   - Issue Form 経由で永続 DB 登録

Gemini API Key は <https://aistudio.google.com> で無料取得可能。localStorage に保存されます（ブラウザ外には送信されません）。

## 手動で編集する場合（メンテナ）

`polymer_db.json` を編集後、以下でブラウザ用 JS を再生成する:

```sh
python3 .github/scripts/build_polymer_db.py
```

このスクリプトは JSON をそのまま埋め込んで `polymer_db.js` を書き換えるだけで副作用はありません。手動で `polymer_db.js` を編集しないでください（次回自動生成で上書きされます）。

## Issue Form が失敗するケース

- key が既存のものと重複
- elements JSON がパース不能（クォート抜け・末尾カンマ等）
- 必須項目（key / label / displayName / elements）が空

Actions 失敗時は Issue にエラーログ URL がコメントで自動投稿されます。修正して新しい Issue を立て直してください。

## 「セッションで追加」と「DB に登録」の違い

| 観点 | セッションで追加 | DB に登録リクエスト |
|---|---|---|
| 保存先 | ブラウザの localStorage | GitHub の `polymer_db.json` |
| 反映される人 | あなた1人 | このツールを使う全員 |
| タイミング | 即時 | PR merge → 数分後 |
| 別 PC / 別ブラウザ | 反映されない | 反映される |
| キャッシュ削除で消える | ○ | × |

一度きりならセッション、繰り返し使うなら DB 登録。
