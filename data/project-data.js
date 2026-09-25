window.PROJECT_DATA = {
  "meta": {
    "updated": "2026-09-23",
    "phase": "無料記事3本・有料記事1本と付属物の原稿完成。内容レビュー済み、承認・公開設定待ち",
    "nextTaskId": "T-016",
    "weeklyCapacity": 180,
    "plannedMinutes": 180,
    "doneCount": 39
  },
  "roadmap": [
    {
      "week": 1,
      "purpose": "本人の一次情報を整理",
      "deliverable": "合格までの時系列、問題集の使い方、ジム実践メモ",
      "done": "創作なしで公開可能な経験が整理されている",
      "progress": 100
    },
    {
      "week": 2,
      "purpose": "読者と商品の約束を確定",
      "deliverable": "読者課題上位3件、商品コンセプト、対象外",
      "done": "誰の何を解決するか1文で説明できる",
      "progress": 100
    },
    {
      "week": 3,
      "purpose": "商品の骨組みを作成",
      "deliverable": "30日計画、30・60・90分プランの初稿",
      "done": "30日分の行動が日単位で確認できる",
      "progress": 100
    },
    {
      "week": 4,
      "purpose": "付属物を完成",
      "deliverable": "進捗表、復習ログ、復帰ルール、試験前チェック",
      "done": "購入当日に記入と実行を開始できる",
      "progress": 100
    },
    {
      "week": 5,
      "purpose": "販売素材を作成",
      "deliverable": "無料記事1本、販売ページ、プロフィール文",
      "done": "対象者、内容、対象外、根拠が説明されている",
      "progress": 100
    },
    {
      "week": 6,
      "purpose": "品質確認と公開準備",
      "deliverable": "品質チェック、note初期設定、最終原稿",
      "done": "ユーザーが価格と公開原稿を承認している",
      "progress": 0
    }
  ],
  "tasks": [
    {
      "id": "T-006",
      "status": "DONE",
      "priority": "P1",
      "title": "30日計画の4週間構成を作る",
      "done": "各週の目的と7日分の行動がある",
      "estimate": "60分",
      "dependency": "T-002、T-003、T-005",
      "bucket": "今週"
    },
    {
      "id": "T-009",
      "status": "DONE",
      "priority": "P1",
      "title": "復習ログと復帰ルールを作る",
      "done": "誤答・曖昧点と、遅れた日の再開方法を記録できる",
      "estimate": "60分",
      "dependency": "T-006",
      "bucket": "今週"
    },
    {
      "id": "T-011",
      "status": "DONE",
      "priority": "P2",
      "title": "無料記事1本目を執筆する",
      "done": "1つの悩みを解決し、商品への自然な導線がある",
      "estimate": "60分",
      "dependency": "T-003、T-004",
      "bucket": "今週"
    },
    {
      "id": "T-014",
      "status": "BLOCKED",
      "priority": "P2",
      "title": "noteアカウントを作成・初期設定する",
      "done": "URLが記録され、プロフィールが設定されている",
      "estimate": "30分",
      "dependency": "T-013",
      "bucket": "承認・公開待ち"
    },
    {
      "id": "T-015",
      "status": "REVIEW",
      "priority": "P0",
      "title": "公開前品質レビューを行う",
      "done": "重大項目がすべて確認済み",
      "estimate": "60分",
      "dependency": "T-011、T-012",
      "bucket": "承認・公開待ち"
    },
    {
      "id": "T-016",
      "status": "REVIEW",
      "priority": "P0",
      "title": "価格と公開原稿の最終承認を得る",
      "done": "ユーザーが対象原稿と価格を明示承認",
      "estimate": "15分",
      "dependency": "T-015の内容レビュー実施（承認後に最終判定）",
      "bucket": "承認・公開待ち"
    },
    {
      "id": "T-017",
      "status": "INBOX",
      "priority": "P1",
      "title": "noteで初回公開する",
      "done": "承認済み原稿が公開され、URLが記録されている",
      "estimate": "30分",
      "dependency": "T-014、T-016",
      "bucket": "承認・公開待ち"
    },
    {
      "id": "T-041",
      "status": "DONE",
      "priority": "P0",
      "title": "新PC環境を引継ぎ手順書に沿って構築・検証する",
      "done": "origin/pages、Git設定、Node、PDF、ダッシュボード生成、構文検査、同期可否を確認し、移行記録を残す",
      "estimate": "30分",
      "dependency": "T-040、旧PCの最終Push",
      "bucket": "追加企画"
    },
    {
      "id": "T-040",
      "status": "DONE",
      "priority": "P1",
      "title": "新PCへの引き継ぎ資料を作成する",
      "done": "project/NEW-PC-HANDOFF.md`で環境構築、認証、clone、検証、日常運用、旧PC停止条件を確認できる",
      "estimate": "30分",
      "dependency": "ユーザーの移行依頼",
      "bucket": "追加企画"
    },
    {
      "id": "T-039",
      "status": "DONE",
      "priority": "P1",
      "title": "組織体制と担当・承認フローを整備する",
      "done": "project/ORGANIZATION.mdに13役の組織図、責任分担、引継ぎ・承認手順を定義し運用文書へ接続済み",
      "estimate": "30分",
      "dependency": "ユーザーの組織構築依頼",
      "bucket": "追加企画"
    },
    {
      "id": "T-028",
      "status": "DONE",
      "priority": "P2",
      "title": "購入特典の企画案を作る",
      "done": "content/BONUS-PROPOSAL.mdに候補3件と推奨2件を整理。特典自体は未制作",
      "estimate": "30分",
      "dependency": "T-025",
      "bucket": "追加企画"
    },
    {
      "id": "T-029",
      "status": "DONE",
      "priority": "P1",
      "title": "問題・模試・図解特典の構成を検討する",
      "done": "content/BONUS-ASSESSMENT-PLAN.mdに665問・図解16枚の仮案を整理。実物は未制作",
      "estimate": "45分",
      "dependency": "T-028",
      "bucket": "追加企画"
    },
    {
      "id": "T-030",
      "status": "DONE",
      "priority": "P1",
      "title": "仮想クライアント3名のロールプレイ教材を検討する",
      "done": "content/ROLEPLAY-PROPOSAL.mdに3名・28回・評価基準と短い試作例を整理。全編未制作",
      "estimate": "45分",
      "dependency": "T-029",
      "bucket": "追加企画"
    },
    {
      "id": "T-031",
      "status": "DONE",
      "priority": "P1",
      "title": "ロールプレイ教材の両面60ページ設計を作る",
      "done": "content/ROLEPLAY-PAGE-PLAN.mdに60ページの台割を作成。PDF本体は未制作",
      "estimate": "30分",
      "dependency": "T-030",
      "bucket": "追加企画"
    },
    {
      "id": "T-032",
      "status": "DONE",
      "priority": "P1",
      "title": "ロールプレイ28回の回答用原稿を作る",
      "done": "解説を隠して回答できる全場面と前提を作成",
      "estimate": "60分",
      "dependency": "T-031",
      "bucket": "追加企画"
    },
    {
      "id": "T-033",
      "status": "DONE",
      "priority": "P1",
      "title": "新人役の回答とベテラン役レビューを実施する",
      "done": "28回の回答・場面別フィードバックを記録",
      "estimate": "60分",
      "dependency": "T-032",
      "bucket": "追加企画"
    },
    {
      "id": "T-034",
      "status": "DONE",
      "priority": "P1",
      "title": "レビューを反映して教材を改訂・再テストする",
      "done": "指摘対応表、改訂原稿、再テスト結果がある",
      "estimate": "60分",
      "dependency": "T-033",
      "bucket": "追加企画"
    },
    {
      "id": "T-035",
      "status": "DONE",
      "priority": "P1",
      "title": "改訂ロールプレイの60ページPDFを作成・確認する",
      "done": "表裏の対応と全ページの表示を検証した確認版がある",
      "estimate": "60分",
      "dependency": "T-034",
      "bucket": "追加企画"
    },
    {
      "id": "T-036",
      "status": "DONE",
      "priority": "P1",
      "title": "全プロセス・商品・特典をUX視点で監査する",
      "done": "UXデザイナー3役の独立レビュー、5段階モデル、改善点一覧をHTMLで可視化。改善実装は行わない",
      "estimate": "60分",
      "dependency": "T-035",
      "bucket": "追加企画"
    },
    {
      "id": "T-037",
      "status": "DONE",
      "priority": "P1",
      "title": "これまでの全成果物を統合HTMLで可視化する",
      "done": "企画・調査・記事・特典・教材・レビュー・運用成果物を棚卸しし、状態と関係を一つのHTMLで確認できる",
      "estimate": "60分",
      "dependency": "T-036",
      "bucket": "追加企画"
    },
    {
      "id": "T-038",
      "status": "DONE",
      "priority": "P1",
      "title": "公開ダッシュボードへ成果物ビューを統合する",
      "done": "進捗と公開用成果物一覧を1サイトでスマホ確認できる。非公開原稿・有料本文・PDF原本は公開しない",
      "estimate": "60分",
      "dependency": "T-037",
      "bucket": "追加企画"
    },
    {
      "id": "T-040",
      "status": "DONE",
      "priority": "P1",
      "title": "新PCへの引き継ぎ資料を作成する",
      "done": "project/NEW-PC-HANDOFF.md`。移行前後のチェックリスト、コマンド、検証、切替・復旧手順",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-007",
      "status": "DONE",
      "priority": "P1",
      "title": "30分・60分・90分プランを作る",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-008",
      "status": "DONE",
      "priority": "P1",
      "title": "進捗表を作る",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-010",
      "status": "DONE",
      "priority": "P1",
      "title": "試験前7日チェックを作る",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-012",
      "status": "DONE",
      "priority": "P1",
      "title": "販売ページを作る",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-013",
      "status": "DONE",
      "priority": "P1",
      "title": "noteプロフィール文を作る",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-023",
      "status": "DONE",
      "priority": "P1",
      "title": "無料記事2本目を執筆する",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-024",
      "status": "DONE",
      "priority": "P1",
      "title": "無料記事3本目を執筆する",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-025",
      "status": "DONE",
      "priority": "P1",
      "title": "有料記事を1本に統合し閲覧用成果物を作る",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-026",
      "status": "DONE",
      "priority": "P1",
      "title": "公開後の計測と初期設定の準備をする",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-027",
      "status": "DONE",
      "priority": "P1",
      "title": "ダッシュボードの工程別進捗を実タスクへ対応させる",
      "done": "reviews/FINAL-DELIVERY.md参照",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-004",
      "status": "DONE",
      "priority": "P1",
      "title": "読者の悩みを3件に絞る",
      "done": "research/EVIDENCE-LEDGER.md`のC2〜C5と「T-004 読者の悩み候補」。公開情報・本人経験・検証上の限界を分離",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-005",
      "status": "DONE",
      "priority": "P1",
      "title": "現行の試験情報を公式情報で確認する",
      "done": "research/EVIDENCE-LEDGER.md`のO1〜O8と原稿への反映判断",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-003",
      "status": "DONE",
      "priority": "P1",
      "title": "商品の約束を1文にする",
      "done": "content/PRODUCT-OUTLINE.md`の「約束する成果」。対象読者・課題・購入当日の行動を明示",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-002",
      "status": "DONE",
      "priority": "P1",
      "title": "問題集のやりこみ方を具体化する",
      "done": "project/T-002-PRACTICE.md`。1〜5周目と未記憶の手順を分けた",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-001",
      "status": "DONE",
      "priority": "P1",
      "title": "合格までの時系列を記録する",
      "done": "project/T-001-TIMELINE.md`。本人申告と不明事項を分けた",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-022",
      "status": "DONE",
      "priority": "P1",
      "title": "添付の資格証明書の記載事項を確認する",
      "done": "JSONとPDFの資格名・認定日・有効期限をBRIEFに記録。個人識別子・署名値は保存せず、独立検証未実施と明記",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-000",
      "status": "DONE",
      "priority": "P1",
      "title": "プロジェクト管理・タスク管理基盤を構築する",
      "done": "PROJECT-MANAGER、ROADMAP、TASKS、WORKLOG、テンプレート",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-018",
      "status": "DONE",
      "priority": "P1",
      "title": "WBS・ToDo・進捗ダッシュボードを構築する",
      "done": "dist/`、データ生成スクリプト、GitHub Pagesワークフロー",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-019",
      "status": "DONE",
      "priority": "P1",
      "title": "GitHub Pagesへダッシュボードを公開する",
      "done": "公開用リポジトリと表示確認済みのPages URL",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-020",
      "status": "DONE",
      "priority": "P1",
      "title": "Codex作業の限定的な自動コミット・公開導線を整える",
      "done": "scripts/publish-codex-work.ps1` と `AGENTS.md` の運用ルール",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    },
    {
      "id": "T-021",
      "status": "DONE",
      "priority": "P1",
      "title": "公開ダッシュボードの更新キャッシュを避ける",
      "done": "データ内容のハッシュを付けた読み込みURLを自動生成",
      "estimate": "—",
      "dependency": "なし",
      "bucket": "完了"
    }
  ],
  "deliverables": [
    {
      "id": "D-01",
      "category": "学習商品",
      "status": "原稿完成",
      "maturity": "完成",
      "title": "無料記事 3本",
      "quantity": "3 articles",
      "summary": "開始前チェック、今日読む範囲の決め方、働きながら進める平日30分の1週間例。無料部分だけでも行動を始められる構成。",
      "evidence": [
        "無料で完結",
        "対象外を明記",
        "原稿レビュー済み"
      ]
    },
    {
      "id": "D-02",
      "category": "学習商品",
      "status": "原稿完成",
      "maturity": "完成",
      "title": "NSCA-CPT独学30日計画",
      "quantity": "30 days",
      "summary": "働きながら独学する初心者向けに、4分野を30日で一巡する毎日の行動を整理。30日での合格は保証しない。",
      "evidence": [
        "Day 1〜30",
        "4分野を一巡",
        "現行公式情報を参照"
      ]
    },
    {
      "id": "D-03",
      "category": "学習商品",
      "status": "原稿完成",
      "maturity": "完成",
      "title": "学習支援ツール",
      "quantity": "5 tools",
      "summary": "30・60・90分プラン、30日進捗表、復習ログ、遅れた日の復帰ルール、試験前7日チェックを一式化。",
      "evidence": [
        "時間別プラン",
        "復習・再開",
        "試験前確認"
      ]
    },
    {
      "id": "D-04",
      "category": "特典",
      "status": "設計完了",
      "maturity": "企画",
      "title": "単元別問題・模試・図解資料集",
      "quantity": "665 Q + 16 visuals",
      "summary": "単元別200問、155問の模試3回、単元別図解16点の構成案。現時点では設計成果物で、問題と図解の実物は未制作。",
      "evidence": [
        "単元別200問",
        "模試465問",
        "図解16点",
        "実物は未制作"
      ]
    },
    {
      "id": "D-05",
      "category": "実践教材",
      "status": "PDF完成",
      "maturity": "完成",
      "title": "仮想クライアント・ロールプレイ教材",
      "quantity": "60 pages",
      "summary": "仮想クライアント3名を担当し、初期計画、トレーニング技術、評価を28セッションで経験するA4両面教材。",
      "evidence": [
        "3ペルソナ",
        "28セッション",
        "表面で回答・裏面で確認",
        "A4・60ページ"
      ]
    },
    {
      "id": "D-06",
      "category": "検証",
      "status": "検証済み",
      "maturity": "AI検証",
      "title": "新人・ベテラントレーナー検証",
      "quantity": "84 answers",
      "summary": "新人役が全28場面・84問へ回答し、ベテラン役が教材と答案をレビュー。改訂後に重点12場面と追加観察5場面を再確認。",
      "evidence": [
        "v1全場面",
        "v2重点再テスト",
        "改訂履歴",
        "AI役割テスト"
      ]
    },
    {
      "id": "D-07",
      "category": "検証",
      "status": "機械確認済み",
      "maturity": "品質確認",
      "title": "60ページPDF品質確認",
      "quantity": "60 / 60 pages",
      "summary": "全ページを画像化し、文字切れ、重なり、欠落、ページ番号、表裏の連番を確認。実機の両面試し刷りは未実施。",
      "evidence": [
        "全60ページ確認",
        "表裏28組",
        "文字切れなし",
        "試し刷り未実施"
      ]
    },
    {
      "id": "D-08",
      "category": "検証",
      "status": "監査済み",
      "maturity": "UX監査",
      "title": "UXデザイナー3名による全体監査",
      "quantity": "19 findings",
      "summary": "初心者ジャーニー、学習情報設計、購入前後のサービス体験を独立レビューし、P0 1件・P1 10件・P2 8件へ統合。",
      "evidence": [
        "3人の独立レビュー",
        "UX 5段階",
        "Double Diamond",
        "改善は未実装"
      ]
    },
    {
      "id": "D-09",
      "category": "運用",
      "status": "準備完了",
      "maturity": "運用準備",
      "title": "販売・公開準備セット",
      "quantity": "1 launch pack",
      "summary": "販売ページ、プロフィール案、品質チェック、公開ゲート、週次計測を整備。価格と本人情報、note実画面は最終確認待ち。",
      "evidence": [
        "販売ページ",
        "公開前チェック",
        "計測テンプレート",
        "最終承認待ち"
      ]
    },
    {
      "id": "D-10",
      "category": "運用",
      "status": "公開中",
      "maturity": "公開",
      "title": "進捗・成果物ダッシュボード",
      "quantity": "1 public site",
      "summary": "WBS、タスク、次の行動、成果物の完成度を一つの公開サイトへ統合。スマートフォン表示に対応。",
      "evidence": [
        "GitHub Pages",
        "自動同期",
        "スマホ対応",
        "公開用情報のみ"
      ]
    }
  ]
};
