'use strict';

/* ── JS loaded: remove no-js fallback class ── */
document.documentElement.classList.remove('no-js');

/* ════════════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════════════ */
const i18n = {
  en: {
    nav_edge: 'Expertise', nav_exp: 'Experience', nav_port: 'Portfolio',
    nav_stack: 'Stack', nav_contact: 'Contact',
    hero_available: 'Available for projects',
    hero_title: 'Low-Code &amp; AI Developer &mdash; I know the code behind it',
    hero_desc: 'Building complex products on Bubble, WeWeb, Webflow and Xano using AI tools. 7,000+ hours of development, 30+ delivered projects.',
    hero_cv: 'Download CV', hero_call: 'Book a Call',
    badge_projects: 'Projects',
    cert_label: 'Certified',
    bio_label: 'My Story',
    bio_title: 'Finance. Sales. Code.<br><span class="accent">On purpose.</span>',
    bio_p1: 'I started in finance and lead generation — which gave me something most developers don\'t have: a deep understanding of how businesses make money. I transitioned into no-code development, joined WeLoveNocode, and became a Senior Developer working with top agencies across Europe and the US.',
    bio_p2: 'Today I combine AI tooling with no-code/low-code tools and real code to build products that perform. I\'m certified in Claude API development, Cursor AI workflow, and Modern Frontend with AI — skills that put me 12 months ahead of the average no-code market.',
    edge_label: 'Why me', edge_title: 'The Expert Edge',
    edge_desc: 'Not just building — understanding the product from within. Finance education, AI-native approach, and full-stack thinking combined.',
    edge1_h: 'Finance &amp; Business Logic',
    edge1_p: 'Finance education at Jagiellonian University lets me think in business metrics. I understand complex logic and build products that truly solve real business problems — not just implement features.',
    edge2_h: 'AI-Native Developer',
    edge2_p: 'I use Cursor and Claude daily to accelerate development and ensure clean code quality. Certificates confirm it: AI is not a trend for me — it\'s a core tool. I ship faster without sacrificing quality.',
    edge3_h: 'Full-Stack Thinking',
    edge3_p: 'Knowledge of JavaScript and TypeScript lets me go beyond standard no-code limits. Where others stop — I find a solution. I think about the whole system: backend, frontend, APIs, and data flow.',
    exp_label: 'Career', exp_title: 'Experience',
    tl0_role: 'R&amp;D / No-Code Developer',
    tl0_desc: 'Worked on early-stage startup projects at a startup studio, focusing on feasibility validation of ideas and products from both technical and product perspectives. Built interactive prototypes, iterated based on feedback, validated assumptions through MVPs. Post-studio: developed landing pages and translated business ideas into functional no-code solutions using Bubble, Webflow and n8n.',
    tl1_role: 'Bubble.io Developer',
    tl1_desc: 'Custom application development for a real estate platform. Optimised performance and responsiveness, managed complex databases, designed UI, automated workflows, integrated third-party services, built analytics and reporting, provided technical support and training.',
    tl2_role: 'Freelance No-Code Developer',
    tl2_desc: 'Developed high-quality products using no-code tools for international clients. Delivered 20+ projects across SaaS, EdTech, marketplaces and automation. Built reputation as a reliable senior-level expert on the Upwork platform.',
    tl3_role: 'Senior No-Code Developer',
    tl3_desc: 'Built responsive, modular, robust and secure user-facing web applications. Optimised application performance, collaborated with designers and developers on innovative web products, maintained and updated existing apps.',
    tl4_role: 'Lead Generator',
    tl4_desc: 'Qualified and validated Marketing Qualified Leads through direct correspondence and initial meetings. Presented the team to prospects, organised communication between clients and the development team, managed the full sales funnel through to contract signing and handoff to the delivery department. Collected preliminary client requirements and prepared documentation for BAs.',
    port_label: 'Work', port_title: 'Featured Projects',
    port_desc: 'Selected cases from 30+ delivered projects — from MVPs to enterprise-level systems.',
    p1_title: 'Asumma Homes — Property Management Platform',
    p1_desc: 'Full property management system: custom application development, database architecture, UI design, workflow automation, and third-party service integrations. Built to support the complete property lifecycle from listing to sale.',
    p2_title: 'Learning Management System',
    p2_desc: 'Full-stack no-code platform for online education. Xano backend, WeWeb frontend, complex role-based access and student progress tracking.',
    p3_title: 'AI-Powered Automation Suite',
    p3_desc: 'Business process automation with OpenAI API. Content generation, data processing and smart routing through Make. Reduced manual work by 80%.',
    p4_title: 'SaaS CRM Platform',
    p4_desc: 'Full-featured CRM with subscription billing, pipeline management, automated follow-ups, and role-based access. Built on Bubble.io with Stripe and Make integrations for end-to-end automation.',
    p5_title: 'AI Content Generation Pipeline',
    p5_desc: 'Multi-model AI pipeline for automated content creation, SEO optimisation and publishing. Integrated Claude API and OpenAI via n8n, reducing content production time by 70%.',
    all_proj: 'All 30+ projects', more_proj: 'more on request',
    stack_label: 'Tools', stack_title: 'Stack &amp; Toolset',
    stat1: 'Projects Delivered', stat2: 'Hours of Development',
    stat3: 'Years in Industry', stat4: 'Countries Served',
    test_label: 'Social Proof', test_title: 'Client Reviews',
    t1_text: '"Anastasia delivered exceptional work on our Bubble.io project. Her attention to detail, deep understanding of no-code architecture, and proactive communication made the entire process smooth."',
    t2_text: '"One of the best no-code developers I\'ve worked with. She understood our complex requirements from day one and built a scalable, maintainable system. Highly recommend!"',
    t3_text: '"Anastasia brought both technical expertise and business thinking to our project. Her finance background made a real difference — she asked the right questions and built exactly what we needed."',
    t4_text: '"Working with Anastasia was a pleasure from start to finish. She translated our complex automation needs into a clean Make + Airtable system and cut our manual work by over 80%. Outstanding delivery."',
    t5_text: '"Rare combination of product thinking and technical skill. Anastasia rebuilt our WeWeb + Xano platform from scratch — on time, on budget, and with zero bugs at launch. Would hire again immediately."',
    contact_label: "Let's talk",
    contact_title: 'Ready to build<br><span class="accent">something great?</span>',
    contact_desc: 'Looking for a Senior developer for a project or your team? Let\'s talk.',
  },
  uk: {
    nav_edge: 'Експертиза', nav_exp: 'Досвід', nav_port: 'Портфоліо',
    nav_stack: 'Стек', nav_contact: 'Контакт',
    hero_available: 'Відкрита до проєктів',
    hero_title: 'Low-Code &amp; AI розробниця &mdash; я знаю код за ним',
    hero_desc: 'Будую складні продукти на Bubble, WeWeb та Xano з використанням AI-інструментів. 7000+ годин розробки, 30+ реалізованих проєктів.',
    hero_cv: 'Завантажити CV', hero_call: 'Забронювати дзвінок',
    badge_projects: 'Проєктів',
    cert_label: 'Сертифіковано',
    bio_label: 'Моя історія',
    bio_title: 'Фінанси. Продажі. Код.<br><span class="accent">Свідомо.</span>',
    bio_p1: 'Я починала з фінансів та lead generation — це дало мені те, чого немає більшості розробників: глибоке розуміння того, як бізнес заробляє гроші. Я перейшла в no-code розробку, приєдналась до WeLoveNocode і стала Senior Developer, працюючи з провідними агентствами Європи та США.',
    bio_p2: 'Сьогодні поєдную AI-інструменти з no-code/low-code інструментами та реальним кодом для створення продуктів, що дають результат. Маю сертифікації Claude API, Cursor AI Workflow та Modern Frontend + AI — навички, які ставлять мене на 12 місяців попереду середнього ринку no-code.',
    edge_label: 'Чому я', edge_title: 'Моя перевага',
    edge_desc: 'Не просто будую — розумію продукт зсередини. Поєднання фінансової освіти, AI-нативного підходу та full-stack мислення.',
    edge1_h: 'Фінанси та бізнес-логіка',
    edge1_p: 'Фінансова освіта (Ягеллонський університет) дозволяє мислити бізнес-метриками. Розумію складну логіку та будую продукти, що вирішують реальні бізнес-задачі — не просто реалізую функції.',
    edge2_h: 'AI-нативний розробник',
    edge2_p: 'Щодня використовую Cursor та Claude для прискорення розробки та чистоти коду. Сертифікати це підтверджують: AI — не тренд, а основний інструмент. Здаю швидше, не жертвуючи якістю.',
    edge3_h: 'Full-Stack мислення',
    edge3_p: 'Знання JavaScript та TypeScript дозволяє виходити за межі no-code. Там, де інші зупиняються — я знаходжу рішення. Думаю про всю систему: backend, frontend, API та потоки даних.',
    exp_label: 'Кар\'єра', exp_title: 'Досвід',
    tl0_role: 'R&amp;D / No-Code Розробниця',
    tl0_desc: 'Робота з early-stage стартапами у студії — оцінка feasibility, інтерактивні прототипи, ітерація MVP на основі зворотного зв\'язку. Після студії: лендінги та no-code рішення на Bubble, Webflow та n8n.',
    tl1_role: 'Bubble.io Розробниця',
    tl1_desc: 'Кастомна розробка платформи для нерухомості. Оптимізація продуктивності та адаптивності, управління складними базами даних, UI дизайн, автоматизація workflows, інтеграція сторонніх сервісів, аналітика та звітність, технічна підтримка та навчання.',
    tl2_role: 'Фрілансер-розробник',
    tl2_desc: 'Розробка якісних продуктів на no-code інструментах для міжнародних клієнтів. Здала 20+ проєктів у сферах SaaS, EdTech, маркетплейсів та автоматизації. Побудувала репутацію надійного senior-експерта на платформі Upwork.',
    tl3_role: 'Senior No-Code Розробниця',
    tl3_desc: 'Розробка адаптивних, модульних, надійних та безпечних веб-застосунків. Оптимізація продуктивності, співпраця з дизайнерами та розробниками над інноваційними продуктами, підтримка існуючих застосунків.',
    tl4_role: 'Lead Generator',
    tl4_desc: 'Валідація Marketing Qualified Leads через пряму переписку та початкові зустрічі. Презентація команди потенційним клієнтам, організація комунікації між клієнтами та командою розробки, управління повною воронкою продажів до підписання контракту. Збір попередніх вимог клієнтів та підготовка документації для BA.',
    port_label: 'Роботи', port_title: 'Вибрані проєкти',
    port_desc: 'Відібрані кейси з 30+ реалізованих проєктів — від MVP до enterprise-рівня.',
    p1_title: 'Asumma Homes — Платформа управління нерухомістю',
    p1_desc: 'Повноцінна система управління нерухомістю: кастомна розробка, архітектура БД, UI дизайн, автоматизація workflow та інтеграція сторонніх сервісів. Побудована для підтримки повного циклу нерухомості від лістингу до продажу.',
    p2_title: 'Система управління навчанням',
    p2_desc: 'Full-stack no-code платформа для онлайн-навчання. Xano backend, WeWeb frontend, складна рольова модель доступу та відстеження прогресу студентів.',
    p3_title: 'AI-автоматизація бізнес-процесів',
    p3_desc: 'Автоматизація бізнес-процесів через OpenAI API. Генерація контенту, обробка даних та розумна маршрутизація через Make. Зниження ручної роботи на 80%.',
    p4_title: 'SaaS CRM Платформа',
    p4_desc: 'Повнофункціональна CRM з підписковою оплатою, управлінням пайплайном, автоматичними нагадуваннями та рольовим доступом. Реалізована на Bubble.io з інтеграціями Stripe та Make.',
    p5_title: 'AI-конвеєр генерації контенту',
    p5_desc: 'Мультимодельний AI-конвеєр для автоматичного створення контенту, SEO-оптимізації та публікації. Інтеграція Claude API та OpenAI через n8n, скорочення часу виробництва контенту на 70%.',
    all_proj: 'Всі 30+ проєктів', more_proj: 'більше за запитом',
    stack_label: 'Інструменти', stack_title: 'Стек та інструментарій',
    stat1: 'Реалізованих проєктів', stat2: 'Годин розробки',
    stat3: 'Роки в індустрії', stat4: 'Країн клієнтів',
    test_label: 'Відгуки', test_title: 'Відгуки клієнтів',
    t1_text: '«Анастасія виконала виняткову роботу над нашим проєктом на Bubble.io. Її увага до деталей, глибоке розуміння no-code архітектури та проактивна комунікація зробили весь процес плавним.»',
    t2_text: '«Один із найкращих no-code розробників, з якими я працювала. Вона зрозуміла наші складні вимоги з першого дня і побудувала масштабовану, підтримувану систему. Дуже рекомендую!»',
    t3_text: '«Анастасія принесла в наш проєкт і технічну експертизу, і бізнес-мислення. Її фінансове підґрунтя справді зробило різницю — вона ставила правильні запитання і побудувала саме те, що нам потрібно.»',
    t4_text: '«Робота з Анастасією була задоволенням від початку до кінця. Вона перетворила наші складні потреби в автоматизації на чисту систему Make + Airtable і скоротила ручну роботу більш ніж на 80%. Видатний результат.»',
    t5_text: '«Рідкісне поєднання продуктового мислення і технічних навичок. Анастасія відбудувала нашу платформу WeWeb + Xano з нуля — вчасно, в бюджеті та без жодного багу на запуску. Наймала б знову негайно.»',
    contact_label: 'Зв\'яжіться',
    contact_title: 'Готові будувати<br><span class="accent">щось велике?</span>',
    contact_desc: 'Шукаєте Senior розробника на проєкт або в команду? Давайте поспілкуємось.',
  }
};

/* ════════════════════════════════════════════
   LANGUAGE SWITCHER
════════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';

function applyLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  const d = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (d[key] !== undefined) el.innerHTML = d[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', String(active));
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});
applyLang(currentLang);

/* ════════════════════════════════════════════
   MOBILE HAMBURGER MENU
════════════════════════════════════════════ */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('mobile-open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

/* Close menu when a nav link is clicked */
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

/* Close menu when clicking outside */
document.addEventListener('click', e => {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

/* ════════════════════════════════════════════
   NAV SCROLL EFFECT
════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
function onScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load

/* ════════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* Timeline items use separate slide-in animation */
const tlObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      tlObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.tl-item').forEach(el => tlObserver.observe(el));

/* ════════════════════════════════════════════
   ANIMATED COUNTERS
════════════════════════════════════════════ */
function animateCounter(el, target, suffix) {
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const p    = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - p, 3); // ease-out cubic
    el.textContent = Math.round(ease * target).toLocaleString() + suffix;
    if (p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const n  = parseInt(el.dataset.count, 10);
    const suffix = n === 7000 || n === 30 ? '+' : '';
    animateCounter(el, n, suffix);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

/* ════════════════════════════════════════════
   HERO GLOW — mouse parallax
════════════════════════════════════════════ */
const heroGlow = document.getElementById('hero-glow');
if (heroGlow && window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth  - 0.5) * 28;
    const y = (e.clientY / window.innerHeight - 0.5) * 14;
    heroGlow.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  });
}

/* ════════════════════════════════════════════
   GLOBE — interactive 3D globe with project markers
════════════════════════════════════════════ */
(function initGlobe() {
  const canvas = document.getElementById('globe-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  /* ── PROJECT DATA ─────────────────────────────── */
  const MARKERS = [
    { name: 'USA',       lat: 39.5,  lng:  -98.4,
      projects: [{ name: 'SaaS & CRM Platforms',  type: 'Web Apps',    stack: 'Bubble · Xano'    },
                 { name: 'Marketplace App',         type: 'Web App',     stack: 'Bubble · Stripe'  }] },
    { name: 'UK',        lat: 54.0,  lng:   -2.5,
      projects: [{ name: 'Asumma Homes',            type: 'PropTech',    stack: 'Bubble.io'        }] },
    { name: 'Germany',   lat: 51.2,  lng:   10.5,
      projects: [{ name: 'B2B Platform',            type: 'Web App',     stack: 'WeWeb · Xano'    }] },
    { name: 'France',    lat: 46.2,  lng:    2.2,
      projects: [{ name: 'SaaS Application',        type: 'Web App',     stack: 'Bubble · API'    }] },
    { name: 'Poland',    lat: 51.9,  lng:   19.1,
      projects: [{ name: 'MVP & R&D Builds',        type: 'Prototypes',  stack: 'Bubble · n8n'    }] },
    { name: 'Finland',   lat: 61.9,  lng:   25.7,
      projects: [{ name: 'Learning Management System', type: 'EdTech',   stack: 'WeWeb · Xano'   }] },
    { name: 'Singapore', lat:  1.35, lng:  103.8,
      projects: [{ name: 'E-Commerce Platform',     type: 'Marketplace', stack: 'Bubble · Stripe' }] },
    { name: 'Portugal',  lat: 39.4,  lng:   -8.2,
      projects: [{ name: 'Landing Pages + Flows',   type: 'Web + Auto',  stack: 'Webflow · Make'  }] },
    { name: 'Australia', lat: -25.3, lng:  133.8,
      projects: [{ name: 'Web Portal',              type: 'Web App',     stack: 'Bubble · Xano'   }] },
    { name: 'Africa',    lat:   7.0, lng:   12.0,
      projects: [{ name: 'Digital Products',        type: 'Web Apps',    stack: 'Bubble · Webflow' }] },
  ];

  /* ── COUNTRY OUTLINES ─────────────────────────── */
  const OUTLINES = {
    USA: [
      [49,-124],[49,-95],[48,-89],[46,-84],[45,-82],[42,-82],[43,-79],[45,-74],
      [46,-69],[45,-67],[41,-70],[38,-75],[35,-76],[32,-81],[26,-80],[25,-82],
      [29,-90],[29,-94],[26,-97],[29,-103],[32,-106],[32,-114],[33,-118],
      [36,-122],[40,-124],[46,-124],[49,-125],[49,-124]
    ],
    UK: [
      [58,-3],[58,-5],[57,-5.5],[55,-6],[54,-5],[53,-4.5],[51.5,-5.2],
      [50.2,-5.3],[50,-1.5],[51,1.4],[52.8,1.7],[55,-1.5],[57.5,-2],[58,-3]
    ],
    Germany: [
      [54.5,8.5],[54.5,11],[54,14],[52.5,14.8],[50.5,15],[49,13],[47.5,12.7],
      [47.5,10.5],[47.7,7.6],[49,6],[50,6],[51.5,6],[52.5,7],[53.5,7.2],[54.5,8.5]
    ],
    France: [
      [51,2.5],[50,4],[49,7.5],[47,7.5],[46,6.8],[44,7.5],[43.5,6],[43,3],
      [42.4,3],[42.5,1],[43.2,-1.8],[46,-1.5],[48,-5],[48.7,-4.5],[49,-1],
      [49.5,1.3],[51,1.5],[51,2.5]
    ],
    Poland: [
      [54.7,14.5],[54.8,18.5],[54.5,23],[52.2,23.6],[50.5,23.5],[49.2,22.5],
      [49.1,19],[49.5,18.6],[50,15],[51,14.8],[53,14.2],[54.7,14.5]
    ],
    Finland: [
      [70,21],[70,28.5],[69,28],[68.5,30],[66,30],[63,31],[60.5,27.5],[60,23.5],
      [60.5,22],[62,21.5],[64,22.5],[67,22.5],[69,21],[70,21]
    ],
    Singapore: [
      [1.46,103.62],[1.46,104.02],[1.22,104.02],[1.22,103.62],[1.46,103.62]
    ],
    Portugal: [
      [42,-9],[42,-7],[41,-7],[40.5,-7.2],[39.5,-7.5],[38.5,-7],[37.5,-7.5],
      [37,-9],[38,-9.5],[39,-9.5],[40,-9],[41,-8.6],[42,-9]
    ],
    Australia: [
      [-14,129],[-12,136],[-12,141],[-17,146],[-20,148],[-24,152],[-28,153],
      [-33,152],[-36,150],[-38,147],[-38,144],[-35,138],[-32,133],[-34,115],
      [-22,113],[-17,122],[-14,129]
    ],
    Africa: [
      [35.8,-5.9],[37.2,10],[32.5,24],[30.5,32],[22,37],[12,44],[11.5,51],
      [2,42],[-1,42],[-10,40],[-18,36],[-26,33],[-34.5,26],[-34.8,20],
      [-33,18],[-28,16],[-17,12],[-5,12],[4,9],[4,2],[4,-4],[5,-8],
      [10,-15],[14,-17],[20,-17],[27.5,-13],[35.8,-5.9]
    ],
  };

  /* Active region bounding boxes — for dot highlights */
  const REGIONS = [
    { latMin: 25,  latMax: 49,  lngMin:-125, lngMax: -67 }, // USA
    { latMin: 50,  latMax: 59,  lngMin:  -8, lngMax:   2 }, // UK
    { latMin: 47,  latMax: 55,  lngMin:   6, lngMax:  15 }, // Germany
    { latMin: 42,  latMax: 51,  lngMin:  -5, lngMax:   8 }, // France
    { latMin: 49,  latMax: 55,  lngMin:  14, lngMax:  24 }, // Poland
    { latMin: 60,  latMax: 70,  lngMin:  20, lngMax:  32 }, // Finland
    { latMin:  1,  latMax:  2,  lngMin: 103, lngMax: 106 }, // Singapore
    { latMin: 37,  latMax: 42,  lngMin: -10, lngMax:  -6 }, // Portugal
    { latMin:-38,  latMax:-14,  lngMin: 113, lngMax: 154 }, // Australia
    { latMin:-35,  latMax: 37,  lngMin: -18, lngMax:  52 }, // Africa
  ];

  /* ── STATE ────────────────────────────────────── */
  let W, H, R, cx, cy;
  let rot = 0.3;        // start showing Atlantic / Europe
  let rotVel = 0;
  let autoRot = true;
  let isDragging = false;
  let lastDragX = 0;
  let animId;
  const packets = [];
  let hovered = null;

  /* ── TOOLTIP ──────────────────────────────────── */
  const wrap = canvas.parentElement;
  const tooltip = document.createElement('div');
  tooltip.className = 'globe-tooltip';
  wrap.appendChild(tooltip);

  /* ── MATH ─────────────────────────────────────── */
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    cx = W / 2; cy = H / 2;
    R  = Math.min(W, H) * 0.42;
  }
  function toXYZ(lat, lng) {
    const φ = lat * Math.PI / 180, λ = lng * Math.PI / 180;
    return [Math.cos(φ)*Math.cos(λ), Math.sin(φ), Math.cos(φ)*Math.sin(λ)];
  }
  function rotY([x,y,z], a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [x*c+z*s, y, -x*s+z*c];
  }
  function proj([x,y,z]) { return { sx: cx+x*R, sy: cy-y*R, z }; }
  function slerp(a, b, t) {
    const dot = Math.min(1, Math.max(-1, a[0]*b[0]+a[1]*b[1]+a[2]*b[2]));
    const ang = Math.acos(dot);
    if (ang < 1e-4) return a;
    const sa = Math.sin((1-t)*ang)/Math.sin(ang), sb = Math.sin(t*ang)/Math.sin(ang);
    return [sa*a[0]+sb*b[0], sa*a[1]+sb*b[1], sa*a[2]+sb*b[2]];
  }
  function inRegion(lat, lng) {
    return REGIONS.some(r => lat>=r.latMin&&lat<=r.latMax&&lng>=r.lngMin&&lng<=r.lngMax);
  }

  /* ── DRAW HELPERS ─────────────────────────────── */
  function drawOutline(pts, stroke, fill, lw) {
    if (fill) {
      ctx.beginPath(); let mv = false;
      pts.forEach(p => {
        const xyz = rotY(toXYZ(p[0],p[1]), rot);
        if (xyz[2]<0) { mv=false; return; }
        const {sx,sy} = proj(xyz);
        mv ? ctx.lineTo(sx,sy) : (ctx.moveTo(sx,sy), mv=true);
      });
      ctx.closePath(); ctx.fillStyle = fill; ctx.fill();
    }
    ctx.beginPath(); let mv = false;
    for (let i = 0; i < pts.length-1; i++) {
      const a = toXYZ(pts[i][0],pts[i][1]), b = toXYZ(pts[i+1][0],pts[i+1][1]);
      for (let t = 0; t <= 1; t += 0.125) {
        const xyz = rotY(slerp(a,b,t), rot);
        if (xyz[2]<0.02) { mv=false; continue; }
        const {sx,sy} = proj(xyz);
        mv ? ctx.lineTo(sx,sy) : (ctx.moveTo(sx,sy), mv=true);
      }
    }
    ctx.strokeStyle = stroke; ctx.lineWidth = lw||1; ctx.stroke();
  }

  function drawGraticule() {
    ctx.strokeStyle = 'rgba(120,160,230,0.055)'; ctx.lineWidth = 0.5;
    for (let lng = -180; lng < 180; lng += 30) {
      ctx.beginPath(); let mv = false;
      for (let lat = -85; lat <= 85; lat += 3) {
        const xyz = rotY(toXYZ(lat,lng), rot);
        if (xyz[2]<0.02) { mv=false; continue; }
        const {sx,sy} = proj(xyz);
        mv ? ctx.lineTo(sx,sy) : (ctx.moveTo(sx,sy), mv=true);
      }
      ctx.stroke();
    }
    for (const lat of [-60,-30,0,30,60]) {
      ctx.beginPath(); let mv = false;
      for (let lng = -180; lng <= 180; lng += 3) {
        const xyz = rotY(toXYZ(lat,lng), rot);
        if (xyz[2]<0.02) { mv=false; continue; }
        const {sx,sy} = proj(xyz);
        mv ? ctx.lineTo(sx,sy) : (ctx.moveTo(sx,sy), mv=true);
      }
      ctx.stroke();
    }
  }

  function drawArcs() {
    for (let i = 0; i < MARKERS.length; i++) {
      for (let j = i+1; j < MARKERS.length; j++) {
        const va = toXYZ(MARKERS[i].lat,MARKERS[i].lng);
        const vb = toXYZ(MARKERS[j].lat,MARKERS[j].lng);
        ctx.beginPath(); let mv = false;
        for (let k = 0; k <= 28; k++) {
          const t = k/28, s = slerp(va,vb,t);
          const lift = 1+0.18*Math.sin(Math.PI*t);
          const p = rotY([s[0]*lift,s[1]*lift,s[2]*lift], rot);
          if (p[2]<0) { mv=false; continue; }
          const {sx,sy} = proj(p);
          mv ? ctx.lineTo(sx,sy) : (ctx.moveTo(sx,sy), mv=true);
        }
        ctx.strokeStyle='rgba(232,118,26,0.09)'; ctx.lineWidth=0.6; ctx.stroke();
      }
    }
  }

  function spawnPacket() {
    const i = Math.floor(Math.random()*MARKERS.length);
    const j = (i+1+Math.floor(Math.random()*(MARKERS.length-1)))%MARKERS.length;
    packets.push({ a:MARKERS[i], b:MARKERS[j], t:0, spd:0.004+Math.random()*0.005 });
  }

  function drawPackets() {
    for (let i = packets.length-1; i >= 0; i--) {
      const p = packets[i]; p.t += p.spd;
      if (p.t >= 1) { packets.splice(i,1); continue; }
      const va = toXYZ(p.a.lat,p.a.lng), vb = toXYZ(p.b.lat,p.b.lng);
      const s = slerp(va,vb,p.t), lift = 1+0.18*Math.sin(Math.PI*p.t);
      const xyz = rotY([s[0]*lift,s[1]*lift,s[2]*lift], rot);
      if (xyz[2]<0) continue;
      const {sx,sy} = proj(xyz);
      ctx.shadowColor='#e8761a'; ctx.shadowBlur=12;
      ctx.beginPath(); ctx.arc(sx,sy,2.2,0,Math.PI*2);
      ctx.fillStyle='rgba(255,200,120,0.95)'; ctx.fill(); ctx.shadowBlur=0;
      const tailT = Math.max(0,p.t-0.06), st = slerp(va,vb,tailT);
      const liftT = 1+0.18*Math.sin(Math.PI*tailT);
      const xyzT = rotY([st[0]*liftT,st[1]*liftT,st[2]*liftT], rot);
      if (xyzT[2]>=0) {
        const {sx:tx,sy:ty} = proj(xyzT);
        const gr = ctx.createLinearGradient(sx,sy,tx,ty);
        gr.addColorStop(0,'rgba(232,118,26,0.85)'); gr.addColorStop(1,'transparent');
        ctx.beginPath(); ctx.moveTo(sx,sy); ctx.lineTo(tx,ty);
        ctx.strokeStyle=gr; ctx.lineWidth=1.6; ctx.stroke();
      }
    }
  }

  /* ── TOOLTIP HELPERS ──────────────────────────── */
  function showTooltip(m, ex, ey) {
    const rect = wrap.getBoundingClientRect();
    tooltip.innerHTML = `
      <div class="gt-country">${m.name}</div>
      <div class="gt-divider"></div>
      ${(m.projects||[]).map(p=>`
        <div class="gt-project">
          <div class="gt-proj-name">${p.name}</div>
          <div class="gt-proj-meta">${p.type} &middot; ${p.stack}</div>
        </div>`).join('')}`;
    let tx = ex-rect.left+16, ty = ey-rect.top-10;
    if (tx+220 > wrap.offsetWidth)  tx = ex-rect.left-230;
    if (ty+100 > wrap.offsetHeight) ty = ey-rect.top-110;
    tooltip.style.left = tx+'px'; tooltip.style.top = ty+'px';
    tooltip.classList.add('visible');
  }
  function hideTooltip() { tooltip.classList.remove('visible'); hovered=null; }

  function getMarkerAt(ex, ey) {
    const rect = canvas.getBoundingClientRect();
    const mx = (ex-rect.left)*(W/rect.width), my = (ey-rect.top)*(H/rect.height);
    let nearest=null, nd=30;
    MARKERS.forEach(m => {
      const xyz = rotY(toXYZ(m.lat,m.lng), rot);
      if (xyz[2]<0.05) return;
      const {sx,sy} = proj(xyz);
      const d = Math.hypot(sx-mx,sy-my);
      if (d<nd) { nd=d; nearest=m; }
    });
    return nearest;
  }

  /* ── MAIN DRAW ────────────────────────────────── */
  function draw() {
    ctx.clearRect(0,0,W,H);

    /* atmosphere */
    const atmo = ctx.createRadialGradient(cx,cy,R*0.88,cx,cy,R*1.24);
    atmo.addColorStop(0,'rgba(232,118,26,0.08)');
    atmo.addColorStop(0.5,'rgba(20,80,160,0.05)');
    atmo.addColorStop(1,'transparent');
    ctx.fillStyle=atmo; ctx.beginPath(); ctx.arc(cx,cy,R*1.24,0,Math.PI*2); ctx.fill();

    /* sphere base */
    const g = ctx.createRadialGradient(cx-R*0.3,cy-R*0.3,R*0.04,cx,cy,R);
    g.addColorStop(0,'#1a2840'); g.addColorStop(0.55,'#0a1628'); g.addColorStop(1,'#04080f');
    ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();

    ctx.save(); ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.clip();

    drawGraticule();

    /* dot grid: grey inactive / orange active */
    for (let lat=-78; lat<=78; lat+=8) {
      for (let lng=-180; lng<180; lng+=8) {
        const xyz = rotY(toXYZ(lat,lng), rot);
        if (xyz[2]<0) continue;
        const {sx,sy,z} = proj(xyz);
        const active = inRegion(lat,lng);
        ctx.fillStyle = active
          ? `rgba(232,118,26,${(0.2+z*0.4).toFixed(2)})`
          : `rgba(180,190,215,${(0.028+z*0.05).toFixed(2)})`;
        ctx.beginPath(); ctx.arc(sx,sy,active?0.85+z*0.9:0.55+z*0.45,0,Math.PI*2); ctx.fill();
      }
    }

    /* country fills + outlines */
    ctx.shadowColor='#e8761a'; ctx.shadowBlur=5;
    for (const name in OUTLINES) {
      drawOutline(OUTLINES[name],'rgba(232,118,26,0.88)','rgba(232,118,26,0.13)',1.3);
    }
    ctx.shadowBlur=0;

    ctx.restore();

    /* rim glow */
    ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2);
    ctx.strokeStyle='rgba(232,118,26,0.2)'; ctx.lineWidth=1.3; ctx.stroke();

    drawArcs();
    drawPackets();

    /* markers */
    const now = Date.now();
    MARKERS.forEach((m,i) => {
      const xyz = rotY(toXYZ(m.lat,m.lng), rot);
      if (xyz[2]<0.05) return;
      const {sx,sy,z} = proj(xyz);
      const alpha = Math.min(1,(z-0.05)*4);
      const pulse = (Math.sin(now/900+i*1.4)+1)/2;
      const isHov = hovered===m;

      /* pulse ring */
      ctx.beginPath(); ctx.arc(sx,sy,(isHov?8:5)+pulse*12,0,Math.PI*2);
      ctx.strokeStyle=`rgba(232,118,26,${(0.45*alpha*(1-pulse*0.7)).toFixed(2)})`;
      ctx.lineWidth=isHov?1.5:1; ctx.stroke();

      /* halo */
      const hr = isHov?18:12;
      const halo = ctx.createRadialGradient(sx,sy,0,sx,sy,hr);
      halo.addColorStop(0,`rgba(232,118,26,${(0.55*alpha).toFixed(2)})`);
      halo.addColorStop(1,'transparent');
      ctx.fillStyle=halo; ctx.beginPath(); ctx.arc(sx,sy,hr,0,Math.PI*2); ctx.fill();

      /* core dot */
      ctx.shadowColor='#ffb060'; ctx.shadowBlur=10;
      ctx.beginPath(); ctx.arc(sx,sy,isHov?5:3.5,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,${isHov?'225':'210'},160,${alpha.toFixed(2)})`; ctx.fill();
      ctx.shadowBlur=0;

      /* label */
      if (alpha>0.45) {
        const right=sx>cx, lx=sx+(right?14:-14);
        const fs=Math.max(10,Math.round(R*0.065));
        ctx.save(); ctx.globalAlpha=alpha;
        ctx.beginPath(); ctx.moveTo(sx+(right?5:-5),sy); ctx.lineTo(lx+(right?-2:2),sy);
        ctx.strokeStyle=`rgba(232,118,26,${isHov?0.8:0.5})`; ctx.lineWidth=0.9; ctx.stroke();
        ctx.font=`700 ${fs}px Syne,system-ui,sans-serif`;
        ctx.fillStyle=isHov?'#ffd080':'#f0f4ff';
        ctx.textAlign=right?'left':'right';
        ctx.shadowColor='rgba(0,0,0,0.8)'; ctx.shadowBlur=4;
        ctx.fillText(m.name,lx,sy+4); ctx.shadowBlur=0; ctx.restore();
      }
    });
  }

  /* ── INTERACTION ──────────────────────────────── */
  function setupInteraction() {
    canvas.style.cursor='grab';

    canvas.addEventListener('mousedown', e => {
      isDragging=true; lastDragX=e.clientX; rotVel=0; autoRot=false;
      canvas.style.cursor='grabbing'; e.preventDefault();
    });

    canvas.addEventListener('mousemove', e => {
      if (isDragging) {
        const dx=e.clientX-lastDragX; rotVel=dx*0.005; rot+=rotVel; lastDragX=e.clientX;
        hideTooltip();
      } else {
        const m=getMarkerAt(e.clientX,e.clientY);
        if (m&&m!==hovered) { canvas.style.cursor='pointer'; hovered=m; showTooltip(m,e.clientX,e.clientY); }
        else if (!m&&hovered) { canvas.style.cursor='grab'; hideTooltip(); }
      }
    });

    canvas.addEventListener('mouseup',   ()=>{ isDragging=false; canvas.style.cursor='grab'; });
    canvas.addEventListener('mouseleave',()=>{ isDragging=false; hideTooltip(); });

    /* touch */
    let lastTX=0;
    canvas.addEventListener('touchstart',e=>{ isDragging=true; lastTX=e.touches[0].clientX; rotVel=0; autoRot=false; e.preventDefault(); },{passive:false});
    canvas.addEventListener('touchmove', e=>{ if(!isDragging)return; const dx=e.touches[0].clientX-lastTX; rotVel=dx*0.005; rot+=rotVel; lastTX=e.touches[0].clientX; e.preventDefault(); },{passive:false});
    canvas.addEventListener('touchend',  ()=>{ isDragging=false; });
  }

  /* ── ANIMATION LOOP ───────────────────────────── */
  let packetTimer = 0;
  function tick() {
    if (!isDragging) {
      if (Math.abs(rotVel)>0.0003) { rot+=rotVel; rotVel*=0.94; }
      else if (autoRot)             { rot+=0.003; }
    }
    if (--packetTimer<=0) {
      if (packets.length<6) spawnPacket();
      packetTimer=25+Math.floor(Math.random()*40);
    }
    draw();
    animId=requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener('resize', resize, { passive:true });
  document.addEventListener('visibilitychange', ()=>{ if(document.hidden) cancelAnimationFrame(animId); else tick(); });
  setupInteraction();
  tick();
})();

/* ════════════════════════════════════════════
   AURORA BLOBS — inject into hero
════════════════════════════════════════════ */
(function createAurora() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const c = document.createElement('div');
  c.className = 'aurora-container';
  c.innerHTML =
    '<div class="aurora-blob aurora-blob-1"></div>' +
    '<div class="aurora-blob aurora-blob-2"></div>' +
    '<div class="aurora-blob aurora-blob-3"></div>';
  hero.insertBefore(c, hero.firstChild);
})();

/* ════════════════════════════════════════════
   SCROLL INDICATOR — inject into hero
════════════════════════════════════════════ */
(function createScrollIndicator() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const el = document.createElement('div');
  el.className = 'scroll-indicator';
  el.innerHTML = '<span>scroll</span><div class="scroll-line"></div>';
  hero.appendChild(el);
  // Hide after first scroll
  window.addEventListener('scroll', function hide() {
    el.style.opacity = '0';
    el.style.transition = 'opacity 0.4s';
    window.removeEventListener('scroll', hide);
  }, { passive: true, once: true });
})();

/* ════════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════════ */
(function initCursor() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  const dot  = document.createElement('div'); dot.className  = 'cursor-dot';
  const ring = document.createElement('div'); ring.className = 'cursor-ring';
  document.body.append(dot, ring);

  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let rx = mx, ry = my;
  let visible = false;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!visible) {
      dot.style.opacity = ring.style.opacity = '1';
      visible = true;
    }
  });
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = ring.style.opacity = '1';
  });

  (function tick() {
    rx += (mx - rx) * 0.11;
    ry += (my - ry) * 0.11;
    dot.style.transform  = `translate(calc(${mx}px - 50%), calc(${my}px - 50%))`;
    ring.style.transform = `translate(calc(${rx}px - 50%), calc(${ry}px - 50%))`;
    requestAnimationFrame(tick);
  })();

  // Hover state changes
  const LINK_SEL = 'a, button, .project-chip, .lang-btn, .tl-item';
  const BTN_SEL  = '.btn-primary, .btn-outline, .contact-link';

  document.addEventListener('mouseover', e => {
    const isBtn  = !!e.target.closest(BTN_SEL);
    const isLink = !isBtn && !!e.target.closest(LINK_SEL);
    dot.classList.toggle('cursor-link',  isLink || isBtn);
    ring.classList.toggle('cursor-btn',  isBtn);
    ring.classList.toggle('cursor-link', isLink);
  });
  document.addEventListener('mouseout', e => {
    if (!e.relatedTarget || !e.relatedTarget.closest(LINK_SEL)) {
      dot.classList.remove('cursor-link');
      ring.classList.remove('cursor-link', 'cursor-btn');
    }
  });
})();

/* ════════════════════════════════════════════
   3D TILT CARDS with shine
════════════════════════════════════════════ */
(function initTilt() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  function applyTilt(selector, maxAngle, scaleFactor) {
    document.querySelectorAll(selector).forEach(card => {
      const shine = document.createElement('div');
      shine.className = 'tilt-shine';
      card.appendChild(shine);

      let raf;

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'border-color 0.3s, box-shadow 0.3s';
      });

      card.addEventListener('mousemove', e => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(() => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width  - 0.5;
          const y = (e.clientY - r.top)  / r.height - 0.5;
          card.style.transform =
            `perspective(900px) rotateX(${(-y * maxAngle).toFixed(2)}deg) rotateY(${(x * maxAngle).toFixed(2)}deg) scale3d(${scaleFactor},${scaleFactor},${scaleFactor})`;
          shine.style.background =
            `radial-gradient(circle at ${((x + 0.5) * 100).toFixed(1)}% ${((y + 0.5) * 100).toFixed(1)}%, rgba(255,255,255,0.07) 0%, transparent 62%)`;
        });
      });

      card.addEventListener('mouseleave', () => {
        cancelAnimationFrame(raf);
        card.style.transition =
          'border-color 0.3s, box-shadow 0.3s, transform 0.55s cubic-bezier(0.22,1,0.36,1)';
        card.style.transform = '';
        shine.style.background = '';
      });
    });
  }

  applyTilt('.edge-card',     10,  1.025);
  applyTilt('.featured-card', 5,   1.010);
})();

/* ════════════════════════════════════════════
   MAGNETIC BUTTONS
════════════════════════════════════════════ */
(function initMagnetic() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('.btn-primary, .btn-outline, .contact-link').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.12s, border-color 0.2s, color 0.2s, box-shadow 0.2s';
    });
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width  / 2) * 0.3;
      const y = (e.clientY - r.top  - r.height / 2) * 0.3;
      el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transition =
        'transform 0.6s cubic-bezier(0.22,1,0.36,1), border-color 0.2s, color 0.2s, box-shadow 0.2s';
      el.style.transform = '';
    });
  });
})();

/* TEXT SCRAMBLE removed — replaced with smooth word-reveal below */
(function initWordReveal() {
  const nameEl = document.querySelector('.hero-name');
  if (!nameEl) return;
  nameEl.style.clipPath = 'none';
  nameEl.style.opacity  = ''; /* let CSS animation handle it */
})();

/* ════════════════════════════════════════════
   TIMELINE LINE DRAW
════════════════════════════════════════════ */
(function initTimelineLine() {
  const tl = document.querySelector('.timeline');
  if (!tl) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      tl.classList.add('line-active');
      obs.disconnect();
    }
  }, { threshold: 0.04 });
  obs.observe(tl);
})();

/* ════════════════════════════════════════════
   PROJECT CHIPS — staggered entrance
════════════════════════════════════════════ */
(function initChips() {
  const chips = document.querySelectorAll('.project-chip');
  if (!chips.length) return;

  const grid = chips[0].closest('.projects-mini') || chips[0];
  const obs  = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    chips.forEach((chip, i) => {
      setTimeout(() => chip.classList.add('chip-in'), i * 45);
    });
    obs.disconnect();
  }, { threshold: 0.08 });
  obs.observe(grid);
})();

/* ════════════════════════════════════════════
   SECTION LABEL UNDERLINE — trigger via reveal
   (labels with .reveal get .visible from revealObserver)
════════════════════════════════════════════ */
/* handled purely via CSS .section-label.visible::after */

/* ════════════════════════════════════════════
   ACTIVE NAV LINK — highlight current section
════════════════════════════════════════════ */
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-links a[href^="#"]');

  const setActive = id => {
    links.forEach(a => {
      a.classList.toggle('nav-active', a.getAttribute('href') === `#${id}`);
    });
  };

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, {
    rootMargin: '-56px 0px -45% 0px',
    threshold: 0
  });

  sections.forEach(s => obs.observe(s));
})();
