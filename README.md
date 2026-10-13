# StudyNest

**A focused learning workspace for UPSC preparation and IT skills.**

StudyNest brings study planning, structured learning tracks, quiz practice, and progress tracking into one responsive interface. This repository contains the React + Vite web MVP, a Firebase-ready client setup, and GitHub Actions workflow for GitHub Pages deployment.

## Features in this MVP

- Responsive dashboard with study progress, streak, study-time chart, and quiz average.
- Daily study checklist with completion toggles and add-task dialog.
- UPSC and IT course cards with progress indicators and track filtering.
- Interactive sample quiz with answer feedback and explanation.
- Searchable course list, sample current-affairs layout, and bookmarks placeholder.
- Mobile navigation and accessible dialog controls.
- Optional Firebase Authentication and Firestore initialization.
- GitHub Actions workflow to lint, build, and deploy to GitHub Pages.

> **MVP note:** Tasks and progress currently live in React state and reset on refresh. Login, synced progress, real course content, live current affairs, AI tutoring, and admin CRUD require backend integration. Current-affairs cards are sample study prompts, not live news.

## Tech stack

- React 19
- Vite 7
- JavaScript (ES modules)
- Lucide icons
- Firebase Web SDK (optional, environment-configured)
- GitHub Actions + GitHub Pages

## Run locally

Requirements: Node.js 22+ and npm.

```bash
git clone https://github.com/Roopavn/StudyNest-MVP.git
cd StudyNest-MVP
npm install
npm run dev
```

Open the local URL printed by Vite.

### Quality checks

```bash
npm run lint
npm run build
npm run preview
```

## Firebase setup (optional)

1. Create a Firebase project and register a Web app.
2. Copy `.env.example` to `.env.local`.
3. Add the Firebase web app configuration values to the `VITE_FIREBASE_*` variables.
4. Enable only the Firebase products you intend to use and deploy secure rules before storing real user data.

The app exports `auth`, `db`, and `isFirebaseConfigured` from `src/firebase.js`. Firebase is not required to run the demo UI.

**Security:** Never put service-account credentials, private API keys, or AI provider secrets in client-side `VITE_*` variables. AI calls and privileged operations belong in Cloud Functions or a trusted backend. The included Firestore rules deny all reads and writes by default; design and test ownership-aware rules before production use.

## Deployment with GitHub Actions

The workflow at `.github/workflows/deploy.yml` runs on pushes to `main` and can also be started manually.

1. Open the repository's **Settings → Pages**.
2. Set the build/deployment source to **GitHub Actions**.
3. Ensure Actions are allowed to use the repository's workflow permissions.
4. Push to `main`; the workflow installs dependencies, runs lint and build, then publishes `dist` to GitHub Pages.
5. Open the URL shown in the workflow's **deploy** job.

The Vite base path is configured for the repository name `StudyNest-MVP` when the workflow sets `GITHUB_PAGES=true`. If you rename the repository, update `vite.config.js`.

For Firebase Hosting instead, build with `npm run build`, install the Firebase CLI, authenticate through a secure CI identity, and deploy the `dist` folder using the included `firebase.json`. Firebase Hosting deployment is not configured in the current workflow.

## Project structure

```text
StudyNest-MVP/
├── .github/workflows/deploy.yml  # CI, build, GitHub Pages deployment
├── public/favicon.svg
├── src/
│   ├── App.jsx                   # Dashboard and interactive screens
│   ├── data.js                   # Demo courses, tasks, quiz and chart data
│   ├── firebase.js               # Optional Firebase initialization
│   ├── main.jsx                  # React entry point
│   └── styles.css                # Responsive UI styles
├── .env.example                  # Firebase config template
├── eslint.config.js
├── firebase.json
├── firestore.rules               # Deny-by-default starter rules
├── index.html
├── package.json
└── vite.config.js
```

## Roadmap

- [ ] Firebase Authentication (email/password and Google sign-in)
- [ ] Persist courses, lesson content, quiz results, bookmarks, and streaks in Firestore
- [ ] Nested category browser and full lesson viewer for UPSC and IT tracks
- [ ] PYQ bank with filters and explanations
- [ ] Secure admin panel for course/content/question management
- [ ] Cloud Functions for AI tutor and Mains answer evaluation
- [ ] Scheduled, sourced current-affairs publishing and push reminders
- [ ] Automated tests and Firebase Emulator Suite security-rule tests
- [ ] Production monitoring, accessibility review, and user testing

## License

No license has been added yet. Add a license file before accepting external contributions or reuse.
