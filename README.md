# starrydata-polymertool

[![License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)
[![Data: CC BY 4.0](https://img.shields.io/badge/data-CC%20BY%204.0-lightgrey.svg)](polymer_db/LICENSE-DATA)

高分子論文からポリマー組成・合成条件を抽出し、Starrydata2 の登録 Excel に貼り付けられる JSON を生成するツール。
GitHub Pages: <https://starrydata.github.io/starrydata-polymertool/>

## 2 カラム構成

```
┌────────────────────────────────────────┐
│ Header + ポリマー種別ガイド             │
├──────────────────┬─────────────────────┤
│ 📄 論文から収集  │ 🔍 ポリマー名検索   │
│ PDF ドロップ     │ 検索窓 + 画像       │
│ 試料テーブル     │ 検索結果カード       │
│ (合成ステップ)   │ (←左の抽出も流れる) │
├──────────────────┴─────────────────────┤
│ components (フル幅)                    │
│ Output JSON (フル幅)                   │
└────────────────────────────────────────┘
```

- 左カラム: PDF から試料単位で組成・添加剤・合成ステップを抽出し、表形式で表示
- 右カラム: 内部 DB / Gemini / PubChem から検索した結果を表示。左で検出した試料も Gemini カードとして流れ込む
- 下部: 検索結果からコンポーネントに追加 → Excel 貼付用 JSON を生成

## できること

- **主要ポリマー 110 件のプリセット DB** (PI, PSU, PES, BMI, CE, Epoxy, Cellulose など)
- **略称 / 商品名 / 別名**からの高速検索 (Noryl, Ryton, Kapton, Udel, Kevlar など)
- **論文 PDF 解析** (最大 20MB): Gemini が本文を全文解析し、試料単位で以下を抽出
  - 組成 (component dropdown / MW / 重量比 / モル比 / 商品名)
  - 繰り返し単位 (BigSMILES / Polymerizable group / 分子体積 / 共重合体の molar ratio)
  - 添加剤 (type / 商品名 / SMILES / 比率)
  - 多段階合成 (steps 配列で乾燥 → PAA 生成 → 熱イミド化 のような多段プロセス)
  - 物性 (Tg, Td5, 誘電率 etc.)
- **名称検索の Gemini フォールバック**: 内部 DB に無い名称 (セルロース、ナイロン6、PHB...) を Gemini が BigSMILES + モノマー候補として推定
- **画像認識**: 構造式画像を検索窓にドロップ / クリップボードから貼り付け / 📋 ボタン → Gemini が SMILES 抽出
- **モノマー逆推定**: ポリマー SMILES → Gemini が構成モノマーを推定
- **PubChem 連携**: 化合物名 → SMILES / SMILES → 化合物名 (手動実行、element 行の 🔍 ボタンから)
- **構造描画**: SMILES を SmilesDrawer で描画確認 (`[$]` は `*` に置換)
- **DB 追加**: Issue Form → GitHub Actions → PR フローで永続反映 (コード編集不要)
- **登録済みバッジ**: 検索結果が既に公開 DB にあれば「✓ DB 登録済 (key)」を表示

## 論文 PDF から試料情報を抽出する

1. 左カラムのドロップゾーンに PDF を投入 (またはクリックで選択)
2. Gemini がストリーミング受信、経過秒数と受信文字数が表示される
3. 完了すると以下が表示:
   - **論文メタ**: タイトル / 著者 / Journal / Year / DOI リンク
   - **試料カード (サンプル毎)**: Sample 名 + Material Type + Composition Class
     - components テーブル: type / name (+商品名) / class / MW / wt / mol
       - element 子行で Polymerizable group、分子体積、SMILES も表示
     - additives テーブル: type / name / MW / wt / mol
     - `▾ 合成条件・物性を表示` で step 配列を Step 1/2/3 ... として展開
4. 右カラムには各 component / additive が Gemini カード (🤖 紫) として並ぶ
   - カード内の note 欄に商品名・MW・重量比・合成情報が自動注入
   - `＋ このセッションで追加` / `＋ DB 登録リクエスト` で既存フローに流せる

### 抽出スキーマ (Starrydata2 TagTree.xlsx C 列準拠)

キュレーターの手動抽出と同じ構造で返すよう指示 + PI-0.25 の few-shot を内蔵。

```json
{
  "paperInfo": { "title":"", "authors":[], "doi":"", "journal":"", "year":0 },
  "samples": [{
    "sampleName": "PI-0.25",
    "materialType": "Neat resin | Compound | Composite",
    "compositionClass": "Homopolymer | Copolymer | Blend",
    "polymerClass": "Polyimide / Polysulfone / Epoxy ...",
    "components": [{
      "polymerDropdown": "PI | PPE | BMI | ...",
      "name": "Polyimide:TAHQ-m-Tolidine-3,4 ODA copolymer",
      "mw": null, "mwType": "Mn | Mw | Mv",
      "weightRatio": null, "molarRatio": null,
      "commercialName": "",
      "homopolymerType": "Homopolymer | Copolymer | Block | Graft",
      "elements": [
        { "name":"", "smiles":"[<]...[>] または [$]...[$]",
          "polymerizableGroup":"imide/ester/vinyl ...",
          "mw": 634.6, "molecularVolume": null,
          "weightRatio": null, "molarRatio": 0.75 }
      ],
      "monomers": [{ "name":"", "smiles":"", "role":"diamine/bisphenol/..." }]
    }],
    "additives": [{
      "additiveType": "Initiator | Flame retardant | ...",
      "name":"", "commercialName":"", "smiles":"",
      "mw": null, "molecularVolume": null,
      "weightRatio": null, "molarRatio": null
    }],
    "synthesis": {
      "overview": "全体フロー 1-2 文",
      "steps": [{
        "name": "Drying / PAA formation / Thermal imidization 等",
        "compounds": [{ "name":"", "formula":"", "amount":"6.5*(1-X) mmol 等の変数可" }],
        "solvent": { "name":"DMAc", "amount":"" },
        "conditions": { "temperature":"80 for 12 h; 100 for 1 h; ...",
                        "time":"720 min", "other":"N2 atmosphere; 2-3 °C min-1 ramps" }
      }]
    },
    "properties": "Tg=320°C; ε=3.2; ..."
  }]
}
```

### 制約

- PDF サイズ上限: **20MB** (inline_data base64 の限界)
- Gemini 無料枠: 1 論文で数万 tokens 消費、1 日 20〜50 本が目安
- `gemini-3.8-flash` → `gemini-3.6-flash` → `gemini-3.1-flash-lite` の順に自動フォールバック
- 503/429 は各モデル 3 回まで指数バックオフでリトライ

## ポリマー名検索 (右カラム)

- 内部 DB (110 件) で先頭一致 / 部分一致
- 内部 DB にヒットしなかった場合、Gemini が BigSMILES + モノマー候補を推定して「🤖 Gemini」カードで表示
- 内部 DB エントリは **「✓ DB 登録済」** バッジ付き、構成モノマーも DB 内に同一 SMILES があれば **「✓ 登録済 (key)」** を表示
- 検索は **Enter キー** で発火 (タイプ毎の Gemini 連打を防ぎ、無料枠の RPM を圧迫しない)
- 画像を入れると Gemini Vision で構造 → SMILES → 名称照合 → モノマー逆推定
- クリップボードから画像を貼るときは **📋 ボタン** または input 外にフォーカスして ⌘V (input フォーカス中は通常テキスト貼付を優先)

Gemini API Key は <https://aistudio.google.com> で無料取得可能。**localStorage** に保存されブラウザ外には送信されません。HF Token は現状 Kohulan/DECIMER が gated のため実質未使用。

## ファイル構成

| ファイル / ディレクトリ | 役割 |
| --- | --- |
| `index.html` | UI + ロジック (単一 HTML) |
| `polymer_db/` | ポリマー DB 本体 (カテゴリ別分割 JSON、**編集はこちら**) |
| `polymer_db.js` | `polymer_db/` から自動生成される JS 版 (ブラウザ用、編集禁止) |
| `README.md` | この文書 |

### `polymer_db/` のカテゴリ構成

```
polymer_db/
  polymers/
    high-performance.json   # PPE, PI, PES, PSU, PEEK, LCP, PEI, PPESK, ...
    commodity.json          # PS, PET, PVC, PA6, ABS, PLA, SBS/SBR/NBR, ...
    thermoset.json          # PU
    specialty.json          # PDMS, Fluoropolymer, PVDF, COC, PMP, PEG, ...
    fiber.json              # Kevlar, Nomex
    uncategorized.json      # Issue Form 経由の新規ポリマー暫定置き場
  monomers/
    bisphenols.json         # BPA, BPS, BHF, HQ, 26XYL, ...
    diamines.json           # MDA, ODA, PPD, HMDA, ...
    dianhydrides.json       # PMDA, 6FDA, BPDA
    diaryl-halides.json     # DCDPS, DFDPS, PHOS (phosgene), ...
    diacids.json            # TPA, IPA, ADA, ...
    diols.json              # BDO, EG
    cyclic-monomers.json    # CPL, LAC, EO, D4, ...
    epoxides.json           # Epoxy, ECH
    diisocyanates.json      # MDI, TDI
    vinyls.json             # STY, MMA, AN, BD, VDF, TFE, ...
    thermoset-monomers.json # BMI, CE, PBz, DABPA, BRCN
    others.json             # HCHO, DPC, ALBR, ...
  sentinels.json            # Other / Crosslinker (UI 末尾固定)
```

連結順は `build_polymer_db.py` の `POLY_ORDER` / `MONO_ORDER` で定義。UI ドロップダウンの順序もこれに準じる。

DB 追加フロー用:
- `.github/ISSUE_TEMPLATE/add-polymer.yml` — Issue Form 定義
- `.github/workflows/add-polymer.yml` — 自動 PR 作成ワークフロー
- `.github/scripts/parse_polymer_issue.py` — Issue 本文パーサ (カテゴリ自動振り分け)
- `.github/scripts/build_polymer_db.py` — カテゴリ別 JSON → JS 再生成スクリプト

## DB スキーマ

各ポリマーエントリのフィールド:

```json
{
  "key": "PSU",                                     // 一意の短縮記号
  "label": "PSU|Polysulfone (bisphenol A type)",    // ドロップダウン表示
  "displayName": "poly(oxy-4,4'-...)",              // 正式名
  "defaultClass": "Homopolymer",                    // Homopolymer / Copolymer
  "dropdownHidden": true,                           // (任意) 検索のみヒット
  "aliases": ["PSF", "Udel"],                       // 別名・商品名
  "elements": [                                     // 繰り返し単位 (BigSMILES)
    { "name": "...", "smiles": "[$]Oc1ccc(...)[$]", "polyGroup": "", "note": "" }
  ],
  "monomers": [                                     // (任意) 構成モノマー (化合物SMILES)
    { "name": "bisphenol A", "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1", "role": "bisphenol" },
    { "name": "DCDPS",       "smiles": "Clc1ccc(S(=O)(=O)c2ccc(Cl)cc2)cc1", "role": "diaryl halide" }
  ]
}
```

`sentinel: true` は `Other` / `Crosslinker` のフリー記入用ダミーで、リストの末尾に固定。

## 新しいポリマーを DB に追加する

コードを直接触らずに Issue Form から追加できます。

1. リポジトリ上部の **Issues → New issue → "📥 ポリマーDB追加リクエスト"** を開く
2. フォーム項目を入力 (key / label / displayName / elements JSON など)
3. 送信すると GitHub Actions が自動で PR を作成
4. PR の内容を確認して merge → 数分後に GitHub Pages に反映

ツール内から Issue Form を自動プリフィルで開くルートもあります:

- 検索結果カードの **＋ DB 登録** ボタン (未登録のものだけ表示)
- 論文解析カードの **＋ DB に登録リクエスト (全体)** / **＋ 部品として登録**
- モノマー行の **＋ DB 登録** (未登録のものだけ表示)
- 編集モーダルの **＋ DB 登録リクエスト**

## 画像 → SMILES → モノマー フロー

1. 分子構造画像を検索窓にドロップ / クリップボードから貼り付け (📋 ボタンまたは input 外で ⌘V) / 🖼 ボタンから選択
2. **Gemini Vision API** (`gemini-3.8-flash` → `3.6-flash`) で SMILES 認識 (要 API Key、⚙ から設定)
3. **PubChem** で化合物名を照合 (成功すれば IUPAC 名表示)
4. **Gemini** が SMILES → 構成モノマーを逆推定
5. カードに繰り返し単位 + 構成モノマーが並び、それぞれ:
   - 構造確認 (SmilesDrawer で描画)
   - 手動編集
   - このセッションで localStorage に追加
   - Issue Form 経由で永続 DB 登録

## 手動で編集する場合 (メンテナ)

`polymer_db/<category>/<file>.json` のいずれかを編集後、以下でブラウザ用 JS を再生成する:

```sh
python3 .github/scripts/build_polymer_db.py
```

このスクリプトは分割 JSON を所定順で連結して `polymer_db.js` を書き換えるだけで副作用はありません。手動で `polymer_db.js` を編集しないでください (次回自動生成で上書きされます)。

エントリをカテゴリ間で移動する場合は単に JSON の該当エントリを切り貼りし、スクリプトを再実行してください (同一 key のチェックは `build` 側ではせず、Issue 追加時のみ)。

## Issue Form が失敗するケース

- key が既存のものと重複
- elements JSON がパース不能 (クォート抜け・末尾カンマ等)
- 必須項目 (key / label / displayName / elements) が空

Actions 失敗時は Issue にエラーログ URL がコメントで自動投稿されます。修正して新しい Issue を立て直してください。

## 「セッションで追加」と「DB に登録」の違い

| 観点 | セッションで追加 | DB に登録リクエスト |
|---|---|---|
| 保存先 | ブラウザの localStorage | GitHub の `polymer_db/` 配下 JSON |
| 反映される人 | あなた1人 | このツールを使う全員 |
| タイミング | 即時 | PR merge → 数分後 |
| 別 PC / 別ブラウザ | 反映されない | 反映される |
| キャッシュ削除で消える | ○ | × |

一度きりならセッション、繰り返し使うなら DB 登録。

## ライセンス

本リポジトリは **2 系統のライセンス** を併用しています:

| 対象 | ライセンス | ファイル |
|---|---|---|
| ソースコード (`index.html`、`.github/scripts/`、`.github/workflows/`、`.github/ISSUE_TEMPLATE/`、`README.md` 等) | **MIT License** | [`LICENSE`](LICENSE) |
| ポリマーデータベース (`polymer_db/**/*.json` および自動生成の `polymer_db.js`) | **Creative Commons Attribution 4.0 International (CC BY 4.0)** | [`polymer_db/LICENSE-DATA`](polymer_db/LICENSE-DATA) |

`LICENSE` 自体は純粋な MIT 本文 (GitHub の自動判定が「MIT」になる形式) で、データ側の併記説明はこの README に寄せています。

**フォーク・社内利用**: MIT / CC BY 4.0 のどちらも商用利用可能、改変可能です。著作権表示を残していただければ社内 Enterprise への fork、改変、派生物の作成に制限はありません。

**メンテナンス**: [National Institute for Materials Science (NIMS)](https://www.nims.go.jp/) / Starrydata プロジェクト

**DB データの引用時**:
```
starrydata contributors / National Institute for Materials Science (NIMS),
starrydata-polymertool polymer database,
https://github.com/starrydata/starrydata-polymertool
```

## Gemini 利用上の注意

- モデル順: `gemini-3.8-flash` → `gemini-3.6-flash` → (PDF 以外は) `gemini-3.1-flash-lite`
- 無料枠は RPM (分あたり) が厳しいため、検索は Enter 発火方式でタイプ毎の連打を防止
- PDF 解析はストリーミング (SSE) で逐次受信、進捗が文字数 + 経過秒数で見える
- 429 (RPM) に当たった場合は 1〜2 分置くか、新規プロジェクトで追加 API Key を発行 (`https://aistudio.google.com/apikey`)
- 旧 `gemini-2.0-flash` は 2026/10 に廃止、`gemini-3.6-flash` も負荷により 503 を返すことがあるので 3 段フォールバック + 指数バックオフで対応
