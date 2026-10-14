import './SystemSetup.css'

const setupCatalog = {
  Python: {
    overview: 'Set up a clean Python development environment before starting lessons. Use a project-specific virtual environment so packages do not conflict between courses.',
    windows: ['Install Python 3 from python.org and enable “Add Python to PATH”.', 'Verify: py --version and py -m pip --version.', 'Create an environment: py -m venv .venv', 'Activate: .venv\\Scripts\\activate', 'Install tools: python -m pip install --upgrade pip', 'Recommended editor: VS Code with the Python extension.'],
    linux: ['Install Python and venv support with your distribution package manager.', 'Verify: python3 --version and python3 -m pip --version.', 'Create an environment: python3 -m venv .venv', 'Activate: source .venv/bin/activate', 'Upgrade pip: python -m pip install --upgrade pip', 'Recommended editor: VS Code with the Python extension.'],
    verify: 'python --version\npython -m pip --version\npython -c "print(\'Python setup OK\')"',
    troubleshooting: ['Command not found: reopen the terminal after changing PATH.', 'Permission errors on Linux: use a virtual environment instead of installing project packages globally.', 'Windows activation blocked: use PowerShell execution policy guidance from Microsoft rather than bypassing security controls.']
  },
  Java: {
    overview: 'Java development starts with a JDK, not only a JRE. The JDK provides the compiler, runtime and development tools used to build applications.',
    windows: ['Install a current LTS JDK such as Temurin or another trusted OpenJDK distribution.', 'Verify: java --version and javac --version.', 'Set JAVA_HOME to the JDK directory if your build tools require it.', 'Install Maven or Gradle for dependency and build management.', 'Configure VS Code or IntelliJ IDEA with the installed JDK.'],
    linux: ['Install an LTS OpenJDK package using your distribution package manager.', 'Verify: java --version and javac --version.', 'Set JAVA_HOME to the JDK path when required by Maven/Gradle.', 'Install Maven or Gradle.', 'Configure your IDE to use the same JDK version as the project.'],
    verify: 'java --version\njavac --version\n# Maven projects: mvn -version',
    troubleshooting: ['java works but javac does not: you probably installed only a runtime; install a full JDK.', 'Version mismatch: make JAVA_HOME and IDE/build-tool JDK settings consistent.']
  },
  JavaScript: {
    overview: 'Modern JavaScript development commonly uses Node.js for tooling, package management and server-side programs. Browser JavaScript can be learned without Node, but Node is needed for most modern frontend workflows.',
    windows: ['Install the current Node.js LTS release.', 'Verify: node --version and npm --version.', 'Install VS Code and the ESLint extension when appropriate.', 'Create a project with npm init or a framework scaffold such as Vite.', 'Keep package-lock.json committed for reproducible npm installs.'],
    linux: ['Install the current Node.js LTS release using a trusted package source or version manager.', 'Verify: node --version and npm --version.', 'Install VS Code or another editor.', 'Create a project with npm init or Vite.', 'Commit package-lock.json for reproducible builds.'],
    verify: 'node --version\nnpm --version\nnode -e "console.log(\'JavaScript setup OK\')"',
    troubleshooting: ['npm command missing: check that Node.js is installed and on PATH.', 'Dependency mismatch: remove only project-local node_modules when needed and run npm ci from a valid lock file.']
  },
  'C Programming': {
    overview: 'C requires a compiler and debugger. GCC or Clang turns source code into an executable, while GDB/LLDB helps investigate runtime behavior.',
    windows: ['Install a trusted GCC toolchain such as MSYS2/MinGW-w64 or use Visual Studio Build Tools.', 'Verify gcc --version or the selected compiler command.', 'Install VS Code with a C/C++ extension.', 'Learn the compile → run → debug cycle before using frameworks.'],
    linux: ['Install GCC, standard development libraries and GDB using your distribution package manager.', 'Verify gcc --version and gdb --version.', 'Install VS Code or another editor.', 'Compile with warnings enabled from the beginning.'],
    verify: 'gcc --version\ngdb --version\ncc -Wall -Wextra hello.c -o hello',
    troubleshooting: ['Compiler not found: check PATH or install the compiler toolchain.', 'Linker errors: distinguish missing source/object files from syntax or type errors.']
  },
  'HTML & CSS': {
    overview: 'HTML defines document structure, CSS controls presentation, and the browser renders the result. You do not need a server for the first lessons.',
    windows: ['Install VS Code.', 'Install a browser such as Chrome, Edge or Firefox.', 'Create index.html and styles.css.', 'Use Live Server or the browser to preview changes.', 'Open browser DevTools to inspect elements and CSS.'],
    linux: ['Install VS Code or another editor.', 'Install a modern browser.', 'Create index.html and styles.css.', 'Use a local development server when learning client-side applications.', 'Use browser DevTools for inspection and debugging.'],
    verify: 'Create index.html → open it in a browser → inspect an element → change CSS → refresh/observe the result.',
    troubleshooting: ['Styles not loading: verify the relative href path and filename.', 'Layout overflow: inspect box sizes and responsive rules in DevTools.']
  },
  SQL: {
    overview: 'SQL is a language; a DBMS such as PostgreSQL, MySQL or SQL Server executes SQL and manages data, users, indexes and transactions.',
    windows: ['Choose one DBMS first: PostgreSQL, MySQL or SQL Server.', 'Install its server and a client such as DBeaver or the vendor GUI.', 'Create a local development database and a dedicated learning user.', 'Record the host, port, database and username; never commit passwords.', 'Run a first SELECT 1 query.'],
    linux: ['Install the chosen DBMS using its official Linux repository or packages.', 'Enable/start the database service and verify its status.', 'Create a learning database and least-privilege user.', 'Install a SQL client such as DBeaver or use the vendor CLI.', 'Run SELECT 1 and create a small practice table.'],
    verify: 'PostgreSQL: psql --version\nMySQL: mysql --version\nSQL Server: verify the sqlcmd client/server according to the installed version.',
    troubleshooting: ['Connection refused: check whether the service is running and the port is reachable.', 'Authentication failed: verify database name, user and authentication configuration without exposing credentials.']
  },
  'Data Engineering / Big Data': {
    overview: 'Data engineering tools combine a programming runtime, SQL, storage formats and distributed engines. PySpark uses Python to work with Apache Spark.',
    windows: ['Install Python and create a virtual environment.', 'Install a compatible Java JDK because Spark runs on the JVM.', 'Install PySpark with pip in the virtual environment.', 'Use VS Code or Jupyter for practice.', 'For Windows-specific Spark compatibility issues, follow the current Spark/PySpark documentation instead of copying obsolete winutils files.'],
    linux: ['Install Python and a compatible Java JDK.', 'Create and activate a Python virtual environment.', 'Install PySpark with pip.', 'Verify Spark starts locally before connecting to external storage or clusters.', 'Use Spark UI and logs when learning execution behavior.'],
    verify: 'python -c "import pyspark; print(pyspark.__version__)"\njava --version\npython -c "from pyspark.sql import SparkSession; s=SparkSession.builder.master(\'local[*]\').getOrCreate(); print(s.version); s.stop()"',
    troubleshooting: ['Java mismatch: compare the installed JDK with the Spark/PySpark version documentation.', 'Spark startup failure: inspect the Java path, Python environment and Spark logs before changing random configuration.']
  },
  DevOps: {
    overview: 'DevOps combines source control, automated testing, builds, deployment, infrastructure, observability and secure operations. Start with local CLI tools before learning cloud automation.',
    windows: ['Install Git, VS Code and a terminal such as PowerShell or Windows Terminal.', 'Install Docker Desktop if container lessons require it.', 'Install the CLI for your target cloud only when that module starts.', 'Configure Git identity and SSH/HTTPS authentication securely.', 'Create a small repository with a lint/test/build workflow.'],
    linux: ['Install Git, curl and your preferred editor.', 'Install Docker Engine or the supported container runtime when required.', 'Install cloud CLIs only for the provider being studied.', 'Use SSH keys or supported federated authentication; do not store credentials in repositories.', 'Practice CI with a small test/build pipeline.'],
    verify: 'git --version\ndocker --version\n# Cloud CLI: verify with the provider-specific version command',
    troubleshooting: ['Permission denied: inspect the exact identity and resource permission instead of granting broad administrator access.', 'CI failure: identify the first failing stage and reproduce it locally where possible.']
  },
  'Cloud Fundamentals': {
    overview: 'Cloud platforms provide managed infrastructure and services. Learn the shared-responsibility model, identity, networking, storage, compute and monitoring before specializing in Azure, AWS or Google Cloud.',
    windows: ['Install a supported browser and VS Code.', 'Install Azure CLI, AWS CLI or Google Cloud CLI only when starting that provider track.', 'Use a separate learning account/subscription/project where possible.', 'Enable MFA and billing alerts.', 'Authenticate with short-lived or supported identity methods; avoid hard-coded access keys.'],
    linux: ['Install the selected cloud CLI using the provider documentation.', 'Configure an appropriate profile or workload identity.', 'Enable MFA, billing alerts and least-privilege roles.', 'Practice with low-cost/free-tier resources and delete them after labs.', 'Keep secrets outside source control.'],
    verify: 'Azure: az version\nAWS: aws --version\nGCP: gcloud version',
    troubleshooting: ['Authentication vs authorization: first prove who you are, then check whether that identity can perform the requested action.', 'Unexpected cost: stop/delete unused resources and inspect billing/usage dashboards.']
  },
  'Linux & Shell': {
    overview: 'Linux is an operating system family widely used for servers and development. Shell skills let you automate files, processes, networking and deployments.',
    windows: ['Enable WSL2 and install a supported Linux distribution such as Ubuntu.', 'Open the Linux shell and learn pwd, ls, cd, cp, mv, rm and grep.', 'Use VS Code Remote - WSL when you want editor integration.', 'Keep Windows and Linux paths distinct while learning.'],
    linux: ['Use a supported distribution such as Ubuntu, Fedora or Debian.', 'Update packages using the distribution package manager.', 'Create a normal user and use sudo only when required.', 'Install Git, Python and build tools as the course needs them.', 'Learn permissions, processes, services, logs and networking commands.'],
    verify: 'uname -a\nwhoami\npwd\nls -la\ngrep --version',
    troubleshooting: ['Permission denied: inspect ownership and mode bits before using sudo.', 'Service failure: inspect systemctl status and journal logs.']
  },
  'Docker & Containers': {
    overview: 'Containers package an application and its runtime dependencies into a repeatable unit. Docker is a common container tool; images are templates and containers are runtime instances.',
    windows: ['Install Docker Desktop and enable the appropriate virtualization/WSL2 integration.', 'Verify docker version and docker run hello-world.', 'Create a Dockerfile and .dockerignore.', 'Learn image build, container run, logs, exec and volume concepts.'],
    linux: ['Install Docker Engine following the official documentation for your distribution.', 'Verify docker version and docker run hello-world.', 'Configure non-root Docker access only according to the platform security guidance.', 'Practice Dockerfile, images, containers, networks and volumes.'],
    verify: 'docker version\ndocker run --rm hello-world\ndocker ps -a',
    troubleshooting: ['Daemon unavailable: check Docker Desktop/Engine status.', 'Permission denied on Linux: inspect Docker socket/group configuration rather than making unrelated files world-writable.']
  },
  'Git & GitHub': {
    overview: 'Git tracks source-code history locally; GitHub hosts repositories and collaboration workflows. Learn commits, branches, remotes, pull requests and CI before advanced release practices.',
    windows: ['Install Git for Windows and Git Bash or use PowerShell.', 'Set git config --global user.name and user.email.', 'Authenticate to GitHub using SSH or GitHub CLI/device authentication.', 'Create a practice repository and make a first commit.'],
    linux: ['Install Git using your distribution package manager.', 'Configure your name and email.', 'Use SSH keys or GitHub CLI for authentication.', 'Clone a practice repository and learn status, add, commit, fetch, pull and push.'],
    verify: 'git --version\ngit config --global --get user.name\ngit status\ngit remote -v',
    troubleshooting: ['Push rejected: fetch first and understand remote changes before integrating.', 'Authentication failure: verify the selected SSH key or CLI login; never paste tokens into source files.']
  },
  Kubernetes: {
    overview: 'Kubernetes orchestrates containerized workloads. Learn containers first, then Pods, Deployments, Services, configuration, probes, networking, RBAC and observability.',
    windows: ['Install Docker Desktop and enable Kubernetes, or use Minikube/Kind for a local cluster.', 'Install kubectl.', 'Create a namespace for learning and deploy a simple web container.', 'Learn get, describe, logs, exec and rollout commands.'],
    linux: ['Install kubectl and a local cluster tool such as Minikube or Kind.', 'Start the local cluster and verify nodes.', 'Create a namespace for practice.', 'Deploy a small workload and expose it with a Service.'],
    verify: 'kubectl version --client\nkubectl get nodes\nkubectl get namespaces',
    troubleshooting: ['No nodes: check the local cluster runtime and its logs.', 'CrashLoopBackOff: inspect describe output and previous container logs before changing probes.']
  },
  'Generative AI': {
    overview: 'Generative AI systems create text, code, images or other content from learned patterns. Start with model/API concepts, prompting and evaluation before RAG and production architectures.',
    windows: ['Install Python and create a virtual environment.', 'Install the SDK for the model provider used in the lesson.', 'Store API keys in environment variables or a local .env file excluded from Git.', 'Optionally install Git and VS Code for project work.', 'Start with small prompts and learn token/cost limits.'],
    linux: ['Install Python and create a virtual environment.', 'Install the selected model provider SDK.', 'Export credentials through a secure shell/environment mechanism.', 'Use Git and VS Code or another editor.', 'Learn structured outputs, retries, rate limits and evaluation.'],
    verify: 'python --version\npython -m pip --version\n# Provider SDK: run its documented authentication test',
    troubleshooting: ['Authentication error: verify the selected account/project and environment variable name without printing the key.', 'Unexpected answers: inspect the prompt, context, model choice and evaluation data instead of assuming the model is deterministic.']
  },
  'Agentic AI': {
    overview: 'Agentic AI combines a model with goals, state, tools and a bounded control loop. Learn ordinary LLM applications first, then tool calling, retrieval, workflows, safety and observability.',
    windows: ['Install Python and a virtual environment.', 'Install the selected LLM/tool SDKs for the lessons.', 'Configure credentials through environment variables, never source code.', 'Use VS Code and Git.', 'Start with read-only tools before learning write actions.'],
    linux: ['Install Python and create a virtual environment.', 'Install the selected SDKs.', 'Configure credentials securely in the environment.', 'Practice tool schemas, validation, timeouts and bounded workflows.', 'Keep agent permissions narrowly scoped.'],
    verify: 'python --version\npython -m pip --version\n# Then run the course-provided read-only tool example',
    troubleshooting: ['Tool failure: inspect schema validation, authentication, authorization and timeout separately.', 'Unsafe behavior: add deterministic policy checks; do not rely only on a system prompt.']
  },
  'REST APIs': {
    overview: 'REST APIs expose application capabilities over HTTP. Learn HTTP and JSON first, then build, validate, secure, test and monitor APIs.',
    windows: ['Install VS Code and Git.', 'Install the runtime/framework used by the API lessons, such as Python plus FastAPI/Django or Node.js.', 'Install an API client such as curl, PowerShell Invoke-RestMethod or Postman/Insomnia.', 'Create a local API and test GET/POST requests.'],
    linux: ['Install Git, curl and the runtime/framework used by the course.', 'Create a project-specific environment.', 'Run the API locally and test endpoints with curl.', 'Learn environment variables, logs, health checks and API documentation.'],
    verify: 'curl --version\n# Example health check\ncurl http://localhost:8000/health',
    troubleshooting: ['Connection refused: verify the server is listening on the expected host/port.', 'CORS/auth issues: distinguish browser policy, authentication and authorization failures.']
  }
}

export default function SystemSetup({ track }) {
  const setup = setupCatalog[track]
  if (!setup) return null
  return <section className="system-setup" aria-labelledby="system-setup-title">
    <div className="system-setup-heading">
      <span className="system-setup-kicker">STEP 02 · SYSTEM SETUP</span>
      <h3 id="system-setup-title">Set up {track} on Windows & Linux</h3>
      <p>{setup.overview}</p>
    </div>
    <div className="system-setup-grid">
      <article><div className="setup-os">▣ Windows</div><ol>{setup.windows.map((item) => <li key={item}>{item}</li>)}</ol></article>
      <article><div className="setup-os">⌁ Linux</div><ol>{setup.linux.map((item) => <li key={item}>{item}</li>)}</ol></article>
    </div>
    <div className="system-setup-bottom">
      <article><strong>Verify your setup</strong><pre><code>{setup.verify}</code></pre></article>
      <article><strong>Common setup issues</strong><ul>{setup.troubleshooting.map((item) => <li key={item}>{item}</li>)}</ul></article>
    </div>
  </section>
}
