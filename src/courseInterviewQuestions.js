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
]
