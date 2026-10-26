# extremeowen — особистий сайт

**Живий сайт:** https://extremeowen.is-a.dev

Мінімалістична сторінка-візитка у стилі Apple: одна HTML-сторінка, без фреймворків і збірки.
Відкривається миттєво, працює офлайн і встановлюється на телефон як застосунок.

## Що всередині

- **Вкладки** (головна, проєкти, про мене, CV, нотатки, контакти) з `#hash`-роутингом і свайпами
- **PWA**: сервіс-воркер, офлайн-кеш, кастомна офлайн-сторінка, шорткати в манифесті
- **Проєкти**: прев'ю, фільтри за тегами, жива статистика з GitHub API (зірки, мова, останній коміт)
- **CV** з експортом у PDF (`cv.pdf`, генерується зі сторінки)
- **Форма зв'язку** на Netlify Forms + email-сповіщення, з валідацією пошти
- **Міні-гра** «vibe catcher» (canvas, без бібліотек) + тактильний відгук на телефоні
- **Палітра команд** `Ctrl/⌘ + K`: переходи, тема, мова, поділитися
- **Тема й мова** (UA/EN) з збереженням вибору, повага до `prefers-reduced-motion`
- Тёмна/світла тема, JSON-LD `Person`, OG-картинка, sitemap, `_headers` з CSP

## Стек

HTML · CSS · JavaScript (vanilla) · PWA · Netlify Forms · GitHub Actions

## Структура

```
index.html              розмітка + мета + JSON-LD
styles.css              токени, теми, компоненти, друк
script.js               CONFIG, i18n, вся логіка
sw.js                   сервіс-воркер (офлайн)
offline.html            аварійна сторінка без мережі
404.html                сторінка 404 з грою
manifest.webmanifest    PWA-манифест
repos.json              статистика репозиторіїв (оновлює Action)
_headers                заголовки й CSP для Netlify
shots/                  прев'ю для дашборду встановлення
netlify/functions/      серверна функція (Telegram/Discord/ntfy) — опційна
scripts/fetch-repos.mjs збирач статистики для Action
```

## Деплой

Два GitHub Actions:

- **Deploy to Netlify** — на кожен `push` у `main` (потрібні секрети `NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`)
- **Update repo stats** — щодня о 06:00 UTC, оновлює `repos.json`

Локально достатньо відкрити `index.html` або підняти будь-який статичний сервер.

## Домен

`extremeowen.is-a.dev` — безкоштовний піддомен через [is-a.dev](https://is-a.dev),
DNS: CNAME → `owenvibe.netlify.app`.
