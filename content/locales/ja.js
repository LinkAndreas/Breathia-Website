// Japanese copy. Keys mirror en.js. Polite です/ます register as in the app; Japanese punctuation (、。「」).

export default {
  meta: {
    title: 'Breathia — 心拍変動（HRV）のリアルタイム・バイオフィードバック付き呼吸ガイド',
    description:
      'Breathiaは、iPhone、iPad、Mac、Apple Watchで{count}種類の呼吸テクニックをガイドします。Polar H10などのBluetooth心拍センサーを使えば、心拍数とHRVの反応をリアルタイムで確認できます。無料、プライバシー重視、アカウント不要です。',
    ogTitle: 'Breathia — ゆっくり呼吸すると、心臓もついてくる。',
    ogDescription:
      '心拍数とHRVのリアルタイムのフィードバック付き呼吸ガイド。iPhone、iPad、Mac、Apple Watch向けの{count}種類のテクニック。',
    ogImageAlt:
      'BreathiaのAppアイコン（2つの波の上に沈む太陽）と、「心拍数とHRVのリアルタイム・バイオフィードバック付き呼吸ガイド」という言葉。',
  },

  common: {
    skip: 'コンテンツへスキップ',
    backToTop: 'Breathia、ページの先頭へ戻る',
    sections: 'セクション',
    download: 'ダウンロード',
    appStoreBadge: 'App Storeからダウンロード',
    language: '言語',
    chooseLanguage: '言語を選択',
    home: 'ホーム',
    themeToDark: 'ダークモードに切り替える',
    themeToLight: 'ライトモードに切り替える',
  },

  nav: {
    breathe: '呼吸',
    biofeedback: 'バイオフィードバック',
    sensors: 'センサー',
    techniques: 'テクニック',
    privacy: 'プライバシー',
  },

  hero: {
    eyebrow: 'iPhone、iPad、Mac、Apple Watch向けBreathia',
    title: 'ゆっくり呼吸すると、<br /><span class="hero__title-glow">心臓もついてくる。</span>',
    lede: '心臓からのリアルタイムのフィードバック付き呼吸ガイド。{count}種類のテクニックから選び、一つひとつの呼吸のペースを導くサークルに合わせるだけ。心拍数と心拍変動（HRV）の反応を、その場で確認できます。',
    secondary: 'しくみを見る',
    meta: '無料 · アカウント不要 · センサーの有無を問わず利用可能',
    phoneAlt:
      'iPhoneでのBreathiaのセッション：呼吸サークルが共鳴呼吸の「吐く」をカウントダウンし、その下に呼吸と心臓が同調していることを示すメッセージと、心拍数とHRVのリアルタイムグラフが表示されています。',
  },

  glance: {
    label: 'Breathiaの概要',
    techniques: '呼吸テクニック',
    categories: 'カテゴリ（「睡眠」から「集中」まで）',
    platforms: 'プラットフォーム、1つのApp',
    accounts: 'アカウント・サーバー',
  },

  breathe: {
    eyebrow: '呼吸ガイド',
    title: 'あなたと一緒に呼吸するサークル。',
    lede: 'サークルは息を吸うと大きくなり、吐くと小さくなります。中央のカウントは吸うときと止めるときに増え、吐くときに減っていきます。目を半分閉じていても、今どこにいるのかがいつでもわかります。',
    ticks: [
      '<strong>触覚による合図と、穏やかで自然な8つのサウンド</strong>（シンギングボウルやウィンドチャイムから波の音まで、好みの音量で）が呼吸の切り替わりを知らせるので、目を閉じてただ身をゆだねられます。',
      '<strong>短いカウントダウン</strong>で準備を整え、最初に何をするかを表示します。',
      '呼吸しているあいだは<strong>画面がオンのまま</strong>です。Appを離れるとセッションは一時停止するので、離れていた時間はカウントされません。',
    ],
    tryLabel: 'テクニックを試す',
    play: '再開',
    demoNote: 'Breathiaの呼吸サークルのインタラクティブなプレビューです。テクニックを選ぶと、そのリズムを確認できます。',
  },

  bio: {
    eyebrow: 'リアルタイムのバイオフィードバック',
    title: '心臓が呼吸に<br class="br-lg" />なじんでいく様子を見る。',
    lede: 'Bluetooth心拍センサーを装着すると、呼吸に合わせて心拍数と心拍変動がどう変化するかを、Breathiaが1拍ごとにリアルタイムで表示します。',
    deviceAlt:
      'iPhoneでのリアルタイムの共鳴呼吸セッション：呼吸サークル、セッションの進行状況、呼吸と心臓が同調していることを示すメッセージ、心拍数とHRV（RMSSD）のリアルタイムグラフ。',
    cards: [
      {
        title: '心拍数とHRVをリアルタイムで',
        body: 'どちらもセンサーが送信する心拍間隔（RR間隔）から計算され、1拍ごとに更新されます。HRVの指標は、RMSSDとSDNNから選べます。',
      },
      {
        title: '傾向がひと目でわかる',
        body: 'HRVが上昇中か、安定しているか、低下中かをBreathiaが知らせるので、心臓と呼吸がそろった瞬間に気づけます。フィードバックの感度は「低」「標準」「高」から設定できます。',
      },
      {
        title: 'ノイズのないきれいなデータ',
        body: '検出できなかった心拍や、肌に接触していないときの測定値は除外されるので、グラフには実際に起きたことが表示されます。',
      },
    ],
    chartTitle: 'イラスト：心拍数は呼吸に合わせて、吸うたびに上がり、吐くたびに下がります。',
    keyBreath: 'あなたの呼吸',
    keyHeart: 'あなたの心拍数',
    chartNote:
      '心臓は、息を吸うと自然に少し速くなり、吐くと遅くなります。1分間に5〜6回程度のゆっくりとした呼吸をすると、このリズムが強まる傾向があります。',
  },

  sensors: {
    eyebrow: 'センサー',
    title: 'センサーは数秒でペアリング。<br class="br-lg" />なくても使えます。',
    recommended: 'おすすめ',
    polarBody:
      'Polar H10はその好例です。心拍数と心拍ごとのRR間隔を送信するので、正確なHRVを得られます。電極を湿らせてストラップを装着すれば、数秒でBreathiaに表示されます。',
    bleTitle: 'あらゆるBluetooth心拍センサー',
    bleBody:
      '標準のBluetooth心拍数サービスに対応した胸部ストラップやアームバンドなら、同じ方法でペアリングでき、心拍数を表示できます。HRVを測定するには、胸部ストラップのようにRR間隔も送信できる必要があります。',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watchがセッション中の心拍数を測定するので、センサーは必要ありません。',
    noneTitle: 'センサーがなくても大丈夫。',
    noneBody:
      'すべてのテクニックはセンサーなしでも使えます。どのセッションも履歴とマインドフルネスの時間にきちんと記録されます。',
    fineprint:
      'センサーはiPhone、iPad、Macで接続できます。BreathiaがBluetoothを使用するのは心拍センサーへの接続のためだけで、ほかのデバイスを探したり、その情報を収集したりすることはありません。',
  },

  how: {
    eyebrow: 'しくみ',
    title: 'ダウンロードから最初の呼吸まで、<br class="br-lg" />1分もかかりません。',
    steps: [
      {
        title: 'テクニックを選ぶ',
        body: '落ち着き、睡眠、集中、エネルギーなど、今必要なものを選ぶか、名前で検索します。センサーはツールバーから接続できます。',
        alt: 'カテゴリ別にテクニックが並ぶ「呼吸」タブ。フィルタと、心拍数を表示している接続済みのセンサー。',
      },
      {
        title: 'サークルに合わせて呼吸する',
        body: 'サークル、カウント、合図に従って呼吸します。呼吸に合わせて心拍数とHRVが更新されます。',
        alt: '呼吸サークル、セッションの進行状況、心拍数とHRVのグラフが表示されたリアルタイムのセッション。',
      },
      {
        title: '変化を確かめる',
        body: 'セッションレポートでは、1秒ごとの心拍数、呼吸ごとの心拍の上下、HRVの推移をグラフで確認でき、それぞれわかりやすい言葉で説明されます。',
        alt: 'セッションレポート：心拍数が71から55へ16 BPM落ち着いたことを示すメッセージと、平均・最低・最高の値。その下に1秒ごとの心拍数グラフ。',
      },
    ],
  },

  library: {
    eyebrow: 'テクニックライブラリ',
    title: '{count}種類のテクニック。<br />そのすべてを解説。',
    lede: 'ボックス呼吸や生理的ため息から、共鳴呼吸や片鼻交互呼吸まで。どのテクニックについても、しくみ、特に役立つ場面、ステップごとのやり方、そして注意すべき点を知ることができます。',
    phoneAlt:
      '共鳴呼吸の詳細ページ：吸う5秒、吐く5秒、10分のセッション。「しくみ」「おすすめの場面」「やり方」のセクション付き。',
    filterLabel: 'カテゴリでテクニックを絞り込む',
    fineprint:
      'すべてのテクニックが誰にでも合うわけではありません。各テクニックには安全上の注意があります。必ず読んで、気分が悪くなったら中止してください。',
  },

  history: {
    eyebrow: '履歴とヘルスケア',
    title: 'すべてのセッションを、<br />記録に残す。',
    lede: '履歴には、心拍数とHRVの推移を含むすべてのセッションが、デバイス上に保存されます。過去1週間や1か月を振り返り、あなたの練習と心臓がどう変わっていくかを確かめられます。',
    ticks: [
      '<strong>ヘルスケアにマインドフルネスの時間を記録。</strong>希望すれば、完了したセッションをマインドフルネスの時間として保存できます。iPhone、iPad、Macでは、Breathiaはヘルスケアに書き込むだけで、ヘルスケアデータを読み取ることはありません。',
      '<strong>Apple Watchのセッションも。</strong>Apple Watchで行ったセッションは、iPhoneの履歴に表示されます。',
    ],
    listAlt: '過去の呼吸セッションを「昨日」「過去7日間」「過去30日間」に分けて表示する「履歴」タブ。',
    detailAlt: '詳細な心拍数グラフが表示された、保存済みの共鳴呼吸のセッションレポート。',
  },

  everywhere: {
    eyebrow: 'すべてのデバイスで',
    title: 'ひと息つきたい、どんなときにも。',
    watchTitle: 'Apple Watch',
    watchBody: '手首からそのまま呼吸を始められます。やさしいタップでガイドされ、心拍数も測定されます。セッションはiPhoneの履歴と同期します。',
    watchListAlt: 'Apple Watchのテクニックリスト。',
    watchSessionAlt: 'Apple Watchでのセッション：「吐く 2」と、その上に表示された心拍数。',
    watchSummaryAlt: 'iPhoneの履歴と同期中の、Apple Watchのセッション概要。',
    liveTitle: 'ライブアクティビティ',
    liveBody: 'ロック画面やDynamic Islandでセッションの状況を確認できます。経過時間がわかり、Appを開かずに一時停止や終了ができます。',
    liveNote: 'イメージ図です。',
    ipadTitle: 'iPad',
    ipadBody: '大きな画面では、テクニックとその詳細が横に並んで表示されます。iPhoneと同じくBluetoothセンサーにも対応しています。',
    macTitle: 'Mac',
    macBody: 'やわらかな音の合図を備えた、ネイティブのMac App。同じBluetoothセンサーを接続でき、すべてのセッションを履歴で振り返れます。',
    ipadAlt: 'iPadでのBreathia：カテゴリ別のテクニックリストと、その横にボックス呼吸の詳細。',
    macAlt: 'MacでのBreathia：セッションレポートが表示された履歴。開始時・平均・終了時の心拍数と、上昇中のHRV。',
  },

  privacy: {
    eyebrow: 'プライバシー',
    title: 'あなたの呼吸は、あなただけのもの。',
    lede: 'Breathiaにはアカウントもサーバーもありません。心拍数の測定値、HRV、セッション履歴は、あなたのデバイスに保存されます。セッションがヘルスケアに送られるのは、その機能をオンにした場合だけです。',
    pillars: [
      { title: 'デバイス上に保存', body: '履歴と設定はあなたのデバイスに保存されます。Appを削除すれば、そのデータも一緒に削除されます。' },
      { title: 'アカウント不要', body: 'Appを開いたら、すぐに呼吸を始められます。登録もログインも不要です。' },
      { title: 'すべての機能が無料', body: 'Breathiaは完全無料です。すべての機能とすべてのAppアイコンを無料で使えます。App内課金も広告もありません。' },
    ],
    link: 'プライバシーポリシーを読む',
  },

  icons: {
    eyebrow: 'Appアイコン',
    title: '自分好みに。',
    lede: '8つのAppアイコンから好きなものを選べます。iPhoneとiPadでは、選んだアイコンのカラーにBreathiaが合わせて表示されます。',
    label: 'Appアイコン',
    names: { classic: 'クラシック', amethyst: 'アメジスト', blush: 'ブラッシュ', ember: 'エンバー', glacier: 'グレイシャー', lagoon: 'ラグーン', midnightGold: 'ナイトゴールド', noir: 'ノワール' },
    note: 'Breathiaのすべての機能と同じく、どのアイコンも誰でも無料で使えます。',
  },

  cta: {
    iconAlt: 'BreathiaのAppアイコン',
    title: 'ひと呼吸。<br />そして、もうひと呼吸。',
    lede: 'Breathiaは、iPhone、iPad、Mac、Apple Watch向けにApp Storeで無料配信中です。',
    meta: '11言語に対応',
  },

  footer: {
    label: '法的情報とお問い合わせ',
    versions: 'バージョン履歴',
    privacy: 'プライバシーポリシー',
    imprint: '法的表示',
    terms: '利用規約',
    feedback: 'フィードバックを送信',
    disclaimer:
      'BreathiaはウェルネスのためのAppであり、医療機器ではありません。病気の診断や治療を目的としたものではありません。PolarおよびH10はPolar Electro Oyの商標です。Apple、Appleのロゴ、Apple Watch、iPad、iPhone、Mac、MacBook、App Storeは、米国およびその他の国や地域で登録されたApple Inc.の商標です。',
  },

  versions: {
    title: 'バージョン履歴',
    lede: 'App StoreのBreathiaの各バージョンの新機能。',
    description: 'App Storeで公開されたBreathiaのすべてのリリースと、その内容（iPhone、iPad、Mac、Apple Watch向け）。',
    version: 'バージョン',
  },

  legal: {
    effective: '施行日',
    lastUpdated: '施行日',
    contents: '目次',
    otherLanguages: 'ほかの言語',
    backHome: 'Breathiaに戻る',
    privacyTitle: 'プライバシーポリシー',
    privacyDescription:
      'Breathiaにおけるデータの取り扱いについて：アカウントなし、サーバーなし、トラッキングなし。心拍数、HRV、セッション履歴はあなたのデバイスに保存されます。',
    termsTitle: '利用規約',
    termsDescription:
      'Breathia Appの利用規約：Appleの標準使用許諾契約（EULA）に、健康に関する注意事項と責任についての簡単な追加条項を加えたものです。',
    imprintTitle: '法的表示（Impressum）',
    imprintDescription: 'Breathiaの法的表示（Impressum）：ドイツデジタルサービス法（DDG）第5条に基づく提供者情報。',
    redirecting: 'リダイレクトしています…',
  },
};
