// Korean copy. Keys mirror en.js. Polite 해요체 as in the app; app UI names match the Korean app strings.

export default {
  meta: {
    title: 'Breathia — 실시간 HRV 바이오피드백과 함께하는 호흡 가이드',
    description:
      'Breathia는 iPhone, iPad, Mac, Apple Watch에서 {count}가지 호흡법을 안내하고, Polar H10 같은 Bluetooth 심박 센서로 심박수와 HRV가 어떻게 반응하는지 실시간으로 보여 줘요. 무료이고, 개인정보를 지키며, 계정이 필요 없어요.',
    ogTitle: 'Breathia — 천천히 호흡하면, 심장이 따라와요.',
    ogDescription:
      '실시간 심박수 및 HRV 피드백과 함께하는 호흡 가이드. iPhone, iPad, Mac, Apple Watch를 위한 {count}가지 호흡법.',
    ogImageAlt:
      'Breathia 앱 아이콘(두 물결 위로 지는 해) 옆에 쓰인 문구: Guided breathing with live heart-rate and HRV biofeedback.',
  },

  common: {
    skip: '본문으로 건너뛰기',
    backToTop: 'Breathia, 맨 위로',
    sections: '섹션',
    download: '다운로드',
    appStoreBadge: 'App Store에서 다운로드하기',
    language: '언어',
    chooseLanguage: '언어 선택',
    home: '홈',
    themeToDark: '다크 모드로 전환',
    themeToLight: '라이트 모드로 전환',
  },

  nav: {
    breathe: '호흡하기',
    biofeedback: '바이오피드백',
    sensors: '센서',
    techniques: '호흡법',
    privacy: '개인정보 보호',
  },

  hero: {
    eyebrow: 'iPhone, iPad, Mac &amp; Apple Watch용 Breathia',
    title: '천천히 호흡하면,<br /><span class="hero__title-glow">심장이 따라와요.</span>',
    lede: '심장에서 오는 실시간 피드백과 함께하는 호흡 가이드. {count}가지 호흡법 중 하나를 골라 매 호흡의 속도를 맞춰 주는 원을 따라가면, 심박수와 심박 변이(HRV)가 어떻게 반응하는지 바로 볼 수 있어요.',
    secondary: '작동 방식 보기',
    meta: '무료 · 계정 없음 · 센서가 있어도, 없어도 OK',
    phoneAlt:
      'iPhone에서 진행 중인 Breathia 세션: 호흡 원이 공명 호흡의 내쉬기를 카운트다운하고, 그 아래에 호흡과 심장이 잘 맞고 있다는 안내와 실시간 심박수 및 HRV 차트가 표시돼요.',
  },

  glance: {
    label: '한눈에 보는 Breathia',
    techniques: '가지 호흡법',
    categories: '가지 카테고리, 수면부터 집중까지',
    platforms: '개 플랫폼, 하나의 앱',
    accounts: '개의 계정 또는 서버',
  },

  breathe: {
    eyebrow: '호흡 가이드',
    title: '나와 함께 호흡하는 원.',
    lede: '숨을 들이쉬면 원이 커지고, 내쉬면 작아져요. 가운데 숫자는 들이쉬고 참는 동안 올라가고, 내쉬는 동안 내려가요. 그래서 눈을 반쯤 감고 있어도 지금 어디쯤인지 늘 알 수 있어요.',
    ticks: [
      '<strong>햅틱 신호와 차분하고 자연스러운 8가지 소리</strong>가 싱잉볼과 윈드차임부터 파도 소리까지, 원하는 음량으로 호흡이 바뀔 때마다 알려 줘요. 눈을 감고 그저 따라가기만 하면 돼요.',
      '<strong>짧은 카운트다운</strong>이 준비를 돕고, 무엇부터 시작하는지 알려 줘요.',
      '<strong>호흡하는 동안 화면이 켜진 채로 유지돼요.</strong> 앱을 나가면 세션이 일시 정지되어, 자리를 비운 시간은 포함되지 않아요.',
    ],
    tryLabel: '호흡법 체험하기',
    play: '재개',
    demoNote: 'Breathia 호흡 원의 인터랙티브 미리보기예요. 호흡법을 선택하면 그 리듬을 볼 수 있어요.',
  },

  bio: {
    eyebrow: '실시간 바이오피드백',
    title: '심장이 호흡에 맞춰<br class="br-lg" /> 차분해지는 모습을 보세요.',
    lede: 'Bluetooth 심박 센서를 착용하면, 호흡에 따라 심박수와 심박 변이가 어떻게 변하는지 Breathia가 박동 하나하나 실시간으로 보여 줘요.',
    deviceAlt:
      'iPhone에서 진행 중인 실시간 공명 호흡 세션: 호흡 원, 세션 진행 상황, 호흡과 심장이 잘 맞고 있다는 안내, 실시간 심박수 및 HRV(RMSSD) 차트.',
    cards: [
      {
        title: '실시간 심박수와 HRV',
        body: '센서가 보내는 박동 간(RR) 간격으로 계산해, 박동마다 두 값이 모두 업데이트돼요. RMSSD와 SDNN 중 원하는 HRV 지표를 선택하세요.',
      },
      {
        title: '추세를 한눈에',
        body: 'HRV가 상승 중인지, 안정적인지, 하락 중인지 Breathia가 알려 줘서 심장과 호흡이 맞아 들어가는 순간을 알아챌 수 있어요. 피드백 민감도는 낮음, 균형, 높음 중에서 설정할 수 있어요.',
      },
      {
        title: '잡음 없는 깨끗한 데이터',
        body: '놓친 박동과 피부 접촉 없이 측정된 값은 걸러 내므로, 차트에는 실제로 일어난 일만 표시돼요.',
      },
    ],
    chartTitle: '그림: 호흡을 따라 심박수가 들이쉴 때마다 올라가고 내쉴 때마다 내려가요.',
    keyBreath: '나의 호흡',
    keyHeart: '나의 심박수',
    chartNote:
      '심장은 숨을 들이쉴 때 자연스럽게 조금 빨라지고, 내쉴 때 느려져요. 분당 5~6회 정도로 천천히 호흡하면 이 리듬이 더 뚜렷해지는 경향이 있어요.',
  },

  sensors: {
    eyebrow: '센서',
    title: '몇 초 만에 센서 연결.<br class="br-lg" /> 센서 없이도 괜찮아요.',
    recommended: '추천',
    polarBody:
      'Polar H10이 좋은 예예요. 심박수와 박동 간 RR 간격을 전송해 HRV를 정확하게 측정할 수 있어요. 전극을 적시고 스트랩을 착용하면 몇 초 안에 Breathia에 나타나요.',
    bleTitle: '모든 Bluetooth 심박 센서',
    bleBody:
      '표준 Bluetooth 심박수 서비스를 사용하는 가슴 스트랩이나 암밴드라면 같은 방식으로 연결되어 심박수를 보여 줘요. HRV를 측정하려면 가슴 스트랩처럼 RR 간격도 전송해야 해요.',
    watchTitle: 'Apple Watch',
    watchBody: 'Apple Watch가 세션 중 심박수를 측정해요. 별도의 센서가 필요 없어요.',
    noneTitle: '센서가 없나요? 괜찮아요.',
    noneBody:
      '모든 호흡법은 센서 없이도 이용할 수 있고, 모든 세션은 똑같이 기록과 마음 챙기기 시간에 반영돼요.',
    fineprint:
      '센서는 iPhone, iPad, Mac에서 연결할 수 있어요. Breathia는 심박 센서에 연결하는 데에만 Bluetooth를 사용하며, 다른 기기를 찾거나 다른 기기의 정보를 수집하지 않아요.',
  },

  how: {
    eyebrow: '작동 방식',
    title: '다운로드부터 첫 호흡까지<br class="br-lg" /> 1분이면 충분해요.',
    steps: [
      {
        title: '호흡법 선택',
        body: '안정, 수면, 집중, 활력 등 지금 필요한 호흡법을 고르거나 이름으로 검색하세요. 센서는 도구 막대에서 연결할 수 있어요.',
        alt: '카테고리별 호흡법 목록과 필터, 그리고 심박수를 보여 주는 연결된 센서가 표시된 호흡하기 탭.',
      },
      {
        title: '원을 따라 호흡하기',
        body: '원과 숫자, 신호를 따라가세요. 호흡하는 동안 심박수와 HRV가 업데이트돼요.',
        alt: '호흡 원, 세션 진행 상황, 심박수 및 HRV 차트가 표시된 실시간 세션.',
      },
      {
        title: '변화 확인하기',
        body: '세션 리포트는 심박수를 초 단위로, 호흡할 때마다 어떻게 오르내렸는지, HRV가 어떻게 변해 갔는지를 차트로 보여 주고, 모두 쉬운 말로 설명해 줘요.',
        alt: '세션 리포트: 심박수가 71에서 55 BPM까지 16 BPM 내려가며 안정됐다는 안내와 평균, 최저, 최고값, 그 아래 초 단위 심박수 차트.',
      },
    ],
  },

  library: {
    eyebrow: '호흡법 라이브러리',
    title: '{count}가지 호흡법.<br />하나하나 자세한 설명과 함께.',
    lede: '박스 호흡과 생리적 한숨부터 공명 호흡, 교호 호흡까지. 각 호흡법마다 원리와 이럴 때 좋은 상황, 단계별 연습 방법, 그리고 주의할 점을 알려 드려요.',
    phoneAlt:
      '공명 호흡의 상세 페이지: 5초 들이쉬기, 5초 내쉬기, 10분 세션과 원리, 이럴 때 좋아요, 연습 방법 섹션.',
    filterLabel: '카테고리별로 호흡법 필터링',
    fineprint:
      '모든 호흡법이 모든 사람에게 맞는 것은 아니에요. 호흡법마다 안전 안내가 있으니 꼭 읽어 보고, 몸이 불편하면 멈추세요.',
  },

  history: {
    eyebrow: '기록 &amp; 건강 앱',
    title: '모든 세션을<br />기억해요.',
    lede: '기록에는 모든 세션이 심박수 및 HRV 추세와 함께 기기에 그대로 저장돼요. 지난 한 주나 한 달을 돌아보며 수련과 심장이 어떻게 변해 가는지 확인해 보세요.',
    ticks: [
      '<strong>건강 앱의 마음 챙기기 시간.</strong> 원하면 완료한 모든 세션이 마음 챙기기 시간으로 저장돼요. iPhone, iPad, Mac에서 Breathia는 건강 앱에 기록만 하며, 건강 데이터를 읽지 않아요.',
      '<strong>Apple Watch 세션도 함께.</strong> Apple Watch에서 한 세션도 iPhone의 기록에 표시돼요.',
    ],
    listAlt: '지난 호흡 세션이 어제, 지난 7일, 지난 30일로 묶여 표시된 기록 탭.',
    detailAlt: '자세한 심박수 차트가 포함된 공명 호흡의 저장된 세션 리포트.',
  },

  everywhere: {
    eyebrow: '모든 기기에서',
    title: '숨 돌릴 틈이 필요한 어디서나.',
    watchTitle: 'Apple Watch',
    watchBody: '부드러운 탭의 안내를 받으며 손목에서 바로 호흡하고, 그동안 심박수도 측정해요. 세션은 iPhone의 기록에 동기화돼요.',
    watchListAlt: 'Apple Watch의 호흡법 목록.',
    watchSessionAlt: 'Apple Watch의 세션: 내쉬기 2와 그 위의 심박수.',
    watchSummaryAlt: 'iPhone의 기록에 동기화 중인 Apple Watch의 세션 요약.',
    liveTitle: '실시간 현황',
    liveBody: '잠금 화면과 Dynamic Island에서 세션을 확인하세요. 경과 시간을 보고, 앱을 열지 않고도 일시 정지하거나 종료할 수 있어요.',
    liveNote: '이해를 돕기 위한 그림이에요.',
    ipadTitle: 'iPad',
    ipadBody: '더 큰 화면에서는 호흡법 목록과 상세 정보가 나란히 표시돼요. iPhone과 똑같이 Bluetooth 센서를 지원해요.',
    macTitle: 'Mac',
    macBody: '부드러운 사운드 신호를 갖춘 네이티브 Mac 앱. 같은 Bluetooth 센서를 연결하고, 기록에서 모든 세션을 돌아볼 수 있어요.',
    ipadAlt: 'iPad의 Breathia: 카테고리별 호흡법 목록 옆에 박스 호흡의 상세 정보.',
    macAlt: 'Mac의 Breathia: 세션 리포트가 열린 기록. 시작 시, 평균, 종료 시 심박수와 상승 중인 HRV가 표시돼요.',
  },

  privacy: {
    eyebrow: '개인정보 보호',
    title: '나의 호흡은 나만의 것.',
    lede: 'Breathia에는 계정도 서버도 없어요. 심박수 측정값, HRV, 세션 기록은 기기에만 저장돼요. 세션은 직접 켠 경우에만 건강 앱에 저장돼요.',
    pillars: [
      { title: '기기에 저장', body: '기록과 설정은 기기에만 저장돼요. 앱을 삭제하면 데이터도 함께 삭제돼요.' },
      { title: '계정 없음', body: '앱을 열고 바로 호흡을 시작하세요. 가입도 로그인도 필요 없어요.' },
      { title: '모든 기능 무료', body: 'Breathia는 모든 기능과 모든 앱 아이콘이 완전히 무료예요. 앱 내 구입도, 광고도 없어요.' },
    ],
    link: '개인정보 처리방침 읽기',
  },

  icons: {
    eyebrow: '앱 아이콘',
    title: '나만의 Breathia로.',
    lede: '8가지 앱 아이콘 중 원하는 것을 고르세요. iPhone과 iPad에서는 Breathia가 선택한 아이콘의 색상으로 바뀌어요.',
    label: '앱 아이콘',
    names: { classic: '클래식', amethyst: '자수정', blush: '블러시', ember: '불씨', glacier: '빙하', lagoon: '라군', midnightGold: '미드나이트 골드', noir: '누아르' },
    note: 'Breathia의 모든 기능처럼, 모든 아이콘은 누구에게나 무료예요.',
  },

  cta: {
    iconAlt: 'Breathia 앱 아이콘',
    title: '숨을 한 번 쉬고,<br />한 번 더 쉬어 보세요.',
    lede: 'Breathia는 App Store에서 iPhone, iPad, Mac, Apple Watch용으로 무료로 제공돼요.',
    meta: '11개 언어 지원',
  },

  footer: {
    label: '법적 고지 및 연락처',
    versions: '버전 기록',
    privacy: '개인정보 처리방침',
    imprint: '법적 고지',
    terms: '이용 약관',
    feedback: '피드백 보내기',
    source: '오픈 소스',
    disclaimer:
      'Breathia는 웰니스 앱이며 의료기기가 아니에요. 질병을 진단하거나 치료하기 위한 것이 아니에요. Polar 및 H10은 Polar Electro Oy의 상표예요. Apple, Apple 로고, Apple Watch, iPad, iPhone, Mac, MacBook 및 App Store는 미국 및 기타 국가에서 등록된 Apple Inc.의 상표예요.',
  },

  versions: {
    title: '버전 기록',
    lede: 'App Store에 출시된 Breathia 각 버전의 새로운 기능.',
    description: 'App Store에 출시된 모든 Breathia 버전과 그 새로운 기능. iPhone, iPad, Mac, Apple Watch용.',
    version: '버전',
  },

  legal: {
    effective: '시행일',
    lastUpdated: '시행일',
    contents: '목차',
    otherLanguages: '다른 언어',
    backHome: 'Breathia로 돌아가기',
    privacyTitle: '개인정보 처리방침',
    privacyDescription:
      'Breathia가 데이터를 다루는 방식: 계정 없음, 서버 없음, 추적 없음. 심박수, HRV, 세션 기록은 기기에만 저장돼요.',
    termsTitle: '이용 약관',
    termsDescription:
      'Breathia 앱의 이용 약관: Apple 표준 최종 사용자 사용권 계약(EULA)과 몇 가지 간단한 추가 조항(건강 관련 고지 및 책임).',
    imprintTitle: '법적 고지(Impressum)',
    imprintDescription: 'Breathia의 법적 고지(Impressum): 독일 디지털 서비스법(DDG) 제5조에 따른 제공자 정보.',
    redirecting: '이동 중…',
  },
};
