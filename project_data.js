const projects = [
  {
    id: 1,
    order: "01",
    title: "대전충남녹색연합 리뉴얼",
    type: "personal",
    category: "renewal",
    responsive: true,
    thumbnail: {
      desktop: "images/project_01_desktop.png",
      mobile: "images/project_01_mobile.png"
    },
    alt: "대전충남녹색연합 리뉴얼 홈페이지 메인 페이지",
    period: "2025.12.15 ~ 2025.12.31",
    summary: "환경 보호 비영리 단체 홈페이지 리뉴얼 프로젝트로, 단체의 메시지와 가치를 직관적으로 전달하는 데 집중했습니다.",
    stack: [
      {
        name: "HTML5",
        icon: "images/icon_html.png"
      },
      {
        name: "CSS3",
        icon: "images/icon_css.png"
      },
      {
        name: "JavaScript",
        icon: "images/icon_js.png"
      },
      {
        name: "Swiper",
        icon: "images/icon_swiper.png"
      },
      {
        name: "Figma",
        icon: "images/icon_figma.png"
      }
    ],
    desc: [
      "대전충남녹색연합은 대전·충남 지역을 중심으로 환경 보호와 시민 참여 활동을 전개하는 비영리 시민 단체입니다.",
      "기존 홈페이지는 정보 전달에 집중된 구조로, 단체의 핵심 메시지와 신뢰도, 후원 유도 측면에서 아쉬움이 있었습니다.",
      "본 프로젝트는 이러한 문제를 개선하여, 환경 단체의 가치와 방향성이 직관적으로 전달되는 웹 경험을 제공하는 것을 목표로 진행되었습니다."
    ],
    learn: [
      "탭 메뉴를 직접 구현하며 JavaScript 이벤트 처리 흐름을 이해했습니다.",
      "Swiper 라이브러리를 적용하며 외부 라이브러리를 프로젝트에 맞게 활용하는 방법을 익혔습니다.",
      "사용자가 정보를 효과적으로 인지할 수 있도록 레이아웃을 설계하는 관점을 갖게 되었습니다.",
    ],
    github: "https://github.com/wadzuswl/project01.git",
    site: "https://wadzuswl.github.io/project01/",
  },
  {
    id: 2,
    order: "02",
    title: "닌텐도 코리아 리뉴얼",
    type: "team",
    category: "renewal",
    responsive: true,
    thumbnail: {
      desktop: "images/project_04_desktop.png",
      mobile: "images/project_04_mobile.png"
    },
    alt: "닌텐도 코리아 리뉴얼 홈페이지 메인 페이지",
    period: "2026.01.13 ~ 2026.02.20",
    summary: "닌텐도 웹사이트를 분석해 콘텐츠 구조와 UI 흐름을 개선하고, 사용자 경험을 고려한 퍼블리싱 완성도를 높였습니다.",
    stack: [
      {
        name: "HTML5",
        icon: "images/icon_html.png"
      },
      {
        name: "SCSS",
        icon: "images/icon_scss.png"
      },
      {
        name: "JavaScript",
        icon: "images/icon_js.png"
      },
      {
        name: "Swiper",
        icon: "images/icon_swiper.png"
      },
      {
        name: "Figma",
        icon: "images/icon_figma.png"
      },
    ],
    desc: [
      "기존 닌텐도 웹사이트를 분석해 콘텐츠 구조와 UI 흐름을 개선한 웹사이트 리뉴얼 팀 프로젝트를 진행했습니다.",
      "기존 사이트의 정보 구성과 사용자 동선을 분석하며, 사용자가 핵심 콘텐츠에 보다 쉽게 접근할 수 있도록 개선 방향을 설정했습니다.",
      "사용자 경험을 중심으로 정보 위계를 재정리하고, 퍼블리싱 관점에서 완성도 높은 UI 구현에 집중했습니다."
    ],
    learn: [
      "기존 웹사이트 분석과 리뉴얼 방향 설정 과정을 통해 콘텐츠 구조와 사용자 흐름이 사용자 경험에 미치는 영향을 이해했습니다.",
      "팀 프로젝트를 진행하며 역할 분담과 협업의 중요성을 체감했고, GitHub와 Slack을 활용한 협업 흐름에 익숙해졌습니다.",
      "SCSS 구조화, 시맨틱 HTML, Intersection Observer API 등 다양한 구현 방식을 경험하며 유지보수성과 효율성을 고려한 퍼블리싱 및 문제 해결 역량을 키웠습니다.",
    ],
    github: "https://github.com/wadzuswl/project04.git",
    site: "https://wadzuswl.github.io/project04/",
  },
  {
    id: 3,
    order: "03",
    title: "동서가구 리뉴얼",
    type: "personal",
    category: "renewal",
    responsive: true,
    thumbnail: {
      desktop: "images/project_03_desktop.png",
      mobile: "images/project_03_mobile.png"
    },
    alt: "동서가구 리뉴얼 홈페이지 메인 페이지",
    period: "2026.02.01 ~ 2026.02.05",
    summary: "쇼핑몰 핵심 기능을 구현하며 반응형 웹 설계, localStorage를 활용한 상태 관리, 컴포넌트 기반 UI 개발을 경험했습니다.",
    stack: [
      {
        name: "HTML5",
        icon: "images/icon_html.png"
      },
      {
        name: "SCSS",
        icon: "images/icon_scss.png"
      },
      {
        name: "JavaScript",
        icon: "images/icon_js.png"
      }
    ],
    desc: [
      "쇼핑몰 핵심 기능을 중심으로 HTML, SCSS, Vanilla JavaScript를 활용한 웹 서비스를 구현했습니다.",
      "반응형 웹 디자인을 적용해 다양한 디바이스 환경에서도 일관된 UX를 제공했습니다.",
      "localStorage를 활용해 사용자 상태를 관리했으며, UI 요소를 컴포넌트 단위로 설계해 재사용성과 구조적인 개발 경험을 쌓았습니다."
    ],
    learn: [
      "SCSS 변수·믹스인·중첩을 활용해 스타일을 구조적으로 관리하고, 반응형 레이아웃(Grid/Flex + 미디어 쿼리)을 효율적으로 구현했습니다.",
      "기능별로 JavaScript 파일을 분리해 모듈화하며, localStorage 기반 상태 관리와 동적 요소 이벤트 처리를 경험했습니다.",
      "시맨틱 HTML과 ARIA 속성, 키보드 네비게이션을 적용하며 접근성을 고려한 UI 구현의 중요성을 이해했습니다.",
    ],
    github: "https://github.com/wadzuswl/project03.git",
    site: "https://wadzuswl.github.io/project03/",
  },
  {
    id: 4,
    order: "04",
    title: "펫 분양 사이트 클론 코딩",
    type: "personal",
    category: "clone",
    responsive: true,
    thumbnail: {
      desktop: "images/project_02_desktop.png",
      mobile: "images/project_02_mobile.png"
    },
    alt: "반려동물 분양 홈페이지 클론 코딩 홈페이지 메인 페이지",
    period: "2026.01.05 ~ 2026.01.12",
    summary: "반려동물 분양·입양 서비스 랜딩페이지를 클론 코딩한 프로젝트입니다. UI 구조를 분석해 섹션 구성과 사용자 흐름 구현에 집중했습니다.",
    stack: [
      {
        name: "HTML5",
        icon: "images/icon_html.png"
      },
      {
        name: "CSS3",
        icon: "images/icon_css.png"
      },
      {
        name: "JavaScript",
        icon: "images/icon_js.png"
      },
      {
        name: "Swiper",
        icon: "images/icon_swiper.png"
      }
    ],
    desc: [
      "카페24 템플릿을 참고하여 제작한 반려동물 분양·입양 서비스 랜딩페이지 클론 코딩 프로젝트입니다.",
      "실제 서비스 페이지의 UI 구조와 레이아웃을 분석한 뒤, HTML·CSS·JavaScript만을 사용해 화면을 직접 구현했습니다.",
      "섹션별 역할과 콘텐츠 흐름을 고려해 페이지 구조를 구성했으며, 사용자가 정보를 자연스럽게 탐색할 수 있도록 레이아웃 배치와 시각적 흐름에 집중했습니다.",
      "이를 통해 실제 서비스와 유사한 사용자 경험을 제공하는 랜딩페이지를 구현했습니다."
    ],
    learn: [
      "카페24 템플릿을 분석하며 실무형 랜딩페이지의 전체 구조를 이해했습니다.",
      "섹션 단위로 레이아웃을 구성하며 HTML 시맨틱 구조의 중요성을 체감했습니다.",
      "JavaScript를 활용해 메뉴 토글과 슬라이드 UI 상태를 제어하며 DOM 조작에 대한 이해를 높였습니다.",
    ],
    github: "https://github.com/wadzuswl/project02.git",
    site: "https://wadzuswl.github.io/project02/",
  },
  {
    id: 5,
    order: "05",
    title: "초록마을 리뉴얼",
    type: "personal",
    category: "renewal",
    responsive: true,
    thumbnail: {
      desktop: "images/project_05_desktop.png",
      mobile: "images/project_05_mobile.png"
    },
    alt: "초록마을 리뉴얼 홈페이지 메인 페이지",
    period: "2026.02.06 ~ 2026.02.08",
    summary: "제한된 화면 공간을 고려해 Swiper와 스크롤을 활용한 효율적인 콘텐츠 배치를 구현하며, 정보 접근성을 높였습니다.",
    stack: [
      {
        name: "HTML5",
        icon: "images/icon_html.png"
      },
      {
        name: "SCSS",
        icon: "images/icon_scss.png"
      },
      {
        name: "JavaScript",
        icon: "images/icon_js.png"
      },
      {
        name: "Swiper",
        icon: "images/icon_swiper.png"
      },
    ],
    desc: [
      "웹·앱 일체형 레이아웃 환경에서 제한된 화면 공간을 고려해 Swiper를 활용한 콘텐츠 구성을 적용했습니다.",
      "슬라이드 UI를 활용해 카테고리별 상품군을 분리했으며, overflow-y: auto를 함께 적용해 한 섹션 안에서도 많은 정보를 자연스럽게 탐색할 수 있도록 설계했습니다.",
      "이를 통해 화면 공간을 효율적으로 활용하면서도 사용자가 원하는 정보를 빠르게 확인할 수 있는 구조를 구현했습니다."
    ],
    learn: [
      "WCAG 2.1을 기준으로 시맨틱 HTML과 랜드마크 구조를 설계하며, 접근성이 단순한 옵션이 아니라 기본 설계 요소라는 것을 이해했습니다.",
      "키보드 포커스 관리, 스킵 네비게이션, 포커스 트랩 등을 직접 구현하며 마우스를 사용하지 않는 사용자 관점에서 UI 흐름을 설계하는 경험을 했습니다.",
      "ARIA 속성과 폼 접근성 처리를 적용하고, 콘텐츠와 마크업을 중앙 관리하며 접근성과 유지보수를 함께 고려한 개발 방식의 중요성을 체감했습니다.",
    ],
    github: "https://github.com/wadzuswl/project05.git",
    site: "https://wadzuswl.github.io/project05/",
  },
]