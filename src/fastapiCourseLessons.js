// Original FastAPI curriculum for AR CodeLab: foundations through production and interview practice.
export const fastapiCourseLessons = [
  {
    id: 'fastapi-1', track: 'FastAPI', level: 'Basic', title: "FastAPI architecture and ASGI request lifecycle", duration: '20 min', kind: 'layers',
    summary: "Understand path operations, ASGI and how requests reach handlers.",
    explain: "FastAPI builds on Starlette and uses type annotations plus Pydantic for validation and serialization. An ASGI server such as Uvicorn accepts requests and calls the application. OpenAPI schema and interactive docs are generated from the route declarations.",
    code: "from fastapi import FastAPI\napp = FastAPI(title='StudyNest API')\n\n@app.get('/health')\ndef health():\n    return {'status': 'ok'}\n\n# uvicorn app:app --reload",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create a health endpoint and inspect /docs and /openapi.json.", solutionHint: "Install fastapi and uvicorn, define FastAPI() and run the module using the correct import path.", interviewQuestion: "What is ASGI, and how does it differ from WSGI?"
  },
  {
    id: 'fastapi-2', track: 'FastAPI', level: 'Basic', title: "Install FastAPI, Uvicorn and a virtual environment", duration: '20 min', kind: 'layers',
    summary: "Set up a reproducible local API environment.",
    explain: "Use a project-specific environment, install FastAPI with Uvicorn's standard extras, pin or lock dependencies for repeatable deployments and select the same interpreter in your IDE. Reload mode is intended for development, not production.",
    code: "python -m venv .venv\n# Windows PowerShell: .venv\\Scripts\\Activate.ps1\n# macOS/Linux: source .venv/bin/activate\npython -m pip install 'fastapi[standard]'\npython -m pip freeze > requirements.txt",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create a clean environment and start a sample app using Uvicorn.", solutionHint: "Check python -m pip show fastapi and uvicorn; confirm the module:app import path.", interviewQuestion: "Why do FastAPI and Uvicorn serve different roles?"
  },
  {
    id: 'fastapi-3', track: 'FastAPI', level: 'Basic', title: "Path, query and header parameters", duration: '20 min', kind: 'layers',
    summary: "Declare request parameters with clear types and defaults.",
    explain: "FastAPI infers path parameters from the route and other simple parameters as query parameters unless otherwise declared. Type annotations validate and convert inputs. Use Header for headers and explicit aliases where needed.",
    code: "from fastapi import FastAPI, Header\napp = FastAPI()\n\n@app.get('/items/{item_id}')\ndef read_item(item_id: int, page: int = 1, x_client: str | None = Header(default=None)):\n    return {'item_id': item_id, 'page': page, 'client': x_client}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Add a typed path parameter and optional page query parameter, then test invalid values.", solutionHint: "Use int for item_id, defaults for optional query values and Header for custom headers.", interviewQuestion: "How does FastAPI decide whether a parameter is in the path or query string?"
  },
  {
    id: 'fastapi-4', track: 'FastAPI', level: 'Basic', title: "Pydantic request and response models", duration: '20 min', kind: 'layers',
    summary: "Validate API payloads and document response shapes.",
    explain: "Pydantic models define data contracts. Request models reject invalid payloads with a validation response; response_model filters and documents output. Separate create, update and read models so clients cannot set server-owned fields such as IDs or privileged flags.",
    code: "from pydantic import BaseModel, Field\nfrom fastapi import FastAPI\napp = FastAPI()\n\nclass ProductCreate(BaseModel):\n    name: str = Field(min_length=2, max_length=120)\n    price: float = Field(gt=0)\n\n@app.post('/products', response_model=ProductCreate)\ndef create_product(product: ProductCreate):\n    return product",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create input models with required fields, constraints and a distinct read model.", solutionHint: "Use Field constraints and define separate models for client input and API output.", interviewQuestion: "Why should input schemas and output schemas often be different?"
  },
  {
    id: 'fastapi-5', track: 'FastAPI', level: 'Basic', title: "HTTP methods, status codes and error handling", duration: '20 min', kind: 'layers',
    summary: "Implement predictable REST behavior.",
    explain: "Use HTTP methods according to resource semantics and status codes such as 201 for creation, 204 for successful no-content deletion, 404 for missing resources and 422 for request validation errors generated by FastAPI. Raise HTTPException for deliberate API errors.",
    code: "from fastapi import FastAPI, HTTPException, status\napp = FastAPI()\n\n@app.get('/products/{product_id}')\ndef get_product(product_id: int):\n    if product_id != 1:\n        raise HTTPException(status_code=404, detail='Product not found')\n    return {'id': 1, 'name': 'Notebook'}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Implement create and read endpoints with explicit status codes and a structured 404.", solutionHint: "Use status.HTTP_201_CREATED and raise HTTPException for known failures.", interviewQuestion: "When should an endpoint raise HTTPException instead of returning an error dictionary?"
  },
  {
    id: 'fastapi-6', track: 'FastAPI', level: 'Basic', title: "Automatic OpenAPI docs and API contracts", duration: '20 min', kind: 'layers',
    summary: "Use generated documentation to inspect and communicate API behavior.",
    explain: "FastAPI derives an OpenAPI schema from route signatures, annotations, models, status codes and metadata. The Swagger UI is commonly available at /docs and ReDoc at /redoc. Accurate models and descriptions improve both docs and generated clients.",
    code: "from fastapi import FastAPI\napp = FastAPI(title='Catalog API', version='1.0.0', description='Product catalog endpoints')\n\n@app.get('/products/{product_id}', summary='Get a product')\ndef get_product(product_id: int):\n    return {'id': product_id}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Document one endpoint, add response examples and inspect the generated OpenAPI schema.", solutionHint: "Set title, version, summary, response_model and documented status codes.", interviewQuestion: "How does OpenAPI documentation stay synchronized with FastAPI route declarations?"
  },
  {
    id: 'fastapi-7', track: 'FastAPI', level: 'Intermediate', title: "Dependency injection with Depends", duration: '20 min', kind: 'layers',
    summary: "Reuse authentication, database sessions and shared validation logic.",
    explain: "Depends declares a dependency that FastAPI resolves for each request. Dependencies can depend on other dependencies and can yield resources that require cleanup. Keep dependencies small and testable; avoid using them as hidden containers for unrelated business logic.",
    code: "from typing import Annotated\nfrom fastapi import Depends, FastAPI\napp = FastAPI()\n\ndef get_page_size(size: int = 20):\n    return min(max(size, 1), 100)\n\n@app.get('/items')\ndef list_items(size: Annotated[int, Depends(get_page_size)]):\n    return {'size': size}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create a dependency that validates pagination and another that supplies the current user.", solutionHint: "Use Depends and test the dependency independently where possible.", interviewQuestion: "What benefits does FastAPI dependency injection provide?"
  },
  {
    id: 'fastapi-8', track: 'FastAPI', level: 'Intermediate', title: "Async def versus def and blocking I/O", duration: '20 min', kind: 'layers',
    summary: "Choose concurrency patterns that fit the libraries being called.",
    explain: "FastAPI runs async endpoints on the event loop and runs ordinary def path operations in a thread pool. Awaitable I/O libraries can cooperate with async scheduling, but blocking calls inside async def can stall the event loop. CPU-heavy work often belongs in a process or task worker.",
    code: "import asyncio\nfrom fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/wait')\nasync def wait():\n    await asyncio.sleep(0.1)\n    return {'done': True}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Compare an async HTTP client with a blocking client and explain the impact on concurrency.", solutionHint: "Use async-compatible clients in async routes; do not add async just for style.", interviewQuestion: "Why can calling a blocking function inside async def reduce API throughput?"
  },
  {
    id: 'fastapi-9', track: 'FastAPI', level: 'Intermediate', title: "Database integration and SQLAlchemy sessions", duration: '20 min', kind: 'layers',
    summary: "Persist data safely and manage session lifetime.",
    explain: "FastAPI does not require a specific ORM. A common pattern uses SQLAlchemy and a dependency that yields a session and closes it after the request. Commit at the appropriate transaction boundary, roll back on errors and avoid sharing one mutable session across concurrent requests.",
    code: "from sqlalchemy.orm import Session\nfrom typing import Annotated\nfrom fastapi import Depends\n\ndef get_db():\n    db = SessionLocal()\n    try:\n        yield db\n    finally:\n        db.close()",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Wire a database dependency into a CRUD route and ensure sessions close on both success and failure.", solutionHint: "Use a yield dependency with try/finally; configure engine and sessionmaker in a separate module.", interviewQuestion: "Why should a SQLAlchemy session not be reused globally across requests?"
  },
  {
    id: 'fastapi-10', track: 'FastAPI', level: 'Intermediate', title: "CRUD endpoints, pagination and filtering", duration: '20 min', kind: 'layers',
    summary: "Build database-backed endpoints with bounded queries.",
    explain: "Separate create/read/update schemas, validate all inputs, check missing resources and paginate large result sets. Use deterministic ordering and allowlisted sort fields. Database constraints remain necessary even when Pydantic validation is present.",
    code: "from fastapi import FastAPI, Query\napp = FastAPI()\n\n@app.get('/products')\ndef list_products(limit: int = Query(20, ge=1, le=100), offset: int = Query(0, ge=0)):\n    return {'limit': limit, 'offset': offset, 'items': []}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Implement a filtered product list with bounded pagination and predictable errors.", solutionHint: "Use Query constraints and pass validated parameters to a database query with stable ordering.", interviewQuestion: "How do you avoid unbounded queries and unstable pagination in an API?"
  },
  {
    id: 'fastapi-11', track: 'FastAPI', level: 'Intermediate', title: "Authentication with OAuth2 and JWT", duration: '20 min', kind: 'layers',
    summary: "Identify callers and validate credentials safely.",
    explain: "OAuth2 password bearer helpers describe token flows, while a JWT must be verified for signature, expiry, issuer and audience as applicable. Authentication alone does not grant every permission. Store signing keys securely and avoid logging tokens. Prefer established libraries and tested flows over custom cryptography.",
    code: "from fastapi import Depends, FastAPI\nfrom fastapi.security import OAuth2PasswordBearer\napp = FastAPI()\noauth2_scheme = OAuth2PasswordBearer(tokenUrl='token')\n\n@app.get('/me')\ndef me(token: str = Depends(oauth2_scheme)):\n    # Verify token and load identity in real application code\n    return {'authenticated': bool(token)}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Design a token-validation dependency and list the claims and checks required in production.", solutionHint: "Use a vetted JWT library, validate cryptographic signature and claims, then load the principal.", interviewQuestion: "What is the difference between decoding a JWT and validating it?"
  },
  {
    id: 'fastapi-12', track: 'FastAPI', level: 'Intermediate', title: "Authorization and role-based access", duration: '20 min', kind: 'layers',
    summary: "Protect each operation with least-privilege rules.",
    explain: "Authorization checks whether the authenticated principal may perform a specific action on a specific resource. Use dependency functions for shared role checks, but still enforce object ownership. Do not rely on hidden frontend controls or client-supplied role names.",
    code: "from fastapi import Depends, HTTPException\n\ndef require_admin(user=Depends(get_current_user)):\n    if 'admin' not in user.roles:\n        raise HTTPException(status_code=403, detail='Forbidden')\n    return user",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Protect an admin endpoint and enforce ownership when fetching a record.", solutionHint: "Resolve the user from a validated token, check permissions on the server and test 401/403 cases.", interviewQuestion: "Why are authentication and authorization separate checks?"
  },
  {
    id: 'fastapi-13', track: 'FastAPI', level: 'Intermediate', title: "Background tasks and durable job queues", duration: '20 min', kind: 'layers',
    summary: "Move slow work out of latency-sensitive requests.",
    explain: "FastAPI BackgroundTasks is suitable for small post-response tasks but is not a durable distributed queue. For work that must survive restarts, needs retries or takes significant resources, use a worker system such as Celery or another queue. Make jobs idempotent and expose status where useful.",
    code: "from fastapi import BackgroundTasks, FastAPI\napp = FastAPI()\n\ndef write_audit_event(event: str):\n    # Small illustrative task; use durable storage in real applications\n    print(event)\n\n@app.post('/events', status_code=202)\ndef create_event(background_tasks: BackgroundTasks):\n    background_tasks.add_task(write_audit_event, 'created')\n    return {'status': 'accepted'}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Choose between BackgroundTasks and a durable worker for email, report generation and billing workflows.", solutionHint: "Evaluate durability, retries, runtime, resource usage and operational visibility.", interviewQuestion: "When is FastAPI BackgroundTasks insufficient for a production job?"
  },
  {
    id: 'fastapi-14', track: 'FastAPI', level: 'Intermediate', title: "Testing with pytest and TestClient", duration: '20 min', kind: 'layers',
    summary: "Test validation, dependencies, status codes and error paths.",
    explain: "FastAPI integrates with Starlette's TestClient. Override dependencies to isolate authentication and databases. Test success and failure cases, and use async test tools when directly testing asynchronous functions or async clients. Keep tests independent of external systems.",
    code: "from fastapi.testclient import TestClient\nfrom fastapi import FastAPI\napp = FastAPI()\n@app.get('/health')\ndef health(): return {'status': 'ok'}\nclient = TestClient(app)\n\ndef test_health():\n    response = client.get('/health')\n    assert response.status_code == 200\n    assert response.json() == {'status': 'ok'}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Test valid payloads, invalid payloads, 404s and dependency overrides.", solutionHint: "Use TestClient for standard routes and dependency_overrides for controlled test fixtures.", interviewQuestion: "How can dependency overrides make API tests isolated and deterministic?"
  },
  {
    id: 'fastapi-15', track: 'FastAPI', level: 'Advanced', title: "Lifespan events and resource management", duration: '20 min', kind: 'layers',
    summary: "Initialize shared resources and clean them up safely.",
    explain: "Use FastAPI lifespan handling for resources such as database pools, HTTP clients and model sessions. Avoid expensive initialization on every request and ensure cleanup happens during shutdown. In multi-worker deployments, remember startup may run once per worker process.",
    code: "from contextlib import asynccontextmanager\nfrom fastapi import FastAPI\n\n@asynccontextmanager\nasync def lifespan(app: FastAPI):\n    app.state.ready = True\n    yield\n    app.state.ready = False\n\napp = FastAPI(lifespan=lifespan)",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Add lifespan handling for an HTTP client or database pool and test cleanup behavior.", solutionHint: "Create shared resources before yield and close them in the finally/after-yield portion.", interviewQuestion: "Why should connection pools be initialized and closed with application lifespan?"
  },
  {
    id: 'fastapi-16', track: 'FastAPI', level: 'Advanced', title: "Middleware, CORS and request tracing", duration: '20 min', kind: 'layers',
    summary: "Apply request-wide behavior and support cross-origin browser clients safely.",
    explain: "Middleware can add headers, timing and correlation IDs across requests. CORS must specify the allowed origins, methods and headers required by the frontend; wildcard settings are not suitable for every credentialed setup. Middleware should avoid consuming request bodies unexpectedly.",
    code: "from fastapi import FastAPI, Request\nimport time\napp = FastAPI()\n\n@app.middleware('http')\nasync def add_process_time(request: Request, call_next):\n    start = time.perf_counter()\n    response = await call_next(request)\n    response.headers['X-Process-Time'] = str(time.perf_counter() - start)\n    return response",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Add timing and a correlation ID, then configure a narrow CORS allowlist for a frontend.", solutionHint: "Use middleware for shared behavior and CORSMiddleware with explicit origins.", interviewQuestion: "Why is allowing every CORS origin risky for some APIs?"
  },
  {
    id: 'fastapi-17', track: 'FastAPI', level: 'Advanced', title: "Rate limiting, timeouts and resilience", duration: '20 min', kind: 'layers',
    summary: "Protect service capacity and downstream dependencies.",
    explain: "Validate input sizes, set connection and request timeouts, limit expensive operations and use rate limits for abuse-prone endpoints. Retries should be bounded and usually apply only to transient failures and safe/idempotent operations. A circuit breaker or bulkhead may help when dependencies fail repeatedly.",
    code: "# Example policy checklist\n# - outbound HTTP timeout\n# - bounded retry with backoff\n# - request size limit\n# - rate limit expensive endpoints\n# - safe timeout/error response",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Design resilience controls for an endpoint that calls an external service.", solutionHint: "Configure timeouts in the client, cap retries and track latency/error rates.", interviewQuestion: "Why can unbounded retries make a failing downstream service worse?"
  },
  {
    id: 'fastapi-18', track: 'FastAPI', level: 'Advanced', title: "Performance, profiling and worker configuration", duration: '20 min', kind: 'layers',
    summary: "Tune throughput using measurements rather than guesses.",
    explain: "Async helps when work is I/O-bound and dependencies are async-compatible. CPU-bound tasks need separate capacity planning. Worker count, connection pools and memory per worker interact; load test realistic traffic and monitor p95/p99 latency, errors and saturation before tuning.",
    code: "# Example production server command; tune workers to the environment\nuvicorn app:app --host 0.0.0.0 --port 8000\n# For multi-worker deployments, configure worker count explicitly",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create a load-test plan and identify the metrics that determine whether to scale workers.", solutionHint: "Measure throughput and tail latency while monitoring CPU, memory and downstream connection pools.", interviewQuestion: "How do you decide whether to add workers or optimize an endpoint?"
  },
  {
    id: 'fastapi-19', track: 'FastAPI', level: 'Advanced', title: "Production deployment, configuration and migrations", duration: '20 min', kind: 'layers',
    summary: "Deploy FastAPI with secure configuration and controlled release steps.",
    explain: "Run with a production ASGI server configuration, manage secrets outside source control, configure TLS at the hosting layer or reverse proxy, add health checks and logs, and plan database migrations separately from serving traffic. Test graceful shutdown and rollback procedures.",
    code: "# Local development only:\nuvicorn app:app --reload\n# Production: run an explicit deployment command/config\n# Keep API keys and DB credentials in environment/secret storage",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Write a production deployment checklist for a container or managed application platform.", solutionHint: "Separate local reload settings from production, pin dependencies and test startup/shutdown and rollback.", interviewQuestion: "What differs between a local Uvicorn command and a production deployment?"
  },
  {
    id: 'fastapi-20', track: 'FastAPI', level: 'Advanced', title: "Observability, health and readiness endpoints", duration: '20 min', kind: 'layers',
    summary: "Make runtime state visible without leaking secrets.",
    explain: "Use structured logs, request IDs, metrics and traces to connect symptoms to requests. Liveness should remain lightweight; readiness may verify critical dependencies with bounded timeouts. Avoid returning stack traces, connection strings or environment dumps in public endpoints.",
    code: "from fastapi import FastAPI\napp = FastAPI()\n\n@app.get('/health/live')\ndef live():\n    return {'status': 'alive'}\n\n@app.get('/health/ready')\ndef ready():\n    # Check required dependencies with timeouts in real code\n    return {'status': 'ready'}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Define health/readiness checks and a minimal set of logs and metrics for a production API.", solutionHint: "Keep liveness independent of slow dependencies and readiness tied to ability to serve traffic.", interviewQuestion: "What is the difference between liveness and readiness?"
  },
  {
    id: 'fastapi-21', track: 'FastAPI', level: 'Advanced', title: "Portfolio project: typed course catalog API", duration: '20 min', kind: 'layers',
    summary: "Combine schemas, persistence, authentication, testing and deployment.",
    explain: "Build a course catalog API with typed Pydantic schemas, CRUD endpoints, database migrations, filtering, pagination, token-based authentication, tests and generated docs. Include a README with sample requests, architecture, setup, environment variables and deployment decisions.",
    code: "# Suggested structure\napp/main.py\napp/api/routes/courses.py\napp/schemas/course.py\napp/models/course.py\napp/db/session.py\ntests/test_courses.py\nREADME.md",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Publish a working API project with tests, documentation and example requests.", solutionHint: "Implement one vertical slice at a time: health, schema, persistence, CRUD, auth, tests and deployment.", interviewQuestion: "Which features demonstrate production readiness in a small FastAPI portfolio project?"
  },
  {
    id: 'fastapi-22', track: 'FastAPI', level: 'Advanced', title: "FastAPI interview review and debugging scenarios", duration: '20 min', kind: 'layers',
    summary: "Practice explaining typing, dependency injection, async execution and deployment.",
    explain: "Be prepared to explain validation errors, dependency overrides, lifespan, async blocking, status codes, ASGI workers, OpenAPI, security claims and operational metrics. Debug from reproducible examples and logs, not by changing worker counts blindly.",
    code: "# Quick review\npython -m pytest -q\nuvicorn app:app --reload\n# Inspect /docs and /openapi.json locally",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Explain how you would debug a slow endpoint, unexpected 422, missing dependency and startup failure.", solutionHint: "Reproduce the request, inspect validation details and logs, isolate dependencies, then add a regression test.", interviewQuestion: "Why does a FastAPI request often return 422 before the route logic runs?"
  }
]
