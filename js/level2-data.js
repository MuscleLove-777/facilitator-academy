const LEVEL2_DATA = {
    id: 2,
    title: "傾聴・構造化・合意形成",
    icon: "🎧",
    description: "傾聴と応答の技術、構造化の方法、合意形成の手法を学ぶ",
    modules: [
        {
            id: 201,
            title: "傾聴と応答の技術",
            duration: "20分",
            content: `
<h2>傾聴の4レベル</h2>
<table>
<thead><tr><th>レベル</th><th>名称</th><th>内容</th><th>例</th></tr></thead>
<tbody>
<tr><td><strong>Level 4</strong></td><td>生成的傾聴</td><td>まだ語られていない可能性や未来を一緒に感じ取る</td><td>「この先に何が見えますか？」</td></tr>
<tr><td><strong>Level 3</strong></td><td>共感的傾聴</td><td>相手の感情や背景にある想いを感じながら聴く</td><td>「それは悔しかったですよね」</td></tr>
<tr><td><strong>Level 2</strong></td><td>集中的傾聴</td><td>内容を正確に理解しようとする</td><td>「つまり○○ということですね？」</td></tr>
<tr><td><strong>Level 1</strong></td><td>自動的傾聴</td><td>聞いているようで自分の考えで頭がいっぱい</td><td>「（次に何を言おうかな…）」← 大半の人がここ</td></tr>
</tbody>
</table>

<h2>ファシリテーターの7つの応答パターン</h2>
<table>
<thead><tr><th>#</th><th>パターン</th><th>やり方</th></tr></thead>
<tbody>
<tr><td>①</td><td><strong>受容</strong></td><td>「なるほど、そういう見方があるんですね」（評価せず受け止める）</td></tr>
<tr><td>②</td><td><strong>繰り返し</strong></td><td>「○○さんのおっしゃるのは、〜ということですね」（言い換えて確認）</td></tr>
<tr><td>③</td><td><strong>要約</strong></td><td>「ここまでの議論をまとめると、3つの論点がありますね」</td></tr>
<tr><td>④</td><td><strong>深掘り</strong></td><td>「もう少し詳しく聞かせてください」（本音を引き出す）</td></tr>
<tr><td>⑤</td><td><strong>転換</strong></td><td>「今の意見について、他の方はいかがですか？」（全体に広げる）</td></tr>
<tr><td>⑥</td><td><strong>橋渡し</strong></td><td>「○○さんと△△さんの意見には共通点がありそうですね」</td></tr>
<tr><td>⑦</td><td><strong>メタ質問</strong></td><td>「今、議論が止まっていますが、何が起きていると思いますか？」</td></tr>
</tbody>
</table>

<h2>やってはいけない応答（NG行動）</h2>
<table>
<thead><tr><th>NG行動</th><th>具体例</th><th>正しい対応</th></tr></thead>
<tbody>
<tr><td><strong>ジャッジする</strong></td><td>「それは違う」「いい意見ですね」（評価もNG）</td><td>「ありがとうございます。他の方は？」</td></tr>
<tr><td><strong>自分の意見を言う</strong></td><td>「私は○○だと思いますけどね」</td><td>中立を守る（言うなら「帽子を外して」と前置き）</td></tr>
<tr><td><strong>特定の人に偏る</strong></td><td>「部長、いかがでしょう？」</td><td>役職の低い人から順に聞く</td></tr>
<tr><td><strong>結論を誘導する</strong></td><td>「やっぱりAがいいですよね？」</td><td>選択は参加者に委ねる</td></tr>
<tr><td><strong>沈黙を恐れる</strong></td><td>すぐに次の話題に移る</td><td>最低10秒は待つ。「考える時間をとりましょう」</td></tr>
</tbody>
</table>`,
            quiz: [
                { id: "q201_1", type: "choice", question: "傾聴の4レベルで「大半の人がここ」とされるのはどのレベルですか？", options: ["Level 4：生成的傾聴", "Level 3：共感的傾聴", "Level 2：集中的傾聴", "Level 1：自動的傾聴"], answer: 3, explanation: "Level 1の自動的傾聴は、聞いているようで自分の考えで頭がいっぱいの状態で、大半の人がここに該当します。" },
                { id: "q201_2", type: "choice", question: "「ここまでの議論をまとめると3つの論点がありますね」はどの応答パターンですか？", options: ["受容", "繰り返し", "要約", "転換"], answer: 2, explanation: "散らかった議論を整理して見せるのは「要約」の応答パターンです。" },
                { id: "q201_3", type: "choice", question: "ファシリテーターのNG行動はどれですか？", options: ["沈黙を待つ", "「いい意見ですね」と評価する", "「他の方はいかがですか」と転換する", "「もう少し詳しく」と深掘りする"], answer: 1, explanation: "「いい意見ですね」も評価（ジャッジ）にあたりNG行動です。良い/悪いの評価はしないことが原則です。" },
                { id: "q201_4", type: "choice", question: "自分の意見を言いたいときのファシリテーターの正しい対応は？", options: ["黙って我慢する", "「帽子を外して一参加者として」と前置きする", "会議後に個別に伝える", "メールで送る"], answer: 1, explanation: "意見を言いたい場合は「帽子を外して一参加者として」と前置きし、ファシリテーター役から一時的に離れることを明示します。" },
                { id: "q201_5", type: "fill", question: "「今、議論が止まっていますが、何が起きていると思いますか？」のように議論のプロセス自体を振り返らせる応答を「____質問」といいます。", answer: "メタ", explanation: "メタ質問は議論のプロセス自体を参加者に振り返らせる高度な応答技術です。" }
            ]
        },
        {
            id: 202,
            title: "構造化の技術",
            duration: "20分",
            content: `
<h2>ホワイトボード・ファシリテーション</h2>
<div class="info-box tip">
<div class="info-box-title">議論と同時に「書く」効果</div>
<ul>
<li>参加者が「聞いてもらえている」と感じる</li>
<li>議論の全体像が見える（迷子にならない）</li>
<li>後から振り返れる（議事録になる）</li>
<li>脱線を防げる（書いてないことは脱線）</li>
</ul>
</div>

<h2>構造化のフレームワーク集</h2>
<h3>① マトリクス（2軸で整理）</h3>
<p>「効果」と「実現性」の2軸で案を4象限に配置します。</p>
<ul>
<li>効果(大)×実現性(高)＝ <strong>最優先（A案）</strong></li>
<li>効果(大)×実現性(低)＝ 検討（B案）</li>
<li>効果(小)×実現性(高)＝ 余力あれば（C案）</li>
<li>効果(小)×実現性(低)＝ 見送り（D案）</li>
</ul>

<h3>② ロジックツリー（原因分解）</h3>
<p>問題を構造的に分解して原因を特定する方法です。例えば「売上が下がっている」を「客数の減少」と「客単価の低下」に分解し、さらにそれぞれの原因を掘り下げます。</p>

<h3>③ タイムライン（時系列整理）</h3>
<p>「過去（何があった）」→「現在（今どうなっている）」→「未来（どうしたいか）」の3段階で整理します。</p>

<h3>④ ステークホルダーマップ</h3>
<p>「影響力」と「関心度」の2軸で関係者を分類し、味方につける人、情報提供する人を特定します。</p>

<h2>ファシリテーション・グラフィック</h2>
<table>
<thead><tr><th>要素</th><th>使い方</th></tr></thead>
<tbody>
<tr><td><strong>色の使い分け</strong></td><td>黒＝事実、赤＝課題、青＝意見、緑＝決定事項</td></tr>
<tr><td><strong>記号</strong></td><td>★＝重要、?＝未決定、!＝気づき、→＝因果関係、○＝合意</td></tr>
<tr><td><strong>囲みの使い分け</strong></td><td>四角＝事実・決定、角丸＝意見・アイデア、雲型＝モヤモヤ</td></tr>
</tbody>
</table>`,
            quiz: [
                { id: "q202_1", type: "choice", question: "マトリクスで「最優先」とされるのはどの象限ですか？", options: ["効果(大)×実現性(低)", "効果(大)×実現性(高)", "効果(小)×実現性(高)", "効果(小)×実現性(低)"], answer: 1, explanation: "効果が大きく実現性も高い案が最優先（A案）とされます。" },
                { id: "q202_2", type: "choice", question: "ホワイトボードに書く際、「決定事項」に使う色は？", options: ["黒", "赤", "青", "緑"], answer: 3, explanation: "緑は決定事項・Next Actionに使います。黒＝事実、赤＝課題、青＝意見です。" },
                { id: "q202_3", type: "choice", question: "問題を構造的に分解して原因を特定する方法は何ですか？", options: ["マトリクス", "ロジックツリー", "タイムライン", "ステークホルダーマップ"], answer: 1, explanation: "ロジックツリーは問題を構造的に分解して原因を特定するフレームワークです。" },
                { id: "q202_4", type: "choice", question: "リアルタイム可視化で「モヤモヤ・未整理の想い」に使う囲みは？", options: ["四角", "角丸", "雲型", "丸"], answer: 2, explanation: "雲型の囲みは「モヤモヤ・未整理の想い」を表現するのに使います。" },
                { id: "q202_5", type: "fill", question: "「過去→現在→未来」の3段階で情報を整理するフレームワークを「____」といいます。", answer: "タイムライン", explanation: "タイムラインは「何があった（過去）→今どうなっている（現在）→どうしたいか（未来）」の時系列整理です。" }
            ]
        },
        {
            id: 203,
            title: "合意形成の技術",
            duration: "20分",
            content: `
<h2>合意の5段階（グラデーション・オブ・アグリーメント）</h2>
<table>
<thead><tr><th>レベル</th><th>状態</th><th>発言例</th></tr></thead>
<tbody>
<tr><td>Level 5</td><td>全面賛成</td><td>「大賛成！最高のアイデアだ！」</td></tr>
<tr><td>Level 4</td><td>賛成（小さな懸念あり）</td><td>「いいと思う。少し気になる点はあるけど支持する」</td></tr>
<tr><td><strong>Level 3</strong></td><td><strong>条件付き賛成 ← 多くの合意はここ</strong></td><td>「○○を修正してくれるなら賛成できる」</td></tr>
<tr><td>Level 2</td><td>消極的受容</td><td>「自分は反対だけど、チームの決定には従う」</td></tr>
<tr><td>Level 1</td><td>反対（ブロック）</td><td>「これだけは受け入れられない。止めてほしい」</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">現実的な合意形成</div>
<ul>
<li>全員がLevel 5である必要はない</li>
<li>Level 3〜4が多数なら進めてOK</li>
<li>Level 1が1人でもいたら、その懸念に向き合う必要がある</li>
<li>「全員がLevel 2以上」を目指すのが現実的</li>
</ul>
</div>

<h2>合意形成の手法</h2>
<table>
<thead><tr><th>#</th><th>手法</th><th>使い方</th></tr></thead>
<tbody>
<tr><td>1</td><td><strong>フィスト・トゥ・ファイブ</strong></td><td>賛成=5本指、反対=グー。全員同時に出す</td></tr>
<tr><td>2</td><td><strong>ドット投票</strong></td><td>各自3〜5個のシールを推す案に貼る</td></tr>
<tr><td>3</td><td><strong>Gradients of Agreement</strong></td><td>1〜5で合意度を示し、低い人の懸念を深掘り</td></tr>
<tr><td>4</td><td><strong>コンセンサスプロポーザル</strong></td><td>全員が従える提案を練り上げる</td></tr>
<tr><td>5</td><td><strong>条件交渉</strong></td><td>「○○を加えたら賛成できますか？」</td></tr>
</tbody>
</table>

<h2>対立のマネジメント</h2>
<div class="info-box success">
<div class="info-box-title">対立解消の4ステップ</div>
<ol>
<li><strong>Step 1：対立を「見える化」する</strong>
<p>「今、AさんとBさんの意見が対立していますね。それぞれの主張を整理しましょう」</p></li>
<li><strong>Step 2：対立の「背景」を掘る</strong>
<p>「なぜコストを重視するのですか？」「品質にこだわる理由は？」</p></li>
<li><strong>Step 3：共通のゴールを確認する</strong>
<p>「お二人とも事業の持続的成長を望んでいますよね？」</p></li>
<li><strong>Step 4：第三の選択肢を探す</strong>
<p>「コストを抑えつつ品質を維持する方法はないですか？」→ Win-Win案</p></li>
</ol>
</div>`,
            quiz: [
                { id: "q203_1", type: "choice", question: "合意の5段階で「多くの合意はここ」とされるのはどのレベルですか？", options: ["Level 5：全面賛成", "Level 4：賛成", "Level 3：条件付き賛成", "Level 2：消極的受容"], answer: 2, explanation: "Level 3（条件付き賛成）は最も一般的な合意の形で、条件を修正することで賛成を得られる状態です。" },
                { id: "q203_2", type: "choice", question: "Level 1（ブロック）の参加者が1人いた場合、どうすべきですか？", options: ["多数決で決める", "無視して進める", "その懸念に向き合う", "会議を中止する"], answer: 2, explanation: "Level 1が1人でもいたら、その懸念に向き合う必要があります。ブロッキングの懸念を解消する努力が重要です。" },
                { id: "q203_3", type: "choice", question: "対立解消の4ステップの正しい順序は？", options: ["背景を掘る→見える化→共通ゴール→第三の選択肢", "見える化→背景を掘る→共通ゴール→第三の選択肢", "共通ゴール→見える化→背景を掘る→第三の選択肢", "第三の選択肢→見える化→背景を掘る→共通ゴール"], answer: 1, explanation: "正しい順序は「見える化→背景を掘る→共通ゴール確認→第三の選択肢」です。" },
                { id: "q203_4", type: "choice", question: "「各自3〜5個のシールを推す案に貼る」手法は何ですか？", options: ["フィスト・トゥ・ファイブ", "ドット投票", "条件交渉", "コンセンサスプロポーザル"], answer: 1, explanation: "ドット投票は各自にシールを配り、推す案に貼ることで視覚的に優先度を把握する手法です。" },
                { id: "q203_5", type: "fill", question: "「賛成=5本指、反対=グーで全員同時に出す」合意確認法を「フィスト・トゥ・____」といいます。", answer: "ファイブ", explanation: "フィスト・トゥ・ファイブ（Fist to Five）は全員が同時に指の数で合意度を示す手法です。" }
            ]
        }
    ]
};
