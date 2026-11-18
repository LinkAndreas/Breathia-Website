// Textes français. Les clés reprennent en.js. Vouvoiement, comme dans l’app.
// Les espaces fines insécables avant : ; ? ! et dans « » sont ajoutées au rendu.

export default {
  meta: {
    title: 'Breathia — Respiration guidée avec biofeedback cardiaque en direct',
    description:
      'Breathia vous guide à travers {count} techniques de respiration sur iPhone, iPad, Mac et Apple Watch, et vous montre en direct comment réagissent votre fréquence cardiaque et votre VFC grâce à un capteur de fréquence cardiaque Bluetooth comme la Polar H10. Gratuit, privé et sans compte.',
    ogTitle: 'Breathia — Respirez plus lentement. Votre cœur suit.',
    ogDescription:
      'Respiration guidée avec un retour en direct sur votre fréquence cardiaque et votre VFC. {count} techniques pour iPhone, iPad, Mac et Apple Watch.',
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
    title: 'Respirez plus lentement.<br /><span class="hero__title-glow">Votre cœur suit.</span>',
    lede: 'Une respiration guidée, avec un retour en direct de votre cœur. Choisissez parmi {count} techniques, suivez un cercle qui rythme chaque respiration et voyez réagir votre fréquence cardiaque et sa variabilité (VFC).',
    secondary: 'Voir comment ça marche',
    meta: 'Gratuit · Sans compte · Avec ou sans capteur',
    phoneAlt:
      'Une séance Breathia sur iPhone : le cercle de respiration affiche « Inspirez 2 », cycle 7 de la respiration de résonance, au-dessus de graphiques en direct de fréquence cardiaque et de VFC.',
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
    title: 'Un cercle qui respire avec vous.',
    lede: 'Le cercle grandit quand vous inspirez et rapetisse quand vous expirez. Le chiffre au centre monte pendant l’inspiration et la rétention, puis redescend à l’expiration : vous savez toujours où vous en êtes, même les yeux mi-clos.',
    ticks: [
      '<strong>Des signaux haptiques et sonores</strong> annoncent chaque changement de phase. Vous pouvez donc fermer les yeux et simplement suivre.',
      '<strong>Un court compte à rebours</strong> vous prépare et indique par quoi commencer.',
      '<strong>L’écran reste allumé</strong> pendant que vous respirez. Si vous quittez l’app, la séance se met en pause : le temps passé ailleurs n’est pas compté.',
    ],
    tryLabel: 'Essayer une technique',
    play: 'Reprendre',
    demoNote: 'Un aperçu interactif du cercle de respiration de Breathia. Choisissez une technique pour découvrir son rythme.',
  },

  bio: {
    eyebrow: 'Biofeedback en direct',
    title: 'Voyez votre cœur s’accorder<br class="br-lg" /> à votre respiration.',
    lede: 'Portez un capteur de fréquence cardiaque Bluetooth, et Breathia vous montre comment votre fréquence cardiaque et sa variabilité évoluent pendant que vous respirez — en direct, battement par battement.',
    deviceAlt:
      'Une séance de respiration de résonance en cours sur iPhone : le cercle de respiration, la progression, la tendance actuelle de la VFC et des graphiques en direct de fréquence cardiaque et de VFC (RMSSD).',
    cards: [
      {
        title: 'Fréquence cardiaque et VFC en direct',
        body: 'Les deux valeurs se mettent à jour à chaque battement, à partir des intervalles battement à battement (RR) transmis par votre capteur. Choisissez l’indicateur de VFC qui vous convient : RMSSD ou SDNN.',
      },
      {
        title: 'La tendance en un coup d’œil',
        body: 'Breathia vous indique si votre VFC augmente, reste stable ou diminue, pour repérer le moment où votre cœur et votre souffle s’accordent. Réglez la sensibilité sur Faible, Équilibrée ou Élevée.',
      },
      {
        title: 'Des données fiables, sans bruit',
        body: 'Les battements manqués et les mesures prises sans contact avec la peau sont filtrés : vos graphiques reflètent ce qui s’est réellement passé.',
      },
    ],
    chartTitle: 'Illustration : la fréquence cardiaque monte à chaque inspiration et descend à chaque expiration, au rythme de la respiration.',
    keyBreath: 'Votre respiration',
    keyHeart: 'Votre fréquence cardiaque',
    chartNote:
      'Naturellement, votre cœur accélère un peu à l’inspiration et ralentit à l’expiration. Respirer lentement — environ 5 à 6 respirations par minute — tend à amplifier ce rythme.',
  },

  sensors: {
    eyebrow: 'Capteurs',
    title: 'Votre capteur, associé en quelques secondes.<br class="br-lg" /> Ou respirez sans.',
    recommended: 'Recommandé',
    polarBody:
      'La Polar H10 en est un bon exemple. Elle transmet votre fréquence cardiaque et les intervalles RR battement à battement pour une VFC précise. Humidifiez les électrodes, mettez la ceinture : elle apparaît dans Breathia en quelques secondes.',
    bleTitle: 'Tout capteur cardiaque Bluetooth',
    bleBody:
      'Toute ceinture thoracique ou tout brassard utilisant le service Bluetooth standard de fréquence cardiaque s’associe de la même façon et affiche votre fréquence cardiaque. Pour la VFC, il doit aussi transmettre les intervalles RR, comme le font les ceintures thoraciques.',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watch mesure votre fréquence cardiaque pendant la séance — aucun capteur nécessaire.',
    noneTitle: 'Pas de capteur ? Pas de problème.',
    noneBody:
      'Toutes les techniques fonctionnent sans capteur, et chaque séance compte quand même dans votre historique et vos minutes de pleine conscience.',
    fineprint:
      'Les capteurs se connectent sur iPhone, iPad et Mac. Breathia utilise le Bluetooth uniquement pour se connecter à votre capteur de fréquence cardiaque ; il ne recherche aucun autre appareil et ne collecte aucune information à leur sujet.',
  },

  how: {
    eyebrow: 'Fonctionnement',
    title: 'Du téléchargement à la première respiration<br class="br-lg" /> en moins d’une minute.',
    steps: [
      {
        title: 'Choisissez une technique',
        body: 'Choisissez selon votre besoin du moment — calme, sommeil, concentration ou énergie — ou cherchez par nom. Associez votre capteur depuis la barre d’outils.',
        alt: 'L’onglet Respirer avec les techniques par catégorie, des filtres et un capteur connecté affichant la fréquence cardiaque.',
      },
      {
        title: 'Respirez avec le cercle',
        body: 'Suivez le cercle, le décompte et les signaux. Votre fréquence cardiaque et votre VFC se mettent à jour pendant que vous respirez.',
        alt: 'Une séance en cours avec le cercle de respiration, la progression et des graphiques de fréquence cardiaque et de VFC.',
      },
      {
        title: 'Voyez ce qui a changé',
        body: 'Votre bilan de séance indique votre fréquence cardiaque au début, en moyenne et à la fin, l’évolution de votre VFC et un court résumé en mots simples.',
        alt: 'Un bilan de séance : fréquence cardiaque 71 au début, 63 en moyenne, 58 à la fin ; RMSSD 52 ms, en hausse ; et une note indiquant que la VFC a augmenté au fil de la séance.',
      },
    ],
  },

  library: {
    eyebrow: 'Bibliothèque de techniques',
    title: '{count} techniques.<br />Toutes expliquées.',
    lede: 'De la respiration carrée et du soupir physiologique à la respiration de résonance et à la respiration alternée. Pour chaque technique, découvrez comment elle agit, quand elle aide le plus, comment la pratiquer pas à pas — et quand être prudent.',
    phoneAlt:
      'La page de la respiration de résonance : inspiration de 5 secondes, expiration de 5 secondes, séance de 10 minutes, avec les sections Fonctionnement, Idéal pour et Pratique.',
    filterLabel: 'Filtrer les techniques par catégorie',
    fineprint:
      'Toutes les techniques ne conviennent pas à tout le monde. Chacune s’accompagne d’une consigne de sécurité : lisez-la, et arrêtez-vous si vous ne vous sentez pas bien.',
  },

  history: {
    eyebrow: 'Historique et Apple Santé',
    title: 'Chaque séance,<br />gardée en mémoire.',
    lede: 'L’historique conserve chaque séance, avec ses tendances de fréquence cardiaque et de VFC, directement sur votre appareil. Revenez sur la semaine ou le mois écoulés et voyez comment évoluent votre pratique — et votre cœur.',
    ticks: [
      '<strong>Minutes de pleine conscience dans Apple Santé.</strong> Si vous le souhaitez, chaque séance terminée est enregistrée en minutes de pleine conscience. Sur iPhone, iPad et Mac, Breathia se contente d’écrire dans Apple Santé — il ne lit jamais vos données de santé.',
      '<strong>Séances Apple Watch incluses.</strong> Les séances réalisées sur Apple Watch apparaissent dans l’historique de l’iPhone.',
    ],
    listAlt: 'L’onglet Historique avec les séances passées, regroupées en hier, 7 derniers jours et 30 derniers jours.',
    detailAlt: 'Un bilan de séance enregistré pour la respiration de résonance, avec les synthèses de fréquence cardiaque et de VFC.',
  },

  everywhere: {
    eyebrow: 'Sur tous vos appareils',
    title: 'Partout où vous avez besoin de souffler.',
    watchTitle: 'Apple Watch',
    watchBody: 'Respirez directement depuis votre poignet, au rythme de légères vibrations, pendant que votre fréquence cardiaque est mesurée. Les séances se synchronisent avec l’historique de l’iPhone.',
    watchListAlt: 'La liste des techniques sur Apple Watch.',
    watchSessionAlt: 'Une séance sur Apple Watch : Expirez 2, avec la fréquence cardiaque au-dessus.',
    watchSummaryAlt: 'Le résumé d’une séance sur Apple Watch, synchronisé avec l’historique de l’iPhone.',
    liveTitle: 'Activité en direct',
    liveBody: 'Suivez votre séance sur l’écran verrouillé et dans la Dynamic Island. Voyez le temps écoulé, mettez en pause ou terminez sans ouvrir l’app.',
    liveNote: 'Illustration stylisée.',
    ipadTitle: 'iPad',
    ipadBody: 'Sur grand écran, les techniques et leurs détails s’affichent côte à côte, avec la même prise en charge des capteurs Bluetooth que sur iPhone.',
    macTitle: 'Mac',
    macBody: 'Une app Mac native avec des signaux sonores doux. Connectez les mêmes capteurs Bluetooth et retrouvez chaque séance dans l’historique.',
    ipadAlt: 'Breathia sur iPad : la liste des techniques par catégorie à côté des détails de la respiration carrée.',
    macAlt: 'Breathia sur Mac : l’historique avec un bilan de séance — fréquence cardiaque au début, en moyenne et à la fin, et VFC en hausse.',
  },

  privacy: {
    eyebrow: 'Confidentialité',
    title: 'Votre respiration ne regarde que vous.',
    lede: 'Breathia n’a ni compte ni serveur. Vos mesures de fréquence cardiaque, votre VFC et votre historique restent sur vos appareils. Les séances n’arrivent dans Apple Santé que si vous l’activez.',
    pillars: [
      { title: 'Sur votre appareil', body: 'L’historique et les réglages restent sur vos appareils. Supprimez l’app, et ses données disparaissent avec elle.' },
      { title: 'Sans compte', body: 'Ouvrez l’app et respirez. Ni inscription, ni identifiant.' },
      { title: 'Tout est gratuit', body: 'Breathia est entièrement gratuit : toutes les fonctionnalités et toutes les icônes d’app. Sans achats intégrés ni publicité.' },
    ],
    link: 'Lire la politique de confidentialité',
  },

  icons: {
    eyebrow: 'Icônes',
    title: 'À votre image.',
    lede: 'Choisissez parmi huit icônes d’app — et sur iPhone et iPad, Breathia prend les couleurs de celle que vous choisissez.',
    label: 'Icônes d’app',
    names: { classic: 'Classique', amethyst: 'Améthyste', blush: 'Rose poudré', ember: 'Braise', glacier: 'Glacier', lagoon: 'Lagon', midnightGold: 'Or de minuit', noir: 'Noir' },
    note: 'Toutes les icônes sont gratuites pour tous, comme chaque fonctionnalité de Breathia.',
  },

  cta: {
    iconAlt: 'Icône de l’app Breathia',
    title: 'Prenez une respiration.<br />Puis une autre.',
    lede: 'Breathia est gratuit sur l’App Store pour iPhone, iPad, Mac et Apple Watch.',
    meta: 'Disponible en français, English, Deutsch et Español',
  },

  footer: {
    label: 'Mentions légales et contact',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    feedback: 'Envoyer un commentaire',
    github: 'Open source sur GitHub',
    disclaimer:
      'Breathia est une app de bien-être, pas un dispositif médical. Elle n’est pas destinée à diagnostiquer ou à traiter une quelconque affection. Polar et H10 sont des marques de Polar Electro Oy. Apple, le logo Apple, Apple Watch, iPad, iPhone, Mac, MacBook et App Store sont des marques d’Apple Inc., déposées aux États-Unis et dans d’autres pays.',
  },

  legal: {
    effective: 'En vigueur depuis le',
    lastUpdated: 'Date d’entrée en vigueur',
    contents: 'Sommaire',
    otherLanguages: 'Également disponible en',
    backHome: 'Retour à Breathia',
    privacyTitle: 'Politique de confidentialité',
    privacyDescription:
      'Comment Breathia traite vos données : sans compte, sans serveur, sans suivi. Votre fréquence cardiaque, votre VFC et votre historique restent sur vos appareils.',
    termsTitle: 'Conditions d’utilisation',
    termsDescription:
      'Les conditions d’utilisation de l’app Breathia : l’EULA standard d’Apple, complété de quelques points courts — avertissement santé, responsabilité, open source.',
    redirecting: 'Redirection…',
  },
};
