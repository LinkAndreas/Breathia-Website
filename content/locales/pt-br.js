// Brazilian Portuguese copy. Keys mirror en.js. Addresses the reader as “você”, as in the app.

export default {
  meta: {
    title: 'Breathia — Respiração guiada com biofeedback de VFC ao vivo',
    description:
      'O Breathia guia você por {count} técnicas de respiração no iPhone, iPad, Mac e Apple Watch — e mostra ao vivo como sua frequência cardíaca e sua VFC respondem, com um sensor de frequência cardíaca Bluetooth como o Polar H10. Gratuito, privado e sem conta.',
    ogTitle: 'Breathia — Respire mais devagar. Veja seu coração acompanhar.',
    ogDescription:
      'Respiração guiada com feedback ao vivo da frequência cardíaca e da VFC. {count} técnicas para iPhone, iPad, Mac e Apple Watch.',
    ogImageAlt:
      'O ícone do app Breathia — um sol se pondo sobre duas ondas — ao lado das palavras: Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: 'Pular para o conteúdo',
    backToTop: 'Breathia, voltar ao topo',
    sections: 'Seções',
    download: 'Baixar',
    appStoreBadge: 'Baixar na App Store',
    language: 'Idioma',
    chooseLanguage: 'Escolher idioma',
    home: 'Início',
    themeToDark: 'Mudar para a aparência escura',
    themeToLight: 'Mudar para a aparência clara',
  },

  nav: {
    breathe: 'Respirar',
    biofeedback: 'Biofeedback',
    sensors: 'Sensores',
    techniques: 'Técnicas',
    privacy: 'Privacidade',
  },

  hero: {
    eyebrow: 'Breathia para iPhone, iPad, Mac e Apple Watch',
    title: 'Respire mais devagar.<br /><span class="hero__title-glow">Veja seu coração acompanhar.</span>',
    lede: 'Respiração guiada com feedback ao vivo do seu coração. Escolha entre {count} técnicas, siga um círculo que marca o ritmo de cada respiração e veja sua frequência cardíaca e sua variabilidade da frequência cardíaca (VFC) responderem enquanto você respira.',
    secondary: 'Veja como funciona',
    meta: 'Gratuito · Sem conta · Com ou sem sensor',
    phoneAlt:
      'Uma sessão do Breathia no iPhone: o círculo de respiração faz a contagem de uma expiração da Respiração de ressonância, acima de um aviso de que respiração e coração estão em sintonia e de gráficos ao vivo de frequência cardíaca e VFC.',
  },

  glance: {
    label: 'O Breathia em resumo',
    techniques: 'técnicas de respiração',
    categories: 'categorias, de Sono a Foco',
    platforms: 'plataformas, um só app',
    accounts: 'contas ou servidores',
  },

  breathe: {
    eyebrow: 'Respiração guiada',
    title: 'Um círculo que respira com você.',
    lede: 'O círculo cresce quando você inspira e diminui quando você expira. A contagem no centro sobe enquanto você inspira e segura o ar, e desce enquanto você expira — assim você sempre sabe em que ponto está, mesmo com os olhos semicerrados.',
    ticks: [
      '<strong>Sinais táteis e oito sons calmos e naturais</strong> — de tigelas tibetanas e sinos dos ventos a ondas do mar, no volume que você escolher — marcam cada mudança de fase, para você fechar os olhos e simplesmente acompanhar.',
      '<strong>Uma breve contagem regressiva</strong> prepara você e mostra o que vem primeiro.',
      '<strong>A tela fica ligada</strong> enquanto você respira. Se sair do app, a sessão é pausada, e o tempo fora não conta.',
    ],
    tryLabel: 'Experimente uma técnica',
    play: 'Retomar',
    demoNote: 'Uma prévia interativa do círculo de respiração do Breathia. Escolha uma técnica para ver o ritmo dela.',
  },

  bio: {
    eyebrow: 'Biofeedback ao vivo',
    title: 'Veja seu coração entrar<br class="br-lg" /> no ritmo da respiração.',
    lede: 'Use um sensor de frequência cardíaca Bluetooth, e o Breathia mostra como sua frequência cardíaca e sua variabilidade da frequência cardíaca mudam enquanto você respira — ao vivo, batimento a batimento.',
    deviceAlt:
      'Uma sessão ao vivo de Respiração de ressonância no iPhone: o círculo de respiração, o progresso da sessão, um aviso de que respiração e coração estão em sintonia e gráficos ao vivo de frequência cardíaca e VFC (RMSSD).',
    cards: [
      {
        title: 'Frequência cardíaca e VFC, ao vivo',
        body: 'As duas são atualizadas a cada batimento, calculadas a partir dos intervalos entre batimentos (RR) que seu sensor envia. Escolha RMSSD ou SDNN — a medida de VFC que preferir.',
      },
      {
        title: 'A tendência num relance',
        body: 'O Breathia mostra se sua VFC está subindo, estável ou caindo, para você perceber quando coração e respiração entram em sintonia. Ajuste a sensibilidade do feedback para Baixa, Equilibrada ou Alta.',
      },
      {
        title: 'Dados limpos, sem ruído',
        body: 'Batimentos perdidos e medições sem contato com a pele são filtrados, para que seus gráficos mostrem o que realmente aconteceu.',
      },
    ],
    chartTitle: 'Ilustração: a frequência cardíaca sobe a cada inspiração e desce a cada expiração, acompanhando a respiração.',
    keyBreath: 'Sua respiração',
    keyHeart: 'Sua frequência cardíaca',
    chartNote:
      'Seu coração acelera naturalmente um pouco quando você inspira e desacelera quando você expira. Respirar devagar — cerca de 5 a 6 respirações por minuto — tende a deixar esse ritmo mais forte.',
  },

  sensors: {
    eyebrow: 'Sensores',
    title: 'Conecte um sensor em segundos.<br class="br-lg" /> Ou respire sem ele.',
    recommended: 'Recomendado',
    polarBody:
      'O Polar H10 é um ótimo exemplo. Ele envia sua frequência cardíaca e os intervalos RR entre batimentos para uma VFC precisa. Umedeça os eletrodos, coloque a cinta, e ele aparece no Breathia em poucos segundos.',
    bleTitle: 'Qualquer sensor de frequência cardíaca Bluetooth',
    bleBody:
      'Qualquer cinta peitoral ou braçadeira que use o serviço padrão de frequência cardíaca Bluetooth se conecta da mesma forma e mostra sua frequência cardíaca. Para a VFC, ela também precisa enviar intervalos RR, como fazem as cintas peitorais.',
    watchTitle: 'Apple Watch',
    watchBody: 'O Apple Watch mede sua frequência cardíaca durante a sessão — sem precisar de sensor.',
    noneTitle: 'Sem sensor? Sem problema.',
    noneBody:
      'Todas as técnicas funcionam sem sensor, e cada sessão continua contando para o seu Histórico e seus Minutos de Atenção Plena.',
    fineprint:
      'Os sensores se conectam no iPhone, iPad e Mac. O Breathia usa o Bluetooth apenas para se conectar ao seu sensor de frequência cardíaca; ele não procura outros dispositivos nem coleta informações sobre eles.',
  },

  how: {
    eyebrow: 'Como funciona',
    title: 'Do download à primeira respiração<br class="br-lg" /> em menos de um minuto.',
    steps: [
      {
        title: 'Escolha uma técnica',
        body: 'Escolha o que você precisa agora — calma, sono, foco ou energia — ou busque pelo nome. Conecte seu sensor pela barra de ferramentas.',
        alt: 'A aba Respirar com as técnicas por categoria, filtros e um sensor conectado mostrando a frequência cardíaca.',
      },
      {
        title: 'Respire com o círculo',
        body: 'Siga o círculo, a contagem e os sinais. Sua frequência cardíaca e sua VFC são atualizadas enquanto você respira.',
        alt: 'Uma sessão ao vivo com o círculo de respiração, o progresso da sessão e gráficos de frequência cardíaca e VFC.',
      },
      {
        title: 'Veja o que mudou',
        body: 'O relatório da sessão mostra em gráficos sua frequência cardíaca segundo a segundo, como ela subiu e desceu a cada respiração e como sua VFC evoluiu — tudo explicado em palavras simples.',
        alt: 'Um relatório de sessão: um aviso de que a frequência cardíaca baixou 16 BPM, de 71 para 55, com a média, a mínima e a máxima, acima de um gráfico de frequência cardíaca segundo a segundo.',
      },
    ],
  },

  library: {
    eyebrow: 'Biblioteca de técnicas',
    title: '{count} técnicas.<br />Cada uma explicada.',
    lede: 'Da Respiração quadrada e do Suspiro fisiológico à Respiração de ressonância e à Respiração de narinas alternadas. Para cada técnica, você descobre como ela funciona, quando ajuda mais, como praticá-la passo a passo — e quando tomar cuidado.',
    phoneAlt:
      'A página de detalhes da Respiração de ressonância: inspiração de 5 segundos, expiração de 5 segundos, sessão de 10 minutos, com as seções Como funciona, Ideal para e Como praticar.',
    filterLabel: 'Filtrar técnicas por categoria',
    fineprint:
      'Nem toda técnica é indicada para todo mundo. Cada uma vem com um aviso de segurança — leia com atenção e pare se não se sentir bem.',
  },

  history: {
    eyebrow: 'Histórico e app Saúde',
    title: 'Cada sessão,<br />guardada.',
    lede: 'O Histórico guarda cada sessão, incluindo as tendências de frequência cardíaca e VFC, no seu próprio dispositivo. Relembre a última semana ou o último mês e veja como sua prática — e seu coração — evoluem.',
    ticks: [
      '<strong>Minutos de Atenção Plena no app Saúde.</strong> Se quiser, cada sessão concluída é salva como Minutos de Atenção Plena. No iPhone, iPad e Mac, o Breathia apenas registra dados no app Saúde — ele nunca lê seus dados de saúde.',
      '<strong>Sessões do Apple Watch incluídas.</strong> As sessões do Apple Watch aparecem no Histórico do iPhone.',
    ],
    listAlt: 'A aba Histórico com sessões de respiração anteriores, agrupadas em ontem, 7 dias anteriores e 30 dias anteriores.',
    detailAlt: 'Um relatório salvo de uma sessão de Respiração de ressonância, com um gráfico detalhado da frequência cardíaca.',
  },

  everywhere: {
    eyebrow: 'Em todos os seus dispositivos',
    title: 'Onde quer que você precise respirar.',
    watchTitle: 'Apple Watch',
    watchBody: 'Respire direto do pulso, guiado por toques suaves, com sua frequência cardíaca medida ao longo da sessão. As sessões são sincronizadas com o Histórico do iPhone.',
    watchListAlt: 'Lista de técnicas no Apple Watch.',
    watchSessionAlt: 'Uma sessão no Apple Watch: Expire 2, com a frequência cardíaca acima.',
    watchSummaryAlt: 'Resumo da sessão no Apple Watch, sincronizando com o Histórico do iPhone.',
    liveTitle: 'Atividade ao Vivo',
    liveBody: 'Acompanhe sua sessão na Tela Bloqueada e na Dynamic Island. Veja quanto tempo já passou e pause ou encerre sem abrir o app.',
    liveNote: 'Ilustração estilizada.',
    ipadTitle: 'iPad',
    ipadBody: 'Na tela maior, as técnicas e seus detalhes ficam lado a lado — com o mesmo suporte a sensores Bluetooth do iPhone.',
    macTitle: 'Mac',
    macBody: 'Um app nativo para Mac com sinais sonoros suaves. Conecte os mesmos sensores Bluetooth e relembre cada sessão no Histórico.',
    ipadAlt: 'O Breathia no iPad: a lista de técnicas por categoria ao lado dos detalhes da Respiração quadrada.',
    macAlt: 'O Breathia no Mac: o Histórico com um relatório de sessão — frequência cardíaca no início, em média e no fim, e a VFC aumentando.',
  },

  privacy: {
    eyebrow: 'Privacidade',
    title: 'Sua respiração não é da conta de mais ninguém.',
    lede: 'O Breathia não tem conta nem servidor. Suas medições de frequência cardíaca, sua VFC e seu histórico de sessões ficam nos seus dispositivos. As sessões só chegam ao app Saúde se você ativar essa opção.',
    pillars: [
      { title: 'No seu dispositivo', body: 'O histórico e os ajustes ficam nos seus dispositivos. Apague o app, e os dados dele vão junto.' },
      { title: 'Sem conta', body: 'Abra o app e comece a respirar. Sem cadastro, sem login.' },
      { title: 'Todos os recursos, grátis', body: 'O Breathia é totalmente gratuito: todos os recursos e todos os ícones do app. Sem compras dentro do app, sem anúncios.' },
    ],
    link: 'Leia a Política de Privacidade',
  },

  icons: {
    eyebrow: 'Ícones do app',
    title: 'Deixe com a sua cara.',
    lede: 'Escolha qualquer um dos oito ícones do app — e, no iPhone e no iPad, o Breathia assume as cores do ícone escolhido.',
    label: 'Ícones do app',
    names: { classic: 'Clássico', amethyst: 'Ametista', blush: 'Rosado', ember: 'Brasa', glacier: 'Geleira', lagoon: 'Lagoa', midnightGold: 'Ouro da meia-noite', noir: 'Noir' },
    note: 'Todos os ícones são gratuitos para todo mundo, assim como todos os recursos do Breathia.',
  },

  cta: {
    iconAlt: 'Ícone do app Breathia',
    title: 'Respire fundo.<br />E mais uma vez.',
    lede: 'O Breathia é gratuito na App Store para iPhone, iPad, Mac e Apple Watch.',
    meta: 'Disponível em 11 idiomas',
  },

  footer: {
    label: 'Informações legais e contato',
    versions: 'Histórico de versões',
    privacy: 'Política de Privacidade',
    imprint: 'Aviso legal',
    terms: 'Termos de Uso',
    feedback: 'Enviar feedback',
    disclaimer:
      'O Breathia é um app de bem-estar, não um dispositivo médico. Ele não se destina a diagnosticar nem tratar nenhuma condição de saúde. Polar e H10 são marcas comerciais da Polar Electro Oy. Apple, o logotipo da Apple, Apple Watch, iPad, iPhone, Mac, MacBook e App Store são marcas comerciais da Apple Inc., registradas nos EUA e em outros países.',
  },

  versions: {
    title: 'Histórico de versões',
    lede: 'As novidades de cada versão do Breathia na App Store.',
    description: 'Todas as versões do Breathia na App Store e o que cada uma trouxe — para iPhone, iPad, Mac e Apple Watch.',
    version: 'Versão',
  },

  legal: {
    effective: 'Em vigor desde',
    lastUpdated: 'Data de vigência',
    contents: 'Índice',
    otherLanguages: 'Também disponível em',
    backHome: 'Voltar ao Breathia',
    privacyTitle: 'Política de Privacidade',
    privacyDescription:
      'Como o Breathia trata seus dados: sem conta, sem servidor, sem rastreamento. Sua frequência cardíaca, sua VFC e seu histórico de sessões ficam nos seus dispositivos.',
    termsTitle: 'Termos de Uso',
    termsDescription:
      'Os termos de uso do app Breathia: o EULA padrão da Apple e alguns breves acréscimos — aviso de saúde e responsabilidade.',
    imprintTitle: 'Aviso legal (Impressum)',
    imprintDescription: 'Aviso legal (Impressum) do Breathia: informações do provedor nos termos do § 5 da DDG.',
    redirecting: 'Redirecionando…',
  },
};
