# AR-CodeLab

**Learn. Build. Get Hired.** A practical IT learning workspace built with React and Vite.

AR-CodeLab is an all-in-one IT learning lab for structured courses, practical coding lessons, Windows and Linux setup guidance, projects, and technical interview preparation. The name represents a hands-on place to learn, experiment, and build. This repository contains the web MVP and a GitHub Actions workflow for publishing it to GitHub Pages.

- **Live app:** https://roopavn.github.io/StudyNest-MVP/
- **Repository:** https://github.com/Roopavn/StudyNest-MVP

## Current features

### Learning workspace
- Responsive dashboard with overview cards, study-plan tasks, course progress and learning-track cards.
- Dedicated **My learning**, **Learning path**, **Practice & quizzes**, **Interview preparation**, and **Bookmarks** sections.
- Course catalog covering Python, SQL, REST APIs, Data Engineering / Big Data (PySpark & Apache Spark), Java, JavaScript, C, HTML & CSS, DevOps, cloud fundamentals, Linux and shell, Docker, Git & GitHub, Kubernetes basics, Generative AI, and Agentic AI.
- Course cards open their matching learning track. The Generative AI and Agentic AI courses include eight detailed lessons each, ordered from Basic through Intermediate to Advanced.
- Search and IT-track filtering for courses.
- Course bookmarks and study tasks saved in browser localStorage.
- Mobile-friendly navigation and expandable lesson content.

### Learning paths and practice
- Structured learning tracks for Python, SQL, REST APIs, Data Engineering / Big Data (PySpark & Apache Spark), Java, JavaScript, C Programming, HTML & CSS, DevOps, Cloud Fundamentals, Linux & Shell, Docker & Containers, Git & GitHub, Kubernetes, Generative AI, and Agentic AI.
- Every course track starts with a course introduction explaining what the technology is, why it is used, where it is used, and the recommended learning roadmap.
- Course lessons are ordered Basic → Intermediate → Advanced, with plain-language explanations, code/configuration examples, small tasks and topic-specific video search links. Java, JavaScript, C Programming, HTML & CSS, DevOps, Cloud Fundamentals, Linux & Shell, Docker & Containers, Git & GitHub, and Kubernetes now each have ten lessons, including follow-up topics on testing, security, performance, operations and troubleshooting.
- **Generative AI (8 lessons):** model fundamentals, prompt engineering, safe API integration, embeddings and semantic search, RAG, structured output, evaluation and safety, and production architecture/cost/observability.
- **Agentic AI (8 lessons):** agent fundamentals, tool contracts, bounded agent loops, planning and memory, RAG-powered agents, multi-agent coordination, human approval and durable workflows, and production evaluation/security.
- Both AI courses include practical tasks, line-by-line code walkthroughs, key terms, beginner pitfalls and MCQ checks. Code examples are educational and provider-neutral; the app does not connect to a live AI provider.
- Lessons include a plain-language analogy, real-world usage, common beginner pitfalls, key terms, and a line-by-line walkthrough of the example code or commands.
- Sample multiple-choice quiz with answer feedback and an explanation for supported tracks.

### Interview preparation
- Dedicated, separate interview-preparation buttons for **all 16 learning tracks**, not just Python, SQL and REST APIs.
- Every individual course learning path now includes a **course-wise Interview Guide** with tailored focus areas, a practical interview routine and a matching question bank when one is available. Python and Python backend courses link to the InterviewBit Python interview-question reference.
- **63 interview questions** across Python (10), SQL (7), REST APIs (7), Java (3), JavaScript (3), C Programming (3), HTML & CSS (3), DevOps (3), Cloud Fundamentals (3), Linux & Shell (3), Docker & Containers (3), Git & GitHub (3), Kubernetes (3), Generative AI (3), Agentic AI (3), and Data Engineering / Big Data (3).
- Each track includes Basic, Intermediate and Advanced questions. Expand a question to see an interview-ready explanation, example syntax, expected output or behavior, and a practical interview tip.
- Search questions by keyword, filter by difficulty, follow the Basic → Intermediate → Advanced roadmap, and copy code examples for practice.
- The interview question bank is educational sample content. It does not connect to external interview platforms or provide a live mock-interview evaluator.

### Additional course catalog

| Area | Courses |
|---|---|
| Programming languages | Java, JavaScript, C Programming |
| Web development | HTML & CSS |
| DevOps & cloud | DevOps Foundations, Cloud Fundamentals, Linux & Shell, Docker & Containers, Kubernetes Basics |
| Developer tools | Git & GitHub |
| Data engineering & big data | Data Engineering / Big Data (PySpark & Apache Spark): distributed processing, DataFrames, CSV/JSON/Parquet, transformations and actions, Spark SQL, joins, window functions, cleaning, partitions, shuffles, performance tuning and ETL pipelines |
| Generative AI | LLM fundamentals, prompt engineering, embeddings, RAG, structured outputs, evaluation and production design |
| Agentic AI | Agent loops, tools, planning, memory, multi-agent patterns, approvals, recovery and security |

**Course catalog lesson totals:** Most course-card counts are generated from their lesson data. The catalog is actively being expanded, so use the live course cards and in-course lesson totals as the current source of truth rather than a fixed total in this README. Lesson examples are educational; cloud, container and provider examples may need environment-specific configuration before use. Lesson completion is stored locally for demo users and syncs to Firestore for signed-in users after Firebase is configured.

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
    npm test
    npm run build
    npm run preview

- npm run lint checks the code with ESLint.
- npm test runs Node's built-in smoke tests for course data and the sample quiz.
- npm run build creates the production build in dist/.
- npm run preview serves the production build locally.

## Account, cloud progress and current limitations

- Without Firebase configuration, the app remains usable in demo mode and stores study tasks, bookmarks and completed lessons in the current browser's localStorage.
- The account dialog includes email/password sign-up, sign-in, password reset and sign-out flows.
- When Firebase is configured and the Firestore rules are deployed, signed-in learners can sync study tasks, bookmarks and completed lesson IDs in their own `users/{uid}` document.
- The dashboard still contains sample learning-progress, streak, study-time and quiz-average figures. These should be replaced with verified analytics before treating them as real learner statistics.
- Quizzes and course lessons are educational sample content. There is no production admin/content-management backend, live AI tutor, or server-side answer evaluator yet.
- Firestore rules are included in `firestore.rules`, but must be deployed to your Firebase project before cloud sync will work.

## Firebase setup for accounts and cloud progress

1. Create a Firebase project and register a Web app.
2. In Firebase Authentication, enable the **Email/Password** sign-in provider.
3. Create a Cloud Firestore database.
4. Copy the six web app configuration values from Firebase Project settings.
5. In GitHub, open **Settings → Secrets and variables → Actions → New repository secret**. Add these secrets using the exact names: `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`, and `VITE_FIREBASE_APP_ID`.
6. Publish the repository's `firestore.rules` file using the Firebase Console's Firestore **Rules** editor, or install the Firebase CLI and run `firebase deploy --only firestore:rules --project YOUR_FIREBASE_PROJECT_ID` from the repository root.
7. Push a commit to `main` or manually run the GitHub Pages workflow so the site is rebuilt with the Firebase configuration.
8. Open the deployed site, create a test account, add a task, bookmark a course and complete a lesson. Sign out and back in to confirm that data is restored.

The app exports `auth`, `db`, and `isFirebaseConfigured` from `src/firebase.js`. Firebase is optional for browsing lessons.

**Security:** Never put service-account credentials, private keys, or AI provider secrets in client-side `VITE_*` variables. The Firebase web configuration is used by the browser, so access control must be enforced by Security Rules. The included rules restrict learner progress to the authenticated owner and deny all other Firestore paths. Test rules before production use.

## Deployment with GitHub Actions

The workflow is located at .github/workflows/deploy.yml. It runs on pushes to main and can also be started manually.

1. In the repository, open **Settings → Pages**.
2. Set the deployment source to **GitHub Actions**.
3. Ensure the workflow has the permissions it needs to publish Pages.
4. Push changes to main, or manually run the workflow from the Actions tab.
5. Check the workflow run and its deploy job for the published URL.

The Vite base path is configured for the current `StudyNest-MVP` GitHub repository when the workflow sets `GITHUB_PAGES=true`; the public-facing product brand is AR-CodeLab. If the repository is renamed, update vite.config.js and the deployment configuration as needed.

Firebase Hosting configuration exists in firebase.json, but the current GitHub Actions workflow publishes to GitHub Pages; Firebase Hosting deployment is not configured in that workflow.

## Project structure

    AR-CodeLab app (repository: StudyNest-MVP)/
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

### Python frameworks & libraries explorer
- The Python frameworks & libraries explorer appears after the Python lessons when the Python track is selected, keeping the core Python curriculum first. Nested category buttons expand on demand; select a tool to open its purpose, install/setup command, starter code sample, and official documentation link.
- Covers web/API frameworks (Django, Django REST Framework, FastAPI, Flask, Starlette, Pyramid, Litestar); data/science (NumPy, pandas, Polars, PySpark, SciPy, Matplotlib, Seaborn); ML/AI (scikit-learn, PyTorch, TensorFlow/Keras, XGBoost, LightGBM, Hugging Face Transformers, LangChain, LlamaIndex); database/ORM/cache (SQLAlchemy, Alembic, Psycopg, PyMongo, redis-py); testing/quality (pytest, unittest, Pydantic, Ruff, mypy); async/tasks/networking (asyncio, Celery, RQ, HTTPX, Requests); and files/scraping/productivity (Pillow, Beautiful Soup, Scrapy, OpenPyXL, python-dotenv).
- Includes copy buttons for install commands and code examples. The catalog is a curated set of commonly used tools, not an exhaustive list of every Python package on PyPI.

## Keeping this README current

**Update this README whenever an application change affects features, navigation, setup, data persistence, project structure, testing or deployment.** Keep the feature list and project structure aligned with the actual code, and clearly label demo behavior versus implemented functionality.

## License

No license has been added yet. Add a license file before accepting external contributions or reuse.


### Data Engineering / Big Data
- Added a dedicated, visible course card for **Data Engineering / Big Data (PySpark)** in the dashboard and course catalog. Opening the card takes learners directly to the eight PySpark & Apache Spark lessons.

### Python interview preparation
- The Python interview-preparation bank contains **120 questions total** (10 existing questions plus 110 additional original questions), organized by Basic, Intermediate and Advanced difficulty.
- Each question includes an interview-ready answer and a practical follow-up prompt. The Python course links to the [InterviewBit Python interview questions](https://www.interviewbit.com/python-interview-questions/) page as an additional study reference; course explanations are independently written.
