// =============================================
// ポリマー BigSMILES データベース
// 編集は polymer_db.json 側で行ってください
// このファイルは polymer_db.json から自動生成されます
// =============================================
// AUTO-GENERATED — do not edit by hand
const POLYMER_DB = [
  {
    "key": "PPE",
    "label": "PPE|Poly(phenylene ether)",
    "displayName": "poly(2,6-dimethyl-1,4-phenylene ether)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "Noryl",
      "SA120",
      "SA90",
      "PPO731",
      "SE100",
      "GFN2",
      "Xyron",
      "Iupiace",
      "Vestoran",
      "poly(phenylene oxide)",
      "polyphenylene ether",
      "polyphenylene oxide"
    ],
    "elements": [
      {
        "name": "2,6-dimethyl-1,4-phenylene ether unit",
        "smiles": "[$]Oc1c(C)cc([$])cc1C",
        "polyGroup": "",
        "note": ""
      }
    ],
    "monomers": [
      {
        "name": "2,6-dimethylphenol (2,6-xylenol)",
        "smiles": "Cc1cccc(C)c1O",
        "role": "phenol"
      }
    ]
  },
  {
    "key": "PPO",
    "label": "PPO|Poly(2,6-dimethyl-1,4-phenylene oxide)",
    "displayName": "poly(2,6-dimethyl-1,4-phenylene oxide)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "Noryl",
      "SA120",
      "Xyron",
      "Iupiace",
      "polyphenylene oxide",
      "poly(phenylene oxide)"
    ],
    "elements": [
      {
        "name": "2,6-dimethyl-1,4-phenylene oxide unit",
        "smiles": "[$]Oc1c(C)cc([$])cc1C",
        "polyGroup": "",
        "note": "PPO = PPE（ポリフェニレンエーテル）と同一ポリマー。Noryl（SABIC）が代表品。ExcelドロップダウンではPPEとして登録されている場合あり"
      }
    ],
    "monomers": [
      {
        "name": "2,6-dimethylphenol (2,6-xylenol)",
        "smiles": "Cc1cccc(C)c1O",
        "role": "phenol"
      }
    ]
  },
  {
    "key": "PPS",
    "label": "PPS|Poly(phenylene sulfide)",
    "displayName": "poly(p-phenylene sulfide)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "Ryton",
      "Fortron",
      "Torelina",
      "Durafide",
      "DIC PPS",
      "polyphenylene sulfide"
    ],
    "elements": [
      {
        "name": "p-phenylene sulfide unit",
        "smiles": "[$]Sc1ccc([$])cc1",
        "polyGroup": "",
        "note": "para位でS橋絡した芳香族スルフィド。メチル基なし。Ryton（Solvay）が代表品"
      }
    ],
    "monomers": [
      {
        "name": "1,4-dichlorobenzene",
        "smiles": "Clc1ccc(Cl)cc1",
        "role": "diaryl halide"
      },
      {
        "name": "sodium sulfide (Na2S)",
        "smiles": "[Na+].[Na+].[S-2]",
        "role": "sulfide source"
      }
    ]
  },
  {
    "key": "PMPS",
    "label": "PMPS|Poly(2,6-dimethyl-1,4-phenylene sulfide)",
    "displayName": "poly(2,6-dimethyl-1,4-phenylene sulfide)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [],
    "elements": [
      {
        "name": "2,6-dimethyl-1,4-phenylene sulfide unit",
        "smiles": "[$]Sc1c(C)cc([$])cc1C",
        "polyGroup": "",
        "note": "PPOのO→S置換体。2,6-ジメチルフェニレンスルフィド。アモルファス化により低Df・高周波特性に優れる"
      }
    ],
    "monomers": []
  },
  {
    "key": "PMPS-PPO",
    "label": "PMPS-PPO|Alternating copolymer (PMPS/PPO)",
    "displayName": "poly(2,6-dimethyl-1,4-phenylene sulfide-alt-2,6-dimethyl-1,4-phenylene oxide)",
    "defaultClass": "Copolymer",
    "dropdownHidden": true,
    "aliases": [
      "PMPS PPO copolymer",
      "sulfide ether copolymer"
    ],
    "elements": [
      {
        "name": "2,6-dimethyl-1,4-phenylene oxide unit (PPO)",
        "smiles": "[$]Oc1c(C)cc([$])cc1C",
        "polyGroup": "",
        "note": "PPO（エーテル）単位。交互共重合体の一成分"
      },
      {
        "name": "2,6-dimethyl-1,4-phenylene sulfide unit (PMPS)",
        "smiles": "[$]Sc1c(C)cc([$])cc1C",
        "polyGroup": "",
        "note": "PMPS（スルフィド）単位。O→S置換により分極率を低下させ周波数非依存の低Dfを実現"
      }
    ],
    "monomers": [
      {
        "name": "2,6-dimethylphenol",
        "smiles": "Cc1cccc(C)c1O",
        "role": "phenol"
      },
      {
        "name": "2,6-dimethylthiophenol",
        "smiles": "Cc1cccc(C)c1S",
        "role": "thiophenol"
      }
    ]
  },
  {
    "key": "BMI",
    "label": "BMI|Bismaleimide",
    "displayName": "4,4'-bismaleimidodiphenylmethane (MDA-BMI)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "Matrimid",
      "Matrimid 5292",
      "Compimide",
      "F-655",
      "BT resin",
      "bismaleimide triazine",
      "bismaleimide"
    ],
    "elements": [
      {
        "name": "MDA-BMI（反応前モノマー構造）",
        "smiles": "O=C1C=CC(=O)N1c1ccc(Cc2ccc(N3C(=O)C=CC3=O)cc2)cc1",
        "polyGroup": "maleimide",
        "note": "⚠ 反応前モノマー構造。反応後はマレイミド二重結合が開環した構造に修正してください"
      }
    ],
    "monomers": [
      {
        "name": "4,4'-methylenedianiline (MDA)",
        "smiles": "Nc1ccc(Cc2ccc(N)cc2)cc1",
        "role": "diamine"
      },
      {
        "name": "maleic anhydride",
        "smiles": "O=C1OC(=O)C=C1",
        "role": "anhydride"
      }
    ]
  },
  {
    "key": "CE",
    "label": "CE|Cyanate ester resin",
    "displayName": "bisphenol A dicyanate (BADCy)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "BADCy",
      "Primaset",
      "PT-30",
      "PT-60",
      "AroCy",
      "AroCy B-10",
      "AroCy L-10",
      "Lonza PT",
      "Cytec 5578",
      "cyanate ester",
      "polycyanurate",
      "2,2-bis(4-cyanatophenyl)propane"
    ],
    "elements": [
      {
        "name": "bisphenol A dicyanate（反応前モノマー構造）",
        "smiles": "N#COc1ccc(C(C)(C)c2ccc(OC#N)cc2)cc1",
        "polyGroup": "cyanate ester",
        "note": "⚠ 反応前モノマー構造。反応後はシアネート基3つが三量体化してトリアジン環を形成"
      }
    ],
    "monomers": [
      {
        "name": "bisphenol A",
        "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1",
        "role": "bisphenol"
      },
      {
        "name": "cyanogen bromide (BrCN)",
        "smiles": "BrC#N",
        "role": "cyanation agent"
      }
    ]
  },
  {
    "key": "DABPA",
    "label": "DABPA|Bisallyl bisphenol A",
    "displayName": "O,O'-diallyl bisphenol A",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "bisallyl bisphenol A",
      "diallyl bisphenol A",
      "allyl bisphenol A",
      "BABA",
      "DABA"
    ],
    "elements": [
      {
        "name": "O,O'-diallyl bisphenol A（反応前モノマー構造）",
        "smiles": "C=CCOc1ccc(C(C)(C)c2ccc(OCC=C)cc2)cc1",
        "polyGroup": "allyl ether",
        "note": "⚠ 反応前モノマー構造。CE・BMI 系の反応性共モノマー。2つのアリルエーテル基がBMIのマレイミドとen反応し架橋網目に取り込まれる"
      }
    ],
    "monomers": [
      {
        "name": "bisphenol A",
        "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1",
        "role": "bisphenol"
      },
      {
        "name": "allyl bromide",
        "smiles": "C=CCBr",
        "role": "alkyl halide"
      }
    ]
  },
  {
    "key": "Phenoxy",
    "label": "Phenoxy resin|high-molecular-weight BPA epoxy",
    "displayName": "bisphenol A phenoxy resin",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PKHB",
      "PKHC",
      "PKHH",
      "PKHA",
      "Paphen",
      "InChem phenoxy",
      "phenoxy resin"
    ],
    "elements": [
      {
        "name": "bisphenol A ether unit",
        "smiles": "[$]CC(O)COc1ccc(C(C)(C)c2ccc(O[$])cc2)cc1",
        "polyGroup": "",
        "note": "高分子量BPAエポキシ（フェノキシ樹脂）の繰り返し単位。エポキシ環が開環した構造"
      }
    ],
    "monomers": [
      {
        "name": "bisphenol A",
        "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1",
        "role": "bisphenol"
      },
      {
        "name": "epichlorohydrin",
        "smiles": "ClCC1CO1",
        "role": "epoxide"
      }
    ]
  },
  {
    "key": "Epoxy",
    "label": "Epoxy",
    "displayName": "diglycidyl ether of bisphenol A (DGEBA)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "DGEBA",
      "Araldite",
      "Epon",
      "D.E.R.",
      "jER",
      "Epikote",
      "YD-128",
      "bisphenol A epoxy",
      "BPA epoxy"
    ],
    "elements": [
      {
        "name": "DGEBA（反応前モノマー構造）",
        "smiles": "C1OC1COc1ccc(C(C)(C)c2ccc(OCC3CO3)cc2)cc1",
        "polyGroup": "epoxy",
        "note": "⚠ 反応前モノマー構造（DGEBA）。硬化剤の種類・配合によって反応後の構造が変わる"
      }
    ],
    "monomers": [
      {
        "name": "bisphenol A",
        "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1",
        "role": "bisphenol"
      },
      {
        "name": "epichlorohydrin",
        "smiles": "ClCC1CO1",
        "role": "epoxide"
      }
    ]
  },
  {
    "key": "PI",
    "label": "PI|Polyimide",
    "displayName": "polyimide (PMDA-ODA)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "Kapton",
      "Vespel",
      "Upilex",
      "Aurum",
      "Apical",
      "Matrimid PI",
      "polyimide film",
      "PMDA-ODA",
      "6FDA"
    ],
    "elements": [
      {
        "name": "ODA (4,4'-oxydianiline) unit",
        "smiles": "[$]c1ccc(Oc2ccc([$])cc2)cc1",
        "polyGroup": "",
        "note": "ジアミン（ODA）のアリール部分。[$] = PMDA側のN-imideとの結合点。PMDA-ODA以外のPIは種類に合わせて修正してください"
      },
      {
        "name": "PMDA (pyromellitic dianhydride) imide unit",
        "smiles": "O=C1N([$])C(=O)c2cc3c(cc12)C(=O)N([$])C3=O",
        "polyGroup": "",
        "note": "二無水物（PMDA）のジイミド部分。[$] = ODA側のアリール炭素との結合点。⚠ 要確認"
      }
    ],
    "monomers": [
      {
        "name": "4,4'-oxydianiline (ODA)",
        "smiles": "Nc1ccc(Oc2ccc(N)cc2)cc1",
        "role": "diamine"
      },
      {
        "name": "pyromellitic dianhydride (PMDA)",
        "smiles": "O=C1OC(=O)c2cc3C(=O)OC(=O)c3cc12",
        "role": "dianhydride"
      }
    ]
  },
  {
    "key": "SMA",
    "label": "SMA|Styrene-maleic anhydride copolymer",
    "displayName": "styrene-maleic anhydride copolymer",
    "defaultClass": "Copolymer",
    "aliases": [
      "Xiran",
      "SMA resin",
      "Dylark",
      "styrene maleic anhydride"
    ],
    "elements": [
      {
        "name": "styrene unit",
        "smiles": "[$]CC(c1ccccc1)[$]",
        "polyGroup": "",
        "note": ""
      },
      {
        "name": "maleic anhydride unit",
        "smiles": "[$]C1C([$])C(=O)OC1=O",
        "polyGroup": "",
        "note": "無水マレイン酸の繰り返し単位（環は保持）"
      }
    ],
    "monomers": [
      {
        "name": "styrene",
        "smiles": "C=Cc1ccccc1",
        "role": "vinyl monomer"
      },
      {
        "name": "maleic anhydride",
        "smiles": "O=C1OC(=O)C=C1",
        "role": "anhydride comonomer"
      }
    ]
  },
  {
    "key": "PB",
    "label": "PB|Polybutadiene",
    "displayName": "polybutadiene (1,4-)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "Ricon",
      "Ricon 100",
      "Ricon 153",
      "Ricon 154",
      "Ricon 181",
      "Buna CB",
      "BR",
      "butadiene rubber"
    ],
    "elements": [
      {
        "name": "1,4-butadiene unit",
        "smiles": "[$]CC=CC[$]",
        "polyGroup": "",
        "note": "cis/trans混合を想定。純cis: [$]C/C=C\\C[$]、純trans: [$]C/C=C/C[$]"
      }
    ],
    "monomers": [
      {
        "name": "1,3-butadiene",
        "smiles": "C=CC=C",
        "role": "diene"
      }
    ]
  },
  {
    "key": "PS",
    "label": "PS|Polystyrene",
    "displayName": "polystyrene",
    "defaultClass": "Homopolymer",
    "aliases": [
      "GPPS",
      "Styron",
      "Styropor",
      "polystyrene"
    ],
    "elements": [
      {
        "name": "styrene unit",
        "smiles": "[$]CC(c1ccccc1)[$]",
        "polyGroup": "",
        "note": ""
      }
    ],
    "monomers": [
      {
        "name": "styrene",
        "smiles": "C=Cc1ccccc1",
        "role": "vinyl monomer"
      }
    ]
  },
  {
    "key": "BPVE",
    "label": "BPVE|Bis(trifluorovinyloxy)biphenyl vinyl ether",
    "displayName": "4,4'-bis(2-trifluorovinyloxy)biphenyl",
    "defaultClass": "Homopolymer",
    "aliases": [
      "trifluorovinyl ether",
      "PFCB",
      "perfluorocyclobutane"
    ],
    "elements": [
      {
        "name": "BPVE(反応前モノマー構造)",
        "smiles": "FC(F)=C(F)Oc1ccc(-c2ccc(OC(F)=C(F)F)cc2)cc1",
        "polyGroup": "trifluorovinyl ether",
        "note": "⚠ 反応前モノマー構造。反応後はパーフルオロシクロブタン環([2+2]付加)を形成"
      }
    ],
    "monomers": [
      {
        "name": "4,4'-biphenol",
        "smiles": "Oc1ccc(-c2ccc(O)cc2)cc1",
        "role": "biphenol"
      },
      {
        "name": "bromotrifluoroethylene (BTFE)",
        "smiles": "FC(F)=C(F)Br",
        "role": "trifluorovinyl source"
      }
    ]
  },
  {
    "key": "Acrylic",
    "label": "Acrylic polymer",
    "displayName": "poly(methyl methacrylate) (PMMA)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PMMA",
      "Plexiglas",
      "Perspex",
      "Lucite",
      "Delpet",
      "Acrylite",
      "poly(methyl methacrylate)",
      "polymethyl methacrylate"
    ],
    "elements": [
      {
        "name": "methyl methacrylate unit",
        "smiles": "[$]CC(C)(C(=O)OC)[$]",
        "polyGroup": "",
        "note": "⚠ PMMaを例示。アクリル系は種類が多い(PGMA等)。実際の化学構造を確認して修正してください"
      }
    ],
    "monomers": [
      {
        "name": "methyl methacrylate (MMA)",
        "smiles": "C=C(C)C(=O)OC",
        "role": "vinyl monomer"
      }
    ]
  },
  {
    "key": "PBz",
    "label": "PBz|Polybenzoxazine",
    "displayName": "polybenzoxazine",
    "defaultClass": "Homopolymer",
    "aliases": [
      "benzoxazine",
      "polybenzoxazine",
      "BPA-a",
      "Henkel benzoxazine"
    ],
    "elements": [
      {
        "name": "(ベンゾオキサジンの種類を確認して入力)",
        "smiles": "",
        "polyGroup": "benzoxazine",
        "note": "⚠ 開環重合後の構造はモノマー(フェノール・アミン・ホルムアルデヒドの組み合わせ)によって異なる"
      }
    ],
    "monomers": [
      {
        "name": "bisphenol A",
        "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1",
        "role": "phenol"
      },
      {
        "name": "aniline",
        "smiles": "Nc1ccccc1",
        "role": "primary amine"
      },
      {
        "name": "formaldehyde",
        "smiles": "C=O",
        "role": "aldehyde"
      }
    ]
  },
  {
    "key": "PBE",
    "label": "PBE|Propylene-based elastomer",
    "displayName": "ethylene-propylene rubber (EPR)",
    "defaultClass": "Copolymer",
    "aliases": [
      "EPR",
      "EPDM",
      "Vistalon",
      "Royalene",
      "Keltan",
      "Nordel",
      "Engage",
      "ethylene propylene rubber"
    ],
    "elements": [
      {
        "name": "ethylene unit",
        "smiles": "[$]CC[$]",
        "polyGroup": "",
        "note": ""
      },
      {
        "name": "propylene unit",
        "smiles": "[$]CC(C)[$]",
        "polyGroup": "",
        "note": "EPR(エチレン-プロピレンゴム)の例。比率は論文記載値で入力"
      }
    ],
    "monomers": [
      {
        "name": "ethylene",
        "smiles": "C=C",
        "role": "olefin"
      },
      {
        "name": "propylene",
        "smiles": "C=CC",
        "role": "olefin"
      }
    ]
  },
  {
    "key": "PBO",
    "label": "PBO|Poly(p-phenylene benzobisoxazole)",
    "displayName": "poly(p-phenylene-2,6-benzobisoxazole)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "Zylon",
      "polybenzoxazole",
      "PBO fiber"
    ],
    "elements": [
      {
        "name": "p-phenylene benzobisoxazole unit",
        "smiles": "[$]c1ccc2nc3ccc([$])cc3oc2c1",
        "polyGroup": "",
        "note": "⚠ 繰り返し単位(要確認)"
      }
    ],
    "monomers": [
      {
        "name": "4,6-diaminoresorcinol (DAR)",
        "smiles": "Nc1cc(N)c(O)cc1O",
        "role": "diaminodiol"
      },
      {
        "name": "terephthalic acid",
        "smiles": "OC(=O)c1ccc(C(=O)O)cc1",
        "role": "diacid"
      }
    ]
  },
  {
    "key": "PU",
    "label": "PU|Polyurethane",
    "displayName": "polyurethane (MDI-BDO)",
    "defaultClass": "Copolymer",
    "aliases": [
      "Pellethane",
      "Tecoflex",
      "Elasthane",
      "Texin",
      "Desmopan",
      "MDI",
      "TDI",
      "polyurethane"
    ],
    "elements": [
      {
        "name": "BDO (1,4-butanediol) unit",
        "smiles": "[$]OCCCCO[$]",
        "polyGroup": "",
        "note": "ジオール(BDO)のアルキレン部分。[$] = 隣のウレタンカルボニルCとの結合点。実際のジオールに合わせて修正してください"
      },
      {
        "name": "MDI (4,4'-methylenediphenyl diisocyanate) urethane unit",
        "smiles": "[$]NC(=O)c1ccc(Cc2ccc(C(=O)N[$])cc2)cc1",
        "polyGroup": "",
        "note": "ジイソシアネート(MDI)のウレタン部分。[$] = ジオール側OとのO-CO-N結合点。⚠ 要確認"
      }
    ],
    "monomers": [
      {
        "name": "1,4-butanediol (BDO)",
        "smiles": "OCCCCO",
        "role": "diol"
      },
      {
        "name": "MDI (4,4'-methylenediphenyl diisocyanate)",
        "smiles": "O=C=Nc1ccc(Cc2ccc(N=C=O)cc2)cc1",
        "role": "diisocyanate"
      }
    ]
  },
  {
    "key": "PO",
    "label": "PO|Polyolefin",
    "displayName": "polyethylene (PE)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PE",
      "PP",
      "HDPE",
      "LDPE",
      "LLDPE",
      "Marlex",
      "Fortiflex",
      "polyethylene",
      "polypropylene",
      "Zeonex",
      "COC",
      "COP"
    ],
    "elements": [
      {
        "name": "ethylene unit",
        "smiles": "[$]CC[$]",
        "polyGroup": "",
        "note": "PEを例示。PP: [$]CC(C)[$]、LLDPE等は種類によって修正してください"
      }
    ],
    "monomers": [
      {
        "name": "ethylene",
        "smiles": "C=C",
        "role": "olefin"
      }
    ]
  },
  {
    "key": "Fluoropolymer",
    "label": "Fluoropolymer",
    "displayName": "polytetrafluoroethylene (PTFE)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PTFE",
      "FEP",
      "PFA",
      "PVDF",
      "PCTFE",
      "ETFE",
      "Teflon",
      "Dyneon",
      "Neoflon",
      "Kynar",
      "Halar",
      "Fluon",
      "fluoropolymer"
    ],
    "elements": [
      {
        "name": "tetrafluoroethylene unit",
        "smiles": "[$]C(F)(F)C(F)(F)[$]",
        "polyGroup": "",
        "note": "PTFEを例示。FEP・PVDF等は種類によって修正してください"
      }
    ],
    "monomers": [
      {
        "name": "tetrafluoroethylene (TFE)",
        "smiles": "FC(F)=C(F)F",
        "role": "fluoroolefin"
      }
    ]
  },
  {
    "key": "LCP",
    "label": "LCP|Liquid-crystal polymer",
    "displayName": "liquid-crystal polymer (Vectra A: HBA/HNA)",
    "defaultClass": "Copolymer",
    "aliases": [
      "Vectra",
      "Vectra A",
      "Vectra B",
      "Xydar",
      "Sumikasuper",
      "Zenite",
      "Siveras",
      "Laperos",
      "liquid crystal polymer"
    ],
    "elements": [
      {
        "name": "HBA (p-hydroxybenzoic acid) unit",
        "smiles": "[$]Oc1ccc(C(=O)[$])cc1",
        "polyGroup": "",
        "note": "Vectra A(HBA:HNA=73:27)の例。[$] = 隣のエステル結合点"
      },
      {
        "name": "HNA (6-hydroxy-2-naphthoic acid) unit",
        "smiles": "[$]Oc1ccc2cc(C(=O)[$])ccc2c1",
        "polyGroup": "",
        "note": "⚠ Xydarなど他のLCPは構造が大きく異なる。具体的な化学構造を確認して修正してください"
      }
    ],
    "monomers": [
      {
        "name": "p-hydroxybenzoic acid (HBA)",
        "smiles": "OC(=O)c1ccc(O)cc1",
        "role": "hydroxyacid"
      },
      {
        "name": "6-hydroxy-2-naphthoic acid (HNA)",
        "smiles": "OC(=O)c1ccc2cc(O)ccc2c1",
        "role": "hydroxyacid"
      }
    ]
  },
  {
    "key": "PES",
    "label": "PES|Polyethersulfone",
    "displayName": "poly(oxy-1,4-phenylene-sulfonyl-1,4-phenylene) [PESU]",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PESU",
      "Ultrason E",
      "Victrex ES",
      "Sumikaexcel PES",
      "Veradel",
      "Gafone",
      "polyethersulfone",
      "polyether sulfone"
    ],
    "elements": [
      {
        "name": "oxy-phenylene-sulfonyl-phenylene unit",
        "smiles": "[$]Oc1ccc(S(=O)(=O)c2ccc([$])cc2)cc1",
        "polyGroup": "",
        "note": "フェニレンエーテル＋スルホン繰り返し単位。Ultrason E・Victrex ES 型。ビスフェノールAなし"
      }
    ],
    "monomers": [
      {
        "name": "4,4'-dihydroxydiphenyl sulfone (bisphenol S)",
        "smiles": "Oc1ccc(S(=O)(=O)c2ccc(O)cc2)cc1",
        "role": "bisphenol"
      },
      {
        "name": "4,4'-dichlorodiphenyl sulfone (DCDPS)",
        "smiles": "Clc1ccc(S(=O)(=O)c2ccc(Cl)cc2)cc1",
        "role": "diaryl halide"
      }
    ]
  },
  {
    "key": "PAES-BHF",
    "label": "PAES-BHF|Poly(arylene ether sulfone) with fluorene",
    "displayName": "poly(9,9-bis(4-phenyleneoxy)fluorene-alt-4,4'-diphenylene sulfone)",
    "defaultClass": "Copolymer",
    "dropdownHidden": true,
    "aliases": [
      "BHF",
      "DFDPS",
      "9,9-bis(4-hydroxyphenyl)fluorene",
      "di-(4-fluorophenyl)sulfone",
      "4,4'-difluorodiphenyl sulfone",
      "fluorene PES",
      "fluorene polysulfone",
      "PAES",
      "PAE-BHF"
    ],
    "elements": [
      {
        "name": "9,9-bis(4-hydroxyphenyl)fluorene (BHF) unit",
        "smiles": "[$]Oc1ccc(C2(c3ccc(O[$])cc3)c3ccccc3-c3ccccc32)cc1",
        "polyGroup": "",
        "note": "BHF 由来フルオレンユニット。[$] = DFDPS 側フェニレンとのO-エーテル結合点"
      },
      {
        "name": "di-(4-fluorophenyl)sulfone (DFDPS) unit",
        "smiles": "[$]c1ccc(S(=O)(=O)c2ccc([$])cc2)cc1",
        "polyGroup": "",
        "note": "DFDPS のF脱離後のジフェニルスルホンユニット。[$] = BHF 側のO-エーテル結合点"
      }
    ],
    "monomers": [
      {
        "name": "9,9-bis(4-hydroxyphenyl)fluorene (BHF)",
        "smiles": "Oc1ccc(C2(c3ccc(O)cc3)c3ccccc3-c3ccccc32)cc1",
        "role": "bisphenol"
      },
      {
        "name": "4,4'-difluorodiphenyl sulfone (DFDPS)",
        "smiles": "Fc1ccc(S(=O)(=O)c2ccc(F)cc2)cc1",
        "role": "diaryl halide"
      }
    ]
  },
  {
    "key": "PSU",
    "label": "PSU|Polysulfone (bisphenol A type)",
    "displayName": "poly(oxy-4,4'-isopropylidene-diphenyleneoxy-diphenylene sulfone) [Udel type]",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PSF",
      "Udel",
      "Polysulfone P-1700",
      "Mindel",
      "polysulfone",
      "bisphenol A polysulfone"
    ],
    "elements": [
      {
        "name": "bisphenol A diphenyl sulfone repeat unit",
        "smiles": "[$]Oc1ccc(C(C)(C)c2ccc(Oc3ccc(S(=O)(=O)c4ccc([$])cc4)cc3)cc2)cc1",
        "polyGroup": "",
        "note": "ビスフェノールA型ポリスルホン(Udel P-1700型)。PESU(Ultrason E型)とは構造が異なる"
      }
    ],
    "monomers": [
      {
        "name": "bisphenol A",
        "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1",
        "role": "bisphenol"
      },
      {
        "name": "4,4'-dichlorodiphenyl sulfone (DCDPS)",
        "smiles": "Clc1ccc(S(=O)(=O)c2ccc(Cl)cc2)cc1",
        "role": "diaryl halide"
      }
    ]
  },
  {
    "key": "SA9000",
    "label": "SA9000|Methacrylate-terminated PPE (MA-PPE)",
    "displayName": "α,ω-bis(methacryloyloxy)-poly(2,6-dimethyl-1,4-phenylene ether) [SABIC SA9000]",
    "defaultClass": "Copolymer",
    "dropdownHidden": true,
    "aliases": [
      "SA9000",
      "SA-9000",
      "SABIC SA9000",
      "methacrylate PPE",
      "MA-PPE",
      "reactive PPE",
      "vinyl PPE",
      "telechelic PPE"
    ],
    "elements": [
      {
        "name": "methacrylate end-cap unit",
        "smiles": "CC(=C)C(=O)Oc1c(C)cc([$])cc1C",
        "polyGroup": "methacrylate",
        "note": "オリゴマー鎖の両端に付加する末端メタクリル基ユニット。ラジカル硬化で架橋点になる"
      },
      {
        "name": "2,6-dimethyl-1,4-phenylene ether repeat unit",
        "smiles": "[$]Oc1c(C)cc([$])cc1C",
        "polyGroup": "",
        "note": "内部の PPE 繰り返し単位（通常 n ≈ 5〜15 の低分子量オリゴマー）"
      }
    ],
    "monomers": [
      {
        "name": "2,6-dimethylphenol (2,6-xylenol)",
        "smiles": "Cc1cccc(C)c1O",
        "role": "phenol"
      },
      {
        "name": "methacryloyl chloride",
        "smiles": "CC(=C)C(=O)Cl",
        "role": "acryloyl chloride"
      },
      {
        "name": "methacrylic anhydride",
        "smiles": "CC(=C)C(=O)OC(=O)C(C)=C",
        "role": "acryloyl anhydride (alt.)"
      }
    ]
  },
  {
    "key": "BPA",
    "label": "BPA|Bisphenol A",
    "displayName": "2,2-bis(4-hydroxyphenyl)propane (bisphenol A)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "bisphenol A",
      "2,2-bis(4-hydroxyphenyl)propane",
      "4,4'-isopropylidenediphenol",
      "BPA",
      "DIAN",
      "para-bis-A"
    ],
    "elements": [
      {
        "name": "bisphenol A",
        "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1",
        "polyGroup": "bisphenol",
        "note": "エポキシ・PC・PSU・CE等の主原料。化合物SMILES（[$]なし）"
      }
    ],
    "monomers": []
  },
  {
    "key": "BPS",
    "label": "BPS|Bisphenol S",
    "displayName": "4,4'-dihydroxydiphenyl sulfone (bisphenol S)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "bisphenol S",
      "4,4'-dihydroxydiphenyl sulfone",
      "DHDPS",
      "BPS",
      "bis(4-hydroxyphenyl) sulfone"
    ],
    "elements": [
      {
        "name": "bisphenol S",
        "smiles": "Oc1ccc(S(=O)(=O)c2ccc(O)cc2)cc1",
        "polyGroup": "bisphenol",
        "note": "PES・PPSU 系の主原料。BPA より熱安定性・剛性高い"
      }
    ],
    "monomers": []
  },
  {
    "key": "BHF",
    "label": "BHF|9,9-Bis(4-hydroxyphenyl)fluorene",
    "displayName": "9,9-bis(4-hydroxyphenyl)fluorene",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "BHF",
      "9,9-bis(4-hydroxyphenyl)fluorene",
      "BPFL",
      "bisphenol FL",
      "fluorene bisphenol"
    ],
    "elements": [
      {
        "name": "BHF",
        "smiles": "Oc1ccc(C2(c3ccc(O)cc3)c3ccccc3-c3ccccc32)cc1",
        "polyGroup": "bisphenol",
        "note": "フルオレンビスフェノール。低誘電・高屈折率ポリマー原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "26XYL",
    "label": "26XYL|2,6-Dimethylphenol",
    "displayName": "2,6-dimethylphenol (2,6-xylenol)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "2,6-dimethylphenol",
      "2,6-xylenol",
      "26-xylenol",
      "DMP",
      "26DMP",
      "2,6-DMP"
    ],
    "elements": [
      {
        "name": "2,6-dimethylphenol",
        "smiles": "Cc1cccc(C)c1O",
        "polyGroup": "phenol",
        "note": "PPE / PPO 主原料。酸化重合で PPE を与える"
      }
    ],
    "monomers": []
  },
  {
    "key": "26DMTP",
    "label": "26DMTP|2,6-Dimethylthiophenol",
    "displayName": "2,6-dimethylthiophenol",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "2,6-dimethylthiophenol",
      "2,6-dimethylbenzenethiol",
      "26DMTP"
    ],
    "elements": [
      {
        "name": "2,6-dimethylthiophenol",
        "smiles": "Cc1cccc(C)c1S",
        "polyGroup": "thiophenol",
        "note": "PMPS（フェニレンスルフィド）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "BP44",
    "label": "BP44|4,4'-Biphenol",
    "displayName": "4,4'-biphenol (4,4'-dihydroxybiphenyl)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "4,4'-biphenol",
      "4,4'-dihydroxybiphenyl",
      "biphenol",
      "BP",
      "BPH"
    ],
    "elements": [
      {
        "name": "4,4'-biphenol",
        "smiles": "Oc1ccc(-c2ccc(O)cc2)cc1",
        "polyGroup": "biphenol",
        "note": "BPVE・PSU 系の共モノマー"
      }
    ],
    "monomers": []
  },
  {
    "key": "HQ",
    "label": "HQ|Hydroquinone",
    "displayName": "hydroquinone (1,4-benzenediol)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "hydroquinone",
      "1,4-benzenediol",
      "1,4-dihydroxybenzene",
      "HQ",
      "quinol"
    ],
    "elements": [
      {
        "name": "hydroquinone",
        "smiles": "Oc1ccc(O)cc1",
        "polyGroup": "phenol",
        "note": "PEEK・LCP 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "MDA",
    "label": "MDA|4,4'-Methylenedianiline",
    "displayName": "4,4'-methylenedianiline",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "MDA",
      "4,4'-methylenedianiline",
      "4,4'-diaminodiphenylmethane",
      "DDM",
      "methylene dianiline"
    ],
    "elements": [
      {
        "name": "MDA",
        "smiles": "Nc1ccc(Cc2ccc(N)cc2)cc1",
        "polyGroup": "diamine",
        "note": "BMI・エポキシ硬化剤主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "ODA",
    "label": "ODA|4,4'-Oxydianiline",
    "displayName": "4,4'-oxydianiline",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "ODA",
      "4,4'-oxydianiline",
      "4,4'-diaminodiphenyl ether",
      "DPE",
      "diphenylether diamine"
    ],
    "elements": [
      {
        "name": "ODA",
        "smiles": "Nc1ccc(Oc2ccc(N)cc2)cc1",
        "polyGroup": "diamine",
        "note": "PMDA-ODA PI（Kapton）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "PPD",
    "label": "PPD|p-Phenylenediamine",
    "displayName": "p-phenylenediamine (1,4-diaminobenzene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "PPD",
      "p-phenylenediamine",
      "1,4-phenylenediamine",
      "para-phenylenediamine"
    ],
    "elements": [
      {
        "name": "p-phenylenediamine",
        "smiles": "Nc1ccc(N)cc1",
        "polyGroup": "diamine",
        "note": "Kevlar（p-アラミド）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "MPD",
    "label": "MPD|m-Phenylenediamine",
    "displayName": "m-phenylenediamine (1,3-diaminobenzene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "MPD",
      "m-phenylenediamine",
      "1,3-phenylenediamine",
      "meta-phenylenediamine"
    ],
    "elements": [
      {
        "name": "m-phenylenediamine",
        "smiles": "Nc1cccc(N)c1",
        "polyGroup": "diamine",
        "note": "Nomex（m-アラミド）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "HMDA",
    "label": "HMDA|Hexamethylenediamine",
    "displayName": "1,6-hexanediamine (hexamethylenediamine)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "HMDA",
      "hexamethylenediamine",
      "1,6-hexanediamine",
      "1,6-diaminohexane"
    ],
    "elements": [
      {
        "name": "HMDA",
        "smiles": "NCCCCCCN",
        "polyGroup": "diamine",
        "note": "PA66（Nylon 66）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "ANI",
    "label": "ANI|Aniline",
    "displayName": "aniline (aminobenzene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "aniline",
      "phenylamine",
      "aminobenzene"
    ],
    "elements": [
      {
        "name": "aniline",
        "smiles": "Nc1ccccc1",
        "polyGroup": "amine",
        "note": "ベンゾオキサジン等の一級アミン原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "PMDA",
    "label": "PMDA|Pyromellitic Dianhydride",
    "displayName": "pyromellitic dianhydride",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "PMDA",
      "pyromellitic dianhydride",
      "benzene-1,2,4,5-tetracarboxylic dianhydride"
    ],
    "elements": [
      {
        "name": "PMDA",
        "smiles": "O=C1OC(=O)c2cc3C(=O)OC(=O)c3cc12",
        "polyGroup": "dianhydride",
        "note": "PI（PMDA-ODA/Kapton）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "6FDA",
    "label": "6FDA|Hexafluoroisopropylidene Dianhydride",
    "displayName": "4,4'-(hexafluoroisopropylidene)diphthalic anhydride",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "6FDA",
      "hexafluoroisopropylidene diphthalic anhydride",
      "HFDA"
    ],
    "elements": [
      {
        "name": "6FDA",
        "smiles": "O=C1OC(=O)c2cc(C(c3cc4C(=O)OC(=O)c4cc3)(C(F)(F)F)C(F)(F)F)ccc12",
        "polyGroup": "dianhydride",
        "note": "低誘電PI・高透明PI（Cardo系）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "BPDA",
    "label": "BPDA|3,3',4,4'-Biphenyltetracarboxylic Dianhydride",
    "displayName": "3,3',4,4'-biphenyltetracarboxylic dianhydride",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "BPDA",
      "3,3',4,4'-biphenyltetracarboxylic dianhydride",
      "biphenyl dianhydride"
    ],
    "elements": [
      {
        "name": "BPDA",
        "smiles": "O=C1OC(=O)c2cc(-c3ccc4C(=O)OC(=O)c4c3)ccc12",
        "polyGroup": "dianhydride",
        "note": "耐熱PI（Upilex-S）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "TPA",
    "label": "TPA|Terephthalic Acid",
    "displayName": "terephthalic acid",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "TPA",
      "terephthalic acid",
      "1,4-benzenedicarboxylic acid",
      "PTA"
    ],
    "elements": [
      {
        "name": "terephthalic acid",
        "smiles": "OC(=O)c1ccc(C(=O)O)cc1",
        "polyGroup": "diacid",
        "note": "PET・PBT・PBO 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "IPA",
    "label": "IPA|Isophthalic Acid",
    "displayName": "isophthalic acid",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "IPA",
      "isophthalic acid",
      "1,3-benzenedicarboxylic acid"
    ],
    "elements": [
      {
        "name": "isophthalic acid",
        "smiles": "OC(=O)c1cccc(C(=O)O)c1",
        "polyGroup": "diacid",
        "note": "共重合PET・PPS 修飾原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "ADA",
    "label": "ADA|Adipic Acid",
    "displayName": "adipic acid (hexanedioic acid)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "adipic acid",
      "hexanedioic acid",
      "ADA"
    ],
    "elements": [
      {
        "name": "adipic acid",
        "smiles": "OC(=O)CCCCC(=O)O",
        "polyGroup": "diacid",
        "note": "PA66・PU・PBS 原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "MA",
    "label": "MA|Maleic Anhydride",
    "displayName": "maleic anhydride (2,5-furandione)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "maleic anhydride",
      "MA",
      "MAH",
      "2,5-furandione"
    ],
    "elements": [
      {
        "name": "maleic anhydride",
        "smiles": "O=C1OC(=O)C=C1",
        "polyGroup": "anhydride",
        "note": "BMI・SMA 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "TPC",
    "label": "TPC|Terephthaloyl Chloride",
    "displayName": "terephthaloyl chloride (1,4-benzenedicarbonyl dichloride)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "TPC",
      "terephthaloyl chloride",
      "1,4-benzenedicarbonyl dichloride"
    ],
    "elements": [
      {
        "name": "terephthaloyl chloride",
        "smiles": "O=C(Cl)c1ccc(C(=O)Cl)cc1",
        "polyGroup": "acid chloride",
        "note": "Kevlar・p-アラミド主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "IPC",
    "label": "IPC|Isophthaloyl Chloride",
    "displayName": "isophthaloyl chloride",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "IPC",
      "isophthaloyl chloride",
      "1,3-benzenedicarbonyl dichloride"
    ],
    "elements": [
      {
        "name": "isophthaloyl chloride",
        "smiles": "O=C(Cl)c1cccc(C(=O)Cl)c1",
        "polyGroup": "acid chloride",
        "note": "Nomex・m-アラミド主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "BDO",
    "label": "BDO|1,4-Butanediol",
    "displayName": "1,4-butanediol",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "BDO",
      "1,4-butanediol",
      "tetramethylene glycol"
    ],
    "elements": [
      {
        "name": "1,4-butanediol",
        "smiles": "OCCCCO",
        "polyGroup": "diol",
        "note": "PU・PBT 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "EG",
    "label": "EG|Ethylene Glycol",
    "displayName": "ethylene glycol (1,2-ethanediol)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "EG",
      "ethylene glycol",
      "1,2-ethanediol",
      "MEG",
      "monoethylene glycol"
    ],
    "elements": [
      {
        "name": "ethylene glycol",
        "smiles": "OCCO",
        "polyGroup": "diol",
        "note": "PET 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "EO",
    "label": "EO|Ethylene Oxide",
    "displayName": "ethylene oxide (oxirane)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "EO",
      "ethylene oxide",
      "oxirane"
    ],
    "elements": [
      {
        "name": "ethylene oxide",
        "smiles": "C1CO1",
        "polyGroup": "epoxide",
        "note": "PEG/PEO 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "ECH",
    "label": "ECH|Epichlorohydrin",
    "displayName": "epichlorohydrin",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "ECH",
      "epichlorohydrin",
      "1-chloro-2,3-epoxypropane"
    ],
    "elements": [
      {
        "name": "epichlorohydrin",
        "smiles": "ClCC1CO1",
        "polyGroup": "epoxide",
        "note": "エポキシ樹脂・フェノキシ樹脂主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "CPL",
    "label": "CPL|Caprolactam",
    "displayName": "ε-caprolactam",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "caprolactam",
      "ε-caprolactam",
      "CPL",
      "CL",
      "azepan-2-one"
    ],
    "elements": [
      {
        "name": "caprolactam",
        "smiles": "O=C1CCCCCN1",
        "polyGroup": "lactam",
        "note": "PA6（Nylon 6）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "LAC",
    "label": "LAC|Lactide",
    "displayName": "lactide (3,6-dimethyl-1,4-dioxane-2,5-dione)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "lactide",
      "L-lactide",
      "D,L-lactide",
      "3,6-dimethyl-1,4-dioxane-2,5-dione"
    ],
    "elements": [
      {
        "name": "lactide",
        "smiles": "CC1OC(=O)C(C)OC1=O",
        "polyGroup": "cyclic ester",
        "note": "PLA 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "MDI",
    "label": "MDI|4,4'-Methylenediphenyl Diisocyanate",
    "displayName": "4,4'-methylenediphenyl diisocyanate",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "MDI",
      "4,4'-methylenediphenyl diisocyanate",
      "diphenylmethane diisocyanate"
    ],
    "elements": [
      {
        "name": "MDI",
        "smiles": "O=C=Nc1ccc(Cc2ccc(N=C=O)cc2)cc1",
        "polyGroup": "diisocyanate",
        "note": "PU 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "TDI",
    "label": "TDI|Toluene Diisocyanate",
    "displayName": "2,4-toluene diisocyanate",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "TDI",
      "2,4-TDI",
      "2,6-TDI",
      "toluene diisocyanate",
      "toluene-2,4-diisocyanate"
    ],
    "elements": [
      {
        "name": "2,4-TDI",
        "smiles": "O=C=Nc1ccc(C)c(N=C=O)c1",
        "polyGroup": "diisocyanate",
        "note": "軟質PU主原料（2,4- / 2,6- 異性体混合が多い）"
      }
    ],
    "monomers": []
  },
  {
    "key": "DCDPS",
    "label": "DCDPS|4,4'-Dichlorodiphenyl Sulfone",
    "displayName": "4,4'-dichlorodiphenyl sulfone",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "DCDPS",
      "4,4'-dichlorodiphenyl sulfone",
      "bis(4-chlorophenyl) sulfone"
    ],
    "elements": [
      {
        "name": "DCDPS",
        "smiles": "Clc1ccc(S(=O)(=O)c2ccc(Cl)cc2)cc1",
        "polyGroup": "diaryl halide",
        "note": "PSU・PES 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "DFDPS",
    "label": "DFDPS|4,4'-Difluorodiphenyl Sulfone",
    "displayName": "4,4'-difluorodiphenyl sulfone",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "DFDPS",
      "4,4'-difluorodiphenyl sulfone",
      "bis(4-fluorophenyl) sulfone"
    ],
    "elements": [
      {
        "name": "DFDPS",
        "smiles": "Fc1ccc(S(=O)(=O)c2ccc(F)cc2)cc1",
        "polyGroup": "diaryl halide",
        "note": "高分子量 PES / PSU 主原料。DCDPS より高活性"
      }
    ],
    "monomers": []
  },
  {
    "key": "DFBP",
    "label": "DFBP|4,4'-Difluorobenzophenone",
    "displayName": "4,4'-difluorobenzophenone",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "DFBP",
      "4,4'-difluorobenzophenone",
      "bis(4-fluorophenyl) ketone"
    ],
    "elements": [
      {
        "name": "DFBP",
        "smiles": "O=C(c1ccc(F)cc1)c1ccc(F)cc1",
        "polyGroup": "diaryl halide",
        "note": "PEEK・PEK 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "DCB14",
    "label": "DCB14|1,4-Dichlorobenzene",
    "displayName": "1,4-dichlorobenzene (para-dichlorobenzene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "1,4-dichlorobenzene",
      "para-dichlorobenzene",
      "p-DCB",
      "DCB"
    ],
    "elements": [
      {
        "name": "1,4-dichlorobenzene",
        "smiles": "Clc1ccc(Cl)cc1",
        "polyGroup": "diaryl halide",
        "note": "PPS 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "STY",
    "label": "STY|Styrene",
    "displayName": "styrene",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "styrene",
      "vinylbenzene",
      "phenylethylene",
      "STY"
    ],
    "elements": [
      {
        "name": "styrene",
        "smiles": "C=Cc1ccccc1",
        "polyGroup": "vinyl",
        "note": "PS・SMA・ABS・SBR 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "MMA",
    "label": "MMA|Methyl Methacrylate",
    "displayName": "methyl methacrylate",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "MMA",
      "methyl methacrylate",
      "methyl 2-methylpropenoate"
    ],
    "elements": [
      {
        "name": "MMA",
        "smiles": "C=C(C)C(=O)OC",
        "polyGroup": "vinyl",
        "note": "PMMA 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "AN",
    "label": "AN|Acrylonitrile",
    "displayName": "acrylonitrile (2-propenenitrile)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "acrylonitrile",
      "AN",
      "vinyl cyanide",
      "2-propenenitrile"
    ],
    "elements": [
      {
        "name": "acrylonitrile",
        "smiles": "C=CC#N",
        "polyGroup": "vinyl",
        "note": "ABS・SAN・PAN 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "VCL",
    "label": "VCL|Vinyl Chloride",
    "displayName": "vinyl chloride",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "vinyl chloride",
      "chloroethylene",
      "VCM",
      "VCL"
    ],
    "elements": [
      {
        "name": "vinyl chloride",
        "smiles": "C=CCl",
        "polyGroup": "vinyl",
        "note": "PVC 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "VDF",
    "label": "VDF|Vinylidene Fluoride",
    "displayName": "1,1-difluoroethylene (vinylidene fluoride)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "VDF",
      "vinylidene fluoride",
      "1,1-difluoroethylene",
      "VF2"
    ],
    "elements": [
      {
        "name": "VDF",
        "smiles": "C=C(F)F",
        "polyGroup": "vinyl",
        "note": "PVDF 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "TFE",
    "label": "TFE|Tetrafluoroethylene",
    "displayName": "tetrafluoroethylene",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "TFE",
      "tetrafluoroethylene",
      "perfluoroethylene"
    ],
    "elements": [
      {
        "name": "TFE",
        "smiles": "FC(F)=C(F)F",
        "polyGroup": "vinyl",
        "note": "PTFE・FEP・PFA 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "ETH",
    "label": "ETH|Ethylene",
    "displayName": "ethylene (ethene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "ethylene",
      "ethene",
      "ETH"
    ],
    "elements": [
      {
        "name": "ethylene",
        "smiles": "C=C",
        "polyGroup": "olefin",
        "note": "PE・EVA・EPDM 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "PRP",
    "label": "PRP|Propylene",
    "displayName": "propylene (propene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "propylene",
      "propene",
      "PRP"
    ],
    "elements": [
      {
        "name": "propylene",
        "smiles": "C=CC",
        "polyGroup": "olefin",
        "note": "PP・EPDM 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "BD",
    "label": "BD|1,3-Butadiene",
    "displayName": "1,3-butadiene",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "1,3-butadiene",
      "BD",
      "butadiene"
    ],
    "elements": [
      {
        "name": "1,3-butadiene",
        "smiles": "C=CC=C",
        "polyGroup": "diene",
        "note": "PB・SBS・SBR・ABS・NBR 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "ISO",
    "label": "ISO|Isoprene",
    "displayName": "isoprene (2-methyl-1,3-butadiene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "isoprene",
      "2-methyl-1,3-butadiene",
      "ISO"
    ],
    "elements": [
      {
        "name": "isoprene",
        "smiles": "C=C(C)C=C",
        "polyGroup": "diene",
        "note": "IR・NR・SIS 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "NBRN",
    "label": "NBRN|Norbornene",
    "displayName": "norbornene (bicyclo[2.2.1]hept-2-ene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "norbornene",
      "bicycloheptene",
      "NBRN"
    ],
    "elements": [
      {
        "name": "norbornene",
        "smiles": "C1CC2CC1C=C2",
        "polyGroup": "cyclic olefin",
        "note": "COC (Topas) 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "4MP",
    "label": "4MP|4-Methyl-1-pentene",
    "displayName": "4-methyl-1-pentene",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "4-methyl-1-pentene",
      "4MP1P",
      "4MP"
    ],
    "elements": [
      {
        "name": "4-methyl-1-pentene",
        "smiles": "CC(C)CC=C",
        "polyGroup": "olefin",
        "note": "PMP (TPX) 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "HCHO",
    "label": "HCHO|Formaldehyde",
    "displayName": "formaldehyde (methanal)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "formaldehyde",
      "methanal",
      "HCHO",
      "formalin"
    ],
    "elements": [
      {
        "name": "formaldehyde",
        "smiles": "C=O",
        "polyGroup": "aldehyde",
        "note": "PBz・POM・PF 樹脂・尿素樹脂 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "TROX",
    "label": "TROX|Trioxane",
    "displayName": "1,3,5-trioxane",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "trioxane",
      "1,3,5-trioxane",
      "TROX"
    ],
    "elements": [
      {
        "name": "1,3,5-trioxane",
        "smiles": "O1COCOC1",
        "polyGroup": "cyclic ether",
        "note": "POM（Delrin/Duracon 系）主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "BRCN",
    "label": "BRCN|Cyanogen Bromide",
    "displayName": "cyanogen bromide (BrCN)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "cyanogen bromide",
      "BrCN",
      "BRCN"
    ],
    "elements": [
      {
        "name": "cyanogen bromide",
        "smiles": "BrC#N",
        "polyGroup": "cyanation agent",
        "note": "CE 樹脂（BADCy 等）合成のシアネート化剤"
      }
    ],
    "monomers": []
  },
  {
    "key": "BTFE",
    "label": "BTFE|Bromotrifluoroethylene",
    "displayName": "bromotrifluoroethylene",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "BTFE",
      "bromotrifluoroethylene",
      "1-bromo-1,2,2-trifluoroethylene"
    ],
    "elements": [
      {
        "name": "BTFE",
        "smiles": "FC(F)=C(F)Br",
        "polyGroup": "fluoroolefin",
        "note": "BPVE / PFCB 樹脂主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "ALBR",
    "label": "ALBR|Allyl Bromide",
    "displayName": "allyl bromide (3-bromopropene)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "allyl bromide",
      "3-bromopropene",
      "ALBR"
    ],
    "elements": [
      {
        "name": "allyl bromide",
        "smiles": "C=CCBr",
        "polyGroup": "alkyl halide",
        "note": "DABPA 合成のアリル化剤"
      }
    ],
    "monomers": []
  },
  {
    "key": "MCL",
    "label": "MCL|Methacryloyl Chloride",
    "displayName": "methacryloyl chloride",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "methacryloyl chloride",
      "MCL",
      "2-methylacryloyl chloride"
    ],
    "elements": [
      {
        "name": "methacryloyl chloride",
        "smiles": "CC(=C)C(=O)Cl",
        "polyGroup": "acryloyl chloride",
        "note": "SA9000 等の末端メタクリル化剤"
      }
    ],
    "monomers": []
  },
  {
    "key": "HBA",
    "label": "HBA|p-Hydroxybenzoic Acid",
    "displayName": "p-hydroxybenzoic acid",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "HBA",
      "p-hydroxybenzoic acid",
      "4-hydroxybenzoic acid"
    ],
    "elements": [
      {
        "name": "HBA",
        "smiles": "OC(=O)c1ccc(O)cc1",
        "polyGroup": "hydroxyacid",
        "note": "Vectra 系 LCP 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "HNA",
    "label": "HNA|6-Hydroxy-2-Naphthoic Acid",
    "displayName": "6-hydroxy-2-naphthoic acid",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "HNA",
      "6-hydroxy-2-naphthoic acid"
    ],
    "elements": [
      {
        "name": "HNA",
        "smiles": "OC(=O)c1ccc2cc(O)ccc2c1",
        "polyGroup": "hydroxyacid",
        "note": "Vectra A 系 LCP 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "DAR",
    "label": "DAR|4,6-Diaminoresorcinol",
    "displayName": "4,6-diaminoresorcinol",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "DAR",
      "4,6-diaminoresorcinol",
      "2,4-diamino-1,5-dihydroxybenzene"
    ],
    "elements": [
      {
        "name": "DAR",
        "smiles": "Nc1cc(N)c(O)cc1O",
        "polyGroup": "diaminodiol",
        "note": "PBO (Zylon) 主原料"
      }
    ],
    "monomers": []
  },
  {
    "key": "PHOS",
    "label": "PHOS|Phosgene",
    "displayName": "phosgene (carbonyl dichloride)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "phosgene",
      "carbonyl dichloride",
      "COCl2",
      "PHOS"
    ],
    "elements": [
      {
        "name": "phosgene",
        "smiles": "O=C(Cl)Cl",
        "polyGroup": "carbonyl chloride",
        "note": "PC 界面重合主原料。DPCa（DiphenylCarbonate）で代替も"
      }
    ],
    "monomers": []
  },
  {
    "key": "DPC",
    "label": "DPC|Diphenyl Carbonate",
    "displayName": "diphenyl carbonate",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "DPC",
      "diphenyl carbonate"
    ],
    "elements": [
      {
        "name": "diphenyl carbonate",
        "smiles": "O=C(Oc1ccccc1)Oc1ccccc1",
        "polyGroup": "carbonate",
        "note": "PC 溶融重合主原料（phosgene fee 法）"
      }
    ],
    "monomers": []
  },
  {
    "key": "D4",
    "label": "D4|Octamethylcyclotetrasiloxane",
    "displayName": "octamethylcyclotetrasiloxane (D4)",
    "defaultClass": "Homopolymer",
    "dropdownHidden": true,
    "aliases": [
      "D4",
      "octamethylcyclotetrasiloxane"
    ],
    "elements": [
      {
        "name": "D4",
        "smiles": "C[Si]1(C)O[Si](C)(C)O[Si](C)(C)O[Si](C)(C)O1",
        "polyGroup": "cyclic siloxane",
        "note": "PDMS 主原料（開環重合）"
      }
    ],
    "monomers": []
  },
  {
    "key": "PEEK",
    "label": "PEEK|Poly(ether ether ketone)",
    "displayName": "poly(ether ether ketone)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PEEK",
      "Victrex PEEK",
      "Aptiv",
      "Vestakeep",
      "KetaSpire",
      "Zeniva",
      "PEK",
      "polyether ether ketone"
    ],
    "elements": [
      {
        "name": "ether-ether-ketone unit",
        "smiles": "[$]Oc1ccc(Oc2ccc(C(=O)c3ccc([$])cc3)cc2)cc1",
        "polyGroup": "",
        "note": "Victrex PEEK 型。DFBP + hydroquinone より合成"
      }
    ],
    "monomers": [
      {
        "name": "hydroquinone",
        "smiles": "Oc1ccc(O)cc1",
        "role": "bisphenol"
      },
      {
        "name": "4,4'-difluorobenzophenone (DFBP)",
        "smiles": "O=C(c1ccc(F)cc1)c1ccc(F)cc1",
        "role": "diaryl halide"
      }
    ]
  },
  {
    "key": "PET",
    "label": "PET|Poly(ethylene terephthalate)",
    "displayName": "poly(ethylene terephthalate)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PET",
      "Mylar",
      "Melinex",
      "Rynite",
      "Dacron",
      "Tetoron",
      "Estar",
      "Eastalene",
      "polyester",
      "polyethylene terephthalate"
    ],
    "elements": [
      {
        "name": "ethylene terephthalate unit",
        "smiles": "[$]OCCOC(=O)c1ccc(C(=O)[$])cc1",
        "polyGroup": "",
        "note": "EG + TPA/DMT より縮合重合"
      }
    ],
    "monomers": [
      {
        "name": "ethylene glycol",
        "smiles": "OCCO",
        "role": "diol"
      },
      {
        "name": "terephthalic acid",
        "smiles": "OC(=O)c1ccc(C(=O)O)cc1",
        "role": "diacid"
      }
    ]
  },
  {
    "key": "PBT",
    "label": "PBT|Poly(butylene terephthalate)",
    "displayName": "poly(butylene terephthalate)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PBT",
      "Valox",
      "Crastin",
      "Toraycon",
      "Ultradur",
      "Pocan",
      "Duranex",
      "poly(1,4-butylene terephthalate)"
    ],
    "elements": [
      {
        "name": "butylene terephthalate unit",
        "smiles": "[$]OCCCCOC(=O)c1ccc(C(=O)[$])cc1",
        "polyGroup": "",
        "note": "BDO + TPA/DMT より縮合重合"
      }
    ],
    "monomers": [
      {
        "name": "1,4-butanediol",
        "smiles": "OCCCCO",
        "role": "diol"
      },
      {
        "name": "terephthalic acid",
        "smiles": "OC(=O)c1ccc(C(=O)O)cc1",
        "role": "diacid"
      }
    ]
  },
  {
    "key": "PC",
    "label": "PC|Polycarbonate (BPA-PC)",
    "displayName": "poly(bisphenol A carbonate)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PC",
      "polycarbonate",
      "Lexan",
      "Makrolon",
      "Panlite",
      "Iupilon",
      "Tarflon",
      "Calibre",
      "Sabic PC"
    ],
    "elements": [
      {
        "name": "bisphenol A carbonate unit",
        "smiles": "[$]Oc1ccc(C(C)(C)c2ccc(OC(=O)[$])cc2)cc1",
        "polyGroup": "",
        "note": "BPA + phosgene（界面法）または BPA + DPC（溶融法）で合成"
      }
    ],
    "monomers": [
      {
        "name": "bisphenol A",
        "smiles": "Oc1ccc(C(C)(C)c2ccc(O)cc2)cc1",
        "role": "bisphenol"
      },
      {
        "name": "phosgene",
        "smiles": "O=C(Cl)Cl",
        "role": "carbonyl chloride"
      },
      {
        "name": "diphenyl carbonate (溶融法代替)",
        "smiles": "O=C(Oc1ccccc1)Oc1ccccc1",
        "role": "carbonate"
      }
    ]
  },
  {
    "key": "PA6",
    "label": "PA6|Polyamide 6 (Nylon 6)",
    "displayName": "polycaprolactam (Nylon 6)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PA6",
      "Nylon 6",
      "polycaprolactam",
      "Ultramid B",
      "Amilan",
      "Zytel PA6",
      "Akulon",
      "Grivory",
      "Toraymag"
    ],
    "elements": [
      {
        "name": "ε-caprolactam repeat unit",
        "smiles": "[$]NCCCCCC(=O)[$]",
        "polyGroup": "",
        "note": "caprolactam 開環重合で合成"
      }
    ],
    "monomers": [
      {
        "name": "ε-caprolactam",
        "smiles": "O=C1CCCCCN1",
        "role": "lactam"
      }
    ]
  },
  {
    "key": "PA66",
    "label": "PA66|Polyamide 66 (Nylon 66)",
    "displayName": "poly(hexamethylene adipamide) (Nylon 66)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PA66",
      "Nylon 66",
      "Zytel",
      "Ultramid A",
      "Vydyne",
      "Radipol",
      "Toray Amilan CM",
      "Leona"
    ],
    "elements": [
      {
        "name": "hexamethylene adipamide unit",
        "smiles": "[$]NCCCCCCNC(=O)CCCCC(=O)[$]",
        "polyGroup": "",
        "note": "HMDA + adipic acid 縮合"
      }
    ],
    "monomers": [
      {
        "name": "hexamethylenediamine (HMDA)",
        "smiles": "NCCCCCCN",
        "role": "diamine"
      },
      {
        "name": "adipic acid",
        "smiles": "OC(=O)CCCCC(=O)O",
        "role": "diacid"
      }
    ]
  },
  {
    "key": "POM",
    "label": "POM|Polyoxymethylene (Acetal)",
    "displayName": "polyoxymethylene / polyacetal",
    "defaultClass": "Homopolymer",
    "aliases": [
      "POM",
      "polyacetal",
      "Delrin",
      "Duracon",
      "Iupital",
      "Ultraform",
      "Celcon",
      "Hostaform",
      "acetal"
    ],
    "elements": [
      {
        "name": "oxymethylene unit",
        "smiles": "[$]OC[$]",
        "polyGroup": "",
        "note": "trioxane / formaldehyde より合成。エステル / エーテル末端でキャップ"
      }
    ],
    "monomers": [
      {
        "name": "formaldehyde",
        "smiles": "C=O",
        "role": "aldehyde"
      },
      {
        "name": "1,3,5-trioxane (三量体)",
        "smiles": "O1COCOC1",
        "role": "cyclic ether"
      }
    ]
  },
  {
    "key": "ABS",
    "label": "ABS|Acrylonitrile-Butadiene-Styrene",
    "displayName": "acrylonitrile-butadiene-styrene copolymer",
    "defaultClass": "Copolymer",
    "aliases": [
      "ABS",
      "Cycolac",
      "Terluran",
      "Novodur",
      "Magnum",
      "Toyolac",
      "Kralastic",
      "Diapet"
    ],
    "elements": [
      {
        "name": "acrylonitrile unit",
        "smiles": "[$]CC(C#N)[$]",
        "polyGroup": "",
        "note": "ニトリル基寄与で剛性・耐薬品性"
      },
      {
        "name": "butadiene unit",
        "smiles": "[$]CC=CC[$]",
        "polyGroup": "",
        "note": "ゴム相ドメイン、耐衝撃性を付与"
      },
      {
        "name": "styrene unit",
        "smiles": "[$]CC(c1ccccc1)[$]",
        "polyGroup": "",
        "note": "剛性・成形性・光沢を付与"
      }
    ],
    "monomers": [
      {
        "name": "acrylonitrile",
        "smiles": "C=CC#N",
        "role": "vinyl"
      },
      {
        "name": "1,3-butadiene",
        "smiles": "C=CC=C",
        "role": "diene"
      },
      {
        "name": "styrene",
        "smiles": "C=Cc1ccccc1",
        "role": "vinyl"
      }
    ]
  },
  {
    "key": "PVC",
    "label": "PVC|Poly(vinyl chloride)",
    "displayName": "poly(vinyl chloride)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PVC",
      "polyvinyl chloride",
      "Geon",
      "Vinnol",
      "Marvinol",
      "Solvin",
      "Vestolit",
      "poly(chloroethylene)"
    ],
    "elements": [
      {
        "name": "vinyl chloride unit",
        "smiles": "[$]CC(Cl)[$]",
        "polyGroup": "",
        "note": "ラジカル重合で合成"
      }
    ],
    "monomers": [
      {
        "name": "vinyl chloride",
        "smiles": "C=CCl",
        "role": "vinyl"
      }
    ]
  },
  {
    "key": "PVDF",
    "label": "PVDF|Poly(vinylidene fluoride)",
    "displayName": "poly(vinylidene fluoride)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PVDF",
      "Kynar",
      "Solef",
      "KF Polymer",
      "Neoflon PVDF",
      "Hylar",
      "polyvinylidene fluoride"
    ],
    "elements": [
      {
        "name": "vinylidene fluoride unit",
        "smiles": "[$]CC(F)(F)[$]",
        "polyGroup": "",
        "note": "β晶が圧電性を示す"
      }
    ],
    "monomers": [
      {
        "name": "vinylidene fluoride",
        "smiles": "C=C(F)F",
        "role": "vinyl"
      }
    ]
  },
  {
    "key": "PDMS",
    "label": "PDMS|Poly(dimethylsiloxane)",
    "displayName": "poly(dimethylsiloxane)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PDMS",
      "Sylgard",
      "Silastic",
      "Elastosil",
      "KE-1200",
      "SE-1700",
      "silicone rubber",
      "dimethyl silicone",
      "silicone oil"
    ],
    "elements": [
      {
        "name": "dimethylsiloxane unit",
        "smiles": "[$][Si](C)(C)O[$]",
        "polyGroup": "",
        "note": "D4 開環重合が主流。低Tg・高疎水性"
      }
    ],
    "monomers": [
      {
        "name": "octamethylcyclotetrasiloxane (D4)",
        "smiles": "C[Si]1(C)O[Si](C)(C)O[Si](C)(C)O[Si](C)(C)O1",
        "role": "cyclic siloxane"
      },
      {
        "name": "dichlorodimethylsilane (代替)",
        "smiles": "C[Si](C)(Cl)Cl",
        "role": "chlorosilane"
      }
    ]
  },
  {
    "key": "PLA",
    "label": "PLA|Poly(lactic acid)",
    "displayName": "poly(lactic acid)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PLA",
      "polylactide",
      "Ingeo",
      "Luminy",
      "Terramac",
      "polylactic acid"
    ],
    "elements": [
      {
        "name": "lactic acid unit",
        "smiles": "[$]OC(C)C(=O)[$]",
        "polyGroup": "",
        "note": "L-lactide 開環重合が主流。生分解性"
      }
    ],
    "monomers": [
      {
        "name": "L-lactide",
        "smiles": "CC1OC(=O)C(C)OC1=O",
        "role": "cyclic ester"
      },
      {
        "name": "L-lactic acid (代替)",
        "smiles": "CC(O)C(=O)O",
        "role": "hydroxyacid"
      }
    ]
  },
  {
    "key": "PEG",
    "label": "PEG/PEO|Poly(ethylene glycol / oxide)",
    "displayName": "poly(ethylene glycol) / poly(ethylene oxide)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PEG",
      "PEO",
      "polyethylene glycol",
      "polyethylene oxide",
      "Carbowax",
      "Polyox",
      "Alkox"
    ],
    "elements": [
      {
        "name": "ethylene oxide unit",
        "smiles": "[$]OCC[$]",
        "polyGroup": "",
        "note": "低分子量=PEG、高分子量=PEO。水溶性ポリマーの代表"
      }
    ],
    "monomers": [
      {
        "name": "ethylene oxide",
        "smiles": "C1CO1",
        "role": "epoxide"
      }
    ]
  },
  {
    "key": "Kevlar",
    "label": "Kevlar|Poly(p-phenylene terephthalamide)",
    "displayName": "poly(p-phenylene terephthalamide) [p-aramid]",
    "defaultClass": "Homopolymer",
    "aliases": [
      "Kevlar",
      "Twaron",
      "Technora",
      "p-aramid",
      "PPTA",
      "para-aramid",
      "aramid fiber"
    ],
    "elements": [
      {
        "name": "p-phenylene terephthalamide unit",
        "smiles": "[$]Nc1ccc(NC(=O)c2ccc(C(=O)[$])cc2)cc1",
        "polyGroup": "",
        "note": "p-PDA + TPC 界面/溶液重合で合成"
      }
    ],
    "monomers": [
      {
        "name": "p-phenylenediamine (PPD)",
        "smiles": "Nc1ccc(N)cc1",
        "role": "diamine"
      },
      {
        "name": "terephthaloyl chloride (TPC)",
        "smiles": "O=C(Cl)c1ccc(C(=O)Cl)cc1",
        "role": "acid chloride"
      }
    ]
  },
  {
    "key": "Nomex",
    "label": "Nomex|Poly(m-phenylene isophthalamide)",
    "displayName": "poly(m-phenylene isophthalamide) [m-aramid]",
    "defaultClass": "Homopolymer",
    "aliases": [
      "Nomex",
      "Teijinconex",
      "m-aramid",
      "MPIA",
      "meta-aramid"
    ],
    "elements": [
      {
        "name": "m-phenylene isophthalamide unit",
        "smiles": "[$]Nc1cccc(NC(=O)c2cccc(C(=O)[$])c2)c1",
        "polyGroup": "",
        "note": "m-PDA + IPC 界面/溶液重合で合成"
      }
    ],
    "monomers": [
      {
        "name": "m-phenylenediamine (MPD)",
        "smiles": "Nc1cccc(N)c1",
        "role": "diamine"
      },
      {
        "name": "isophthaloyl chloride (IPC)",
        "smiles": "O=C(Cl)c1cccc(C(=O)Cl)c1",
        "role": "acid chloride"
      }
    ]
  },
  {
    "key": "PEI",
    "label": "PEI|Polyetherimide",
    "displayName": "poly(ether imide) [Ultem type]",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PEI",
      "Ultem",
      "Extem",
      "polyetherimide",
      "Sabic PEI"
    ],
    "elements": [
      {
        "name": "BPA-DA + m-PDA imide-ether unit",
        "smiles": "[$]N1C(=O)c2ccc(Oc3ccc(C(C)(C)c4ccc(Oc5ccc6C(=O)N([$])C(=O)c6c5)cc4)cc3)cc2C1=O",
        "polyGroup": "",
        "note": "Ultem 型（BPA dianhydride + m-PDA）。⚠ 要確認"
      }
    ],
    "monomers": [
      {
        "name": "m-phenylenediamine (MPD)",
        "smiles": "Nc1cccc(N)c1",
        "role": "diamine"
      },
      {
        "name": "bisphenol A dianhydride (BPADA)",
        "smiles": "O=C1OC(=O)c2cc(Oc3ccc(C(C)(C)c4ccc(Oc5ccc6C(=O)OC(=O)c6c5)cc4)cc3)ccc12",
        "role": "dianhydride"
      }
    ]
  },
  {
    "key": "PPSU",
    "label": "PPSU|Polyphenylsulfone",
    "displayName": "poly(biphenyl-4,4'-diyl-sulfonyl-1,4-phenylene)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PPSU",
      "Radel R",
      "polyphenylsulfone",
      "polyphenyl sulfone"
    ],
    "elements": [
      {
        "name": "biphenyl-diphenyl sulfone unit",
        "smiles": "[$]Oc1ccc(-c2ccc(Oc3ccc(S(=O)(=O)c4ccc([$])cc4)cc3)cc2)cc1",
        "polyGroup": "",
        "note": "4,4'-biphenol + DCDPS/DFDPS で合成。Radel R 型"
      }
    ],
    "monomers": [
      {
        "name": "4,4'-biphenol",
        "smiles": "Oc1ccc(-c2ccc(O)cc2)cc1",
        "role": "biphenol"
      },
      {
        "name": "4,4'-dichlorodiphenyl sulfone (DCDPS)",
        "smiles": "Clc1ccc(S(=O)(=O)c2ccc(Cl)cc2)cc1",
        "role": "diaryl halide"
      }
    ]
  },
  {
    "key": "COC",
    "label": "COC|Cyclic Olefin Copolymer",
    "displayName": "ethylene-norbornene copolymer (COC)",
    "defaultClass": "Copolymer",
    "aliases": [
      "COC",
      "Topas",
      "Apel",
      "Arton",
      "Zeonex",
      "Zeonor",
      "cyclic olefin copolymer",
      "cyclic olefin polymer",
      "COP"
    ],
    "elements": [
      {
        "name": "ethylene unit",
        "smiles": "[$]CC[$]",
        "polyGroup": "",
        "note": "Topas 8007 の場合 60〜80 mol%"
      },
      {
        "name": "norbornene unit",
        "smiles": "[$]C1CC2CC1C(C2)[$]",
        "polyGroup": "",
        "note": "⚠ 開環／メタロセン触媒により結合様式は差異あり"
      }
    ],
    "monomers": [
      {
        "name": "ethylene",
        "smiles": "C=C",
        "role": "olefin"
      },
      {
        "name": "norbornene",
        "smiles": "C1CC2CC1C=C2",
        "role": "cyclic olefin"
      }
    ]
  },
  {
    "key": "PMP",
    "label": "PMP|Poly(4-methyl-1-pentene) [TPX]",
    "displayName": "poly(4-methyl-1-pentene)",
    "defaultClass": "Homopolymer",
    "aliases": [
      "PMP",
      "TPX",
      "Mitsui TPX",
      "poly-4-methylpentene"
    ],
    "elements": [
      {
        "name": "4-methyl-1-pentene unit",
        "smiles": "[$]CC(CC(C)C)[$]",
        "polyGroup": "",
        "note": "透明・耐熱ポリオレフィン"
      }
    ],
    "monomers": [
      {
        "name": "4-methyl-1-pentene",
        "smiles": "CC(C)CC=C",
        "role": "olefin"
      }
    ]
  },
  {
    "key": "SBS",
    "label": "SBS|Styrene-Butadiene-Styrene (Kraton)",
    "displayName": "styrene-butadiene-styrene triblock copolymer",
    "defaultClass": "Copolymer",
    "aliases": [
      "SBS",
      "Kraton",
      "Septon",
      "Tuftec",
      "Solprene",
      "Finaprene",
      "styrene butadiene styrene",
      "thermoplastic elastomer"
    ],
    "elements": [
      {
        "name": "styrene unit",
        "smiles": "[$]CC(c1ccccc1)[$]",
        "polyGroup": "",
        "note": "末端ハードブロック"
      },
      {
        "name": "butadiene unit",
        "smiles": "[$]CC=CC[$]",
        "polyGroup": "",
        "note": "中央ソフトブロック（水添で SEBS）"
      }
    ],
    "monomers": [
      {
        "name": "styrene",
        "smiles": "C=Cc1ccccc1",
        "role": "vinyl"
      },
      {
        "name": "1,3-butadiene",
        "smiles": "C=CC=C",
        "role": "diene"
      }
    ]
  },
  {
    "key": "SBR",
    "label": "SBR|Styrene-Butadiene Rubber",
    "displayName": "styrene-butadiene rubber",
    "defaultClass": "Copolymer",
    "aliases": [
      "SBR",
      "Buna S",
      "Nipol",
      "styrene butadiene rubber",
      "GRS",
      "SB rubber"
    ],
    "elements": [
      {
        "name": "styrene unit",
        "smiles": "[$]CC(c1ccccc1)[$]",
        "polyGroup": "",
        "note": "通常20〜25 wt%"
      },
      {
        "name": "butadiene unit",
        "smiles": "[$]CC=CC[$]",
        "polyGroup": "",
        "note": "cis/trans/1,2- 混合"
      }
    ],
    "monomers": [
      {
        "name": "styrene",
        "smiles": "C=Cc1ccccc1",
        "role": "vinyl"
      },
      {
        "name": "1,3-butadiene",
        "smiles": "C=CC=C",
        "role": "diene"
      }
    ]
  },
  {
    "key": "NBR",
    "label": "NBR|Nitrile Rubber",
    "displayName": "acrylonitrile-butadiene rubber",
    "defaultClass": "Copolymer",
    "aliases": [
      "NBR",
      "nitrile rubber",
      "Nipol NBR",
      "Krynac",
      "Perbunan",
      "Chemigum",
      "acrylonitrile-butadiene rubber",
      "Buna N"
    ],
    "elements": [
      {
        "name": "acrylonitrile unit",
        "smiles": "[$]CC(C#N)[$]",
        "polyGroup": "",
        "note": "AN 比率で耐油性・低温柔軟性トレードオフ"
      },
      {
        "name": "butadiene unit",
        "smiles": "[$]CC=CC[$]",
        "polyGroup": "",
        "note": ""
      }
    ],
    "monomers": [
      {
        "name": "acrylonitrile",
        "smiles": "C=CC#N",
        "role": "vinyl"
      },
      {
        "name": "1,3-butadiene",
        "smiles": "C=CC=C",
        "role": "diene"
      }
    ]
  },
  {
    "key": "PPESK",
    "label": "PPESK|Poly(phthalazinone ether sulfone ketone)",
    "displayName": "poly(phthalazinone ether sulfone ketone)",
    "defaultClass": "Copolymer",
    "aliases": [
      "PPESK",
      "phthalazinone polymer"
    ],
    "elements": [
      {
        "name": "phthalazinone-sulfone unit",
        "smiles": "[$]N1N=Cc2ccccc2C1=O",
        "polyGroup": "",
        "note": "⚠ 単純化した表示。実際は phthalazinone + DCDPS/DFBP との共重合"
      }
    ],
    "monomers": [
      {
        "name": "4-(4-hydroxyphenyl)phthalazinone (DHPZ)",
        "smiles": "Oc1ccc(C2=NN(O)C(=O)c3ccccc32)cc1",
        "role": "phthalazinone"
      },
      {
        "name": "DCDPS",
        "smiles": "Clc1ccc(S(=O)(=O)c2ccc(Cl)cc2)cc1",
        "role": "diaryl halide"
      }
    ],
    "dropdownHidden": true
  },
  {
    "key": "Other",
    "label": "Other",
    "displayName": "",
    "defaultClass": "Homopolymer",
    "aliases": [],
    "elements": [
      {
        "name": "",
        "smiles": "",
        "polyGroup": "",
        "note": ""
      }
    ],
    "sentinel": true
  },
  {
    "key": "Crosslinker",
    "label": "Crosslinker",
    "displayName": "",
    "defaultClass": "Homopolymer",
    "aliases": [],
    "elements": [
      {
        "name": "",
        "smiles": "",
        "polyGroup": "",
        "note": ""
      }
    ],
    "sentinel": true
  }
];
