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
  const [stage, setStage] = useState(0)
  const [done, setDone] = useState(false)
  const [name, role, setup, roadmap, project] = item
  const stages = [
    ['Setup', `Install ${name}, create a virtual environment, verify the package and create a small starter project.`, setup],
    ['Beginner', `Learn the core ${name} concepts: terminology, project structure, first working example, inputs/outputs and the most common mistakes.`, `${setup}\n# then build a minimal ${name} example`],
    ['Intermediate', `Move beyond tutorials: organize modules, validate inputs, handle errors, test behavior, use configuration correctly and connect the library to a real data source.`, `# Structure the application into reusable modules\n# Add validation, logging and tests`],
    ['Advanced', `Study production concerns: performance, concurrency where applicable, security, observability, failure recovery, dependency management and deployment patterns.`, `# Production checklist\n# timeouts + retries + logging + metrics + tests`],
    ['Real-world project', project, `Project → design → implementation → tests → deployment → monitoring\n${roadmap}`],
    ['Interview preparation', `Prepare for ${name} interviews with architecture questions, syntax questions, debugging scenarios, trade-offs and a live coding task.`, `Explain: ${roadmap}\nPractice: design one feature and defend your choices`],
  ]
  return <article className={`py-framework ${open ? 'open' : ''}`}>
    <button className="py-framework-head" onClick={() => setOpen(!open)} aria-expanded={open}>
      <span><strong>{name}</strong><small>{role}</small></span>{open ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
    </button>
    {open && <div className="py-framework-body">
      <div className="py-stage-buttons">{stages.map((s, i) => <button key={s[0]} className={stage === i ? 'active' : ''} onClick={() => setStage(i)}><span>{i + 1}</span>{s[0]}</button>)}</div>
      <div className="py-stage-content"><span className="py-stage-label">STAGE {stage + 1} · {stages[stage][0].toUpperCase()}</span><h4>{stages[stage][0]}: {name}</h4><p>{stages[stage][1]}</p><pre>{stages[stage][2]}</pre>{stage === 4 && <div className="py-project-check"><Rocket size={16} /><span>Project outcome: a portfolio-ready implementation, README, tests and deployment notes.</span></div>}{stage === 5 && <div className="py-project-check"><FlaskConical size={16} /><span>Interview outcome: explain the design, write code, debug failures and discuss production trade-offs.</span></div>}<button className={`py-complete ${done ? 'completed' : ''}`} onClick={() => setDone(!done)}>{done ? '✓ Lesson completed' : 'Mark stage complete'}</button></div>
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
