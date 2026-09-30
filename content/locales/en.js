// English copy. Other locales mirror these keys exactly (checked at build time).
// Strings may contain inline HTML. {count} and {categories} are filled in by the renderer.

export default {
  meta: {
    title: 'Breathia — Guided Breathing with Live HRV Biofeedback',
    description:
      'Breathia guides you through {count} breathing techniques on iPhone, iPad, Mac and Apple Watch — and shows how your heart rate and HRV respond, live, with a Bluetooth chest strap such as the Polar H10. Free, private, no account needed.',
    ogTitle: 'Breathia — Breathe slower. See your heart follow.',
    ogDescription:
      'Guided breathing with live heart-rate and HRV feedback. {count} techniques for iPhone, iPad, Mac and Apple Watch.',
    ogImageAlt:
      'The Breathia app icon — a sun setting over two waves — beside the words: Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: 'Skip to content',
    backToTop: 'Breathia, back to top',
    sections: 'Sections',
    download: 'Download',
    appStoreBadge: 'Download on the App Store',
    language: 'Language',
    chooseLanguage: 'Choose language',
    home: 'Home',
    themeToDark: 'Switch to dark appearance',
    themeToLight: 'Switch to light appearance',
  },

  nav: {
    breathe: 'Breathe',
    biofeedback: 'Biofeedback',
    sensors: 'Sensors',
    techniques: 'Techniques',
    privacy: 'Privacy',
  },

  hero: {
    eyebrow: 'Breathia for iPhone, iPad, Mac &amp; Apple Watch',
    title: 'Breathe slower.<br /><span class="hero__title-glow">See your heart follow.</span>',
    lede: 'Guided breathing with live feedback from your heart. Choose from {count} techniques, follow a circle that paces every breath, and see your heart rate and heart-rate variability (HRV) respond as you go.',
    secondary: 'See how it works',
    meta: 'Free · No account · Works with or without a sensor',
    phoneAlt:
      'A Breathia session on iPhone: a breathing circle reads Inhale 2, cycle 7 of Resonance Breathing, above live heart-rate and HRV charts.',
  },

  glance: {
    label: 'Breathia at a glance',
    techniques: 'breathing techniques',
    categories: 'categories, from Sleep to Focus',
    platforms: 'platforms, one app',
    accounts: 'accounts or servers',
  },

  breathe: {
    eyebrow: 'Breathing guidance',
    title: 'A circle that breathes with you.',
    lede: 'The circle grows as you breathe in and shrinks as you breathe out. The count in the middle rises while you inhale and hold, and falls as you exhale — so you always know where you are, even with your eyes half closed.',
    ticks: [
      '<strong>Haptic and sound cues</strong> mark every change of phase, so you can close your eyes and simply follow along.',
      '<strong>A short countdown</strong> gets you ready and shows what comes first.',
      '<strong>The screen stays on</strong> while you breathe. Leave the app and your session pauses, so time away doesn’t count.',
    ],
    tryLabel: 'Try a technique',
    play: 'Resume',
    demoNote: 'An interactive preview of Breathia’s breathing circle. Choose a technique to see its rhythm.',
  },

  bio: {
    eyebrow: 'Live biofeedback',
    title: 'See your heart settle<br class="br-lg" /> into your breathing.',
    lede: 'Wear a Bluetooth chest strap, and Breathia shows how your heart rate and heart-rate variability change as you breathe — live, beat by beat.',
    deviceAlt:
      'A live Resonance Breathing session on iPhone: the breathing circle, session progress, the current HRV trend, and live heart-rate and HRV (RMSSD) charts.',
    cards: [
      {
        title: 'Heart rate and HRV, live',
        body: 'Both update with every beat, calculated from the beat-to-beat (RR) intervals your strap sends. Choose RMSSD or SDNN — whichever HRV measure you prefer.',
      },
      {
        title: 'The trend at a glance',
        body: 'Breathia tells you whether your HRV is rising, steady or falling, so you notice when your heart and breath fall into step. Set the feedback sensitivity to Low, Balanced or High.',
      },
      {
        title: 'Clean data, not noise',
        body: 'Missed beats and readings without skin contact are filtered out, so your charts show what really happened.',
      },
    ],
    chartTitle: 'Illustration: heart rate rises with each inhale and falls with each exhale, following the breath.',
    keyBreath: 'Your breath',
    keyHeart: 'Your heart rate',
    chartNote:
      'Your heart naturally speeds up a little as you breathe in and slows as you breathe out. Breathing slowly — around 5 to 6 breaths a minute — tends to make this rhythm stronger.',
  },

  sensors: {
    eyebrow: 'Sensors',
    title: 'Pair a strap in seconds.<br class="br-lg" /> Or go without.',
    recommended: 'Recommended',
    polarBody:
      'Breathia is built around the Polar H10. It sends your heart rate and beat-to-beat RR intervals for accurate HRV. Moisten the electrodes, put the strap on, and it shows up in Breathia within seconds.',
    bleTitle: 'Other Bluetooth heart-rate straps',
    bleBody:
      'Any strap that uses the standard Bluetooth Heart Rate service shows your heart rate. For HRV, it also needs to send RR intervals.',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watch measures your heart rate during the session — no strap needed.',
    noneTitle: 'No sensor? No problem.',
    noneBody:
      'Every technique works without a sensor, and every session still counts toward your History and mindful minutes.',
    fineprint:
      'Sensors connect on iPhone, iPad and Mac. Breathia uses Bluetooth only to connect to your heart-rate strap; it doesn’t look for or collect information about any other devices.',
  },

  how: {
    eyebrow: 'How it works',
    title: 'From download to first breath<br class="br-lg" /> in under a minute.',
    steps: [
      {
        title: 'Choose a technique',
        body: 'Pick what you need right now — calm, sleep, focus or energy — or search by name. Connect your strap from the toolbar.',
        alt: 'The Breathe tab listing techniques by category, with filters and a connected sensor showing the heart rate.',
      },
      {
        title: 'Breathe with the circle',
        body: 'Follow the circle, the count and the cues. Your heart rate and HRV update as you breathe.',
        alt: 'A live session with the breathing circle, session progress, and heart-rate and HRV charts.',
      },
      {
        title: 'See what changed',
        body: 'Your session report shows your heart rate at the start, on average and at the end, how your HRV developed, and a short summary in plain words.',
        alt: 'A session report: heart rate 71 at start, 63 average, 58 at the end; RMSSD 52 ms, increasing; and a note that HRV rose as the session went on.',
      },
    ],
  },

  library: {
    eyebrow: 'Technique library',
    title: '{count} techniques.<br />Each one explained.',
    lede: 'From Box Breathing and the Physiological Sigh to Resonance and Alternate Nostril Breathing. For every technique, you learn how it works, when it helps most, how to practice it step by step — and when to take care.',
    phoneAlt:
      'Resonance Breathing’s detail page: 5 second inhale, 5 second exhale, 10 minute session, with How It Works, Best For and How To Practice sections.',
    filterLabel: 'Filter techniques by category',
    fineprint:
      'Not every technique suits everyone. Each one comes with a safety note — please read it, and stop if you feel unwell.',
  },

  history: {
    eyebrow: 'History &amp; Apple Health',
    title: 'Every session,<br />remembered.',
    lede: 'History keeps every session, including its heart-rate and HRV trends, right on your device. Look back over the past week or month and see how your practice — and your heart — develops.',
    ticks: [
      '<strong>Mindful minutes in Apple Health.</strong> If you like, every completed session is saved as mindful minutes. On iPhone, iPad and Mac, Breathia only writes to Apple Health — it never reads your health data.',
      '<strong>Apple Watch sessions included.</strong> Sessions from Apple Watch appear in History on iPhone.',
    ],
    listAlt: 'The History tab listing past breathing sessions, grouped into yesterday, the previous 7 days and the previous 30 days.',
    detailAlt: 'A saved session report for Resonance Breathing with heart-rate and HRV summaries.',
  },

  everywhere: {
    eyebrow: 'On all your devices',
    title: 'Wherever you need a breath.',
    watchTitle: 'Apple Watch',
    watchBody: 'Breathe right from your wrist, guided by gentle taps, with your heart rate measured along the way. Sessions sync to History on iPhone.',
    watchListAlt: 'Technique list on Apple Watch.',
    watchSessionAlt: 'A session on Apple Watch: Exhale 2, with the heart rate above it.',
    watchSummaryAlt: 'Session summary on Apple Watch, syncing to History on iPhone.',
    liveTitle: 'Live Activity',
    liveBody: 'Follow your session on the Lock Screen and in the Dynamic Island. See how much time has passed, and pause or end without opening the app.',
    liveNote: 'Stylized illustration.',
    ipadTitle: 'iPad',
    ipadBody: 'On the bigger screen, techniques and their details sit side by side — with the same Bluetooth sensor support as on iPhone.',
    macTitle: 'Mac',
    macBody: 'A native Mac app with soft sound cues. Connect the same Bluetooth straps, and look back on every session in History.',
    ipadAlt: 'Breathia on iPad: the technique list by category beside Box Breathing’s details.',
    macAlt: 'Breathia on the Mac: History with a session report — heart rate at the start, on average and at the end, and HRV increasing.',
  },

  privacy: {
    eyebrow: 'Privacy',
    title: 'Your breath is nobody else’s business.',
    lede: 'Breathia has no account and no server. Your heart-rate readings, HRV and session history stay on your devices. Sessions reach Apple Health only if you turn that on.',
    pillars: [
      { title: 'On your device', body: 'History and settings stay on your devices. Delete the app, and its data goes with it.' },
      { title: 'No account', body: 'Open the app and start breathing. No sign-up, no login.' },
      { title: 'Every feature, free', body: 'Everything in Breathia is free. Optional tips and subscriptions support its development — they don’t unlock anything.' },
    ],
    link: 'Read the Privacy Policy',
  },

  cta: {
    iconAlt: 'Breathia app icon',
    title: 'Take a breath.<br />Then take another.',
    lede: 'Breathia is free on the App Store for iPhone, iPad, Mac and Apple Watch.',
    meta: 'Available in English, Deutsch, Español and Français',
  },

  footer: {
    label: 'Legal and contact',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    feedback: 'Send Feedback',
    github: 'Open source on GitHub',
    disclaimer:
      'Breathia is a wellness app, not a medical device. It isn’t intended to diagnose or treat any condition. Polar and H10 are trademarks of Polar Electro Oy. Apple, the Apple logo, Apple Watch, iPad, iPhone, Mac, MacBook and App Store are trademarks of Apple Inc., registered in the U.S. and other countries.',
  },

  legal: {
    effective: 'Effective',
    lastUpdated: 'Effective date',
    contents: 'Contents',
    otherLanguages: 'Also available in',
    backHome: 'Back to Breathia',
    privacyTitle: 'Privacy Policy',
    privacyDescription:
      'How Breathia handles your data: no account, no server, no tracking. Your heart rate, HRV and session history stay on your devices.',
    termsTitle: 'Terms of Use',
    termsDescription:
      'The terms of use for the Breathia app: Apple’s Standard EULA plus a few short additions — health notice, optional purchases, liability.',
    redirecting: 'Redirecting…',
  },
};
