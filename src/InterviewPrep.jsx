import { useMemo, useState } from 'react'
import { BookOpen, Check, ChevronDown, ChevronUp, Code2, Search, Sparkles } from 'lucide-react'
import './InterviewPrep.css'
import { pythonInterviewQuestions } from './pythonInterviewQuestions.js'

const baseQuestions = [
  { id:1, topic:'Python', level:'Basic', title:'What is the difference between a list and a tuple?', prompt:'Explain mutability and show when you would use each.', answer:'A list is ordered and mutable, so you can add, remove, or replace items. A tuple is ordered but immutable after creation. Use lists for collections that change and tuples for fixed records or values that should not be reassigned.', syntax:`skills = ["Python", "SQL"]
skills.append("Django")
print(skills)

point = (10, 20)
print(point[0])
# point[0] = 99  # TypeError: tuples are immutable`, output:'[\'Python\', \'SQL\', \'Django\']\n10', tip:'Mention both the behavior and the reason you would choose one. A tuple is not automatically faster in every real-world use case.' },
  { id:2, topic:'Python', level:'Basic', title:'How do dictionaries handle duplicate keys?', prompt:'What happens if the same key is assigned twice?', answer:'Dictionary keys are unique. If the same key is written more than once, the later assignment replaces the earlier value; it does not create a second entry.', syntax:`candidate = {"name": "Asha", "score": 70}
candidate["score"] = 92
print(candidate)
# {'name': 'Asha', 'score': 92}`, output:"{'name': 'Asha', 'score': 92}", tip:'Keys must be hashable. Common key types include strings, numbers and tuples containing hashable values.' },
  { id:3, topic:'Python', level:'Basic', title:'What is the difference between == and is?', prompt:'Explain value equality versus object identity.', answer:'== compares values for equality. is checks whether two references point to the very same object. Use == for normal value comparisons; use is None when checking for None.', syntax:`first = [1, 2]
second = [1, 2]
third = first

print(first == second)  # True
print(first is second)  # False
print(first is third)   # True

value = None
if value is None:
    print("No value")`, output:'True\nFalse\nTrue\nNo value', tip:'Do not use is to compare strings or numbers by value. Object interning can make such tests misleading.' },
  { id:4, topic:'Python', level:'Intermediate', title:'What is a mutable default argument pitfall?', prompt:'Why can a default list retain data across function calls?', answer:'Default argument expressions are evaluated once when the function is defined, not every time it is called. A mutable default such as [] can therefore be shared by calls. Use None and create a new list inside the function.', syntax:`def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item("Python"))  # ['Python']
print(add_item("SQL"))     # ['SQL']`, output:"['Python']\n['SQL']", tip:'This question tests Python object lifetime and whether you understand when function defaults are evaluated.' },
  { id:5, topic:'Python', level:'Intermediate', title:'What are generators and yield?', prompt:'How do generators help process large datasets?', answer:'A generator produces values lazily, one at a time, and pauses at yield while preserving its local state. This can reduce memory use when processing large files or streams because you do not need to build the entire result list first.', syntax:`def squares(limit):
    for number in range(limit):
        yield number * number

for value in squares(4):
    print(value)`, output:'0\n1\n4\n9', tip:'Contrast yield with return: return exits the function, while yield produces a value and suspends the generator for later resumption.' },
  { id:6, topic:'Python', level:'Intermediate', title:'What is a decorator?', prompt:'Describe the wrapper pattern and a backend use case.', answer:'A decorator takes a function and returns another callable that adds behavior around it. Common backend uses include logging, timing, authorization checks, caching and retry logic. functools.wraps preserves useful metadata from the original function.', syntax:`from functools import wraps

def log_call(function):
    @wraps(function)
    def wrapper(*args, **kwargs):
        print(f"Calling {function.__name__}")
        return function(*args, **kwargs)
    return wrapper

@log_call
def greet(name):
    return f"Hello, {name}"

print(greet("Asha"))`, output:'Calling greet\nHello, Asha', tip:'Explain that @log_call is equivalent to greet = log_call(greet), and mention why returning the wrapped function matters.' },
  { id:7, topic:'Python', level:'Advanced', title:'What is the GIL, and how do threads differ from processes?', prompt:'Choose a concurrency approach for I/O-bound and CPU-bound work.', answer:'In standard CPython builds, the Global Interpreter Lock generally allows only one thread at a time to execute Python bytecode in a process. Threads are often effective for I/O-bound work because they can wait concurrently. Processes can use multiple CPU cores for CPU-bound Python work but add startup and communication overhead. Exact behavior depends on the Python build and workload.', syntax:`from concurrent.futures import ThreadPoolExecutor

def fetch_label(item):
    # Represents waiting for an I/O operation
    return f"loaded:{item}"

with ThreadPoolExecutor(max_workers=4) as pool:
    results = list(pool.map(fetch_label, ["a", "b", "c"]))
print(results)`, output:"['loaded:a', 'loaded:b', 'loaded:c']", tip:'Do not say threads are always faster. Discuss workload, network/database waiting, CPU cost and coordination overhead.' },
  { id:8, topic:'SQL', level:'Basic', title:'What is the difference between WHERE and HAVING?', prompt:'When does each clause filter data?', answer:'WHERE filters individual rows before grouping. HAVING filters groups after GROUP BY and is commonly used with aggregate conditions.', syntax:`SELECT department_id, COUNT(*) AS team_size
FROM employees
WHERE active = 1
GROUP BY department_id
HAVING COUNT(*) >= 5
ORDER BY team_size DESC;`, output:'Returns active employees grouped by department, showing only departments with at least five active employees.', tip:'The logical processing order is approximately FROM/JOIN, WHERE, GROUP BY, HAVING, SELECT, ORDER BY.' },
  { id:9, topic:'SQL', level:'Basic', title:'What is the difference between INNER JOIN and LEFT JOIN?', prompt:'Explain what happens when a row has no match.', answer:'INNER JOIN returns only rows that match the join condition in both tables. LEFT JOIN keeps every row from the left table and fills right-side columns with NULL when there is no match.', syntax:`SELECT c.name, d.name AS department
FROM candidates c
LEFT JOIN departments d
  ON d.id = c.department_id;`, output:'Candidates without a matching department still appear; their department value is NULL.', tip:'A condition on the right table in WHERE can unintentionally remove NULL rows and make a LEFT JOIN behave like an INNER JOIN.' },
  { id:10, topic:'SQL', level:'Intermediate', title:'How do you find the second-highest salary?', prompt:'Write a query that handles duplicate salary values.', answer:'Use a distinct salary ranking or the maximum salary below the maximum. The subquery below returns the second-highest distinct salary and returns no row if no second distinct salary exists.', syntax:`SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);`, output:'One row containing the second-highest distinct salary, or NULL if there is no lower salary.', tip:'Clarify whether the interviewer means the second row after sorting or the second distinct salary. Those are different requirements.' },
  { id:11, topic:'SQL', level:'Advanced', title:'What is an index? What are its trade-offs?', prompt:'How can indexes help and hurt performance?', answer:'An index is an auxiliary data structure that helps the database locate rows without scanning the whole table in many queries. Indexes can improve filters, joins and ordering, but consume storage and add overhead to inserts, updates and deletes. The optimizer and data distribution determine whether an index is used.', syntax:`CREATE INDEX idx_employees_department
ON employees(department_id);

EXPLAIN
SELECT id, name
FROM employees
WHERE department_id = 10;`, output:'The query plan helps determine whether the database uses the index and how much work the query performs. EXPLAIN syntax varies by database.', tip:'Avoid recommending indexes blindly. Inspect the execution plan and consider selectivity, composite-index column order and write volume.' },
  { id:12, topic:'REST APIs', level:'Basic', title:'Explain common HTTP methods and status codes.', prompt:'Which method would you use to read, create, update or delete a resource?', answer:'GET retrieves a representation; POST commonly creates a resource or triggers processing; PUT replaces a resource representation; PATCH applies a partial update; DELETE removes a resource. Typical responses include 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found and 500 Internal Server Error.', syntax:`GET    /api/candidates/42  -> 200 OK
POST   /api/candidates      -> 201 Created
PATCH  /api/candidates/42  -> 200 OK
DELETE /api/candidates/42  -> 204 No Content`, output:'Choose the status code based on what happened; a successful DELETE can return 204 with no response body.', tip:'401 means valid authentication is missing or failed; 403 means the server understood the request but refuses access.' },
  { id:13, topic:'REST APIs', level:'Intermediate', title:'What makes an HTTP method idempotent?', prompt:'Why is idempotency important for retries?', answer:'An operation is idempotent when repeating the same request has the same intended effect as performing it once. GET, PUT and DELETE are defined as idempotent in HTTP semantics, although responses can differ. POST is not inherently idempotent; APIs can support safe retries with idempotency keys for operations such as payments.', syntax:`PUT /api/profiles/42
Content-Type: application/json

{"display_name": "Asha"}`, output:'Sending the same PUT repeatedly leaves the profile with the same intended representation.', tip:'Idempotent does not mean the response body or status must be identical on every request.' },
  { id:14, topic:'REST APIs', level:'Intermediate', title:'How should an API validate input and return errors?', prompt:'Show a consistent error response for invalid data.', answer:'Validate untrusted input at the API boundary, return an appropriate 4xx status for client mistakes, and use a stable error schema with a machine-readable code and a helpful message. Avoid returning stack traces or secrets to clients.', syntax:`HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "score must be between 0 and 100",
    "field": "score"
  }
}`, output:'Clients can identify the invalid field and display a useful message without parsing a stack trace.', tip:'Use 401 for authentication failure, 403 for insufficient permission, 404 for missing resources and 500 for unexpected server failures.' },
  { id:15, topic:'REST APIs', level:'Advanced', title:'Authentication vs authorization: what is the difference?', prompt:'How do you protect an API endpoint?', answer:'Authentication establishes who the caller is. Authorization checks what that identity is allowed to do. A secure API validates tokens, enforces permissions on every protected action, uses TLS, limits request rates, protects secrets and avoids logging credentials.', syntax:`Request
  -> HTTPS/TLS
  -> Validate identity/token
  -> Check role and resource permission
  -> Apply rate limits
  -> Execute handler
  -> Log safe audit metadata`, output:'A caller with a valid identity but insufficient permission should generally receive 403 Forbidden.', tip:'Never trust a user ID or role supplied only in the request body. Derive identity from verified credentials and check access to the specific resource.' },

  { id:16, topic:'Python', level:'Basic', title:'How do *args and **kwargs work?', prompt:'How can a function accept a variable number of arguments?', answer:'*args collects extra positional arguments into a tuple. **kwargs collects extra keyword arguments into a dictionary. They are useful for flexible wrappers and APIs, but explicit parameters are clearer when the expected inputs are known.', syntax:`def show_profile(name, *skills, **details):
    print(name)
    print(skills)
    print(details)

show_profile("Asha", "Python", "SQL", city="Bengaluru")`, output:"Asha\n('Python', 'SQL')\n{'city': 'Bengaluru'}", tip:'Remember the difference: *args is positional and **kwargs is keyword-based.' },
  { id:17, topic:'Python', level:'Intermediate', title:'What is the difference between shallow and deep copy?', prompt:'What happens when a nested list is copied?', answer:'A shallow copy creates a new outer container but keeps references to nested objects. A deep copy recursively copies nested objects. Use copy.copy for shallow copies and copy.deepcopy when independent nested structures are required.', syntax:`import copy

original = [[1, 2], [3, 4]]
shallow = copy.copy(original)
deep = copy.deepcopy(original)
original[0].append(99)

print(shallow)  # [[1, 2, 99], [3, 4]]
print(deep)     # [[1, 2], [3, 4]]`, output:'The shallow copy reflects the nested-list change; the deep copy does not.', tip:'A shallow copy is often sufficient for flat collections. Deep copying can be expensive and may not be suitable for every object.' },
  { id:18, topic:'Python', level:'Advanced', title:'How do you handle exceptions in production code?', prompt:'Explain try, except, else and finally.', answer:'Put risky operations in try, catch expected exception types in except, use else for work that should run only when no exception occurred, and use finally for cleanup that must happen either way. Log enough context to debug without exposing secrets.', syntax:`try:
    number = int("42")
except ValueError:
    print("Invalid number")
else:
    print("Parsed:", number)
finally:
    print("Finished")`, output:'Parsed: 42\nFinished', tip:'Avoid broad except blocks that silently hide bugs. Raise or translate errors when the caller needs to handle them.' },
  { id:19, topic:'SQL', level:'Basic', title:'What is the difference between PRIMARY KEY and UNIQUE?', prompt:'How do these constraints protect data?', answer:'A primary key uniquely identifies each row and cannot be NULL. A table has one primary-key constraint, which may include multiple columns. UNIQUE prevents duplicate values for a column or column combination; NULL handling for UNIQUE varies by database.', syntax:`CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(100) UNIQUE
);`, output:'Duplicate department IDs are rejected, and duplicate non-NULL department names are rejected by this example.', tip:'Mention that exact NULL behavior for UNIQUE constraints depends on the database engine.' },
  { id:20, topic:'SQL', level:'Intermediate', title:'What is a CTE, and when would you use one?', prompt:'Show how WITH can make a query easier to read.', answer:'A common table expression (CTE) names a query result for use by the following statement. It can make complex queries easier to read and can support recursive queries in databases that implement recursive CTEs. A CTE is not automatically faster than a subquery.', syntax:`WITH high_scores AS (
  SELECT id, name, score
  FROM candidates
  WHERE score >= 80
)
SELECT name, score
FROM high_scores
ORDER BY score DESC;`, output:'Returns candidates with scores of at least 80, ordered from highest to lowest.', tip:'Use a CTE to improve readability, then check the query plan if performance matters.' },
  { id:21, topic:'SQL', level:'Advanced', title:'What are transactions and ACID properties?', prompt:'Why use a transaction for related updates?', answer:'A transaction groups changes into a single logical unit. ACID means Atomicity (all or nothing), Consistency (valid rules remain satisfied), Isolation (concurrent work is controlled), and Durability (committed changes persist). Roll back when part of the operation fails.', syntax:`BEGIN TRANSACTION;

UPDATE accounts
SET balance = balance - 100
WHERE id = 1;

UPDATE accounts
SET balance = balance + 100
WHERE id = 2;

COMMIT;`, output:'Both updates commit together if successful. Application code should roll back on failure; transaction syntax differs by database.', tip:'Discuss isolation levels and deadlocks when the interviewer asks about concurrent transactions.' },
  { id:22, topic:'REST APIs', level:'Basic', title:'What is REST, and what is a resource?', prompt:'How would you model a simple candidates endpoint?', answer:'REST is an architectural style that treats data and functionality as resources identified by URLs and manipulated through standard HTTP semantics. A resource URL should represent a thing, usually using nouns, while the HTTP method describes the operation.', syntax:`GET    /api/candidates
GET    /api/candidates/42
POST   /api/candidates
PATCH  /api/candidates/42
DELETE /api/candidates/42`, output:'The collection is /api/candidates and an individual candidate is /api/candidates/42.', tip:'Keep resource paths consistent and avoid embedding action verbs in every URL when an HTTP method expresses the action.' },
  { id:23, topic:'REST APIs', level:'Intermediate', title:'How should pagination be designed?', prompt:'Why should an API avoid returning an unbounded collection?', answer:'Pagination limits response size and reduces memory, network and database load. Offset/limit pagination is simple, while cursor pagination is often more stable for frequently changing or very large datasets. Enforce a maximum page size and return a continuation indicator.', syntax:`{
  "results": [{"id": 41}, {"id": 42}],
  "limit": 2,
  "next_cursor": "eyJpZCI6NDJ9"
}`, output:'The client requests the next page using the returned cursor when one is available.', tip:'Use a deterministic sort order. Offset pagination can skip or repeat rows when data changes between requests.' },
  { id:24, topic:'REST APIs', level:'Advanced', title:'How do you design safe retries for a payment API?', prompt:'What problem does an idempotency key solve?', answer:'A client may retry after a timeout without knowing whether the server processed the first request. An idempotency key lets the server associate retries with the original operation and return the stored result rather than charging twice. Store keys safely with appropriate scope and expiration.', syntax:`POST /api/payments
Idempotency-Key: order-8472-attempt-1
Content-Type: application/json

{"order_id": 8472, "amount": 1250}`, output:'Repeated requests using the same key and same operation should not create duplicate charges.', tip:'Define behavior for key reuse with a different payload, concurrent requests, key retention and failed operations.' },
]

const additionalQuestions = [
  { topic:'Java', level:'Basic', title:'What are the four pillars of OOP?', prompt:'Explain encapsulation, abstraction, inheritance and polymorphism.', answer:'Encapsulation protects state behind a clear API; abstraction exposes essential behavior; inheritance reuses or specializes a type; polymorphism lets callers use a common contract with different implementations.', syntax:`interface Notifier { void send(String message); }
class EmailNotifier implements Notifier {
    public void send(String message) { System.out.println(message); }
}
Notifier notifier = new EmailNotifier();
notifier.send("Hello");`, output:'Prints Hello. The variable uses the interface while the object supplies the implementation.', tip:'Give a real example and distinguish inheritance (“is-a”) from composition (“has-a”).' },
  { topic:'Java', level:'Intermediate', title:'When would you use a List, Set or Map?', prompt:'Choose a collection for ordered values, unique values and key lookup.', answer:'List preserves positional order and permits duplicates; Set models uniqueness; Map associates unique keys with values. Choose based on required semantics, then consider complexity and implementation.', syntax:`List<String> names = new ArrayList<>();
names.add("Asha");
Set<String> unique = new HashSet<>(names);
Map<String, Integer> scores = new HashMap<>();
scores.put("Asha", 90);`, output:'names contains Asha, unique contains one Asha, and scores maps Asha to 90.', tip:'Mention that HashMap does not promise sorted key order; use a suitable implementation when order matters.' },
  { topic:'Java', level:'Advanced', title:'How does the Java Stream API work?', prompt:'Describe a pipeline and the difference between intermediate and terminal operations.', answer:'A stream pipeline starts from a source, applies lazy intermediate operations such as filter and map, and finishes with a terminal operation such as collect or count. Streams do not store data themselves.', syntax:`List<Integer> values = List.of(2, 5, 8, 9);
List<Integer> evenSquares = values.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .toList();
System.out.println(evenSquares);`, output:'[4, 64]', tip:'Avoid side effects in stream operations and do not assume parallel streams are automatically faster.' },
  { topic:'JavaScript', level:'Basic', title:'What is the difference between let, const and var?', prompt:'Explain scope, reassignment and redeclaration.', answer:'let and const are block-scoped. let can be reassigned; const cannot be reassigned, though an object stored in a const binding can still be mutated. var is function-scoped and has older hoisting behavior.', syntax:`const profile = { name: "Asha" };
profile.name = "Ravi"; // allowed
let count = 1;
count += 1;
console.log(profile.name, count);`, output:'Ravi 2', tip:'Prefer const by default, let when reassignment is needed, and avoid var in modern code.' },
  { topic:'JavaScript', level:'Intermediate', title:'How do promises and async/await work?', prompt:'Show how asynchronous work can be awaited and errors handled.', answer:'A Promise represents an eventual result. async functions return promises; await pauses that function until a promise settles. try/catch handles rejected operations when awaited inside the block.', syntax:`async function loadUser() {
  try {
    const response = await fetch("/api/users/1");
    if (!response.ok) throw new Error("Request failed");
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}`, output:'Returns parsed user data on success; logs and rethrows a failure.', tip:'Check response.ok—fetch does not reject automatically for HTTP 404 or 500 responses.' },
  { topic:'JavaScript', level:'Advanced', title:'Explain the event loop and microtasks.', prompt:'Why can a Promise callback run before setTimeout(..., 0)?', answer:'Synchronous code runs on the current call stack. After the stack clears, the runtime processes queued microtasks such as Promise reactions before moving on to timer tasks, subject to the host event-loop rules.', syntax:`console.log("A");
setTimeout(() => console.log("timer"), 0);
Promise.resolve().then(() => console.log("promise"));
console.log("B");`, output:'A, B, promise, timer (in this common browser/Node example).', tip:'Explain call stack, task queue and microtask queue rather than saying JavaScript runs everything in parallel.' },
  { topic:'C Programming', level:'Basic', title:'What is the difference between a pointer and an array?', prompt:'Explain how array names and pointer variables differ.', answer:'An array owns a fixed-size sequence of elements in its scope; a pointer is a variable that stores an address. In many expressions an array name converts to a pointer to its first element, but arrays and pointers are not interchangeable types.', syntax:`int values[] = {10, 20, 30};
int *ptr = values;
printf("%d %d\\n", values[1], *(ptr + 1));`, output:'20 20', tip:'Mention bounds, lifetime and avoiding dereferencing invalid or uninitialized pointers.' },
  { topic:'C Programming', level:'Intermediate', title:'What is dynamic memory allocation?', prompt:'Compare malloc, calloc, realloc and free.', answer:'malloc allocates uninitialized bytes; calloc allocates and zero-initializes a block; realloc changes a block size; free releases allocated storage. Check allocation results and do not use pointers after freeing them.', syntax:`size_t count = 5;
int *values = calloc(count, sizeof *values);
if (values != NULL) {
    values[0] = 42;
    free(values);
    values = NULL;
}`, output:'Allocates space for five zero-initialized integers, assigns the first, then releases it.', tip:'Avoid memory leaks, double-free, use-after-free and unchecked allocation failures.' },
  { topic:'C Programming', level:'Advanced', title:'How do you investigate undefined behavior and memory bugs?', prompt:'Describe a safe debugging workflow for a crashing C program.', answer:'Reproduce the failure, compile with strong warnings and sanitizers, inspect the stack trace, check array bounds and pointer lifetimes, then add a regression test. Undefined behavior can make results unpredictable, so do not rely on observed output.', syntax:`cc -Wall -Wextra -Wpedantic -g -fsanitize=address,undefined app.c -o app
./app`, output:'The compiler reports warnings and sanitizers can identify many invalid memory accesses and undefined operations during execution.', tip:'Sanitizers help during testing but do not prove the absence of all bugs.' },
  { topic:'HTML & CSS', level:'Basic', title:'Why use semantic HTML?', prompt:'Compare semantic elements with generic div elements.', answer:'Semantic elements such as main, nav, header, button and article communicate structure and meaning to browsers, assistive technology and developers. Use elements according to their purpose rather than styling everything with divs.', syntax:`<main>
  <article>
    <h1>Course overview</h1>
    <p>Learn the foundations.</p>
    <button type="button">Start lesson</button>
  </article>
</main>`, output:'The page exposes a meaningful document structure and a native keyboard-accessible button.', tip:'Use a real button for actions and an anchor for navigation; do not remove focus indicators without an accessible replacement.' },
  { topic:'HTML & CSS', level:'Intermediate', title:'How does CSS Flexbox differ from Grid?', prompt:'Choose a layout tool for a toolbar and a card matrix.', answer:'Flexbox is primarily one-dimensional, arranging items along a row or column. Grid handles two-dimensional row-and-column layouts. They can be combined based on the layout requirement.', syntax:`.toolbar { display: flex; gap: 1rem; align-items: center; }
.card-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
@media (max-width: 700px) {
  .card-grid { grid-template-columns: 1fr; }
}`, output:'The toolbar aligns items in a row; the card layout uses three columns on wider screens and one on narrow screens.', tip:'Mention responsive behavior, minmax(0, 1fr), and avoiding fixed widths that cause overflow.' },
  { topic:'HTML & CSS', level:'Advanced', title:'How do you improve web accessibility and performance?', prompt:'Name checks you would include before shipping a responsive interface.', answer:'Use semantic markup, keyboard navigation, visible focus, sufficient contrast, labels and meaningful alt text. Optimize images, minimize render-blocking assets, reserve image dimensions, and measure real loading performance.', syntax:`<img src="/course.webp" alt="Course dashboard preview"
     width="640" height="360" loading="lazy">
<label for="email">Email</label>
<input id="email" name="email" type="email" autocomplete="email">`, output:'The image has descriptive alternative text and dimensions; the input has an explicit label and appropriate type.', tip:'Test with keyboard-only navigation and automated audits, then verify with assistive technology and real devices.' },
  { topic:'DevOps', level:'Basic', title:'What is CI/CD?', prompt:'Explain the difference between continuous integration and deployment.', answer:'Continuous integration frequently merges changes and validates them with automated checks. Continuous delivery keeps changes deployable; continuous deployment automatically releases changes that pass the pipeline to production.', syntax:`on: [push]
jobs:
  verify:
    steps:
      - run: npm ci
      - run: npm run lint
      - run: npm run build`, output:'The pipeline installs reproducible dependencies, checks code quality and produces a build artifact.', tip:'Separate build, test and deploy stages; protect production with least-privilege credentials and approvals where appropriate.' },
  { topic:'DevOps', level:'Intermediate', title:'How would you troubleshoot a failed deployment?', prompt:'Describe a structured investigation rather than retrying blindly.', answer:'Identify the failing stage, compare the deployed commit and environment, inspect logs and exit codes, verify configuration and permissions, and reproduce the build. Roll back safely if service impact is high, then add a regression check.', syntax:`git rev-parse HEAD
npm ci
npm run lint
npm run build
# Inspect deployment logs and health checks next`, output:'The commands identify the source revision and reproduce local validation; deployment-specific checks follow.', tip:'Distinguish authentication failures, authorization failures, build errors, configuration problems and application health failures.' },
  { topic:'DevOps', level:'Advanced', title:'How do you design a secure deployment pipeline?', prompt:'Discuss identity, secrets, artifacts and rollback.', answer:'Use short-lived federated identity where supported, least-privilege roles, protected branches and environments, immutable artifacts, dependency scanning, audit logs and tested rollback procedures. Never print secrets to logs.', syntax:`source commit
  -> lint + tests + security checks
  -> versioned build artifact
  -> approval / protected environment
  -> deploy with short-lived identity
  -> health check -> promote or rollback`, output:'The same validated artifact is promoted, deployment is auditable, and failed health checks trigger a controlled recovery path.', tip:'Do not give CI broad subscription or organization permissions when a resource-scoped role is sufficient.' },
  { topic:'Cloud Fundamentals', level:'Basic', title:'What are IaaS, PaaS and SaaS?', prompt:'Give an example of each service model.', answer:'IaaS provides virtualized infrastructure that customers manage further up the stack. PaaS provides a managed platform for deploying applications. SaaS delivers a complete application to end users. Exact responsibility boundaries vary by service.', syntax:`IaaS: virtual machine + customer-managed OS
PaaS: managed web app platform
SaaS: hosted email or collaboration app`, output:'The customer generally manages more of the stack in IaaS and less in PaaS and SaaS.', tip:'Explain shared responsibility; cloud does not automatically remove the need for identity, data and network security.' },
  { topic:'Cloud Fundamentals', level:'Intermediate', title:'How do regions, availability zones and scaling differ?', prompt:'Design for resilience and changing traffic.', answer:'A region is a geographic cloud area; availability zones are isolated locations within a region where supported. Scaling adds or removes capacity vertically or horizontally. High availability requires architecture, health checks, redundancy and tested recovery—not just choosing a region.', syntax:`Traffic
  -> health-checked load balancer
  -> app instances across zones
  -> managed database with backups
  -> monitoring + recovery runbook`, output:'Traffic can be routed to healthy instances, while backups and recovery procedures address data or regional failures.', tip:'Discuss recovery time objective (RTO), recovery point objective (RPO), cost and dependency failure modes.' },
  { topic:'Cloud Fundamentals', level:'Advanced', title:'How do you secure cloud workloads with least privilege?', prompt:'Explain identity, network boundaries and monitoring.', answer:'Assign workload identities instead of embedded credentials, scope roles to required resources and actions, restrict network exposure, encrypt data, rotate any necessary secrets, and monitor auditable events. Review access regularly.', syntax:`Workload identity
  -> resource-scoped role
  -> private or restricted network path
  -> encrypted data
  -> centralized logs and alerts`, output:'The workload receives only the access it needs and security events can be investigated.', tip:'Separate authentication (who/what) from authorization (which actions/resources are allowed).' },
  { topic:'Linux & Shell', level:'Basic', title:'How do you inspect files, processes and disk space?', prompt:'Name useful commands for a first-line Linux investigation.', answer:'Use pwd and ls to inspect location and files, ps or top to inspect processes, df -h for filesystem capacity, free -h for memory, and journalctl or application logs for service diagnostics. Check permissions before changing files.', syntax:`pwd
ls -lah
ps aux | head
df -h
free -h
systemctl status my-service`, output:'Displays the current directory, file details, process sample, filesystem and memory usage, and service status.', tip:'Read command output carefully and avoid destructive commands until you confirm the target path and impact.' },
  { topic:'Linux & Shell', level:'Intermediate', title:'How do pipes, redirection and exit codes work?', prompt:'Compose commands and fail a script safely.', answer:'Pipes send one command’s standard output to another command’s input. Redirection writes or reads streams. Exit status 0 conventionally means success; non-zero signals failure. Shell options can help stop a script after unexpected errors.', syntax:`#!/usr/bin/env bash
set -euo pipefail
grep -i "error" app.log | sort | uniq -c > error-counts.txt`, output:'Counts unique matching error lines and writes the summary file; with pipefail, an upstream failure can fail the pipeline.', tip:'set -e has edge cases; validate inputs and handle expected failures explicitly.' },
  { topic:'Linux & Shell', level:'Advanced', title:'How would you debug a service that cannot start?', prompt:'Cover logs, ports, permissions and dependencies.', answer:'Check systemctl status and journal logs, validate configuration, verify file ownership and permissions, inspect listening ports and dependency health, and reproduce the failure with the service’s actual user/environment. Change one thing at a time.', syntax:`systemctl status my-service
journalctl -u my-service --since "15 min ago"
ss -lntp
id service-user
`, output:'Shows service state, recent unit logs, listening TCP sockets and the current user identity (run user checks as appropriate).', tip:'Avoid exposing secrets from environment dumps or logs when sharing diagnostics.' },
  { topic:'Docker & Containers', level:'Basic', title:'What is the difference between an image and a container?', prompt:'Explain how a container is created and runs.', answer:'An image is a packaged, layered template containing application files and metadata. A container is a running or stopped instance created from an image, with its own runtime configuration and writable layer.', syntax:`docker build -t demo-app:1.0 .
docker run --rm -p 8080:8080 demo-app:1.0
docker ps`, output:'Builds an image, runs a container with a port mapping, and lists running containers.', tip:'Container isolation shares the host kernel; a container is not the same as a full virtual machine.' },
  { topic:'Docker & Containers', level:'Intermediate', title:'How do you make a Docker image smaller and safer?', prompt:'Discuss layers, multi-stage builds and non-root execution.', answer:'Use a suitable minimal base, multi-stage builds, a .dockerignore file, pinned dependencies, non-root users, and only runtime files in the final stage. Scan images and avoid secrets in build arguments or layers.', syntax:`FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html`, output:'The final stage contains the static build and web server, not the Node build toolchain.', tip:'Minimal images reduce attack surface but still need patching and compatibility testing.' },
  { topic:'Docker & Containers', level:'Advanced', title:'How do you troubleshoot a container that exits immediately?', prompt:'Inspect exit status, logs, configuration and health.', answer:'Check docker ps -a, inspect the exit code and container configuration, read logs, verify the command/entrypoint, required environment, mounted files and dependency connectivity. Reproduce interactively only when safe.', syntax:`docker ps -a
docker logs --tail 100 my-container
docker inspect my-container
docker run --rm --entrypoint sh demo-app:1.0`, output:'Shows stopped containers, recent logs, runtime configuration and an optional shell for investigation if the image includes one.', tip:'Do not put credentials in command-line arguments that may be recorded in shell history or process listings.' },
  { topic:'Git & GitHub', level:'Basic', title:'What is the difference between fetch, pull and clone?', prompt:'Explain how local and remote repository history is updated.', answer:'clone creates a local copy from a remote. fetch downloads remote references and objects without merging them into the current branch. pull fetches and then integrates changes, typically by merge or rebase depending on configuration.', syntax:`git clone https://github.com/example/project.git
git fetch origin
git status
git pull --ff-only origin main`, output:'Creates a clone, updates remote-tracking information, inspects the worktree and fast-forwards main if possible.', tip:'Inspect status and incoming changes before integrating, especially when the working tree has local edits.' },
  { topic:'Git & GitHub', level:'Intermediate', title:'When would you merge, rebase or cherry-pick?', prompt:'Compare common ways to integrate commits.', answer:'Merge joins histories and preserves branch structure. Rebase replays commits on a new base to create a linear history. Cherry-pick applies selected commits onto another branch. Avoid rewriting shared history without coordination.', syntax:`git fetch origin
git switch feature
git rebase origin/main
# Resolve conflicts, then:
git add <resolved-file>
git rebase --continue`, output:'Replays feature commits on top of the updated main branch after conflicts are resolved.', tip:'Use git rebase --abort if needed, and never force-push shared branches without team agreement.' },
  { topic:'Git & GitHub', level:'Advanced', title:'How do you protect a repository and its release workflow?', prompt:'Describe branch controls, secret handling and traceability.', answer:'Require reviews and status checks on protected branches, use least-privilege tokens or federated identity, scan dependencies, keep secrets out of commits, sign or verify releases where appropriate, and preserve deployment traceability.', syntax:`commit SHA
  -> required review + CI checks
  -> dependency / secret scan
  -> tagged release artifact
  -> environment-protected deployment
  -> recorded deployment result`, output:'Only reviewed and validated changes can enter the release path, and each deployment maps to a specific revision.', tip:'If a secret is committed, revoke or rotate it; deleting it from the latest file alone is not sufficient.' },
  { topic:'Kubernetes', level:'Basic', title:'What are Pods, Deployments and Services?', prompt:'Explain how an application is scheduled and reached.', answer:'A Pod is the smallest deployable unit and contains one or more containers. A Deployment manages replicated Pods and rolling updates. A Service provides a stable network endpoint for a changing set of Pods.', syntax:`kubectl get pods
kubectl get deployments
kubectl get services
kubectl describe deployment web`, output:'Lists current Pods, Deployments and Services, then shows details for the web Deployment.', tip:'Pods are replaceable; do not treat an individual Pod IP as a stable application endpoint.' },
  { topic:'Kubernetes', level:'Intermediate', title:'How do readiness, liveness and startup probes differ?', prompt:'Choose probes that help Kubernetes operate an application safely.', answer:'Readiness determines whether a Pod should receive traffic. Liveness detects a stuck process and can trigger a restart. Startup probes give slow-starting applications time before liveness checks begin. Probes should test the right failure mode.', syntax:`readinessProbe:
  httpGet:
    path: /health/ready
    port: 8080
livenessProbe:
  httpGet:
    path: /health/live
    port: 8080
  initialDelaySeconds: 10`, output:'Readiness gates traffic; liveness can restart a container when its health check repeatedly fails.', tip:'A liveness check that depends on every downstream service can cause restart loops during an external outage.' },
  { topic:'Kubernetes', level:'Advanced', title:'How do you troubleshoot a CrashLoopBackOff?', prompt:'Build a systematic diagnostic sequence.', answer:'Inspect Pod events and logs, including previous-container logs, then verify startup command, environment/configuration, secrets, resource limits, probes and dependency access. Fix the underlying cause and confirm recovery with rollout status.', syntax:`kubectl describe pod <pod-name>
kubectl logs <pod-name> --previous
kubectl get events --sort-by=.lastTimestamp
kubectl rollout status deployment/<name>`, output:'Provides Pod events, the prior failed container logs, recent events and rollout health.', tip:'Redact sensitive output before sharing logs; CrashLoopBackOff is a symptom, not the root cause.' },
  { topic:'Generative AI', level:'Basic', title:'What is the difference between a language model and a chatbot?', prompt:'Explain the model, application layer and generated output.', answer:'A language model predicts or generates text-like tokens from context. A chatbot is an application that wraps a model with instructions, conversation state, user interface and often tools or retrieval. Model output is probabilistic and can be incorrect.', syntax:`messages = [
  {"role": "system", "content": "Answer clearly and admit uncertainty."},
  {"role": "user", "content": "Explain an API in one sentence."}
]
# Send messages to a configured model provider`, output:'The application passes structured messages to a model and displays its generated response; this pseudocode does not call a provider.', tip:'Distinguish model capability from application orchestration, data access and safety controls.' },
  { topic:'Generative AI', level:'Intermediate', title:'What is RAG and when would you use it?', prompt:'Explain retrieval-augmented generation at a high level.', answer:'RAG retrieves relevant source passages for a user query and includes them in the model context. It can ground answers in current or private documents without retraining the model, but quality depends on ingestion, retrieval and source relevance.', syntax:`question -> retrieve relevant chunks
         -> build context with source metadata
         -> prompt model with question + context
         -> return answer with citations`, output:'The response is generated with retrieved context that can be cited or inspected.', tip:'Evaluate retrieval recall and answer faithfulness separately; adding more chunks can increase noise and cost.' },
  { topic:'Generative AI', level:'Advanced', title:'How do you evaluate and secure an LLM feature for production?', prompt:'Cover quality, prompt injection, privacy, latency and cost.', answer:'Create representative evaluation sets, measure task success and groundedness, test adversarial inputs, constrain tool access, minimize sensitive data, log safely, monitor latency and token cost, and provide fallback or human escalation for uncertain/high-impact cases.', syntax:`request
 -> input validation + sensitive-data policy
 -> retrieve / call model with bounded context
 -> validate structured output
 -> evaluate safety and business rules
 -> respond + record privacy-safe metrics`, output:'Only validated responses pass application checks; failures can be refused, retried safely or routed for human review.', tip:'Do not rely on the system prompt as the only security boundary.' },
  { topic:'Agentic AI', level:'Basic', title:'What makes an AI system an agent?', prompt:'Contrast a single model response with a bounded action loop.', answer:'An agent combines a model with a goal, state, tools and a control loop that can choose actions based on observations. Not every chatbot needs an agent; use tool access only when it provides a measurable benefit.', syntax:`goal = "Find the latest deployment status"
observation = read_status()
decision = model_choose_next_step(goal, observation)
# Validate the decision before any tool executes`, output:'The system observes current state, proposes a next step, and the application validates it before execution.', tip:'Keep the loop bounded by step limits, timeouts, budgets and explicit permissions.' },
  { topic:'Agentic AI', level:'Intermediate', title:'How should an agent call tools safely?', prompt:'Explain tool schemas, validation and permission checks.', answer:'Expose narrowly scoped tools with typed schemas, validate every argument, authenticate and authorize the action independently, set timeouts, and return structured results. Treat retrieved content and tool output as untrusted data.', syntax:`tool = {
  "name": "get_deployment_status",
  "arguments": {"environment": "staging"}
}
# Validate schema, authorize caller, execute read-only tool`, output:'A validated read-only request returns deployment status without granting unrelated permissions.', tip:'Never execute arbitrary model-generated shell commands or trust tool arguments without validation.' },
  { topic:'Agentic AI', level:'Advanced', title:'How do you make a multi-step agent reliable?', prompt:'Discuss retries, state, human approval and observability.', answer:'Persist explicit workflow state, make actions idempotent where possible, bound retries and budgets, define compensation for partial failure, request human approval for high-impact actions, and trace model/tool steps with privacy-safe metadata.', syntax:`plan -> validate action -> approval if required
     -> execute with timeout / idempotency key
     -> persist result
     -> verify postcondition
     -> continue or compensate`, output:'Each action has an auditable result, and the workflow can recover or pause safely after failure.', tip:'Separate model planning from deterministic policy enforcement and final authorization.' },
  { topic:'Data Engineering / Big Data', level:'Basic', title:'What are Spark, PySpark and a DataFrame?', prompt:'Explain the role of each in a data pipeline.', answer:'Apache Spark is a distributed processing engine. PySpark is its Python API. A DataFrame is a distributed table-like dataset with named columns and a schema, suitable for transformations and analytics across partitions.', syntax:`from pyspark.sql import SparkSession
spark = SparkSession.builder.appName("interview-demo").getOrCreate()
df = spark.createDataFrame([(1, "Asha"), (2, "Ravi")], ["id", "name"])
df.show()`, output:'Displays two rows with id and name columns.', tip:'Spark DataFrames are not ordinary local pandas DataFrames; execution can involve multiple executors.' },
  { topic:'Data Engineering / Big Data', level:'Intermediate', title:'What is lazy evaluation in Spark?', prompt:'Distinguish transformations from actions.', answer:'Transformations such as filter and select build a logical plan without immediately computing all results. Actions such as show, count and write trigger execution. Laziness lets Spark optimize the plan before running jobs.', syntax:`filtered = df.filter(df.id > 1).select("name")  # transformation
filtered.show()                                # action`, output:'The filter/select plan is evaluated when show() triggers execution.', tip:'Repeated actions may recompute work unless useful intermediate results are persisted appropriately.' },
  { topic:'Data Engineering / Big Data', level:'Advanced', title:'How do you diagnose a slow Spark job?', prompt:'Discuss shuffles, skew, partitions and the execution plan.', answer:'Inspect the Spark UI and explain plan, identify expensive shuffles and skewed keys, tune partition counts based on data and cluster resources, filter early, select only needed columns, and cache only reused results that fit available memory.', syntax:`df.explain("formatted")
result = (df.filter("event_date >= '2026-01-01'")
            .select("customer_id", "amount")
            .groupBy("customer_id")
            .sum("amount"))`, output:'The plan exposes logical/physical operators; the aggregation may shuffle data by customer_id.', tip:'Measure before tuning. More partitions or caching is not always faster, and skew may require a different strategy.' },
]
questions.push(...additionalQuestions.map((question, index) => ({ ...question, id: 25 + index })))

const topics = [
  { name: 'Python', subtitle: 'Core language, data structures and backend coding', icon: 'code', color: 'python' },
  { name: 'SQL', subtitle: 'Queries, joins, transactions and performance', icon: 'database', color: 'sql' },
  { name: 'REST APIs', subtitle: 'HTTP, endpoint design, security and reliability', icon: 'network', color: 'api' },
  { name: 'Java', subtitle: 'OOP, collections, streams and JVM fundamentals', icon: 'code', color: 'java' },
  { name: 'JavaScript', subtitle: 'Scope, asynchronous code and the event loop', icon: 'code', color: 'javascript' },
  { name: 'C Programming', subtitle: 'Pointers, memory management and debugging', icon: 'code', color: 'c' },
  { name: 'HTML & CSS', subtitle: 'Semantic markup, responsive layouts and accessibility', icon: 'code', color: 'web' },
  { name: 'DevOps', subtitle: 'CI/CD, deployment troubleshooting and secure releases', icon: 'network', color: 'devops' },
  { name: 'Cloud Fundamentals', subtitle: 'Service models, resilience and cloud security', icon: 'network', color: 'cloud' },
  { name: 'Linux & Shell', subtitle: 'Commands, scripting and service troubleshooting', icon: 'code', color: 'linux' },
  { name: 'Docker & Containers', subtitle: 'Images, secure builds and container debugging', icon: 'code', color: 'docker' },
  { name: 'Git & GitHub', subtitle: 'Branching, collaboration and repository security', icon: 'code', color: 'git' },
  { name: 'Kubernetes', subtitle: 'Workloads, probes and cluster troubleshooting', icon: 'network', color: 'kubernetes' },
  { name: 'Generative AI', subtitle: 'LLMs, RAG, evaluation and production safety', icon: 'network', color: 'genai' },
  { name: 'Agentic AI', subtitle: 'Agents, safe tools and reliable workflows', icon: 'network', color: 'agentic' },
  { name: 'Data Engineering / Big Data', subtitle: 'Spark, PySpark, lazy execution and performance', icon: 'database', color: 'spark' },
]
const levels = ['All levels', 'Basic', 'Intermediate', 'Advanced']
const levelOrder = { Basic: 0, Intermediate: 1, Advanced: 2 }

const questions = [...baseQuestions, ...pythonInterviewQuestions.map((question, index) => ({ ...question, id: 1000 + index }))]

export default function InterviewPrep({ initialTopic = null } = {}) {
  const [topic, setTopic] = useState(initialTopic)
  const [level, setLevel] = useState('All levels')
  const [query, setQuery] = useState('')
  const [opened, setOpened] = useState([])
  const filtered = useMemo(() => questions
    .filter((q) => topic === q.topic)
    .filter((q) => level === 'All levels' || q.level === level)
    .filter((q) => (q.title + ' ' + q.prompt + ' ' + q.answer).toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => levelOrder[a.level] - levelOrder[b.level] || a.id - b.id),
  [topic, level, query])
  const chooseTopic = (name) => {
    setTopic(name)
    setLevel('All levels')
    setQuery('')
    setOpened([])
  }
  const topicQuestions = topic ? questions.filter((q) => q.topic === topic) : []
  const topicCounts = (name, difficulty) => questions.filter((q) => q.topic === name && q.level === difficulty).length

  return <section className="interview-prep">
    <div className="interview-hero">
      <div className="interview-hero-icon"><BookOpen size={25} /></div>
      <div className="interview-hero-copy"><span className="interview-eyebrow"><Sparkles size={13} /> INTERVIEW STUDY ROOM</span><h2>{topic || 'Prepare with confidence.'}</h2><p>{topic ? topics.find((item) => item.name === topic)?.subtitle : 'Choose any course to open its dedicated interview lessons. Every track includes Basic, Intermediate and Advanced questions with explanations, syntax, expected behavior and interview tips.'}</p></div>
      <div className="interview-total"><strong>{questions.length}</strong><span>questions</span><small>{topics.length} separate tracks</small></div>
    </div>
    {!topic ? <>
      <div className="interview-track-heading"><div><h3>Choose your preparation track</h3><p>Each course has its own separate interview-preparation button and question set.</p></div></div>
      <div className="interview-track-grid">
        {topics.map((item) => <button className={`interview-track-card track-${item.color}`} key={item.name} onClick={() => chooseTopic(item.name)}>
          <span className="interview-track-icon">{item.icon === 'code' ? <Code2 size={25} /> : item.icon === 'database' ? <BookOpen size={25} /> : <Sparkles size={25} />}</span>
          <span className="interview-track-copy"><strong>{item.name}</strong><small>{item.subtitle}</small></span>
          <span className="interview-track-count">{questions.filter((q) => q.topic === item.name).length} lessons</span>
          <span className="interview-track-levels">{['Basic','Intermediate','Advanced'].map((difficulty) => <span key={difficulty}><i />{difficulty} <b>{topicCounts(item.name,difficulty)}</b></span>)}</span>
          <span className="interview-track-open">Start learning <ChevronDown size={15} /></span>
        </button>)}
      </div>
      <div className="interview-footer-note"><Code2 size={17} /><p><strong>Suggested order:</strong> Complete Basic first, then Intermediate, and finish with Advanced questions. Open each lesson to read the explanation, study syntax and compare the expected output.</p></div>
    </> : <>
      <div className="interview-track-toolbar"><button className="interview-back-button" onClick={() => { setTopic(null); setQuery(''); setLevel('All levels'); setOpened([]) }}>← All subjects</button><div className="interview-level-roadmap">{['Basic','Intermediate','Advanced'].map((difficulty,index)=><button key={difficulty} className={level === difficulty ? 'roadmap-active' : ''} onClick={() => setLevel(level === difficulty ? 'All levels' : difficulty)}><span>{index + 1}</span>{difficulty}<b>{topicQuestions.filter((q)=>q.level===difficulty).length}</b></button>)}</div></div>
      <div className="interview-controls">
        <label className="interview-search"><Search size={17} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Search ${topic} lessons...`} aria-label={`Search ${topic} interview questions`} /></label>
        <label className="interview-level-select"><span>Difficulty level</span><select value={level} onChange={(e) => setLevel(e.target.value)}>{levels.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <div className="interview-results"><span>{filtered.length} lessons</span><span>Lessons are ordered Basic → Intermediate → Advanced.</span></div>
      <div className="interview-question-list">
        {filtered.map((q, index) => {
          const isOpen = opened.includes(q.id)
          return <article className="interview-question-card" key={q.id}>
            <button className="interview-question-toggle" onClick={() => setOpened((current) => isOpen ? current.filter((id) => id !== q.id) : [...current, q.id])} aria-expanded={isOpen}>
              <span className="interview-question-number">{String(index + 1).padStart(2, '0')}</span>
              <span className="interview-question-title"><span className="interview-tags"><span>{q.level}</span></span><strong>{q.title}</strong><small>{q.prompt}</small></span>
              <span className="interview-toggle-icon">{isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
            </button>
            {isOpen && <div className="interview-answer">
              <div className="interview-explanation"><h3><Check size={16} /> Interview-ready answer</h3><p>{q.answer}</p></div>
              {q.syntax && <><div className="interview-code-heading"><span><Code2 size={15} /> Syntax and example</span><button onClick={() => navigator.clipboard?.writeText(q.syntax)} type="button">Copy code</button></div><pre><code>{q.syntax}</code></pre></>}
              {q.output && <div className="interview-output"><strong>Expected output / behavior</strong><p>{q.output}</p></div>}
              {q.tip && <div className="interview-tip"><Sparkles size={15} /><p><strong>Interview tip:</strong> {q.tip}</p></div>}
            </div>}
          </article>
        })}
        {!filtered.length && <div className="interview-empty"><Search size={25} /><h3>No matching lessons</h3><p>Try another keyword or difficulty level.</p><button onClick={() => { setLevel('All levels'); setQuery('') }}>Clear filters</button></div>}
      </div>
    </>}
  </section>
}
