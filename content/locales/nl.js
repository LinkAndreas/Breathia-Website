// Dutch copy. Keys mirror en.js. Addresses the reader with “je”, as the app does.

export default {
  meta: {
    title: 'Breathia — Begeleid ademen met live HRV-biofeedback',
    description:
      'Breathia begeleidt je op iPhone, iPad, Mac en Apple Watch door {count} ademhalingstechnieken – en laat met een Bluetooth-hartslagsensor zoals de Polar H10 live zien hoe je hartslag en HRV reageren. Gratis, privé en zonder account.',
    ogTitle: 'Breathia — Adem langzamer. Je hart volgt.',
    ogDescription:
      'Begeleid ademen met live feedback over je hartslag en HRV. {count} technieken voor iPhone, iPad, Mac en Apple Watch.',
    ogImageAlt:
      'Het appsymbool van Breathia – een zon die ondergaat boven twee golven – naast de woorden: Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: 'Ga naar inhoud',
    backToTop: 'Breathia, terug naar boven',
    sections: 'Onderdelen',
    download: 'Download',
    appStoreBadge: 'Download in de App Store',
    language: 'Taal',
    chooseLanguage: 'Kies taal',
    home: 'Home',
    themeToDark: 'Schakel over naar donkere weergave',
    themeToLight: 'Schakel over naar lichte weergave',
  },

  nav: {
    breathe: 'Ademen',
    biofeedback: 'Biofeedback',
    sensors: 'Sensoren',
    techniques: 'Technieken',
    privacy: 'Privacy',
  },

  hero: {
    eyebrow: 'Breathia voor iPhone, iPad, Mac &amp; Apple Watch',
    title: 'Adem langzamer.<br /><span class="hero__title-glow">Je hart volgt.</span>',
    lede: 'Begeleid ademen met live feedback van je hart. Kies uit {count} technieken, volg een cirkel die elke ademhaling aangeeft en zie hoe je hartslag en hartslagvariabiliteit (HRV) meebewegen.',
    secondary: 'Zo werkt het',
    meta: 'Gratis · Geen account · Met of zonder sensor',
    phoneAlt:
      'Een Breathia-sessie op iPhone: de ademcirkel telt een uitademing van resonantieademhaling af, boven een melding dat adem en hart in harmonie zijn en live grafieken van hartslag en HRV.',
  },

  glance: {
    label: 'Breathia in één oogopslag',
    techniques: 'ademhalingstechnieken',
    categories: 'categorieën, van Slaap tot Focus',
    platforms: 'platforms, één app',
    accounts: 'accounts of servers',
  },

  breathe: {
    eyebrow: 'Ademgeleiding',
    title: 'Een cirkel die met je meeademt.',
    lede: 'De cirkel groeit als je inademt en krimpt als je uitademt. Het getal in het midden telt op terwijl je inademt en vasthoudt, en telt af terwijl je uitademt – zo weet je altijd waar je bent, ook met je ogen half dicht.',
    ticks: [
      '<strong>Haptische signalen en acht rustige, natuurlijke geluiden</strong> – van klankschalen en windgong tot oceaangolven, op het volume dat jij kiest – markeren elke faseovergang, zodat je je ogen kunt sluiten en gewoon kunt volgen.',
      '<strong>Even aftellen</strong> maakt je klaar en laat zien waarmee je begint.',
      '<strong>Het scherm blijft aan</strong> terwijl je ademt. Verlaat je de app, dan pauzeert je sessie, zodat de tijd daartussen niet meetelt.',
    ],
    tryLabel: 'Probeer een techniek',
    play: 'Hervat',
    demoNote: 'Een interactieve preview van de ademcirkel van Breathia. Kies een techniek om het ritme te zien.',
  },

  bio: {
    eyebrow: 'Live biofeedback',
    title: 'Zie hoe je hart zich<br class="br-lg" /> op je adem afstemt.',
    lede: 'Draag een Bluetooth-hartslagsensor, en Breathia laat zien hoe je hartslag en hartslagvariabiliteit veranderen terwijl je ademt – live, slag voor slag.',
    deviceAlt:
      'Een live sessie resonantieademhaling op iPhone: de ademcirkel, de voortgang van de sessie, een melding dat adem en hart in harmonie zijn, en live grafieken van hartslag en HRV (RMSSD).',
    cards: [
      {
        title: 'Hartslag en HRV, live',
        body: 'Beide worden bij elke hartslag bijgewerkt, berekend uit de slag-tot-slagintervallen (RR) die je sensor doorgeeft. Kies RMSSD of SDNN – welke HRV-maat je ook verkiest.',
      },
      {
        title: 'De trend in één oogopslag',
        body: 'Breathia laat zien of je HRV stijgt, stabiel blijft of daalt, zodat je merkt wanneer je hart en adem in de pas gaan lopen. Zet de gevoeligheid op Laag, Gebalanceerd of Hoog.',
      },
      {
        title: 'Zuivere gegevens, geen ruis',
        body: 'Gemiste slagen en metingen zonder huidcontact worden eruit gefilterd, zodat je grafieken laten zien wat er echt gebeurde.',
      },
    ],
    chartTitle: 'Illustratie: de hartslag stijgt bij elke inademing en daalt bij elke uitademing en volgt zo de adem.',
    keyBreath: 'Je adem',
    keyHeart: 'Je hartslag',
    chartNote:
      'Je hart gaat vanzelf iets sneller slaan als je inademt en iets langzamer als je uitademt. Langzaam ademen – zo’n 5 tot 6 ademhalingen per minuut – maakt dit ritme meestal sterker.',
  },

  sensors: {
    eyebrow: 'Sensoren',
    title: 'Koppel een sensor in een paar seconden.<br class="br-lg" /> Of doe het zonder.',
    recommended: 'Aanbevolen',
    polarBody:
      'De Polar H10 is een goed voorbeeld. Hij geeft je hartslag en de RR-intervallen van slag tot slag door voor een nauwkeurige HRV. Bevochtig de elektroden, doe de band om en binnen een paar seconden verschijnt hij in Breathia.',
    bleTitle: 'Elke Bluetooth-hartslagsensor',
    bleBody:
      'Elke borstband of armband die de standaard Bluetooth-hartslagservice gebruikt, koppel je op dezelfde manier en toont je hartslag. Voor HRV moet hij ook RR-intervallen doorgeven, zoals borstbanden doen.',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watch meet je hartslag tijdens de sessie – geen sensor nodig.',
    noneTitle: 'Geen sensor? Geen probleem.',
    noneBody:
      'Elke techniek werkt zonder sensor, en elke sessie telt nog steeds mee voor je geschiedenis en mindfulnessminuten.',
    fineprint:
      'Sensoren maken verbinding op iPhone, iPad en Mac. Breathia gebruikt Bluetooth alleen om verbinding te maken met je hartslagsensor; de app zoekt niet naar andere apparaten en verzamelt geen informatie over ze.',
  },

  how: {
    eyebrow: 'Zo werkt het',
    title: 'Van download tot eerste ademhaling<br class="br-lg" /> in minder dan een minuut.',
    steps: [
      {
        title: 'Kies een techniek',
        body: 'Kies wat je nu nodig hebt – rust, slaap, focus of energie – of zoek op naam. Verbind je sensor via de knoppenbalk.',
        alt: 'Het tabblad ‘Adem’ met technieken per categorie, filters en een verbonden sensor die de hartslag toont.',
      },
      {
        title: 'Adem mee met de cirkel',
        body: 'Volg de cirkel, het getal en de signalen. Je hartslag en HRV worden bijgewerkt terwijl je ademt.',
        alt: 'Een live sessie met de ademcirkel, de voortgang van de sessie en grafieken van hartslag en HRV.',
      },
      {
        title: 'Zie wat er veranderde',
        body: 'Je sessierapport toont je hartslag seconde voor seconde, hoe die bij elke ademhaling steeg en daalde, en hoe je HRV zich ontwikkelde – telkens uitgelegd in gewone woorden.',
        alt: 'Een sessierapport: een melding dat de hartslag met 16 spm is gedaald, van 71 naar 55, met het gemiddelde, de laagste en de hoogste waarde, boven een hartslaggrafiek per seconde.',
      },
    ],
  },

  library: {
    eyebrow: 'Techniekbibliotheek',
    title: '{count} technieken.<br />Stuk voor stuk uitgelegd.',
    lede: 'Van boxademhaling en de fysiologische zucht tot resonantieademhaling en afwisselende neusgatademhaling. Bij elke techniek lees je hoe ze werkt, wanneer ze het meest helpt, hoe je ze stap voor stap oefent – en waar je op moet letten.',
    phoneAlt:
      'De detailpagina van resonantieademhaling: 5 seconden inademen, 5 seconden uitademen, een sessie van 10 minuten, met de onderdelen ‘Zo werkt het’, ‘Ideaal voor’ en ‘Zo oefen je’.',
    filterLabel: 'Filter technieken op categorie',
    fineprint:
      'Niet elke techniek past bij iedereen. Bij elke techniek hoort een veiligheidsopmerking – lees die alsjeblieft en stop als je je niet goed voelt.',
  },

  history: {
    eyebrow: 'Geschiedenis &amp; Gezondheid',
    title: 'Elke sessie,<br />bewaard.',
    lede: 'Geschiedenis bewaart elke sessie, inclusief de trends van je hartslag en HRV, gewoon op je apparaat. Kijk terug op de afgelopen week of maand en zie hoe je oefening – en je hart – zich ontwikkelt.',
    ticks: [
      '<strong>Mindfulnessminuten in Gezondheid.</strong> Als je wilt, wordt elke voltooide sessie bewaard als mindfulnessminuten. Op iPhone, iPad en Mac schrijft Breathia alleen naar de Gezondheid-app – je gezondheidsgegevens worden nooit gelezen.',
      '<strong>Inclusief sessies op Apple Watch.</strong> Sessies van je Apple Watch verschijnen in Geschiedenis op je iPhone.',
    ],
    listAlt: 'Het tabblad ‘Geschiedenis’ met eerdere ademsessies, gegroepeerd in gisteren, de afgelopen 7 dagen en de afgelopen 30 dagen.',
    detailAlt: 'Een bewaard sessierapport van resonantieademhaling met een gedetailleerde hartslaggrafiek.',
  },

  everywhere: {
    eyebrow: 'Op al je apparaten',
    title: 'Overal waar je even op adem moet komen.',
    watchTitle: 'Apple Watch',
    watchBody: 'Adem direct vanaf je pols, begeleid door zachte tikjes, terwijl je hartslag wordt gemeten. Sessies worden gesynchroniseerd met Geschiedenis op je iPhone.',
    watchListAlt: 'De lijst met technieken op Apple Watch.',
    watchSessionAlt: 'Een sessie op Apple Watch: Uitademen 2, met de hartslag erboven.',
    watchSummaryAlt: 'Overzicht van een sessie op Apple Watch, dat met Geschiedenis op iPhone wordt gesynchroniseerd.',
    liveTitle: 'Live Activity',
    liveBody: 'Volg je sessie op het toegangsscherm en in het Dynamic Island. Zie hoeveel tijd er verstreken is, en pauzeer of beëindig de sessie zonder de app te openen.',
    liveNote: 'Gestileerde illustratie.',
    ipadTitle: 'iPad',
    ipadBody: 'Op het grotere scherm staan de technieken en hun details naast elkaar – met dezelfde ondersteuning voor Bluetooth-sensoren als op iPhone.',
    macTitle: 'Mac',
    macBody: 'Een echte Mac-app met zachte geluidssignalen. Verbind dezelfde Bluetooth-sensoren en kijk in Geschiedenis terug op elke sessie.',
    ipadAlt: 'Breathia op iPad: de lijst met technieken per categorie naast de details van boxademhaling.',
    macAlt: 'Breathia op de Mac: Geschiedenis met een sessierapport – de hartslag aan het begin, gemiddeld en aan het eind, en een stijgende HRV.',
  },

  privacy: {
    eyebrow: 'Privacy',
    title: 'Je adem gaat niemand anders iets aan.',
    lede: 'Breathia heeft geen account en geen server. Je hartslagmetingen, HRV en sessiegeschiedenis blijven op je apparaten. Sessies komen alleen in Gezondheid terecht als je dat inschakelt.',
    pillars: [
      { title: 'Op je apparaat', body: 'Geschiedenis en instellingen blijven op je apparaten. Verwijder je de app, dan verdwijnen ook de gegevens.' },
      { title: 'Geen account', body: 'Open de app en begin met ademen. Geen registratie, geen inloggen.' },
      { title: 'Elke functie gratis', body: 'Breathia is helemaal gratis: elke functie en elk appsymbool. Geen in-app-aankopen, geen advertenties.' },
    ],
    link: 'Lees het privacybeleid',
  },

  icons: {
    eyebrow: 'Appsymbolen',
    title: 'Maak de app helemaal van jou.',
    lede: 'Kies een van de acht appsymbolen – en op iPhone en iPad neemt Breathia de kleuren aan van het symbool dat je kiest.',
    label: 'Appsymbolen',
    names: { classic: 'Klassiek', amethyst: 'Amethist', blush: 'Poederroze', ember: 'Gloed', glacier: 'Gletsjer', lagoon: 'Lagune', midnightGold: 'Middernachtgoud', noir: 'Noir' },
    note: 'Elk symbool is gratis voor iedereen, net als elke functie van Breathia.',
  },

  cta: {
    iconAlt: 'Het appsymbool van Breathia',
    title: 'Haal even adem.<br />En dan nog eens.',
    lede: 'Breathia is gratis in de App Store voor iPhone, iPad, Mac en Apple Watch.',
    meta: 'Beschikbaar in 11 talen',
  },

  footer: {
    label: 'Juridisch en contact',
    versions: 'Versiegeschiedenis',
    privacy: 'Privacybeleid',
    imprint: 'Juridische informatie',
    terms: 'Gebruiksvoorwaarden',
    feedback: 'Stuur feedback',
    disclaimer:
      'Breathia is een wellnessapp, geen medisch hulpmiddel. De app is niet bedoeld om een aandoening te diagnosticeren of te behandelen. Polar en H10 zijn handelsmerken van Polar Electro Oy. Apple, het Apple-logo, Apple Watch, iPad, iPhone, Mac, MacBook en App Store zijn handelsmerken van Apple Inc., geregistreerd in de VS en andere landen.',
  },

  versions: {
    title: 'Versiegeschiedenis',
    lede: 'Wat er nieuw is in elke versie van Breathia in de App Store.',
    description: 'Elke versie van Breathia in de App Store en wat die bracht – voor iPhone, iPad, Mac en Apple Watch.',
    version: 'Versie',
  },

  legal: {
    effective: 'Geldig vanaf',
    lastUpdated: 'Ingangsdatum',
    contents: 'Inhoud',
    otherLanguages: 'Ook beschikbaar in',
    backHome: 'Terug naar Breathia',
    privacyTitle: 'Privacybeleid',
    privacyDescription:
      'Hoe Breathia met je gegevens omgaat: geen account, geen server, geen tracking. Je hartslag, HRV en sessiegeschiedenis blijven op je apparaten.',
    termsTitle: 'Gebruiksvoorwaarden',
    termsDescription:
      'De gebruiksvoorwaarden van de Breathia-app: de standaard-EULA van Apple plus een paar korte aanvullingen – gezondheidsmededeling en aansprakelijkheid.',
    imprintTitle: 'Juridische informatie (Impressum)',
    imprintDescription: 'Juridische informatie (Impressum) van Breathia: gegevens van de aanbieder volgens § 5 DDG.',
    redirecting: 'Doorverwijzen…',
  },
};
