const LEVEL1_DATA = {
    id: 1,
    title: "ファシリテーションの基本",
    icon: "📋",
    description: "ファシリテーションとは何か、4つのスキル、場のデザインを学ぶ",
    modules: [
        {
            id: 101,
            title: "ファシリテーションとは何か",
            duration: "15分",
            content: `
<h2>ファシリテーションの定義</h2>
<div class="info-box tip">
<div class="info-box-title">定義</div>
ファシリテーション（Facilitation）はラテン語 "facilis"（容易にする）が語源です。「人々の知恵と力を引き出し、集団として最良の結論にたどり着くことを"容易にする"技術と態度」を指します。
</div>

<h2>司会・リーダーとの違い</h2>
<table>
<thead><tr><th>項目</th><th>司会</th><th>リーダー</th><th>ファシリテーター</th></tr></thead>
<tbody>
<tr><td><strong>立場</strong></td><td>進行役</td><td>意思決定者</td><td>中立的支援者</td></tr>
<tr><td><strong>関心</strong></td><td>時間通り進む</td><td>自分の結論</td><td>全員の納得</td></tr>
<tr><td><strong>発言</strong></td><td>台本を読む</td><td>自分が多く</td><td>参加者が多く</td></tr>
<tr><td><strong>意見</strong></td><td>持たない</td><td>強く持つ</td><td>持つが出さない</td></tr>
<tr><td><strong>対立時</strong></td><td>困る</td><td>裁く</td><td>活かす</td></tr>
<tr><td><strong>成功基準</strong></td><td>時間内終了</td><td>自分の決定</td><td>全員の合意</td></tr>
</tbody>
</table>

<div class="info-box success">
<div class="info-box-title">核心</div>
ファシリテーターは「コンテンツ」に関与せず「プロセス」に責任を持ちます。
</div>

<h2>なぜ今ファシリテーションが必要なのか</h2>
<h3>会議の問題あるある TOP10</h3>
<ol>
<li>「何が決まったかわからない」会議</li>
<li>「声の大きい人の意見が通る」会議</li>
<li>「発言するのはいつも同じ3人」会議</li>
<li>「とりあえず集まったけど」会議</li>
<li>「結論が出ないまま時間切れ」会議</li>
<li>「議題が途中で脱線しまくる」会議</li>
<li>「決まったのに誰も動かない」会議</li>
<li>「そもそも何のための会議？」会議</li>
<li>「上司の独演会」会議</li>
<li>「会議のための会議」会議</li>
</ol>

<div class="info-box warning">
<div class="info-box-title">衝撃の数字</div>
日本のビジネスパーソンは年間約300時間を会議に費やし、そのうち「無駄だった」と感じる割合は約40〜50%。年間約150時間（約19営業日分）が消えています。
</div>`,
            quiz: [
                { id: "q101_1", type: "choice", question: "ファシリテーターの立場として最も適切なのはどれですか？", options: ["進行役", "意思決定者", "中立的支援者", "台本読み"], answer: 2, explanation: "ファシリテーターは「中立的支援者」として参加者の力を引き出す役割を担います。" },
                { id: "q101_2", type: "choice", question: "ファシリテーターが責任を持つのはどちらですか？", options: ["コンテンツ（内容）", "プロセス（進め方）", "両方", "どちらでもない"], answer: 1, explanation: "ファシリテーターは「コンテンツ」に関与せず「プロセス」に責任を持ちます。" },
                { id: "q101_3", type: "choice", question: "対立が起きた時のファシリテーターの対応として正しいのはどれですか？", options: ["困って流す", "裁いて結論を出す", "対立を活かす", "会議を終了する"], answer: 2, explanation: "ファシリテーターは対立を「活かす」ことで、より良い結論を導き出します。" },
                { id: "q101_4", type: "choice", question: "日本のビジネスパーソンが「無駄」と感じる会議時間は年間約何時間ですか？", options: ["約50時間", "約100時間", "約150時間", "約250時間"], answer: 2, explanation: "年間約300時間の会議のうち40〜50%が無駄とされ、約150時間（約19営業日分）が消えています。" },
                { id: "q101_5", type: "fill", question: "ファシリテーション（Facilitation）の語源はラテン語の「____」（容易にする）です。", answer: "facilis", explanation: "Facilitationはラテン語のfacilis（容易にする）が語源で、集団の力を引き出すことを容易にする技術です。" }
            ]
        },
        {
            id: 102,
            title: "4つのスキルと場のデザイン",
            duration: "20分",
            content: `
<h2>ファシリテーションの4つのスキル</h2>
<table>
<thead><tr><th>順序</th><th>スキル</th><th>内容</th></tr></thead>
<tbody>
<tr><td>①</td><td><strong>場のデザイン（Design）</strong></td><td>会議の前に勝負は決まっている</td></tr>
<tr><td>②</td><td><strong>引き出す（Draw out）</strong></td><td>全員の知恵をテーブルに乗せる</td></tr>
<tr><td>③</td><td><strong>構造化する（Structure）</strong></td><td>議論を整理し、見える化する</td></tr>
<tr><td>④</td><td><strong>合意形成（Consensus Building）</strong></td><td>全員が「これでいこう」と思える結論へ</td></tr>
</tbody>
</table>

<h2>会議設計の5W1H</h2>
<table>
<thead><tr><th>要素</th><th>問い</th><th>ポイント</th></tr></thead>
<tbody>
<tr><td><strong>Why</strong></td><td>なぜこの会議が必要か？</td><td>目的がない会議は開かない</td></tr>
<tr><td><strong>What</strong></td><td>何を議論し、何を決めるか？</td><td>アジェンダの明確化</td></tr>
<tr><td><strong>Who</strong></td><td>誰が参加すべきか？</td><td>「いないと困る人」だけ呼ぶ</td></tr>
<tr><td><strong>When</strong></td><td>いつ、どのくらいの時間で？</td><td>短いほど集中力が上がる</td></tr>
<tr><td><strong>Where</strong></td><td>どこで、どんな環境で？</td><td>部屋の配置が発言量を変える</td></tr>
<tr><td><strong>How</strong></td><td>どんなプロセスで進めるか？</td><td>議論の流れを事前にデザイン</td></tr>
</tbody>
</table>

<h2>良いアジェンダに必要な4要素</h2>
<div class="info-box tip">
<div class="info-box-title">アジェンダの4要素</div>
<ul>
<li><strong>議題</strong>（何を）</li>
<li><strong>ゴール</strong>（どこまで）</li>
<li><strong>時間</strong>（何分で）</li>
<li><strong>方法</strong>（どうやって）</li>
</ul>
</div>

<h2>座席配置の科学</h2>
<table>
<thead><tr><th>配置</th><th>特徴</th><th>適した用途</th></tr></thead>
<tbody>
<tr><td><strong>スクール型（一方向）</strong></td><td>プレゼンター→参加者</td><td>情報伝達（議論には不向き）</td></tr>
<tr><td><strong>ロの字型</strong></td><td>対面配置</td><td>日本の会議の定番（対立構造を生みやすい）</td></tr>
<tr><td><strong>島型（グループ）</strong></td><td>小グループ配置</td><td>ワークショップ向き</td></tr>
<tr><td><strong>円型・馬蹄型</strong></td><td>全員の顔が見える</td><td>対話と議論に最適、上下関係を感じにくい</td></tr>
</tbody>
</table>

<h2>60分会議の黄金テンプレート</h2>
<table>
<thead><tr><th>時間</th><th>内容</th><th>所要時間</th></tr></thead>
<tbody>
<tr><td>0:00</td><td>オープニング（目的・ゴール・ルール確認）</td><td>5分</td></tr>
<tr><td>0:05</td><td>チェックイン（一人一言）</td><td>5分</td></tr>
<tr><td>0:10</td><td>情報共有</td><td>10分</td></tr>
<tr><td>0:20</td><td>議論・対話（発散→収束→深掘り）</td><td>25分</td></tr>
<tr><td>0:45</td><td>合意形成・Next Action決定</td><td>10分</td></tr>
<tr><td>0:55</td><td>チェックアウト</td><td>5分</td></tr>
</tbody>
</table>

<div class="info-box warning">
<div class="info-box-title">鉄則</div>
議論の時間を最大化するために「情報共有は事前に資料で済ませる」ことが重要です。
</div>`,
            quiz: [
                { id: "q102_1", type: "choice", question: "ファシリテーションの4つのスキルの正しい順序はどれですか？", options: ["引き出す→場のデザイン→構造化→合意形成", "場のデザイン→引き出す→構造化→合意形成", "合意形成→場のデザイン→引き出す→構造化", "構造化→引き出す→合意形成→場のデザイン"], answer: 1, explanation: "正しい順序は「場のデザイン→引き出す→構造化する→合意形成」です。" },
                { id: "q102_2", type: "choice", question: "アジェンダに必要な4要素に含まれないのはどれですか？", options: ["議題", "ゴール", "参加者の肩書き", "方法"], answer: 2, explanation: "アジェンダの4要素は「議題・ゴール・時間・方法」です。" },
                { id: "q102_3", type: "choice", question: "対話と議論に最も適した座席配置はどれですか？", options: ["スクール型", "ロの字型", "島型", "円型・馬蹄型"], answer: 3, explanation: "円型・馬蹄型は全員の顔が見え、上下関係を感じにくく、対話と議論に最適です。" },
                { id: "q102_4", type: "choice", question: "60分会議テンプレートで最も時間を割くべきパートはどれですか？", options: ["情報共有", "議論・対話", "合意形成", "チェックイン"], answer: 1, explanation: "議論・対話（発散→収束→深掘り）に25分と最も多くの時間を割きます。" },
                { id: "q102_5", type: "fill", question: "会議設計の5W1Hのうち、「なぜこの会議が必要か？」を問うのは「____」です。", answer: "Why", explanation: "Whyは会議の目的を問う最も重要な要素で、目的がない会議は開くべきではありません。" }
            ]
        },
        {
            id: 103,
            title: "引き出す技術",
            duration: "20分",
            content: `
<h2>発言を引き出す3つの壁と対策</h2>
<table>
<thead><tr><th>壁</th><th>心理状態</th><th>ファシリの対策</th></tr></thead>
<tbody>
<tr><td><strong>① 心理的安全性の壁</strong></td><td>「こんなこと言ったらバカにされる…」</td><td>グラウンドルールを明示する</td></tr>
<tr><td><strong>② 思考の壁</strong></td><td>「何を言えばいいかわからない…」</td><td>問いを具体的に設計する</td></tr>
<tr><td><strong>③ 表現の壁</strong></td><td>「うまく言えない…」</td><td>書いてから話す、ペアで練習</td></tr>
</tbody>
</table>

<h2>グラウンドルール</h2>
<div class="info-box success">
<div class="info-box-title">安全な場を作る5つのルール</div>
<ol>
<li><strong>「否定しない」</strong>：どんな意見もまず受け止める。「でも」の前に「なるほど」</li>
<li><strong>「肩書きを置く」</strong>：部長もインターンも同じ1票。役職で呼ばない</li>
<li><strong>「質より量」</strong>（発散フェーズ）：完璧じゃなくていい、思いついたら出す</li>
<li><strong>「人の話を最後まで聞く」</strong>：遮らない、被せない</li>
<li><strong>「ここだけの話」</strong>：安心して本音を言える環境</li>
</ol>
<p>ルールは参加者全員で合意して「見える場所」に貼る。最初の5分の投資が残り55分の質を決めます。</p>
</div>

<h2>問いの設計</h2>
<table>
<thead><tr><th>レベル</th><th>種類</th><th>例</th><th>用途</th></tr></thead>
<tbody>
<tr><td>Level 1</td><td>事実の問い</td><td>「今の売上はいくら？」</td><td>ウォームアップ</td></tr>
<tr><td>Level 2</td><td>分析の問い</td><td>「売上が下がっている原因は？」</td><td>メインの議論</td></tr>
<tr><td>Level 3</td><td>価値観の問い</td><td>「最も大切にすべき顧客価値は？」</td><td>深い対話</td></tr>
<tr><td>Level 4</td><td>行動の問い</td><td>「明日から何を変える？」</td><td>アクションにつなげる</td></tr>
</tbody>
</table>

<h2>引き出しの技法10選</h2>
<table>
<thead><tr><th>#</th><th>技法</th><th>やり方</th></tr></thead>
<tbody>
<tr><td>1</td><td>ラウンドロビン</td><td>一人ずつ順番に発言（均等に）</td></tr>
<tr><td>2</td><td>ペアトーク</td><td>2人で話してから全体に共有</td></tr>
<tr><td>3</td><td>付箋ワーク</td><td>先に書いてから貼り出す</td></tr>
<tr><td>4</td><td>沈黙の時間</td><td>「1分間考えてください」</td></tr>
<tr><td>5</td><td>指名</td><td>「○○さん、いかがですか？」</td></tr>
<tr><td>6</td><td>スケーリング</td><td>「10点満点で何点？」</td></tr>
<tr><td>7</td><td>If質問</td><td>「もし制約がなかったら？」</td></tr>
<tr><td>8</td><td>悪魔の代弁者</td><td>あえて反対意見を求める</td></tr>
<tr><td>9</td><td>匿名投票</td><td>紙やアプリで匿名で回答</td></tr>
<tr><td>10</td><td>ボディボート</td><td>賛成なら右、反対なら左に立つ</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">使い分けのコツ</div>
<ul>
<li>発言が少ない → ペアトーク or 付箋ワーク</li>
<li>偏りがある → ラウンドロビン or 指名</li>
<li>本音が出ない → 匿名投票 or If質問</li>
<li>議論が停滞 → 悪魔の代弁者 or スケーリング</li>
</ul>
</div>`,
            quiz: [
                { id: "q103_1", type: "choice", question: "「こんなこと言ったらバカにされる」という心理はどの壁ですか？", options: ["思考の壁", "表現の壁", "心理的安全性の壁", "知識の壁"], answer: 2, explanation: "「バカにされる」という恐れは心理的安全性の壁に該当し、グラウンドルールの明示が対策です。" },
                { id: "q103_2", type: "choice", question: "グラウンドルールに含まれるのはどれですか？", options: ["発言は1人3回まで", "否定しない", "リーダーの意見を優先", "時間厳守のみ"], answer: 1, explanation: "「否定しない」はグラウンドルールの基本で、どんな意見もまず受け止めることを意味します。" },
                { id: "q103_3", type: "choice", question: "本音が出ない場面で有効な技法はどれですか？", options: ["ラウンドロビン", "指名", "匿名投票", "スクール型配置"], answer: 2, explanation: "本音が出にくい場面では匿名投票やIf質問が効果的です。" },
                { id: "q103_4", type: "choice", question: "「明日から何を変えますか？」はどのレベルの問いですか？", options: ["事実の問い", "分析の問い", "価値観の問い", "行動の問い"], answer: 3, explanation: "「明日から何を変える？」は行動の問い（Level 4）で、具体的なアクションにつなげる問いです。" },
                { id: "q103_5", type: "fill", question: "「2人で話してから全体に共有する」技法を「____トーク」といいます。", answer: "ペア", explanation: "ペアトークは2人で話してから全体に共有する技法で、発言が少ない場面で特に効果的です。" }
            ]
        }
    ]
};
