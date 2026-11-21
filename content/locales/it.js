// Italian copy. Keys mirror en.js exactly (checked at build time). Informal “tu”, as in the app; dash “ – ”.
// Strings may contain inline HTML. {count} and {categories} are filled in by the renderer.

export default {
  meta: {
    title: 'Breathia – Respirazione guidata con biofeedback HRV in tempo reale',
    description:
      'Breathia ti guida attraverso {count} tecniche di respirazione su iPhone, iPad, Mac e Apple Watch – e ti mostra in tempo reale come rispondono la tua frequenza cardiaca e la tua HRV, con un sensore di frequenza cardiaca Bluetooth come il Polar H10. Gratuita, privata, senza account.',
    ogTitle: 'Breathia – Respira più lentamente. Il tuo cuore ti segue.',
    ogDescription:
      'Respirazione guidata con feedback in tempo reale su frequenza cardiaca e HRV. {count} tecniche per iPhone, iPad, Mac e Apple Watch.',
    ogImageAlt:
      'L’icona dell’app Breathia – un sole che tramonta su due onde – accanto alle parole: Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: 'Vai al contenuto',
    backToTop: 'Breathia, torna all’inizio',
    sections: 'Sezioni',
    download: 'Scarica',
    appStoreBadge: 'Scarica su App Store',
    language: 'Lingua',
    chooseLanguage: 'Scegli la lingua',
    home: 'Home',
    themeToDark: 'Passa all’aspetto scuro',
    themeToLight: 'Passa all’aspetto chiaro',
  },

  nav: {
    breathe: 'Respira',
    biofeedback: 'Biofeedback',
    sensors: 'Sensori',
    techniques: 'Tecniche',
    privacy: 'Privacy',
  },

  hero: {
    eyebrow: 'Breathia per iPhone, iPad, Mac e Apple Watch',
    title: 'Respira più lentamente.<br /><span class="hero__title-glow">Il tuo cuore ti segue.</span>',
    lede: 'Respirazione guidata con feedback in tempo reale dal tuo cuore. Scegli tra {count} tecniche, segui un cerchio che scandisce ogni respiro e guarda come rispondono la tua frequenza cardiaca e la variabilità della frequenza cardiaca (HRV) mentre respiri.',
    secondary: 'Scopri come funziona',
    meta: 'Gratuita · Senza account · Con o senza sensore',
    phoneAlt:
      'Una sessione di Breathia su iPhone: il cerchio di respirazione scandisce un’espirazione della Respirazione di risonanza, sopra un avviso che respiro e cuore sono sincronizzati e i grafici in tempo reale di frequenza cardiaca e HRV.',
  },

  glance: {
    label: 'Breathia in breve',
    techniques: 'tecniche di respirazione',
    categories: 'categorie, da Sonno a Concentrazione',
    platforms: 'piattaforme, una sola app',
    accounts: 'account o server',
  },

  breathe: {
    eyebrow: 'Guida al respiro',
    title: 'Un cerchio che respira con te.',
    lede: 'Il cerchio si espande quando inspiri e si restringe quando espiri. Il numero al centro sale mentre inspiri e trattieni, e scende mentre espiri – così sai sempre a che punto sei, anche con gli occhi socchiusi.',
    ticks: [
      '<strong>Segnali aptici e otto suoni calmi e naturali</strong> – dalle campane tibetane e campane a vento alle onde del mare, al volume che preferisci – segnano ogni cambio di fase, così puoi chiudere gli occhi e lasciarti guidare.',
      '<strong>Un breve conto alla rovescia</strong> ti prepara e ti mostra cosa viene prima.',
      '<strong>Lo schermo resta acceso</strong> mentre respiri. Se esci dall’app, la sessione va in pausa, così il tempo trascorso altrove non conta.',
    ],
    tryLabel: 'Prova una tecnica',
    play: 'Riprendi',
    demoNote: 'Un’anteprima interattiva del cerchio di respirazione di Breathia. Scegli una tecnica per vederne il ritmo.',
  },

  bio: {
    eyebrow: 'Biofeedback in tempo reale',
    title: 'Guarda il tuo cuore accordarsi<br class="br-lg" /> al tuo respiro.',
    lede: 'Indossa un sensore di frequenza cardiaca Bluetooth e Breathia ti mostra come cambiano la tua frequenza cardiaca e la variabilità della frequenza cardiaca mentre respiri – in tempo reale, battito dopo battito.',
    deviceAlt:
      'Una sessione di Respirazione di risonanza in tempo reale su iPhone: il cerchio di respirazione, l’avanzamento della sessione, un avviso che respiro e cuore sono sincronizzati e i grafici in tempo reale di frequenza cardiaca e HRV (RMSSD).',
    cards: [
      {
        title: 'Frequenza cardiaca e HRV in tempo reale',
        body: 'Entrambe si aggiornano a ogni battito, calcolate dagli intervalli tra un battito e l’altro (RR) inviati dal sensore. Scegli RMSSD o SDNN – la misura dell’HRV che preferisci.',
      },
      {
        title: 'L’andamento a colpo d’occhio',
        body: 'Breathia ti dice se la tua HRV sta salendo, è stabile o sta scendendo, così ti accorgi di quando cuore e respiro trovano lo stesso passo. Imposta la sensibilità del feedback su Bassa, Equilibrata o Alta.',
      },
      {
        title: 'Dati puliti, non rumore',
        body: 'I battiti persi e le letture senza contatto con la pelle vengono filtrati, così i grafici mostrano ciò che è successo davvero.',
      },
    ],
    chartTitle: 'Illustrazione: la frequenza cardiaca sale a ogni inspirazione e scende a ogni espirazione, seguendo il respiro.',
    keyBreath: 'Il tuo respiro',
    keyHeart: 'La tua frequenza cardiaca',
    chartNote:
      'In modo naturale il cuore accelera un po’ quando inspiri e rallenta quando espiri. Respirare lentamente – circa 5-6 respiri al minuto – tende a rendere questo ritmo più marcato.',
  },

  sensors: {
    eyebrow: 'Sensori',
    title: 'Abbina un sensore in pochi secondi.<br class="br-lg" /> Oppure fanne a meno.',
    recommended: 'Consigliato',
    polarBody:
      'Il Polar H10 è un ottimo esempio. Invia la frequenza cardiaca e gli intervalli RR tra un battito e l’altro per un’HRV precisa. Inumidisci gli elettrodi, indossa la fascia e in pochi secondi compare in Breathia.',
    bleTitle: 'Qualsiasi sensore di frequenza cardiaca Bluetooth',
    bleBody:
      'Qualsiasi fascia toracica o da braccio che usa il servizio Bluetooth standard per la frequenza cardiaca si abbina allo stesso modo e mostra la tua frequenza cardiaca. Per l’HRV deve anche inviare gli intervalli RR, come fanno le fasce toraciche.',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watch misura la tua frequenza cardiaca durante la sessione – nessun sensore necessario.',
    noneTitle: 'Nessun sensore? Nessun problema.',
    noneBody:
      'Ogni tecnica funziona anche senza sensore, e ogni sessione conta comunque per la tua cronologia e i tuoi minuti di consapevolezza.',
    fineprint:
      'I sensori si collegano su iPhone, iPad e Mac. Breathia usa il Bluetooth solo per collegarsi al tuo sensore di frequenza cardiaca; non cerca né raccoglie informazioni su altri dispositivi.',
  },

  how: {
    eyebrow: 'Come funziona',
    title: 'Dal download al primo respiro<br class="br-lg" /> in meno di un minuto.',
    steps: [
      {
        title: 'Scegli una tecnica',
        body: 'Scegli ciò che ti serve adesso – calma, sonno, concentrazione o energia – oppure cerca per nome. Collega il sensore dalla barra degli strumenti.',
        alt: 'La scheda Respira con le tecniche per categoria, i filtri e un sensore collegato che mostra la frequenza cardiaca.',
      },
      {
        title: 'Respira con il cerchio',
        body: 'Segui il cerchio, il conteggio e i segnali. La tua frequenza cardiaca e la tua HRV si aggiornano mentre respiri.',
        alt: 'Una sessione in tempo reale con il cerchio di respirazione, l’avanzamento della sessione e i grafici di frequenza cardiaca e HRV.',
      },
      {
        title: 'Guarda cosa è cambiato',
        body: 'Il resoconto della sessione mostra la tua frequenza cardiaca secondo per secondo, come è salita e scesa a ogni respiro e come si è evoluta la tua HRV – il tutto spiegato con parole semplici.',
        alt: 'Un resoconto della sessione: un avviso che la frequenza cardiaca è scesa di 16 BPM, da 71 a 55, con media, minima e massima, sopra un grafico della frequenza cardiaca secondo per secondo.',
      },
    ],
  },

  library: {
    eyebrow: 'Libreria di tecniche',
    title: '{count} tecniche.<br />Ognuna spiegata.',
    lede: 'Dalla Respirazione quadrata e dal Sospiro fisiologico alla Respirazione di risonanza e a narici alternate. Per ogni tecnica scopri come funziona, quando aiuta di più, come praticarla passo dopo passo – e quando fare attenzione.',
    phoneAlt:
      'La pagina di dettaglio della Respirazione di risonanza: inspirazione di 5 secondi, espirazione di 5 secondi, sessione di 10 minuti, con le sezioni Come funziona, Ideale per e Come praticarla.',
    filterLabel: 'Filtra le tecniche per categoria',
    fineprint:
      'Non tutte le tecniche sono adatte a tutti. Ognuna ha una nota di sicurezza – leggila, e fermati se non ti senti bene.',
  },

  history: {
    eyebrow: 'Cronologia e app Salute',
    title: 'Ogni sessione,<br />ricordata.',
    lede: 'La cronologia conserva ogni sessione, con l’andamento di frequenza cardiaca e HRV, direttamente sul tuo dispositivo. Ripercorri l’ultima settimana o l’ultimo mese e guarda come si evolvono la tua pratica – e il tuo cuore.',
    ticks: [
      '<strong>Minuti di consapevolezza nell’app Salute.</strong> Se vuoi, ogni sessione completata viene salvata come minuti di consapevolezza. Su iPhone, iPad e Mac, Breathia scrive solo nell’app Salute – non legge mai i tuoi dati sulla salute.',
      '<strong>Anche le sessioni su Apple Watch.</strong> Le sessioni da Apple Watch compaiono nella cronologia su iPhone.',
    ],
    listAlt: 'La scheda Cronologia con le sessioni di respirazione passate, raggruppate in ieri, ultimi 7 giorni e ultimi 30 giorni.',
    detailAlt: 'Il resoconto salvato di una sessione di Respirazione di risonanza con un grafico dettagliato della frequenza cardiaca.',
  },

  everywhere: {
    eyebrow: 'Su tutti i tuoi dispositivi',
    title: 'Ovunque tu abbia bisogno di respirare.',
    watchTitle: 'Apple Watch',
    watchBody: 'Respira direttamente dal polso, guidato da leggeri tocchi, mentre la tua frequenza cardiaca viene misurata. Le sessioni si sincronizzano con la cronologia su iPhone.',
    watchListAlt: 'Elenco delle tecniche su Apple Watch.',
    watchSessionAlt: 'Una sessione su Apple Watch: Espira 2, con la frequenza cardiaca sopra.',
    watchSummaryAlt: 'Riepilogo della sessione su Apple Watch, in sincronizzazione con la cronologia su iPhone.',
    liveTitle: 'Attività in tempo reale',
    liveBody: 'Segui la sessione sulla schermata di blocco e nella Dynamic Island. Guarda quanto tempo è passato, e metti in pausa o termina senza aprire l’app.',
    liveNote: 'Illustrazione stilizzata.',
    ipadTitle: 'iPad',
    ipadBody: 'Sullo schermo più grande, le tecniche e i loro dettagli stanno uno accanto all’altro – con lo stesso supporto per i sensori Bluetooth di iPhone.',
    macTitle: 'Mac',
    macBody: 'Un’app nativa per Mac con delicati segnali sonori. Collega gli stessi sensori Bluetooth e ripercorri ogni sessione nella cronologia.',
    ipadAlt: 'Breathia su iPad: l’elenco delle tecniche per categoria accanto ai dettagli della Respirazione quadrata.',
    macAlt: 'Breathia su Mac: la cronologia con il resoconto di una sessione – frequenza cardiaca all’inizio, in media e alla fine, e HRV in aumento.',
  },

  privacy: {
    eyebrow: 'Privacy',
    title: 'Il tuo respiro riguarda solo te.',
    lede: 'Breathia non ha account né server. Le misurazioni della frequenza cardiaca, l’HRV e la cronologia delle sessioni restano sui tuoi dispositivi. Le sessioni arrivano nell’app Salute solo se attivi questa opzione.',
    pillars: [
      { title: 'Sul tuo dispositivo', body: 'Cronologia e impostazioni restano sui tuoi dispositivi. Se elimini l’app, i suoi dati se ne vanno con lei.' },
      { title: 'Nessun account', body: 'Apri l’app e inizia a respirare. Nessuna registrazione, nessun login.' },
      { title: 'Tutto gratis', body: 'Breathia è completamente gratuita: ogni funzione e ogni icona dell’app. Nessun acquisto in-app, nessuna pubblicità.' },
    ],
    link: 'Leggi l’informativa sulla privacy',
  },

  icons: {
    eyebrow: 'Icone dell’app',
    title: 'Rendila tua.',
    lede: 'Scegli una delle otto icone dell’app – e su iPhone e iPad, Breathia assume i colori di quella che hai scelto.',
    label: 'Icone dell’app',
    names: { classic: 'Classica', amethyst: 'Ametista', blush: 'Rosa cipria', ember: 'Brace', glacier: 'Ghiacciaio', lagoon: 'Laguna', midnightGold: 'Oro di mezzanotte', noir: 'Noir' },
    note: 'Ogni icona è gratuita per tutti, come ogni funzione di Breathia.',
  },

  cta: {
    iconAlt: 'Icona dell’app Breathia',
    title: 'Fai un respiro.<br />Poi un altro.',
    lede: 'Breathia è gratuita su App Store per iPhone, iPad, Mac e Apple Watch.',
    meta: 'Disponibile in 11 lingue',
  },

  footer: {
    label: 'Note legali e contatti',
    versions: 'Cronologia versioni',
    privacy: 'Informativa sulla privacy',
    imprint: 'Note legali',
    terms: 'Condizioni d’uso',
    feedback: 'Invia feedback',
    source: 'Open source',
    disclaimer:
      'Breathia è un’app per il benessere, non un dispositivo medico. Non è destinata a diagnosticare o curare alcuna condizione. Polar e H10 sono marchi di Polar Electro Oy. Apple, il logo Apple, Apple Watch, iPad, iPhone, Mac, MacBook e App Store sono marchi di Apple Inc., registrati negli Stati Uniti e in altri Paesi.',
  },

  versions: {
    title: 'Cronologia versioni',
    lede: 'Le novità di ogni versione di Breathia su App Store.',
    description: 'Ogni versione di Breathia pubblicata su App Store e cosa ha portato – per iPhone, iPad, Mac e Apple Watch.',
    version: 'Versione',
  },

  legal: {
    effective: 'In vigore dal',
    lastUpdated: 'Data di entrata in vigore',
    contents: 'Indice',
    otherLanguages: 'Disponibile anche in',
    backHome: 'Torna a Breathia',
    privacyTitle: 'Informativa sulla privacy',
    privacyDescription:
      'Come Breathia tratta i tuoi dati: nessun account, nessun server, nessun tracciamento. La tua frequenza cardiaca, la tua HRV e la cronologia delle sessioni restano sui tuoi dispositivi.',
    termsTitle: 'Condizioni d’uso',
    termsDescription:
      'Le condizioni d’uso dell’app Breathia: l’EULA standard di Apple più alcune brevi integrazioni – avvertenza sulla salute e responsabilità.',
    imprintTitle: 'Note legali (Impressum)',
    imprintDescription: 'Note legali (Impressum) di Breathia: informazioni sul fornitore ai sensi del § 5 DDG.',
    redirecting: 'Reindirizzamento…',
  },
};
