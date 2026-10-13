// Textos en español. Las claves reflejan en.js. Tuteo y «correa pectoral», como en la app.

export default {
  meta: {
    title: 'Breathia — Respiración guiada con biofeedback cardiaco en directo',
    description:
      'Breathia te guía por {count} técnicas de respiración en iPhone, iPad, Mac y Apple Watch, y te muestra en directo cómo responden tu frecuencia cardiaca y tu VFC con un sensor de frecuencia cardiaca Bluetooth como la Polar H10. Gratis, privada y sin cuenta.',
    ogTitle: 'Breathia — Respira más despacio. Tu corazón te sigue.',
    ogDescription:
      'Respiración guiada con información en directo de tu frecuencia cardiaca y tu VFC. {count} técnicas para iPhone, iPad, Mac y Apple Watch.',
    ogImageAlt:
      'El icono de la app Breathia —un sol que se pone sobre dos olas— junto a las palabras: Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: 'Saltar al contenido',
    backToTop: 'Breathia, volver arriba',
    sections: 'Secciones',
    download: 'Descargar',
    appStoreBadge: 'Descárgalo en el App Store',
    language: 'Idioma',
    chooseLanguage: 'Elegir idioma',
    home: 'Inicio',
    themeToDark: 'Cambiar a apariencia oscura',
    themeToLight: 'Cambiar a apariencia clara',
  },

  nav: {
    breathe: 'Respirar',
    biofeedback: 'Biofeedback',
    sensors: 'Sensores',
    techniques: 'Técnicas',
    privacy: 'Privacidad',
  },

  hero: {
    eyebrow: 'Breathia para iPhone, iPad, Mac y Apple Watch',
    title: 'Respira más despacio.<br /><span class="hero__title-glow">Tu corazón te sigue.</span>',
    lede: 'Respiración guiada con información en directo de tu corazón. Elige entre {count} técnicas, sigue un círculo que marca el ritmo de cada respiración y observa cómo responden tu frecuencia cardiaca y su variabilidad (VFC).',
    secondary: 'Descubre cómo funciona',
    meta: 'Gratis · Sin cuenta · Con o sin sensor',
    phoneAlt:
      'Una sesión de Breathia en iPhone: el círculo de respiración muestra «Inhala 2», ciclo 7 de la respiración de resonancia, sobre gráficas en directo de frecuencia cardiaca y VFC.',
  },

  glance: {
    label: 'Breathia de un vistazo',
    techniques: 'técnicas de respiración',
    categories: 'categorías, del sueño a la concentración',
    platforms: 'plataformas, una sola app',
    accounts: 'cuentas o servidores',
  },

  breathe: {
    eyebrow: 'Guía de respiración',
    title: 'Un círculo que respira contigo.',
    lede: 'El círculo crece cuando inhalas y se reduce cuando exhalas. El número del centro sube mientras inhalas y retienes, y baja al exhalar: siempre sabes en qué punto estás, incluso con los ojos entrecerrados.',
    ticks: [
      '<strong>Señales hápticas y sonoras</strong> anuncian cada cambio de fase, así que puedes cerrar los ojos y simplemente dejarte guiar.',
      '<strong>Una breve cuenta atrás</strong> te prepara y te indica por dónde empezar.',
      '<strong>La pantalla se mantiene encendida</strong> mientras respiras. Si sales de la app, la sesión se pausa y el tiempo fuera no cuenta.',
    ],
    tryLabel: 'Prueba una técnica',
    play: 'Reanudar',
    demoNote: 'Una vista previa interactiva del círculo de respiración de Breathia. Elige una técnica para ver su ritmo.',
  },

  bio: {
    eyebrow: 'Biofeedback en directo',
    title: 'Mira cómo tu corazón se acompasa<br class="br-lg" /> a tu respiración.',
    lede: 'Ponte un sensor de frecuencia cardiaca Bluetooth y Breathia te mostrará cómo cambian tu frecuencia cardiaca y su variabilidad mientras respiras: en directo, latido a latido.',
    deviceAlt:
      'Una sesión de respiración de resonancia en curso en iPhone: el círculo de respiración, el progreso de la sesión, la tendencia actual de la VFC y gráficas en directo de frecuencia cardiaca y VFC (RMSSD).',
    cards: [
      {
        title: 'Frecuencia cardiaca y VFC en directo',
        body: 'Ambos valores se actualizan con cada latido, a partir de los intervalos latido a latido (RR) que envía tu sensor. Elige la medida de VFC que prefieras: RMSSD o SDNN.',
      },
      {
        title: 'La tendencia de un vistazo',
        body: 'Breathia te indica si tu VFC sube, se mantiene o baja, para que notes cuándo tu corazón y tu respiración se acompasan. Ajusta la sensibilidad a Baja, Equilibrada o Alta.',
      },
      {
        title: 'Datos limpios, sin ruido',
        body: 'Los latidos perdidos y las lecturas sin contacto con la piel se descartan, así que tus gráficas muestran lo que ha pasado de verdad.',
      },
    ],
    chartTitle: 'Ilustración: la frecuencia cardiaca sube con cada inhalación y baja con cada exhalación, al ritmo de la respiración.',
    keyBreath: 'Tu respiración',
    keyHeart: 'Tu frecuencia cardiaca',
    chartNote:
      'De forma natural, tu corazón se acelera un poco al inhalar y se ralentiza al exhalar. Respirar despacio —unas 5 o 6 respiraciones por minuto— suele hacer este ritmo más marcado.',
  },

  sensors: {
    eyebrow: 'Sensores',
    title: 'Tu sensor, vinculado en segundos.<br class="br-lg" /> O respira sin él.',
    recommended: 'Recomendada',
    polarBody:
      'La Polar H10 es un buen ejemplo. Envía tu frecuencia cardiaca y los intervalos RR latido a latido para una VFC precisa. Humedece los electrodos, ponte la correa y aparecerá en Breathia en pocos segundos.',
    bleTitle: 'Cualquier sensor de frecuencia cardiaca Bluetooth',
    bleBody:
      'Cualquier correa pectoral o brazalete que use el servicio Bluetooth estándar de frecuencia cardiaca se vincula igual y muestra tu frecuencia cardiaca. Para la VFC, también tiene que enviar intervalos RR, como hacen las correas pectorales.',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watch mide tu frecuencia cardiaca durante la sesión, sin necesidad de sensor.',
    noneTitle: '¿Sin sensor? Sin problema.',
    noneBody:
      'Todas las técnicas funcionan sin sensor, y cada sesión sigue contando para tu historial y tus minutos de atención plena.',
    fineprint:
      'Los sensores se conectan en iPhone, iPad y Mac. Breathia usa el Bluetooth solo para conectarse a tu sensor de frecuencia cardiaca; no busca otros dispositivos ni recopila información sobre ellos.',
  },

  how: {
    eyebrow: 'Cómo funciona',
    title: 'De la descarga a la primera respiración<br class="br-lg" /> en menos de un minuto.',
    steps: [
      {
        title: 'Elige una técnica',
        body: 'Escoge lo que necesitas ahora —calma, sueño, concentración o energía— o búscala por nombre. Vincula tu sensor desde la barra de herramientas.',
        alt: 'La pestaña Respirar con las técnicas por categoría, filtros y un sensor conectado que muestra la frecuencia cardiaca.',
      },
      {
        title: 'Respira con el círculo',
        body: 'Sigue el círculo, la cuenta y las señales. Tu frecuencia cardiaca y tu VFC se actualizan mientras respiras.',
        alt: 'Una sesión en curso con el círculo de respiración, el progreso de la sesión y gráficas de frecuencia cardiaca y VFC.',
      },
      {
        title: 'Mira qué ha cambiado',
        body: 'Tu informe de sesión muestra tu frecuencia cardiaca al inicio, de media y al final, cómo ha evolucionado tu VFC y un breve resumen en palabras sencillas.',
        alt: 'Un informe de sesión: frecuencia cardiaca 71 al inicio, 63 de media, 58 al final; RMSSD 52 ms, en aumento; y una nota de que la VFC subió a lo largo de la sesión.',
      },
    ],
  },

  library: {
    eyebrow: 'Biblioteca de técnicas',
    title: '{count} técnicas.<br />Todas explicadas.',
    lede: 'De la respiración cuadrada y el suspiro fisiológico a la respiración de resonancia y la respiración alterna. De cada técnica descubrirás cómo funciona, cuándo ayuda más, cómo practicarla paso a paso y cuándo conviene tener cuidado.',
    phoneAlt:
      'La página de la respiración de resonancia: inhalación de 5 segundos, exhalación de 5 segundos, sesión de 10 minutos, con las secciones Cómo funciona, Ideal para y Cómo practicarla.',
    filterLabel: 'Filtrar técnicas por categoría',
    fineprint:
      'No todas las técnicas son para todo el mundo. Cada una incluye una nota de seguridad: léela y para si no te encuentras bien.',
  },

  history: {
    eyebrow: 'Historial y Apple Salud',
    title: 'Cada sesión,<br />guardada.',
    lede: 'El historial guarda cada sesión, con sus tendencias de frecuencia cardiaca y VFC, directamente en tu dispositivo. Repasa la última semana o el último mes y descubre cómo evolucionan tu práctica y tu corazón.',
    ticks: [
      '<strong>Minutos de atención plena en Apple Salud.</strong> Si quieres, cada sesión completada se guarda como minutos de atención plena. En iPhone, iPad y Mac, Breathia solo escribe en Apple Salud: nunca lee tus datos de salud.',
      '<strong>Incluye las sesiones de Apple Watch.</strong> Las sesiones que hagas en Apple Watch aparecen en el historial del iPhone.',
    ],
    listAlt: 'La pestaña Historial con sesiones pasadas agrupadas en ayer, los últimos 7 días y los últimos 30 días.',
    detailAlt: 'Un informe guardado de una sesión de respiración de resonancia con resúmenes de frecuencia cardiaca y VFC.',
  },

  everywhere: {
    eyebrow: 'En todos tus dispositivos',
    title: 'Donde sea que necesites respirar.',
    watchTitle: 'Apple Watch',
    watchBody: 'Respira desde tu muñeca con suaves vibraciones que te acompañan, mientras se mide tu frecuencia cardiaca. Las sesiones se sincronizan con el historial del iPhone.',
    watchListAlt: 'La lista de técnicas en Apple Watch.',
    watchSessionAlt: 'Una sesión en Apple Watch: Exhala 2, con la frecuencia cardiaca encima.',
    watchSummaryAlt: 'El resumen de una sesión en Apple Watch, que se sincroniza con el historial del iPhone.',
    liveTitle: 'Actividad en directo',
    liveBody: 'Sigue tu sesión desde la pantalla de bloqueo y la Dynamic Island. Consulta el tiempo transcurrido y pausa o termina sin abrir la app.',
    liveNote: 'Ilustración estilizada.',
    ipadTitle: 'iPad',
    ipadBody: 'En la pantalla grande, las técnicas y sus detalles aparecen uno junto al otro, con la misma compatibilidad con sensores Bluetooth que en iPhone.',
    macTitle: 'Mac',
    macBody: 'Una app nativa para Mac con señales sonoras suaves. Conecta los mismos sensores Bluetooth y repasa cada sesión en el historial.',
    ipadAlt: 'Breathia en iPad: la lista de técnicas por categoría junto a los detalles de la respiración cuadrada.',
    macAlt: 'Breathia en el Mac: el historial con un informe de sesión —frecuencia cardiaca al inicio, de media y al final, y VFC en aumento—.',
  },

  privacy: {
    eyebrow: 'Privacidad',
    title: 'Tu respiración es solo asunto tuyo.',
    lede: 'Breathia no tiene cuenta ni servidor. Tus mediciones de frecuencia cardiaca, tu VFC y tu historial de sesiones se quedan en tus dispositivos. Las sesiones solo llegan a Apple Salud si lo activas.',
    pillars: [
      { title: 'En tu dispositivo', body: 'El historial y los ajustes se quedan en tus dispositivos. Si eliminas la app, sus datos se van con ella.' },
      { title: 'Sin cuenta', body: 'Abre la app y empieza a respirar. Sin registros ni inicios de sesión.' },
      { title: 'Todo gratis', body: 'Todas las funciones de Breathia son gratuitas. Las propinas y suscripciones opcionales apoyan su desarrollo; con una suscripción, además, hay iconos alternativos.' },
    ],
    link: 'Leer la política de privacidad',
  },

  icons: {
    eyebrow: 'Iconos',
    title: 'Hazla tuya.',
    lede: 'Como agradecimiento, quienes apoyan pueden elegir entre siete iconos más, y en iPhone y iPad Breathia adopta los colores del que elijan.',
    label: 'Iconos de la app',
    names: { classic: 'Clásico', amethyst: 'Amatista', blush: 'Rosa', ember: 'Brasa', glacier: 'Glaciar', lagoon: 'Laguna', midnightGold: 'Oro de medianoche', noir: 'Noir' },
    note: 'Clásico es gratis para todos. Los demás iconos forman parte del apoyo mensual o anual mientras esté activo. Todas las funciones de Breathia siguen siendo gratuitas en cualquier caso.',
  },

  cta: {
    iconAlt: 'Icono de la app Breathia',
    title: 'Respira hondo.<br />Y luego otra vez.',
    lede: 'Breathia es gratis en el App Store para iPhone, iPad, Mac y Apple Watch.',
    meta: 'Disponible en español, English, Deutsch y Français',
  },

  footer: {
    label: 'Información legal y contacto',
    privacy: 'Política de privacidad',
    terms: 'Condiciones de uso',
    feedback: 'Enviar comentarios',
    github: 'Código abierto en GitHub',
    disclaimer:
      'Breathia es una app de bienestar, no un producto sanitario. No está concebida para diagnosticar ni tratar ninguna enfermedad. Polar y H10 son marcas de Polar Electro Oy. Apple, el logotipo de Apple, Apple Watch, iPad, iPhone, Mac, MacBook y App Store son marcas de Apple Inc., registradas en EE. UU. y en otros países.',
  },

  legal: {
    effective: 'En vigor desde el',
    lastUpdated: 'Fecha de entrada en vigor',
    contents: 'Contenido',
    otherLanguages: 'También disponible en',
    backHome: 'Volver a Breathia',
    privacyTitle: 'Política de privacidad',
    privacyDescription:
      'Cómo trata Breathia tus datos: sin cuenta, sin servidor y sin seguimiento. Tu frecuencia cardiaca, tu VFC y tu historial de sesiones se quedan en tus dispositivos.',
    termsTitle: 'Condiciones de uso',
    termsDescription:
      'Las condiciones de uso de la app Breathia: el EULA estándar de Apple más unas breves condiciones adicionales: aviso de salud, compras opcionales y responsabilidad.',
    redirecting: 'Redirigiendo…',
  },
};
