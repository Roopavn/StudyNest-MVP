// Original Flask curriculum for AR CodeLab: foundations through production and interview practice.
export const flaskCourseLessons = [
  {
    id: 'flask-1', track: 'Flask', level: 'Basic', title: "Flask architecture, WSGI and request flow", duration: '20 min', kind: 'layers',
    summary: "Understand Flask applications, routes, request handling and response objects.",
    explain: "Flask is a lightweight WSGI web framework. A request enters the WSGI server, Flask matches a URL rule, invokes a view function and converts its return value into a response. Extensions add capabilities such as database integration and authentication.",
    code: "from flask import Flask\napp = Flask(__name__)\n\n@app.get('/')\ndef home():\n    return 'Hello Flask'\n\n# Development only: flask --app app run --debug",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create a minimal app with a home route and describe how the request reaches the view.", solutionHint: "Create app.py, define Flask(__name__), add a route and run it with the Flask CLI.", interviewQuestion: "What does Flask provide, and what is left to extensions or the application?"
  },
  {
    id: 'flask-2', track: 'Flask', level: 'Basic', title: "Install Flask and create a virtual environment", duration: '20 min', kind: 'layers',
    summary: "Set up an isolated Flask project on Windows or Linux.",
    explain: "Use one virtual environment per project so dependency versions do not leak into other applications. Install Flask inside the activated environment and record dependencies. Debug mode is for local development only and must not be exposed in production.",
    code: "python -m venv .venv\n# Windows PowerShell: .venv\\Scripts\\Activate.ps1\n# macOS/Linux: source .venv/bin/activate\npython -m pip install flask\npython -m pip freeze > requirements.txt",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create and activate an environment, install Flask and confirm the version.", solutionHint: "Run python -m flask --version and ensure the selected IDE interpreter points to .venv.", interviewQuestion: "Why should each application use an isolated Python environment?"
  },
  {
    id: 'flask-3', track: 'Flask', level: 'Basic', title: "Routing, URL variables and converters", duration: '20 min', kind: 'layers',
    summary: "Map URLs to functions and accept typed path values.",
    explain: "Route decorators register URL rules. Variable segments capture text; converters such as int restrict values to a type. Use clear resource-oriented URLs and return appropriate responses for invalid identifiers.",
    code: "from flask import Flask\napp = Flask(__name__)\n\n@app.get('/users/<int:user_id>')\ndef get_user(user_id):\n    return {'user_id': user_id}\n\n# GET /users/42 returns JSON",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Add /products/<int:product_id> and reject unsupported path types naturally.", solutionHint: "Use an int converter and return the captured value in a dictionary.", interviewQuestion: "How do Flask URL converters work?"
  },
  {
    id: 'flask-4', track: 'Flask', level: 'Basic', title: "HTTP methods, status codes and response objects", duration: '20 min', kind: 'layers',
    summary: "Build endpoints with deliberate HTTP semantics.",
    explain: "GET reads a resource, POST commonly creates one, PUT replaces, PATCH partially updates, and DELETE removes. A response includes a body, status code and headers. Return explicit status codes when the default 200 is not correct.",
    code: "from flask import Flask, jsonify\napp = Flask(__name__)\n\n@app.post('/items')\ndef create_item():\n    return jsonify(message='created'), 201",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Add GET and POST endpoints and verify their status codes with curl or a REST client.", solutionHint: "Return a tuple containing a response body and status code for creation.", interviewQuestion: "When should an API return 201 instead of 200?"
  },
  {
    id: 'flask-5', track: 'Flask', level: 'Basic', title: "Templates, Jinja and static assets", duration: '20 min', kind: 'layers',
    summary: "Render HTML pages without mixing markup into view functions.",
    explain: "Flask integrates Jinja templates through render_template. Templates can extend a base layout and render static assets through url_for('static', filename=...). Jinja autoescapes normal HTML templates; avoid marking untrusted input as safe.",
    code: "# templates/profile.html\n<h1>Hello, {{ name }}</h1>\n\n# app.py\nfrom flask import render_template\n@app.get('/profile/<name>')\ndef profile(name):\n    return render_template('profile.html', name=name)",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create a base template, a child page and a stylesheet in static/.", solutionHint: "Use render_template and template inheritance with {% extends 'base.html' %}.", interviewQuestion: "Why should untrusted content not be marked safe in a Jinja template?"
  },
  {
    id: 'flask-6', track: 'Flask', level: 'Basic', title: "Request data, query strings and JSON bodies", duration: '20 min', kind: 'layers',
    summary: "Read input from query parameters, forms and JSON requests safely.",
    explain: "The request object exposes query args, form fields, headers and JSON. Validate data at the boundary and handle missing or malformed values. Do not trust client-provided fields, IDs, prices or role names.",
    code: "from flask import request, jsonify\n@app.post('/echo')\ndef echo():\n    payload = request.get_json(silent=True) or {}\n    name = payload.get('name')\n    if not isinstance(name, str) or not name.strip():\n        return jsonify(error='name is required'), 400\n    return jsonify(name=name.strip())",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Write an endpoint that accepts JSON and returns a 400 for invalid input.", solutionHint: "Use request.get_json(silent=True), check types and return a structured error.", interviewQuestion: "How would you validate untrusted JSON input in Flask?"
  },
  {
    id: 'flask-7', track: 'Flask', level: 'Intermediate', title: "Application factory and configuration", duration: '20 min', kind: 'layers',
    summary: "Organize apps for testing, multiple environments and maintainability.",
    explain: "An application factory creates and configures an app when called. It makes test configuration easier and avoids module-level global state. Keep development, testing and production configuration distinct and load secrets from environment variables or a secret manager.",
    code: "import os\nfrom flask import Flask\n\ndef create_app(test_config=None):\n    app = Flask(__name__)\n    app.config.from_mapping(SECRET_KEY=os.environ.get('SECRET_KEY'))\n    if test_config:\n        app.config.update(test_config)\n    return app",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Refactor a single-file application into create_app() and test configuration.", solutionHint: "Return the configured app from a factory and pass TESTING=True in tests.", interviewQuestion: "What problems does the application factory pattern solve?"
  },
  {
    id: 'flask-8', track: 'Flask', level: 'Intermediate', title: "Blueprints and modular application structure", duration: '20 min', kind: 'layers',
    summary: "Split features into reusable route modules.",
    explain: "Blueprints group related routes and can be registered with a URL prefix. They help teams organize features without creating multiple Flask application instances. Keep route handlers focused and move complex business logic into service modules.",
    code: "from flask import Blueprint, jsonify\nproducts = Blueprint('products', __name__)\n\n@products.get('/')\ndef list_products():\n    return jsonify(items=[])\n\n# app.register_blueprint(products, url_prefix='/api/products')",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create auth and products blueprints and register them under separate prefixes.", solutionHint: "Create a Blueprint in each module, then register both in create_app().", interviewQuestion: "How do blueprints differ from separate Flask applications?"
  },
  {
    id: 'flask-9', track: 'Flask', level: 'Intermediate', title: "Error handlers and consistent API errors", duration: '20 min', kind: 'layers',
    summary: "Return predictable errors without leaking internals.",
    explain: "Register handlers for common HTTP exceptions and application errors. Clients benefit from a consistent JSON shape; production responses should not expose stack traces, SQL details or secrets. Log diagnostic context on the server while returning safe messages.",
    code: "from flask import jsonify\nfrom werkzeug.exceptions import NotFound\n\n@app.errorhandler(NotFound)\ndef not_found(error):\n    return jsonify(error={'code':'NOT_FOUND','message':'Resource not found'}), 404",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create JSON handlers for 404 and 500 responses with safe messages.", solutionHint: "Use @app.errorhandler and test both a missing route and an intentional internal failure.", interviewQuestion: "What information belongs in an API error response versus server logs?"
  },
  {
    id: 'flask-10', track: 'Flask', level: 'Intermediate', title: "Persistence with SQLAlchemy", duration: '20 min', kind: 'layers',
    summary: "Model relational data and manage database sessions.",
    explain: "Flask does not include an ORM by default. SQLAlchemy models represent tables and sessions manage units of work. Use migrations to evolve schemas, define constraints in the database, and ensure sessions are cleaned up correctly using the chosen integration.",
    code: "# Example model using Flask-SQLAlchemy\nfrom flask_sqlalchemy import SQLAlchemy\ndb = SQLAlchemy()\n\nclass Product(db.Model):\n    id = db.Column(db.Integer, primary_key=True)\n    name = db.Column(db.String(120), nullable=False, unique=True)",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create a Product model and add a migration for a new field.", solutionHint: "Initialize the extension in the factory, define the model and use Flask-Migrate for schema changes.", interviewQuestion: "Why should production schema changes use migrations rather than create_all() alone?"
  },
  {
    id: 'flask-11', track: 'Flask', level: 'Intermediate', title: "CRUD services and transaction boundaries", duration: '20 min', kind: 'layers',
    summary: "Implement create, read, update and delete workflows cleanly.",
    explain: "CRUD endpoints should validate data, return correct status codes and enforce business rules. Commit only after successful changes; roll back on failure. Keep database operations and business rules testable instead of duplicating them in multiple route functions.",
    code: "@app.post('/products')\ndef create_product():\n    data = request.get_json() or {}\n    name = data.get('name', '').strip()\n    if not name:\n        return {'error': 'name is required'}, 400\n    product = Product(name=name)\n    db.session.add(product)\n    db.session.commit()\n    return {'id': product.id, 'name': product.name}, 201",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Build CRUD routes for products with validation and clear not-found responses.", solutionHint: "Use get_or_404 or explicit lookup, validate before commit and test update/delete cases.", interviewQuestion: "Where should transaction commit and rollback behavior be handled?"
  },
  {
    id: 'flask-12', track: 'Flask', level: 'Intermediate', title: "Authentication, sessions and password security", duration: '20 min', kind: 'layers',
    summary: "Protect routes and store identity credentials safely.",
    explain: "Flask supports signed session cookies and extensions for authentication. Signed cookies are not encrypted, so do not store sensitive secrets in them. Hash passwords with a modern password-hashing function, protect session cookies and distinguish authentication from authorization.",
    code: "from werkzeug.security import generate_password_hash, check_password_hash\npassword_hash = generate_password_hash('example-password')\nassert check_password_hash(password_hash, 'example-password')",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Implement login/logout behavior and restrict one route to authenticated users.", solutionHint: "Use an established authentication extension for production; never store plaintext passwords.", interviewQuestion: "Why is a signed Flask session cookie not the same as an encrypted storage vault?"
  },
  {
    id: 'flask-13', track: 'Flask', level: 'Intermediate', title: "Authorization, roles and object-level permissions", duration: '20 min', kind: 'layers',
    summary: "Ensure a signed-in user can only access allowed resources.",
    explain: "Authentication identifies the user; authorization decides what that user may do. Check ownership and permissions on every protected read or write, not just in the UI. Avoid trusting role or user IDs submitted by the client.",
    code: "def can_edit(user, product):\n    return user.is_authenticated and (user.is_admin or product.owner_id == user.id)\n\n# Apply this check before modifying the product.",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Add an ownership check to update and delete operations.", solutionHint: "Load the resource from trusted persistence, then compare its owner to the authenticated principal.", interviewQuestion: "What is an insecure direct object reference, and how can a Flask app prevent it?"
  },
  {
    id: 'flask-14', track: 'Flask', level: 'Intermediate', title: "REST API design, pagination and filtering", duration: '20 min', kind: 'layers',
    summary: "Design endpoints that stay predictable as data grows.",
    explain: "Use plural resource paths, stable ordering, bounded page sizes and allowlisted filters. Return consistent error bodies and avoid returning unbounded result sets. Consider cursor pagination when datasets change frequently or offsets become expensive.",
    code: "@app.get('/api/products')\ndef list_products():\n    page = max(1, request.args.get('page', 1, type=int))\n    size = min(100, max(1, request.args.get('page_size', 20, type=int)))\n    # Query ordered records with limit/offset\n    return {'page': page, 'page_size': size, 'items': []}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Add filtering by status and pagination with a maximum page size.", solutionHint: "Validate page parameters and use deterministic ordering before applying limit/offset.", interviewQuestion: "Why should page size and ordering be bounded and deterministic?"
  },
  {
    id: 'flask-15', track: 'Flask', level: 'Intermediate', title: "Testing with pytest and Flask test client", duration: '20 min', kind: 'layers',
    summary: "Test routes, validation, permissions and failure cases without a live server.",
    explain: "Flask's test client sends requests directly to the application. Configure an isolated test database and test success, validation errors, authorization failures and missing resources. Tests should be independent and avoid external services unless explicitly testing integrations.",
    code: "def test_health(client):\n    response = client.get('/health')\n    assert response.status_code == 200\n    assert response.json == {'status': 'ok'}\n\n# Build a client fixture from create_app({'TESTING': True})",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Write tests for a valid POST, invalid JSON and missing product.", solutionHint: "Use pytest fixtures and create_app with a dedicated test configuration.", interviewQuestion: "How does Flask's test client help test routes without starting a network server?"
  },
  {
    id: 'flask-16', track: 'Flask', level: 'Advanced', title: "Request hooks, middleware and correlation IDs", duration: '20 min', kind: 'layers',
    summary: "Add cross-cutting request behavior and useful diagnostics.",
    explain: "before_request and after_request hooks can apply request-wide behavior; WSGI middleware wraps the application. Correlation IDs help trace one request across logs and services. Do not log credentials, session cookies or full sensitive request bodies.",
    code: "import uuid\nfrom flask import g, request\n\n@app.before_request\ndef assign_request_id():\n    g.request_id = request.headers.get('X-Request-ID') or str(uuid.uuid4())\n\n@app.after_request\ndef attach_request_id(response):\n    response.headers['X-Request-ID'] = g.request_id\n    return response",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Add a request ID to logs and response headers, with safe validation of caller-supplied IDs.", solutionHint: "Use g for request-local data and an after_request hook for response headers.", interviewQuestion: "When would you use a Flask hook versus WSGI middleware?"
  },
  {
    id: 'flask-17', track: 'Flask', level: 'Advanced', title: "Async views, background jobs and task queues", duration: '20 min', kind: 'layers',
    summary: "Choose a suitable execution model for slow or long-running work.",
    explain: "Async views can help with concurrent I/O when the stack and dependencies support it, but do not automatically make CPU-bound code faster. Long jobs should generally run in a queue such as Celery or RQ. Return a job identifier and expose status instead of holding a request open for minutes.",
    code: "# Pseudocode for a queued job\njob = generate_report_task.delay(report_id)\nreturn {'job_id': job.id, 'status': 'queued'}, 202",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Move a report-generation task out of a request handler and design a status endpoint.", solutionHint: "Persist job state, enqueue the task and make retries idempotent.", interviewQuestion: "Why is a task queue often better than doing long work inside a web request?"
  },
  {
    id: 'flask-18', track: 'Flask', level: 'Advanced', title: "Security: CSRF, CORS, cookies and secrets", duration: '20 min', kind: 'layers',
    summary: "Apply browser and API security controls correctly.",
    explain: "Cookie-authenticated forms need CSRF protection. CORS controls which browser origins may read responses; it is not authentication. Use HTTPS, secure cookie flags, restrictive allowed origins, secret management, dependency updates and input validation.",
    code: "# Example production cookie settings\napp.config.update(\n    SESSION_COOKIE_SECURE=True,\n    SESSION_COOKIE_HTTPONLY=True,\n    SESSION_COOKIE_SAMESITE='Lax',\n)\n# Add CSRF protection for cookie-authenticated forms using an established extension.",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Create a production security checklist for a browser-based Flask app and a token-based API.", solutionHint: "Configure CSRF protection where cookies authenticate requests; use a narrow CORS allowlist.", interviewQuestion: "Why does CORS not replace authentication or authorization?"
  },
  {
    id: 'flask-19', track: 'Flask', level: 'Advanced', title: "Caching, database performance and rate limiting", duration: '20 min', kind: 'layers',
    summary: "Improve response time without creating stale or unsafe behavior.",
    explain: "Measure before optimizing. Add indexes for real query patterns, avoid N+1 database access, cache only data with a defined invalidation strategy, and rate-limit expensive or abuse-prone endpoints. Avoid caching user-specific responses in shared caches without correct keys and headers.",
    code: "# Use an extension such as Flask-Limiter for rate limits\n# Add indexes after reviewing query plans\n# Cache only with explicit expiry/invalidation rules",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Investigate a slow list endpoint using query timing, an index and bounded pagination.", solutionHint: "Measure query count and latency, inspect query plans and test cache invalidation.", interviewQuestion: "What trade-offs come with caching dynamic API responses?"
  },
  {
    id: 'flask-20', track: 'Flask', level: 'Advanced', title: "Production deployment with Gunicorn and reverse proxy", duration: '20 min', kind: 'layers',
    summary: "Run Flask using a production WSGI server and correct proxy settings.",
    explain: "The built-in development server is not designed for production. Use a production WSGI server such as Gunicorn on supported platforms, configure a reverse proxy or managed hosting layer, set a production secret, disable debug mode and provide health checks and graceful shutdown.",
    code: "# requirements.txt includes Flask and gunicorn\n# Start from project root:\ngunicorn --workers 2 --bind 0.0.0.0:8000 'app:create_app()'",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Prepare a deployment configuration with environment-based settings and a health endpoint.", solutionHint: "Test the exact application import path, configure worker count for the environment and never enable debug in production.", interviewQuestion: "Why should the Flask development server not be exposed as a production server?"
  },
  {
    id: 'flask-21', track: 'Flask', level: 'Advanced', title: "Observability, health checks and graceful failures", duration: '20 min', kind: 'layers',
    summary: "Make deployed services diagnosable and resilient.",
    explain: "Use structured logs, request IDs, metrics and error tracking. Separate liveness from readiness: liveness asks whether the process is alive, readiness asks whether it can serve traffic. Avoid exposing database credentials or detailed exceptions in health responses.",
    code: "@app.get('/health/live')\ndef live():\n    return {'status': 'alive'}\n\n@app.get('/health/ready')\ndef ready():\n    # Check required dependencies with a short timeout\n    return {'status': 'ready'}",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Design health checks and log fields for an API that uses a database and a task queue.", solutionHint: "Keep liveness lightweight; readiness should check critical dependencies safely with timeouts.", interviewQuestion: "What is the difference between liveness and readiness checks?"
  },
  {
    id: 'flask-22', track: 'Flask', level: 'Advanced', title: "Portfolio project: inventory REST API", duration: '20 min', kind: 'layers',
    summary: "Combine routing, persistence, validation, testing and deployment into one project.",
    explain: "Build an inventory API with product CRUD, search, pagination, user ownership, database migrations, tests and production configuration. Document setup, API examples, design trade-offs and limitations. Keep sample data synthetic and never commit secrets.",
    code: "# Suggested structure\napp/\n  __init__.py\n  routes/products.py\n  models.py\n  services/inventory.py\ntests/\n  test_products.py\nrequirements.txt\nREADME.md",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Publish a tested inventory API with setup instructions, sample requests and a deployment checklist.", solutionHint: "Build in small slices: health route, model/migration, CRUD, validation, tests, auth and deployment.", interviewQuestion: "Which design choices make a small Flask API maintainable as its feature set grows?"
  },
  {
    id: 'flask-23', track: 'Flask', level: 'Advanced', title: "Flask interview review and debugging scenarios", duration: '20 min', kind: 'layers',
    summary: "Practice explaining Flask internals, common failures and trade-offs.",
    explain: "Interview answers should connect concepts to operational behavior: request context, application context, blueprints, factories, sessions, WSGI deployment, testing and security. Diagnose symptoms from logs and reproduce issues with focused tests before changing production settings.",
    code: "# Quick review\n# flask --app app routes\n# python -m pytest -q\n# flask --app app run --debug  # local development only",
    output: "Run the example in the project environment and verify the behavior described in the lesson.",
    task: "Explain how you would debug a 500 error, a slow query and a session issue.", solutionHint: "Check the traceback and request ID, reproduce locally, add a regression test and verify configuration and dependencies.", interviewQuestion: "How do Flask's application context and request context differ?"
  }
]
