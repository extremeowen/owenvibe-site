/* ============================================================
   extremeowen — логіка сторінки
   1. CONFIG (що змінювати)   2. Тексти UA/EN   3. Тема
   4. Мова   5. Посилання і копіювання   6. Аватар   7. Анімації
   ============================================================ */

/* ------------------------------------------- 1. CONFIG ---------- */
const CONFIG = {
  name: "extremeowen",

  // фото профілю: поклади файл avatar.jpg у цю ж папку (або вкажи інший шлях).
  // якщо файлу немає — показується градієнтна літера "e"
  avatar: "avatar.jpg",

  // пошта: кнопка Email з'явиться тільки якщо тут щось вписано
  email: "",

  links: {
    github:   "https://github.com/extremeowen",   // або просто "extremeowen"
    telegram: "https://t.me/extremeowen",         // або "@extremeowen"
    discord:  "extremeowen_"                      // нік: кнопка копіює його
  },

  phrases: {
    uk: ["vibe coding", "спочатку шип, потім полірування", "промпт → код → деплой", "у мене локально працює", "ще один рефактор"],
    en: ["vibe coding", "ship first, polish never", "prompt → build → ship", "it works on my machine", "one more refactor"]
  },

  statuses: {
    uk: ["деплою щось о 2 ночі", "рефакторю те, що й так працювало", "читаю логи замість документації", "додаю ще одну анімацію", "переписую CSS учетверте"],
    en: ["deploying something at 2am", "refactoring what already worked", "reading logs instead of docs", "adding one more animation", "rewriting the CSS for the fourth time"]
  },

  /* Як додати свій проєкт:
     1) скопіюй будь-який блок { ... } нижче і постав перед "]" ,
     2) заміни тексти. Можна писати або двомовно, як тут,
        або просто рядком — тоді текст буде однаковий для UA та EN:
        { name: "Nova", desc: "Телеграм-бот для обліку витрат.", tags: ["Python", "Bot"], url: "https://github.com/extremeowen/nova" },
     3) url можна лишити "" — тоді картка не буде клікабельною.
     Карток може бути 1, 3, 6 — сітка сама переносить рядки. */
  projects: [
    {
      name: { uk: "Фітнес Рулетка", en: "Fitness Roulette" },
      desc: { uk: "PWA для домашніх тренувань: колесо вправ, таймер, музика й гейміфікація з XP.", en: "Workout PWA: spinning exercise wheel, timer, music and XP levels." },
      tags: ["PWA", "JavaScript", "Firebase"],
      url: "https://github.com/extremeowen/sport",
      demo: "https://extremeowen.github.io/sport/",
      shot: "shots/sport.jpg"
    },
    {
      name: { uk: "MiniBin", en: "MiniBin" },
      desc: { uk: "Tray-утиліта для Windows, яка керує кошиком без зайвих вікон.", en: "Windows tray app that controls the Recycle Bin without extra windows." },
      tags: ["C#", ".NET", "Windows"],
      url: "https://github.com/extremeowen/minibin"
    },
    {
      name: { uk: "LED Clock", en: "LED Clock" },
      desc: { uk: "Годинник на LED-табло: PWA з будильником, таймером і власними звуками.", en: "LED-style clock PWA with alarm, timer and built-in sounds." },
      tags: ["PWA", "JavaScript", "Vite"],
      url: "https://github.com/extremeowen/app",
      demo: "https://extremeowen.github.io/app/",
      shot: "shots/app.jpg"
    }
  ],

  /* посилання «більше проєктів» під сіткою; якщо лишити "" — береться профіль GitHub */
  moreProjectsUrl: "https://github.com/extremeowen?tab=repositories",

  /* Аналітика — впиши одне з двох, і статистика почне рахуватись.
     Plausible: зареєструй сайт на plausible.io і впиши домен, напр. "extremeowen.netlify.app".
     GoatCounter: створи акаунт на goatcounter.com і впиши код, напр. "extremeowen". */
  analytics: {
    plausibleDomain: "",
    goatcounter: ""
  },

  /* Куди приходять повідомлення з форми «контакти». Обери один спосіб:
     1) Telegram через Netlify Function — functionUrl нижче (потрібен деплой через Git).
        Повідомлення прилітають у Telegram; токен бота лежить у змінних середовища Netlify.
     2) Netlify Forms — netlify: true і деплой на Netlify; заявки в адмінці + email.
     3) Formspree — endpoint з formspree.io.
     4) Просто пошта — впиши email вище; кнопка відкриє поштовий клієнт.
     Якщо все порожнє — текст копіюється в буфер. */
  contact: {
    functionUrl: "", // вмикається лише якщо деплоїш через Git із функцією в netlify/functions
    netlify: true,
    formEndpoint: ""
  },

  /* Нотатки: дата, заголовок і текст (порожній рядок = новий абзац). */
  notes: [
    {
      date: "2026-03-02",
      title: { uk: "Чому я роблю PWA, а не «сайти»", en: "Why I build PWAs, not “sites”" },
      text: {
        uk: "Звичайна сторінка — це те, що закривають. Застосунок — те, що ставлять іконкою і відкривають звичкою. Браузер за останні роки підтягнув усе потрібне: сервіс-воркер, офлайн-кеш, манифест.\n\nТому мій чек-ліст простий: чи ставиться це на домашній екран і чи відкриється в ліфті без інтернету. Якщо ні — я ще не закінчив.",
        en: "A page gets closed; an app gets installed and opened out of habit. Browsers now have everything needed for that: service worker, offline cache, manifest.\n\nSo my checklist is short: can it sit on a home screen, and does it open in a lift with no signal. If not, I am not done."
      }
    },
    {
      date: "2026-02-11",
      title: { uk: "Колесо фортуни, яке стало тренуванням", en: "A wheel of fortune that became a workout app" },
      text: {
        uk: "Хотів зробити генератор випадкових вправ, а вийшов PWA з колесом, таймером, музикою з YouTube і системою XP.\n\nГоловний висновок: гейміфікація працює навіть на одній людині — на мені. Коли за тренування дають ранг, лінь стає слабшою за прогрес.",
        en: "It started as a random exercise picker; it ended up a PWA with a spinning wheel, timer, YouTube playlists and XP.\n\nThe takeaway: gamification works even for an audience of one. When a workout gives you a rank, laziness loses to progress."
      }
    },
    {
      date: "2026-01-20",
      title: { uk: "MiniBin: коли Windows не дає зручного кошика", en: "MiniBin: when Windows hides the bin" },
      text: {
        uk: "Windows дозволяє тримати кошик на робочому столі — у 2005-му. У 2026-му це виглядає як артефакт.\n\nMiniBin — tray-утиліта: іконка зі станом кошика, Shift+клік чистить, перетягування файлів працює. .NET 10, без зайвих вікон.",
        en: "Windows lets you keep the Recycle Bin on the desktop — in 2005. In 2026 it reads like an artifact.\n\nMiniBin is a tray app: an icon that shows empty/full, Shift+click to empty, drag & drop to delete. .NET 10, no extra windows."
      }
    }
  ],

  typingSpeed: 78,     // мс на символ
  holdTime: 1900,      // скільки тримати готову фразу
  statusEvery: 4200    // як часто змінюється рядок "зараз: ..."
};

/* ------------------------------------- 2. тексти UA / EN -------- */
const I18N = {
  uk: {
    pill: "вайб-кодер · завжди в релізі",
    nowLabel: "зараз",
    lede: "Роблю речі на відчуттях — половина інтуїції, половина кофеїну. Друкую менше, шиплю більше, а в проді правлю з посмішкою.",
    projectsTitle: "проєкти",
    moreProjects: "більше проєктів — на GitHub",
    aboutTitle: "про мене",
    about1: "Студент, який будує веб-речі швидше, ніж встигає їх документувати. Починав з лабораторних на HTML і CSS, зараз найбільше часу — JavaScript, PWA та дрібні утиліти.",
    about2: "Люблю, коли сторінка поводиться як застосунок: ставиться іконкою, працює офлайн, відкривається за секунду. Тому майже кожен проєкт вище — це PWA.",
    tab_home: "головна",
    tab_projects: "проєкти",
    tab_about: "про мене",
    tab_cv: "CV",
    tab_notes: "нотатки",
    tab_contact: "контакти",
    cvTitle: "резюме",
    cvLead: "Коротко: що вмію, де вчився і що вже зробив.",
    cvExperience: "проєкти й досвід",
    cvItem1Title: "LED Clock — PWA-годинник",
    cvItem1Text: "Годинник на LED-табло: будильник, таймер, власні звуки. Встановлюється на телефон, працює офлайн.",
    cvItem2Title: "Фітнес Рулетка — PWA для тренувань",
    cvItem2Text: "Колесо випадкових вправ, таймер, музика з YouTube, гейміфікація з XP і синхронізація через Firebase.",
    cvItem3Title: "MiniBin — утиліта для Windows",
    cvItem3Text: "Tray-застосунок на C#/.NET: стан кошика, очищення по Shift+кліку, перетягування файлів.",
    cvEducation: "освіта",
    cvEduWhen: "2023—2027",
    cvEduTitle: "Коледж · розробка програмного забезпечення",
    cvEduText: "Веб-технології, бази даних, ООП, C#/.NET, Flutter. Курсові та лабораторні — на GitHub.",
    cvSkills: "технології",
    gameLink: "міні-гра",
    gameHint: "Рухай мишкою або пальцем. Лови світлі крапки, уникай червоних.",
    gameStart: "Почати",
    gameRestart: "Ще раз",
    gameScore: "Очки",
    gameBest: "Рекорд",
    gameOver: "Гру закінчено",
    gameIdle: "Готовий?",
    cvPrint: "Завантажити PDF",
    notesTitle: "нотатки",
    contactTitle: "контакти",
    contactLead: "Найшвидше — Telegram. Або залиш повідомлення нижче.",
    stackTitle: "стек",
    ctaProjects: "дивитись проєкти",
    ctaContact: "написати",
    formName: "Ім'я",
    formNamePh: "Як до тебе звертатись",
    formEmail: "Пошта або телеграм",
    formEmailPh: "щоб відповісти",
    formMessage: "Повідомлення",
    formMessagePh: "Що треба зробити?",
    formSend: "Надіслати",
    formNote: "Форма ще не підключена, тому текст скопіюється — вставиш його в Telegram.",
    formEmpty: "Напиши хоч слово в повідомленні",
    formSent: "Надіслано — відпишусь незабаром",
    formError: "Не вдалось надіслати. Спробуй Telegram.",
    paletteOpen: "Швидкий перехід (Ctrl/⌘ + K)",
    palettePlaceholder: "Куди перейти? вкладка, проєкт, посилання…",
    paletteHint: "↑↓ вибір · ↵ перейти · esc закрити",
    paletteEmpty: "Нічого не знайшлось",
    paletteTab: "вкладка",
    paletteProject: "проєкт",
    filterAll: "усі",
    updatedToday: "оновлено сьогодні",
    updatedDay: "оновлено вчора",
    updatedDays: "дн. тому",
    updatedMonths: "міс. тому",
    modalRepo: "Репозиторій",
    modalDemo: "Демо",
    helpTitle: "Клавіші",
    helpPalette: "палітра команд",
    helpHelp: "ця довідка",
    helpTabs: "перемикання вкладок",
    helpGame: "міні-гра",
    helpStart: "старт / рестарт гри",
    helpClose: "закрити будь-яке вікно",
    installText: "Поставити сайт іконкою на телефон?",
    installYes: "Встановити",
    installNo: "Пізніше",
    paletteTheme: "тема",
    paletteLang: "мова",
    paletteShare: "поділитися",
    paletteCopyMail: "пошта",
    paletteGame: "гра",
    paletteLink: "посилання",
    writeTelegram: "Написати в Telegram",
    demoLabel: "демо",
    shareTitle: "extremeowen — vibe coding",
    shareText: "Мій сайт-візитка: проєкти, стек і контакти",
    shareCopied: "Посилання скопійовано",
    shareTitleBtn: "Поділитися сайтом",
    updateReady: "Є нова версія сайту",
    updateAction: "Оновити",
    footer: "зроблено на вайбі",
    emailLabel: "Email",
    stackLabel: "Стек",
    linksLabel: "Посилання",
    themeTitle: "Перемкнути тему",
    langTitle: "Switch to English",
    copyHint: "Натисни, щоб скопіювати",
    copied: "Скопійовано: ",
    copyFail: "Не вдалось скопіювати: ",
    addLink: "Додай посилання у CONFIG.links.",
    description: "Вайб-кодер. Роблю речі на відчуттях, шиплю на інстинкті."
  },
  en: {
    pill: "vibe coder · always shipping",
    nowLabel: "now",
    lede: "I build things on feel — half intuition, half caffeine. Typing less, shipping more, fixing it in prod with a smile.",
    projectsTitle: "projects",
    moreProjects: "more projects on GitHub",
    aboutTitle: "about",
    about1: "A student who builds web things faster than he documents them. Started with HTML/CSS coursework; these days it is mostly JavaScript, PWAs and small utilities.",
    about2: "I like pages that behave like apps: installable, instant, working offline. That is why almost every project above is a PWA.",
    tab_home: "home",
    tab_projects: "projects",
    tab_about: "about",
    tab_cv: "CV",
    tab_notes: "notes",
    tab_contact: "contact",
    cvTitle: "resume",
    cvLead: "Short version: what I can do, where I studied, what I built.",
    cvExperience: "projects & experience",
    cvItem1Title: "LED Clock — clock PWA",
    cvItem1Text: "LED-style clock: alarm, timer, custom sounds. Installs on a phone and works offline.",
    cvItem2Title: "Fitness Roulette — workout PWA",
    cvItem2Text: "Random exercise wheel, timer, YouTube music, XP gamification and Firebase sync.",
    cvItem3Title: "MiniBin — Windows utility",
    cvItem3Text: "C#/.NET tray app: bin state, Shift+click to empty, drag and drop files.",
    cvEducation: "education",
    cvEduWhen: "2023—2027",
    cvEduTitle: "College · software engineering",
    cvEduText: "Web technologies, databases, OOP, C#/.NET, Flutter. Coursework and labs are on GitHub.",
    cvSkills: "technologies",
    gameLink: "mini game",
    gameHint: "Move with mouse or finger. Catch light dots, avoid the red ones.",
    gameStart: "Start",
    gameRestart: "Again",
    gameScore: "Score",
    gameBest: "Best",
    gameOver: "Game over",
    gameIdle: "Ready?",
    cvPrint: "Download PDF",
    notesTitle: "notes",
    contactTitle: "contact",
    contactLead: "Telegram is fastest. Or leave a message below.",
    stackTitle: "stack",
    ctaProjects: "see projects",
    ctaContact: "say hi",
    formName: "Name",
    formNamePh: "How should I call you",
    formEmail: "Email or Telegram",
    formEmailPh: "so I can reply",
    formMessage: "Message",
    formMessagePh: "What do you need?",
    formSend: "Send",
    formNote: "The form is not connected yet — the text gets copied so you can paste it into Telegram.",
    formEmpty: "Write at least a few words",
    formSent: "Sent — I will reply soon",
    formError: "Could not send. Try Telegram instead.",
    paletteOpen: "Quick jump (Ctrl/⌘ + K)",
    palettePlaceholder: "Jump to… tab, project, link",
    paletteHint: "↑↓ select · ↵ go · esc close",
    paletteEmpty: "Nothing found",
    paletteTab: "tab",
    paletteProject: "project",
    filterAll: "all",
    updatedToday: "updated today",
    updatedDay: "updated yesterday",
    updatedDays: "days ago",
    updatedMonths: "months ago",
    modalRepo: "Repository",
    modalDemo: "Live demo",
    helpTitle: "Shortcuts",
    helpPalette: "command palette",
    helpHelp: "this help",
    helpTabs: "switch tabs",
    helpGame: "mini game",
    helpStart: "start / restart game",
    helpClose: "close any dialog",
    installText: "Add this site to your home screen?",
    installYes: "Install",
    installNo: "Later",
    paletteTheme: "theme",
    paletteLang: "language",
    paletteShare: "share",
    paletteCopyMail: "email",
    paletteGame: "game",
    paletteLink: "link",
    writeTelegram: "Message me on Telegram",
    demoLabel: "demo",
    shareTitle: "extremeowen — vibe coding",
    shareText: "My card: projects, stack and contacts",
    shareCopied: "Link copied",
    shareTitleBtn: "Share this site",
    updateReady: "A new version is available",
    updateAction: "Reload",
    footer: "made with vibe coding",
    emailLabel: "Email",
    stackLabel: "Stack",
    linksLabel: "Links",
    themeTitle: "Toggle theme",
    langTitle: "Перемкнути на українську",
    copyHint: "Click to copy",
    copied: "Copied: ",
    copyFail: "Could not copy: ",
    addLink: "Add the link in CONFIG.links.",
    description: "Vibe coder. Building things on feel, shipping on instinct."
  }
};

/* ------------------------------------------- дрібні хелпери ----- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let lang = document.documentElement.lang === "en" ? "en" : "uk";
const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.uk[key] || key;
const pick = (value) => {
  if (typeof value === "string") return value;
  if (!value) return "";
  return value[lang] ?? value.uk ?? Object.values(value)[0] ?? "";
};

/* --------------------------------------------- 3. тема ---------- */
const themeBtn = $("#themeToggle");
const themeMeta = $("#themeColor");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
let savedTheme = null;

try {
  const stored = localStorage.getItem("theme");
  savedTheme = stored === "dark" || stored === "light" ? stored : null;
} catch (e) {}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  if (themeMeta) themeMeta.content = theme === "dark" ? "#0a0a0c" : "#f5f5f7";
  themeBtn.setAttribute("aria-label", t("themeTitle"));
  themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
}

applyTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");

themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  savedTheme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
  applyTheme(next);
});

systemDark.addEventListener?.("change", (event) => {
  if (!savedTheme) applyTheme(event.matches ? "dark" : "light");
});

/* --------------------------------------------- 4. мова ---------- */
const langBtn = $("#langToggle");

function applyLanguage(next) {
  lang = next === "en" ? "en" : "uk";
  document.documentElement.lang = lang;
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {}

  $$("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  $$("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAria));
  });

  const title = `${CONFIG.name} — vibe coding`;
  document.title = title;
  $$('meta[name="description"]').forEach((m) => (m.content = t("description")));
  $$('meta[property="og:description"]').forEach((m) => (m.content = t("description")));
  $$('meta[name="twitter:description"]').forEach((m) => (m.content = t("description")));
  $$('meta[property="og:title"], meta[name="twitter:title"]').forEach((m) => (m.content = title));

  langBtn.textContent = lang === "uk" ? "EN" : "UK";
  langBtn.title = t("langTitle");
  langBtn.setAttribute("aria-label", t("langTitle"));
  themeBtn.setAttribute("aria-label", t("themeTitle"));

  // назви вкладок
  // назви у верхніх вкладках (у нижній навігації текст живе в <span data-i18n>)
  $$(".tabs > .tab").forEach((tab) => {
    tab.textContent = t(`tab_${tab.dataset.tab}`);
  });

  const shareBtn = $("#shareBtn");
  if (shareBtn) {
    shareBtn.setAttribute("aria-label", t("shareTitleBtn"));
    shareBtn.title = t("shareTitleBtn");
  }

  const paletteInput = $("#paletteInput");
  if (paletteInput) paletteInput.placeholder = t("palettePlaceholder");

  const paletteToggle = $("#paletteToggle");
  if (paletteToggle) {
    paletteToggle.setAttribute("aria-label", t("paletteOpen"));
    paletteToggle.title = t("paletteOpen");
  }

  const emailLink = $("#emailLink");
  if (emailLink && CONFIG.email) emailLink.title = `${t("copyHint")}: ${CONFIG.email}`;

  renderFilters();
  renderProjects();
  renderNotes();
  startTypewriter();
  startStatus();
  moveIndicator();
  updateTitle(currentTabFromHash());
}

langBtn.addEventListener("click", () => applyLanguage(lang === "uk" ? "en" : "uk"));

/* ------------------------- 5. посилання, копіювання, тост ----- */
function normalizeLink(raw, key) {
  let url = String(raw || "").trim();
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (key === "telegram" || url.startsWith("@")) return "https://t.me/" + url.replace(/^@/, "");
  if (key === "github") return "https://github.com/" + url.replace(/^@/, "");
  return "";
}

function showToast(message, action) {
  let el = $("#toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");
    document.body.appendChild(el);
  }

  el.replaceChildren();

  const text = document.createElement("span");
  text.textContent = message;
  el.appendChild(text);

  if (action && action.label && typeof action.onClick === "function") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "toast-action";
    button.textContent = action.label;
    button.addEventListener("click", () => {
      el.classList.remove("show");
      action.onClick();
    });
    el.appendChild(button);
  }

  el.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => el.classList.remove("show"), action ? 9000 : 2200);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(t("copied") + text);
    return;
  } catch (e) {
    /* деякі браузери не дають clipboard API без https — пробуємо старий спосіб */
  }

  const area = document.createElement("textarea");
  area.value = text;
  area.style.cssText = "position:fixed;top:0;left:0;opacity:0;";
  document.body.appendChild(area);
  area.select();
  try {
    document.execCommand("copy");
    showToast(t("copied") + text);
  } catch (e) {
    showToast(t("copyFail") + text);
  }
  area.remove();
}

function initLinks() {
  $$("[data-link]").forEach((a) => {
    const key = a.dataset.link;
    if (key === "email") return;

    const raw = CONFIG.links[key];
    const url = normalizeLink(raw, key);

    if (url) {
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      return;
    }

    if (raw) {
      const handle = String(raw).trim();
      a.href = "#";
      a.title = `${t("copyHint")}: ${handle}`;
      a.addEventListener("click", (event) => {
        event.preventDefault();
        copyToClipboard(handle);
      });
      return;
    }

    a.href = "#";
    a.title = t("addLink") + key;
    a.addEventListener("click", (event) => event.preventDefault());
  });

  const emailLink = $("#emailLink");
  if (emailLink) {
    if (CONFIG.email) {
      emailLink.hidden = false;
      emailLink.title = `${t("copyHint")}: ${CONFIG.email}`;
      emailLink.addEventListener("click", (event) => {
        event.preventDefault();
        copyToClipboard(CONFIG.email);
      });
    } else {
      emailLink.hidden = true;
    }
  }

  // «більше проєктів — на GitHub»
  const moreLink = $("#moreProjects");
  if (moreLink) {
    const fromConfig = CONFIG.moreProjectsUrl || "";
    const profile = normalizeLink(CONFIG.links.github, "github");
    const url = fromConfig || (profile ? profile.replace(/\/$/, "") + "?tab=repositories" : "");
    if (url) {
      moreLink.href = url;
      moreLink.hidden = false;
    } else {
      moreLink.hidden = true;
    }
  }

  // кнопка «Написати в Telegram» у контактах
  const tgLink = $("#tgContact");
  if (tgLink) {
    const tgUrl = normalizeLink(CONFIG.links.telegram, "telegram");
    if (tgUrl) {
      tgLink.href = tgUrl;
      tgLink.hidden = false;
    } else {
      tgLink.hidden = true;
    }
  }
}

/* ------------------------------------------- 6. аватар --------- */
function initAvatar() {
  const box = $("#avatar");
  const img = $("#avatarImg");
  if (!box || !img) return;

  if (CONFIG.avatar) {
    img.addEventListener("load", () => box.classList.add("has-photo"));
    img.addEventListener("error", () => {
      img.removeAttribute("src");
      box.classList.remove("has-photo");
    });
    img.src = CONFIG.avatar;
  }

  // легкий 3D-нахил за курсором (тільки мишка, не тач)
  if (reduceMotion.matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  box.addEventListener("pointermove", (event) => {
    const rect = box.getBoundingClientRect();
    const dx = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const dy = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    box.style.transform =
      `perspective(700px) rotateX(${(-dy * 8).toFixed(2)}deg) rotateY(${(dx * 8).toFixed(2)}deg) scale(1.03)`;
  });

  box.addEventListener("pointerleave", () => {
    box.style.transform = "";
  });
}

/* ------------------------------------------- 7. анімації -------- */
let twGeneration = 0;

function startTypewriter() {
  const el = $("#typed");
  if (!el) return;

  const generation = ++twGeneration;
  const phrases = (CONFIG.phrases[lang] || CONFIG.phrases.uk).slice();
  if (!phrases.length) return;

  if (reduceMotion.matches) {
    el.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;
  el.textContent = "";

  const tick = () => {
    if (generation !== twGeneration) return; // мову перемкнули — стара анімація не потрібна
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      charIndex++;
      el.textContent = phrase.slice(0, charIndex);
      if (charIndex >= phrase.length) {
        deleting = true;
        return setTimeout(tick, CONFIG.holdTime);
      }
      return setTimeout(tick, CONFIG.typingSpeed + Math.random() * 55);
    }

    charIndex--;
    el.textContent = phrase.slice(0, charIndex);
    if (charIndex <= 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      return setTimeout(tick, 320);
    }
    setTimeout(tick, 38 + Math.random() * 30);
  };

  setTimeout(tick, 520);
}

let statusGeneration = 0;

function startStatus() {
  const el = $("#statusText");
  if (!el) return;

  const generation = ++statusGeneration;
  const list = CONFIG.statuses[lang] || [];
  if (!list.length) {
    el.textContent = "";
    return;
  }

  let index = Math.floor(Math.random() * list.length);
  el.textContent = list[index];
  index = (index + 1) % list.length;

  if (reduceMotion.matches) return;

  const loop = () => {
    if (generation !== statusGeneration) return;
    el.style.opacity = "0";
    setTimeout(() => {
      if (generation !== statusGeneration) return;
      el.textContent = list[index];
      index = (index + 1) % list.length;
      el.style.opacity = "";
    }, 300);
    setTimeout(loop, CONFIG.statusEvery);
  };

  setTimeout(loop, CONFIG.statusEvery);
}

/* ------------------------------------------- проєкти ------------ */
const ARROW_SVG =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
  'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';

const projectState = { filter: "all", stats: {} };

function repoSlug(url) {
  const m = String(url || "").match(/github\.com\/([^/]+)\/([^/?#]+)/i);
  return m ? `${m[1]}/${m[2]}` : "";
}

function relativeTime(iso) {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const days = Math.round(diff / 86400000);
  if (days <= 0) return t("updatedToday");
  if (days === 1) return t("updatedDay");
  if (days < 30) return `${days} ${t("updatedDays")}`;
  const months = Math.round(days / 30);
  return `${months} ${t("updatedMonths")}`;
}

function renderProjects() {
  const grid = $("#projectGrid");
  if (!grid) return;
  grid.replaceChildren();

  const all = CONFIG.projects;
  const projects = projectState.filter === "all" ? all : all.filter((p) => (p.tags || []).includes(projectState.filter));

  projects.forEach((project) => {
    const url = normalizeLink(project.url, "project") || project.url || "";
    const demo = normalizeLink(project.demo, "project") || project.demo || "";
    const stats = projectState.stats[repoSlug(url)];

    const card = document.createElement("div");
    card.className = "card";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", pick(project.name));

    if (project.shot) {
      const shot = document.createElement("img");
      shot.className = "card-shot";
      shot.src = project.shot;
      shot.alt = "";
      shot.loading = "lazy";
      shot.decoding = "async";
      card.appendChild(shot);
    } else {
      const placeholder = document.createElement("div");
      placeholder.className = "card-shot card-shot-ph";
      placeholder.setAttribute("aria-hidden", "true");
      placeholder.textContent = pick(project.name)
        .split(/\s+/)
        .map((part) => part[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();
      card.appendChild(placeholder);
    }

    const name = document.createElement("div");
    name.className = "name";

    const title = document.createElement("span");
    title.textContent = pick(project.name);
    name.appendChild(title);
    if (url) name.insertAdjacentHTML("beforeend", ARROW_SVG);

    const desc = document.createElement("p");
    desc.className = "desc";
    desc.textContent = pick(project.desc);

    if (stats && (stats.stars || stats.language)) {
      const meta = document.createElement("div");
      meta.className = "card-stats";

      if (stats.stars) {
        const stars = document.createElement("span");
        stars.textContent = `★ ${stats.stars}`;
        meta.appendChild(stars);
      }

      if (stats.language) {
        if (meta.childNodes.length) {
          const sep = document.createElement("span");
          sep.className = "dot-sep";
          sep.textContent = "·";
          meta.appendChild(sep);
        }
        const lang = document.createElement("span");
        lang.textContent = stats.language;
        meta.appendChild(lang);
      }

      if (stats.pushed_at) {
        const sep = document.createElement("span");
        sep.className = "dot-sep";
        sep.textContent = "·";
        meta.appendChild(sep);

        const updated = document.createElement("span");
        updated.textContent = relativeTime(stats.pushed_at);
        meta.appendChild(updated);
      }

      card.appendChild(meta);
    }

    const tags = document.createElement("div");
    tags.className = "tags";
    (project.tags || []).forEach((tag) => {
      const chip = document.createElement("span");
      chip.textContent = tag;
      tags.appendChild(chip);
    });

    const foot = document.createElement("div");
    foot.className = "card-foot";
    foot.appendChild(tags);

    if (demo) {
      const demoLink = document.createElement("a");
      demoLink.className = "card-demo";
      demoLink.href = demo;
      demoLink.target = "_blank";
      demoLink.rel = "noopener noreferrer";
      demoLink.textContent = `${t("demoLabel")} ↗`;
      demoLink.addEventListener("click", (event) => event.stopPropagation());
      foot.appendChild(demoLink);
    }

    card.append(name, desc, foot);

    const open = () => openProjectModal(project);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });

    grid.appendChild(card);
  });
}

/* ---------------------------------- фільтри + модалка ---------- */
function renderFilters() {
  const host = $("#projectFilters");
  if (!host) return;
  host.replaceChildren();

  const tags = [...new Set(CONFIG.projects.flatMap((p) => p.tags || []))].slice(0, 6);
  const options = [{ key: "all", label: t("filterAll") }, ...tags.map((tag) => ({ key: tag, label: tag }))];

  options.forEach((option) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = option.label;
    chip.setAttribute("aria-pressed", String(projectState.filter === option.key));
    chip.addEventListener("click", () => {
      projectState.filter = option.key;
      renderFilters();
      renderProjects();
    });
    host.appendChild(chip);
  });
}

function openProjectModal(project) {
  const modal = $("#projectModal");
  if (!modal) return;

  const shot = $("#projectModalShot");
  const title = $("#projectModalTitle");
  const desc = $("#projectModalDesc");
  const tags = $("#projectModalTags");
  const repo = $("#projectModalRepo");
  const demo = $("#projectModalDemo");

  if (project.shot) {
    shot.src = project.shot;
    shot.hidden = false;
  } else {
    shot.removeAttribute("src");
    shot.hidden = true;
  }

  title.textContent = pick(project.name);
  desc.textContent = pick(project.desc);

  tags.replaceChildren();
  (project.tags || []).forEach((tag) => {
    const chip = document.createElement("span");
    chip.textContent = tag;
    tags.appendChild(chip);
  });

  const repoUrl = normalizeLink(project.url, "project") || project.url || "";
  const demoUrl = normalizeLink(project.demo, "project") || project.demo || "";

  repo.hidden = !repoUrl;
  if (repoUrl) repo.href = repoUrl;

  demo.hidden = !demoUrl;
  if (demoUrl) demo.href = demoUrl;

  modal.hidden = false;
  document.body.style.overflow = "hidden";
  lastFocused = document.activeElement;
  const close = modal.querySelector(".modal-close");
  if (close) close.focus();
}

function closeProjectModal() {
  const modal = $("#projectModal");
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

/* ---------------------------------- статистика GitHub ---------- */
async function loadRepoStats() {
  const CACHE_KEY = "repoStats";
  const TTL = 6 * 60 * 60 * 1000;

  try {
    const cached = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");
    if (cached && Date.now() - cached.at < TTL) {
      projectState.stats = cached.data || {};
      renderProjects();
      return;
    }
  } catch (e) {}

  const names = [...new Set(CONFIG.projects.map((p) => repoSlug(p.url)).filter(Boolean).map((s) => s.split("/")[1]))];
  if (!names.length) return;

  try {
    const response = await fetch("https://api.github.com/users/extremeowen/repos?per_page=100&sort=pushed", {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) return;

    const repos = await response.json();
    const data = {};
    repos.forEach((repo) => {
      if (!names.includes(repo.name)) return;
      data[`${repo.owner.login}/${repo.name}`] = {
        stars: repo.stargazers_count,
        language: repo.language,
        pushed_at: repo.pushed_at,
      };
    });

    projectState.stats = data;
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data }));
    } catch (e) {}
    renderProjects();
  } catch (e) {
    /* офлайн або ліміт API — просто без статистики */
  }
}

/* ------------------------------------------- частинки ----------- */
function initParticles() {
  const canvas = $("#bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  let width = 0;
  let height = 0;
  let dots = [];
  let mouse = { x: 0, y: 0, tx: 0, ty: 0 };

  const themeIsDark = () => document.documentElement.dataset.theme === "dark";
  const pickColor = () => (themeIsDark() ? "255, 255, 255" : "0, 0, 0");
  const tone = () => (themeIsDark() ? 1 : 0.72);

  function seed() {
    const count = Math.max(24, Math.min(84, Math.round((width * height) / 28000)));
    dots = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.2 + 0.45,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      a: Math.random() * 0.42 + 0.22,
      depth: Math.random() * 0.7 + 0.3,
      tw: Math.random() * Math.PI * 2,
      tws: Math.random() * 0.012 + 0.004
    }));
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    seed();
  }

  function paintDot(x, y, radius, alpha) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(" + pickColor() + "," + alpha.toFixed(3) + ")";
    ctx.fill();
  }

  function frame() {
    mouse.x += (mouse.tx - mouse.x) * 0.05;
    mouse.y += (mouse.ty - mouse.y) * 0.05;
    ctx.clearRect(0, 0, width, height);

    const color = pickColor();
    const factor = tone();

    for (const dot of dots) {
      dot.x += dot.vx;
      dot.y += dot.vy;
      dot.tw += dot.tws;

      if (dot.x < -20) dot.x = width + 20;
      if (dot.x > width + 20) dot.x = -20;
      if (dot.y < -20) dot.y = height + 20;
      if (dot.y > height + 20) dot.y = -20;

      const px = dot.x - mouse.x * 14 * dot.depth;
      const py = dot.y - mouse.y * 14 * dot.depth;
      const alpha = Math.max(0.05, dot.a * factor * (0.6 + 0.4 * Math.sin(dot.tw)));

      ctx.beginPath();
      ctx.arc(px, py, dot.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + color + "," + alpha.toFixed(3) + ")";
      ctx.fill();
    }

    requestAnimationFrame(frame);
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener(
    "pointermove",
    (event) => {
      mouse.tx = (event.clientX / width - 0.5) * 2;
      mouse.ty = (event.clientY / height - 0.5) * 2;
    },
    { passive: true }
  );

  resize();

  if (reduceMotion.matches) {
    ctx.clearRect(0, 0, width, height);
    dots.forEach((dot) => paintDot(dot.x, dot.y, dot.r, dot.a * tone()));
    return;
  }

  requestAnimationFrame(frame);
}

/* --------------------------------------- 8. вкладки / роутер ---- */
const TAB_IDS = ["home", "projects", "about", "cv", "notes", "contact"];

function currentTabFromHash() {
  const id = (location.hash || "").replace(/^#/, "").toLowerCase();
  return TAB_IDS.includes(id) ? id : "home";
}

function updateTitle(tabId) {
  document.title = `${CONFIG.name} — ${t(`tab_${tabId}`)}`;
}

function moveIndicator() {
  const indicator = $("#tabIndicator");
  const active = $('.tab[aria-selected="true"]');
  if (!indicator || !active) return;
  indicator.style.width = `${active.offsetWidth}px`;
  indicator.style.transform = `translateX(${active.offsetLeft}px)`;
}

let activeTabId = null;

function activateTab(id, { updateHash = true, scroll = true } = {}) {
  if (!TAB_IDS.includes(id)) id = "home";

  const previous = activeTabId;

  $$(".tab").forEach((tab) => {
    const active = tab.dataset.tab === id;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
  });

  $$(".panel").forEach((panel) => {
    const active = panel.dataset.panel === id;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;

    if (!active) return;

    // напрямок анімації: вліво/вправо залежно від порядку вкладок
    panel.classList.remove("from-left", "from-right");
    if (previous && previous !== id) {
      const toRight = TAB_IDS.indexOf(id) > TAB_IDS.indexOf(previous);
      panel.classList.add(toRight ? "from-right" : "from-left");
    }
  });

  activeTabId = id;

  moveIndicator();
  updateTitle(id);

  if (updateHash && location.hash !== `#${id}`) {
    history.pushState(null, "", `#${id}`);
  }

  if (scroll) window.scrollTo({ top: 0, behavior: "auto" });
}

function initTabs() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab.dataset.tab));

    tab.addEventListener("keydown", (event) => {
      const index = TAB_IDS.indexOf(tab.dataset.tab);
      let next = null;

      if (event.key === "ArrowRight") next = (index + 1) % TAB_IDS.length;
      if (event.key === "ArrowLeft") next = (index - 1 + TAB_IDS.length) % TAB_IDS.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = TAB_IDS.length - 1;
      if (next === null) return;

      event.preventDefault();
      $(`#tab-${TAB_IDS[next]}`).focus();
      activateTab(TAB_IDS[next]);
    });
  });

  window.addEventListener("hashchange", () => activateTab(currentTabFromHash(), { updateHash: false }));
  window.addEventListener("resize", moveIndicator);

  activateTab(currentTabFromHash(), { updateHash: false, scroll: false });
}

function initSwipe() {
  const page = $(".page");
  if (!page) return;

  let startX = 0;
  let startY = 0;
  let tracking = false;

  page.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse") return;
    const tag = (event.target.tagName || "").toLowerCase();
    if (["input", "textarea", "select", "a", "button"].includes(tag)) return;
    startX = event.clientX;
    startY = event.clientY;
    tracking = true;
  });

  page.addEventListener("pointerup", (event) => {
    if (!tracking) return;
    tracking = false;

    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) < 64 || Math.abs(dx) < Math.abs(dy) * 1.4) return;

    const index = TAB_IDS.indexOf(currentTabFromHash());
    const next = dx < 0 ? index + 1 : index - 1;
    if (next < 0 || next >= TAB_IDS.length) return;
    activateTab(TAB_IDS[next]);
  });
}

/* ------------------------------------- 9. командна палітра ------ */
function paletteItems() {
  const items = TAB_IDS.map((id) => ({
    label: t(`tab_${id}`),
    kicker: t("paletteTab"),
    action: () => activateTab(id),
  }));

  CONFIG.projects.forEach((project) => {
    const url = project.url || "";
    items.push({
      label: pick(project.name),
      kicker: t("paletteProject"),
      action: () => {
        if (url) window.open(url, "_blank", "noopener");
        else activateTab("projects");
      },
    });
  });

  ["github", "telegram"].forEach((key) => {
    const url = normalizeLink(CONFIG.links[key], key);
    if (!url) return;
    items.push({
      label: key === "github" ? "GitHub" : "Telegram",
      kicker: t("paletteLink"),
      action: () => window.open(url, "_blank", "noopener"),
    });
  });

  if (CONFIG.email) {
    items.push({
      label: CONFIG.email,
      kicker: t("paletteLink"),
      action: () => copyToClipboard(CONFIG.email),
    });
  }

  items.push({
    label: t("gameLink"),
    kicker: t("paletteGame"),
    action: () => {
      const link = $("#gameLink");
      if (link) link.click();
    },
  });

  // команди-дії
  items.push({
    label: t("themeTitle"),
    kicker: t("paletteTheme"),
    action: () => {
      const themeBtn = $("#themeToggle");
      if (themeBtn) themeBtn.click();
    },
  });

  items.push({
    label: t("langTitle"),
    kicker: t("paletteLang"),
    action: () => {
      const langBtn = $("#langToggle");
      if (langBtn) langBtn.click();
    },
  });

  items.push({
    label: t("shareTitleBtn"),
    kicker: t("paletteShare"),
    action: () => {
      const shareBtn = $("#shareBtn");
      if (shareBtn) shareBtn.click();
    },
  });

  return items;
}

function initPalette() {
  const root = $("#palette");
  const input = $("#paletteInput");
  const list = $("#paletteList");
  if (!root || !input || !list) return;

  let items = [];
  let active = 0;

  const filtered = () => {
    const query = input.value.trim().toLowerCase();
    return items.filter((item) => item.label.toLowerCase().includes(query));
  };

  const render = () => {
    const results = filtered();
    active = Math.min(active, Math.max(0, results.length - 1));
    list.replaceChildren();

    if (!results.length) {
      const empty = document.createElement("li");
      empty.className = "palette-empty";
      empty.textContent = t("paletteEmpty");
      list.appendChild(empty);
      return;
    }

    results.forEach((item, index) => {
      const li = document.createElement("li");
      li.className = "palette-item";
      li.setAttribute("role", "option");
      li.setAttribute("aria-selected", String(index === active));

      const label = document.createElement("span");
      label.textContent = item.label;

      const kicker = document.createElement("span");
      kicker.className = "kicker";
      kicker.textContent = item.kicker;

      li.append(label, kicker);
      li.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        closePalette();
        item.action();
      });
      list.appendChild(li);
    });
  };

  const openPalette = () => {
    items = paletteItems();
    active = 0;
    input.value = "";
    render();
    root.hidden = false;
    document.body.style.overflow = "hidden";
    setTimeout(() => input.focus(), 10);
  };

  const closePalette = () => {
    root.hidden = true;
    document.body.style.overflow = "";
  };

  const runActive = () => {
    const item = filtered()[active];
    if (!item) return;
    closePalette();
    item.action();
  };

  input.addEventListener("input", () => {
    active = 0;
    render();
  });

  input.addEventListener("keydown", (event) => {
    const count = filtered().length;

    if (event.key === "Escape") {
      event.preventDefault();
      closePalette();
    } else if (event.key === "ArrowDown" && count) {
      event.preventDefault();
      active = (active + 1) % count;
      render();
    } else if (event.key === "ArrowUp" && count) {
      event.preventDefault();
      active = (active - 1 + count) % count;
      render();
    } else if (event.key === "Enter") {
      event.preventDefault();
      runActive();
    }
  });

  root.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-palette-close")) closePalette();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      root.hidden ? openPalette() : closePalette();
    }
    if (event.key === "Escape" && !root.hidden) closePalette();
  });

  const controls = $(".controls");
  if (controls) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "ghost ghost-text";
    button.id = "paletteToggle";
    button.textContent = /Mac|iPhone|iPad/.test(navigator.platform || "") ? "⌘K" : "Ctrl K";
    button.setAttribute("aria-label", t("paletteOpen"));
    button.title = t("paletteOpen");
    button.addEventListener("click", openPalette);
    controls.insertBefore(button, controls.firstChild);
  }
}

/* -------------------------------------------- нотатки ---------- */
function renderNotes() {
  const host = $("#notesList");
  if (!host) return;
  host.replaceChildren();

  (CONFIG.notes || []).forEach((note) => {
    const article = document.createElement("article");
    article.className = "note";

    const time = document.createElement("time");
    time.dateTime = note.date || "";
    time.textContent = note.date || "";

    const title = document.createElement("h3");
    title.textContent = pick(note.title);

    article.append(time, title);

    String(pick(note.text) || "")
      .split(/\n{2,}/)
      .forEach((chunk) => {
        const p = document.createElement("p");
        p.textContent = chunk.trim();
        article.appendChild(p);
      });

    host.appendChild(article);
  });
}

/* ------------------------------------------- контакти ---------- */
function initContact() {
  const form = $("#contactForm");
  if (!form) return;

  const note = $("#formNote");
  const functionUrl = String(CONFIG.contact.functionUrl || "").trim();
  const useNetlify = Boolean(CONFIG.contact.netlify);
  const endpoint = String(CONFIG.contact.formEndpoint || "").trim();
  const hasChannel = Boolean(functionUrl) || useNetlify || Boolean(endpoint) || Boolean(CONFIG.email);

  // якщо канал є — підказка «текст скопіюється» більше не потрібна
  if (note) note.hidden = hasChannel;

  // пересилання в Telegram через Netlify Function (токен на сервері)
  const sendToFunction = async () => {
    const data = new FormData(form);
    const response = await fetch(functionUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: String(data.get("name") || ""),
        contact: String(data.get("email") || ""),
        message: String(data.get("message") || ""),
        "bot-field": String(data.get("bot-field") || ""),
      }),
    });
    if (!response.ok) throw new Error(String(response.status));
  };

  const sendNetlify = async () => {
    const body = new URLSearchParams();
    new FormData(form).forEach((value, key) => body.append(key, String(value)));
    body.set("form-name", "contact");

    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });
    if (!response.ok) throw new Error(String(response.status));
  };

  const sendFormspree = async () => {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    if (!response.ok) throw new Error(String(response.status));
  };

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const message = form.elements.message.value.trim();
    if (!message) {
      showToast(t("formEmpty"));
      form.elements.message.focus();
      return;
    }

    const name = form.elements.name.value.trim();
    const contact = form.elements.email.value.trim();

    if (functionUrl || useNetlify || endpoint) {
      const button = form.querySelector(".submit");
      button.disabled = true;
      try {
        let sent = false;

        // 1) Telegram через функцію (якщо вже задеплоєна)
        if (functionUrl) {
          try {
            await sendToFunction();
            sent = true;
          } catch (error) {
            /* функція ще не задеплоєна — падаємо далі, на Netlify Forms */
          }
        }

        // 2) Netlify Forms
        if (!sent && useNetlify) {
          await sendNetlify();
          sent = true;
        }

        // 3) Formspree
        if (!sent && endpoint) {
          await sendFormspree();
          sent = true;
        }

        if (!sent) throw new Error("no channel");

        form.reset();
        showToast(t("formSent"));
        celebrate();
      } catch (error) {
        showToast(t("formError"));
      } finally {
        button.disabled = false;
      }
      return;
    }

    const composed = [message, "", name ? `${t("formName")}: ${name}` : "", contact ? `${t("formEmail")}: ${contact}` : ""]
      .filter(Boolean)
      .join("\n");

    if (CONFIG.email) {
      const subject = encodeURIComponent(`Повідомлення з сайту — ${CONFIG.name}`);
      location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${encodeURIComponent(composed)}`;
      return;
    }

    await copyToClipboard(composed);
  });
}

/* ------------------------------------------- 9. «вгору» --------- */
function initBackToTop() {
  const button = $("#toTop");
  if (!button) return;

  let ticking = false;
  const update = () => {
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    // на коротких сторінках поріг нижчий, інакше кнопка ніколи не з'явиться
    const limit = Math.min(480, Math.max(180, maxScroll * 0.25));
    const show = maxScroll > 120 && window.scrollY > limit;
    button.hidden = false; // тримаємо в DOM, керуємо класом
    button.classList.toggle("is-visible", show);
    button.tabIndex = show ? 0 : -1;
    button.setAttribute("aria-hidden", String(!show));
    document.body.classList.toggle("is-scrolled", window.scrollY > 6);
    ticking = false;
  };

  button.hidden = false;
  update();

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    },
    { passive: true }
  );

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? "auto" : "smooth" });
  });
}

/* ------------------------------- 10. світлова пляма за курсором - */
function initCursorGlow() {
  const glow = $("#cursorGlow");
  if (!glow) return;
  if (reduceMotion.matches) return;
  if (!window.matchMedia("(pointer: fine)").matches) return;

  let x = window.innerWidth / 2;
  let y = window.innerHeight / 2;
  let tx = x;
  let ty = y;
  let active = false;

  window.addEventListener(
    "pointermove",
    (event) => {
      tx = event.clientX;
      ty = event.clientY;
      if (!active) {
        active = true;
        glow.classList.add("is-on");
      }
    },
    { passive: true }
  );

  const loop = () => {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    glow.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

/* --------------------------------------- 11. пасхалка ----------- */
function initEasterEgg() {
  const CODE = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"
  ];
  let index = 0;
  let busy = false;

  const fire = () => {
    if (busy) return;
    busy = true;
    document.body.classList.add("glitch");
    showToast("vibe overload ✦");

    setTimeout(() => {
      document.body.classList.remove("glitch");
      busy = false;
    }, 1600);
  };

  window.addEventListener("keydown", (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (key === CODE[index]) {
      index += 1;
      if (index === CODE.length) {
        index = 0;
        fire();
      }
      return;
    }
    index = key === CODE[0] ? 1 : 0;
  });

  // на телефоні Konami не набрати — хай буде потрійний клік по ніку
  const name = document.querySelector("h1");
  if (name) {
    let clicks = 0;
    let timer;
    name.addEventListener("click", () => {
      clicks += 1;
      clearTimeout(timer);
      timer = setTimeout(() => (clicks = 0), 700);
      if (clicks >= 3) {
        clicks = 0;
        fire();
      }
    });
  }
}

/* --------------------------------------- 12. аналітика ---------- */
function initAnalytics() {
  const { plausibleDomain, goatcounter } = CONFIG.analytics || {};
  const isHttp = location.protocol === "http:" || location.protocol === "https:";
  if (!isHttp) return; // локально з file:// сенсу немає

  if (plausibleDomain) {
    const script = document.createElement("script");
    script.defer = true;
    script.src = "https://plausible.io/js/script.js";
    script.dataset.domain = plausibleDomain;
    document.head.appendChild(script);
    return;
  }

  if (goatcounter) {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://gc.zgo.at/count.js";
    script.dataset.goatcounter = `https://${goatcounter}.goatcounter.com/count`;
    document.head.appendChild(script);
  }
}

/* ---------------------------------- 12.4 бейдж Netlify --------- */
/* Netlify інколи підсовує плашку «Powered by Netlify» (drawer для власника
   сайту або бейдж drag&drop-деплою). Ховаємо її, якщо вона з'явилась у DOM. */
function initNetlifyBadgeCleaner() {
  const selectors = [
    "#netlify-badge",
    ".netlify-badge",
    "[data-netlify-badge]",
    'iframe[src*="netlify.com"]',
    'iframe[src*="netlify.app"]',
  ];

  const hide = () => {
    document.querySelectorAll(selectors.join(",")).forEach((el) => {
      el.style.setProperty("display", "none", "important");
    });

    document.querySelectorAll("a, div, iframe, button").forEach((el) => {
      const text = (el.textContent || "").trim().toLowerCase();
      if (text === "powered by netlify" || text === "deploy with netlify") {
        el.style.setProperty("display", "none", "important");
      }
    });
  };

  hide();

  // Netlify може додати бейдж пізніше — стежимо за DOM
  const observer = new MutationObserver(hide);
  observer.observe(document.body, { childList: true, subtree: true });
}

/* ---------------------------------- 12.7 друк CV у PDF ---------- */
function initCvPrint() {
  const button = $("#cvPrint");
  if (!button) return;
  button.addEventListener("click", () => window.print());
}

/* ---------------------------------- 12.5 поділитися сайтом ----- */
function initShare() {
  const button = $("#shareBtn");
  if (!button) return;

  const shareUrl = () => location.origin + location.pathname;

  button.addEventListener("click", async () => {
    const data = {
      title: t("shareTitle"),
      text: t("shareText"),
      url: shareUrl(),
    };

    if (navigator.share) {
      try {
        await navigator.share(data);
        return;
      } catch (error) {
        if (error && error.name === "AbortError") return; // користувач передумав
      }
    }

    await copyToClipboard(data.url);
  });
}

/* ---------------------------------- 12.6 «є нова версія» ------- */
function watchServiceWorkerUpdates(registration) {
  const showUpdate = () => {
    if (!registration.waiting || !navigator.serviceWorker.controller) return;
    showToast(t("updateReady"), {
      label: t("updateAction"),
      onClick: () => {
        registration.waiting.postMessage("SKIP_WAITING");
      },
    });
  };

  showUpdate();

  registration.addEventListener("updatefound", () => {
    const installing = registration.installing;
    if (!installing) return;
    installing.addEventListener("statechange", () => {
      if (installing.state === "installed") showUpdate();
    });
  });

  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (reloading) return;
    reloading = true;
    location.reload();
  });
}

/* --------------------------------------- 13. PWA (офлайн) ------- */
function initServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (location.protocol !== "http:" && location.protocol !== "https:") return; // file:// не підтримує

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then((registration) => {
        watchServiceWorkerUpdates(registration);
        // раз на годину перевіряємо, чи не вийшла нова версія
        setInterval(() => registration.update().catch(() => {}), 60 * 60 * 1000);
      })
      .catch(() => {
        /* якщо не вдалось — сайт просто працює як звичайна сторінка */
      });
  });
}

/* ------------------------------- 12.7b оверлеї, довідка -------- */
let lastFocused = null;

function overlayFocusables(root) {
  return [...root.querySelectorAll('a[href], button:not([disabled]), input:not([type="hidden"]), textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((el) => el.offsetParent !== null);
}

function initOverlayKeys() {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const open = ["#projectModal", "#help", "#game", "#palette"]
      .map((sel) => $(sel))
      .filter((el) => el && !el.hidden)
      .pop();
    if (!open) return;

    const items = overlayFocusables(open);
    if (!items.length) return;

    const first = items[0];
    const last = items[items.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
}

function initProjectsUi() {
  renderFilters();
  renderProjects();
  loadRepoStats();

  const modal = $("#projectModal");
  if (modal) {
    modal.addEventListener("click", (event) => {
      if (event.target.hasAttribute("data-modal-close")) closeProjectModal();
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal && !modal.hidden) closeProjectModal();
  });
}

function initHelp() {
  const help = $("#help");
  if (!help) return;

  const open = () => {
    help.hidden = false;
    document.body.style.overflow = "hidden";
    const close = help.querySelector(".modal-close");
    if (close) close.focus();
  };

  const close = () => {
    help.hidden = true;
    document.body.style.overflow = "";
  };

  help.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-help-close")) close();
  });

  document.addEventListener("keydown", (event) => {
    const tag = (event.target.tagName || "").toLowerCase();
    const typing = tag === "input" || tag === "textarea";

    if (event.key === "Escape" && !help.hidden) close();

    if (event.key === "?" && !typing && help.hidden) {
      event.preventDefault();
      open();
    }

    if (event.key.toLowerCase() === "g" && !typing && help.hidden) {
      const gameLink = $("#gameLink");
      const game = $("#game");
      if (gameLink && game && game.hidden) {
        event.preventDefault();
        gameLink.click();
      }
    }
  });
}

function initInstallPrompt() {
  const banner = $("#installBanner");
  if (!banner) return;

  let deferred = null;
  let dismissed = false;
  try {
    dismissed = localStorage.getItem("installDismissed") === "1";
  } catch (e) {}

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferred = event;
    if (!dismissed) banner.hidden = false;
  });

  const yes = $("#installYes");
  if (yes) {
    yes.addEventListener("click", async () => {
      banner.hidden = true;
      if (!deferred) return;
      deferred.prompt();
      await deferred.userChoice.catch(() => {});
      deferred = null;
    });
  }

  const no = $("#installNo");
  if (no) {
    no.addEventListener("click", () => {
      banner.hidden = true;
      dismissed = true;
      try {
        localStorage.setItem("installDismissed", "1");
      } catch (e) {}
    });
  }

  window.addEventListener("appinstalled", () => {
    banner.hidden = true;
  });
}

/* ---------------------------------- 12.8 міні-гра -------------- */
function initGame() {
  const root = $("#game");
  const canvas = $("#gameCanvas");
  const link = $("#gameLink");
  const startBtn = $("#gameStart");
  if (!root || !canvas || !link || !startBtn) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const W = 720;
  const H = 480;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = W * dpr;
  canvas.height = H * dpr;
  ctx.scale(dpr, dpr);

  const STORE = "vibeCatcherBest";

  let state = "idle"; // idle | run | over
  let score = 0;
  let lives = 3;
  let items = [];
  let speed = 150;
  let spawnAcc = 0;
  let playerX = W / 2;
  let targetX = W / 2;
  let last = 0;
  let raf = 0;

  let best = 0;
  try {
    best = Number(localStorage.getItem(STORE) || 0) || 0;
  } catch (e) {}

  const palette = () => {
    const dark = document.documentElement.dataset.theme === "dark";
    return {
      text: dark ? "rgba(245,245,247,.92)" : "rgba(11,11,15,.9)",
      muted: dark ? "rgba(245,245,247,.5)" : "rgba(11,11,15,.45)",
      good: dark ? "#5aa7ff" : "#0071e3",
      bug: "#ff5c5c",
      player: dark ? "rgba(255,255,255,.92)" : "rgba(11,11,15,.85)",
      accent: dark ? "#a78bfa" : "#7b61ff",
    };
  };

  function reset() {
    score = 0;
    lives = 3;
    items = [];
    speed = 150;
    spawnAcc = 0;
    playerX = W / 2;
    targetX = W / 2;
  }

  function start() {
    reset();
    state = "run";
    startBtn.hidden = true;
    last = performance.now();
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(loop);
  }

  function finish() {
    state = "over";
    if (score > best) {
      best = score;
      try {
        localStorage.setItem(STORE, String(best));
      } catch (e) {}
    }
    startBtn.hidden = false;
    startBtn.textContent = t("gameRestart");
    draw();
  }

  function spawn() {
    const bug = Math.random() < 0.3;
    items.push({
      x: 46 + Math.random() * (W - 92),
      y: -24,
      r: bug ? 12 : 9,
      vy: speed * (0.8 + Math.random() * 0.55),
      bug,
    });
  }

  function draw() {
    const c = palette();
    ctx.clearRect(0, 0, W, H);

    // «земля»
    ctx.fillStyle = c.muted;
    ctx.globalAlpha = 0.18;
    ctx.fillRect(0, H - 12, W, 1);
    ctx.globalAlpha = 1;

    // предмети
    items.forEach((item) => {
      ctx.beginPath();
      ctx.arc(item.x, item.y, item.r, 0, Math.PI * 2);
      ctx.fillStyle = item.bug ? c.bug : c.good;
      ctx.shadowColor = item.bug ? c.bug : c.accent;
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    // платформа
    const pw = 118;
    const ph = 12;
    const px = Math.max(0, Math.min(W - pw, playerX - pw / 2));
    const py = H - 40;
    const grad = ctx.createLinearGradient(px, 0, px + pw, 0);
    grad.addColorStop(0, c.good);
    grad.addColorStop(1, c.accent);
    ctx.fillStyle = grad;
    const r = ph / 2;
    ctx.beginPath();
    ctx.moveTo(px + r, py);
    ctx.arcTo(px + pw, py, px + pw, py + ph, r);
    ctx.arcTo(px + pw, py + ph, px, py + ph, r);
    ctx.arcTo(px, py + ph, px, py, r);
    ctx.arcTo(px, py, px + pw, py, r);
    ctx.closePath();
    ctx.fill();

    // HUD
    ctx.font = "600 20px -apple-system, Segoe UI, sans-serif";
    ctx.textAlign = "left";
    ctx.fillStyle = c.text;
    ctx.fillText(String(score), 20, 36);

    ctx.font = "500 13px -apple-system, Segoe UI, sans-serif";
    ctx.fillStyle = c.muted;
    ctx.fillText(`${t("gameBest")} ${best}`, 20, 56);

    ctx.textAlign = "right";
    ctx.font = "600 16px -apple-system, Segoe UI, sans-serif";
    ctx.fillStyle = c.bug;
    ctx.fillText("●".repeat(Math.max(0, lives)), W - 20, 34);

    if (state !== "run") {
      ctx.textAlign = "center";
      ctx.fillStyle = c.text;
      ctx.font = "600 26px -apple-system, Segoe UI, sans-serif";
      ctx.fillText(state === "over" ? t("gameOver") : t("gameIdle"), W / 2, H / 2 - 6);

      if (state === "over") {
        ctx.fillStyle = c.muted;
        ctx.font = "500 16px -apple-system, Segoe UI, sans-serif";
        ctx.fillText(`${t("gameScore")} ${score} · ${t("gameBest")} ${best}`, W / 2, H / 2 + 26);
      }
    }
  }

  function step(now) {
    const dt = Math.min(48, now - last) / 1000;
    last = now;

    playerX += (targetX - playerX) * Math.min(1, dt * 14);

    spawnAcc += dt;
    const interval = Math.max(0.34, 0.72 - score * 0.012);
    if (spawnAcc > interval) {
      spawnAcc = 0;
      spawn();
      speed = Math.min(420, speed + 6);
    }

    const pw = 118;
    const py = H - 40;

    items = items.filter((item) => {
      item.y += item.vy * dt;

      const caught = item.y + item.r >= py && item.y - item.r <= py + 12 && Math.abs(item.x - playerX) < pw / 2 + item.r;
      if (caught) {
        if (item.bug) {
          lives -= 1;
          if (lives <= 0) finish();
        } else {
          score += 1;
        }
        return false;
      }

      return item.y < H + 40;
    });
  }

  function loop(now) {
    if (state !== "run") return;
    step(now);
    draw();
    raf = requestAnimationFrame(loop);
  }

  const pointTo = (clientX) => {
    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * W;
    targetX = Math.max(0, Math.min(W, x));
  };

  canvas.addEventListener("pointermove", (event) => pointTo(event.clientX));
  canvas.addEventListener("pointerdown", (event) => {
    pointTo(event.clientX);
    if (state !== "run") start();
  });

  window.addEventListener("keydown", (event) => {
    if (root.hidden) return;
    const step = 40;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      targetX = Math.max(0, targetX - step);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      targetX = Math.min(W, targetX + step);
    }
    if (event.key === " " && state !== "run") {
      event.preventDefault();
      start();
    }
  });

  const open = () => {
    root.hidden = false;
    document.body.style.overflow = "hidden";
    if (state !== "run") {
      state = "idle";
      draw();
    }
  };

  const close = () => {
    root.hidden = true;
    document.body.style.overflow = "";
    state = "idle";
    cancelAnimationFrame(raf);
  };

  link.addEventListener("click", open);
  root.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-game-close")) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !root.hidden) close();
  });
  startBtn.addEventListener("click", start);

  draw();
}

/* ---------------------------------- 12.9 конфеті -------------- */
function celebrate() {
  if (reduceMotion.matches) return;

  const colors = ["#0071e3", "#7b61ff", "#5aa7ff", "#a78bfa", "#34c759"];
  const total = 48;

  for (let i = 0; i < total; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = `${1.1 + Math.random() * 1.1}s`;
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(piece);

    setTimeout(() => piece.remove(), 2600);
  }
}

/* ------------------------------------------- старт -------------- */
$("#year").textContent = new Date().getFullYear();
document.querySelector("h1").textContent = CONFIG.name;
initLinks();
initAvatar();
initParticles();
initTabs();
initSwipe();
initPalette();
initContact();
initShare();
initCvPrint();
initGame();
initProjectsUi();
initHelp();
initInstallPrompt();
initOverlayKeys();
initBackToTop();
initCursorGlow();
initEasterEgg();
initAnalytics();
initNetlifyBadgeCleaner();
initServiceWorker();
applyLanguage(lang);












