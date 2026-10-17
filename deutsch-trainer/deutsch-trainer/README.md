# Deutsch Trainer (A1–C2)

A browser-based German learning app with no build step and no runtime dependencies.

## Features
- **Grammar:** 8 topics per CEFR level (A1–C2) with a rule and a memory hint, plus "mark as learned".
- **Flashcards:** 8 vocabulary cards per level, colour-coded by article (der/die/das), with known/again tracking.
- **Exam practice:** Goethe-style and telc-style questions per level, instant feedback with explanations, and an exam-format card per level.
- **Writing:** a task per level with correction and feedback (offline rule checker, or full AI correction with your own Anthropic API key).
- **Progress:** per-level percentage, saved in `localStorage`.

## Run locally
No installation is needed: open `index.html` in a browser.
Optional dev server (requires Node.js 18+):

```bash
npm install
npm start
```

## Deploy on GitHub Pages
Push to `main`, then in the repository go to Settings → Pages → Source: **GitHub Actions**. The included workflow `.github/workflows/pages.yml` publishes the site.

## Project structure
```
index.html            page shell
css/style.css         styles (light/dark)
js/data/content.js    vocabulary, exam questions, writing tasks
js/data/grammar-extra.js  additional grammar topics
js/app.js             UI, state, progress
js/exam-info.js       Goethe/telc format card
js/feedback.js        writing checker and optional AI feedback
```

## Add content
Edit `js/data/content.js` (vocab `[German, English]`, questions `[question, options, correctIndex, explanation]`) or `js/data/grammar-extra.js` (`[title, rule, hint]`).

## AI writing feedback
Paste your own Anthropic API key in the Writing tab. It is stored only in your browser and sent only to `api.anthropic.com`. Do not deploy a shared key inside the code.

## Sources and notice
Exam structure information was checked against the Goethe-Institut (goethe.de) and telc/publisher pages. Always confirm current formats and timings on [goethe.de](https://www.goethe.de) and [telc.net](https://www.telc.net). Questions in this repository are original practice items, not official exam papers, and this project is not affiliated with the Goethe-Institut or telc. Download official practice sets from their websites.

## Licence
MIT
