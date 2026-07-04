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
    hero_available: 'Open to new opportunities',
    hero_title: 'AI-Powered Product Developer',
    hero_desc: 'Building complex digital products on Bubble, WeWeb, Webflow and Xano — supercharged with AI tools like Cursor, Claude and n8n. 7,000+ hours of development and 30+ delivered projects for clients worldwide.',
    hero_cv: 'Download CV', hero_call: "Let's Talk",
    hstat_projects: 'Projects delivered', hstat_hours: 'Hours of development', hstat_years: 'Years in industry',
    globe_hint_t: 'Explore projects by location', globe_hint_s: 'Click on a country to see selected work',
    badge_projects: 'Projects',
    cert_label: 'Certified',
    bio_badge: 'Years building',
    bio_caption: 'Kraków, Poland — building since 2020',
    certs_label: 'Certifications',
    bio_label: 'My Story',
    bio_title: 'Products with<br><span class="accent">business sense.</span>',
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
    tlai_role: 'Freelance AI Developer — AI Agents &amp; Automation',
    tlai_desc: 'Designing and building AI agents and multi-agent systems with the OpenAI API and LangChain — conversational workflows, chatbots and LLM-powered assistants for business clients. Integrating agents with CRMs, Supabase and third-party APIs via webhooks, and building end-to-end email automation and lead-generation pipelines in Make and n8n. Prompt engineering, agent performance optimisation, and documenting the automation architecture.',
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
    p1_title: 'AXB — global market-making and trading firm operating at the intersection of digital assets and foreign exchange.',
    p1_desc: 'A modern, visually striking website that leverages Spline 3D integration to create an immersive user experience. The site includes custom-built forms for lead capture and a CMS-powered blog. It is engineered for high performance with a clean SEO structure and professional privacy compliance.',
    p2_title: 'Learning Management System',
    p2_desc: 'Full-stack no-code platform for online education. Xano backend, WeWeb frontend, complex role-based access and student progress tracking.',
    p3_title: 'Marketing Agency Website',
    p3_desc: 'A comprehensive agency website designed to showcase creative work through a dynamic CMS-driven portfolio. Implemented custom JavaScript to handle complex animations and interactions, ensuring the site remains fast and engaging across all devices while maintaining top-tier SEO standards.',
    p4_title: 'SaaS CRM Platform',
    p4_desc: 'Full-featured CRM with subscription billing, pipeline management, automated follow-ups, and role-based access. Built on Bubble.io with Stripe and Make integrations for end-to-end automation.',
    p5_title: 'Tech Platform',
    p5_desc: 'Users select products of interest and leverage NXGN as an extension of their team to benefit from optimal price negotiations. NXGN also assists in managing renewals, add-ons, and co-terminations with external partners offering solutions like Asana, ClickUp, and more.',
    all_proj: 'All 30+ projects', more_proj: 'more on request',
    stack_label: 'Tools', stack_title: 'Stack &amp; Toolset',
    stat1: 'Projects Delivered', stat2: 'Hours of Development',
    stat3: 'Years in Industry', stat4: 'Countries Served',
    test_label: 'Social Proof', test_title: 'Client Reviews',
    t1_text: 'Anastasia delivered exceptional work on our Bubble.io project. Her attention to detail, deep understanding of no-code architecture, and proactive communication made the entire process smooth.',
    t2_text: 'One of the best no-code developers I\'ve worked with. She understood our complex requirements from day one and built a scalable, maintainable system. Highly recommend!',
    t3_text: 'Anastasia brought both technical expertise and business thinking to our project. Her finance background made a real difference — she asked the right questions and built exactly what we needed.',
    t4_text: 'Working with Anastasia was a pleasure from start to finish. She translated our complex automation needs into a clean Make + Airtable system and cut our manual work by over 80%. Outstanding delivery.',
    t5_text: 'Rare combination of product thinking and technical skill. Anastasia rebuilt our WeWeb + Xano platform from scratch — on time, on budget, and with zero bugs at launch. Would hire again immediately.',
    contact_label: "Let's talk",
    contact_title: 'Ready to build<br><span class="accent">something great?</span>',
    contact_desc: 'Looking for a Senior developer for a project or your team? Let\'s talk.',
  },
  uk: {
    nav_edge: 'Експертиза', nav_exp: 'Досвід', nav_port: 'Портфоліо',
    nav_stack: 'Стек', nav_contact: 'Контакт',
    hero_available: 'Відкрита до нових можливостей',
    hero_title: 'AI-Powered Product Developer',
    hero_desc: 'Будую складні цифрові продукти на Bubble, WeWeb, Webflow та Xano — з AI-інструментами як Cursor, Claude та n8n. 7000+ годин розробки та 30+ реалізованих проєктів для клієнтів по всьому світу.',
    hero_cv: 'Завантажити CV', hero_call: 'Поговоримо',
    hstat_projects: 'Реалізованих проєктів', hstat_hours: 'Годин розробки', hstat_years: 'Років у сфері',
    globe_hint_t: 'Дослідіть проєкти за локацією', globe_hint_s: 'Натисніть на країну, щоб побачити роботи',
    badge_projects: 'Проєктів',
    cert_label: 'Сертифіковано',
    bio_badge: 'Років практики',
    bio_caption: 'Краків, Польща — будую з 2020',
    certs_label: 'Сертифікації',
    bio_label: 'Моя історія',
    bio_title: 'Продукти з<br><span class="accent">бізнес-мисленням.</span>',
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
    exp_label: "Кар'єра", exp_title: 'Досвід',
    tlai_role: 'Freelance AI Developer — AI-агенти та автоматизація',
    tlai_desc: 'Проєктую та будую AI-агентів і мультиагентні системи на OpenAI API та LangChain — розмовні воркфлоу, чат-боти та LLM-асистенти для бізнес-клієнтів. Інтегрую агентів із CRM, Supabase і сторонніми API через вебхуки, будую наскрізні пайплайни email-автоматизації та лідогенерації в Make і n8n. Prompt-інжиніринг, оптимізація роботи агентів і документування архітектури автоматизації.',
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
    p1_title: 'AXB — глобальна компанія з маркет-мейкінгу та трейдингу на перетині цифрових активів і валютного ринку.',
    p1_desc: 'Сучасний, візуально виразний вебсайт із 3D-інтеграцією Spline, що створює ефект занурення. Включає власні форми для збору лідів та блог на базі CMS. Розроблено з акцентом на продуктивність, чисту SEO-структуру та відповідність вимогам приватності.',
    p2_title: 'Система управління навчанням',
    p2_desc: 'Full-stack no-code платформа для онлайн-навчання. Xano backend, WeWeb frontend, складна рольова модель доступу та відстеження прогресу студентів.',
    p3_title: 'Сайт маркетингового агентства',
    p3_desc: 'Комплексний вебсайт агентства для демонстрації творчих робіт через динамічне CMS-портфоліо. Реалізовано кастомний JavaScript для складних анімацій та взаємодій — сайт залишається швидким на всіх пристроях із відмінними SEO-показниками.',
    p4_title: 'SaaS CRM Платформа',
    p4_desc: 'Повнофункціональна CRM з підписковою оплатою, управлінням пайплайном, автоматичними нагадуваннями та рольовим доступом. Реалізована на Bubble.io з інтеграціями Stripe та Make.',
    p5_title: 'Технологічна платформа',
    p5_desc: 'Користувачі обирають продукти та використовують NXGN як розширення власної команди для оптимальних цінових переговорів. NXGN допомагає керувати поновленнями, розширеннями та ко-термінаціями з партнерами — Asana, ClickUp тощо.',
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
    animateCounter(el, n, '');   // the styled .stat-plus sits outside the counter
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

  /* ── HOME BASE (arcs origin) ──────────────────── */
  const HOME = { lat: 50.06, lng: 19.94 };   // Kraków

  /* ── STATE ────────────────────────────────────── */
  let W, H, R, cx, cy;
  let rot = -0.35;      // centre longitude = -rot ≈ 20°E (Europe / Africa)
  let rotVel = 0;
  let autoRot = true;
  let isDragging = false;
  let lastDragX = 0;
  let animId;
  const TILT_X = 0.42;  // axial pitch — leans the pole for a 3D feel
  const TILT_Z = -0.12; // slight roll — leaning-axis look
  let parX = 0, parY = 0, parTX = 0, parTY = 0;   // mouse parallax (lerped)
  const packets = [];

  /* ── MATH ─────────────────────────────────────── */
  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    cx = W / 2; cy = H / 2;
    R  = Math.min(W, H) * 0.38;
  }
  function toXYZ(lat, lng) {
    const φ = lat * Math.PI / 180, λ = lng * Math.PI / 180;
    // x = east-west (east → +x → right), y = north-south, z = depth (toward viewer)
    return [Math.cos(φ)*Math.sin(λ), Math.sin(φ), Math.cos(φ)*Math.cos(λ)];
  }
  function rotY([x,y,z], a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [x*c+z*s, y, -x*s+z*c];
  }
  function rotX([x,y,z], a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [x, y*c-z*s, y*s+z*c];
  }
  function rotZ([x,y,z], a) {
    const c = Math.cos(a), s = Math.sin(a);
    return [x*c-y*s, x*s+y*c, z];
  }
  /* full view transform: spin + axial tilt + mouse parallax */
  function view(v) {
    return rotZ(rotX(rotY(v, rot + parY), TILT_X + parX), TILT_Z);
  }
  function vgeo(lat, lng) { return view(toXYZ(lat, lng)); }
  function proj([x,y,z]) { return { sx: cx+x*R, sy: cy-y*R, z }; }
  function slerp(a, b, t) {
    const dot = Math.min(1, Math.max(-1, a[0]*b[0]+a[1]*b[1]+a[2]*b[2]));
    const ang = Math.acos(dot);
    if (ang < 1e-4) return a;
    const sa = Math.sin((1-t)*ang)/Math.sin(ang), sb = Math.sin(t*ang)/Math.sin(ang);
    return [sa*a[0]+sb*b[0], sa*a[1]+sb*b[1], sa*a[2]+sb*b[2]];
  }
  /* ── DRAW HELPERS ─────────────────────────────── */
  function drawGraticule() {
    ctx.strokeStyle = 'rgba(140,140,140,0.07)'; ctx.lineWidth = 0.5;
    for (let lng = -180; lng < 180; lng += 30) {
      ctx.beginPath(); let mv = false;
      for (let lat = -85; lat <= 85; lat += 3) {
        const xyz = vgeo(lat,lng);
        if (xyz[2]<0.02) { mv=false; continue; }
        const {sx,sy} = proj(xyz);
        mv ? ctx.lineTo(sx,sy) : (ctx.moveTo(sx,sy), mv=true);
      }
      ctx.stroke();
    }
    for (const lat of [-60,-30,0,30,60]) {
      ctx.beginPath(); let mv = false;
      for (let lng = -180; lng <= 180; lng += 3) {
        const xyz = vgeo(lat,lng);
        if (xyz[2]<0.02) { mv=false; continue; }
        const {sx,sy} = proj(xyz);
        mv ? ctx.lineTo(sx,sy) : (ctx.moveTo(sx,sy), mv=true);
      }
      ctx.stroke();
    }
  }

  /* arcs: home base → every project country, subtle brand orange */
  function drawArcs(points) {
    const va = toXYZ(HOME.lat, HOME.lng);
    for (const pt of points) {
      const vb = toXYZ(pt.lat, pt.lng);
      ctx.beginPath(); let mv = false;
      for (let k = 0; k <= 30; k++) {
        const t = k/30, s = slerp(va, vb, t);
        const lift = 1 + 0.16*Math.sin(Math.PI*t);
        const p = view([s[0]*lift, s[1]*lift, s[2]*lift]);
        if (p[2] < 0) { mv = false; continue; }
        const {sx,sy} = proj(p);
        mv ? ctx.lineTo(sx,sy) : (ctx.moveTo(sx,sy), mv=true);
      }
      ctx.strokeStyle = 'rgba(245,106,0,0.12)'; ctx.lineWidth = 1; ctx.stroke();
    }
  }

  /* light packets travelling along the arcs */
  function spawnPacket(points) {
    const pt = points[Math.floor(Math.random()*points.length)];
    packets.push({ to: pt, t: 0, spd: 0.006 + Math.random()*0.005 });
  }
  function drawPackets() {
    const va = toXYZ(HOME.lat, HOME.lng);
    for (let i = packets.length-1; i >= 0; i--) {
      const p = packets[i]; p.t += p.spd;
      if (p.t >= 1) { packets.splice(i,1); continue; }
      const vb = toXYZ(p.to.lat, p.to.lng);
      const s = slerp(va, vb, p.t), lift = 1 + 0.16*Math.sin(Math.PI*p.t);
      const xyz = view([s[0]*lift, s[1]*lift, s[2]*lift]);
      if (xyz[2] < 0) continue;
      const {sx,sy} = proj(xyz);
      ctx.shadowColor = '#F56A00'; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.arc(sx, sy, 1.9, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(245,140,60,0.9)'; ctx.fill();
      ctx.shadowBlur = 0;
    }
  }

  /* glowing pulse markers on project countries */
  function drawMarkers(points, now) {
    points.forEach((pt, i) => {
      const xyz = vgeo(pt.lat, pt.lng);
      if (xyz[2] < 0.05) return;
      const {sx,sy,z} = proj(xyz);
      const active = geoPills[i] && geoPills[i].classList.contains('active');
      let alpha = Math.min(1, (z-0.05)*3);
      if (active) alpha = 1;
      const pulse = (Math.sin(now/1100 + i*1.7) + 1) / 2;
      // expanding ring
      ctx.beginPath(); ctx.arc(sx, sy, 4 + pulse*9, 0, Math.PI*2);
      ctx.strokeStyle = `rgba(245,106,0,${(0.35*alpha*(1-pulse)).toFixed(2)})`;
      ctx.lineWidth = 1.2; ctx.stroke();
      // core dot
      ctx.shadowColor = '#F56A00'; ctx.shadowBlur = 8;
      ctx.beginPath(); ctx.arc(sx, sy, 2.4, 0, Math.PI*2);
      ctx.fillStyle = `rgba(245,106,0,${(0.85*alpha).toFixed(2)})`; ctx.fill();
      ctx.shadowBlur = 0;
    });
  }

  /* ── LAND MASK (hand-built equirect continents, 360x180) ── */
  const LAND = { w:360, h:180, b64:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//8AFb///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///+x/////76fAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/gD/p////////AAAAAAAAAACxBwAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAA///uAf//////+AAAABrvwAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAeHznn/h////////4AAAABXsAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAEcIA5MfAI///////8AAAAAPFAAAAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAABoCGc8X/AH///////4AAAAAAAAAAAAAB4AAAAB9+AAAAAAAAAAAAAAAAAAAAAD/wMzz8AAAP/////2AAAAAAAAAAAAD4AAAA////AAAB/oAAAAAAAAAAAAAACAwACAcAAAAP/////+AAAAAAAAAAAAMAAAAX///6AAAAAAAAAAAAAAAAAAAAP+Ac8+M/gAAD////+8AAAAAAAAAAAA4AAAH///+O+HAAHAAAAAAAAAAAAAAAf/+4/Y/94AAD////+wAAAAAAAAAAABwAHhH///////8AHwAAAAAwAAAAAAAAON/8E4//9AADf////gAAAAAAAAAAABwAPZ+///////4nv/gAAAAAAAH8gAAAAAP+A8f//8AA3///ogAAAAAABtgAAAAAfv/////////////8AAAAAB///+B/2H/+DnDxf8AAz////AAAAAAA//wAAAA8Pv//////////////9H8wAP////////QsDPzwD8AAf///wAAAAAAG///wIBe/3+/////////////////+AD////////+//fz4Y/wA7//4AAAAAAAD///+I////v//////////////////4EP///////////5gD/8A///gAAAAAAAf//5+P///8//////////////////7w/////////////qAD+QAP/wABr8AAAAf8f+D///////////////////////AwAf///////////zwx/AAP/wAAP8AAAB/4/+f//////////////////////4AMAf//////////+DBAbwAH/AAADAAAAN/j/////////////////////////+AAH///////////4AwgHQAD/AAAAAAAAf/H///////////////////////n/6AAP///////////wAA/AAAB+AAAAAAAB/+H//////////////////////jP+AAAH/9z////////gAA/wAAAMAAAAAACB//D7////////////////////+A/YAAAA/xAD///////gAA/wQAAAAAAAAAAB9/Ab///////////////////+ODgAAAAAB0AAX//////4AA/94AAAAAAAAAYA5+C///////////////////4AAHQAAAAABcAAP//////8AAf/+AAAAAAAAB8AA+i///////////////////wAAfgAAAAAMAAAC///////wAf/+AAAAAAAAAYAOeH///////////////////AAA/gAAAABQAAADf//////8Af//AAAAAAAAAcAPQH//////////////////8AAA/AAAAAEAAAAAP///////z///4AAAAAAADuAEDv//////////////////+AAA+AAAAAAAAAABP///////x///8AAAAAAAPHAf/////////////////////4AA8AAAAAAAAAAAn///////x///8AAAAAAAPPx//////////////////////6AA4AAAAAAAAAAAD///////////6AAAAAAAAPH//////////////////////6AAwAAAAAAAAAAAC///////////kAAAAAAAAQP//////////////////////zAAAAAAAAAAAAAABv////////+MMAAAAAAAAC///////////////////////7AAAAAAAAAAAAAAAL////////7wPgAAAAAAAf///////////////////////yAAAAAAAAAAAAAAAP/////////gCgAAAAAAAD///////////////////////iAAAAAAAAAAAAAAAP/////////pAAAAAAAAAD/////vP////////////////BAAAAAAAAAAAAAAAP/////////+AAAAAAAAAB//v//GP///////////////+AAAAAAAAAAAAAAAAP////////8wAAAAAAAAAB//P/+EP///////////////8CAAAAAAAAAAAAAAAP////////wgAAAAAAAADj/jz/+AD///////////////4HgAAAAAAAAAAAAAAP////////gAAAAAAAAAH/4Fw/4AA//////////////+ACAAAAAAAAAAAAAAAP////////gAAAAAAAAAH/wAcP8PA//////////////8AAAAAAAAAAAAAAAAAP///////8AAAAAAAAAAH/gMHfV///////////////v4AMAAAAAAAAAAAAAAAP///////8AAAAAAAAAAH/IMCOH//////////////+ZwAMAAAAAAAAAAAAAAAH///////oAAAAAAAQAAH/AACGP//////////////8BwAMAAAAAAAAAAAAAAAH///////wAAAAAAAAAAH+AAYDH//////////////+g4AYAAAAAAAAAAAAAAAD///////wAAAAAAAAAAAgf+AABs//////////////g4D4AAAAAAAAAAAAAAAB///////wAAAAAAAAAAAh/+AAAA//////////////A4fwAAAAAAAAAAAAAAAB///////gAAAAAAAAAAB//8AAAA//////////////Ah2AAAAAAAAAAAAAAAAAP/////+AAAAAAAAAAAD//+AAAB//////////////gjwAAAAAAAAAAAAAAAAAH/////4AAAAAAAAAAQH///4GAB//////////////gBAAAAAAAAAAAAAAAAAAG/////4AAAAAAAAAAAP///8PwD//////////////gCAAAAAAAAAAAAAAAAAACf////4AAAAAAAAAAAP////v////////////////gAAAAAAAAAAAAAAAAAAABv//xAYAAAAAAAAAAAP//////3//H///////////gAAAAAAAAAAAAAAAAAAAAv//AAYAAAAAAAAAAAf/////////H///////////wAAAAAAAAAAAAAAAAAAAB3/+AAcAAAAAAAAAAB///////8//h///////////gAAAAAAAAAAAAAAAAAAAAZ/+AAMAAAAAAAAAAD///////8//wH//////////AAAAAAAAAAAAAAAAAAAAAJ/+AAEAAAAAAAAAAH///////+f/wB/f////////AAAAAAAAAAAAAAAAAAAAAI/8AAAAAAAAAAAAAH///////+f/44Af///////8QAAAAAAAAAAAAAAAAAAAACf8AAAAAAAAAAAAAP///////+H//+AP///////4gAAAAAAAAAAAAAAAAAAAAAP8AAvAAAAAAAAAAP////////H///AD///////ggAAAAAAAAAAAAAAAAAAAAAH8AQBggAAAAAAAAf////////n//+ADf/4P//YAAAAAAAAAAAAAAAAAAAAAAAH+A4AYAAAAAAAAAP////////j//+AAf/4H/+IAAAAAAAAAAAAAAAgAAAAAAAH/B4ABwAAAAAAAAP////////h//8AAf/gD/8YAAAAAAAAAAAAAAAAAAAAAAAD/lwAD8AAAAAAAAP////////x//4AAf/AD/8QAAAAAAAAAAAAAAAAAAAAAAAAf/wAAAAAAAAAAAP////////4//gAAf+AB/+AAwAAAAAAAAAAAAAAAAAAAAAAH/wAAAAAAAAAAAP////////4f+AAAf8AD//AAwAAAAAAAAAAAAAAAAAAAAAAAH/AAAAAAAAAAAf////////8/8AAAPwAAP/gAgAAAAAAAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAf////////+fgAAAPwAAP/gAwAAAAAAAAAAAAAAAAAAAAAAAA/AAAAAAAAAAAf/////////eAAAAHwAAP/gAsAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAf/////////gBAAAHwAAM/gAKAAAAAAAAAAAAAAAAAAAAAAAADABIAAAAAAAAH/////////gIAAADwAAEfgALAAAAAAAAAAAAAAAAAAAAAAAADgPfIAAAAAAAH/////////34AAADwAAIPABIAAAAAAAAAAAAAAAAAAAAAAAAAyPf+AAAAAAAD//////////4AAADoAAIEACBAAAAAAAAAAAAAAAAAAAAAAAAA8///AAAAAAAB//////////wAAABIAAMAAEHAAAAAAAAAAAAAAAAAAAAAAAAAE///gAAAAAAB//////////wAAAAMAAEAAADgIAAAAAAAAAAAAAAAAAAAAAAAAf//wAAAAAAAf/////////gAAAAMAADAAMDAAAAAAAAAAAAAAAAAAAAAAAAAA////gAAAAAAP/B///////gAAAAAABDgAeAAAAAAAAAAAAAAAAAAAAAAAAAAAf///wAAAAAACAA3//////AAAAAAAAxgA+AAAAAAAAAAAAAAAAAAAAAAAAAAAf///4AAAAAAAAAD/////+AAAAAAAAZgB8BAAAAAAAAAAAAAAAAAAAAAAAAAB////4AAAAAAAAAD/////8AAAAAAAAMwH8AIAAAAAAAAAAAAAAAAAAAAAAAAB////8AAAAAAAAAD/////wAAAAAAAAHQf8AIAAAAAAAAAAAAAAAAAAAAAAAAD////4AAAAAAAAAH/////gAAAAAAAAHgf8cIAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAH/////AAAAAAAAAD4f8ASgAAAAAAAAAAAAAAAAAAAAAAAH////+4AAAAAAAAH/////AAAAAAAAABwP50QwAAAAAAAAAAAAAAAAAAAAAAAH/////+AAAAAAAAD////+AAAAAAAAAB8P5wAL4AgAAAAAAAAAAAAAAAAAAAAD//////4AAAAAAAB////8AAAAAAAAAA8AxQif/AAAAAAAAAAAAAAAAAAAAAAH//////8AAAAAAAA////4AAAAAAAAAAcAAQAD/gAAAAAAAAAAAAAAAAAAAAAH///////gAAAAAAA////4AAAAAAAAAAMABAAI/ywAAAAAAAAAAAAAAAAAAAAD///////gAAAAAAA////4AAAAAAAAAADgAAAIf8BAAAAAAAAAAAAAAAAAAAAD///////gAAAAAAAf///4AAAAAAAAAAB+AABA/4AAAAAAAAAAAAAAAAAAAAAB///////gAAAAAAAf///4AAAAAAAAAAAAfsgAOMAAAAAAAAAAAAAAAAAAAAAA///////AAAAAAAAf///8AAAAAAAAAAAABCAAAGgAAAAAAAAAAAAAAAAAAAAA///////AAAAAAAAP///+AAAAAAAAAAAAAAAAAAgBAAAAAAAAAAAAAAAAAAAAf/////+AAAAAAAAP///8AAAAAAAAAAAAAACgCAEAAAAAAAAAAAAAAAAAAAAAf/////8AAAAAAAAf///8AQAAAAAAAAAAAAB+CAAAAAAAQAAAAAAAAAAAAAAAP/////4AAAAAAAAf///+AQAAAAAAAAAAAAD8DAAAAAAAAAAAAAAAAAAAAAAAP/////4AAAAAAAA////+AwAAAAAAAAAAAA38DgAAAAAAAAAAAAAAAAAAAAAAH/////4AAAAAAAA////+BwAAAAAAAAAAAD/8HgAAAAAAAAAAAAAAAAAAAAAAB/////4AAAAAAAA////8PwAAAAAAAAAAAH//XgAABABAAAAAgAAAAAAAAAAAAf////4AAAAAAAA////wPgAAAAAAAAAAAP//3wAAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAA////gPgAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAAf//+APgAAAAAAAAAAAf///8AAAAAAAAAAAAAAAAAAAAAAAP////wAAAAAAAAf//+APgEAAAAAAAAAD////+AAIAAAAAAAAAIAAAAAAAAAAP////gAAAAAAAAP//+AfAAAAAAAAAAAf////+AAEAAAAAAAAAAAAAAAAAAAAP////AAAAAAAAAP///AfAAAAAAAAAAA//////AAAAAAAAAAAAAAAAAAAAAAAP///4AAAAAAAAAP//+APAAAAAAAAAAA//////gAAAAAAAAAAAAAAAAAAAAAAf///gAAAAAAAAAH//+AOAAAAAAAAAAB//////wAAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAH//4AEAAAAAAAAAAA//////4AAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAH//4AAAAAAAAAAAAB//////4AAAAAAAAAAAAAAAAAAAAAAf///AAAAAAAAAAH//4AAAAAAAAAAAAA//////8AAAAAAAAAAAAAAAAAAAAAAf//+AAAAAAAAAAD//wAAAAAAAAAAAAAf/////8AAAAAAAAAAAAAAAAAAAAAAf//8AAAAAAAAAAB//gAAAAAAAAAAAAAf/////4AAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAB//gAAAAAAAAAAAAAf/////4AAAAAAAAAAAAAAAAAAAAAA///wAAAAAAAAAAA//AAAAAAAAAAAAAAP/////4AAAAAAAAAAAAAAAAAAAAAAf//wAAAAAAAAAAA/+AAAAAAAAAAAAAAP/AP//wAAAAAAAAAAAAAAAAAAAAAA//vgAAAAAAAAAAA/4AAAAAAAAAAAAAAP8AG//gAAAAAAAAAAAAAAAAAAAAAA//3AAAAAAAAAAAAQAAAAAAAAAAAAAAAOAAF//gAAAAAAAAAAAAAAAAAAAAAB//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//AAABAAAAAAAAAAAAAAAAAAB//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAgAAAAAAAAAAAAAAAAAD//4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/AAAAQAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYAAAAcAAAAAAAAAAAAAAAAAB/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAD/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAD/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAADQAAAAAAAAAAAAAAAAAD/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAHAAAAAAAAAAAAAAAAAAB/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAOAAAAAAAAAAAAAAAAAAF/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAH+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAP4AAAAAAL+HgBj/AAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAADf/gAAB//////////AAAAAAAAAAAAAAAAAAAAAAAABoAAAAAAAAAAAAAAAAB////8A////////////mAAAAAAAAAAAAAAAAAAAAAB38AAAAAAAAAAAAAAAGD////4D/////////////4AAAAAAAAAAAAAAAAAAAAAb+AAAAAAAAAAAM/gB//////4//////////////+gAAAAAAAAAAAAAAAAAAAD/8AAAAAAAA7+///////////5////////////////4AAAAAAAAAAAAAAHQABh5+AAAAAAAA//////////////////////////////gAAAAAAAAABgAAAP/+Gl/8AAAAAAAf/////////////////////////////+AAAAAAAAAAiARsAv/////+AAAAAAA//////////////////////////////sAAAAAAAAX////////////wAAAAAAF//////////////////////////////gAAAAAAAX///////////PwAAAAAAf///////////////////////////////gAAAAAD+P///////////8AAAAAAP////////////////////////////////zgAAAAAP///////////fgCAAD8A/////////////////////////////////+AAAAD4B///////////7wwAAD+AB///////////////////////////////+AAAAAAAA////////////wAAA/wAH///////////////////////////////+AAAAAAAP//////////////AAAA/////////////////////////////////+AAAAAAAH//////////////4D/n//////////////////////////////////8AAAAAH//////////////////////////////////////////////////////8A/wAP////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////' };
  const _landBits = (() => {
    const bin = atob(LAND.b64), a = new Uint8Array(bin.length);
    for (let i=0;i<bin.length;i++) a[i]=bin.charCodeAt(i);
    return a;
  })();
  function isLand(lat,lng){
    let x = Math.floor((lng+180)/360*LAND.w), y = Math.floor((90-lat)/180*LAND.h);
    if (x<0) x=0; else if (x>=LAND.w) x=LAND.w-1;
    if (y<0) y=0; else if (y>=LAND.h) y=LAND.h-1;
    const idx = y*LAND.w + x;
    return (_landBits[idx>>3] >> (7-(idx&7))) & 1;
  }

  /* ── MAIN DRAW — tilted dotted globe with depth ── */
  function draw(now) {
    ctx.clearRect(0,0,W,H);

    drawGraticule();

    // dotted sphere: faint see-through back hemisphere + twinkling land on the front
    for (let lat = -82; lat <= 82; lat += 3) {
      const r = Math.cos(lat*Math.PI/180);
      const step = Math.max(3, 3 / Math.max(r, 0.18));
      for (let lng = -180; lng < 180; lng += step) {
        const land = isLand(lat,lng);
        const xyz = vgeo(lat,lng);
        const {sx,sy,z} = proj(xyz);
        if (z < 0.02) {
          if (land) {           // ghost of the far side — gives the sphere depth
            ctx.fillStyle = 'rgba(130,130,130,0.05)';
            ctx.beginPath(); ctx.arc(sx, sy, 0.6, 0, Math.PI*2); ctx.fill();
          }
          continue;
        }
        if (land) {
          const tw = 0.05 * Math.sin(now*0.0012 + lat*0.7 + lng*0.35);
          ctx.fillStyle = `rgba(90,90,90,${(0.18 + z*0.45 + tw).toFixed(2)})`;
          ctx.beginPath(); ctx.arc(sx, sy, 0.95 + z*0.85, 0, Math.PI*2); ctx.fill();
        } else {
          ctx.fillStyle = `rgba(150,150,150,${(0.035 + z*0.06).toFixed(2)})`;
          ctx.beginPath(); ctx.arc(sx, sy, 0.5 + z*0.4, 0, Math.PI*2); ctx.fill();
        }
      }
    }

    // volume: soft inner vignette toward the rim
    const vg = ctx.createRadialGradient(cx, cy, R*0.55, cx, cy, R);
    vg.addColorStop(0, 'rgba(120,110,100,0)');
    vg.addColorStop(1, 'rgba(120,110,100,0.05)');
    ctx.fillStyle = vg;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI*2); ctx.fill();

    // soft outer ring
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(150,150,150,0.10)'; ctx.lineWidth = 1; ctx.stroke();

    drawArcs(GEO);
    drawPackets();
    drawMarkers(GEO, now);
  }

  /* ── INTERACTION — drag to spin, auto-resume ──── */
  function setupInteraction() {
    canvas.style.cursor='grab';
    let lastTX=0;

    canvas.addEventListener('mousedown', e => {
      isDragging=true; lastDragX=e.clientX; rotVel=0; autoRot=false;
      canvas.style.cursor='grabbing'; e.preventDefault();
    });
    window.addEventListener('mousemove', e => {
      if (!isDragging) return;
      const dx=e.clientX-lastDragX; rotVel=dx*0.005; rot+=rotVel; lastDragX=e.clientX;
    });
    window.addEventListener('mouseup', () => {
      if (!isDragging) return;
      isDragging=false; autoRot=true; canvas.style.cursor='grab';
    });

    /* mouse parallax — tiny extra tilt following the cursor */
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', e => {
        parTX = (e.clientY / window.innerHeight - 0.5) * 0.10;
        parTY = (e.clientX / window.innerWidth  - 0.5) * 0.12;
      }, { passive: true });
    }

    canvas.addEventListener('touchstart',e=>{ isDragging=true; lastTX=e.touches[0].clientX; rotVel=0; autoRot=false; e.preventDefault(); },{passive:false});
    canvas.addEventListener('touchmove', e=>{ if(!isDragging)return; const dx=e.touches[0].clientX-lastTX; rotVel=dx*0.005; rot+=rotVel; lastTX=e.touches[0].clientX; e.preventDefault(); },{passive:false});
    window.addEventListener('touchend', ()=>{ isDragging=false; autoRot=true; });
  }

  /* ── COUNTRY PILLS: pin to real geo points, rotate with globe ── */
  const stageEl = canvas.closest('.globe-stage');
  const geoPills = stageEl ? [...stageEl.querySelectorAll('.geo-pill')] : [];
  const GEO = geoPills
    .map(p => ({ lat: parseFloat(p.dataset.lat), lng: parseFloat(p.dataset.lng) }))
    .filter(p => !Number.isNaN(p.lat) && !Number.isNaN(p.lng));
  function positionPills() {
    const cardOpen = stageEl && stageEl.classList.contains('has-card');
    const visible = [];
    for (const pill of geoPills) {
      const lat = parseFloat(pill.dataset.lat), lng = parseFloat(pill.dataset.lng);
      if (Number.isNaN(lat) || Number.isNaN(lng)) continue;
      const { sx, sy, z } = proj(vgeo(lat, lng));
      const isActive = pill.classList.contains('active');
      let op = Math.max(0, Math.min(1, (z + 0.12) / 0.32));   // fade out around the horizon
      if (cardOpen) op = isActive ? 0 : op * 0.08;   // focus mode: the card is the hero, the marker marks the spot
      pill.style.left = sx.toFixed(1) + 'px';   // sit exactly on the country's projected point
      pill.style.top  = sy.toFixed(1) + 'px';
      pill.style.opacity = op.toFixed(2);
      // the active pill must stay hoverable, or a hover-opened card would self-close
      pill.style.pointerEvents = ((cardOpen && !isActive) || op < 0.4) ? 'none' : 'auto';
      pill.style.zIndex = String(3 + Math.round((z + 1) * 4));
      if (op > 0.4) visible.push({ pill, x: sx, y: sy, z });
    }
    // declutter: in dense zones keep the front-most label, collapse the rest to flag-only
    visible.sort((a, b) => b.z - a.z);
    const placed = [];
    const THRESH = 82;
    for (const v of visible) {
      if (v.pill.classList.contains('active')) { v.pill.classList.remove('collapsed'); placed.push(v); continue; }
      const crowded = placed.some(p => Math.hypot(p.x - v.x, p.y - v.y) < THRESH);
      v.pill.classList.toggle('collapsed', crowded);
      if (!crowded) placed.push(v);
    }
  }

  /* ── ANIMATION LOOP ───────────────────────────── */
  let packetTimer = 0;
  function tick(now) {
    now = now || 0;
    const paused = stageEl && stageEl.classList.contains('has-card');
    if (!isDragging && !paused) {
      if (Math.abs(rotVel)>0.0003) { rot+=rotVel; rotVel*=0.94; }
      else if (autoRot)             { rot+=0.0022; }
    }
    // ease the parallax toward its target
    parX += (parTX - parX) * 0.06;
    parY += (parTY - parY) * 0.06;
    if (--packetTimer <= 0 && GEO.length) {
      if (packets.length < 4) spawnPacket(GEO);
      packetTimer = 40 + Math.floor(Math.random()*60);
    }
    draw(now);
    positionPills();
    animId=requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener('resize', resize, { passive:true });
  document.addEventListener('visibilitychange', ()=>{ if(document.hidden) cancelAnimationFrame(animId); else tick(); });
  setupInteraction();
  tick();
})();

/* ════════════════════════════════════════════
   GLOBE COUNTRY PILLS + GLASS PROJECT CARD
════════════════════════════════════════════ */
(function initGeoPills() {
  const stage = document.querySelector('.globe-stage');
  const card  = document.getElementById('geo-card');
  if (!stage || !card) return;

  const DATA = {
    us: { name: 'United States', projects: [
      { title: 'SaaS & CRM Platforms', meta: 'Bubble.io · Xano · Stripe' },
      { title: 'E-Commerce Platform',  meta: 'Marketplace · Bubble · CRM' } ] },
    ca: { name: 'Canada', projects: [
      { title: 'Internal CRM System',  meta: 'Bubble.io · Automation' } ] },
    uk: { name: 'United Kingdom', projects: [
      { title: 'EdTech Platform',      meta: 'Management System · Airtable · WeWeb' },
      { title: 'AI Content Generator', meta: 'SaaS · Bubble.io · Stripe · restAPI' } ] },
    de: { name: 'Germany', projects: [
      { title: 'B2B SaaS Platform',    meta: 'Web App · WeWeb · Xano' } ] },
    fr: { name: 'France', projects: [
      { title: 'Marketplace Platform', meta: 'Bubble.io · Stripe · Make' } ] },
    nl: { name: 'Netherlands', projects: [
      { title: 'Logistics Dashboard',  meta: 'Bubble.io · REST API' } ] },
    pt: { name: 'Portugal', projects: [
      { title: 'Crypto Brand & Landing', meta: 'Webflow · CMS · 3D' } ] },
    pl: { name: 'Poland', projects: [
      { title: 'MVP & R&D Builds',     meta: 'Bubble · n8n · Webflow' } ] },
    fi: { name: 'Finland', projects: [
      { title: 'Recruitment Platform', meta: 'WeWeb · Xano' } ] },
    ae: { name: 'United Arab Emirates', projects: [
      { title: 'Real Estate Platform', meta: 'Bubble.io · CRM · Analytics' } ] },
    sg: { name: 'Singapore', projects: [
      { title: 'Fintech Dashboard',    meta: 'WeWeb · Xano · REST API' } ] },
    au: { name: 'Australia', projects: [
      { title: 'Travel Marketplace',   meta: 'Bubble.io · PWA' } ] },
    za: { name: 'South Africa', projects: [
      { title: 'Learning Management System', meta: 'EdTech · WeWeb · Xano' } ] },
  };

  const pills   = [...stage.querySelectorAll('.geo-pill')];
  const elCountry = card.querySelector('.geo-card-country');
  const elList    = card.querySelector('.geo-card-list');
  const elClose   = card.querySelector('.geo-card-close');
  let activeKey = null, hideTimer = null;

  function render(key) {
    const d = DATA[key]; if (!d) return;
    const pill = pills.find(p => p.dataset.country === key);
    const flag = pill ? (pill.querySelector('.flag')||{}).textContent || '' : '';
    elCountry.innerHTML = flag ? `<span class="geo-card-flag">${flag}</span>${d.name}` : d.name;
    elList.innerHTML = d.projects.map(p =>
      `<div class="geo-proj">
         <div class="geo-proj-title">${p.title}</div>
         <div class="geo-proj-meta">${p.meta}</div>
       </div>`).join('');
  }
  function openCard(key, pill) {
    clearTimeout(hideTimer);
    activeKey = key;
    render(key);
    // anchor the card just inside the stage, near the active pill's vertical band
    const sb = stage.getBoundingClientRect();
    const pb = pill.getBoundingClientRect();
    let top = pb.top - sb.top + pb.height/2 - 70;
    top = Math.max(12, Math.min(top, sb.height - card.offsetHeight - 12 || top));
    card.style.top = top + 'px';
    card.hidden = false;
    requestAnimationFrame(() => card.classList.add('show'));
    pills.forEach(p => p.classList.toggle('active', p.dataset.country === key));
    stage.classList.add('has-card');
  }
  function closeCard() {
    card.classList.remove('show');
    activeKey = null;
    pills.forEach(p => p.classList.remove('active'));
    stage.classList.remove('has-card');
    hideTimer = setTimeout(() => { card.hidden = true; }, 220);
  }

  pills.forEach(pill => {
    const key = pill.dataset.country;
    pill.addEventListener('mouseenter', () => openCard(key, pill));
    pill.addEventListener('focus',      () => openCard(key, pill));
    pill.addEventListener('click', e => {
      e.preventDefault();
      activeKey === key ? closeCard() : openCard(key, pill);
    });
    pill.addEventListener('mouseleave', () => {
      hideTimer = setTimeout(() => { if (!card.matches(':hover')) closeCard(); }, 160);
    });
  });

  card.addEventListener('mouseenter', () => clearTimeout(hideTimer));
  card.addEventListener('mouseleave', closeCard);
  elClose.addEventListener('click', closeCard);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCard(); });
})();

/* ════════════════════════════════════════════
   SCROLL INDICATOR — inject into hero
════════════════════════════════════════════ */
(function createScrollIndicator() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const el = document.createElement('button');
  el.type = 'button';
  el.className = 'scroll-indicator';
  el.setAttribute('aria-label', 'Scroll to the next section');
  el.innerHTML = '<span>scroll</span>' +
    '<span class="scroll-orb" aria-hidden="true">' +
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>' +
    '</span>';
  el.addEventListener('click', () => {
    const next = document.getElementById('bio');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  });
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
