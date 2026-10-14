import './SystemSetup.css'
import PythonEcosystem from './PythonEcosystem.jsx'

const common = {
  Python: { intro: 'Python is used for backend services, automation, data and AI.', win: ['Install Python 3 and enable Add Python to PATH.', 'Create: py -m venv .venv', 'Activate: .venv\\Scripts\\activate', 'Install: py -m pip install --upgrade pip'], linux: ['Install Python 3 and python3-venv.', 'Create: python3 -m venv .venv', 'Activate: source .venv/bin/activate', 'Upgrade pip: python -m pip install --upgrade pip'], verify: 'python --version\npython -m pip --version', first: 'python -c "print(\'Hello StudyNest\')"' },
  SQL: { intro: 'SQL is the language used to query and manage relational databases.', win: ['Choose SQL Server, PostgreSQL or MySQL.', 'Install the database server and SSMS, pgAdmin or MySQL Workbench.', 'Start the database service.', 'Create a practice database and user.'], linux: ['Install PostgreSQL, MySQL or MariaDB.', 'Enable and start the database service.', 'Create a practice database and user.', 'Install a GUI client if preferred.'], verify: 'psql --version\n# or: mysql --version', first: 'SELECT 1;' },
  'REST APIs': { intro: 'REST APIs let applications communicate over HTTP using resources, methods and JSON.', win: ['Install Git and VS Code.', 'Install Python/Node.js used by the lessons.', 'Install curl, PowerShell or Postman.', 'Create a local API with a health endpoint.'], linux: ['Install Git, curl and the selected runtime.', 'Create a project environment.', 'Run the API locally.', 'Test endpoints with curl.'], verify: 'curl --version', first: 'curl http://localhost:8000/health' },
  Java: { intro: 'Java is widely used for enterprise applications and backend systems.', win: ['Install a current LTS JDK.', 'Set JAVA_HOME when needed.', 'Install Maven or Gradle.', 'Install VS Code or IntelliJ IDEA.'], linux: ['Install an LTS JDK.', 'Set JAVA_HOME when needed.', 'Install Maven or Gradle.', 'Install an IDE/editor.'], verify: 'java --version\njavac --version', first: 'javac HelloWorld.java && java HelloWorld' },
  JavaScript: { intro: 'JavaScript powers browser applications and server-side applications with Node.js.', win: ['Install Node.js LTS.', 'npm is included with Node.js.', 'Install VS Code.', 'Create a project with npm init.'], linux: ['Install Node.js LTS using a version manager.', 'Verify npm.', 'Install VS Code or another editor.', 'Create a project with npm init.'], verify: 'node --version\nnpm --version', first: 'node -e "console.log(\'Hello StudyNest\')"' },
  'C Programming': { intro: 'C teaches memory, pointers, systems programming and low-level foundations.', win: ['Install GCC through MinGW-w64/MSYS2.', 'Install VS Code and a C/C++ extension.', 'Ensure gcc is on PATH.'], linux: ['Install GCC and build tools.', 'Install GDB for debugging.', 'Use VS Code or another editor.'], verify: 'gcc --version\ngdb --version', first: 'gcc hello.c -o hello && ./hello' },
  'HTML & CSS': { intro: 'HTML structures web pages and CSS controls presentation and responsive layout.', win: ['Install VS Code.', 'Install a modern browser.', 'Install Live Server or use the browser directly.', 'Create index.html and styles.css.'], linux: ['Install VS Code or another editor.', 'Install a modern browser.', 'Create index.html and styles.css.', 'Use a local server when needed.'], verify: 'Open index.html in your browser', first: '<h1>Hello StudyNest</h1>' },
  'Data Engineering / Big Data': { intro: 'Data engineering builds reliable pipelines for collecting, transforming, storing and serving large datasets.', win: ['Install Python 3 and create a virtual environment.', 'Install a supported JDK because Spark runs on the JVM.', 'Install PySpark with pip.', 'Install VS Code and optionally Jupyter.', 'Use Docker for local multi-service environments when needed.'], linux: ['Install Python 3, venv and a supported JDK.', 'Create a Python virtual environment.', 'Install PySpark.', 'Install Git and VS Code/Jupyter.', 'Use Docker when reproducing multi-service environments.'], verify: 'python --version\njava --version\npython -c "import pyspark; print(pyspark.__version__)"', first: 'from pyspark.sql import SparkSession\nspark = SparkSession.builder.appName("StudyNest").getOrCreate()\nprint(spark.range(3).count())\nspark.stop()' },
  DevOps: { intro: 'DevOps combines development, automation, CI/CD, infrastructure and reliable operations.', win: ['Install Git, VS Code and Docker Desktop.', 'Install Azure CLI/AWS CLI/GCloud CLI as required.', 'Configure Git identity.', 'Use a local project before connecting cloud credentials.'], linux: ['Install Git, Docker Engine and required CLI tools.', 'Configure SSH for Git when needed.', 'Use a least-privilege cloud identity.', 'Practice CI/CD locally first.'], verify: 'git --version\ndocker --version', first: 'docker run --rm hello-world' },
  'Cloud Fundamentals': { intro: 'Cloud platforms provide on-demand compute, storage, networking, databases and managed services.', win: ['Install the selected cloud CLI.', 'Create a non-production learning account/project.', 'Configure authentication without committing secrets.', 'Learn regions, projects/resource groups and billing controls.'], linux: ['Install the selected cloud CLI.', 'Configure a least-privilege identity.', 'Set a default region/project.', 'Practice with low-cost resources.'], verify: 'az --version\n# or: aws --version / gcloud --version', first: 'Run the provider identity/account command.' },
  'Linux & Shell': { intro: 'Linux and shell skills are essential for servers, automation, containers and DevOps.', win: ['Install WSL2 with a Linux distribution.', 'Open it from Windows Terminal.', 'Install Git and common CLI tools.'], linux: ['Use a current Linux distribution.', 'Install bash, Git, curl and build tools.', 'Create a non-root practice user where appropriate.'], verify: 'uname -a\nbash --version', first: 'pwd && ls -la' },
  'Docker & Containers': { intro: 'Docker packages an application and dependencies into reproducible containers.', win: ['Install Docker Desktop.', 'Enable the WSL2 backend for Linux containers.', 'Install Git and VS Code.'], linux: ['Install Docker Engine and Compose.', 'Configure non-root Docker usage as appropriate.', 'Install Git.'], verify: 'docker --version\ndocker compose version', first: 'docker run --rm hello-world' },
  'Git & GitHub': { intro: 'Git tracks source-code history and GitHub provides collaboration and repository hosting.', win: ['Install Git for Windows.', 'Install VS Code.', 'Configure Git name and email.', 'Use HTTPS or SSH authentication with GitHub.'], linux: ['Install Git.', 'Configure name and email.', 'Create an SSH key or use HTTPS.', 'Clone a practice repository.'], verify: 'git --version\ngit config --get user.name', first: 'git init\ngit status' },
  Kubernetes: { intro: 'Kubernetes orchestrates containers using declarative workloads, networking and scaling.', win: ['Install Docker Desktop or another runtime.', 'Install kubectl.', 'Install Minikube or Kind for a local cluster.'], linux: ['Install kubectl.', 'Install Minikube or Kind and a container runtime.', 'Start a local cluster.', 'Learn namespaces and contexts.'], verify: 'kubectl version --client\nkubectl get nodes', first: 'kubectl create deployment nginx --image=nginx' },
  'Generative AI': { intro: 'Generative AI creates text, code, images and other content from learned patterns.', win: ['Install Python and VS Code.', 'Create a virtual environment.', 'Install the selected model-provider SDK.', 'Store API keys in environment variables, never source code.'], linux: ['Install Python and create a virtual environment.', 'Install the selected provider SDK.', 'Export credentials securely.', 'Learn tokens, cost, limits and evaluation.'], verify: 'python --version\npython -m pip --version', first: 'Run a small provider authentication test without printing the API key.' },
  'Agentic AI': { intro: 'Agentic AI combines models with goals, state, tools and bounded workflows.', win: ['Install Python and VS Code.', 'Create a virtual environment.', 'Install the selected LLM/tool SDKs.', 'Start with read-only tools and strict permissions.'], linux: ['Install Python and a virtual environment.', 'Install the required SDKs.', 'Configure credentials securely.', 'Practice tool schemas, validation, timeouts and bounded loops.'], verify: 'python --version\npython -m pip --version', first: 'Run a read-only tool call with validated input.' },
}

const allTracks = Object.keys(common)
const courseVisuals = {
  Python: ['https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85', 'Python code on a developer workstation'],
  SQL: ['https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=85', 'Database visualization'],
  'REST APIs': ['https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85', 'Server infrastructure for APIs'],
  Java: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=85', 'Java development workspace'],
  JavaScript: ['https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=900&q=85', 'JavaScript development tools'],
  'C Programming': ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85', 'Circuit board and low-level computing'],
  'HTML & CSS': ['https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=85', 'Web design and responsive layout'],
  DevOps: ['https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=85', 'DevOps cloud infrastructure'],
  'Cloud Fundamentals': ['https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85', 'Global cloud network'],
  'Linux & Shell': ['https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=900&q=85', 'Linux shell terminal'],
  'Docker & Containers': ['https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=85', 'Container technology'],
  'Git & GitHub': ['https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=900&q=85', 'Source control collaboration'],
  Kubernetes: ['https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png', 'Kubernetes official project logo'],
  'Generative AI': ['https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85', 'Generative AI neural network visualization'],
  'Agentic AI': ['https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=85', 'Agentic AI systems visualization'],
  'Data Engineering / Big Data': ['https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85', 'Data analytics dashboard'],
};
const terminalExamples = {
  Python: ['VS Code · PowerShell', 'python --version', 'Python 3.x.x', 'python -c "print(\'Hello AR CodeLab\')"', 'Hello AR CodeLab', 'Run a version check and a tiny Python program.'],
  SQL: ['SQL query editor · pgAdmin / Workbench', 'SELECT 1;', '1', 'SELECT current_date;', 'Current date returned', 'Type SQL in a database query editor.'],
  'REST APIs': ['VS Code · Terminal', 'curl --version', 'curl version information', 'curl http://localhost:8000/health', '{ "status": "ok" }', 'Start your API server before requesting its health endpoint.'],
  Java: ['VS Code · Terminal', 'java --version', 'OpenJDK version information', 'javac HelloWorld.java && java HelloWorld', 'Hello AR CodeLab', 'Create HelloWorld.java before compiling and running it.'],
  JavaScript: ['VS Code · Terminal', 'node --version', 'v22.x.x', 'node -e "console.log(\'Hello AR CodeLab\')"', 'Hello AR CodeLab', 'Node.js can execute JavaScript directly in the terminal.'],
  'C Programming': ['VS Code · Terminal', 'gcc --version', 'GCC version information', 'gcc hello.c -o hello', 'Build succeeds if no errors appear', 'Create hello.c first; then run .\\hello.exe on Windows or ./hello on Linux.'],
  'HTML & CSS': ['Browser · Local preview', 'Open index.html in your browser', 'A page appears', 'Edit styles.css and refresh', 'The page styling changes', 'Basic HTML and CSS can be previewed in a browser without a compiler.'],
  'Data Engineering / Big Data': ['VS Code · Python terminal', 'python -c "import pyspark; print(pyspark.__version__)"', 'Installed PySpark version', 'python spark_test.py', '3', 'Use the same Python environment where PySpark and compatible Java are installed.'],
  DevOps: ['VS Code · Terminal', 'git --version', 'Git version information', 'docker run --rm hello-world', 'Hello from Docker!', 'Docker tests also require the Docker engine to be running.'],
  'Cloud Fundamentals': ['PowerShell · Cloud CLI', 'az --version', 'Azure CLI version information', 'az account show --output table', 'Signed-in subscription details', 'Authenticate first; never expose credentials in screenshots.'],
  'Linux & Shell': ['Ubuntu · Terminal', 'pwd', '/home/learner', 'echo "Hello AR CodeLab"', 'Hello AR CodeLab', 'On Windows, use the WSL distribution terminal for Linux commands.'],
  'Docker & Containers': ['VS Code · Terminal', 'docker --version', 'Docker version information', 'docker run --rm hello-world', 'Hello from Docker!', 'If the test fails, start Docker Desktop or the Docker service.'],
  'Git & GitHub': ['VS Code · Terminal', 'git --version', 'Git version information', 'git status', 'Repository status (inside a Git repository)', 'Run git status inside a repository folder.'],
  Kubernetes: ['VS Code · Terminal', 'kubectl version --client', 'Kubernetes client version', 'kubectl get nodes', 'Node list (requires a configured cluster)', 'The client can be installed even when no cluster is configured.'],
  'Generative AI': ['VS Code · Python terminal', 'python --version', 'Python 3.x.x', 'python -m pip show openai', 'Package details if installed', 'Install the provider SDK in the active environment and protect API keys.'],
  'Agentic AI': ['VS Code · Python terminal', 'python --version', 'Python 3.x.x', 'python -m pip show langgraph', 'Package details if installed', 'Validate the environment first, then test tools with safe read-only actions.'],
}

function CourseTerminalScreenshot({ track }) {
  const example = terminalExamples[track]
  if (!example) return null
  const [title, command1, output1, command2, output2, caption] = example
  const prompt = title.startsWith('Ubuntu') ? 'learner@ubuntu:~
  Python: 'Windows: enable “Add Python to PATH” in the installer. Common folders are the Python install directory and its Scripts subfolder. Verify with: py --version, python --version, where python, and py -m pip --version. Linux package installs usually add python3 automatically; verify with which python3.',
  Java: 'Set JAVA_HOME to the JDK root folder (the folder containing bin), not to bin itself. Add %JAVA_HOME%\\bin to User Path if java/javac are not found. Verify with: echo %JAVA_HOME%, where java, java --version, javac --version. Linux: echo $JAVA_HOME; which java; readlink -f "$(which java)".',
  JavaScript: 'Node.js installers usually add Node and npm to PATH. On Windows, a common folder is C:\\Program Files\\nodejs\\; verify with where node, where npm, node --version and npm --version. Linux version managers configure PATH for the active shell; verify with which node.',
  'C Programming': 'For MSYS2, add the selected toolchain bin folder (for example C:\\msys64\\ucrt64\\bin) to User Path, if the installer did not configure it. Verify with where gcc and gcc --version. Linux package managers normally configure gcc automatically; verify with which gcc.',
  'Git & GitHub': 'Git for Windows normally configures command-line Git. If needed, check the Git cmd folder (often C:\\Program Files\\Git\\cmd). Verify with where git and git --version. Linux: which git.',
  'Docker & Containers': 'Install Docker Desktop/Engine and start it; PATH alone is not enough. Verify CLI with docker --version, then service/daemon access with docker info and a test container. If docker info fails, check that Docker Desktop or the daemon is running.',
  Kubernetes: 'Place kubectl in a dedicated tools folder and add that folder to User Path, or use the official installer/package manager. Verify with where kubectl and kubectl version --client. A working CLI does not mean a cluster is configured; kubectl get nodes checks cluster access.',
  'Cloud Fundamentals': 'Install the specific provider CLI using its official installer. Restart the terminal, then verify az --version, aws --version or gcloud --version. Authentication and subscription/project access are separate checks from PATH.',
  'Linux & Shell': 'On Linux, package managers usually install commands into standard PATH folders. Check with command -v bash, command -v git and echo "$PATH". For Windows, run Linux commands inside the WSL distribution terminal, not ordinary CMD.',
  'Data Engineering / Big Data': 'Verify Python and Java independently first. Spark needs a compatible Java runtime and Python environment. Use where python / where java on Windows or which python3 / which java on Linux, then run python -c "import pyspark; print(pyspark.__version__)". Do not set SPARK_HOME unless your chosen setup requires it.',
  SQL: 'Database GUI tools do not always add command-line clients to PATH. Verify the client you installed: where sqlcmd, where psql or where mysql on Windows; command -v sqlcmd/psql/mysql on Linux. A client version check is different from checking that the database service is running.',
  'REST APIs': 'The API uses the PATH of its chosen runtime (Python or Node.js). Verify the runtime and curl separately. The API health URL only works after you start the server and should be tested in a browser or with curl.',
  'HTML & CSS': 'No compiler PATH is required for basic HTML/CSS. Install an editor and browser; if using Node-based build tools, verify node --version and npm --version. Open index.html in the browser or start the configured dev server.',
  DevOps: 'Add only the CLI tools you installed, such as Git, Docker or a cloud CLI. Verify each separately; docker --version does not prove the daemon is running, and az --version does not prove cloud login works.',
  'Generative AI': 'Usually no separate PATH change is needed beyond Python. Verify the selected Python interpreter and pip, then install SDKs inside that environment. Store provider keys as environment variables or in a secret manager; never paste keys into source code.',
  'Agentic AI': 'Usually no special PATH change beyond Python and any required runtime. Verify Python and pip in the same virtual environment used by the project; credentials, model access and tool permissions must be tested separately.'
}


function SetupScreenshot({ type }) {
  if (type === 'terminal') return <figure className="setup-visual"><div className="mock-window"><div className="mock-titlebar"><span className="mock-dots"><i/><i/><i/></span><b>VS Code · Terminal</b><span>— □ ×</span></div><div className="mock-terminal"><p><span>PS C:\\Projects\\my-app&gt;</span> python --version</p><p className="mock-output">Python 3.13.2</p><p><span>PS C:\\Projects\\my-app&gt;</span> python -c "print('Hello AR CodeLab')"</p><p className="mock-output">Hello AR CodeLab</p><p><span>PS C:\\Projects\\my-app&gt;</span><i className="mock-cursor"/></p></div></div><figcaption>Illustration: enter a command after the prompt, press Enter, then read the output on the next line.</figcaption></figure>
  if (type === 'environment') return <figure className="setup-visual"><div className="mock-window mock-settings"><div className="mock-titlebar"><b>Find a setting</b><span>— □ ×</span></div><div className="mock-settings-body"><div className="mock-search">⌕ Edit environment variables for your account</div><div className="mock-result"><span className="mock-settings-icon">⚙</span><div><b>Edit environment variables for your account</b><small>Control Panel · System settings</small></div><span className="mock-highlight">OPEN</span></div><p className="mock-hint">Select this result from the Windows Start search.</p></div></div><figcaption>Illustration: search for this exact phrase in the Windows Start menu.</figcaption></figure>
  if (type === 'path') return <figure className="setup-visual"><div className="mock-window mock-settings"><div className="mock-titlebar"><b>Edit environment variable — Path</b><span>— □ ×</span></div><div className="mock-settings-body"><p className="mock-hint">Example entries in the User Path list — the folder depends on the course</p><div className="mock-path-entry">C:\\Tools\\YourCourseTool\\bin\\</div><div className="mock-path-entry mock-entry-selected">Add the actual tool folder here</div><div className="mock-action-row"><span className="mock-highlight">New</span><span>Edit</span><span>Delete</span><span>Move Up</span></div><div className="mock-path-note">Click New and add one folder per entry. The first example contains python.exe; Scripts commonly contains pip.exe. Your installed version and folders may differ.</div></div></div><figcaption>Illustration: add the folder path, not a filename like python.exe, and keep existing Path entries.</figcaption></figure>
  if (type === 'variable') return <figure className="setup-visual"><div className="mock-window mock-settings"><div className="mock-titlebar"><b>New User Variable</b><span>— □ ×</span></div><div className="mock-settings-body"><label className="mock-field-label">Variable name</label><div className="mock-field mock-field-emphasis">TOOL_HOME (example)</div><label className="mock-field-label">Variable value</label><div className="mock-field">C:\\Tools\\YourInstalledTool</div><div className="mock-path-note">Generic example only. Use the variable name and installation folder required by the specific tool; not every course needs a named variable.</div></div></div><figcaption>Illustration: some tools need a named environment variable. Use the variable name and actual install folder required by the tool; this is not a universal path.</figcaption></figure>

  return <figure className="setup-visual"><div className="mock-window mock-settings"><div className="mock-titlebar"><b>Environment Variables</b><span>— □ ×</span></div><div className="mock-settings-body"><b>User variables for [your account]</b><div className="mock-path-row"><span>Name</span><span>Value</span></div><div className="mock-path-row mock-selected"><span>Path</span><span>C:\\Users\\you\\... </span></div><div className="mock-action-row"><span className="mock-highlight">Edit...</span><span>New...</span><span>Delete</span></div><div className="mock-path-note">Select Path under User variables, then choose Edit.</div></div></div><figcaption>Illustration: choose User variables for your account for a personal setup. System variables affect all users and may require administrator access.</figcaption></figure>
}

function TerminalGuide() {
  return <section className="terminal-guide">
    <div className="terminal-guide-title"><span>START HERE</span><h3>Where do I type the commands?</h3><p>Choose one terminal. You do not need to use all of them. Commands are usually the same across terminals, but some activation and path commands differ by operating system.</p></div>
    <div className="terminal-choice-grid">
      <article><h4>Windows Command Prompt</h4><p>Press <kbd>Win</kbd> + <kbd>R</kbd>, type <code>cmd</code>, then press Enter. Use this for basic version checks and Windows commands.</p></article>
      <article><h4>Windows PowerShell</h4><p>Open Start and search for <b>PowerShell</b>. Use it for Windows setup commands and environment checks.</p></article>
      <article><h4>VS Code terminal</h4><p>Open your project folder in VS Code, then choose <b>Terminal → New Terminal</b> (shortcut <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>`</kbd>). This is the recommended option while working on a project.</p></article>
      <article><h4>PyCharm terminal</h4><p>Open your project in PyCharm and choose <b>View → Tool Windows → Terminal</b>. Check that the project interpreter is the one you installed packages into.</p></article>
      <article><h4>Linux terminal</h4><p>Open Terminal from the applications menu, or press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> on many desktop distributions. On Windows, WSL users should open their Linux distribution.</p></article>
    </div>
    <div className="terminal-guide-note"><b>Important:</b> VS Code and PyCharm terminals are terminals too. For project work, open the terminal inside the project folder so commands run in the right place. If you install software or change PATH, close and reopen the terminal before testing again.</div>
  </section>
}

function PathGuide() {
  return <section className="path-guide">
    <div><span className="path-guide-kicker">WINDOWS PATH WALKTHROUGH</span><h3>When and where do I add PATH?</h3><p>Only add PATH if the installer did not do it, or the verification command says the command cannot be found. Add the folder containing the executable—not the executable file itself.</p></div>
    <SetupScreenshot type="environment" />
    <ol>
      <li>Find the actual installation folder. Examples include a JDK folder containing <code>bin\\javac.exe</code>, a Git folder containing <code>git.exe</code>, or a folder containing the Docker CLI.</li>
      <li>Open Start and search <b>Edit environment variables for your account</b>. Open it, select <b>Path</b> under User variables, then choose <b>Edit → New</b>.</li>
      <li>In the Path editor, choose <b>New</b> and paste the folder path as a separate entry. Add the folder containing the command, not the executable filename itself. Some tools need more than one folder.</li>
      <li>Save every dialog, close and reopen your terminal, then verify with the course's version command. Use a location check such as <code>where git</code> on Windows or <code>which git</code> on Linux when appropriate.</li>
    </ol>
    <h4 className="setup-subheading">Do I need a separate environment variable?</h4>
    <p>Usually, PATH is enough to make a command discoverable. Some tools also need a named variable, for example <code>JAVA_HOME</code> for Java. Create it under User variables using <b>New</b> and set its value to the tool's root installation folder. Follow that tool's instructions for whether its <code>bin</code> folder also belongs in Path.</p>
    <div className="path-guide-note"><b>Prefer User Path</b> for a personal computer. System Path changes affect all users and may require administrator access. Do not overwrite the existing PATH list or copy a sample folder path blindly—use the real folder on your computer. For Python specifically, enable “Add Python to PATH” in the installer if offered; the Windows <code>py</code> launcher may work even when <code>python</code> does not.</div>
  </section>
}

function SetupCard({ track }) {
  const s = common[track]
  const visual = courseVisuals[track] || ['https://images.unsplash.com/photo-1516321314072-5c6b7b5f3f4f?auto=format&fit=crop&w=900&q=85', 'Technology learning workspace']
  return <article className="setup-card">
    <img className="setup-course-image" src={visual[0]} alt={visual[1]} loading="lazy" />
    <div className="setup-card-head"><span>STEP 02 · SYSTEM SETUP</span><h3>{track}</h3><p>{s.intro}</p></div>
    <CourseTerminalScreenshot track={track} />
    <div className="setup-os-grid"><div><h4>🪟 Windows</h4><ol>{s.win.map((x) => <li key={x}>{x}</li>)}</ol></div><div><h4>🐧 Linux</h4><ol>{s.linux.map((x) => <li key={x}>{x}</li>)}</ol></div></div>
    <div className="setup-path-specific"><strong>PATH and verification for {track}</strong><p>{pathNotes[track] || "Use the official installer or package manager first. Add only the directory containing the executable if the command is not found, reopen the terminal, and use the verification command below."}</p></div><div className="setup-verify"><div><strong>1. Verify the installation</strong><p>Open one of the terminals above and run these commands one at a time. If a version is printed, the command is available.</p><pre>{s.verify}</pre><small>Expected: a version number or a successful tool response. Exact version text depends on your installed release.</small></div><div><strong>2. Run a first test</strong><p>Run this from the relevant project folder or tool environment. For source-file examples, create the named file first.</p><pre>{s.first}</pre><small>If this step uses a server, database, cluster or cloud account, start/configure that service first. A CLI version check alone does not prove the service is running.</small></div></div>
    <details className="setup-troubleshoot"><summary>Command not found or test failed?</summary><ul><li><b>Command not recognized / not found:</b> confirm the tool is installed, check PATH, then open a fresh terminal.</li><li><b>Wrong version or wrong Python:</b> use <code>py --version</code> on Windows or <code>python3 --version</code> on Linux; compare the executable location.</li><li><b>VS Code/PyCharm cannot find packages:</b> select the correct interpreter/environment for this project and install dependencies in that same environment.</li><li><b>Permission or service error:</b> check service status and required permissions; do not run everything as administrator/root by default.</li></ul></details>
  </article>
}

export default function SystemSetup({ track }) {
  const selected = common[track] ? track : null
  return <section className="system-setup">
    <div className="system-setup-heading"><span className="system-setup-kicker">STEP 02 · SYSTEM SETUP</span><h2>Install it, verify it, run your first test</h2><p>Every setup guide now explains where commands go, how PATH works, how to verify the installation, and what to check when a command fails.</p></div>
    <TerminalGuide />
    <PathGuide />
    {selected ? <><SetupCard track={selected} />{selected === 'Python' && <PythonEcosystem />}</> : <><h3 className="setup-course-list-title">Course setup guides</h3><p className="setup-course-list-intro">Select a course in the lesson navigator to see its focused instructions, or browse the guides below.</p><div className="setup-all-grid">{allTracks.map((name) => <SetupCard key={name} track={name} />)}</div><PythonEcosystem /></>}
  </section>
}
 : 'PS C:\\Projects\\my-app>'
  return <figure className="setup-visual course-terminal-visual">
    <div className="mock-window">
      <div className="mock-titlebar"><span className="mock-dots"><i/><i/><i/></span><b>{title}</b><span>— □ ×</span></div>
      <div className="mock-terminal"><p><span>{prompt}</span> {command1}</p><p className="mock-output">{output1}</p><p><span>{prompt}</span> {command2}</p><p className="mock-output">{output2}</p></div>
    </div>
    <figcaption>{caption} Illustration only; output and version numbers vary by installation.</figcaption>
  </figure>
}
const pathNotes = {
  Python: 'Windows: enable “Add Python to PATH” in the installer. Common folders are the Python install directory and its Scripts subfolder. Verify with: py --version, python --version, where python, and py -m pip --version. Linux package installs usually add python3 automatically; verify with which python3.',
  Java: 'Set JAVA_HOME to the JDK root folder (the folder containing bin), not to bin itself. Add %JAVA_HOME%\\bin to User Path if java/javac are not found. Verify with: echo %JAVA_HOME%, where java, java --version, javac --version. Linux: echo $JAVA_HOME; which java; readlink -f "$(which java)".',
  JavaScript: 'Node.js installers usually add Node and npm to PATH. On Windows, a common folder is C:\\Program Files\\nodejs\\; verify with where node, where npm, node --version and npm --version. Linux version managers configure PATH for the active shell; verify with which node.',
  'C Programming': 'For MSYS2, add the selected toolchain bin folder (for example C:\\msys64\\ucrt64\\bin) to User Path, if the installer did not configure it. Verify with where gcc and gcc --version. Linux package managers normally configure gcc automatically; verify with which gcc.',
  'Git & GitHub': 'Git for Windows normally configures command-line Git. If needed, check the Git cmd folder (often C:\\Program Files\\Git\\cmd). Verify with where git and git --version. Linux: which git.',
  'Docker & Containers': 'Install Docker Desktop/Engine and start it; PATH alone is not enough. Verify CLI with docker --version, then service/daemon access with docker info and a test container. If docker info fails, check that Docker Desktop or the daemon is running.',
  Kubernetes: 'Place kubectl in a dedicated tools folder and add that folder to User Path, or use the official installer/package manager. Verify with where kubectl and kubectl version --client. A working CLI does not mean a cluster is configured; kubectl get nodes checks cluster access.',
  'Cloud Fundamentals': 'Install the specific provider CLI using its official installer. Restart the terminal, then verify az --version, aws --version or gcloud --version. Authentication and subscription/project access are separate checks from PATH.',
  'Linux & Shell': 'On Linux, package managers usually install commands into standard PATH folders. Check with command -v bash, command -v git and echo "$PATH". For Windows, run Linux commands inside the WSL distribution terminal, not ordinary CMD.',
  'Data Engineering / Big Data': 'Verify Python and Java independently first. Spark needs a compatible Java runtime and Python environment. Use where python / where java on Windows or which python3 / which java on Linux, then run python -c "import pyspark; print(pyspark.__version__)". Do not set SPARK_HOME unless your chosen setup requires it.',
  SQL: 'Database GUI tools do not always add command-line clients to PATH. Verify the client you installed: where sqlcmd, where psql or where mysql on Windows; command -v sqlcmd/psql/mysql on Linux. A client version check is different from checking that the database service is running.',
  'REST APIs': 'The API uses the PATH of its chosen runtime (Python or Node.js). Verify the runtime and curl separately. The API health URL only works after you start the server and should be tested in a browser or with curl.',
  'HTML & CSS': 'No compiler PATH is required for basic HTML/CSS. Install an editor and browser; if using Node-based build tools, verify node --version and npm --version. Open index.html in the browser or start the configured dev server.',
  DevOps: 'Add only the CLI tools you installed, such as Git, Docker or a cloud CLI. Verify each separately; docker --version does not prove the daemon is running, and az --version does not prove cloud login works.',
  'Generative AI': 'Usually no separate PATH change is needed beyond Python. Verify the selected Python interpreter and pip, then install SDKs inside that environment. Store provider keys as environment variables or in a secret manager; never paste keys into source code.',
  'Agentic AI': 'Usually no special PATH change beyond Python and any required runtime. Verify Python and pip in the same virtual environment used by the project; credentials, model access and tool permissions must be tested separately.'
}


function SetupScreenshot({ type }) {
  if (type === 'terminal') return <figure className="setup-visual"><div className="mock-window"><div className="mock-titlebar"><span className="mock-dots"><i/><i/><i/></span><b>VS Code · Terminal</b><span>— □ ×</span></div><div className="mock-terminal"><p><span>PS C:\\Projects\\my-app&gt;</span> python --version</p><p className="mock-output">Python 3.13.2</p><p><span>PS C:\\Projects\\my-app&gt;</span> python -c "print('Hello AR CodeLab')"</p><p className="mock-output">Hello AR CodeLab</p><p><span>PS C:\\Projects\\my-app&gt;</span><i className="mock-cursor"/></p></div></div><figcaption>Illustration: enter a command after the prompt, press Enter, then read the output on the next line.</figcaption></figure>
  if (type === 'environment') return <figure className="setup-visual"><div className="mock-window mock-settings"><div className="mock-titlebar"><b>Find a setting</b><span>— □ ×</span></div><div className="mock-settings-body"><div className="mock-search">⌕ Edit environment variables for your account</div><div className="mock-result"><span className="mock-settings-icon">⚙</span><div><b>Edit environment variables for your account</b><small>Control Panel · System settings</small></div><span className="mock-highlight">OPEN</span></div><p className="mock-hint">Select this result from the Windows Start search.</p></div></div><figcaption>Illustration: search for this exact phrase in the Windows Start menu.</figcaption></figure>
  if (type === 'path') return <figure className="setup-visual"><div className="mock-window mock-settings"><div className="mock-titlebar"><b>Edit environment variable — Path</b><span>— □ ×</span></div><div className="mock-settings-body"><p className="mock-hint">Example entries in the User Path list — the folder depends on the course</p><div className="mock-path-entry">C:\\Tools\\YourCourseTool\\bin\\</div><div className="mock-path-entry mock-entry-selected">Add the actual tool folder here</div><div className="mock-action-row"><span className="mock-highlight">New</span><span>Edit</span><span>Delete</span><span>Move Up</span></div><div className="mock-path-note">Click New and add one folder per entry. The first example contains python.exe; Scripts commonly contains pip.exe. Your installed version and folders may differ.</div></div></div><figcaption>Illustration: add the folder path, not a filename like python.exe, and keep existing Path entries.</figcaption></figure>
  if (type === 'variable') return <figure className="setup-visual"><div className="mock-window mock-settings"><div className="mock-titlebar"><b>New User Variable</b><span>— □ ×</span></div><div className="mock-settings-body"><label className="mock-field-label">Variable name</label><div className="mock-field mock-field-emphasis">TOOL_HOME (example)</div><label className="mock-field-label">Variable value</label><div className="mock-field">C:\\Tools\\YourInstalledTool</div><div className="mock-path-note">Generic example only. Use the variable name and installation folder required by the specific tool; not every course needs a named variable.</div></div></div><figcaption>Illustration: some tools need a named environment variable. Use the variable name and actual install folder required by the tool; this is not a universal path.</figcaption></figure>

  return <figure className="setup-visual"><div className="mock-window mock-settings"><div className="mock-titlebar"><b>Environment Variables</b><span>— □ ×</span></div><div className="mock-settings-body"><b>User variables for [your account]</b><div className="mock-path-row"><span>Name</span><span>Value</span></div><div className="mock-path-row mock-selected"><span>Path</span><span>C:\\Users\\you\\... </span></div><div className="mock-action-row"><span className="mock-highlight">Edit...</span><span>New...</span><span>Delete</span></div><div className="mock-path-note">Select Path under User variables, then choose Edit.</div></div></div><figcaption>Illustration: choose User variables for your account for a personal setup. System variables affect all users and may require administrator access.</figcaption></figure>
}

function TerminalGuide() {
  return <section className="terminal-guide">
    <div className="terminal-guide-title"><span>START HERE</span><h3>Where do I type the commands?</h3><p>Choose one terminal. You do not need to use all of them. Commands are usually the same across terminals, but some activation and path commands differ by operating system.</p></div>
    <div className="terminal-choice-grid">
      <article><h4>Windows Command Prompt</h4><p>Press <kbd>Win</kbd> + <kbd>R</kbd>, type <code>cmd</code>, then press Enter. Use this for basic version checks and Windows commands.</p></article>
      <article><h4>Windows PowerShell</h4><p>Open Start and search for <b>PowerShell</b>. Use it for Windows setup commands and environment checks.</p></article>
      <article><h4>VS Code terminal</h4><p>Open your project folder in VS Code, then choose <b>Terminal → New Terminal</b> (shortcut <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>`</kbd>). This is the recommended option while working on a project.</p></article>
      <article><h4>PyCharm terminal</h4><p>Open your project in PyCharm and choose <b>View → Tool Windows → Terminal</b>. Check that the project interpreter is the one you installed packages into.</p></article>
      <article><h4>Linux terminal</h4><p>Open Terminal from the applications menu, or press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd> on many desktop distributions. On Windows, WSL users should open their Linux distribution.</p></article>
    </div>
    <div className="terminal-guide-note"><b>Important:</b> VS Code and PyCharm terminals are terminals too. For project work, open the terminal inside the project folder so commands run in the right place. If you install software or change PATH, close and reopen the terminal before testing again.</div>
  </section>
}

function PathGuide() {
  return <section className="path-guide">
    <div><span className="path-guide-kicker">WINDOWS PATH WALKTHROUGH</span><h3>When and where do I add PATH?</h3><p>Only add PATH if the installer did not do it, or the verification command says the command cannot be found. Add the folder containing the executable—not the executable file itself.</p></div>
    <SetupScreenshot type="environment" />
    <ol>
      <li>Find the actual installation folder. Examples include a JDK folder containing <code>bin\\javac.exe</code>, a Git folder containing <code>git.exe</code>, or a folder containing the Docker CLI.</li>
      <li>Open Start and search <b>Edit environment variables for your account</b>. Open it, select <b>Path</b> under User variables, then choose <b>Edit → New</b>.</li>
      <li>In the Path editor, choose <b>New</b> and paste the folder path as a separate entry. Add the folder containing the command, not the executable filename itself. Some tools need more than one folder.</li>
      <li>Save every dialog, close and reopen your terminal, then verify with the course's version command. Use a location check such as <code>where git</code> on Windows or <code>which git</code> on Linux when appropriate.</li>
    </ol>
    <h4 className="setup-subheading">Do I need a separate environment variable?</h4>
    <p>Usually, PATH is enough to make a command discoverable. Some tools also need a named variable, for example <code>JAVA_HOME</code> for Java. Create it under User variables using <b>New</b> and set its value to the tool's root installation folder. Follow that tool's instructions for whether its <code>bin</code> folder also belongs in Path.</p>
    <div className="path-guide-note"><b>Prefer User Path</b> for a personal computer. System Path changes affect all users and may require administrator access. Do not overwrite the existing PATH list or copy a sample folder path blindly—use the real folder on your computer. For Python specifically, enable “Add Python to PATH” in the installer if offered; the Windows <code>py</code> launcher may work even when <code>python</code> does not.</div>
  </section>
}

function SetupCard({ track }) {
  const s = common[track]
  const visual = courseVisuals[track] || ['https://images.unsplash.com/photo-1516321314072-5c6b7b5f3f4f?auto=format&fit=crop&w=900&q=85', 'Technology learning workspace']
  return <article className="setup-card">
    <img className="setup-course-image" src={visual[0]} alt={visual[1]} loading="lazy" />
    <div className="setup-card-head"><span>STEP 02 · SYSTEM SETUP</span><h3>{track}</h3><p>{s.intro}</p></div>
    <div className="setup-os-grid"><div><h4>🪟 Windows</h4><ol>{s.win.map((x) => <li key={x}>{x}</li>)}</ol></div><div><h4>🐧 Linux</h4><ol>{s.linux.map((x) => <li key={x}>{x}</li>)}</ol></div></div>
    <div className="setup-path-specific"><strong>PATH and verification for {track}</strong><p>{pathNotes[track] || "Use the official installer or package manager first. Add only the directory containing the executable if the command is not found, reopen the terminal, and use the verification command below."}</p></div><div className="setup-verify"><div><strong>1. Verify the installation</strong><p>Open one of the terminals above and run these commands one at a time. If a version is printed, the command is available.</p><pre>{s.verify}</pre><small>Expected: a version number or a successful tool response. Exact version text depends on your installed release.</small></div><div><strong>2. Run a first test</strong><p>Run this from the relevant project folder or tool environment. For source-file examples, create the named file first.</p><pre>{s.first}</pre><small>If this step uses a server, database, cluster or cloud account, start/configure that service first. A CLI version check alone does not prove the service is running.</small></div></div>
    <details className="setup-troubleshoot"><summary>Command not found or test failed?</summary><ul><li><b>Command not recognized / not found:</b> confirm the tool is installed, check PATH, then open a fresh terminal.</li><li><b>Wrong version or wrong Python:</b> use <code>py --version</code> on Windows or <code>python3 --version</code> on Linux; compare the executable location.</li><li><b>VS Code/PyCharm cannot find packages:</b> select the correct interpreter/environment for this project and install dependencies in that same environment.</li><li><b>Permission or service error:</b> check service status and required permissions; do not run everything as administrator/root by default.</li></ul></details>
  </article>
}

export default function SystemSetup({ track }) {
  const selected = common[track] ? track : null
  return <section className="system-setup">
    <div className="system-setup-heading"><span className="system-setup-kicker">STEP 02 · SYSTEM SETUP</span><h2>Install it, verify it, run your first test</h2><p>Every setup guide now explains where commands go, how PATH works, how to verify the installation, and what to check when a command fails.</p></div>
    <TerminalGuide />
    <PathGuide />
    {selected ? <><SetupCard track={selected} />{selected === 'Python' && <PythonEcosystem />}</> : <><h3 className="setup-course-list-title">Course setup guides</h3><p className="setup-course-list-intro">Select a course in the lesson navigator to see its focused instructions, or browse the guides below.</p><div className="setup-all-grid">{allTracks.map((name) => <SetupCard key={name} track={name} />)}</div><PythonEcosystem /></>}
  </section>
}
