// Simplified Chinese copy. Keys mirror en.js. "你" as in the app; Chinese full-width punctuation, a space between Chinese and Latin text or numbers.

export default {
  meta: {
    title: 'Breathia — 实时 HRV 生物反馈引导呼吸',
    description:
      'Breathia 在 iPhone、iPad、Mac 和 Apple Watch 上带你练习 {count} 种呼吸法，并借助 Polar H10 等蓝牙心率传感器，实时显示你的心率和 HRV 如何变化。免费、注重隐私，无需账户。',
    ogTitle: 'Breathia — 呼吸放慢，心跳随之。',
    ogDescription:
      '引导式呼吸，配有实时心率和 HRV 反馈。{count} 种呼吸法，适用于 iPhone、iPad、Mac 和 Apple Watch。',
    ogImageAlt:
      'Breathia App 图标（两道波浪上方的落日），旁边写着：Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: '跳到内容',
    backToTop: 'Breathia，返回顶部',
    sections: '版块',
    download: '下载',
    appStoreBadge: '在 App Store 下载',
    language: '语言',
    chooseLanguage: '选择语言',
    home: '首页',
    themeToDark: '切换到深色外观',
    themeToLight: '切换到浅色外观',
  },

  nav: {
    breathe: '呼吸',
    biofeedback: '生物反馈',
    sensors: '传感器',
    techniques: '呼吸法',
    privacy: '隐私',
  },

  hero: {
    eyebrow: 'Breathia，适用于 iPhone、iPad、Mac 和 Apple Watch',
    title: '呼吸放慢，<br /><span class="hero__title-glow">心跳随之。</span>',
    lede: '引导式呼吸，配有来自你心脏的实时反馈。从 {count} 种呼吸法中任选其一，跟随为每次呼吸定速的圆圈，同时看到你的心率和心率变异性（HRV）随之变化。',
    secondary: '了解工作原理',
    meta: '免费 · 无需账户 · 有无传感器均可使用',
    phoneAlt:
      'iPhone 上的 Breathia 练习：呼吸圆圈正在为共振呼吸的呼气倒数，下方提示呼吸与心跳已同步，并显示实时心率和 HRV 图表。',
  },

  glance: {
    label: 'Breathia 一览',
    techniques: '种呼吸法',
    categories: '个类别，从睡眠到专注',
    platforms: '个平台，一个 App',
    accounts: '账户或服务器',
  },

  breathe: {
    eyebrow: '呼吸引导',
    title: '一个与你同呼吸的圆圈。',
    lede: '吸气时圆圈扩大，呼气时圆圈缩小。吸气和屏息时，中间的数字递增；呼气时，数字递减。因此即使半闭着眼睛，你也始终知道自己进行到了哪一步。',
    ticks: [
      '<strong>触感提示和八种平静、自然的声音</strong>（从颂钵、风铃到海浪，音量由你设定）会标记每一次阶段转换，你可以闭上眼睛，只管跟随。',
      '<strong>简短的倒计时</strong>帮你做好准备，并告诉你第一步是什么。',
      '<strong>屏幕保持常亮</strong>，直到你完成呼吸。离开 App 时练习会暂停，离开的时间不会计入。',
    ],
    tryLabel: '试试一种呼吸法',
    play: '继续',
    demoNote: 'Breathia 呼吸圆圈的交互式预览。选择一种呼吸法，即可查看它的节奏。',
  },

  bio: {
    eyebrow: '实时生物反馈',
    title: '看着你的心跳<br class="br-lg" />融入你的呼吸。',
    lede: '戴上蓝牙心率传感器，Breathia 就会实时、逐次心跳地显示你的心率和心率变异性如何随呼吸变化。',
    deviceAlt:
      'iPhone 上正在进行的共振呼吸练习：呼吸圆圈、练习进度、呼吸与心跳已同步的提示，以及实时心率和 HRV（RMSSD）图表。',
    cards: [
      {
        title: '实时心率和 HRV',
        body: '两者都会随每一次心跳更新，依据传感器发送的逐次心跳（RR）间期计算得出。RMSSD 或 SDNN，选择你偏好的 HRV 指标即可。',
      },
      {
        title: '趋势一目了然',
        body: 'Breathia 会告诉你 HRV 是在上升、保持稳定还是下降，让你察觉心跳与呼吸何时变得合拍。反馈灵敏度可设为“低”“均衡”或“高”。',
      },
      {
        title: '干净的数据，而非噪声',
        body: '漏检的心跳和未接触皮肤时的读数都会被过滤掉，因此图表呈现的就是真实发生的情况。',
      },
    ],
    chartTitle: '示意图：心率随每次吸气上升、随每次呼气下降，跟随呼吸起伏。',
    keyBreath: '你的呼吸',
    keyHeart: '你的心率',
    chartNote:
      '吸气时，心跳会自然地稍稍加快；呼气时，又会稍稍放慢。缓慢呼吸（每分钟约 5 到 6 次）往往能让这种节律更加明显。',
  },

  sensors: {
    eyebrow: '传感器',
    title: '几秒钟即可配对传感器。<br class="br-lg" />不用传感器也没关系。',
    recommended: '推荐',
    polarBody:
      'Polar H10 就是一个很好的例子。它会发送你的心率和逐次心跳的 RR 间期，以准确测量 HRV。润湿电极、戴上胸带，几秒钟内它就会出现在 Breathia 中。',
    bleTitle: '任何蓝牙心率传感器',
    bleBody:
      '任何使用标准蓝牙心率服务的胸带或臂带，都能以同样的方式配对并显示你的心率。若要测量 HRV，它还需要发送 RR 间期，胸带均可做到。',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watch 会在练习期间测量你的心率，无需其他传感器。',
    noneTitle: '没有传感器？没问题。',
    noneBody:
      '所有呼吸法都可以在没有传感器的情况下使用，每次练习依然会计入你的历史记录和正念分钟数。',
    fineprint:
      '传感器可在 iPhone、iPad 和 Mac 上连接。Breathia 仅使用蓝牙连接你的心率传感器，不会搜索或收集任何其他设备的信息。',
  },

  how: {
    eyebrow: '工作原理',
    title: '从下载到第一次呼吸，<br class="br-lg" />不到一分钟。',
    steps: [
      {
        title: '选择呼吸法',
        body: '选择你此刻需要的：平静、睡眠、专注或活力，也可以按名称搜索。从工具栏连接你的传感器。',
        alt: '“呼吸”标签页按类别列出呼吸法，带有筛选器，已连接的传感器显示着心率。',
      },
      {
        title: '跟随圆圈呼吸',
        body: '跟随圆圈、计数和提示。你的心率和 HRV 会随着呼吸更新。',
        alt: '正在进行的练习，显示呼吸圆圈、练习进度以及心率和 HRV 图表。',
      },
      {
        title: '看看有何变化',
        body: '练习报告会逐秒绘制你的心率图表，显示心率如何随每次呼吸起伏，以及 HRV 如何变化，每一项都配有通俗易懂的说明。',
        alt: '一份练习报告：提示心率从 71 降至 55，下降了 16 次/分，并列出平均值、最低值和最高值，下方是逐秒心率图表。',
      },
    ],
  },

  library: {
    eyebrow: '呼吸法库',
    title: '{count} 种呼吸法。<br />每一种都有详细说明。',
    lede: '从箱式呼吸、生理性叹息，到共振呼吸和交替鼻孔呼吸。每种呼吸法都会告诉你它的原理、最适合什么场景、如何一步步练习，以及需要注意什么。',
    phoneAlt:
      '共振呼吸的详情页：吸气 5 秒，呼气 5 秒，练习 10 分钟，包含“原理”“适用场景”和“练习方法”等部分。',
    filterLabel: '按类别筛选呼吸法',
    fineprint:
      '并非每种呼吸法都适合所有人。每种呼吸法都附有安全提示，请务必阅读；如感到不适，请停止练习。',
  },

  history: {
    eyebrow: '历史记录与“健康”App',
    title: '每一次练习，<br />都有记录。',
    lede: '历史记录会将每次练习（包括心率和 HRV 趋势）保存在你的设备上。回顾过去一周或一个月，看看你的练习以及你的心脏如何发展变化。',
    ticks: [
      '<strong>在“健康”App 中记录正念分钟数。</strong>如果你愿意，每次完成的练习都会存储为正念分钟数。在 iPhone、iPad 和 Mac 上，Breathia 只会写入“健康”App，绝不读取你的健康数据。',
      '<strong>包括 Apple Watch 上的练习。</strong>在 Apple Watch 上进行的练习会显示在 iPhone 的历史记录中。',
    ],
    listAlt: '“历史记录”标签页列出过去的呼吸练习，按昨天、前 7 天和前 30 天分组。',
    detailAlt: '一份已存储的共振呼吸练习报告，带有详细的心率图表。',
  },

  everywhere: {
    eyebrow: '在你的所有设备上',
    title: '随时随地，想呼吸就呼吸。',
    watchTitle: 'Apple Watch',
    watchBody: '直接在手腕上练习呼吸，由轻柔的触感引导，同时测量你的心率。练习会同步到 iPhone 的历史记录。',
    watchListAlt: 'Apple Watch 上的呼吸法列表。',
    watchSessionAlt: 'Apple Watch 上的练习：呼气 2，上方显示心率。',
    watchSummaryAlt: 'Apple Watch 上的练习摘要，正在同步到 iPhone 的历史记录。',
    liveTitle: '实时活动',
    liveBody: '在锁定屏幕和灵动岛中跟进你的练习。查看已经过去多长时间，无需打开 App 即可暂停或结束。',
    liveNote: '风格化示意图。',
    ipadTitle: 'iPad',
    ipadBody: '在更大的屏幕上，呼吸法列表与详情并排显示，并支持与 iPhone 相同的蓝牙传感器。',
    macTitle: 'Mac',
    macBody: '原生 Mac App，配有轻柔的声音提示。连接同样的蓝牙传感器，并在历史记录中回顾每一次练习。',
    ipadAlt: 'iPad 上的 Breathia：按类别排列的呼吸法列表，旁边是箱式呼吸的详情。',
    macAlt: 'Mac 上的 Breathia：历史记录中的一份练习报告，显示开始时、平均和结束时的心率，以及正在上升的 HRV。',
  },

  privacy: {
    eyebrow: '隐私',
    title: '你的呼吸，只属于你自己。',
    lede: 'Breathia 没有账户，也没有服务器。你的心率读数、HRV 和练习历史记录都保留在你的设备上。只有在你开启相关功能后，练习才会存储到“健康”App。',
    pillars: [
      { title: '保留在你的设备上', body: '历史记录和设置都保留在你的设备上。删除 App，其数据也会随之删除。' },
      { title: '无需账户', body: '打开 App 即可开始呼吸。无需注册，无需登录。' },
      { title: '所有功能，全部免费', body: 'Breathia 完全免费：所有功能和所有 App 图标。没有 App 内购买，也没有广告。' },
    ],
    link: '阅读隐私政策',
  },

  icons: {
    eyebrow: 'App 图标',
    title: '打造专属于你的 Breathia。',
    lede: '八款 App 图标任你挑选。在 iPhone 和 iPad 上，Breathia 还会换上你所选图标的配色。',
    label: 'App 图标',
    names: { classic: '经典', amethyst: '紫晶', blush: '粉晕', ember: '余烬', glacier: '冰川', lagoon: '潟湖', midnightGold: '午夜金', noir: '墨黑' },
    note: '所有图标对所有人免费，就像 Breathia 的所有功能一样。',
  },

  cta: {
    iconAlt: 'Breathia App 图标',
    title: '深吸一口气。<br />再来一次。',
    lede: 'Breathia 可在 App Store 免费下载，适用于 iPhone、iPad、Mac 和 Apple Watch。',
    meta: '支持 11 种语言',
  },

  footer: {
    label: '法律信息与联系方式',
    versions: '版本历史',
    privacy: '隐私政策',
    imprint: '法律声明',
    terms: '使用条款',
    feedback: '发送反馈',
    source: '开源',
    disclaimer:
      'Breathia 是一款健康辅助 App，并非医疗器械，不用于诊断或治疗任何疾病。Polar 和 H10 是 Polar Electro Oy 的商标。Apple、Apple 标志、Apple Watch、iPad、iPhone、Mac、MacBook 和 App Store 是 Apple Inc. 在美国和其他国家和地区注册的商标。',
  },

  versions: {
    title: '版本历史',
    lede: 'App Store 上 Breathia 每个版本的新功能。',
    description: 'App Store 上 Breathia 的每一个版本及其带来的新功能，适用于 iPhone、iPad、Mac 和 Apple Watch。',
    version: '版本',
  },

  legal: {
    effective: '生效日期',
    lastUpdated: '生效日期',
    contents: '目录',
    otherLanguages: '其他语言版本',
    backHome: '返回 Breathia',
    privacyTitle: '隐私政策',
    privacyDescription:
      'Breathia 如何处理你的数据：无账户、无服务器、无跟踪。你的心率、HRV 和练习历史记录都保留在你的设备上。',
    termsTitle: '使用条款',
    termsDescription:
      'Breathia App 的使用条款：Apple 标准最终用户许可协议，外加几条简短的补充条款——健康提示和责任。',
    imprintTitle: '法律声明（Impressum）',
    imprintDescription: 'Breathia 的法律声明（Impressum）：依据德国《数字服务法》（DDG）第 5 条提供的服务提供者信息。',
    redirecting: '正在跳转…',
  },
};
