'use strict';

/* ── JS loaded: remove no-js fallback class ── */
document.documentElement.classList.remove('no-js');

/* ════════════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════════════ */
const i18n = {
  en: {
    meta_title: 'Anastasia Lisovyk — AI Automation & Product Engineer (Kraków · Remote EU)',
    meta_desc: 'AI agent & automation engineer in Kraków, Poland. I build AI agents and workflow automation with Claude API, OpenAI API, LangChain and n8n. Open to remote EU/US.',
    nav_edge: 'Expertise', nav_exp: 'Experience', nav_products: 'Products',
    nav_port: 'Work', nav_stack: 'Stack', nav_contact: 'Contact',
    hero_badge: 'Open to new roles · Kraków &amp; remote',
    hero_title: 'AI Automation &amp; Product Engineer',
    hero_desc: 'I design and build AI agents and automation systems — Claude API, OpenAI API, LangChain, n8n, Make — and take them to working products, not demos. 6+ years across venture-studio R&amp;D, client MVPs, and three mobile apps I researched, built and released on my own.',
    hero_avail: 'Open to remote roles across the EU and US · Kraków, Poland · relocation considered',
    hero_cv: 'Download CV', hero_call: "Let's Talk",
    globe_hint_t: 'Explore projects by location', globe_hint_s: 'Click on a country to see selected work',
    bio_caption: 'Kraków, Poland — building since 2020',
    certs_label: 'Certifications',
    cert_progress: 'SoftServe · in progress',
    bio_label: 'My Story',
    bio_title: 'Products with<br><span class="accent">business sense.</span>',
    bio_p1: 'I started in finance and B2B sales, which gave me something most developers pick up late: a working understanding of how a business actually makes money. I moved into no-code development in 2021, then into R&amp;D and technical validation at a venture studio — judging whether a startup idea was buildable, and at what cost, before anyone spent a development budget on it.',
    bio_p2: 'Today the centre of my work is AI agents and automation — Claude API, OpenAI API, LangChain, n8n — with no-code, JavaScript/TypeScript and SQL as the tooling around it. Alongside client work I researched, built and released three mobile apps on my own, from market research through ASO to the App Store. DevOps fundamentals are in progress.',
    edge_label: 'Why me', edge_title: 'The Expert Edge',
    edge_desc: 'Three things most job descriptions ask for separately: business context, AI systems that run in production, and delivery from first question to release.',
    edge1_h: 'Business Logic First',
    edge1_p: 'A finance degree from Jagiellonian University and two years in B2B pre-sales mean I read a brief in terms of revenue, cost and risk. At the venture studio my job was exactly that: decide whether an idea was buildable, at what cost, and whether it was worth the budget — before development started.',
    edge2_h: 'Agents That Run Daily',
    edge2_p: 'Intent classification, tool routing, retries, evaluation loops — the parts that decide whether an agent survives contact with real input. My Upwork outreach generator and Telegram voice-to-task assistant both run every day on n8n + Claude API, not as showcase prototypes.',
    edge3_h: 'Full-Cycle Ownership',
    edge3_p: 'Three mobile apps taken from market research to App Store release without a team: positioning, UX, native iOS integrations, localization into up to 35 languages, ASO, paywalls, legal pages. I own the whole path, not one ticket inside it.',
    proc_label: 'Method', proc_title: 'How I Work',
    proc_desc: "The same five steps whether it's a client project, an internal team, or my own app.",
    proc1_h: 'Discovery',
    proc1_p: 'Map the product as a connected system: the problem, the users, how it makes money, what success looks like, which assumptions are still guesses.',
    proc2_h: 'Research &amp; Validation',
    proc2_p: 'Competitors, UX patterns, technical feasibility, AI and automation options — not to copy, but to find where the gap is.',
    proc3_h: 'Prioritization',
    proc3_p: 'Cut the MVP down to what creates business value: core flow, revenue, validation. Everything else goes on the roadmap.',
    proc4_h: 'Build',
    proc4_p: 'Short iterations, user flows and data model agreed before code, continuous contact with stakeholders, priorities adjusted as new information arrives.',
    proc5_h: 'Measure',
    proc5_p: 'Business logic, flows, integrations and edge cases tested before release. After release, read real behaviour and iterate.',
    exp_label: 'Career', exp_title: 'Experience',
    tlai_role: 'Independent AI Automation &amp; Product Engineer',
    tlai_desc: 'Built an NDA-aware outreach generator on n8n + Claude API + Notion over a 28-case portfolio: it matches the 2–3 most relevant cases to a job posting and drafts the letter, cutting prep from 15–20 minutes to 10–15 seconds per application. Built a Telegram voice-to-task assistant for project managers (n8n + Groq/Whisper + Claude) that classifies intent and routes items into Jira/Notion and Google Calendar with a daily digest. Rebuilt a distributor\'s 2018 OpenCart site into a ~30KB filterable B2B catalogue with a self-service admin panel (Vanilla JS, htmx, Supabase, Netlify) — the client now runs the catalogue without a developer. Researched, built, localized and released three commercial mobile apps end to end; one took its first paying customers within weeks of launch, with no marketing team.',
    tl0_role: 'R&amp;D / Product Engineer',
    tl0_desc: "Assessed early-stage startup ideas inside an internal venture studio before any development began: market and competitor research, teardown of competitors' stacks and architecture, required APIs and paid services, and estimates of build cost, timeline and MVP feasibility on no-code/low-code. Built the prototypes and Proofs of Concept the studio used to validate or kill ideas before committing a full budget, working alongside Product Managers, Business Analysts, Researchers and Solution Architects. Built AI-powered internal automation on the OpenAI API and shipped production landing pages and MVPs (Bubble, Webflow, n8n) across the portfolio, including the fintech product Linity after the studio wound down.",
    tl1_role: 'Software Developer',
    tl1_desc: 'Built the core internal platform for a Finnish sustainable timber-home construction company, connecting three user roles in one workflow: company admins, supplier and partner organisations, and end clients. Designed the tender system — admins raise material and work requests, invite suppliers filtered by specialisation, and suppliers submit competing bids inside the platform. Also delivered house-model management, cost-estimate documentation, role administration and in-project messaging; designed the database schemas, built analytics dashboards and integrated third-party APIs, payment flows and webhooks.',
    tl2_role: 'Freelance Product Developer',
    tl2_desc: "Delivered no-code products end to end for international clients on Bubble.io, WeWeb, Webflow, Xano and Airtable — among them a visa-application workflow platform for the DACH market and a peer-to-peer vehicle rental marketplace with three user roles and Stripe payments. Owned the full lifecycle: requirements, build, deploy, post-launch optimisation, direct client contact throughout. Passed WeWeb's official certification in 2022 and moved most freelance work onto that stack.",
    tl3_role: 'Senior No-Code Developer',
    tl3_desc: 'Delivered MVPs and production applications for international startups: NXGN, a fintech marketplace with automated price negotiation, renewals and co-termination (team of 5, delivered in 8 weeks); GCPlus, an Uber-style marketplace for plumbing services matching customers to trades by location and issue type (team of 7, 3 months) that helped the client reach their next investment round; plus social and dating products. Shipped a volunteer-coordination platform for Ukraine in 3 days at the start of the full-scale invasion (Bubble.io + Twilio). Worked cross-functionally with designers and engineers on architecture and performance.',
    tl4_role: 'Lead Generator',
    tl4_role2: 'Regional Representative, Poland',
    tl4_desc: 'Ran the full B2B funnel for the Polish market: qualified and validated marketing-qualified leads through direct outreach and first meetings, presented the delivery team to prospects, and carried deals through to signed contract and handoff. Collected initial client requirements and prepared documentation for business analysts — the first place I practised turning a business need into technical scope.',
    own_label: 'Own Products',
    own_title: 'Three apps,<br><span class="accent">shipped solo.</span>',
    own_desc: 'Research → UX/UI → build → ASO → release, done end to end without a team. One of the three took its first paying customers within weeks of launch, with no marketing campaign behind it.',
    own1_title: 'Psalmo — Bible-first screen-time app',
    own1_desc: "Pauses distracting apps through native iOS Screen Time / Family Controls until the day's verse has been read, with home- and lock-screen widgets, full Bible text (KJV/WEB), an AI prayer chat and a premium funnel. I built the Screen Time, WidgetKit and DeviceActivity integrations, localized the UI into 5 languages, automated a Fastlane screenshot pipeline (5 languages × iPhone + iPad), and wrote the marketing and legal pages.",
    own2_title: 'Bubbi — baby heartbeat &amp; pregnancy companion',
    own2_desc: 'Listen to, record and share baby-heartbeat audio with BPM and waveform, plus a baby diary and a week-by-week pregnancy journey. I ran the competitive research that set positioning and pricing, rebranded the app from Bumpi after a name clash in the market, localized it into ~32 locales with ASO metadata for 5 markets, and shipped RevenueCat freemium monetization.',
    own3_title: 'Sobeer — days-clean &amp; habit-recovery tracker',
    own3_desc: 'Tracks time off alcohol, nicotine or screens with streaks, money- and time-recovered calculations, a craving and mood journal, and community groups. Built local-first with Supabase-ready auth and community sync, localized into 35 languages, with Face ID gating and RevenueCat premium tiers.',
    port_label: 'Client Work', port_title: 'Selected Projects',
    port_desc: 'AI and automation work first, then the no-code platforms and marketplaces behind it.',
    p1_title: 'Upwork Cover Letter Generator — NDA-aware portfolio matching',
    p1_desc: 'A Notion portfolio of 28+ cases carries NDA and showcase rules that decide how much can be said about each project — full client name, functionality only, or nothing at all. The generator (web app + Telegram bot) reads a job posting, scores and matches the 2–3 most relevant cases by keywords and tech stack, and prompts Claude for a short letter with inline case links and a closing call to action. Prep time per application dropped from 15–20 minutes to 10–15 seconds; which clients to apply to is still decided by hand.',
    p2_title: 'PM AI Assistant — voice-to-task via Telegram',
    p2_desc: "A project manager speaks or types into Telegram; Groq/Whisper transcribes, Claude classifies the intent — new task, meeting, reminder, status change — and the workflow routes it into Jira or Notion and Google Calendar, then sends a morning digest of what's due, upcoming or overdue. Commands cover tasks by project, marking done, moving deadlines and flagging blockers. It removes the manual re-entry step between a meeting and the tracker.",
    p3_title: 'Zbs.lviv.ua — B2B catalogue rebuild for a pipe products distributor',
    p3_desc: 'A distributor trading since 1996 was running a 2018 OpenCart storefront with a cart and user accounts, while the real business is manager-led wholesale. I rebuilt the site from scratch — strategy, design, code and database: navigation cut to four sections, a categorized catalogue with parameter filters (DN, connection type) on Supabase, a short enquiry form instead of a cart, and a full admin panel for categories, products, brands, reviews and the hero slider. ~30KB transfer, and the client now runs the whole catalogue without a developer.',
    p4_title: 'AXB — corporate site for a digital-assets and FX trading firm',
    p4_desc: 'A market-making firm working across digital assets and foreign exchange needed a site that reads as institutional rather than crypto-native. Built in Webflow with Spline 3D scenes, custom lead-capture forms, a CMS-driven blog, a clean SEO structure and CookieYes consent handling. Live at axb.co.',
    p5_title: 'GCPlus — Uber-style marketplace for plumbing services',
    p5_desc: 'Customers describe the issue, the platform matches them to available trades by location and problem type, and the job is tracked through to completion. Built on Bubble.io + Airtable with a team of 7 and delivered in 3 months — the working product was part of what let the client move on to their next investment round.',
    p6_title: 'NXGN — fintech procurement marketplace',
    p6_desc: 'Companies pick the software products they need and the platform negotiates price on their behalf, then manages renewals, add-ons and co-termination across vendors such as Asana and ClickUp. Built on Bubble.io with a HubSpot integration by a team of 5 and delivered inside an 8-week window.',
    p7_title: 'Darsel — teacher platform for a non-profit',
    p7_desc: 'An education platform for teachers, built by a non-profit on research from Harvard and Stanford. I built the frontend in WeWeb against a Python backend with Auth0 authentication and Twilio messaging, delivered over three review iterations. Live at data.darsel.tech.',
    p8_title: 'HeartWiredClub — creative agency website',
    p8_desc: 'A multi-page Webflow site for a creative agency, with a CMS-driven portfolio and blog so the team publishes without a developer. Custom JavaScript handles the animations and interactions while keeping the pages fast on mobile, with SEO structure and CookieYes consent in place. Live at heartwiredclub.com.',
    all_proj: 'More from 40+ delivered projects', more_proj: 'more on request',
    stack_label: 'Tools', stack_title: 'Stack &amp; Toolset',
    stat1: 'Projects Delivered', stat2: 'Years in Industry',
    stat3: 'Own Apps Shipped', stat4: 'Countries Served',
    test_label: 'Social Proof', test_title: 'Recommendations',
    test_desc: 'Five named recommendations on LinkedIn — from the people who managed me, hired me, and shipped alongside me. Quoted in the original English.',
    rel_managed: 'Managed Anastasia directly',
    rel_senior: 'Was senior to Anastasia',
    rel_team: 'Worked on the same team',
    rev_stat1: 'Average client rating · Upwork',
    rev_stat2: 'Job Success Score on Upwork',
    rev_stat3: 'Named recommendations on LinkedIn',
    rev_cta: 'Read them on LinkedIn',
    contact_label: "Let's talk",
    contact_title: 'Ready to build<br><span class="accent">something great?</span>',
    contact_desc: "Hiring for an AI agent, automation or product engineering role — or need one built? I'm based in Kraków and work remotely across the EU and US; relocation is on the table.",
    footer_line: '&copy; 2026 Anastasia Lisovyk — AI Automation &amp; Product Engineer.',
  },
  uk: {
    meta_title: 'Анастасія Лісовик — AI Automation & Product Engineer (Краків · Remote EU)',
    meta_desc: 'AI agent developer і automation engineer у Кракові. Будую AI-агентів і workflow-автоматизацію на Claude API, OpenAI API, LangChain та n8n. Відкрита до remote EU/US.',
    nav_edge: 'Експертиза', nav_exp: 'Досвід', nav_products: 'Продукти',
    nav_port: 'Проєкти', nav_stack: 'Стек', nav_contact: 'Контакт',
    hero_badge: 'Відкрита до нових ролей · Краків &amp; remote',
    hero_title: 'AI Automation &amp; Product Engineer',
    hero_desc: 'Проєктую і будую AI-агентів та системи автоматизації — Claude API, OpenAI API, LangChain, n8n, Make — і доводжу їх до робочих продуктів, а не демо. 6+ років: R&amp;D у venture studio, клієнтські MVP і три мобільні застосунки, які дослідила, зібрала й випустила сама.',
    hero_avail: 'Відкрита до remote-ролей у ЄС і США · Краків, Польща · релокація розглядається',
    hero_cv: 'Завантажити CV', hero_call: 'Поговоримо',
    globe_hint_t: 'Проєкти за локацією', globe_hint_s: 'Натисніть на країну, щоб побачити роботи',
    bio_caption: 'Краків, Польща — в розробці з 2020',
    certs_label: 'Сертифікації',
    cert_progress: 'SoftServe · триває',
    bio_label: 'Моя історія',
    bio_title: 'Продукти з<br><span class="accent">бізнес-мисленням.</span>',
    bio_p1: 'Я починала з фінансів і B2B-продажів — звідси те, до чого розробники доходять пізно: розуміння, з чого бізнес насправді заробляє. У 2021-му перейшла в no-code розробку, далі — в R&amp;D і технічну валідацію у venture studio: моїм завданням було зрозуміти, чи стартап-ідея реалізовна і за які гроші, ще до того, як на неї виділять бюджет розробки.',
    bio_p2: 'Сьогодні центр моєї роботи — AI-агенти й автоматизація: Claude API, OpenAI API, LangChain, n8n. No-code, JavaScript/TypeScript і SQL — інструменти навколо цього. Паралельно з клієнтськими проєктами я сама дослідила, зібрала й випустила три мобільні застосунки — від аналізу ринку до ASO і публікації в App Store. Зараз проходжу DevOps Fundamentals.',
    edge_label: 'Чому я', edge_title: 'Моя перевага',
    edge_desc: 'Три речі, які у вакансіях зазвичай шукають окремо: бізнес-контекст, AI-системи, що працюють у продакшені, і доведення продукту від першого питання до релізу.',
    edge1_h: 'Спершу бізнес-логіка',
    edge1_p: 'Фінансова освіта (Ягеллонський університет) і два роки в B2B pre-sales означають, що я читаю бриф у категоріях виручки, витрат і ризику. У venture studio це й було моєю роботою: вирішити, чи ідея реалізовна, за які гроші й чи варта бюджету — до старту розробки.',
    edge2_h: 'Агенти, що працюють щодня',
    edge2_p: 'Класифікація наміру, роутинг у зовнішні сервіси, ретраї, цикли оцінки — саме те, від чого залежить, чи виживе агент при зустрічі з реальним вводом. Мій генератор заявок для Upwork і Telegram-асистент voice-to-task працюють щодня на n8n + Claude API, а не лежать як демо.',
    edge3_h: 'Повний цикл під власною відповідальністю',
    edge3_p: 'Три мобільні застосунки від аналізу ринку до релізу в App Store без команди: позиціонування, UX, нативні iOS-інтеграції, локалізація до 35 мов, ASO, paywall, юридичні сторінки. Я веду весь шлях, а не один тікет усередині нього.',
    proc_label: 'Метод', proc_title: 'Як я працюю',
    proc_desc: 'Ті самі п\'ять кроків — і в клієнтському проєкті, і всередині команди, і у власному застосунку.',
    proc1_h: 'Discovery',
    proc1_p: 'Розкладаю продукт як зв\'язану систему: яку проблему вирішуємо, хто користувач, з чого продукт заробляє, який вигляд має успіх і які припущення досі не перевірені.',
    proc2_h: 'Research &amp; Validation',
    proc2_p: 'Конкуренти, UX-патерни, технічна реалізовність, можливості AI та автоматизації — не щоб скопіювати, а щоб знайти, де прогалина.',
    proc3_h: 'Пріоритизація',
    proc3_p: 'Урізаю MVP до того, що створює бізнес-цінність: базовий флоу, монетизація, перевірка гіпотез. Решта йде в роадмап.',
    proc4_h: 'Build',
    proc4_p: 'Короткі ітерації, user flow і модель даних узгоджені до коду, постійний контакт зі стейкхолдерами, пріоритети змінюються, коли з\'являється нова інформація.',
    proc5_h: 'Вимірювання',
    proc5_p: 'Бізнес-логіка, флоу, інтеграції та edge cases тестуються до релізу. Після релізу — дивлюсь на реальну поведінку і йду наступною ітерацією.',
    exp_label: "Кар'єра", exp_title: 'Досвід',
    tlai_role: 'Independent AI Automation &amp; Product Engineer',
    tlai_desc: 'Побудувала генератор заявок з NDA-логікою на n8n + Claude API + Notion поверх портфоліо з 28 кейсів: він підбирає 2–3 найрелевантніші кейси під вакансію і пише лист — підготовка однієї заявки скоротилась з 15–20 хвилин до 10–15 секунд. Зробила Telegram-асистента voice-to-task для проєктних менеджерів (n8n + Groq/Whisper + Claude): він розпізнає намір і маршрутизує задачі в Jira/Notion і Google Calendar, плюс щоденний дайджест. Перебудувала сайт дистриб\'ютора з OpenCart 2018 року у ~30KB B2B-каталог з фільтрами і власною адмін-панеллю (Vanilla JS, htmx, Supabase, Netlify) — клієнт веде каталог без розробника. Самостійно дослідила, зібрала, локалізувала і випустила три комерційні мобільні застосунки; один отримав перших платних користувачів за кілька тижнів після запуску без маркетингової команди.',
    tl0_role: 'R&amp;D / Product Engineer',
    tl0_desc: 'Оцінювала early-stage стартап-ідеї у внутрішній venture studio ще до старту розробки: дослідження ринку і конкурентів, розбір їхнього стека й архітектури, перелік потрібних API і платних сервісів, оцінка вартості, строків і реалізовності MVP на no-code/low-code. Будувала прототипи і Proof of Concept, на яких студія вирішувала — валідувати ідею чи закрити її, не витрачаючи повний бюджет розробки; працювала поруч з Product Manager, Business Analyst, Researcher і Solution Architect. Зробила внутрішню AI-автоматизацію на OpenAI API і випустила продакшн-лендінги та MVP (Bubble, Webflow, n8n) по портфелю студії, включно з фінтех-продуктом Linity після її закриття.',
    tl1_role: 'Software Developer',
    tl1_desc: 'Побудувала внутрішню платформу для фінської компанії, що проєктує і будує екологічні дерев\'яні будинки, — три ролі користувачів в одному процесі: адміністратори компанії, партнерські організації та постачальники, кінцеві клієнти. Спроєктувала тендерну систему: адміністратори створюють запити на матеріали й роботи, запрошують постачальників за напрямом діяльності, а ті подають конкурентні пропозиції всередині платформи. Також — управління моделями будинків, кошторисна документація, адміністрування ролей і внутрішнє листування; спроєктувала схеми БД, зробила аналітичні дашборди та інтегрувала сторонні API, платіжні флоу і вебхуки.',
    tl2_role: 'Freelance Product Developer',
    tl2_desc: 'Робила no-code продукти під ключ для міжнародних клієнтів на Bubble.io, WeWeb, Webflow, Xano та Airtable — серед них платформа оформлення віз для ринку DACH і P2P-маркетплейс оренди транспорту з трьома ролями користувачів і оплатою через Stripe. Вела повний цикл: вимоги, розробка, деплой, оптимізація після запуску, прямий контакт із клієнтом. У 2022 році пройшла офіційну сертифікацію WeWeb і перевела більшість фриланс-проєктів на цей стек.',
    tl3_role: 'Senior No-Code Developer',
    tl3_desc: 'Здавала MVP і продакшн-застосунки для міжнародних стартапів: NXGN — фінтех-маркетплейс з автоматизованими ціновими переговорами, поновленнями і ко-термінацією (команда 5, 8 тижнів); GCPlus — Uber-подібний маркетплейс сантехнічних послуг, що підбирає майстра за локацією і типом проблеми (команда 7, 3 місяці), клієнт вийшов на наступний раунд інвестицій; а також соціальні та dating-продукти. За 3 дні на початку повномасштабного вторгнення випустила платформу координації волонтерів (Bubble.io + Twilio). Працювала крос-функціонально з дизайнерами й розробниками над архітектурою і продуктивністю.',
    tl4_role: 'Lead Generator',
    tl4_role2: 'Регіональна представниця, Польща',
    tl4_desc: 'Вела повну B2B-воронку на польському ринку: кваліфікувала і валідувала Marketing Qualified Leads через пряму комунікацію та перші зустрічі, презентувала команду розробки потенційним клієнтам і доводила угоди до підписання контракту й передачі в делівері. Збирала первинні вимоги клієнтів і готувала документацію для бізнес-аналітиків — саме тут я вперше вчилася перекладати бізнес-потребу в технічний скоуп.',
    own_label: 'Власні продукти',
    own_title: 'Три застосунки,<br><span class="accent">випущені соло.</span>',
    own_desc: 'Research → UX/UI → розробка → ASO → реліз, повний цикл без команди. Один із трьох отримав перших платних користувачів за кілька тижнів після запуску — без маркетингової кампанії.',
    own1_title: 'Psalmo — Bible-first застосунок проти залипання в екран',
    own1_desc: 'Ставить на паузу відволікаючі застосунки через нативний iOS Screen Time / Family Controls, доки не прочитано вірш дня; віджети на home- і lock-екрані, повний текст Біблії (KJV/WEB), AI-чат для молитви і premium-воронка. Я зробила інтеграції Screen Time, WidgetKit і DeviceActivity, локалізувала інтерфейс на 5 мов, автоматизувала Fastlane-пайплайн скріншотів (5 мов × iPhone + iPad) і написала маркетингову та юридичні сторінки.',
    own2_title: 'Bubbi — серцебиття малюка і супровід вагітності',
    own2_desc: 'Слухати, записувати і ділитися аудіо серцебиття малюка з BPM і візуалізацією хвилі, плюс щоденник і тижневий шлях вагітності. Я провела аналіз конкурентів, який визначив позиціонування і ціни, зробила ребрендинг з Bumpi через конфлікт назв на ринку, локалізувала на ~32 локалі з ASO-метаданими для 5 ринків і запустила freemium-монетизацію на RevenueCat.',
    own3_title: 'Sobeer — трекер днів без залежності та відновлення звичок',
    own3_desc: 'Рахує час без алкоголю, нікотину чи екранів: серії, збережені гроші й час, щоденник тяги і настрою, спільноти. Побудований local-first із готовою до Supabase авторизацією і синхронізацією спільнот, локалізований на 35 мов, з Face ID та преміум-тарифами на RevenueCat.',
    port_label: 'Клієнтські проєкти', port_title: 'Вибрані роботи',
    port_desc: 'Спершу AI та автоматизація, далі — no-code платформи і маркетплейси.',
    p1_title: 'Upwork Cover Letter Generator — підбір кейсів з NDA-логікою',
    p1_desc: 'Notion-портфоліо з 28+ кейсів має правила NDA і видимості, які визначають, скільки можна сказати про кожен проєкт: повна назва клієнта, тільки функціональність або нічого. Генератор (веб-застосунок + Telegram-бот) читає опис вакансії, оцінює і підбирає 2–3 найрелевантніші кейси за ключовими словами і стеком, і промптить Claude написати короткий лист з inline-посиланнями на кейси й фінальним call to action. Підготовка однієї заявки — з 15–20 хвилин до 10–15 секунд; рішення, кому подаватись, і далі приймається вручну.',
    p2_title: 'PM AI Assistant — voice-to-task через Telegram',
    p2_desc: 'Проєктний менеджер говорить або пише в Telegram; Groq/Whisper транскрибує, Claude визначає намір — нова задача, зустріч, нагадування, зміна статусу — і воркфлоу маршрутизує це в Jira або Notion і Google Calendar, а зранку надсилає дайджест того, що горить, наближається або прострочено. Команди: задачі за проєктом, позначити виконаним, перенести дедлайн, підняти блокер. Прибирає ручне перенесення інформації із зустрічі в трекер.',
    p3_title: 'Zbs.lviv.ua — перебудова B2B-каталогу для дистриб\'ютора трубопровідної продукції',
    p3_desc: 'Дистриб\'ютор на ринку з 1996 року працював на сайті OpenCart 2018 року з кошиком і обліковими записами, хоча реальні продажі — оптові B2B через менеджерів. Я перебудувала сайт з нуля — стратегія, дизайн, код і база даних: навігація скорочена до чотирьох розділів, каталог з категоріями і фільтрами за параметрами (DN, тип з\'єднання) на Supabase, коротка форма заявки замість кошика і повна адмін-панель для категорій, товарів, брендів, відгуків і hero-слайдера. ~30KB трафіку — і клієнт веде весь каталог сам, без розробника.',
    p4_title: 'AXB — корпоративний сайт трейдингової компанії (digital assets і FX)',
    p4_desc: 'Маркет-мейкер на перетині цифрових активів і валютного ринку потребував сайту, який читається як інституційний, а не крипто-нативний. Зроблено у Webflow: 3D-сцени Spline, кастомні форми збору лідів, блог на CMS, чиста SEO-структура і CookieYes. Живе на axb.co.',
    p5_title: 'GCPlus — Uber-подібний маркетплейс сантехнічних послуг',
    p5_desc: 'Клієнт описує проблему, платформа підбирає доступного майстра за локацією і типом задачі, а роботу видно до завершення. Bubble.io + Airtable, команда 7, 3 місяці — робочий продукт став частиною того, що дозволило клієнту вийти на наступний раунд інвестицій.',
    p6_title: 'NXGN — фінтех-маркетплейс закупівель ПЗ',
    p6_desc: 'Компанії обирають потрібні софтверні продукти, а платформа веде цінові переговори від їхнього імені та керує поновленнями, розширеннями і ко-термінацією по вендорах на кшталт Asana і ClickUp. Bubble.io з інтеграцією HubSpot, команда 5, здано в 8-тижневий строк.',
    p7_title: 'Darsel — платформа для вчителів від некомерційної організації',
    p7_desc: 'Освітня платформа для вчителів, побудована некомерційною організацією на дослідженнях Гарварду і Стенфорду. Я зробила фронтенд на WeWeb поверх Python-бекенду з авторизацією Auth0 і повідомленнями через Twilio, за три ітерації рев\'ю. Живе на data.darsel.tech.',
    p8_title: 'HeartWiredClub — сайт креативної агенції',
    p8_desc: 'Багатосторінковий сайт агенції на Webflow: портфоліо і блог на CMS, щоб команда публікувала матеріали без розробника. Кастомний JavaScript відповідає за анімації і взаємодії, не втрачаючи швидкості на мобільних; SEO-структура і CookieYes на місці. Живе на heartwiredclub.com.',
    all_proj: 'Ще з 40+ реалізованих проєктів', more_proj: 'більше за запитом',
    stack_label: 'Інструменти', stack_title: 'Стек та інструментарій',
    stat1: 'Реалізованих проєктів', stat2: 'Років у сфері',
    stat3: 'Власних застосунків', stat4: 'Країн клієнтів',
    test_label: 'Рекомендації', test_title: 'Рекомендації',
    test_desc: 'П\'ять іменних рекомендацій у LinkedIn — від людей, які мною керували, наймали мене і працювали поруч. Цитати в оригіналі, англійською.',
    rel_managed: 'Керувала Анастасією напряму',
    rel_senior: 'Був старшим за Анастасію',
    rel_team: 'Працювали в одній команді',
    rev_stat1: 'Середня оцінка клієнтів · Upwork',
    rev_stat2: 'Job Success Score на Upwork',
    rev_stat3: 'Іменних рекомендацій у LinkedIn',
    rev_cta: 'Прочитати в LinkedIn',
    contact_label: "Зв'яжіться",
    contact_title: 'Готові будувати<br><span class="accent">щось велике?</span>',
    contact_desc: 'Шукаєте людину на роль AI agent / automation / product engineer — або потрібно щось таке побудувати? Я в Кракові, працюю remote по ЄС і США, релокація розглядається.',
    footer_line: '&copy; 2026 Anastasia Lisovyk — AI Automation &amp; Product Engineer.',
  }
};
/* ════════════════════════════════════════════
   LANGUAGE SWITCHER
════════════════════════════════════════════ */
let currentLang = localStorage.getItem('lang') || 'en';

function setMeta(selector, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute('content', value);
}

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

  /* keep title / description / OG tags in sync with the active language */
  if (d.meta_title) {
    document.title = d.meta_title;
    setMeta('meta[property="og:title"]', d.meta_title);
    setMeta('meta[name="twitter:title"]', d.meta_title);
  }
  if (d.meta_desc) {
    setMeta('meta[name="description"]', d.meta_desc);
    setMeta('meta[property="og:description"]', d.meta_desc);
    setMeta('meta[name="twitter:description"]', d.meta_desc);
  }
  setMeta('meta[property="og:locale"]', lang === 'uk' ? 'uk_UA' : 'en_US');
  setMeta('meta[property="og:locale:alternate"]', lang === 'uk' ? 'en_US' : 'uk_UA');
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
    ctx.strokeStyle = 'rgba(255,255,255,0.055)'; ctx.lineWidth = 0.5;
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
      ctx.strokeStyle = 'rgba(249,115,22,0.20)'; ctx.lineWidth = 1; ctx.stroke();
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
      ctx.shadowColor = '#F97316'; ctx.shadowBlur = 12;
      ctx.beginPath(); ctx.arc(sx, sy, 1.9, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(255,178,110,0.95)'; ctx.fill();
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
      ctx.strokeStyle = `rgba(249,115,22,${(0.45*alpha*(1-pulse)).toFixed(2)})`;
      ctx.lineWidth = 1.2; ctx.stroke();
      // core dot
      ctx.shadowColor = '#F97316'; ctx.shadowBlur = 10;
      ctx.beginPath(); ctx.arc(sx, sy, 2.4, 0, Math.PI*2);
      ctx.fillStyle = `rgba(249,115,22,${(0.95*alpha).toFixed(2)})`; ctx.fill();
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
            ctx.fillStyle = 'rgba(255,255,255,0.05)';
            ctx.beginPath(); ctx.arc(sx, sy, 0.6, 0, Math.PI*2); ctx.fill();
          }
          continue;
        }
        if (land) {
          const tw = 0.05 * Math.sin(now*0.0012 + lat*0.7 + lng*0.35);
          ctx.fillStyle = `rgba(236,232,226,${(0.14 + z*0.42 + tw).toFixed(2)})`;
          ctx.beginPath(); ctx.arc(sx, sy, 0.95 + z*0.85, 0, Math.PI*2); ctx.fill();
        } else {
          ctx.fillStyle = `rgba(255,255,255,${(0.028 + z*0.05).toFixed(2)})`;
          ctx.beginPath(); ctx.arc(sx, sy, 0.5 + z*0.4, 0, Math.PI*2); ctx.fill();
        }
      }
    }

    // volume: soft inner vignette toward the rim
    const vg = ctx.createRadialGradient(cx, cy, R*0.55, cx, cy, R);
    vg.addColorStop(0, 'rgba(249,115,22,0)');
    vg.addColorStop(1, 'rgba(249,115,22,0.07)');
    ctx.fillStyle = vg;
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI*2); ctx.fill();

    // soft outer ring
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(255,255,255,0.10)'; ctx.lineWidth = 1; ctx.stroke();

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
      { title: 'Recruitment Platform',   meta: 'WeWeb · Xano · Stripe · 6 weeks' },
      { title: 'EdTech Teacher Platform', meta: 'WeWeb · Python · Auth0 · Twilio' } ] },
    ca: { name: 'Canada', projects: [
      { title: 'Internal CRM System',  meta: 'Bubble.io · Make · Automation' } ] },
    uk: { name: 'United Kingdom', projects: [
      { title: 'E-Bike & Scooter Rental Marketplace', meta: 'Bubble.io · Stripe · 3 user roles' },
      { title: 'AI Storyboarding SaaS', meta: 'Bubble.io · Python · Stripe' } ] },
    de: { name: 'Germany', projects: [
      { title: 'Visa Application Platform', meta: 'Bubble.io · DACH market' } ] },
    gr: { name: 'Greece', projects: [
      { title: 'B2B eCommerce (ERP replacement)', meta: 'Bubble.io · SQL · 8 weeks' } ] },
    nl: { name: 'Netherlands', projects: [
      { title: 'Logistics Dashboard',  meta: 'Bubble.io · REST API' } ] },
    ua: { name: 'Ukraine', projects: [
      { title: 'Volunteer Coordination Platform', meta: 'Bubble.io · Twilio · 3 days' },
      { title: 'B2B Catalogue Rebuild', meta: 'Vanilla JS · htmx · Supabase' },
      { title: 'Therapy Booking Module', meta: 'Bubble.io · Google Calendar · JS' } ] },
    pl: { name: 'Poland', projects: [
      { title: 'R&D, PoC & MVP Builds', meta: 'Bubble · Webflow · n8n · OpenAI API' } ] },
    fi: { name: 'Finland', projects: [
      { title: 'Construction Tender Platform', meta: 'Bubble.io · 3 user roles' } ] },
    ae: { name: 'United Arab Emirates', projects: [
      { title: 'CRM & Analytics Platform', meta: 'Bubble.io · API Integration' } ] },
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
   SPOTLIGHT CARDS — cursor-tracked radial glow
════════════════════════════════════════════ */
(function initSpotlight() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.spot');
  if (!cards.length) return;

  cards.forEach(card => {
    let raf = 0;
    card.addEventListener('mousemove', e => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
        card.style.setProperty('--my', `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
      });
    }, { passive: true });
  });
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
