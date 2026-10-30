// Original course-wise interview questions. Topic coverage is informed by
// GeeksforGeeks and InterviewBit; explanations and examples are written for StudyNest.
export const courseInterviewQuestions = [
  { topic: 'Operating Systems', level: 'Basic', title: 'What is the difference between a process and a thread?', prompt: 'Compare memory, isolation and communication.', answer: 'A process is an executing program with its own virtual address space and resources. Threads are execution paths within a process; they share process memory and resources but have their own stacks and CPU state. Threads are lighter to create, but shared state needs synchronization.', syntax: `Process A\n  ├─ Thread 1\n  └─ Thread 2\nProcess B (separate address space)`, output: 'Threads in one process can share heap objects; separate processes normally communicate through IPC mechanisms.', tip: 'Mention both the performance benefit and the risk of race conditions when threads share mutable state.' },
  { topic: 'Operating Systems', level: 'Intermediate', title: 'What is a deadlock? Explain the four necessary conditions.', prompt: 'Describe how deadlocks can occur and how to prevent them.', answer: 'A deadlock is a state where a set of processes wait indefinitely for resources held by one another. The necessary conditions are mutual exclusion, hold and wait, no preemption, and circular wait. Breaking at least one condition prevents deadlock.', syntax: `P1 holds R1 and waits for R2\nP2 holds R2 and waits for R1\nP1 ↔ P2 (circular wait)`, output: 'Neither process can proceed until the resource cycle is broken.', tip: 'Distinguish prevention, avoidance, detection and recovery; they are different strategies.' },
  { topic: 'Operating Systems', level: 'Advanced', title: 'What is virtual memory and what causes thrashing?', prompt: 'Explain page faults, working sets and performance impact.', answer: 'Virtual memory gives each process a logical address space that the OS maps to physical memory and backing storage. A page fault occurs when a referenced page is not resident. Thrashing happens when frequent paging consumes more time than useful execution, often because active working sets exceed available RAM.', syntax: `virtual address → page table → physical frame\npage not resident → page fault → load page`, output: 'A high page-fault rate and sustained disk activity can indicate memory pressure; confirm with OS metrics.', tip: 'Avoid saying every page fault is an error. Demand paging intentionally loads pages when first accessed.' },

  { topic: 'DBMS', level: 'Basic', title: 'What is the difference between a primary key and a foreign key?', prompt: 'Explain uniqueness and referential integrity.', answer: 'A primary key uniquely identifies each row in its table and cannot be NULL. A foreign key references a candidate key in another or the same table, enforcing referential integrity. A table can have multiple foreign keys but only one primary-key constraint (which may contain multiple columns).', syntax: `CREATE TABLE orders (\n  id INT PRIMARY KEY,\n  customer_id INT REFERENCES customers(id)\n);`, output: 'An order cannot reference a customer ID that does not exist, subject to the configured constraint rules.', tip: 'Clarify that a foreign key does not have to reference only a table named customers; self-referencing relationships are also possible.' },
  { topic: 'DBMS', level: 'Intermediate', title: 'Explain database normalization and when denormalization helps.', prompt: 'Discuss redundancy, anomalies and read performance.', answer: 'Normalization structures relational data to reduce unnecessary duplication and update anomalies. Common stages include 1NF (atomic values), 2NF (no partial dependency on a candidate key) and 3NF (no transitive dependency on a candidate key). Denormalization deliberately duplicates or precomputes data when read performance justifies the consistency cost.', syntax: `Before: Order(order_id, customer_name, customer_email, item)\nAfter: Customer(customer_id, name, email)\n      Order(order_id, customer_id, item)`, output: 'Customer details are maintained once and referenced by orders.', tip: 'Do not normalize blindly. Explain the workload and trade-offs before choosing a schema.' },
  { topic: 'DBMS', level: 'Advanced', title: 'What are ACID properties and isolation levels?', prompt: 'Explain transaction correctness under concurrent requests.', answer: 'Atomicity makes a transaction all-or-nothing; consistency preserves constraints; isolation controls interference between concurrent transactions; durability preserves committed results. Isolation levels trade concurrency for protection against anomalies such as dirty reads, non-repeatable reads and phantom reads.', syntax: `BEGIN;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nUPDATE accounts SET balance = balance + 100 WHERE id = 2;\nCOMMIT;`, output: 'Both updates commit together, or neither should be applied if the transaction rolls back.', tip: 'Isolation-level behavior differs by database engine. State the database when discussing exact guarantees.' },

  { topic: 'Computer Networks', level: 'Basic', title: 'What is the difference between TCP and UDP?', prompt: 'Compare reliability, ordering and typical use cases.', answer: 'TCP is connection-oriented and provides ordered, reliable byte-stream delivery with retransmission and flow/congestion control. UDP sends independent datagrams without built-in delivery or ordering guarantees. Applications choose based on latency, reliability and protocol requirements.', syntax: `TCP: connection → ordered byte stream\nUDP: datagram → best-effort delivery`, output: 'TCP is common for web/API traffic; UDP is used where low latency or application-managed delivery is useful, such as DNS and real-time media.', tip: 'Avoid saying UDP is always faster. Network conditions and application behavior determine real performance.' },
  { topic: 'Computer Networks', level: 'Intermediate', title: 'What happens when you enter a website URL in a browser?', prompt: 'Walk through DNS, transport, TLS, HTTP and rendering.', answer: 'The browser checks relevant caches, resolves the hostname through DNS, establishes a transport connection (commonly TCP, or QUIC for HTTP/3), negotiates TLS for HTTPS, sends an HTTP request, receives the response and then parses resources to render the page. Proxies, CDNs and service workers may affect the path.', syntax: `URL → DNS → connection → TLS → HTTP request\n    → response → HTML/CSS/JS parsing → render`, output: 'The browser may make additional requests for scripts, stylesheets, images and API data.', tip: 'Mention that this is a simplified path: caching, HTTP/2 multiplexing, HTTP/3 and existing connections can change the sequence.' },
  { topic: 'Computer Networks', level: 'Advanced', title: 'What is the difference between a load balancer and a reverse proxy?', prompt: 'Explain their overlap and common deployment roles.', answer: 'A reverse proxy accepts client requests and forwards them to backend servers, often handling TLS termination, routing, compression or caching. A load balancer distributes requests across multiple healthy targets. Many products perform both roles, but the concepts describe different responsibilities.', syntax: `Client → reverse proxy / load balancer\n       → API server A / API server B`, output: 'Health checks can remove an unhealthy backend from the eligible target pool.', tip: 'Discuss session affinity, health checks, timeouts and how the design behaves when one backend fails.' },

  { topic: 'Data Structures & Algorithms', level: 'Basic', title: 'How do you choose between an array and a linked list?', prompt: 'Compare access, insertion, memory and locality.', answer: 'Arrays provide constant-time indexed access and good cache locality, but inserting in the middle usually shifts elements. Linked lists support constant-time insertion or deletion when the node is already known, but indexed access requires traversal and each node adds pointer overhead.', syntax: `Array:      [10][20][30][40]\nLinked list: 10 → 20 → 30 → 40 → null`, output: 'Choose based on the operation mix and language/runtime implementation rather than assuming linked lists are always better for insertion.', tip: 'For an insertion, include the cost of finding the position; that search may be O(n).' },
  { topic: 'Data Structures & Algorithms', level: 'Intermediate', title: 'What is the difference between BFS and DFS?', prompt: 'Compare traversal strategy, data structures and use cases.', answer: 'Breadth-first search explores vertices level by level using a queue; in an unweighted graph it finds shortest paths by edge count. Depth-first search explores a path before backtracking, commonly using recursion or a stack, and is useful for cycle detection, connected components and topological techniques.', syntax: `BFS: queue; visit neighbors level by level\nDFS: stack/recursion; explore deeply then backtrack`, output: 'Both run in O(V + E) with adjacency-list representation.', tip: 'State whether the graph is directed or undirected and account for a visited set to avoid repeated work.' },
  { topic: 'Data Structures & Algorithms', level: 'Advanced', title: 'How do you analyze time and space complexity?', prompt: 'Use Big-O and explain an example with nested loops.', answer: 'Time complexity describes how operation count grows with input size; space complexity describes additional memory growth. Big-O expresses an asymptotic upper bound. For nested loops over n elements the work may be O(n²), while two sequential linear passes remain O(n).', syntax: `for i in range(n):\n    for j in range(n):\n        work()  # O(n²)`, output: 'Doubling n can increase the nested-loop work by roughly four times.', tip: 'Clarify whether you mean worst-case, average-case or amortized complexity, and distinguish auxiliary space from input storage.' },

  { topic: 'React', level: 'Basic', title: 'What is the difference between props and state in React?', prompt: 'Explain data ownership and when a component re-renders.', answer: 'Props are inputs passed from a parent and should be treated as read-only by the child. State is data owned by a component and updated through a state setter. Updating state schedules a render so React can reflect the new UI.', syntax: `function Counter({ label }) {\n  const [count, setCount] = useState(0)\n  return <button onClick={() => setCount(c => c + 1)}>{label}: {count}</button>\n}`, output: 'Clicking the button updates count and renders the new value.', tip: 'Use the functional state update when the next value depends on the previous value.' },
  { topic: 'React', level: 'Intermediate', title: 'Why are keys important when rendering a list?', prompt: 'Explain reconciliation and stable identity.', answer: 'Keys help React match list items between renders so it can preserve the correct component identity and update only what changed. Use a stable unique identifier from the data; array indexes can cause state or DOM mismatches when items are reordered or removed.', syntax: `{users.map(user => (\n  <UserCard key={user.id} user={user} />\n))}`, output: 'Stable keys allow React to track each user card across insertions, removals and reordering.', tip: 'Do not generate random keys during render; that makes items appear new on every render.' },
  { topic: 'React', level: 'Advanced', title: 'When should you use useEffect and how do you avoid effect bugs?', prompt: 'Discuss synchronization, dependencies and cleanup.', answer: 'useEffect synchronizes a component with an external system such as a subscription, timer or imperative API. It is not needed for values that can be derived during render. Declare reactive dependencies and return cleanup for subscriptions or resources; avoid stale closures and unnecessary effects.', syntax: `useEffect(() => {\n  const controller = new AbortController()\n  loadData({ signal: controller.signal })\n  return () => controller.abort()\n}, [resourceId])`, output: 'Changing resourceId reruns the effect; cleanup aborts the previous request.', tip: 'Do not suppress dependency warnings to force an effect to run once. Restructure the code so dependencies match the logic.' },

  { topic: 'Object-Oriented Programming', level: 'Basic', title: 'Explain encapsulation, abstraction, inheritance and polymorphism.', prompt: 'Give a concise example of each OOP pillar.', answer: 'Encapsulation groups state and behavior while controlling access. Abstraction exposes essential behavior while hiding implementation details. Inheritance derives a type from another type. Polymorphism lets different implementations be used through a common interface.', syntax: `class Shape:\n    def area(self):\n        raise NotImplementedError\n\nclass Circle(Shape):\n    def area(self):\n        return 3.14 * self.radius ** 2`, output: 'Code using Shape can call area() without needing to know which concrete shape it received.', tip: 'Explain the design benefit, not only the textbook definition. Composition is often preferable to deep inheritance.' },
  { topic: 'Object-Oriented Programming', level: 'Intermediate', title: 'What is the difference between an interface and an abstract class?', prompt: 'Compare contracts, shared state and implementation.', answer: 'An interface primarily defines a contract that unrelated types can implement. An abstract class can define a shared base type with state, constructors and partially implemented behavior. Exact capabilities vary by language; modern languages may support default interface methods or traits.', syntax: `Interface: what operations a type promises\nAbstract class: shared contract + reusable base behavior`, output: 'Choose an interface for interchangeable capabilities and an abstract class when a genuine shared base implementation is useful.', tip: 'Answer in the context of the language asked about, such as Java, C# or Python.' },
  { topic: 'Object-Oriented Programming', level: 'Advanced', title: 'What is dependency injection and why does it improve testability?', prompt: 'Explain constructor injection and loose coupling.', answer: 'Dependency injection supplies an object’s collaborators from outside instead of constructing concrete dependencies internally. Constructor injection makes required dependencies explicit, supports substituting test doubles and reduces coupling to implementations.', syntax: `class OrderService:\n    def __init__(self, repository):\n        self.repository = repository`, output: 'A test can pass a fake repository without connecting to the production database.', tip: 'DI is a design technique, not necessarily a framework. Keep the dependency graph simple and avoid service-locator patterns.' },

  { topic: 'Software Testing', level: 'Basic', title: 'What is the difference between verification and validation?', prompt: 'Explain whether we are building the product right or the right product.', answer: 'Verification checks whether work products meet specified requirements, often through reviews and static checks. Validation checks whether the delivered system satisfies user needs, typically through execution and acceptance testing.', syntax: `Verification: review requirements, design and code\nValidation: execute the product against user scenarios`, output: 'A product can pass verification against a flawed specification but still fail validation for users.', tip: 'Give a concrete example from a feature you have tested.' },
  { topic: 'Software Testing', level: 'Intermediate', title: 'What is the difference between severity and priority?', prompt: 'Explain impact versus urgency using a defect example.', answer: 'Severity describes how seriously a defect affects the system or users. Priority describes how urgently the team should fix it. A crash in a rarely used admin flow may be high severity but lower priority than a moderate defect blocking every customer checkout.', syntax: `Severity = impact\nPriority = order / urgency of fixing`, output: 'Severity and priority are related but can differ based on business context.', tip: 'Mention that product, engineering and support teams may jointly decide priority.' },
  { topic: 'Software Testing', level: 'Advanced', title: 'How would you design an API test strategy?', prompt: 'Cover contract, positive, negative, security and reliability tests.', answer: 'Start with the API contract and test authentication, authorization, validation, status codes, response schema and persistence. Add boundary and negative cases, idempotency, pagination, rate limits, concurrency and dependency failures. Use isolated test data and run appropriate checks in CI.', syntax: `POST /orders\n- valid payload + authorized user → 201\n- missing field → 400/422\n- unauthenticated → 401\n- forbidden resource → 403`, output: 'Tests assert both the response and important side effects, such as database state or emitted events.', tip: 'Do not test only happy paths. Verify that unauthorized requests cannot change data.' },

  { topic: 'System Design', level: 'Basic', title: 'What is the difference between vertical and horizontal scaling?', prompt: 'Compare resource upgrades with adding instances.', answer: 'Vertical scaling increases resources on one machine, such as CPU or RAM. Horizontal scaling adds more machines or instances and distributes work between them. Horizontal scaling can improve capacity and fault tolerance but introduces coordination, routing and data-consistency concerns.', syntax: `Vertical: 1 instance → larger instance\nHorizontal: 1 instance → N instances + load balancer`, output: 'A horizontally scaled stateless API can serve requests from multiple healthy instances.', tip: 'Explain bottlenecks and state management; simply adding servers does not fix a database bottleneck.' },
  { topic: 'System Design', level: 'Intermediate', title: 'What is caching and what invalidation strategy would you choose?', prompt: 'Discuss latency, freshness, TTL and cache-aside.', answer: 'Caching stores frequently accessed data closer to the application to reduce latency and backend load. In cache-aside, the application checks the cache, loads from the source on a miss and populates the cache. Invalidation can use TTL, explicit updates or event-driven eviction depending on freshness requirements.', syntax: `read(key):\n  value = cache.get(key)\n  if value is missing:\n    value = database.get(key)\n    cache.set(key, value, ttl)`, output: 'Cache hits avoid a database read; misses fall back to the source of truth.', tip: 'Discuss stale data, cache stampedes, key design and what happens when the cache is unavailable.' },
  { topic: 'System Design', level: 'Advanced', title: 'How would you design a highly available REST API?', prompt: 'Cover load balancing, stateless services, data, observability and failure handling.', answer: 'Run multiple stateless API instances across failure domains behind health-checked load balancing. Use durable data storage with backups and an appropriate replication strategy, bounded timeouts, retries with backoff and idempotency, rate limiting, observability and tested recovery procedures. Identify dependencies and their failure modes.', syntax: `Client → gateway / load balancer → API instances\n                         ↘ cache\n                         ↘ database / queue`, output: 'An instance failure should remove only that target; the service continues within its defined availability objective.', tip: 'State the workload, consistency needs, recovery objectives and cost constraints before choosing components.' },

  { topic: 'JavaScript', level: 'Basic', title: 'What is JavaScript, and where can it run?', prompt: 'Explain its role in web development and browser versus server execution.', answer: 'JavaScript is a dynamically typed, multi-paradigm language commonly used to add behavior to web applications. Browsers provide APIs for the DOM, events and networking; server runtimes such as Node.js provide APIs for files, processes and servers. The language itself is standardized by ECMAScript.', syntax: `// Browser
document.querySelector('#save')?.addEventListener('click', () => {
  console.log('Saved')
})

// Node.js
console.log('Running on the server')`, output: 'The same core language can run in different hosts, but browser and Node.js APIs are not identical.', tip: 'Distinguish JavaScript (the language) from ECMAScript (the language specification) and from host APIs such as the DOM.' },
  { topic: 'JavaScript', level: 'Basic', title: 'What are the data types in JavaScript?', prompt: 'List primitive types and explain objects.', answer: 'The seven primitive types are string, number, bigint, boolean, undefined, symbol and null. Objects are non-primitive values and include arrays, functions, dates and ordinary objects. typeof null returns "object" for historical reasons, even though null is a primitive.', syntax: `typeof 'hello'       // 'string'
typeof 42            // 'number'
typeof 10n           // 'bigint'
typeof true          // 'boolean'
typeof undefined     // 'undefined'
typeof Symbol('id')  // 'symbol'
typeof null          // 'object' (historical quirk)
typeof []            // 'object'`, output: 'Arrays and null both report typeof as "object"; use Array.isArray(value) to detect arrays.', tip: 'Know the typeof null quirk and use Array.isArray() for arrays.' },
  { topic: 'JavaScript', level: 'Basic', title: 'What is the difference between == and ===?', prompt: 'Explain loose equality, strict equality and type coercion.', answer: 'The == operator compares values after applying type-coercion rules where applicable. The === operator compares without converting operand types. Prefer === in most application code because its behavior is more predictable; remember that objects are compared by identity, not by their contents.', syntax: `0 == '0'   // true
0 === '0'  // false

const a = { id: 1 }
const b = { id: 1 }
a === b    // false: different object references`, output: 'true, false, false', tip: 'For objects and arrays, both equality operators compare references. Deep equality requires an explicit strategy.' },
  { topic: 'JavaScript', level: 'Basic', title: 'Compare var, let and const.', prompt: 'Cover scope, redeclaration, reassignment and hoisting.', answer: 'var is function-scoped (or global-scoped at top level), can be redeclared and is initialized to undefined during hoisting. let and const are block-scoped and remain in the temporal dead zone until declaration is evaluated. let can be reassigned; const cannot be reassigned, though an object or array held by const can still be mutated.', syntax: `var oldStyle = 1
let count = 1
count = 2
const user = { name: 'Sam' }
user.name = 'Alex' // allowed
// user = {}       // TypeError`, output: 'Use const by default, let when reassignment is needed, and generally avoid var in modern code.', tip: 'const protects the binding, not the nested contents of an object.' },
  { topic: 'JavaScript', level: 'Basic', title: 'What is hoisting and what is the temporal dead zone?', prompt: 'Compare function declarations, var, let and const before declaration.', answer: 'Hoisting describes how declarations are processed before execution. Function declarations can generally be called before their position in source code. var bindings are initialized to undefined. let and const bindings exist but cannot be accessed before their declaration is evaluated; that interval is the temporal dead zone (TDZ).', syntax: `console.log(score) // undefined
var score = 10

// console.log(level) // ReferenceError (TDZ)
let level = 2

greet()
function greet() { console.log('Hello') }`, output: 'undefined, then Hello. Accessing level before its declaration throws ReferenceError.', tip: 'Do not say JavaScript physically moves every line to the top; explain declaration instantiation and initialization.' },
  { topic: 'JavaScript', level: 'Basic', title: 'What is type coercion?', prompt: 'Explain implicit versus explicit conversion.', answer: 'Type coercion converts a value from one type to another. Implicit coercion is performed by language operators or comparisons; explicit conversion is requested by the developer using functions such as Number(), String() or Boolean(). Be careful with truthy/falsy values and the + operator, which can concatenate strings.', syntax: `'5' + 2       // '52'
'5' - 2       // 3
Number('5')   // 5
Boolean('')   // false
Boolean('0')  // true`, output: "'52', 3, 5, false, true", tip: 'An empty string, 0, -0, 0n, null, undefined and NaN are falsy; non-empty strings such as "0" are truthy.' },
  { topic: 'JavaScript', level: 'Basic', title: 'What is the difference between null and undefined?', prompt: 'Explain intentional absence versus an unassigned or missing value.', answer: 'undefined commonly indicates that a variable has been declared but not assigned, a property is missing, or a function has no explicit return value. null is an intentional assignment representing the absence of an object value. Both are falsy but they are distinct values.', syntax: `let result
const selectedUser = null

console.log(result)        // undefined
console.log(selectedUser)  // null
console.log(result === null) // false`, output: 'undefined, null, false', tip: 'Use strict equality and choose a consistent convention for representing absent data in APIs and application state.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What is scope and lexical scope?', prompt: 'Explain global, function and block scope with scope-chain lookup.', answer: 'Scope determines where an identifier can be accessed. JavaScript has global, function and block scopes. Lexical scope means a function can access variables from the scopes where it was defined; lookup proceeds outward through the scope chain, not according to where the function is called.', syntax: `const appName = 'StudyNest'
function outer() {
  const course = 'JavaScript'
  function inner() {
    console.log(appName, course)
  }
  inner()
}
outer()`, output: 'StudyNest JavaScript', tip: 'A function uses its definition-time lexical environment, which is the foundation of closures.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What is a closure and where is it useful?', prompt: 'Explain how an inner function retains access to outer variables.', answer: 'A closure is a function together with access to its surrounding lexical environment. The function can continue to read or update variables from an outer scope after that outer function has returned. Closures are useful for private state, callbacks, factories and function-based abstractions.', syntax: `function createCounter() {
  let count = 0
  return () => ++count
}
const next = createCounter()
console.log(next())
console.log(next())`, output: '1, then 2', tip: 'Mention that closures retain access to bindings, not frozen snapshots of values.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'How does the this keyword work?', prompt: 'Compare method calls, plain function calls, constructors and arrow functions.', answer: 'For a normal function, this is determined by how the function is called. As an object method, it usually refers to the object before the dot; with new it refers to the newly created instance; explicit call/apply/bind can set it. Arrow functions do not have their own this and capture it lexically.', syntax: `const account = {
  name: 'Maya',
  show() { return this.name },
}
account.show() // 'Maya'

const showName = () => this.name // lexical this`, output: 'account.show() returns Maya.', tip: 'A method copied into a standalone variable may lose its receiver. Explain strict-mode behavior for a plain function call.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'Compare call(), apply() and bind().', prompt: 'Explain how each method controls this and passes arguments.', answer: 'call invokes a function immediately with a chosen this value and comma-separated arguments. apply also invokes immediately but accepts arguments as an array-like value. bind returns a new function with this (and optionally leading arguments) fixed for later invocation.', syntax: `function introduce(city) {
  return this.name + ' from ' + city
}
const person = { name: 'Maya' }

introduce.call(person, 'Pune')
introduce.apply(person, ['Pune'])
const later = introduce.bind(person, 'Pune')
later()`, output: 'Each expression returns "Maya from Pune".', tip: 'bind does not execute the original function; it returns a callable function.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What are arrow functions and how are they different?', prompt: 'Discuss syntax, this binding, arguments and constructor behavior.', answer: 'Arrow functions provide concise function syntax and capture this and arguments lexically rather than creating their own. They cannot be used as constructors with new and do not have a prototype property. Use them for callbacks and lexical callbacks; use normal methods/functions when dynamic this or construction is required.', syntax: `const double = value => value * 2
const person = {
  name: 'Maya',
  delayedName() {
    setTimeout(() => console.log(this.name), 0)
  },
}
person.delayedName()`, output: '2; then Maya from the callback.', tip: 'Arrow functions are not simply shorter normal functions: their this and constructor semantics differ.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What are callbacks and higher-order functions?', prompt: 'Explain passing a function as an argument and returning a function.', answer: 'A callback is a function passed to another function to be invoked later or at a chosen point. A higher-order function accepts a function, returns a function, or both. Array methods such as map and filter are common examples; callbacks are also used for event handling and asynchronous work.', syntax: `const values = [1, 2, 3]
const doubled = values.map(value => value * 2)
setTimeout(() => console.log(doubled), 0)`, output: 'The callback passed to map runs for each element; the timer callback runs later.', tip: 'Callbacks can be synchronous or asynchronous. The term callback alone does not imply asynchronous execution.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'Explain map(), filter() and reduce().', prompt: 'Compare transformation, selection and accumulation.', answer: 'map transforms each array element and returns a new array of the same length. filter returns a new array containing elements that pass a predicate. reduce combines elements into a single accumulated result, such as a sum or grouped object.', syntax: `const nums = [1, 2, 3, 4]
nums.map(n => n * 2)       // [2, 4, 6, 8]
nums.filter(n => n % 2)    // [1, 3]
nums.reduce((sum, n) => sum + n, 0) // 10`, output: '[2, 4, 6, 8], [1, 3], 10', tip: 'Provide an initial value to reduce when possible, especially for empty arrays and predictable accumulator types.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What are rest parameters and the spread syntax?', prompt: 'Explain how ... collects arguments and expands iterables or objects.', answer: 'Rest syntax collects remaining function arguments into an array or remaining object properties into a new object. Spread syntax expands an iterable into individual values or copies enumerable own properties into a new object. The same ... syntax has different roles depending on its position.', syntax: `function total(...numbers) {
  return numbers.reduce((sum, n) => sum + n, 0)
}
const first = [1, 2]
const combined = [...first, 3]
const updated = { ...{ active: true }, name: 'Maya' }`, output: 'total(1, 2, 3) returns 6; combined is [1, 2, 3].', tip: 'Object and array spread create shallow copies, not deep clones.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What is destructuring?', prompt: 'Show how to extract values from arrays and objects.', answer: 'Destructuring is syntax for unpacking values from arrays or properties from objects into variables. It supports defaults, renaming object properties and nested patterns, and is often used for function parameters and module imports.', syntax: `const [first, second = 0] = [10]
const user = { name: 'Maya', age: 25 }
const { name: displayName, age } = user`, output: 'first is 10, second is 0, displayName is Maya and age is 25.', tip: 'Destructuring defaults apply when a value is undefined, not when it is null.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What is a Promise? Explain its states and chaining.', prompt: 'Describe pending, fulfilled, rejected, then, catch and finally.', answer: 'A Promise represents the eventual result of an asynchronous operation. It is pending until it becomes fulfilled or rejected; either outcome is settled. then handles fulfillment (and can transform the next value), catch handles rejection, and finally runs after settlement for cleanup without receiving the fulfillment value or rejection reason as an argument.', syntax: `fetch('/api/courses')
  .then(response => {
    if (!response.ok) throw new Error('Request failed')
    return response.json()
  })
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Request finished'))`, output: 'A successful response flows through then handlers; a thrown error or rejection flows to catch.', tip: 'Returning a promise from then creates a chain that waits for it. Handle HTTP error status explicitly because fetch does not reject for ordinary 4xx/5xx responses.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What are async and await?', prompt: 'Explain async function return values and error handling.', answer: 'An async function always returns a Promise. await pauses that async function until the awaited promise settles, then returns its fulfillment value or throws its rejection reason. Use try/catch for errors and remember that await does not block the JavaScript thread.', syntax: `async function loadCourses() {
  try {
    const response = await fetch('/api/courses')
    if (!response.ok) throw new Error('HTTP error')
    return await response.json()
  } catch (error) {
    console.error('Could not load courses', error)
    throw error
  }
}`, output: 'The function returns a Promise that fulfills with parsed data or rejects if the error is rethrown.', tip: 'Do not swallow errors accidentally. Decide whether to recover with a fallback or propagate the failure.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What is the event loop? Explain microtasks and macrotasks.', prompt: 'Predict the order of synchronous code, Promise callbacks and timers.', answer: 'JavaScript executes a job on its call stack. The host runtime schedules timers, I/O and browser events as tasks; Promise reactions and queueMicrotask callbacks are microtasks. After the current stack finishes, the runtime drains the microtask queue before moving to another task, subject to host scheduling and rendering rules.', syntax: `console.log('A')
setTimeout(() => console.log('B'), 0)
Promise.resolve().then(() => console.log('C'))
console.log('D')`, output: 'A, D, C, B', tip: 'A zero-delay timer is not immediate. Microtasks queued by other microtasks are also drained before the next task.' },
  { topic: 'JavaScript', level: 'Intermediate', title: 'What is the difference between Promise.all() and Promise.allSettled()?', prompt: 'Choose a strategy when several asynchronous operations run together.', answer: 'Promise.all fulfills when every input fulfills and rejects as soon as one input rejects. Promise.allSettled waits for every input to settle and returns each outcome with a status and value or reason. Use all when every result is required; use allSettled when partial outcomes must be reported.', syntax: `const results = await Promise.allSettled([
  fetch('/api/profile'),
  fetch('/api/notifications'),
])
console.log(results.map(item => item.status))`, output: 'An array such as ["fulfilled", "rejected"] when one request succeeds and the other fails.', tip: 'Promise.all does not cancel the other operations when one rejects; use AbortController if cancellation is needed.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'What is prototypal inheritance and the prototype chain?', prompt: 'Explain property lookup and Object.create().', answer: 'Objects can inherit from another object through an internal prototype link. When a property is not found directly on an object, JavaScript searches its prototype, then the prototype of that object, continuing up the chain until it finds the property or reaches null. Object.create() creates an object with a chosen prototype.', syntax: `const base = { describe() { return 'course' } }
const item = Object.create(base)
item.title = 'JavaScript'
item.describe() // inherited method`, output: 'The describe method is found on base through the prototype chain.', tip: 'Distinguish an object’s prototype from a constructor function’s prototype property, which is used when creating instances with new.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'How do JavaScript classes and inheritance work?', prompt: 'Explain constructor, extends, super and method inheritance.', answer: 'JavaScript class syntax is built on the prototype system. A constructor initializes instances; extends creates a subclass relationship; super calls the parent constructor or accesses parent methods. Class methods are placed on the prototype and are not enumerable by default.', syntax: `class Course {
  constructor(title) { this.title = title }
  describe() { return this.title }
}
class VideoCourse extends Course {
  constructor(title, duration) {
    super(title)
    this.duration = duration
  }
}`, output: 'new VideoCourse("JS", 30) inherits describe() and has its own duration property.', tip: 'A derived class must call super() before accessing this in its constructor.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'What is the difference between shallow copy and deep copy?', prompt: 'Explain nested references and safe cloning options.', answer: 'A shallow copy duplicates only the top-level structure; nested objects remain shared references. A deep copy recursively duplicates nested data so mutations do not affect the original. structuredClone supports many built-in data types and circular references, but it cannot clone every value (for example, functions). JSON stringify/parse has additional type and cycle limitations.', syntax: `const original = { user: { name: 'Maya' } }
const shallow = { ...original }
shallow.user.name = 'Alex'
console.log(original.user.name) // Alex

const deep = structuredClone(original)`, output: 'The shallow copy shares the nested user object; the structured clone has a separate nested object.', tip: 'Choose a cloning method based on the data types involved; JSON serialization is not a universal deep-clone solution.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'What are debouncing and throttling?', prompt: 'Compare delaying until activity stops with limiting execution frequency.', answer: 'Debouncing postpones execution until a quiet period has passed, making it useful for search input. Throttling limits how often a function can run during continuous activity, making it useful for scroll or resize handling. Both reduce expensive repeated work.', syntax: `function debounce(fn, delay) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}`, output: 'The debounced callback runs once after calls stop for the configured delay.', tip: 'Discuss leading versus trailing behavior and cancel/flush options for production implementations.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'Explain event bubbling, capturing and delegation.', prompt: 'Describe event propagation and how one parent listener can handle child events.', answer: 'A DOM event travels through capture toward its target, then through the target phase, and bubbles back through ancestors when the event supports bubbling. Event delegation attaches a listener to a common ancestor and uses event.target or closest() to identify the relevant child, reducing listener count for dynamic lists.', syntax: `document.querySelector('#list').addEventListener('click', event => {
  const button = event.target.closest('button[data-id]')
  if (!button) return
  console.log(button.dataset.id)
})`, output: 'Clicks on matching descendant buttons are handled by the single list listener.', tip: 'event.target is the originating element; event.currentTarget is the element whose listener is running. Not every event bubbles.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'What is the DOM and how do you update it safely?', prompt: 'Explain the document tree, selectors and text versus HTML insertion.', answer: 'The Document Object Model represents a page as a tree of nodes that scripts can inspect and modify. Use querySelector to find elements and textContent for untrusted text. Avoid inserting untrusted strings with innerHTML because it can create cross-site scripting vulnerabilities.', syntax: `const heading = document.querySelector('h1')
if (heading) {
  heading.textContent = 'Welcome back'
}`, output: 'The first h1 element displays Welcome back.', tip: 'Separate DOM APIs from JavaScript language features: the DOM is a browser-provided API.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'Compare localStorage, sessionStorage and cookies.', prompt: 'Discuss lifetime, scope, server transmission and security.', answer: 'localStorage persists across browser sessions for an origin until cleared. sessionStorage is scoped to an origin and tab session. Cookies can have expiry and path/domain rules and are automatically sent with matching HTTP requests. Sensitive session cookies should generally use HttpOnly, Secure and appropriate SameSite settings; Web Storage is accessible to JavaScript.', syntax: `localStorage.setItem('theme', 'dark')
sessionStorage.setItem('step', '2')
document.cookie = 'seen=true; SameSite=Lax; Secure'`, output: 'The values are stored using different browser mechanisms and have different lifetimes and transmission behavior.', tip: 'Do not store sensitive authentication tokens in localStorage without considering XSS risk; HttpOnly cookies reduce direct JavaScript access.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'What are ES modules? Compare named and default exports.', prompt: 'Show how modules share code and how imports are resolved.', answer: 'ES modules let code be split into files with explicit imports and exports. Named exports expose one or more named bindings and are imported using matching names (or aliases). A module can have one default export, imported with any local name. Static imports are resolved before module execution and modules have their own scope.', syntax: `// math.js
export const add = (a, b) => a + b
export default function multiply(a, b) { return a * b }

// app.js
import multiply, { add as sum } from './math.js'`, output: 'sum(2, 3) returns 5; multiply(2, 3) returns 6.', tip: 'Named exports use braces in import syntax; default imports do not. Be aware of the project bundler and package module configuration.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'What are generators and the yield keyword?', prompt: 'Explain pausing and resuming a function with an iterator.', answer: 'A generator function declared with function* returns an iterator when called. Each next() call resumes execution until the next yield, returning an object with value and done. Generators can model lazy sequences and custom iteration; async generators can yield values from asynchronous work.', syntax: `function* ids() {
  yield 1
  yield 2
}
const iterator = ids()
iterator.next() // { value: 1, done: false }
iterator.next() // { value: 2, done: false }`, output: 'Each next() call advances the generator; a completed generator returns done: true.', tip: 'A generator is not automatically asynchronous. Use async function* for asynchronous iteration.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'What are IIFEs and strict mode?', prompt: 'Explain immediately invoked function expressions and strict-mode behavior.', answer: 'An IIFE is a function expression invoked immediately, historically used to create a private scope before block-scoped declarations and modules were common. Strict mode opts into stricter parsing and runtime behavior, including disallowing accidental assignment to undeclared variables. JavaScript modules are automatically strict mode.', syntax: `;(function () {
  const privateValue = 'inside'
  console.log(privateValue)
})()

'use strict'
// accidentalGlobal = 1 // ReferenceError`, output: 'inside; the undeclared assignment throws in strict mode.', tip: 'IIFEs remain useful in some patterns, but modules and lexical scope remove many historical reasons to use them.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'How do you handle errors in synchronous and asynchronous JavaScript?', prompt: 'Compare try/catch, Promise.catch and custom Error objects.', answer: 'Use try/catch for synchronous code and for awaited promises inside async functions. Attach catch to promise chains to handle rejections. Throw Error instances (or subclasses) with useful messages and handle errors at an appropriate boundary; avoid empty catch blocks and exposing internal details to users.', syntax: `class ApiError extends Error {
  constructor(message, status) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

try {
  throw new ApiError('Not found', 404)
} catch (error) {
  console.error(error.name, error.status)
}`, output: 'ApiError 404', tip: 'A try/catch around a promise only catches it if the promise is awaited or the error is thrown synchronously in that block.' },
  { topic: 'JavaScript', level: 'Advanced', title: 'What is memoization?', prompt: 'Explain caching function results and its trade-offs.', answer: 'Memoization stores the result of a function for a given input so repeated calls can reuse the cached result. It is most suitable for deterministic functions with repeatable inputs. Cache key design, memory growth, invalidation and object identity must be considered.', syntax: `function memoizeSquare() {
  const cache = new Map()
  return number => {
    if (cache.has(number)) return cache.get(number)
    const result = number * number
    cache.set(number, result)
    return result
  }
}
const square = memoizeSquare()`, output: 'Repeated calls with the same number reuse the stored result.', tip: 'Memoization is not automatically beneficial; include cache size limits or invalidation when inputs can grow without bound.' },

  { topic: 'Java', level: 'Basic', title: 'What are JDK, JRE and JVM?', prompt: 'Explain the roles of the development kit, runtime environment and virtual machine.', answer: 'JVM executes Java bytecode and provides runtime services such as memory management and garbage collection. JRE traditionally refers to the JVM plus libraries and files needed to run Java applications. JDK includes development tools such as the compiler and debugger along with the runtime components. Modern Java distributions may package these components differently.', syntax: `Java source (.java)
    → javac compiler
    → bytecode (.class)
    → JVM executes bytecode`, output: 'The JDK is used to develop and run Java applications; the JVM is the engine that executes bytecode.', tip: 'Avoid saying the JVM itself is platform independent in the same way as bytecode. JVM implementations are platform-specific.' },
  { topic: 'Java', level: 'Basic', title: 'Why is Java platform independent?', prompt: 'Explain bytecode and the role of a platform-specific JVM.', answer: 'The Java compiler converts source code into platform-neutral bytecode. A compatible JVM on each operating system interprets or compiles that bytecode into native instructions. This enables the same compiled application to run across supported platforms, subject to compatible runtime versions and dependencies.', syntax: `javac Hello.java
java Hello`, output: 'The same Hello.class bytecode can run on different systems that provide a compatible Java runtime.', tip: 'The slogan is "write once, run anywhere", but native libraries and environment-specific dependencies can limit portability.' },
  { topic: 'Java', level: 'Basic', title: 'What are the primitive data types in Java?', prompt: 'List the eight primitive types and distinguish them from reference types.', answer: 'Java has eight primitive types: byte, short, int, long, float, double, char and boolean. Variables of reference types hold references to objects, such as String, arrays and user-defined classes. Primitive types have defined value ranges and are not objects.', syntax: `int count = 12;
long population = 8_000_000_000L;
double price = 19.95;
char grade = 'A';
boolean active = true;`, output: 'The declarations store primitive values directly in variables (subject to JVM implementation details).', tip: 'Remember the L suffix for long literals outside the int range and F for float literals.' },
  { topic: 'Java', level: 'Basic', title: 'What is the difference between == and equals()?', prompt: 'Explain primitive comparison, reference identity and logical equality.', answer: 'For primitives, == compares values. For object references, == checks whether both references point to the same object. equals() is a method whose implementation can define logical equality; Object.equals() defaults to identity unless overridden. Classes that override equals() should also implement a consistent hashCode().', syntax: `String first = new String("Java");
String second = new String("Java");
System.out.println(first == second);      // false
System.out.println(first.equals(second)); // true`, output: 'false, then true', tip: 'String overrides equals() for content comparison; do not assume every class does.' },
  { topic: 'Java', level: 'Basic', title: 'Why is String immutable in Java?', prompt: 'Discuss security, string pooling, thread safety and hash codes.', answer: 'A String cannot be changed after it is created; operations that appear to modify it return another String. Immutability supports safe sharing, stable hash codes for map keys, string pooling and safer handling of values such as class names and file paths. It also makes String naturally thread-safe.', syntax: `String language = "Java";
language.concat(" SE");
System.out.println(language); // Java`, output: 'Java — concat returns a new String and the result is ignored here.', tip: 'Use StringBuilder for repeated concatenation in a loop when you need a mutable buffer.' },
  { topic: 'Java', level: 'Basic', title: 'What is the difference between String, StringBuilder and StringBuffer?', prompt: 'Compare mutability, synchronization and common use cases.', answer: 'String is immutable. StringBuilder is mutable and generally preferred for efficient string construction in a single thread because it does not synchronize its methods. StringBuffer is mutable and synchronizes its methods, which can help with shared access but adds overhead; synchronization does not automatically make a multi-step operation logically safe.', syntax: `StringBuilder builder = new StringBuilder("Core");
builder.append(" Java");
System.out.println(builder); // Core Java`, output: 'Core Java', tip: 'Prefer StringBuilder for local string assembly; use StringBuffer only when its synchronization behavior is specifically required.' },
  { topic: 'Java', level: 'Basic', title: 'What are the four pillars of object-oriented programming?', prompt: 'Explain encapsulation, abstraction, inheritance and polymorphism.', answer: 'Encapsulation bundles state and behavior and controls access to state. Abstraction exposes essential operations while hiding implementation details. Inheritance creates a subtype from an existing type. Polymorphism allows code using a common parent type or interface to work with different concrete implementations.', syntax: `interface Payment {
  void pay(int amount);
}
class CardPayment implements Payment {
  public void pay(int amount) {
    System.out.println("Paid by card: " + amount);
  }
}`, output: 'A caller can invoke pay() through the Payment interface without depending on the concrete payment class.', tip: 'Give one practical example for each pillar rather than only reciting definitions.' },
  { topic: 'Java', level: 'Basic', title: 'What is the difference between an interface and an abstract class?', prompt: 'Compare contracts, state, constructors and multiple inheritance.', answer: 'An interface defines a contract and can include abstract, default, static and private methods depending on Java version. A class can implement multiple interfaces. An abstract class can hold instance state, constructors and concrete or abstract methods, but a class can extend only one class. Choose based on shared state/implementation versus a capability contract.', syntax: `interface Printable { void print(); }
abstract class Document {
  protected String title;
  Document(String title) { this.title = title; }
}`, output: 'A concrete class may extend Document and implement Printable.', tip: 'Modern interfaces can have default and static methods; avoid the outdated claim that interfaces contain only abstract methods.' },
  { topic: 'Java', level: 'Intermediate', title: 'What is the difference between method overloading and overriding?', prompt: 'Explain compile-time selection and runtime dispatch.', answer: 'Overloading defines multiple methods with the same name but different parameter lists in the same class or hierarchy; the compiler selects the applicable overload. Overriding provides a subclass implementation of an inherited instance method with a compatible signature; runtime dispatch selects the implementation based on the actual object. Static methods are hidden, not overridden.', syntax: `class Printer {
  void print(String value) {}
  void print(int value) {} // overload
}
class SmartPrinter extends Printer {
  @Override void print(String value) {} // override
}`, output: 'The compiler resolves overloads using declared argument types; overridden instance methods dispatch at runtime.', tip: 'Return type alone cannot distinguish overloaded methods. Mention covariant return types when discussing overriding.' },
  { topic: 'Java', level: 'Intermediate', title: 'What is the difference between final, finally and finalize()?', prompt: 'Distinguish a keyword, an exception-handling block and a legacy method.', answer: 'final is a keyword used to prevent reassignment, overriding or inheritance depending on where it is applied. finally is an exception-handling block that normally runs after try/catch completion. finalize() was a garbage-collection-related hook that is deprecated for removal and should not be used for resource cleanup; use try-with-resources or explicit close methods.', syntax: `final int maxRetries = 3;
try {
  runTask();
} finally {
  releaseLocalLock();
}`, output: 'The finally block normally executes whether the try block completes or throws, subject to abrupt JVM termination and similar exceptional cases.', tip: 'Do not claim finally always executes: Runtime.halt(), process termination or a JVM crash can prevent it.' },
  { topic: 'Java', level: 'Intermediate', title: 'What is the difference between checked and unchecked exceptions?', prompt: 'Explain compile-time handling requirements and examples.', answer: 'Checked exceptions are checked by the compiler and must be caught or declared, such as IOException. Unchecked exceptions are RuntimeException subclasses (and Errors) and do not have that compile-time requirement, such as NullPointerException or IllegalArgumentException. Use exception types to communicate recoverability and programming errors clearly.', syntax: `try {
  Files.readString(Path.of("notes.txt"));
} catch (IOException error) {
  System.err.println(error.getMessage());
}`, output: 'The checked IOException must be caught or declared by the calling method.', tip: 'Errors usually represent serious JVM or environment problems and should not be treated as ordinary application exceptions.' },
  { topic: 'Java', level: 'Intermediate', title: 'How does the Java Collections Framework work?', prompt: 'Compare List, Set, Queue and Map at the interface level.', answer: 'The Collections Framework provides interfaces, implementations and algorithms for working with groups of objects. List represents an ordered sequence and permits duplicates; Set models uniqueness; Queue represents elements awaiting processing; Map stores key-value associations and is not a subtype of Collection. Select an implementation based on ordering, lookup, concurrency and performance needs.', syntax: `List<String> names = new ArrayList<>();
Set<String> unique = new HashSet<>();
Queue<String> jobs = new ArrayDeque<>();
Map<Integer, String> users = new HashMap<>();`, output: 'Each variable is declared using an interface and instantiated with a concrete implementation.', tip: 'Program to interfaces so implementations can be changed without changing callers.' },
  { topic: 'Java', level: 'Intermediate', title: 'Compare ArrayList and LinkedList.', prompt: 'Discuss internal structure, access, insertion and memory overhead.', answer: 'ArrayList uses a resizable array and offers constant-time indexed access; inserting or removing in the middle shifts elements. LinkedList uses a doubly linked list; indexed access requires traversal, while insertion/removal at a known node is constant time. LinkedList uses extra memory for node links. In many real workloads ArrayList is the better default due to cache locality.', syntax: `List<String> values = new ArrayList<>();
values.add("A");
values.add("B");
System.out.println(values.get(1));`, output: 'B', tip: 'Do not say LinkedList insertion is always O(1): locating the insertion point may take O(n).' },
  { topic: 'Java', level: 'Intermediate', title: 'How does HashMap work internally?', prompt: 'Explain hashing, buckets, collisions, equals and resizing.', answer: 'HashMap computes a hash from the key and maps it to a bucket index. Colliding keys share a bucket; equality checks distinguish keys within that bucket. When size exceeds the capacity multiplied by the load factor, the table resizes and entries are redistributed. Modern Java implementations can treeify heavily collided buckets under specified conditions.', syntax: `Map<String, Integer> scores = new HashMap<>();
scores.put("Asha", 90);
scores.put("Ravi", 85);
System.out.println(scores.get("Asha")); // 90`, output: '90', tip: 'Correct equals() and hashCode() implementations are essential for reliable key lookup.' },
  { topic: 'Java', level: 'Intermediate', title: 'What is the contract between equals() and hashCode()?', prompt: 'Explain the rules required by HashMap and HashSet.', answer: 'If two objects are equal according to equals(), they must return the same hashCode(). Unequal objects may share a hash code. hashCode should remain consistent while equality-relevant state is unchanged. Overriding one method without the other can make hash-based collections behave incorrectly.', syntax: `@Override
public boolean equals(Object other) {
  if (this == other) return true;
  if (!(other instanceof User user)) return false;
  return id == user.id;
}
@Override
public int hashCode() {
  return Integer.hashCode(id);
}`, output: 'User objects with the same equality-defining id compare equal and produce the same hash code.', tip: 'Avoid mutating fields used in equals/hashCode while an object is stored as a HashMap key.' },
  { topic: 'Java', level: 'Intermediate', title: 'What is the difference between HashMap, Hashtable and ConcurrentHashMap?', prompt: 'Compare synchronization, null handling and concurrency.', answer: 'HashMap is not synchronized and allows one null key and null values. Hashtable is a legacy synchronized Map and disallows null keys and values. ConcurrentHashMap is designed for concurrent access with finer-grained coordination and does not allow null keys or values. Prefer ConcurrentHashMap for common concurrent map use cases.', syntax: `Map<String, Integer> counts = new ConcurrentHashMap<>();
counts.merge("java", 1, Integer::sum);`, output: 'The merge operation atomically inserts or updates the mapping for the key.', tip: 'A synchronized wrapper and ConcurrentHashMap have different iteration and concurrency characteristics; choose based on the access pattern.' },
  { topic: 'Java', level: 'Intermediate', title: 'What is the difference between Comparable and Comparator?', prompt: 'Explain natural ordering versus external custom ordering.', answer: 'Comparable defines a class’s natural ordering through compareTo(). Comparator defines an external comparison strategy through compare(), allowing multiple sort orders without modifying the class. Both should provide ordering consistent with the intended equality semantics, especially when used in sorted sets or maps.', syntax: `List<String> names = new ArrayList<>(List.of("Zoe", "Asha"));
names.sort(Comparator.comparingInt(String::length)
                     .thenComparing(Comparator.naturalOrder()));`, output: 'Names are sorted by length and then alphabetically.', tip: 'Use Comparator.comparing(), reversed() and thenComparing() to compose readable sort rules.' },
  { topic: 'Java', level: 'Intermediate', title: 'What are generics and why are they useful?', prompt: 'Explain compile-time type safety, reusable code and type erasure.', answer: 'Generics allow classes, interfaces and methods to work with parameterized types while providing compile-time type checking and reducing casts. Java implements generics primarily through type erasure, so most generic type parameters are not available as distinct runtime types. Primitive types use wrapper classes with generics.', syntax: `List<String> languages = new ArrayList<>();
languages.add("Java");
// languages.add(10); // compile-time error
String first = languages.get(0);`, output: 'The list accepts String values and returns String without an explicit cast.', tip: 'Know that List<Integer> is not a subtype of List<Number>; generic types are invariant.' },
  { topic: 'Java', level: 'Intermediate', title: 'What are lambda expressions and functional interfaces?', prompt: 'Explain target typing and a single abstract method contract.', answer: 'A lambda expression provides an implementation for a functional interface, which has one abstract method (default and static methods do not count toward that single abstract method). The compiler infers the target functional-interface type from context. Lambdas are commonly used with streams, comparators and callbacks.', syntax: `@FunctionalInterface
interface Calculator {
  int apply(int a, int b);
}
Calculator add = (a, b) -> a + b;
System.out.println(add.apply(2, 3));`, output: '5', tip: 'Common functional interfaces include Predicate, Function, Consumer and Supplier.' },
  { topic: 'Java', level: 'Intermediate', title: 'What is the Stream API?', prompt: 'Describe source, intermediate operations, terminal operations and laziness.', answer: 'A stream pipeline processes data from a source through intermediate operations such as filter, map and sorted, then a terminal operation such as collect, reduce or count. Intermediate operations are generally lazy. A stream is not a data structure and should normally be consumed only once.', syntax: `List<Integer> values = List.of(2, 5, 8, 9);
List<Integer> evenSquares = values.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * n)
    .toList();`, output: '[4, 64]', tip: 'Avoid side effects in stream operations and use parallel streams only after measuring and understanding the workload.' },
  { topic: 'Java', level: 'Intermediate', title: 'What is the difference between map() and flatMap() in streams?', prompt: 'Explain one-to-one transformation versus flattening nested results.', answer: 'map transforms each input element into one output element, so mapping a value to a list produces a stream of lists. flatMap transforms each input into a stream and flattens those streams into one stream, which is useful for nested collections or optional values.', syntax: `List<List<String>> groups =
    List.of(List.of("A", "B"), List.of("C"));
List<String> all = groups.stream()
    .flatMap(List::stream)
    .toList();`, output: '[A, B, C]', tip: 'Use map when the transformation returns one value per input; use flatMap when the result itself is a container to flatten.' },
  { topic: 'Java', level: 'Advanced', title: 'How does multithreading work in Java?', prompt: 'Explain Thread, Runnable, shared state and concurrency risks.', answer: 'Java supports concurrent execution using threads. Tasks can be represented with Runnable or Callable and executed directly or through executor services. Threads share process memory, so shared mutable state requires safe coordination to avoid race conditions, visibility bugs and deadlocks.', syntax: `Runnable task = () -> System.out.println(
    Thread.currentThread().getName());
Thread worker = new Thread(task);
worker.start();`, output: 'The task runs on a new thread; the exact thread name is runtime-dependent.', tip: 'Call start() to begin a new thread. Calling run() directly is an ordinary method call on the current thread.' },
  { topic: 'Java', level: 'Advanced', title: 'What does synchronized do?', prompt: 'Explain intrinsic locks, mutual exclusion and memory visibility.', answer: 'The synchronized keyword acquires an object monitor before entering a synchronized block or method and releases it when the block exits. It provides mutual exclusion for code using the same monitor and establishes memory-visibility guarantees between unlock and subsequent lock operations on that monitor.', syntax: `class Counter {
  private int value;
  public synchronized void increment() {
    value++;
  }
  public synchronized int get() {
    return value;
  }
}`, output: 'Calls using the same Counter instance serialize access to the synchronized methods.', tip: 'Lock identity matters: synchronizing on different objects does not coordinate access to the same shared data.' },
  { topic: 'Java', level: 'Advanced', title: 'What is the volatile keyword?', prompt: 'Explain visibility and ordering, and why volatile does not make increments atomic.', answer: 'volatile ensures reads and writes of a field have specified visibility and ordering effects across threads. A write to a volatile field happens-before a subsequent read of that field. It does not make compound operations such as count++ atomic; use synchronization or atomic classes for read-modify-write operations.', syntax: `private volatile boolean running = true;
// Thread A:
while (running) {
  // work
}
// Thread B:
running = false;`, output: 'The worker thread can observe the updated running flag.', tip: 'Use AtomicInteger for atomic counters or synchronized/locks for compound invariants.' },
  { topic: 'Java', level: 'Advanced', title: 'What is a deadlock and how can you prevent it?', prompt: 'Describe circular waiting and practical prevention techniques.', answer: 'A deadlock occurs when threads wait indefinitely for locks held by one another. The classic necessary conditions are mutual exclusion, hold and wait, no preemption and circular wait. Prevention includes consistent lock ordering, minimizing nested locks, using timed tryLock where suitable and avoiding calls to unknown code while holding locks.', syntax: `Thread 1: holds Lock A → waits for Lock B
Thread 2: holds Lock B → waits for Lock A`, output: 'Neither thread can progress until the lock cycle is broken.', tip: 'Explain how you would diagnose a deadlock using a thread dump and identify the blocked monitor ownership.' },
  { topic: 'Java', level: 'Advanced', title: 'Why use ExecutorService and thread pools?', prompt: 'Explain task submission, reuse, lifecycle and bounded resource management.', answer: 'ExecutorService separates task submission from thread management. A thread pool reuses worker threads, controls concurrency and avoids creating a new thread for every task. Applications should choose queue and pool sizing carefully and shut down executors gracefully when their lifecycle ends.', syntax: `ExecutorService pool = Executors.newFixedThreadPool(4);
try {
  Future<Integer> result = pool.submit(() -> 2 + 3);
  System.out.println(result.get());
} finally {
  pool.shutdown();
}`, output: '5', tip: 'For production services, understand queue growth, rejection policies, graceful shutdown and why an unbounded queue can hide overload.' },
  { topic: 'Java', level: 'Advanced', title: 'What are the main JVM memory areas?', prompt: 'Describe heap, Java stacks, method area/metaspace and program counter.', answer: 'Each thread has a private Java stack containing frames for method calls and local variables. The heap is shared and stores objects and arrays. The method area is a JVM specification concept for class metadata; HotSpot uses native-memory Metaspace for class metadata. Each thread also has a program counter register, and native methods use native stacks.', syntax: `Thread stack: method frames / local variables
Heap: objects and arrays
Metaspace (HotSpot): class metadata`, output: 'A StackOverflowError commonly relates to excessive call depth; an OutOfMemoryError can result from exhausted heap or other memory areas.', tip: 'Do not say all Java memory lives on the heap. Distinguish per-thread memory from shared runtime memory.' },
  { topic: 'Java', level: 'Advanced', title: 'How does garbage collection work in Java?', prompt: 'Explain reachability, roots and why System.gc() is not a guarantee.', answer: 'Garbage collectors reclaim heap objects that are no longer reachable from GC roots such as active thread stacks, static references and JNI references. Collectors use different algorithms and may organize the heap into generations or regions. System.gc() is only a request and does not guarantee immediate collection.', syntax: `Object data = new Object();
data = null; // the object may now be eligible for collection`, output: 'The object becomes eligible for collection if no other reachable reference points to it; collection timing is nondeterministic.', tip: 'Eligible for collection does not mean collected immediately. Resource cleanup should use try-with-resources, not finalization.' },
  { topic: 'Java', level: 'Advanced', title: 'What is class loading and the parent delegation model?', prompt: 'Explain loading, linking, initialization and class loader hierarchy.', answer: 'Class loading brings class definitions into the JVM. The lifecycle includes loading, linking (verification, preparation and resolution) and initialization. In the traditional parent-delegation model, a class loader asks its parent to load a class before attempting its own lookup, helping avoid duplicate core classes and improving safety. Custom loaders can use different delegation strategies.', syntax: `Class<?> type = Class.forName("java.util.ArrayList");
System.out.println(type.getName());`, output: 'java.util.ArrayList', tip: 'Distinguish class loading from object creation. A class can be loaded without immediately creating an instance.' },
  { topic: 'Java', level: 'Advanced', title: 'What is the difference between fail-fast and weakly consistent iterators?', prompt: 'Explain concurrent modification behavior without overstating guarantees.', answer: 'Many standard collection iterators are fail-fast on a best-effort basis and may throw ConcurrentModificationException when structural modification is detected outside the iterator. Concurrent collections often provide weakly consistent iterators that can reflect some concurrent updates without throwing that exception. Fail-fast behavior is not a thread-safety guarantee.', syntax: `List<Integer> values = new ArrayList<>(List.of(1, 2, 3));
for (Integer value : values) {
  // Structural modification here may trigger
  // ConcurrentModificationException.
}`, output: 'Modifying the list structurally during enhanced-for iteration is unsafe; use the iterator’s remove method or an appropriate concurrent collection.', tip: 'Avoid calling all concurrent iterators "fail-safe"; weakly consistent and snapshot iterators have distinct semantics.' },
  { topic: 'Java', level: 'Advanced', title: 'What is serialization in Java and what are its risks?', prompt: 'Explain object serialization, serialVersionUID and safer data exchange.', answer: 'Java serialization converts an object graph into a byte stream and can reconstruct it later. Serializable marks a class as eligible for this mechanism; serialVersionUID identifies a version for compatibility checks. Native Java deserialization of untrusted data can be dangerous, so prefer safer formats and strict validation for external data.', syntax: `class Course implements Serializable {
  private static final long serialVersionUID = 1L;
  private String title;
}`, output: 'A Course instance can participate in Java object serialization.', tip: 'Never deserialize untrusted bytes without a carefully designed allowlist and filtering strategy.' },
  { topic: 'Java', level: 'Advanced', title: 'What are records and sealed classes in modern Java?', prompt: 'Explain concise data carriers and restricted inheritance.', answer: 'Records provide a concise way to model transparent data carriers with final component fields and generated accessors, equals, hashCode and toString. Sealed classes and interfaces restrict which types may extend or implement them using permits (or related declarations). Both features make domain models more expressive; availability depends on the Java language version.', syntax: `record Point(int x, int y) {}
sealed interface Shape permits Circle {}
record Circle(double radius) implements Shape {}`, output: 'Point and Circle are record types; Shape restricts its permitted direct implementations.', tip: 'Mention the project’s target Java version before using newer language features in an interview or codebase.' },

  { topic: 'Django', level: 'Basic', title: 'What is Django and how does its MVT architecture work?', prompt: 'Describe the request flow through a Django application.', answer: 'Django is a batteries-included Python web framework. Its Model-View-Template pattern separates data models, request-handling views and presentation templates. A URL pattern routes a request to a view, which can query models and return a response or render a template.', syntax: `# urls.py
path('products/', views.product_list, name='product-list')
# views.py
def product_list(request):
    return render(request, 'products/list.html')`, output: 'A request to /products/ is routed to product_list, which returns a rendered HTML response.', tip: 'Explain Django’s request/response lifecycle rather than only listing its features.' },
  { topic: 'Django', level: 'Intermediate', title: 'How does Django ORM handle database queries?', prompt: 'Explain QuerySets, lazy evaluation and safe filtering.', answer: 'Django ORM maps model classes to database tables and builds SQL through QuerySets. QuerySets are generally lazy: constructing a filter does not execute SQL until evaluation. Use parameterized ORM filters and inspect query counts to avoid injection and N+1 problems.', syntax: `active_users = User.objects.filter(is_active=True)
# Query runs when evaluated
for user in active_users:
    print(user.username)`, output: 'The ORM retrieves active users when the QuerySet is evaluated.', tip: 'Know select_related, prefetch_related and QuerySet evaluation for performance questions.' },
  { topic: 'Django', level: 'Advanced', title: 'How do you secure and scale a Django REST backend?', prompt: 'Cover authentication, permissions, caching and deployment.', answer: 'Use HTTPS, secure cookie and host settings, validated serializers, least-privilege permissions, throttling and managed secrets. Scale with stateless application instances, a production WSGI/ASGI server, shared cache where appropriate, database indexing and observability. Move long-running work to a task queue.', syntax: `REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated'
    ],
    'DEFAULT_THROTTLE_RATES': {'user': '100/hour'},
}`, output: 'Requests require authentication by default and user requests are rate-limited.', tip: 'Discuss authorization at the object level; authentication alone does not prevent insecure direct object references.' },
  { topic: 'Flask', level: 'Basic', title: 'What is Flask and how does routing work?', prompt: 'Explain the microframework approach and route decorators.', answer: 'Flask is a lightweight Python web framework that provides routing, request/response handling and extension points without imposing a large project structure. Route decorators connect URL rules and HTTP methods to Python view functions.', syntax: `from flask import Flask
app = Flask(__name__)

@app.get('/health')
def health():
    return {'status': 'ok'}`, output: 'GET /health returns a JSON response containing status=ok.', tip: 'Microframework does not mean production-ready defaults; explain which extensions and operational controls you would add.' },
  { topic: 'Flask', level: 'Intermediate', title: 'How do Flask application factories and blueprints help?', prompt: 'Explain modularity, configuration and test isolation.', answer: 'An application factory creates and configures an app instance when called. Blueprints group related routes and handlers so a larger application can be split into modules. This pattern supports multiple configurations and easier test setup.', syntax: `def create_app(config=None):
    app = Flask(__name__)
    app.config.from_mapping(config or {})
    from .users import users_bp
    app.register_blueprint(users_bp, url_prefix='/users')
    return app`, output: 'The factory returns a configured Flask app with the users blueprint registered.', tip: 'Initialize extensions with init_app(app) inside the factory to avoid binding them to one global app.' },
  { topic: 'Flask', level: 'Advanced', title: 'How do you run Flask safely in production?', prompt: 'Discuss WSGI servers, configuration, secrets and observability.', answer: 'Do not use Flask’s development server in production. Run the application behind a production WSGI server and reverse proxy, disable debug mode, store secrets outside source control, validate inputs, configure secure cookies and trusted hosts, and add structured logs, health checks and metrics.', syntax: `# Example deployment command
gunicorn --workers 3 --bind 0.0.0.0:8000 'myapp:create_app()'`, output: 'Gunicorn serves the Flask application using multiple worker processes.', tip: 'Choose worker count and timeouts based on workload and platform limits; more workers are not always better.' },
  { topic: 'FastAPI', level: 'Basic', title: 'What makes FastAPI different from traditional Python API frameworks?', prompt: 'Explain type hints, validation and generated API documentation.', answer: 'FastAPI uses Python type annotations and Pydantic models to validate request data and serialize responses. It generates OpenAPI documentation automatically and supports both async and regular path operations.', syntax: `from fastapi import FastAPI
app = FastAPI()

@app.get('/items/{item_id}')
def read_item(item_id: int):
    return {'item_id': item_id}`, output: 'A non-integer item_id is rejected during request validation.', tip: 'Mention that async is useful for awaitable I/O; it does not automatically speed up CPU-bound code.' },
  { topic: 'FastAPI', level: 'Intermediate', title: 'How does dependency injection work in FastAPI?', prompt: 'Explain reusable dependencies for authentication and database sessions.', answer: 'FastAPI dependencies are callables declared with Depends. The framework resolves them for each request and can reuse shared logic for authentication, validation, configuration and resource lifecycles. Yield-based dependencies can clean up resources after the request.', syntax: `from fastapi import Depends

def get_token():
    return 'validated-token'

@app.get('/profile')
def profile(token: str = Depends(get_token)):
    return {'authenticated': bool(token)}`, output: 'The dependency is resolved before the profile endpoint runs.', tip: 'Keep dependencies small and testable; do not confuse dependency injection with global mutable state.' },
  { topic: 'FastAPI', level: 'Advanced', title: 'How do you manage concurrency and background work in FastAPI?', prompt: 'Compare async endpoints, thread pools and durable task queues.', answer: 'Use async endpoints for non-blocking I/O libraries and ordinary def endpoints for blocking work that FastAPI can dispatch appropriately. CPU-heavy or durable jobs should be moved to process workers or a task queue. Apply timeouts, bounded concurrency and graceful shutdown.', syntax: `@app.get('/status')
async def status():
    result = await async_client.get('https://service.example/status')
    return {'code': result.status_code}`, output: 'The endpoint awaits non-blocking HTTP I/O without blocking the event loop.', tip: 'Never call blocking database or HTTP clients directly inside an async endpoint without an appropriate strategy.' },
  { topic: 'Django REST Framework', level: 'Basic', title: 'What are serializers in Django REST Framework?', prompt: 'Explain validation and conversion between model instances and API data.', answer: 'Serializers convert complex objects to primitive representations and validate incoming data before create or update operations. ModelSerializer can derive fields from a Django model, while explicit serializers are useful for custom API contracts.', syntax: `class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'price']`, output: 'The serializer exposes the selected product fields and validates incoming values.', tip: 'Use serializer validation for data rules, but enforce authorization separately in permissions and views.' },
  { topic: 'Django REST Framework', level: 'Intermediate', title: 'Compare APIView, GenericAPIView and ViewSet.', prompt: 'Explain abstraction levels and router integration.', answer: 'APIView gives explicit control over HTTP method handlers. GenericAPIView adds queryset, serializer and mixin support for common CRUD patterns. ViewSets group related actions and can be registered with routers to generate URL patterns.', syntax: `class ProductViewSet(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer`, output: 'A router can expose list, retrieve, create, update and delete actions for products.', tip: 'Choose the least abstract class that keeps the endpoint clear; custom actions should not obscure resource semantics.' },
  { topic: 'Django REST Framework', level: 'Advanced', title: 'How do you implement secure object-level authorization in DRF?', prompt: 'Discuss permissions, queryset scoping and serializer validation.', answer: 'Authenticate the caller, apply endpoint and object-level permissions, and scope querysets so users can only retrieve permitted records. Validate ownership and relationships during writes, avoid trusting client-supplied owner IDs, and test both allowed and denied cases.', syntax: `def get_queryset(self):
    return Order.objects.filter(owner=self.request.user)`, output: 'The API only returns orders belonging to the authenticated user.', tip: 'Object permissions do not automatically filter list endpoints; queryset scoping is essential.' },
  { topic: 'Machine Learning', level: 'Basic', title: 'What is the difference between supervised and unsupervised learning?', prompt: 'Give examples and describe the type of training data.', answer: 'Supervised learning trains on labeled examples to predict a target, such as classification or regression. Unsupervised learning finds structure in data without target labels, such as clustering or dimensionality reduction.', syntax: `# Supervised: features X and known labels y
model.fit(X_train, y_train)
# Unsupervised: discover structure in X
clusters = KMeans(n_clusters=3).fit_predict(X)`, output: 'The supervised model learns from labels; clustering assigns groups without labels.', tip: 'Choose the learning setup based on the business question and available labels, not on the algorithm name.' },
  { topic: 'Machine Learning', level: 'Intermediate', title: 'What are overfitting, underfitting and data leakage?', prompt: 'Explain symptoms and prevention techniques.', answer: 'Overfitting occurs when a model learns training-specific noise and performs poorly on unseen data. Underfitting occurs when it cannot capture useful patterns. Data leakage happens when training uses information unavailable at prediction time. Use proper splits, pipelines, cross-validation and leakage-aware feature design.', syntax: `from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)`, output: 'The test set is held out for an unbiased final evaluation.', tip: 'Fit preprocessing only on training folds; fitting scalers on the full dataset leaks information.' },
  { topic: 'Machine Learning', level: 'Advanced', title: 'How do you select metrics for an imbalanced classification problem?', prompt: 'Compare accuracy, precision, recall, F1 and PR-AUC.', answer: 'Accuracy can hide poor minority-class performance when classes are imbalanced. Precision measures the reliability of positive predictions; recall measures how many actual positives are found. F1 balances precision and recall, while PR-AUC is often informative for rare positive classes. Select a threshold based on error costs.', syntax: `from sklearn.metrics import classification_report
predictions = model.predict(X_test)
print(classification_report(y_test, predictions))`, output: 'The report summarizes per-class precision, recall and F1.', tip: 'Tie the metric and threshold to the cost of false positives versus false negatives.' },
  { topic: 'Data Science', level: 'Basic', title: 'What is the data science workflow?', prompt: 'Outline the stages from question framing to communication.', answer: 'A typical workflow frames a measurable question, gathers data, profiles and cleans it, explores patterns, builds and validates analyses or models, and communicates limitations and recommendations. The process is iterative rather than strictly linear.', syntax: `# Example exploratory workflow
df.shape
df.info()
df.isna().sum()
df.describe(include='all')`, output: 'These checks reveal dataset size, column types, missing values and summary statistics.', tip: 'Start with the decision the analysis should support, not with a chart or algorithm.' },
  { topic: 'Data Science', level: 'Intermediate', title: 'How do you handle missing values and outliers?', prompt: 'Explain diagnosis, imputation and robust analysis.', answer: 'First determine why values are missing and whether missingness is systematic. Choose deletion or imputation based on context, preserve missingness indicators when useful, and investigate outliers before removing them. Robust statistics and domain limits can help avoid discarding valid rare cases.', syntax: `median = df['income'].median()
df['income_missing'] = df['income'].isna()
df['income'] = df['income'].fillna(median)`, output: 'Missing income values are filled with the median and a flag preserves their original missingness.', tip: 'Compute imputation values from training data only when building predictive models.' },
  { topic: 'Data Science', level: 'Advanced', title: 'How do you make an analysis reproducible?', prompt: 'Discuss versioning, environments, data lineage and validation.', answer: 'Record code and dependency versions, seed stochastic operations where appropriate, track input data versions and transformations, validate schemas and outputs, and document assumptions. Use repeatable pipelines and separate exploratory work from production jobs.', syntax: `# Reproducibility basics
import numpy as np
np.random.seed(42)
# Pin project dependencies in a lock or requirements file`, output: 'Repeated runs can reproduce seeded random operations, subject to library and hardware differences.', tip: 'A fixed random seed alone does not make a pipeline reproducible; data, code and environment must also be controlled.' },
  { topic: 'Data Analyst', level: 'Basic', title: 'What is the difference between a KPI and a metric?', prompt: 'Explain how measures connect to business outcomes.', answer: 'A metric is any measurable quantity. A KPI is a selected metric tied to a critical business objective and used to assess progress. A useful KPI has a clear definition, owner, time window, data source and target.', syntax: `conversion_rate = purchases / qualified_visits
# Define numerator, denominator and reporting period`, output: 'The conversion rate expresses purchases as a proportion of qualified visits.', tip: 'Clarify metric definitions before comparing dashboards; teams often calculate the same label differently.' },
  { topic: 'Data Analyst', level: 'Intermediate', title: 'How do you validate data before building a dashboard?', prompt: 'Cover completeness, accuracy, consistency and reconciliation.', answer: 'Check schema and data types, nulls, duplicates, valid ranges, referential integrity and freshness. Reconcile key totals against a trusted source, test business rules and document exclusions. Validate filters and aggregations with representative examples.', syntax: `assert df['order_id'].notna().all()
assert not df['order_id'].duplicated().any()
assert (df['amount'] >= 0).all()`, output: 'The checks fail early if IDs are missing or duplicated or amounts are negative.', tip: 'A visually polished dashboard is not trustworthy until its underlying definitions and totals are validated.' },
  { topic: 'Data Analyst', level: 'Advanced', title: 'How would you investigate a sudden drop in a business KPI?', prompt: 'Describe a structured diagnostic approach.', answer: 'Confirm the metric definition and data freshness first. Compare the change with historical baselines, segment by channel, geography, product and cohort, and inspect funnel stages. Separate instrumentation or pipeline failures from real behavior changes, then communicate evidence and next actions.', syntax: `# Compare current and prior periods by segment
summary = df.groupby(['period', 'channel'])['orders'].sum()
print(summary.unstack(fill_value=0))`, output: 'The segmented comparison helps identify where the KPI change is concentrated.', tip: 'Avoid jumping to a causal explanation from correlation; verify the data and test hypotheses.' },
  { topic: 'Manual Testing', level: 'Basic', title: 'What is the difference between smoke, sanity and regression testing?', prompt: 'Explain when each test type is used.', answer: 'Smoke testing checks whether a build’s critical functions are stable enough for deeper testing. Sanity testing is a focused check after a small change or fix. Regression testing checks that existing behavior still works after changes.', syntax: `Build received -> Smoke suite -> Focused sanity checks
                 -> Full regression suite`, output: 'The sequence gates deeper testing based on build stability and change risk.', tip: 'Teams use these terms differently; explain the purpose and scope rather than relying only on labels.' },
  { topic: 'Manual Testing', level: 'Intermediate', title: 'How do you write effective test cases?', prompt: 'Include preconditions, steps, test data and expected results.', answer: 'A useful test case has a unique ID, objective, preconditions, test data, clear steps and observable expected results. Cover positive, negative, boundary, equivalence and state-transition scenarios, and keep cases traceable to requirements.', syntax: `ID: LOGIN-NEG-01
Precondition: User account exists
Steps: Submit valid username with wrong password
Expected: Generic error; no session is created`, output: 'The test is repeatable and its pass/fail result is observable.', tip: 'Avoid vague expected results such as “works correctly”; state exactly what should happen.' },
  { topic: 'Manual Testing', level: 'Advanced', title: 'How do you prioritize testing when time is limited?', prompt: 'Explain risk-based testing and release recommendations.', answer: 'Prioritize by business impact, likelihood of failure, change size, usage frequency, security exposure and dependency criticality. Test critical user journeys and high-risk integrations first, then broaden coverage. Report residual risk and evidence rather than declaring a release risk-free.', syntax: `Risk score = impact x likelihood
# Rank critical workflows and changed components first`, output: 'The team spends limited test time on the highest-risk areas first.', tip: 'A low-risk score does not excuse skipping legally or security-critical checks.' },
  { topic: 'JavaScript Frameworks & Libraries', level: 'Basic', title: 'What problem do JavaScript frameworks solve?', prompt: 'Explain component-based UI development and ecosystem libraries.', answer: 'Frameworks and libraries provide reusable abstractions for rendering interfaces, managing state, routing and data access. They reduce repeated low-level DOM work and encourage consistent application structure. The exact responsibilities differ between libraries and full frameworks.', syntax: `// Example component-oriented UI
function Welcome({ name }) {
  return <h1>Hello, {name}</h1>
}`, output: 'The component renders a heading using the supplied name prop.', tip: 'Be precise about library versus framework and explain the trade-offs of the chosen tool.' },
  { topic: 'JavaScript Frameworks & Libraries', level: 'Intermediate', title: 'How do you manage state and data fetching in a frontend app?', prompt: 'Compare local state, shared state and server state.', answer: 'Keep transient UI state close to the component that owns it. Use context or a state library for genuinely shared client state, and use a query/cache tool for server state, including loading, error, stale and refetch behavior. Avoid duplicating the same source of truth.', syntax: `const [isOpen, setIsOpen] = useState(false)
// Server data should also model loading and error states`, output: 'Local state controls the dialog; server-state tooling handles remote data lifecycle.', tip: 'Do not put every value in a global store; choose state ownership based on who needs it.' },
  { topic: 'JavaScript Frameworks & Libraries', level: 'Advanced', title: 'How do you optimize a large frontend application?', prompt: 'Discuss bundle size, rendering, caching and observability.', answer: 'Measure real user performance, split routes and heavy components, remove unused dependencies, optimize assets, cache appropriate requests and avoid unnecessary renders. Track Core Web Vitals and errors in production, and verify improvements with repeatable measurements.', syntax: `const ReportsPage = lazy(() => import('./ReportsPage.jsx'))
// Render the route inside a Suspense boundary`, output: 'The reports bundle can be loaded only when its route is needed.', tip: 'Profile before memoizing; premature memoization can add complexity without measurable benefit.' },


  { topic: 'C++', level: 'Basic', title: 'What is the difference between a pointer and a reference in C++?', prompt: 'Explain nullability, reassignment and common use cases.', answer: 'A pointer stores an address, can be null and can be reassigned to another object. A reference is an alias that must be initialized when declared and cannot be reseated. Both can avoid copying, but references are preferable when null is not a meaningful state.', syntax: `int value = 10;
int* pointer = &value;
int& reference = value;
*pointer = 20;
reference = 30;`, output: 'value becomes 30 because both expressions refer to the same object.', tip: 'Discuss ownership and lifetime separately; a raw pointer does not automatically manage the object it points to.' },
  { topic: 'C++', level: 'Intermediate', title: 'What are constructors, destructors and RAII?', prompt: 'Explain deterministic resource management in C++.', answer: 'Constructors establish an object’s valid state and destructors release resources when object lifetime ends. RAII ties resource ownership to object lifetime, helping manage memory, locks and file handles safely, including during exceptions.', syntax: `{
    std::lock_guard<std::mutex> lock(mutex);
    // protected work
} // lock is released automatically`, output: 'The lock_guard destructor releases the mutex when the scope exits.', tip: 'Prefer standard RAII wrappers such as unique_ptr, lock_guard and file streams over manual cleanup.' },
  { topic: 'C++', level: 'Advanced', title: 'Compare unique_ptr, shared_ptr and weak_ptr.', prompt: 'Explain ownership models and reference cycles.', answer: 'unique_ptr expresses exclusive ownership and is movable but not copyable. shared_ptr uses reference counting for shared ownership. weak_ptr observes a shared object without increasing its strong reference count, helping break ownership cycles.', syntax: `auto owner = std::make_shared<Node>();
std::weak_ptr<Node> observer = owner;
if (auto value = observer.lock()) {
    // object is still alive
}`, output: 'lock() returns a shared_ptr when the object still exists, otherwise an empty pointer.', tip: 'Use shared_ptr only when ownership is genuinely shared; it is not a universal replacement for unique_ptr.' },
  { topic: 'C# and .NET', level: 'Basic', title: 'What is the difference between value types and reference types in C#?', prompt: 'Explain assignment and storage semantics with examples.', answer: 'Value types represent values and assignment copies the value. Reference types represent objects accessed through references, so assignment copies the reference and both variables may refer to the same object. Structs and enums are value types; classes, arrays and strings are reference types.', syntax: `int first = 10;
int second = first;
second = 20;
// first remains 10`, output: 'first is 10 and second is 20.', tip: 'Do not simplify this as “stack versus heap”; actual storage depends on context and runtime implementation.' },
  { topic: 'C# and .NET', level: 'Intermediate', title: 'What are async and await in C#?', prompt: 'Explain asynchronous I/O and task-based programming.', answer: 'async marks a method that can use await, while await asynchronously waits for a Task or Task<T> to complete without blocking the current thread during the wait. It is especially useful for I/O-bound work and does not automatically create a new thread.', syntax: `public async Task<string> LoadAsync(HttpClient client)
{
    return await client.GetStringAsync("/health");
}`, output: 'The method returns a Task<string> that completes with the response body.', tip: 'Avoid async void except for event handlers; return Task so callers can await and observe failures.' },
  { topic: 'C# and .NET', level: 'Advanced', title: 'How does dependency injection work in ASP.NET Core?', prompt: 'Compare service lifetimes and explain lifetime mismatch.', answer: 'ASP.NET Core has a built-in dependency injection container. Transient services are created each time they are requested, scoped services are typically created once per request, and singleton services live for the application lifetime. A singleton should not directly capture a scoped dependency.', syntax: `builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddSingleton<IClock, SystemClock>();`, output: 'The container creates services according to their registered lifetimes.', tip: 'Know the captive dependency problem and dispose resources through the container-managed lifecycle.' },
  { topic: 'Go', level: 'Basic', title: 'What are slices in Go and how do they differ from arrays?', prompt: 'Explain length, capacity and backing arrays.', answer: 'An array has a fixed length that is part of its type. A slice is a descriptor over an underlying array with a length and capacity, so it can grow using append and may share storage with other slices.', syntax: `values := []int{1, 2}
values = append(values, 3)
fmt.Println(len(values), cap(values))`, output: 'The slice length is 3; capacity is at least 3 and may be larger.', tip: 'Remember that modifying one slice can affect another slice when they share the same backing array.' },
  { topic: 'Go', level: 'Intermediate', title: 'How do goroutines and channels support concurrency?', prompt: 'Explain communication and synchronization.', answer: 'A goroutine is a lightweight concurrent execution unit managed by the Go runtime. Channels allow goroutines to communicate and synchronize by sending and receiving typed values. Use context cancellation and clear ownership to stop work safely.', syntax: `messages := make(chan string)
go func() { messages <- "done" }()
result := <-messages
fmt.Println(result)`, output: 'The receiving goroutine prints done after the sender transmits the value.', tip: 'Do not start goroutines without a lifecycle plan; leaks occur when goroutines wait forever.' },
  { topic: 'Go', level: 'Advanced', title: 'How do you detect and prevent data races in Go?', prompt: 'Discuss synchronization and the race detector.', answer: 'A data race occurs when concurrent goroutines access the same memory and at least one access is a write without proper synchronization. Protect shared state with mutexes or channels and run tests with the race detector to expose many race conditions.', syntax: `go test -race ./...`, output: 'The race detector reports data races exercised by the test run.', tip: 'The race detector is dynamic; a clean run does not prove that untested execution paths are race-free.' },
  { topic: 'Rust', level: 'Basic', title: 'What are ownership and borrowing in Rust?', prompt: 'Explain moves, references and compile-time safety.', answer: 'Each Rust value has one owner. When ownership moves, the previous binding can no longer use the value. Borrowing allows temporary references under rules that prevent invalid aliasing and many data races at compile time.', syntax: `let name = String::from("Rust");
let borrowed = &name;
println!("{borrowed}");
println!("{name}");`, output: 'Both prints are valid because the immutable borrow does not move the String.', tip: 'Explain the difference between borrowing a value and cloning it; cloning may allocate or copy data.' },
  { topic: 'Rust', level: 'Intermediate', title: 'How does Rust handle errors with Result and Option?', prompt: 'Explain recoverable errors and absent values.', answer: 'Option<T> represents a value that may be absent, while Result<T, E> represents success or an error. The ? operator propagates an error or absence through compatible return types, making error paths explicit.', syntax: `fn parse_count(input: &str) -> Result<u32, std::num::ParseIntError> {
    let count = input.parse::<u32>()?;
    Ok(count)
}`, output: 'Valid numeric input returns Ok(count); invalid input returns Err(parse_error).', tip: 'Do not use unwrap in production paths unless a failure is genuinely impossible and that invariant is justified.' },
  { topic: 'Rust', level: 'Advanced', title: 'How does Rust provide safe concurrency?', prompt: 'Explain Send, Sync and shared mutable state.', answer: 'Rust’s ownership and borrowing rules prevent many data races at compile time. Send indicates a type can be transferred between threads; Sync indicates shared references to it can be used across threads. Mutex and atomic types provide controlled shared mutation.', syntax: `use std::sync::{Arc, Mutex};
let counter = Arc::new(Mutex::new(0));
let shared = Arc::clone(&counter);`, output: 'Arc shares ownership across threads and Mutex guards access to the protected value.', tip: 'Arc provides shared ownership, not thread-safe mutation by itself; the inner type must support safe concurrent access.' },
  { topic: 'PHP', level: 'Basic', title: 'What is the difference between == and === in PHP?', prompt: 'Explain loose and strict comparisons.', answer: 'The == operator compares values after type juggling, while === requires both value and type to match. Strict comparisons reduce surprising behavior when handling user input and mixed data.', syntax: `var_dump(5 == "5");
var_dump(5 === "5");`, output: 'bool(true) followed by bool(false).', tip: 'Prefer strict comparisons unless type coercion is explicitly intended.' },
  { topic: 'PHP', level: 'Intermediate', title: 'What are Composer and PSR standards?', prompt: 'Explain dependency management and interoperability.', answer: 'Composer manages PHP package dependencies, autoloading and version constraints. PSR standards define common conventions and interfaces that improve interoperability across PHP libraries and frameworks.', syntax: `composer require monolog/monolog
composer dump-autoload`, output: 'Composer installs the dependency and regenerates autoload metadata.', tip: 'Commit composer.lock for applications so deployments use reproducible dependency versions.' },
  { topic: 'PHP', level: 'Advanced', title: 'How do you secure a PHP web application?', prompt: 'Cover input validation, output encoding, sessions and database access.', answer: 'Validate inputs against expected formats, use prepared statements for database queries, escape output for its context, protect state-changing requests against CSRF, configure secure session cookies and keep secrets outside the web root and source control.', syntax: `$stmt = $pdo->prepare('SELECT * FROM users WHERE id = :id');
$stmt->execute(['id' => $userId]);`, output: 'The query binds the user ID as a parameter instead of concatenating it into SQL.', tip: 'Prepared statements prevent SQL injection in values, but dynamic identifiers still require allowlisting.' },
  { topic: 'Ruby', level: 'Basic', title: 'What is the difference between a symbol and a string in Ruby?', prompt: 'Explain common use cases and identity.', answer: 'A String is mutable text by default, while a Symbol is an immutable identifier commonly used for keys, method names and labels. Modern Ruby optimizes symbols, but they are not simply interchangeable with strings.', syntax: `name = "Ruby"
status = :active
puts name
puts status`, output: 'Ruby followed by active.', tip: 'Use strings for text content and symbols for identifiers; convert explicitly when comparing them.' },
  { topic: 'Ruby', level: 'Intermediate', title: 'What are blocks, procs and lambdas in Ruby?', prompt: 'Compare callable objects and argument behavior.', answer: 'A block is a chunk of code passed to a method. Proc objects capture blocks for later invocation, while lambdas are Proc-like objects with stricter argument checking and different return behavior.', syntax: `doubler = ->(value) { value * 2 }
puts doubler.call(4)`, output: '8', tip: 'Be ready to explain how return behaves differently inside a lambda and a regular proc.' },
  { topic: 'Ruby', level: 'Advanced', title: 'How does Ruby metaprogramming work?', prompt: 'Explain dynamic method definition and safe boundaries.', answer: 'Ruby supports runtime reflection and metaprogramming through methods such as define_method, method_missing and class_eval. These features can reduce repetitive code but can also make behavior harder to trace and debug.', syntax: `class Report
  define_method(:ready?) { true }
end
puts Report.new.ready?`, output: 'true', tip: 'Prefer explicit methods when metaprogramming does not provide a clear maintainability benefit.' },
  { topic: 'Kotlin', level: 'Basic', title: 'What is null safety in Kotlin?', prompt: 'Explain nullable types and safe access.', answer: 'Kotlin distinguishes non-null types from nullable types using ?. Nullable values must be handled explicitly with safe calls, Elvis expressions, checks or other valid control flow, reducing accidental null dereferences.', syntax: `val name: String? = null
val length = name?.length ?: 0
println(length)`, output: '0', tip: 'Avoid using !! as a routine null-handling strategy because it can still throw NullPointerException.' },
  { topic: 'Kotlin', level: 'Intermediate', title: 'What are data classes and sealed classes in Kotlin?', prompt: 'Explain generated data methods and restricted type hierarchies.', answer: 'A data class generates useful methods such as equals, hashCode, toString and copy based on primary-constructor properties. A sealed class or interface restricts direct subclasses, allowing exhaustive when expressions in appropriate contexts.', syntax: `data class User(val id: Int, val name: String)
val updated = User(1, "Asha").copy(name = "Ravi")`, output: 'updated is a new User value with the same id and a changed name.', tip: 'Remember that copy is shallow; nested mutable objects are not deeply cloned.' },
  { topic: 'Kotlin', level: 'Advanced', title: 'How do coroutines differ from threads?', prompt: 'Explain suspension, structured concurrency and cancellation.', answer: 'Coroutines are lightweight units of work that can suspend without blocking an operating-system thread. Structured concurrency ties child coroutine lifetimes to a scope, while cancellation and exception propagation help manage task lifecycles.', syntax: `suspend fun loadProfile(): Profile {
    return withContext(Dispatchers.IO) { repository.load() }
}`, output: 'The suspend function can pause while I/O completes and resume within its coroutine context.', tip: 'Suspending does not mean work is automatically moved to a background thread; dispatcher choice matters.' },
  { topic: 'Swift', level: 'Basic', title: 'What is the difference between let and var in Swift?', prompt: 'Explain constants and mutable variables.', answer: 'let declares a constant binding that cannot be reassigned, while var declares a mutable variable. Prefer let by default and use var only when mutation is required.', syntax: `let language = "Swift"
var score = 10
score += 1
print(language, score)`, output: 'Swift 11', tip: 'A let binding to a reference type does not necessarily make the referenced object deeply immutable.' },
  { topic: 'Swift', level: 'Intermediate', title: 'What are optionals and optional binding in Swift?', prompt: 'Explain safe handling of absent values.', answer: 'An optional represents either a wrapped value or nil. Optional binding with if let or guard let safely unwraps the value only when it exists, avoiding unsafe assumptions.', syntax: `let nickname: String? = "Sam"
if let name = nickname {
    print(name)
}`, output: 'Sam', tip: 'Use guard let to exit early when a required value is absent and keep the main path less nested.' },
  { topic: 'Swift', level: 'Advanced', title: 'How does Swift memory management use ARC?', prompt: 'Explain strong references and retain cycles.', answer: 'Automatic Reference Counting tracks strong references to class instances and deallocates an instance when its strong reference count reaches zero. Strong reference cycles can prevent deallocation; weak or unowned references can break cycles when their lifetime assumptions are correct.', syntax: `class Owner {
    weak var delegate: Delegate?
}`, output: 'The weak reference does not keep the delegate instance alive.', tip: 'Use weak when the referenced object may disappear; use unowned only when its lifetime is guaranteed.' },
  { topic: 'R Programming', level: 'Basic', title: 'What is the difference between a vector and a list in R?', prompt: 'Explain homogeneous and heterogeneous collections.', answer: 'An atomic vector stores elements of one basic type, coercing values to a common type when needed. A list can contain elements of different types and structures, including other lists and data frames.', syntax: `values <- c(1, 2, 3)
record <- list(name = "Asha", score = 95)
typeof(values)
typeof(record)`, output: 'integer (or numeric, depending on values) followed by list.', tip: 'Remember that data frames are lists of equal-length columns with additional class and row-name behavior.' },
  { topic: 'R Programming', level: 'Intermediate', title: 'How do apply, lapply and sapply differ in R?', prompt: 'Compare iteration helpers and return shapes.', answer: 'apply operates over margins of arrays and matrices. lapply applies a function to each list element and always returns a list. sapply attempts to simplify the result to a vector or matrix when possible.', syntax: `scores <- list(a = c(2, 4), b = c(6, 8))
lapply(scores, mean)
sapply(scores, mean)`, output: 'Both calculate means; lapply returns a list while sapply may simplify to a named vector.', tip: 'Use lapply when a stable list return type is important; sapply simplification can vary with results.' },
  { topic: 'R Programming', level: 'Advanced', title: 'How do you build a reproducible R analysis?', prompt: 'Discuss package versions, project structure and data provenance.', answer: 'Use a project-specific dependency lockfile, version-control scripts and configuration, record input data sources and transformations, set random seeds when relevant, and separate raw data from derived outputs. Validate results and document assumptions.', syntax: `set.seed(42)
# Use renv::init() and renv::snapshot()
# to record project package versions`, output: 'The random seed stabilizes supported random operations and renv records the project library state.', tip: 'Reproducibility also depends on input data, system libraries and execution environment.' },
  { topic: 'Agile & Scrum', level: 'Basic', title: 'What are the roles and events in Scrum?', prompt: 'Describe accountabilities and the sprint cadence.', answer: 'Scrum defines the Product Owner, Scrum Master and Developers as accountabilities. Its events are the Sprint, Sprint Planning, Daily Scrum, Sprint Review and Sprint Retrospective. Each event supports inspection and adaptation.', syntax: `Product Goal -> Sprint Planning -> Sprint
Daily Scrum -> Increment -> Review -> Retrospective`, output: 'The team inspects progress and adapts its plan during the sprint cycle.', tip: 'Scrum is a framework, not a prescribed project-management checklist; explain the purpose of each event.' },
  { topic: 'Agile & Scrum', level: 'Intermediate', title: 'How do you write and prioritize a user story?', prompt: 'Explain acceptance criteria and prioritization.', answer: 'A user story describes a user, a need and a value. Acceptance criteria define observable conditions for completion. Prioritize by value, risk, dependencies and effort, and refine stories until the team can estimate and test them.', syntax: `As a learner, I want to bookmark a lesson
so I can return to it later.

Acceptance: bookmark persists after refresh.`, output: 'The story expresses user value and has a testable acceptance condition.', tip: 'A story is not complete merely because code is merged; verify acceptance criteria and agreed Definition of Done.' },
  { topic: 'Agile & Scrum', level: 'Advanced', title: 'How do you handle changing scope during a sprint?', prompt: 'Discuss product ownership, sprint goals and trade-offs.', answer: 'Protect the Sprint Goal while collaborating with the Product Owner and Developers to clarify new information. Re-negotiate scope when needed without compromising quality, and cancel a sprint only when its goal becomes obsolete. Make trade-offs transparent to stakeholders.', syntax: `New request -> assess Sprint Goal impact
-> discuss options with Product Owner
-> re-plan scope or place item in Product Backlog`, output: 'The team responds to change while keeping the Sprint Goal and quality visible.', tip: 'Avoid treating a sprint backlog as an unchangeable contract or accepting unlimited work without trade-offs.' },
  { topic: 'Jira & Agile Project Delivery', level: 'Basic', title: 'What are projects, boards, issues and workflows in Jira?', prompt: 'Explain the main Jira work-management concepts.', answer: 'A Jira project groups work for a team or product. Issues represent work items such as stories, tasks and bugs. Boards visualize issues using filters and columns, while workflows define statuses and transitions through the work lifecycle.', syntax: `Backlog -> Selected -> In Progress -> In Review -> Done`, output: 'The workflow represents a possible path for an issue from intake to completion.', tip: 'Jira configuration varies by project type; distinguish a board view from the underlying workflow.' },
  { topic: 'Jira & Agile Project Delivery', level: 'Intermediate', title: 'How do you use JQL to find work in Jira?', prompt: 'Explain filters and practical query examples.', answer: 'Jira Query Language filters issues using fields, operators and functions. Teams use saved filters to monitor assignments, sprint work, overdue items and release scope. Good filters should be understandable and maintained as team workflows evolve.', syntax: `project = APP AND statusCategory != Done
AND assignee = currentUser()
ORDER BY priority DESC`, output: 'The query lists the current user’s unfinished issues in project APP, ordered by priority.', tip: 'Use parentheses when combining AND and OR so the filter matches the intended logic.' },
  { topic: 'Jira & Agile Project Delivery', level: 'Advanced', title: 'How can AI assist Jira delivery without weakening governance?', prompt: 'Discuss summaries, classification, automation and human review.', answer: 'AI can summarize issue history, draft acceptance criteria, classify incoming requests and highlight delivery risks. Keep source links and auditability, restrict data access, validate generated changes and require human approval for workflow transitions or external actions with meaningful impact.', syntax: `Issue context -> AI draft -> validation
-> human approval -> Jira update -> audit trail`, output: 'AI accelerates preparation while a person approves consequential updates.', tip: 'Do not allow an AI integration to close, reassign or expose sensitive issues without explicit permission and logging.' },

]
