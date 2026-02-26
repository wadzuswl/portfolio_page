document.addEventListener('DOMContentLoaded', function () {
  // 스킬 필터링
  let skillTabBtns = document.querySelectorAll('.click-btn');
  let skillContents = document.querySelectorAll('.tab-content');

  // 버튼 클릭
  skillTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      skillTabBtns.forEach((e) => {
        e.classList.remove('active');
      })
      btn.classList.add('active');

      let btnCategory = btn.dataset.skill;

      // 필터링
      skillContents.forEach((con) => {
        let conCategory = con.dataset.category;

        if (btnCategory === 'all') {
          con.style.display = 'block';
        } else {
          con.style.display = btnCategory === conCategory ? 'block' : 'none';
        }
      })
    })
  })

  // 포트폴리오 카드 렌더링
  let portfolioCardWrap = document.getElementById('portfolioCardWrap');

  // 데스크탑인지 모바일인지
  function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches; // true
  }

  // 스택 아이콘
  function renderStackIcons(stack) {
    return stack.map(function (item) {
      return `
    <div class="stack-icon-box">
      <img src="${item.icon}" alt="${item.name}" class="stack-icon">
    </div>
    `
    }).join("");
  }

  // 카드 1개 렌더링
  function renderCard(project) {
    let thumbnailSrc = isMobile() ? project.thumbnail.mobile : project.thumbnail.desktop;

    return `
  <div class="portfolio-card" data-id="${project.id}">
    <div class="portfolio-card-title-wrap">
      <p class="small-title">Project ${project.order}</p>
      <div class="portfolio-main-card-title-wrap">
        <h4 class="main-title">${project.title}</h4>
        <div class="title-label title-label-${project.type}">${project.type}</div>
      </div>
    </div>
    <div class="portfolio-card-img-box">
      <img src="${thumbnailSrc}" alt="${project.alt}" class="portfolio-card-img">
    </div>
    <div class="portfolio-card-desc-wrap">
      <div class="desc-box">
        <h6 class="desc-title">기간</h6>
        <p class="desc-text desc-period">${project.period}</p>
      </div>
      <div class="desc-box">
        <h6 class="desc-title">개요</h6>
        <p class="desc-text desc-summary">${project.summary}</p>
      </div>
    </div>
    <div class="line"></div>
    <div class="portfolio-card-stack-wrap">
      ${renderStackIcons(project.stack)}
    </div>
    <div class="portfolio-card-more-btn">자세히 보기</div>
  </div>
  `;
  }

  // 전체 카드 렌더링
  function renderCards(data) {
    portfolioCardWrap.innerHTML = data.map(renderCard).join("");
  }

  renderCards(projects);

  // 포트폴리오 필터링
  let filterBtns = document.querySelectorAll('.filter-btn');
  let emptyMessage = document.getElementById('emptyMessage');

  // 필터 조건
  function projectFilter(project, filter) {
    // 전체
    if (filter === 'all') return true;
    // 반응형
    if (filter === 'responsive') {
      return project.responsive === true;
    }
    // 그 외 필터
    return project.stack.some(function (stack) {
      return stack.name === filter;
    })
  }

  // 단일 필터
  function singleFilter(filter) {
    let filteredProjects = projects.filter(function (project) {
      return projectFilter(project, filter);
    })
    renderCards(filteredProjects);
    emptyMessage.style.display = filteredProjects.length === 0 ? 'block' : 'none';
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      let isActive = btn.classList.contains('active');
      filterBtns.forEach(function (e) {
        e.classList.remove('active');
      })
      if (!isActive) {
        btn.classList.add('active');
        singleFilter(btn.dataset.filter);
      } else {
        singleFilter('all');
      }
    })
  })

  let activeBtn = document.querySelector('.filter-btn.active');
  singleFilter(activeBtn ? activeBtn.dataset.filter : 'all');

  // 팝업창
  let popup = document.getElementById('popup');
  let popupContainer = document.querySelector('.popup-container');
  let closeBtn = document.querySelector('.popup .icon-close');

  // 스택 아이콘 팝업용
  function renderPopupStackIcons(stack) {
    return stack.map(function (item) {
      return `
    <div class="work-icon">
      <img src="${item.icon}" alt="${item.name}">
    </div>
    `
    }).join("");
  }

  // 변수 선언
  let popupImg = popup.querySelector('.popup-left img');
  let popupNum = popup.querySelector('.project-num');
  let popupTitle = popup.querySelector('.project-title');
  let popupLabelWrap = popup.querySelector('.project-label-wrap');
  let popupPeriod = popup.querySelector('.work-desc');
  let popupIconWrap = popup.querySelector('.work-icon-wrap');
  let popupDesc = popup.querySelector('.desc-box-ex .desc-text');
  let popupLearn = popup.querySelector('.desc-box-learn .desc-text');
  let popupGithubBtn = popup.querySelector('.goto-btn-github');
  let popupSiteBtn = popup.querySelector('.goto-btn-site');

  // 팝업 열고 닫기
  function openPopup() {
    popup.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closePopup() {
    popup.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  closeBtn.addEventListener('click', closePopup);

  // 카테고리 라벨
  function renderCategoryLabel(project) {
    return `
  <div class="project-label project-label-${project.type}">${project.type}</div>
  <div class="project-label project-label-${project.category}">${project.category}</div>
  ${project.responsive ? `<div class="project-label project-label-responsive">Responsive</div>` : ''}
  `;
  }

  // 팝업 렌더링
  function renderPopup(project) {
    // 이미지
    let popupThumbSrc = isMobile() ? project.thumbnail.mobile : project.thumbnail.desktop;
    popupImg.src = popupThumbSrc;
    popupImg.alt = project.alt;

    // 타이틀
    popupNum.textContent = `Project ${project.order}`;
    popupTitle.textContent = project.title;

    // 라벨
    popupLabelWrap.innerHTML = renderCategoryLabel(project)

    // 기간
    popupPeriod.textContent = project.period;

    // 작업 툴
    popupIconWrap.innerHTML = renderPopupStackIcons(project.stack);

    // desc
    popupDesc.innerHTML = project.desc.join(' ');
    popupLearn.innerHTML = project.learn
      .map(item => `✔ ${item}`)
      .join('<br>');;

    // 링크
    if (project.github) {
      popupGithubBtn.href = project.github;
      popupGithubBtn.style.cursor = 'pointer';
      popupGithubBtn.style.pointerEvents = 'auto';
    } else {
      popupGithubBtn.href = '#';
      popupGithubBtn.style.cursor = 'not-allowed';
      popupGithubBtn.style.pointerEvents = 'none';
    }

    if (project.site) {
      popupSiteBtn.href = project.site;
      popupSiteBtn.style.cursor = 'pointer';
      popupSiteBtn.style.pointerEvents = 'auto';
    } else {
      popupSiteBtn.href = '#';
      popupSiteBtn.style.cursor = 'not-allowed';
      popupSiteBtn.style.pointerEvents = 'none';
    }

    // 새 창 열기, 보안
    popupGithubBtn.target = '_blank';
    popupGithubBtn.rel = 'noopener';
    popupSiteBtn.target = '_blank';
    popupSiteBtn.rel = 'noopener';
  }

  // 카드 클릭하면 팝업창 뜨게
  portfolioCardWrap.addEventListener('click', function (e) {
    let card = e.target.closest('.portfolio-card');
    if (!card) return;

    let id = Number(card.dataset.id);
    let project = projects.find(function (p) {
      return p.id === id;
    });
    if (!project) return;

    renderPopup(project);
    openPopup();
  })

  // 내비게이션 페이지
  let hamburgerBtn = document.querySelector('.hamburger');
  let fullNav = document.querySelector('.full-nav');

  // 스크롤 시 헤더 스타일 변경
  let header = document.querySelector('.header');

  function updateHeaderState() {
    // 내비 열려 있으면 scroll 제거
    if (fullNav.classList.contains('is-open')) {
      header.classList.remove('scroll');
      return;
    }

    // 스크롤 시 헤더 스타일 변경
    if (window.scrollY > 0) {
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  }

  // 햄버거 클릭
  hamburgerBtn.addEventListener('click', function () {
    hamburgerBtn.classList.toggle('active');
    fullNav.classList.toggle('is-open');

    updateHeaderState();
  });

  // 내비 페이지 열고 닫기
  let navMenu = document.querySelectorAll('.nav-menu');

  navMenu.forEach(function (menu) {
    menu.addEventListener('click', function () {
      hamburgerBtn.classList.remove('active');
      fullNav.classList.remove('is-open');

      updateHeaderState();
    });
  });

  window.addEventListener('scroll', updateHeaderState);

  updateHeaderState();
});
