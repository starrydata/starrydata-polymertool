// =============================================
// ポリマー BigSMILES データベース
// =============================================
const POLYMER_DB = [
  {
    key: 'PPE', label: 'PPE|Poly(phenylene ether)',
    displayName: 'poly(2,6-dimethyl-1,4-phenylene ether)', defaultClass: 'Homopolymer',
    aliases: ['Noryl', 'SA9000', 'SA120', 'SA90', 'PPO731', 'SE100', 'GFN2', 'Xyron', 'Iupiace', 'Vestoran', 'poly(phenylene oxide)', 'polyphenylene ether', 'polyphenylene oxide'],
    elements: [{ name: '2,6-dimethyl-1,4-phenylene ether unit', smiles: '[$]Oc1c(C)cc([$])cc1C', polyGroup: '', note: '' }]
  },
  {
    key: 'PPO', label: 'PPO|Poly(2,6-dimethyl-1,4-phenylene oxide)',
    displayName: 'poly(2,6-dimethyl-1,4-phenylene oxide)', defaultClass: 'Homopolymer',
    dropdownHidden: true,
    aliases: ['Noryl', 'SA120', 'Xyron', 'Iupiace', 'polyphenylene oxide', 'poly(phenylene oxide)'],
    elements: [{ name: '2,6-dimethyl-1,4-phenylene oxide unit', smiles: '[$]Oc1c(C)cc([$])cc1C', polyGroup: '', note: 'PPO = PPE（ポリフェニレンエーテル）と同一ポリマー。Noryl（SABIC）が代表品。ExcelドロップダウンではPPEとして登録されている場合あり' }]
  },
  {
    key: 'PPS', label: 'PPS|Poly(phenylene sulfide)',
    displayName: 'poly(p-phenylene sulfide)', defaultClass: 'Homopolymer',
    dropdownHidden: true,
    aliases: ['Ryton', 'Fortron', 'Torelina', 'Durafide', 'DIC PPS', 'polyphenylene sulfide'],
    elements: [{ name: 'p-phenylene sulfide unit', smiles: '[$]Sc1ccc([$])cc1', polyGroup: '', note: 'para位でS橋絡した芳香族スルフィド。メチル基なし。Ryton（Solvay）が代表品' }]
  },
  {
    key: 'PMPS', label: 'PMPS|Poly(2,6-dimethyl-1,4-phenylene sulfide)',
    displayName: 'poly(2,6-dimethyl-1,4-phenylene sulfide)', defaultClass: 'Homopolymer',
    dropdownHidden: true,
    aliases: [],
    elements: [{ name: '2,6-dimethyl-1,4-phenylene sulfide unit', smiles: '[$]Sc1c(C)cc([$])cc1C', polyGroup: '', note: 'PPOのO→S置換体。2,6-ジメチルフェニレンスルフィド。アモルファス化により低Df・高周波特性に優れる' }]
  },
  {
    key: 'PMPS-PPO', label: 'PMPS-PPO|Alternating copolymer (PMPS/PPO)',
    dropdownHidden: true,
    displayName: 'poly(2,6-dimethyl-1,4-phenylene sulfide-alt-2,6-dimethyl-1,4-phenylene oxide)',
    defaultClass: 'Copolymer',
    aliases: ['PMPS PPO copolymer', 'sulfide ether copolymer'],
    elements: [
      { name: '2,6-dimethyl-1,4-phenylene oxide unit (PPO)', smiles: '[$]Oc1c(C)cc([$])cc1C', polyGroup: '', note: 'PPO（エーテル）単位。交互共重合体の一成分' },
      { name: '2,6-dimethyl-1,4-phenylene sulfide unit (PMPS)', smiles: '[$]Sc1c(C)cc([$])cc1C', polyGroup: '', note: 'PMPS（スルフィド）単位。O→S置換により分極率を低下させ周波数非依存の低Dfを実現' }
    ]
  },
  {
    key: 'BMI', label: 'BMI|Bismaleimide',
    displayName: "4,4'-bismaleimidodiphenylmethane (MDA-BMI)", defaultClass: 'Homopolymer',
    aliases: ['Matrimid', 'Matrimid 5292', 'Compimide', 'F-655', 'BT resin', 'bismaleimide triazine', 'bismaleimide'],
    elements: [{ name: 'MDA-BMI（反応前モノマー構造）', smiles: 'O=C1C=CC(=O)N1c1ccc(Cc2ccc(N3C(=O)C=CC3=O)cc2)cc1', polyGroup: 'maleimide', note: '⚠ 反応前モノマー構造。反応後はマレイミド二重結合が開環した構造に修正してください' }]
  },
  {
    key: 'CE', label: 'CE|Cyanate ester resin',
    displayName: 'bisphenol A dicyanate (BADCy)', defaultClass: 'Homopolymer',
    aliases: ['BADCy', 'Primaset', 'PT-30', 'PT-60', 'AroCy', 'AroCy B-10', 'AroCy L-10', 'Lonza PT', 'Cytec 5578', 'cyanate ester', 'polycyanurate'],
    elements: [{ name: 'bisphenol A dicyanate（反応前モノマー構造）', smiles: 'N#COc1ccc(C(C)(C)c2ccc(OC#N)cc2)cc1', polyGroup: 'cyanate ester', note: '⚠ 反応前モノマー構造。反応後はシアネート基3つが三量体化してトリアジン環を形成' }]
  },
  {
    key: 'Phenoxy', label: 'Phenoxy resin|high-molecular-weight BPA epoxy',
    displayName: 'bisphenol A phenoxy resin', defaultClass: 'Homopolymer',
    aliases: ['PKHB', 'PKHC', 'PKHH', 'PKHA', 'Paphen', 'InChem phenoxy', 'phenoxy resin'],
    elements: [{ name: 'bisphenol A ether unit', smiles: '[$]CC(O)COc1ccc(C(C)(C)c2ccc(O[$])cc2)cc1', polyGroup: '', note: '高分子量BPAエポキシ（フェノキシ樹脂）の繰り返し単位。エポキシ環が開環した構造' }]
  },
  {
    key: 'Epoxy', label: 'Epoxy',
    displayName: 'diglycidyl ether of bisphenol A (DGEBA)', defaultClass: 'Homopolymer',
    aliases: ['DGEBA', 'Araldite', 'Epon', 'D.E.R.', 'jER', 'Epikote', 'YD-128', 'bisphenol A epoxy', 'BPA epoxy'],
    elements: [{ name: 'DGEBA（反応前モノマー構造）', smiles: 'C1OC1COc1ccc(C(C)(C)c2ccc(OCC3CO3)cc2)cc1', polyGroup: 'epoxy', note: '⚠ 反応前モノマー構造（DGEBA）。硬化剤の種類・配合によって反応後の構造が変わる' }]
  },
  {
    key: 'PI', label: 'PI|Polyimide',
    displayName: 'polyimide (PMDA-ODA)', defaultClass: 'Homopolymer',
    aliases: ['Kapton', 'Vespel', 'Upilex', 'Aurum', 'Apical', 'Matrimid PI', 'polyimide film', 'PMDA-ODA', '6FDA'],
    elements: [
      {
        name: 'ODA (4,4\'-oxydianiline) unit',
        smiles: '[$]c1ccc(Oc2ccc([$])cc2)cc1',
        polyGroup: '',
        note: 'ジアミン（ODA）のアリール部分。[$] = PMDA側のN-imideとの結合点。PMDA-ODA以外のPIは種類に合わせて修正してください'
      },
      {
        name: 'PMDA (pyromellitic dianhydride) imide unit',
        smiles: 'O=C1N([$])C(=O)c2cc3c(cc12)C(=O)N([$])C3=O',
        polyGroup: '',
        note: '二無水物（PMDA）のジイミド部分。[$] = ODA側のアリール炭素との結合点。⚠ 要確認'
      }
    ]
  },
  {
    key: 'SMA', label: 'SMA|Styrene-maleic anhydride copolymer',
    displayName: 'styrene-maleic anhydride copolymer', defaultClass: 'Copolymer',
    aliases: ['Xiran', 'SMA resin', 'Dylark', 'styrene maleic anhydride'],
    elements: [
      { name: 'styrene unit', smiles: '[$]CC(c1ccccc1)[$]', polyGroup: '', note: '' },
      { name: 'maleic anhydride unit', smiles: '[$]C1C([$])C(=O)OC1=O', polyGroup: '', note: '無水マレイン酸の繰り返し単位（環は保持）' }
    ]
  },
  {
    key: 'PB', label: 'PB|Polybutadiene',
    displayName: 'polybutadiene (1,4-)', defaultClass: 'Homopolymer',
    aliases: ['Ricon', 'Ricon 100', 'Ricon 153', 'Ricon 154', 'Ricon 181', 'Buna CB', 'BR', 'butadiene rubber'],
    elements: [{ name: '1,4-butadiene unit', smiles: '[$]CC=CC[$]', polyGroup: '', note: 'cis/trans混合を想定。純cis: [$]C/C=C\\C[$]、純trans: [$]C/C=C/C[$]' }]
  },
  {
    key: 'PS', label: 'PS|Polystyrene',
    displayName: 'polystyrene', defaultClass: 'Homopolymer',
    aliases: ['GPPS', 'Styron', 'Styropor', 'polystyrene'],
    elements: [{ name: 'styrene unit', smiles: '[$]CC(c1ccccc1)[$]', polyGroup: '', note: '' }]
  },
  {
    key: 'BPVE', label: 'BPVE|Bis(trifluorovinyloxy)biphenyl vinyl ether',
    displayName: "4,4'-bis(2-trifluorovinyloxy)biphenyl", defaultClass: 'Homopolymer',
    aliases: ['trifluorovinyl ether', 'PFCB', 'perfluorocyclobutane'],
    elements: [{ name: 'BPVE（反応前モノマー構造）', smiles: 'FC(F)=C(F)Oc1ccc(-c2ccc(OC(F)=C(F)F)cc2)cc1', polyGroup: 'trifluorovinyl ether', note: '⚠ 反応前モノマー構造。反応後はパーフルオロシクロブタン環（[2+2]付加）を形成' }]
  },
  {
    key: 'Acrylic', label: 'Acrylic polymer',
    displayName: 'poly(methyl methacrylate) (PMMA)', defaultClass: 'Homopolymer',
    aliases: ['PMMA', 'Plexiglas', 'Perspex', 'Lucite', 'Delpet', 'Acrylite', 'poly(methyl methacrylate)', 'polymethyl methacrylate'],
    elements: [{ name: 'methyl methacrylate unit', smiles: '[$]CC(C)(C(=O)OC)[$]', polyGroup: '', note: '⚠ PMMaを例示。アクリル系は種類が多い（PGMA等）。実際の化学構造を確認して修正してください' }]
  },
  {
    key: 'PBz', label: 'PBz|Polybenzoxazine',
    displayName: 'polybenzoxazine', defaultClass: 'Homopolymer',
    aliases: ['benzoxazine', 'polybenzoxazine', 'BPA-a', 'Henkel benzoxazine'],
    elements: [{ name: '（ベンゾオキサジンの種類を確認して入力）', smiles: '', polyGroup: 'benzoxazine', note: '⚠ 開環重合後の構造はモノマー（フェノール・アミン・ホルムアルデヒドの組み合わせ）によって異なる' }]
  },
  {
    key: 'PBE', label: 'PBE|Propylene-based elastomer',
    displayName: 'ethylene-propylene rubber (EPR)', defaultClass: 'Copolymer',
    aliases: ['EPR', 'EPDM', 'Vistalon', 'Royalene', 'Keltan', 'Nordel', 'Engage', 'ethylene propylene rubber'],
    elements: [
      { name: 'ethylene unit', smiles: '[$]CC[$]', polyGroup: '', note: '' },
      { name: 'propylene unit', smiles: '[$]CC(C)[$]', polyGroup: '', note: 'EPR（エチレン-プロピレンゴム）の例。比率は論文記載値で入力' }
    ]
  },
  {
    key: 'PBO', label: 'PBO|Poly(p-phenylene benzobisoxazole)',
    displayName: 'poly(p-phenylene-2,6-benzobisoxazole)', defaultClass: 'Homopolymer',
    aliases: ['Zylon', 'polybenzoxazole', 'PBO fiber'],
    elements: [{ name: 'p-phenylene benzobisoxazole unit', smiles: '[$]c1ccc2nc3ccc([$])cc3oc2c1', polyGroup: '', note: '⚠ 繰り返し単位（要確認）' }]
  },
  {
    key: 'PU', label: 'PU|Polyurethane',
    displayName: 'polyurethane (MDI-BDO)', defaultClass: 'Copolymer',
    aliases: ['Pellethane', 'Tecoflex', 'Elasthane', 'Texin', 'Desmopan', 'MDI', 'TDI', 'polyurethane'],
    elements: [
      {
        name: 'BDO (1,4-butanediol) unit',
        smiles: '[$]OCCCCO[$]',
        polyGroup: '',
        note: 'ジオール（BDO）のアルキレン部分。[$] = 隣のウレタンカルボニルCとの結合点。実際のジオールに合わせて修正してください'
      },
      {
        name: 'MDI (4,4\'-methylenediphenyl diisocyanate) urethane unit',
        smiles: '[$]NC(=O)c1ccc(Cc2ccc(C(=O)N[$])cc2)cc1',
        polyGroup: '',
        note: 'ジイソシアネート（MDI）のウレタン部分。[$] = ジオール側OとのO-CO-N結合点。⚠ 要確認'
      }
    ]
  },
  {
    key: 'PO', label: 'PO|Polyolefin',
    displayName: 'polyethylene (PE)', defaultClass: 'Homopolymer',
    aliases: ['PE', 'PP', 'HDPE', 'LDPE', 'LLDPE', 'Marlex', 'Fortiflex', 'polyethylene', 'polypropylene', 'Zeonex', 'COC', 'COP'],
    elements: [{ name: 'ethylene unit', smiles: '[$]CC[$]', polyGroup: '', note: 'PEを例示。PP: [$]CC(C)[$]、LLDPE等は種類によって修正してください' }]
  },
  {
    key: 'Fluoropolymer', label: 'Fluoropolymer',
    displayName: 'polytetrafluoroethylene (PTFE)', defaultClass: 'Homopolymer',
    aliases: ['PTFE', 'FEP', 'PFA', 'PVDF', 'PCTFE', 'ETFE', 'Teflon', 'Dyneon', 'Neoflon', 'Kynar', 'Halar', 'Fluon', 'fluoropolymer'],
    elements: [{ name: 'tetrafluoroethylene unit', smiles: '[$]C(F)(F)C(F)(F)[$]', polyGroup: '', note: 'PTFEを例示。FEP・PVDF等は種類によって修正してください' }]
  },
  {
    key: 'LCP', label: 'LCP|Liquid-crystal polymer',
    displayName: 'liquid-crystal polymer (Vectra A: HBA/HNA)', defaultClass: 'Copolymer',
    aliases: ['Vectra', 'Vectra A', 'Vectra B', 'Xydar', 'Sumikasuper', 'Zenite', 'Siveras', 'Laperos', 'liquid crystal polymer'],
    elements: [
      {
        name: 'HBA (p-hydroxybenzoic acid) unit',
        smiles: '[$]Oc1ccc(C(=O)[$])cc1',
        polyGroup: '',
        note: 'Vectra A（HBA:HNA=73:27）の例。[$] = 隣のエステル結合点'
      },
      {
        name: 'HNA (6-hydroxy-2-naphthoic acid) unit',
        smiles: '[$]Oc1ccc2cc(C(=O)[$])ccc2c1',
        polyGroup: '',
        note: '⚠ Xydarなど他のLCPは構造が大きく異なる。具体的な化学構造を確認して修正してください'
      }
    ]
  },
  {
    key: 'PES', label: 'PES|Polyethersulfone',
    displayName: 'poly(oxy-1,4-phenylene-sulfonyl-1,4-phenylene) [PESU]', defaultClass: 'Homopolymer',
    aliases: ['PESU', 'Ultrason E', 'Victrex ES', 'Sumikaexcel PES', 'Veradel', 'Gafone', 'polyethersulfone', 'polyether sulfone'],
    elements: [{ name: 'oxy-phenylene-sulfonyl-phenylene unit', smiles: '[$]Oc1ccc(S(=O)(=O)c2ccc([$])cc2)cc1', polyGroup: '', note: 'フェニレンエーテル＋スルホン繰り返し単位。Ultrason E・Victrex ES 型。ビスフェノールAなし' }]
  },
  {
    key: 'PSU', label: 'PSU|Polysulfone (bisphenol A type)',
    displayName: 'poly(oxy-4,4\'-isopropylidene-diphenyleneoxy-diphenylene sulfone) [Udel type]', defaultClass: 'Homopolymer',
    aliases: ['PSF', 'Udel', 'Polysulfone P-1700', 'Mindel', 'polysulfone', 'bisphenol A polysulfone'],
    elements: [{ name: 'bisphenol A diphenyl sulfone repeat unit', smiles: '[$]Oc1ccc(C(C)(C)c2ccc(Oc3ccc(S(=O)(=O)c4ccc([$])cc4)cc3)cc2)cc1', polyGroup: '', note: 'ビスフェノールA型ポリスルホン（Udel P-1700型）。PESU（Ultrason E型）とは構造が異なる' }]
  },
  { key: 'Other',       label: 'Other',       displayName: '', defaultClass: 'Homopolymer', aliases: [], elements: [{ name: '', smiles: '', polyGroup: '', note: '' }] },
  { key: 'Crosslinker', label: 'Crosslinker', displayName: '', defaultClass: 'Homopolymer', aliases: [], elements: [{ name: '', smiles: '', polyGroup: '', note: '' }] }
];
