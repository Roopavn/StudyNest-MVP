import { useMemo, useState } from 'react'
import { BookOpen, Check, ChevronDown, ChevronUp, Code2, Search, Sparkles } from 'lucide-react'
import './InterviewPrep.css'

const questions = [
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

const topics = [
  { name: 'Python', subtitle: 'Core language, data structures and backend coding', icon: 'code', color: 'python' },
  { name: 'SQL', subtitle: 'Queries, joins, transactions and performance', icon: 'database', color: 'sql' },
  { name: 'REST APIs', subtitle: 'HTTP, endpoint design, security and reliability', icon: 'network', color: 'api' },
]
const levels = ['All levels', 'Basic', 'Intermediate', 'Advanced']
const levelOrder = { Basic: 0, Intermediate: 1, Advanced: 2 }

export default function InterviewPrep() {
  const [topic, setTopic] = useState(null)
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
      <div className="interview-hero-copy"><span className="interview-eyebrow"><Sparkles size={13} /> INTERVIEW STUDY ROOM</span><h2>{topic || 'Prepare with confidence.'}</h2><p>{topic ? topics.find((item) => item.name === topic)?.subtitle : 'Choose one subject to open its dedicated interview lessons. Each track is organized from Basic to Intermediate to Advanced, with answers, syntax and examples.'}</p></div>
      <div className="interview-total"><strong>{questions.length}</strong><span>questions</span><small>3 separate tracks</small></div>
    </div>
    {!topic ? <>
      <div className="interview-track-heading"><div><h3>Choose your preparation track</h3><p>Python, SQL and REST APIs open as separate learning paths.</p></div></div>
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
              <div className="interview-code-heading"><span><Code2 size={15} /> Syntax and example</span><button onClick={() => navigator.clipboard?.writeText(q.syntax)} type="button">Copy code</button></div>
              <pre><code>{q.syntax}</code></pre>
              <div className="interview-output"><strong>Expected output / behavior</strong><p>{q.output}</p></div>
              <div className="interview-tip"><Sparkles size={15} /><p><strong>Interview tip:</strong> {q.tip}</p></div>
            </div>}
          </article>
        })}
        {!filtered.length && <div className="interview-empty"><Search size={25} /><h3>No matching lessons</h3><p>Try another keyword or difficulty level.</p><button onClick={() => { setLevel('All levels'); setQuery('') }}>Clear filters</button></div>}
      </div>
    </>}
  </section>
}
