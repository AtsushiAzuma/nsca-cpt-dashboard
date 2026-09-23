window.PROJECT_DATA = {
  "meta": {
    "updated": "2026-09-23",
    "phase": "無料記事3本・有料記事1本と付属物の原稿完成。内容レビュー済み、承認・公開設定待ち",
    "nextTaskId": "T-016",
    "weeklyCapacity": 180,
    "plannedMinutes": 180,
    "doneCount": 34
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
  ]
};
