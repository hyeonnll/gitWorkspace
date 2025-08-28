// 대영 ci 단일 페이지 섹션 생성 스크립트
(function () {
  function createElement(tag, options) {
    const el = document.createElement(tag);
    if (!options) return el;
    const { className, html, attrs } = options;
    if (className) el.className = className;
    if (html) el.innerHTML = html;
    if (attrs) {
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    }
    return el;
  }

  function buildHero(container) {
    const hero = createElement("section", { className: "hero" });
    hero.append(
      createElement("h1", { html: "믿을 수 있는 설비 파트너, 장대 건설" }),
      createElement("p", { html: "건축 설비 · 기계 설비 · 유지보수까지 한 번에." }),
      (() => {
        const btn = createElement("button", { className: "cta", html: "견적/상담 문의" });
        btn.addEventListener("click", () => {
          const el = document.getElementById("contact");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return btn;
      })()
    );
    container.appendChild(hero);
  }

  function buildServices(container) {
    const wrap = createElement("section", { className: "grid services", attrs: { id: "services" } });
    const services = [
      {
        title: "건축 설비",
        desc: "급배수 · 위생 · 난방 · 환기 등 건축 전반의 설비 시공",
      },
      {
        title: "기계 설비",
        desc: "펌프 · 보일러 · 냉난방 기계 설치 및 시스템 최적화",
      },
      {
        title: "유지보수/리모델링",
        desc: "정기 점검, 고장 대응, 노후 설비 교체 및 성능 개선",
      },
    ];
    services.forEach((s) => {
      const card = createElement("article", { className: "card" });
      card.append(
        createElement("h3", { html: s.title }),
        createElement("p", { className: "muted", html: s.desc })
      );
      wrap.appendChild(card);
    });
    container.appendChild(wrap);
  }

  function buildAboutAndStats(container) {
    const aboutGrid = createElement("section", { className: "grid" });

    const about = createElement("article", { className: "card about", attrs: { id: "about" } });
    about.append(
      createElement("h3", { html: "회사소개" }),
      createElement("p", {
        className: "muted",
        html: "장대 건설은 설계부터 시공, 사후관리까지 책임지는 설비 전문 업체입니다. 다양한 현장 경험과 표준화된 공정 관리로 안정적이고 효율적인 설비 솔루션을 제공합니다.",
      })
    );

    const stats = createElement("aside", { className: "card stats" });
    const statItems = [
      { k: "시공 연차", v: "14+ 년" },
      { k: "완료 프로젝트", v: "320+ 건" },
      { k: "긴급 대응", v: "24시간" },
      { k: "품질 보증", v: "최대 2년" },
    ];
    stats.append(createElement("h3", { html: "성과/강점" }));
    const list = createElement("ul");
    list.style.listStyle = "none";
    list.style.margin = "0";
    list.style.padding = "0";
    statItems.forEach(({ k, v }) => {
      const li = createElement("li");
      li.style.display = "flex";
      li.style.justifyContent = "space-between";
      li.style.borderTop = "1px solid rgba(255,255,255,0.06)";
      li.style.padding = "10px 0";
      li.append(createElement("span", { className: "muted", html: k }), createElement("strong", { html: v }));
      list.appendChild(li);
    });
    stats.appendChild(list);

    aboutGrid.append(about, stats);
    container.appendChild(aboutGrid);
  }

  function buildContact(container) {
    const contact = createElement("section", { className: "grid", attrs: { id: "contact" } });
    const card = createElement("article", { className: "card", attrs: { style: "grid-column: span 12;" } });
    card.append(
      createElement("h3", { html: "문의하기" }),
      createElement("p", { className: "muted", html: "프로젝트 상담 및 현장 방문이 필요하시면 아래 연락처로 문의주세요." }),
      (() => {
        const list = createElement("ul");
        list.style.listStyle = "none";
        list.style.margin = "0";
        list.style.padding = "0";
        const rows = [
          ["대표전화", "010-0000-0000"],
          ["이메일", "contact@jangdae.co.kr"],
          ["주소", "경기도 이천시 애련정로 131, 장대건설"],
        ];
        rows.forEach(([label, value]) => {
          const li = createElement("li");
          li.style.display = "flex";
          li.style.gap = "12px";
          li.style.padding = "8px 0";
          li.append(createElement("span", { className: "muted", html: label + ":" }), createElement("strong", { html: value }));
          list.appendChild(li);
        });
        return list;
      })()
    );
    contact.appendChild(card);
    container.appendChild(contact);
  }

  function init() {
    const app = document.getElementById("app");
    if (!app) return;
    buildHero(app);
    buildServices(app);
    buildAboutAndStats(app);
    buildContact(app);

    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

