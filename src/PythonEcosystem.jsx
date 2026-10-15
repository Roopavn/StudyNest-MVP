import { useMemo, useState } from 'react'
import { ChevronDown, ChevronRight, Code2, Database, FlaskConical, Layers3, Rocket, ShieldCheck, TestTube2 } from 'lucide-react'
import './PythonEcosystem.css'

const groups = [
  {
    name: 'Web frameworks', icon: Code2, items: [
      ['Django', 'Full-stack web framework', 'django-admin startproject config .', 'URLs → views → templates/models → ORM → auth → caching → deployment', 'Build a production job portal with authentication, PostgreSQL, REST endpoints and background jobs.'],
      ['Flask', 'Lightweight web framework', 'python -m pip install Flask', 'Routes → request/response → blueprints → validation → database → production WSGI', 'Build a modular inventory API with authentication, PostgreSQL and automated tests.'],
      ['FastAPI', 'Modern API framework', 'python -m pip install fastapi uvicorn', 'Type hints → routes → Pydantic → dependencies → async → security → observability', 'Build a production candidate-management API with JWT/RBAC, PostgreSQL, pagination and tests.'],
      ['Django REST Framework', 'REST toolkit for Django', 'python -m pip install djangorestframework', 'Serializers → API views → viewsets → routers → permissions → throttling → versioning', 'Build a multi-tenant course API with role-based permissions, filtering and OpenAPI documentation.'],
    ],
  },
  {
    name: 'Data & analytics', icon: Database, items: [
      ['NumPy', 'Numerical computing foundation', 'python -m pip install numpy', 'Arrays → shapes/dtypes → vectorization → broadcasting → linear algebra → performance', 'Build a numerical analytics module that processes thousands of measurements without Python loops.'],
      ['Pandas', 'Data analysis and transformation', 'python -m pip install pandas', 'Series/DataFrame → cleaning → joins → groupby → time series → performance', 'Build an ETL pipeline that cleans CSV/JSON sales data and produces business KPI reports.'],
      ['PySpark', 'Distributed data processing', 'python -m pip install pyspark', 'SparkSession → DataFrames → SQL → joins/windows → partitions → shuffle → tuning', 'Build a production-style batch pipeline that reads Parquet, validates data, joins dimensions and writes curated output.'],
    ],
  },
  {
    name: 'API, validation & ORM', icon: Layers3, items: [
      ['Requests', 'HTTP client library', 'python -m pip install requests', 'Requests → headers/params → sessions → timeouts → retries → error handling', 'Build a resilient API ingestion client with pagination, retries, timeouts and structured logging.'],
      ['Pydantic', 'Typed data validation', 'python -m pip install pydantic', 'Models → field validation → nested data → serialization → settings → API contracts', 'Create a validated configuration and API payload layer shared by a FastAPI service.'],
      ['SQLAlchemy', 'Python SQL toolkit and ORM', 'python -m pip install sqlalchemy', 'Engine → Core → ORM → relationships → transactions → migrations → connection pooling', 'Build a transaction-safe order service with PostgreSQL, relationships and migration scripts.'],
    ],
  },
  {
    name: 'Async & background jobs', icon: Rocket, items: [
      ['Celery', 'Distributed task queue', 'python -m pip install celery redis', 'Tasks → broker → workers → retries → scheduling → monitoring → idempotency', 'Build an email/report processing service with Redis, retries, scheduled tasks and failure monitoring.'],
      ['asyncio', 'Python asynchronous I/O', 'Built into Python', 'Coroutines → await → tasks → gather → timeouts → cancellation → bounded concurrency', 'Build a concurrent API aggregator that safely calls multiple services with timeouts and partial failures.'],
    ],
  },
  {
    name: 'Testing & quality', icon: TestTube2, items: [
      ['pytest', 'Testing framework', 'python -m pip install pytest', 'Assertions → fixtures → parametrization → mocking → integration tests → coverage', 'Build a tested service layer with unit, API and database integration tests in CI.'],
      ['httpx', 'HTTP client and async testing', 'python -m pip install httpx', 'Sync/async clients → timeouts → sessions → ASGI testing → mocking boundaries', 'Create integration tests for a FastAPI service without depending on an external API.'],
    ],
  },
  {
    name: 'Security & configuration', icon: ShieldCheck, items: [
      ['python-dotenv', 'Environment configuration helper', 'python -m pip install python-dotenv', 'Environment variables → .env for local use → typed settings → secret hygiene → deployment configuration', 'Build environment-specific configuration without committing API keys or passwords.'],
    ],
  },
]

function FrameworkLessons({ item }) {
  const [open, setOpen] = useState(false)
  const [expandedStages, setExpandedStages] = useState([0])
  const [completedStages, setCompletedStages] = useState([])
  const [answers, setAnswers] = useState({})
  const [checkedAnswers, setCheckedAnswers] = useState([])
  const [name, role, setup, roadmap, project] = item
  const stages = [
    {
      title: 'Setup and first run',
      explanation: `Install ${name} in an isolated Python environment, verify the installed version and create a minimal working example. Keep project dependencies reproducible and avoid installing packages into the system Python.`,
      code: `python -m venv .venv\n# Windows PowerShell\n.venv\\Scripts\\Activate.ps1\n# macOS / Linux\nsource .venv/bin/activate\n\n${setup}`,
      example: `Use a dedicated virtual environment for each project that uses ${name}. This prevents dependency conflicts between applications.`,
      task: `Create a clean project environment, install ${name}, and record the installation and verification commands in your README.`,
      interview: `Why should Python projects use virtual environments, and how would you reproduce the same dependencies on another machine?`,
      question: 'What is the main benefit of using a virtual environment?',
      options: ['It isolates project dependencies', 'It automatically deploys the application', 'It replaces Python', 'It removes the need for tests'],
      answer: 0,
    },
    {
      title: 'Beginner fundamentals',
      explanation: `Learn the core concepts and vocabulary of ${name}. Start with the smallest working example, understand the inputs and outputs, and identify the usual project structure and common mistakes.`,
      code: `${setup}\n\n# Next: create a minimal ${name} example\n# Run it locally and inspect the result`,
      example: `Follow the simplest official quick-start example first. Change one input at a time and observe how ${name} responds before adding more features.`,
      task: `Build one small feature with ${name}. Explain each important line and demonstrate both a valid input and an invalid input.`,
      interview: `Describe the core execution flow of ${name} and walk through what happens when your example runs.`,
      question: 'What is the best way to learn a new framework or library?',
      options: ['Start with a small runnable example', 'Copy a large application without testing', 'Skip the documentation', 'Install every related package first'],
      answer: 0,
    },
    {
      title: 'Intermediate patterns',
      explanation: `Move beyond a single-file tutorial. Organize reusable modules, validate inputs, handle exceptions, configure the application cleanly, and add automated tests around important behavior.`,
      code: `# Suggested project structure\nproject/\n  app/\n    __init__.py\n    services.py\n    config.py\n  tests/\n    test_services.py\n  requirements.txt\n\n# Keep business logic testable and separate from I/O.`,
      example: `Extract repeated logic into a reusable function or service, validate its inputs, and write a test for both the expected result and an error case.`,
      task: `Refactor your beginner example into reusable modules. Add validation, useful error messages, and at least two automated tests.`,
      interview: `How would you separate business logic from framework-specific code so the application remains testable?`,
      question: 'Where should reusable business rules generally live?',
      options: ['In testable functions or service modules', 'Only inside UI or routing handlers', 'Only in comments', 'In copied code across every file'],
      answer: 0,
    },
    {
      title: 'Advanced and production readiness',
      explanation: `Evaluate the concerns that matter in real deployments: performance, security, dependency updates, logging, observability, timeouts, failure recovery and concurrency when applicable. Select patterns based on the framework or library rather than applying them blindly.`,
      code: `# Production-readiness checklist\n# 1. Validate untrusted inputs\n# 2. Keep secrets in environment/configuration\n# 3. Set timeouts for network operations\n# 4. Log useful context without secrets\n# 5. Test failure paths\n# 6. Pin and review dependencies`,
      example: `Before releasing a service, test what happens when a downstream API is slow, configuration is missing, or a dependency raises an exception. Make failures observable and safe to retry where appropriate.`,
      task: `Add structured logging and configuration checks to your example. Document one likely failure mode and how the application handles it.`,
      interview: `Which security, performance and reliability trade-offs would you evaluate before deploying a ${name}-based application?`,
      question: 'What should you do with secrets such as API keys?',
      options: ['Load them from secure configuration', 'Commit them to a public repository', 'Print them in logs', 'Hard-code them into source files'],
      answer: 0,
    },
    {
      title: 'Real-world project',
      explanation: project,
      code: `Project workflow\n1. Define requirements and data contracts\n2. Design modules and configuration\n3. Implement the core feature with ${name}\n4. Add validation and error handling\n5. Write unit and integration tests\n6. Document setup and deployment\n7. Review logs and failure scenarios\n\nLearning roadmap: ${roadmap}`,
      example: `Turn the learning example into a small portfolio project with a clear README, reproducible setup, realistic sample data, automated tests and documented design decisions.`,
      task: `Build the project described above. Include setup instructions, sample usage, tests, known limitations and a short explanation of your architecture.`,
      interview: `Walk through your project architecture, the most difficult bug you encountered, and one trade-off you would revisit before scaling it.`,
      question: 'What makes a learning project useful in a portfolio?',
      options: ['A runnable project with tests and clear documentation', 'A screenshot with no source code', 'A README with no working example', 'Untracked dependencies and no setup steps'],
      answer: 0,
    },
    {
      title: 'Interview preparation',
      explanation: `Prepare to explain the mental model of ${name}, common APIs and syntax, debugging approaches, design trade-offs and the production scenarios where you would or would not choose it.`,
      code: `Interview practice\n1. Explain: ${roadmap}\n2. Write a small feature without copying a tutorial\n3. Debug an incorrect or failing example\n4. Add a focused automated test\n5. Explain complexity, limitations and alternatives`,
      example: `Practise a short verbal explanation, then implement one small feature live. Follow it with a test and discuss what changes when inputs are invalid or a dependency fails.`,
      task: `Answer the interview prompt aloud, then implement a related coding task in 15–20 minutes and explain your testing strategy.`,
      interview: `When would you choose ${name} for a project, and when would another tool be a better fit?`,
      question: 'What is a strong way to justify a technical choice in an interview?',
      options: ['Compare requirements, trade-offs and alternatives', 'Say it is popular and stop there', 'Ignore reliability and maintenance', 'Avoid mentioning limitations'],
      answer: 0,
    },
  ]
  const toggleStage = (index) => setExpandedStages((current) => current.includes(index) ? current.filter((stage) => stage !== index) : [...current, index])
  const markComplete = (index) => setCompletedStages((current) => current.includes(index) ? current.filter((stage) => stage !== index) : [...current, index])
  return <article className={`py-framework ${open ? 'open' : ''}`}>
    <button type="button" className="py-framework-head" onClick={() => setOpen(!open)} aria-expanded={open}>
      <span><strong>{name}</strong><small>{role} · {completedStages.length}/${stages.length} lessons completed</small></span>{open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
    </button>
    {open && <div className="py-framework-body">
      <div className="py-stage-list">
        {stages.map((lesson, index) => {
          const expanded = expandedStages.includes(index)
          const answerChecked = checkedAnswers.includes(index)
          return <article key={lesson.title} className={`py-stage-lesson ${expanded ? 'expanded' : ''}`}>
            <button type="button" className="py-stage-lesson-head" aria-expanded={expanded} onClick={() => toggleStage(index)}>
              <span className="py-stage-number">{completedStages.includes(index) ? '✓' : index + 1}</span>
              <span className="py-stage-lesson-title"><strong>{lesson.title}</strong><small>{name} · {index === 0 ? 'Start here' : index === 4 ? 'Hands-on project' : index === 5 ? 'Practice questions' : 'Lesson and practice'}</small></span>
              {expanded ? <ChevronDown size={17} /> : <ChevronRight size={17} />}
            </button>
            {expanded && <div className="py-stage-lesson-content">
              <p>{lesson.explanation}</p>
              <h5>Example and walkthrough</h5>
              <p>{lesson.example}</p>
              <pre><code>{lesson.code}</code></pre>
              <section className="py-stage-task"><strong>Practice task</strong><p>{lesson.task}</p></section>
              <section className="py-stage-task"><strong>Interview follow-up</strong><p>{lesson.interview}</p></section>
              <section className="py-stage-mcq">
                <strong>Practical MCQ</strong>
                <p>{lesson.question}</p>
                <div className="py-stage-mcq-options">{lesson.options.map((option, optionIndex) => <button type="button" key={option} className={answers[index] === optionIndex ? 'selected' : ''} onClick={() => { setAnswers((current) => ({ ...current, [index]: optionIndex })); setCheckedAnswers((current) => current.filter((stage) => stage !== index)) }}>{String.fromCharCode(65 + optionIndex)}. {option}</button>)}</div>
                <button type="button" className="py-stage-check" disabled={answers[index] === undefined || answerChecked} onClick={() => setCheckedAnswers((current) => [...current, index])}>Check answer</button>
                {answerChecked && <p className={`py-stage-feedback ${answers[index] === lesson.answer ? 'correct' : 'incorrect'}`} role="status">{answers[index] === lesson.answer ? 'Correct — well done.' : `Not quite. The correct answer is: ${lesson.options[lesson.answer]}.`}</p>}
              </section>
              <button type="button" className={`py-complete ${completedStages.includes(index) ? 'completed' : ''}`} onClick={() => markComplete(index)}>{completedStages.includes(index) ? '✓ Lesson completed' : 'Mark lesson complete'}</button>
            </div>}
          </article>
        })}
      </div>
    </div>}
  </article>
}

export default function PythonEcosystem() {
  const [group, setGroup] = useState('Web frameworks')
  const current = useMemo(() => groups.find((g) => g.name === group) || groups[0], [group])
  return <section className="python-ecosystem">
    <div className="python-ecosystem-head"><span>STEP 03 · PYTHON ECOSYSTEM</span><h2>Frameworks & Libraries: Setup → Advanced → Real Projects</h2><p>After the core Python lessons, continue into the major Python frameworks and libraries. Each item has its own nested Basic-to-Advanced learning path, real-world project and interview preparation.</p></div>
    <div className="py-group-tabs">{groups.map(({ name, icon: Icon }) => <button key={name} className={group === name ? 'active' : ''} onClick={() => setGroup(name)}><Icon size={16} />{name}</button>)}</div>
    <div className="py-framework-list">{current.items.map((item) => <FrameworkLessons key={item[0]} item={item} />)}</div>
    <div className="py-roadmap"><Layers3 size={18} /><div><strong>Recommended Python path</strong><p>Python fundamentals → virtual environments → Web/API frameworks → data libraries → async/background jobs → testing → production projects → interview preparation.</p></div><Code2 size={20} /></div>
  </section>
}
