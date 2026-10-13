# StudyNest

**A focused, IT-skills learning workspace built with React and Vite.**

StudyNest helps learners explore structured lessons, practice technical questions, organize study tasks, and save courses. This repository contains the web MVP and a GitHub Actions workflow for publishing it to GitHub Pages.

- **Live app:** https://roopavn.github.io/StudyNest-MVP/
- **Repository:** https://github.com/Roopavn/StudyNest-MVP

## Current features

### Learning workspace
- Responsive dashboard with overview cards, study-plan tasks, course progress and learning-track cards.
- Dedicated **My learning**, **Learning path**, **Practice & quizzes**, **Interview preparation**, and **Bookmarks** sections.
- Course catalog covering Python, SQL, REST APIs, Java, JavaScript, C, HTML & CSS, DevOps, cloud fundamentals, Linux and shell, Docker, Git & GitHub, Kubernetes basics, Generative AI, and Agentic AI.
- Course cards open a matching structured learning track with beginner and intermediate starter lessons for the newer subjects.
- Search and IT-track filtering for courses.
- Course bookmarks and study tasks saved in browser localStorage.
- Mobile-friendly navigation and expandable lesson content.

### Learning paths and practice
- Structured learning tracks for Python, SQL, REST APIs, Java, JavaScript, C Programming, HTML & CSS, DevOps, Cloud Fundamentals, Linux & Shell, Docker & Containers, Git & GitHub, Kubernetes, Generative AI, and Agentic AI.
- Every course track starts with a course introduction explaining what the technology is, why it is used, where it is used, and the recommended learning roadmap.
- Course lessons are ordered Basic → Intermediate → Advanced. The newer language, web and infrastructure tracks now have a lesson at each level, with explanations, code/configuration examples, small tasks and video explainers.
- Lessons include a plain-language analogy, real-world usage, common beginner pitfalls, key terms, and a line-by-line walkthrough of the example code or commands.
- Sample multiple-choice quiz with answer feedback and an explanation for supported tracks.

### Interview preparation
Interview preparation is split into **three separate subject tracks**—not one combined topic list:

| Track | Coverage | Current lessons |
|---|---|---:|
| Python | Data structures, equality vs identity, mutable defaults, generators, decorators, arguments, copying, exceptions, concurrency/GIL | 10 |
| SQL | WHERE vs HAVING, joins, second-highest salary, indexes, keys, CTEs, transactions/ACID | 7 |
| REST APIs | HTTP methods/status codes, REST resources, idempotency, validation/errors, authentication/authorization, pagination, safe retries | 7 |

### Additional course catalog

| Area | Courses |
|---|---|
| Programming languages | Java, JavaScript, C Programming |
| Web development | HTML & CSS |
| DevOps & cloud | DevOps Foundations, Cloud Fundamentals, Linux & Shell, Docker & Containers, Kubernetes Basics |
| Developer tools | Git & GitHub |
| Generative AI | LLM fundamentals, prompt engineering, embeddings, RAG, structured outputs, evaluation and production design |
| Agentic AI | Agent loops, tools, planning, memory, multi-agent patterns, approvals, recovery and security |

The newer tracks include introductory, Basic, Intermediate and Advanced content; course depth will continue to expand as more examples and practice questions are added. Course progress shown for newly added tracks starts at 0; lesson completion is stored locally in the browser.

Each subject contains **Basic → Intermediate → Advanced** lessons. Choose a subject card to open its own learning track, then use the difficulty roadmap or selector and search to find lessons. Expand a question to read an interview-ready answer, example syntax, expected output/behavior, and an interview tip. Code examples include a copy action.

## Tech stack

- React 19
- Vite 7
- JavaScript (ES modules)
- Lucide React icons
- Firebase Web SDK (optional starter integration)
- GitHub Actions and GitHub Pages

## Run locally

Requirements: Node.js 22+ and npm.

    git clone https://github.com/Roopavn/StudyNest-MVP.git
    cd StudyNest-MVP
    npm install
    npm run dev

Open the local URL printed by Vite.

### Quality checks

Run these before submitting application changes:

    npm run lint
    npm run build
    npm run preview

- npm run lint checks the code with ESLint.
- npm run build creates the production build in dist/.
- npm run preview serves the production build locally.

## Data persistence and MVP limitations

- Study tasks and course bookmarks are stored in the current browser's localStorage; they are not synced between devices or accounts.
- Dashboard statistics and course progress include demo/sample values and should not be treated as a complete analytics backend.
- The sample quiz and learning content are for demonstration and practice.
- Firebase initialization is optional. Authentication and cloud-synced user progress are not fully wired into the current experience.
- There is no production admin/content-management backend yet.

## Optional Firebase setup

1. Create a Firebase project and register a Web app.
2. Copy .env.example to .env.local.
3. Add the Firebase web app configuration values to the VITE_FIREBASE_* variables.
4. Enable only the Firebase products you need and configure secure rules before storing real user data.

The app exports auth, db, and isFirebaseConfigured from src/firebase.js. Firebase is not required to run the demo UI.

**Security:** Never place service-account credentials, private API keys, or AI provider secrets in client-side VITE_* variables. Privileged operations belong in Cloud Functions or a trusted backend. The starter Firestore rules deny reads and writes by default; design and test ownership-aware rules before production use.

## Deployment with GitHub Actions

The workflow is located at .github/workflows/deploy.yml. It runs on pushes to main and can also be started manually.

1. In the repository, open **Settings → Pages**.
2. Set the deployment source to **GitHub Actions**.
3. Ensure the workflow has the permissions it needs to publish Pages.
4. Push changes to main, or manually run the workflow from the Actions tab.
5. Check the workflow run and its deploy job for the published URL.

The Vite base path is configured for the StudyNest-MVP repository when the workflow sets GITHUB_PAGES=true. If the repository is renamed, update vite.config.js and the deployment configuration as needed.

Firebase Hosting configuration exists in firebase.json, but the current GitHub Actions workflow publishes to GitHub Pages; Firebase Hosting deployment is not configured in that workflow.

## Project structure

    StudyNest-MVP/
    ├── .github/workflows/
    │   └── deploy.yml           # Lint/build and GitHub Pages deployment
    ├── public/                  # Static assets
    ├── src/
    │   ├── App.jsx              # Main app layout and navigation
    │   ├── data.js              # Course catalog, tasks, quiz and dashboard data
    │   ├── firebase.js          # Optional Firebase initialization
    │   ├── LearningCenter.jsx   # Lesson/learning-path experience
    │   ├── InterviewPrep.jsx    # Separate Python, SQL and REST API tracks
    │   ├── InterviewPrep.css    # Interview preparation page styles
    │   ├── main.jsx             # React entry point and app error boundary
    │   └── styles.css           # Main responsive application styles
    ├── .env.example             # Firebase configuration template
    ├── eslint.config.js
    ├── firebase.json
    ├── firestore.rules          # Deny-by-default starter rules
    ├── index.html
    ├── package.json
    └── vite.config.js

## Roadmap

- [ ] Add automated component and interaction tests.
- [ ] Persist lessons, quiz results, progress and bookmarks in Firestore.
- [ ] Implement user authentication and account-specific progress.
- [ ] Expand course content and quiz banks with explanations.
- [ ] Add a secure admin interface for course and question management.
- [ ] Add monitoring, accessibility checks and user testing.
- [ ] Test Firebase security rules with the Firebase Emulator Suite.

## Keeping this README current

**Update this README whenever an application change affects features, navigation, setup, data persistence, project structure, testing or deployment.** Keep the feature list and project structure aligned with the actual code, and clearly label demo behavior versus implemented functionality.

## License

No license has been added yet. Add a license file before accepting external contributions or reuse.
