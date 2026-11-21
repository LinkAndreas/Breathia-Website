// Textes français. Les clés reprennent en.js. Tutoiement.
// Les espaces fines insécables avant : ; ? ! et dans « » sont ajoutées au rendu.

export default {
  meta: {
    title: 'Breathia — Respiration guidée avec biofeedback cardiaque en direct',
    description:
      'Breathia te guide à travers {count} techniques de respiration sur iPhone, iPad, Mac et Apple Watch, et te montre en direct comment réagissent ta fréquence cardiaque et ta VFC grâce à un capteur de fréquence cardiaque Bluetooth comme le Polar H10. Gratuit, privé et sans compte.',
    ogTitle: 'Breathia — Respire plus lentement. Ton cœur suit.',
    ogDescription:
      'Respiration guidée avec un retour en direct sur ta fréquence cardiaque et ta VFC. {count} techniques pour iPhone, iPad, Mac et Apple Watch.',
    ogImageAlt:
      'L’icône de l’app Breathia — un soleil couchant au-dessus de deux vagues — à côté des mots : Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: 'Aller au contenu',
    backToTop: 'Breathia, retour en haut',
    sections: 'Sections',
    download: 'Télécharger',
    appStoreBadge: 'Télécharger dans l’App Store',
    language: 'Langue',
    chooseLanguage: 'Choisir la langue',
    home: 'Accueil',
    themeToDark: 'Passer à l’apparence sombre',
    themeToLight: 'Passer à l’apparence claire',
  },

  nav: {
    breathe: 'Respirer',
    biofeedback: 'Biofeedback',
    sensors: 'Capteurs',
    techniques: 'Techniques',
    privacy: 'Confidentialité',
  },

  hero: {
    eyebrow: 'Breathia pour iPhone, iPad, Mac et Apple Watch',
    title: 'Respire plus lentement.<br /><span class="hero__title-glow">Ton cœur suit.</span>',
    lede: 'Une respiration guidée, avec un retour en direct de ton cœur. Choisis parmi {count} techniques, suis un cercle qui rythme chaque respiration et vois réagir ta fréquence cardiaque et sa variabilité (VFC).',
    secondary: 'Voir comment ça marche',
    meta: 'Gratuit · Sans compte · Avec ou sans capteur',
    phoneAlt:
      'Une séance Breathia sur iPhone : le cercle de respiration décompte une expiration de la respiration de résonance, au-dessus d’une note indiquant que souffle et cœur sont synchronisés et de graphiques en direct de fréquence cardiaque et de VFC.',
  },

  glance: {
    label: 'Breathia en un coup d’œil',
    techniques: 'techniques de respiration',
    categories: 'catégories, du sommeil à la concentration',
    platforms: 'plateformes, une seule app',
    accounts: 'compte ou serveur',
  },

  breathe: {
    eyebrow: 'Guidage respiratoire',
    title: 'Un cercle qui respire avec toi.',
    lede: 'Le cercle grandit quand tu inspires et rapetisse quand tu expires. Le chiffre au centre monte pendant l’inspiration et la rétention, puis redescend à l’expiration : tu sais toujours où tu en es, même les yeux mi-clos.',
    ticks: [
      '<strong>Des signaux haptiques et huit sons calmes et naturels</strong> (du bol chantant et du carillon à vent aux vagues de l’océan, au volume de ton choix) annoncent chaque changement de phase. Tu peux donc fermer les yeux et simplement suivre.',
      '<strong>Un court compte à rebours</strong> te prépare et indique par quoi commencer.',
      '<strong>L’écran reste allumé</strong> pendant que tu respires. Si tu quittes l’app, la séance se met en pause : le temps passé ailleurs n’est pas compté.',
    ],
    tryLabel: 'Essayer une technique',
    play: 'Reprendre',
    demoNote: 'Un aperçu interactif du cercle de respiration de Breathia. Choisis une technique pour découvrir son rythme.',
  },

  bio: {
    eyebrow: 'Biofeedback en direct',
    title: 'Vois ton cœur s’accorder<br class="br-lg" /> à ta respiration.',
    lede: 'Porte un capteur de fréquence cardiaque Bluetooth, et Breathia te montre comment ta fréquence cardiaque et sa variabilité évoluent pendant que tu respires — en direct, battement par battement.',
    deviceAlt:
      'Une séance de respiration de résonance en cours sur iPhone : le cercle de respiration, la progression, une note indiquant que souffle et cœur sont synchronisés et des graphiques en direct de fréquence cardiaque et de VFC (RMSSD).',
    cards: [
      {
        title: 'Fréquence cardiaque et VFC en direct',
        body: 'Les deux valeurs se mettent à jour à chaque battement, à partir des intervalles battement à battement (RR) transmis par ton capteur. Choisis l’indicateur de VFC qui te convient : RMSSD ou SDNN.',
      },
      {
        title: 'La tendance en un coup d’œil',
        body: 'Breathia t’indique si ta VFC augmente, reste stable ou diminue, pour repérer le moment où ton cœur et ton souffle s’accordent. Règle la sensibilité sur Faible, Équilibrée ou Élevée.',
      },
      {
        title: 'Des données fiables, sans bruit',
        body: 'Les battements manqués et les mesures prises sans contact avec la peau sont filtrés : tes graphiques reflètent ce qui s’est réellement passé.',
      },
    ],
    chartTitle: 'Illustration : la fréquence cardiaque monte à chaque inspiration et descend à chaque expiration, au rythme de la respiration.',
    keyBreath: 'Ta respiration',
    keyHeart: 'Ta fréquence cardiaque',
    chartNote:
      'Naturellement, ton cœur accélère un peu à l’inspiration et ralentit à l’expiration. Respirer lentement — environ 5 à 6 respirations par minute — tend à amplifier ce rythme.',
  },

  sensors: {
    eyebrow: 'Capteurs',
    title: 'Ton capteur, associé en quelques secondes.<br class="br-lg" /> Ou respire sans.',
    recommended: 'Recommandé',
    polarBody:
      'Le Polar H10 en est un bon exemple. Il transmet ta fréquence cardiaque et les intervalles RR battement à battement pour une VFC précise. Humidifie les électrodes, mets la ceinture : il apparaît dans Breathia en quelques secondes.',
    bleTitle: 'Tout capteur de fréquence cardiaque Bluetooth',
    bleBody:
      'Toute ceinture thoracique ou tout brassard utilisant le service Bluetooth standard de fréquence cardiaque s’associe de la même façon et affiche ta fréquence cardiaque. Pour la VFC, il doit aussi transmettre les intervalles RR, comme le font les ceintures thoraciques.',
    watchTitle: 'Apple Watch',
    watchBody: 'L’Apple Watch mesure ta fréquence cardiaque pendant la séance — aucun capteur nécessaire.',
    noneTitle: 'Pas de capteur ? Pas de problème.',
    noneBody:
      'Toutes les techniques fonctionnent sans capteur, et chaque séance compte quand même dans ton historique et tes minutes de pleine conscience.',
    fineprint:
      'Les capteurs se connectent sur iPhone, iPad et Mac. Breathia utilise le Bluetooth uniquement pour se connecter à ton capteur de fréquence cardiaque ; il ne recherche aucun autre appareil et ne collecte aucune information à leur sujet.',
  },

  how: {
    eyebrow: 'Fonctionnement',
    title: 'Du téléchargement à la première respiration<br class="br-lg" /> en moins d’une minute.',
    steps: [
      {
        title: 'Choisis une technique',
        body: 'Choisis selon ton besoin du moment — calme, sommeil, concentration ou énergie — ou cherche par nom. Associe ton capteur depuis la barre d’outils.',
        alt: 'L’onglet Respirer avec les techniques par catégorie, des filtres et un capteur connecté affichant la fréquence cardiaque.',
      },
      {
        title: 'Respire avec le cercle',
        body: 'Suis le cercle, le décompte et les signaux. Ta fréquence cardiaque et ta VFC se mettent à jour pendant que tu respires.',
        alt: 'Une séance en cours avec le cercle de respiration, la progression et des graphiques de fréquence cardiaque et de VFC.',
      },
      {
        title: 'Vois ce qui a changé',
        body: 'Ton bilan de séance trace ta fréquence cardiaque seconde par seconde, sa montée et sa baisse à chaque respiration et l’évolution de ta VFC, le tout expliqué simplement.',
        alt: 'Un bilan de séance : une note indiquant que la fréquence cardiaque a baissé de 16 BPM, de 71 à 55, avec sa moyenne, son minimum et son maximum, au-dessus d’un graphique seconde par seconde.',
      },
    ],
  },

  library: {
    eyebrow: 'Bibliothèque de techniques',
    title: '{count} techniques.<br />Toutes expliquées.',
    lede: 'De la respiration carrée et du soupir physiologique à la respiration de résonance et à la respiration alternée. Pour chaque technique, découvre comment elle agit, quand elle aide le plus, comment la pratiquer pas à pas — et quand être prudent.',
    phoneAlt:
      'La page de la respiration de résonance : inspiration de 5 secondes, expiration de 5 secondes, séance de 10 minutes, avec les sections Fonctionnement, Idéal pour et Comment pratiquer.',
    filterLabel: 'Filtrer les techniques par catégorie',
    fineprint:
      'Toutes les techniques ne conviennent pas à tout le monde. Chacune s’accompagne d’une consigne de sécurité : lis-la, et arrête-toi si tu ne te sens pas bien.',
  },

  history: {
    eyebrow: 'Historique et Apple Santé',
    title: 'Chaque séance,<br />gardée en mémoire.',
    lede: 'L’historique conserve chaque séance, avec ses tendances de fréquence cardiaque et de VFC, directement sur ton appareil. Reviens sur la semaine ou le mois écoulés et vois comment évoluent ta pratique — et ton cœur.',
    ticks: [
      '<strong>Minutes de pleine conscience dans Apple Santé.</strong> Si tu le souhaites, chaque séance terminée est enregistrée en minutes de pleine conscience. Sur iPhone, iPad et Mac, Breathia se contente d’écrire dans Apple Santé — il ne lit jamais tes données de santé.',
      '<strong>Séances Apple Watch incluses.</strong> Les séances réalisées sur Apple Watch apparaissent dans l’historique de l’iPhone.',
    ],
    listAlt: 'L’onglet Historique avec les séances passées, regroupées en Hier, 7 jours précédents et 30 jours précédents.',
    detailAlt: 'Un bilan de séance enregistré pour la respiration de résonance, avec un graphique détaillé de la fréquence cardiaque.',
  },

  everywhere: {
    eyebrow: 'Sur tous tes appareils',
    title: 'Partout où tu as besoin de souffler.',
    watchTitle: 'Apple Watch',
    watchBody: 'Respire directement depuis ton poignet, au rythme de légères vibrations, pendant que ta fréquence cardiaque est mesurée. Les séances se synchronisent avec l’historique de l’iPhone.',
    watchListAlt: 'La liste des techniques sur Apple Watch.',
    watchSessionAlt: 'Une séance sur Apple Watch : Expire 2, avec la fréquence cardiaque au-dessus.',
    watchSummaryAlt: 'Le résumé d’une séance sur Apple Watch, synchronisé avec l’historique de l’iPhone.',
    liveTitle: 'Activité en direct',
    liveBody: 'Suis ta séance sur l’écran verrouillé et dans la Dynamic Island. Vois le temps écoulé, mets en pause ou termine sans ouvrir l’app.',
    liveNote: 'Illustration stylisée.',
    ipadTitle: 'iPad',
    ipadBody: 'Sur grand écran, les techniques et leurs détails s’affichent côte à côte, avec la même prise en charge des capteurs Bluetooth que sur iPhone.',
    macTitle: 'Mac',
    macBody: 'Une app Mac native avec des signaux sonores doux. Connecte les mêmes capteurs Bluetooth et retrouve chaque séance dans l’historique.',
    ipadAlt: 'Breathia sur iPad : la liste des techniques par catégorie à côté des détails de la respiration carrée.',
    macAlt: 'Breathia sur Mac : l’historique avec un bilan de séance — fréquence cardiaque au début, en moyenne et à la fin, et VFC en hausse.',
  },

  privacy: {
    eyebrow: 'Confidentialité',
    title: 'Ta respiration ne regarde que toi.',
    lede: 'Breathia n’a ni compte ni serveur. Tes mesures de fréquence cardiaque, ta VFC et ton historique restent sur tes appareils. Les séances n’arrivent dans Apple Santé que si tu l’actives.',
    pillars: [
      { title: 'Sur ton appareil', body: 'L’historique et les réglages restent sur tes appareils. Supprime l’app, et ses données disparaissent avec elle.' },
      { title: 'Sans compte', body: 'Ouvre l’app et respire. Ni inscription, ni identifiant.' },
      { title: 'Tout est gratuit', body: 'Breathia est entièrement gratuit : toutes les fonctionnalités et toutes les icônes d’app. Sans achats intégrés ni publicité.' },
    ],
    link: 'Lire la politique de confidentialité',
  },

  icons: {
    eyebrow: 'Icônes',
    title: 'À ton image.',
    lede: 'Choisis parmi huit icônes d’app — et sur iPhone et iPad, Breathia prend les couleurs de celle que tu choisis.',
    label: 'Icônes d’app',
    names: { classic: 'Classique', amethyst: 'Améthyste', blush: 'Rose poudré', ember: 'Braise', glacier: 'Glacier', lagoon: 'Lagon', midnightGold: 'Or de minuit', noir: 'Noir' },
    note: 'Toutes les icônes sont gratuites pour tous, comme chaque fonctionnalité de Breathia.',
  },

  cta: {
    iconAlt: 'Icône de l’app Breathia',
    title: 'Prends une respiration.<br />Puis une autre.',
    lede: 'Breathia est gratuit sur l’App Store pour iPhone, iPad, Mac et Apple Watch.',
    meta: 'Disponible en 11 langues',
  },

  footer: {
    label: 'Informations légales et contact',
    versions: 'Historique des versions',
    privacy: 'Politique de confidentialité',
    imprint: 'Mentions légales',
    terms: 'Conditions d’utilisation',
    feedback: 'Envoyer un commentaire',
    source: 'Open source',
    disclaimer:
      'Breathia est une app de bien-être, pas un dispositif médical. Elle n’est pas destinée à diagnostiquer ou à traiter une quelconque affection. Polar et H10 sont des marques de Polar Electro Oy. Apple, le logo Apple, Apple Watch, iPad, iPhone, Mac, MacBook et App Store sont des marques d’Apple Inc., déposées aux États-Unis et dans d’autres pays.',
  },

  versions: {
    title: 'Historique des versions',
    lede: 'Les nouveautés de chaque version de Breathia sur l’App Store.',
    description: 'Toutes les versions de Breathia sur l’App Store et leurs nouveautés, pour iPhone, iPad, Mac et Apple Watch.',
    version: 'Version',
  },

  legal: {
    effective: 'En vigueur depuis le',
    lastUpdated: 'Date d’entrée en vigueur',
    contents: 'Sommaire',
    otherLanguages: 'Également disponible en',
    backHome: 'Retour à Breathia',
    privacyTitle: 'Politique de confidentialité',
    privacyDescription:
      'Comment Breathia traite tes données : sans compte, sans serveur, sans suivi. Ta fréquence cardiaque, ta VFC et ton historique restent sur tes appareils.',
    termsTitle: 'Conditions d’utilisation',
    termsDescription:
      'Les conditions d’utilisation de l’app Breathia : le contrat de licence standard d’Apple (EULA), complété de quelques points courts : avertissement santé et responsabilité.',
    imprintTitle: 'Mentions légales',
    imprintDescription: 'Mentions légales de Breathia : informations sur le prestataire conformément au § 5 DDG.',
    redirecting: 'Redirection…',
  },
};
