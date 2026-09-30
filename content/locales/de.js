// Deutsche Texte. Schlüssel spiegeln en.js. Anrede „du“ wie in der App; Gedankenstrich „ – “.

export default {
  meta: {
    title: 'Breathia – Geführtes Atmen mit Live-Biofeedback zu Herzfrequenz und HRV',
    description:
      'Breathia begleitet dich auf iPhone, iPad, Mac und Apple Watch durch {count} Atemtechniken – und zeigt dir mit einem Bluetooth-Brustgurt wie dem Polar H10 live, wie Herzfrequenz und HRV reagieren. Kostenlos, privat und ohne Konto.',
    ogTitle: 'Breathia – Langsamer atmen. Dein Herz folgt.',
    ogDescription:
      'Geführtes Atmen mit Live-Feedback zu Herzfrequenz und HRV. {count} Techniken für iPhone, iPad, Mac und Apple Watch.',
    ogImageAlt:
      'Das Breathia-App-Symbol – eine Sonne, die über zwei Wellen untergeht – neben dem Satz: Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: 'Zum Inhalt springen',
    backToTop: 'Breathia, zurück nach oben',
    sections: 'Abschnitte',
    download: 'Laden',
    appStoreBadge: 'Laden im App Store',
    language: 'Sprache',
    chooseLanguage: 'Sprache wählen',
    home: 'Startseite',
    themeToDark: 'Zum dunklen Erscheinungsbild wechseln',
    themeToLight: 'Zum hellen Erscheinungsbild wechseln',
  },

  nav: {
    breathe: 'Atmen',
    biofeedback: 'Biofeedback',
    sensors: 'Sensoren',
    techniques: 'Techniken',
    privacy: 'Datenschutz',
  },

  hero: {
    eyebrow: 'Breathia für iPhone, iPad, Mac &amp; Apple Watch',
    title: 'Langsamer atmen.<br /><span class="hero__title-glow">Dein Herz folgt.</span>',
    lede: 'Geführtes Atmen mit Live-Feedback von deinem Herzen. Wähle aus {count} Techniken, folge einem Kreis, der jeden Atemzug vorgibt, und sieh, wie Herzfrequenz und Herzfrequenzvariabilität (HRV) darauf reagieren.',
    secondary: 'So funktioniert’s',
    meta: 'Kostenlos · Kein Konto · Mit oder ohne Sensor',
    phoneAlt:
      'Eine Breathia-Sitzung auf dem iPhone: Der Atemkreis zeigt „Einatmen 2“, Zyklus 7 der Resonanzatmung, darunter Live-Diagramme zu Herzfrequenz und HRV.',
  },

  glance: {
    label: 'Breathia auf einen Blick',
    techniques: 'Atemtechniken',
    categories: 'Kategorien, von Schlaf bis Fokus',
    platforms: 'Plattformen, eine App',
    accounts: 'Konten oder Server',
  },

  breathe: {
    eyebrow: 'Atemführung',
    title: 'Ein Kreis, der mit dir atmet.',
    lede: 'Der Kreis wächst beim Einatmen und wird beim Ausatmen kleiner. Die Zahl in der Mitte zählt beim Einatmen und Halten hoch und beim Ausatmen wieder herunter – so weißt du immer, wo du gerade bist, auch mit halb geschlossenen Augen.',
    ticks: [
      '<strong>Haptische und akustische Signale</strong> kündigen jeden Phasenwechsel an. Du kannst also ruhig die Augen schließen.',
      '<strong>Ein kurzer Countdown</strong> stimmt dich ein und zeigt, womit es losgeht.',
      '<strong>Der Bildschirm bleibt an</strong>, solange du atmest. Verlässt du die App, pausiert die Sitzung – die Zeit dazwischen zählt nicht.',
    ],
    tryLabel: 'Technik ausprobieren',
    play: 'Fortsetzen',
    demoNote: 'Eine interaktive Vorschau des Atemkreises von Breathia. Wähle eine Technik, um ihren Rhythmus zu sehen.',
  },

  bio: {
    eyebrow: 'Live-Biofeedback',
    title: 'Sieh, wie sich dein Herz<br class="br-lg" /> auf deinen Atem einstellt.',
    lede: 'Leg einen Bluetooth-Brustgurt an, und Breathia zeigt dir, wie sich Herzfrequenz und Herzfrequenzvariabilität beim Atmen verändern – live, Schlag für Schlag.',
    deviceAlt:
      'Eine laufende Sitzung Resonanzatmung auf dem iPhone: der Atemkreis, der Sitzungsfortschritt, der aktuelle HRV-Trend und Live-Diagramme zu Herzfrequenz und HRV (RMSSD).',
    cards: [
      {
        title: 'Herzfrequenz und HRV, live',
        body: 'Beide Werte aktualisieren sich mit jedem Herzschlag – berechnet aus den Schlag-zu-Schlag-Intervallen (RR), die dein Gurt sendet. Als HRV-Maß wählst du RMSSD oder SDNN.',
      },
      {
        title: 'Der Trend auf einen Blick',
        body: 'Breathia zeigt dir, ob deine HRV steigt, stabil bleibt oder sinkt – so merkst du, wann Herz und Atem in den Gleichklang finden. Die Empfindlichkeit stellst du auf Niedrig, Ausgewogen oder Hoch.',
      },
      {
        title: 'Saubere Daten statt Rauschen',
        body: 'Ausgelassene Schläge und Messwerte ohne Hautkontakt werden herausgefiltert. So zeigen deine Diagramme, was wirklich passiert ist.',
      },
    ],
    chartTitle: 'Illustration: Die Herzfrequenz steigt mit jedem Einatmen und sinkt mit jedem Ausatmen – sie folgt dem Atem.',
    keyBreath: 'Dein Atem',
    keyHeart: 'Deine Herzfrequenz',
    chartNote:
      'Beim Einatmen schlägt dein Herz von Natur aus etwas schneller, beim Ausatmen etwas langsamer. Langsames Atmen – etwa 5 bis 6 Atemzüge pro Minute – verstärkt diesen Rhythmus meist.',
  },

  sensors: {
    eyebrow: 'Sensoren',
    title: 'Dein Gurt, in Sekunden gekoppelt.<br class="br-lg" /> Oder ganz ohne.',
    recommended: 'Empfohlen',
    polarBody:
      'Breathia ist auf den Polar H10 abgestimmt. Er liefert Herzfrequenz und Schlag-zu-Schlag-RR-Intervalle für eine genaue HRV. Elektroden befeuchten, Gurt anlegen – nach wenigen Sekunden erscheint er in Breathia.',
    bleTitle: 'Andere Bluetooth-Herzfrequenzgurte',
    bleBody:
      'Jeder Gurt mit dem standardisierten Bluetooth-Herzfrequenzdienst zeigt deine Herzfrequenz an. Für die HRV muss er zusätzlich RR-Intervalle senden.',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watch misst deine Herzfrequenz während der Sitzung – ganz ohne Gurt.',
    noneTitle: 'Kein Sensor? Kein Problem.',
    noneBody:
      'Jede Technik funktioniert auch ohne Sensor, und jede Sitzung zählt trotzdem für deinen Verlauf und deine Achtsamkeitsminuten.',
    fineprint:
      'Sensoren lassen sich auf iPhone, iPad und Mac koppeln. Breathia nutzt Bluetooth nur für die Verbindung mit deinem Herzfrequenzgurt – es sucht nicht nach anderen Geräten und sammelt keine Informationen über sie.',
  },

  how: {
    eyebrow: 'So funktioniert’s',
    title: 'Vom Download zum ersten Atemzug<br class="br-lg" /> in unter einer Minute.',
    steps: [
      {
        title: 'Technik wählen',
        body: 'Such dir aus, was du gerade brauchst – Ruhe, Schlaf, Fokus oder Energie – oder suche nach Namen. Deinen Gurt koppelst du über die Symbolleiste.',
        alt: 'Der Tab „Atmen“ mit Techniken nach Kategorien, Filtern und einem verbundenen Sensor, der die Herzfrequenz anzeigt.',
      },
      {
        title: 'Mit dem Kreis atmen',
        body: 'Folge dem Kreis, der Zahl und den Signalen. Herzfrequenz und HRV aktualisieren sich, während du atmest.',
        alt: 'Eine laufende Sitzung mit Atemkreis, Sitzungsfortschritt und Diagrammen zu Herzfrequenz und HRV.',
      },
      {
        title: 'Sehen, was sich verändert hat',
        body: 'Dein Sitzungsbericht zeigt die Herzfrequenz zu Beginn, im Schnitt und am Ende, wie sich deine HRV entwickelt hat, und ein kurzes Fazit in klaren Worten.',
        alt: 'Ein Sitzungsbericht: Herzfrequenz 71 zu Beginn, 63 im Schnitt, 58 am Ende; RMSSD 52 ms, steigend; und der Hinweis, dass die HRV im Verlauf der Sitzung gestiegen ist.',
      },
    ],
  },

  library: {
    eyebrow: 'Technikbibliothek',
    title: '{count} Techniken.<br />Jede erklärt.',
    lede: 'Von Box-Atmung und physiologischem Seufzer bis zu Resonanz- und Wechselatmung. Zu jeder Technik erfährst du, wie sie wirkt, wann sie am besten hilft, wie du sie Schritt für Schritt übst – und worauf du achten solltest.',
    phoneAlt:
      'Die Detailseite der Resonanzatmung: 5 Sekunden einatmen, 5 Sekunden ausatmen, 10 Minuten Sitzung, mit den Abschnitten „So funktioniert’s“, „Ideal für“ und „So übst du“.',
    filterLabel: 'Techniken nach Kategorie filtern',
    fineprint:
      'Nicht jede Technik passt für jeden. Zu jeder gibt es einen Sicherheitshinweis – bitte lies ihn und hör auf, wenn du dich unwohl fühlst.',
  },

  history: {
    eyebrow: 'Verlauf &amp; Apple Health',
    title: 'Jede Sitzung,<br />festgehalten.',
    lede: 'Der Verlauf speichert jede Sitzung samt Herzfrequenz- und HRV-Trends direkt auf deinem Gerät. Schau auf die letzte Woche oder den letzten Monat zurück und sieh, wie sich deine Praxis – und dein Herz – entwickelt.',
    ticks: [
      '<strong>Achtsamkeitsminuten in Apple Health.</strong> Auf Wunsch wird jede abgeschlossene Sitzung als Achtsamkeitsminuten gespeichert. Auf iPhone, iPad und Mac schreibt Breathia nur in Apple Health – deine Gesundheitsdaten liest es nie.',
      '<strong>Apple Watch inklusive.</strong> Sitzungen von Apple Watch erscheinen im Verlauf auf dem iPhone.',
    ],
    listAlt: 'Der Tab „Verlauf“ mit vergangenen Atemsitzungen, gruppiert nach gestern, den letzten 7 Tagen und den letzten 30 Tagen.',
    detailAlt: 'Ein gespeicherter Sitzungsbericht zur Resonanzatmung mit Zusammenfassungen zu Herzfrequenz und HRV.',
  },

  everywhere: {
    eyebrow: 'Auf all deinen Geräten',
    title: 'Durchatmen, wo immer du bist.',
    watchTitle: 'Apple Watch',
    watchBody: 'Atme direkt am Handgelenk, begleitet von sanften Impulsen, während deine Herzfrequenz gemessen wird. Sitzungen landen im Verlauf auf dem iPhone.',
    watchListAlt: 'Die Technikliste auf Apple Watch.',
    watchSessionAlt: 'Eine Sitzung auf Apple Watch: Ausatmen 2, darüber die Herzfrequenz.',
    watchSummaryAlt: 'Die Zusammenfassung einer Sitzung auf Apple Watch, die mit dem Verlauf auf dem iPhone synchronisiert wird.',
    liveTitle: 'Live-Aktivität',
    liveBody: 'Behalte deine Sitzung auf dem Sperrbildschirm und in der Dynamic Island im Blick. Sieh, wie viel Zeit vergangen ist, und pausiere oder beende sie, ohne die App zu öffnen.',
    liveNote: 'Stilisierte Darstellung.',
    ipadTitle: 'iPad',
    ipadBody: 'Auf dem großen Bildschirm stehen Techniken und ihre Details nebeneinander – mit derselben Bluetooth-Sensorunterstützung wie auf dem iPhone.',
    macTitle: 'Mac',
    macBody: 'Eine native Mac-App mit sanften Klangsignalen. Verbinde dieselben Bluetooth-Gurte und blicke im Verlauf auf jede Sitzung zurück.',
    ipadAlt: 'Breathia auf dem iPad: die Technikliste nach Kategorien neben den Details der Box-Atmung.',
    macAlt: 'Breathia auf dem Mac: der Verlauf mit einem Sitzungsbericht – Herzfrequenz zu Beginn, im Schnitt und am Ende, dazu eine steigende HRV.',
  },

  privacy: {
    eyebrow: 'Datenschutz',
    title: 'Dein Atem geht nur dich etwas an.',
    lede: 'Breathia hat kein Konto und keinen Server. Deine Herzfrequenzmessungen, HRV-Werte und dein Sitzungsverlauf bleiben auf deinen Geräten. In Apple Health landen Sitzungen nur, wenn du das einschaltest.',
    pillars: [
      { title: 'Auf deinem Gerät', body: 'Verlauf und Einstellungen bleiben auf deinen Geräten. Löschst du die App, sind auch ihre Daten weg.' },
      { title: 'Kein Konto', body: 'App öffnen und losatmen. Keine Registrierung, keine Anmeldung.' },
      { title: 'Alle Funktionen kostenlos', body: 'Alles in Breathia ist kostenlos. Optionale Trinkgelder und Abos unterstützen die Entwicklung – freigeschaltet wird dadurch nichts.' },
    ],
    link: 'Datenschutzerklärung lesen',
  },

  cta: {
    iconAlt: 'Das Breathia-App-Symbol',
    title: 'Atme einmal durch.<br />Und dann noch einmal.',
    lede: 'Breathia gibt es kostenlos im App Store – für iPhone, iPad, Mac und Apple Watch.',
    meta: 'Verfügbar auf Deutsch, English, Español und Français',
  },

  footer: {
    label: 'Rechtliches und Kontakt',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    feedback: 'Feedback senden',
    github: 'Open Source auf GitHub',
    disclaimer:
      'Breathia ist eine Wellness-App und kein Medizinprodukt. Sie ist nicht dazu bestimmt, Krankheiten zu diagnostizieren oder zu behandeln. Polar und H10 sind Marken der Polar Electro Oy. Apple, das Apple Logo, Apple Watch, iPad, iPhone, Mac, MacBook und App Store sind Marken der Apple Inc., die in den USA und weiteren Ländern eingetragen sind.',
  },

  legal: {
    effective: 'Gültig ab',
    lastUpdated: 'Gültig ab',
    contents: 'Inhalt',
    otherLanguages: 'Auch verfügbar auf',
    backHome: 'Zurück zu Breathia',
    privacyTitle: 'Datenschutzerklärung',
    privacyDescription:
      'Wie Breathia mit deinen Daten umgeht: kein Konto, kein Server, kein Tracking. Herzfrequenz, HRV und Sitzungsverlauf bleiben auf deinen Geräten.',
    termsTitle: 'Nutzungsbedingungen',
    termsDescription:
      'Die Nutzungsbedingungen der App Breathia: der Standard-EULA von Apple plus wenige kurze Ergänzungen – Gesundheitshinweis, freiwillige Käufe, Haftung.',
    redirecting: 'Weiterleitung …',
  },
};
