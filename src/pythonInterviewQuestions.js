// Original Python interview questions and concise model answers.
// Topic selection is informed by common Python interview themes and InterviewBit;
// wording and explanations are independently written for this course.
export const pythonInterviewQuestions = [
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is Python and where is it used?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Python is a high-level general-purpose language used in web services, automation, data analysis, machine learning, testing and scripting.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "Is Python interpreted or compiled?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Implementations commonly compile source to bytecode and execute it in a virtual machine. CPython is the standard reference implementation; details vary by implementation.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What does dynamically typed mean?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Names are bound to objects at runtime and can later refer to objects of different types. Objects still have types; Python does not discard type information.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is PEP 8?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "PEP 8 is the widely used Python style guide for naming, indentation, imports and layout, helping teams maintain readable code.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "Why is indentation important?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Indentation defines suites such as function bodies, loops and conditionals. Consistent indentation is required; mixing tabs and spaces can cause errors.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What are Python's common built-in data types?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Common types include int, float, complex, bool, str, list, tuple, range, dict, set, frozenset, bytes, bytearray and NoneType.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "Comment versus docstring?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A comment is explanatory text ignored by Python syntax. A docstring is a string literal at the start of a module, class or function and is exposed to documentation tools.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is None?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "None is the singleton representing absence of a value. Test it with `is None`, rather than using equality as a substitute.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "Difference between pass, break and continue?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "pass is a placeholder that does nothing; break exits the nearest loop; continue skips the current iteration and moves to the next.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is slicing?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Slicing extracts part of a sequence with start, stop and step. The stop index is excluded; omitted values use sequence-specific defaults.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "Parameter versus argument?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A parameter is named in a function definition. An argument is the actual value or expression supplied when the function is called.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "Positional versus keyword arguments?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Positional arguments are matched by position. Keyword arguments are matched by parameter name, improving clarity and allowing selected parameters to be specified.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What are default arguments?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Default arguments supply values when callers omit parameters. Default expressions are evaluated once when the function is defined.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What do *args and **kwargs do?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "*args collects extra positional arguments into a tuple; **kwargs collects extra keyword arguments into a dictionary.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is a lambda function?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A lambda creates a small anonymous function containing one expression. It is useful for short callbacks or sort keys; use def for complex logic.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is recursion?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Recursion occurs when a function calls itself. A correct recursive solution needs a base case and progress toward it; deep recursion can hit the recursion limit.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is variable scope?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Scope determines where a name can be resolved. Python follows LEGB lookup: Local, Enclosing, Global and Built-in.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What do global and nonlocal do?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "global declares assignment to a module-level name. nonlocal declares assignment to a binding in the nearest enclosing function scope.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is a closure?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A closure is a function that retains access to variables from its enclosing lexical scope even after that outer function has returned.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is a higher-order function?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A higher-order function accepts another function as an argument, returns a function, or both. Examples include map(), filter() and custom decorators.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is a class and what is an object?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A class defines a type's behavior and data layout; an object is an instance of that class with its own state.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is __init__()?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "__init__ initializes an instance after creation. It is an initializer, not the allocator; __new__ is responsible for creating the object.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What does self represent?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "self is the conventional first parameter of an instance method and refers to the instance on which the method was called. It is a convention, not a keyword.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is inheritance?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Inheritance lets a class derive behavior from base classes. It supports reuse and specialization, but composition may be better without a true 'is-a' relationship.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is method overriding?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A subclass overrides a method by defining the same method name, providing specialized behavior for subclass instances.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is multiple inheritance?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A class can inherit from more than one base class. Python uses the method resolution order (MRO) to determine where attributes and methods are found.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What does super() do?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "super() returns a proxy that delegates method lookup according to the MRO. It is commonly used for cooperative inheritance.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is polymorphism?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Polymorphism means different objects can respond to the same operation through their own implementations, often using duck typing or shared protocols.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is encapsulation?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Encapsulation groups data and behavior behind an interface. A leading underscore signals non-public intent; double-leading underscores trigger name mangling, not strict privacy.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "classmethod versus staticmethod?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A class method receives the class as its first argument and is useful for alternate constructors. A static method receives no automatic instance or class argument.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "__str__ versus __repr__?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "__str__ aims for a readable user-facing representation. __repr__ aims for an unambiguous developer-facing representation, ideally recreating the object when practical.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What are dunder methods?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Dunder methods such as __len__, __iter__ and __add__ let user-defined objects integrate with Python syntax and built-in protocols.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is an abstract base class?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "An abstract base class defines an interface or shared behavior and can mark methods as abstract, requiring concrete subclasses to implement them.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is a property?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A property exposes method-backed behavior through attribute access. It supports validation or computed values while preserving a simple public attribute interface.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "Instance variable versus class variable?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "An instance variable belongs to one object. A class variable is shared through the class unless an instance shadows it.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is dataclass used for?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "dataclasses generate methods such as __init__, __repr__ and __eq__ from annotated fields, reducing boilerplate for data-focused classes.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is duck typing?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Duck typing focuses on what an object can do rather than its declared class. Code relies on required operations or protocols, not explicit inheritance.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "Composition versus inheritance?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Composition builds an object from other objects and delegates work to them. Inheritance derives a new type; composition often creates looser coupling.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is MRO and how do you inspect it?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "MRO is the order used for attribute lookup in an inheritance hierarchy. Inspect it with ClassName.__mro__ or ClassName.mro().",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is operator overloading?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A class customizes operators by implementing special methods such as __add__, __eq__ or __lt__. Implementations should preserve intuitive semantics.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is a decorator?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A decorator takes a function or class and returns a replacement or wrapper. It can add logging, authorization, caching or timing without changing the original body.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "Why use functools.wraps?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "wraps copies metadata such as the wrapped function's name and docstring and sets __wrapped__, helping introspection and documentation tools.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is a generator?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A generator is an iterator produced by a generator function or expression. It yields values lazily and retains execution state between requests.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "yield versus return?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "return ends a function and optionally provides one result. yield produces a value from a generator and suspends execution so it can resume later.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is an iterator?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "An iterator implements __iter__() and __next__(). Each next() call returns an item or raises StopIteration when exhausted.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is an iterable?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "An iterable can provide an iterator, usually through __iter__(). Lists, tuples, strings, dictionaries and files are common iterables.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is a context manager?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A context manager manages setup and cleanup around a block, commonly through __enter__ and __exit__. The with statement invokes cleanup even when an exception occurs.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What does with do?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "with enters a context manager, executes a block and invokes its exit logic afterward. It is common for files, locks and transactions.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is late binding in closures?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Free variables are looked up when the inner function runs, not when it is created. Loop callbacks may all observe the final value; bind values in defaults when needed.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is functools.lru_cache?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "lru_cache memoizes results based on hashable arguments and evicts older entries when its maximum size is reached. It suits repeatable expensive computations.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "How do you handle exceptions?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Use try for risky code, except for specific exceptions you can handle, else for success-only logic, and finally for cleanup.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "Why avoid bare except?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A bare except catches almost everything, including exceptions that should propagate. Catch specific exception types so unexpected failures remain visible.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is finally used for?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "finally runs as control leaves a try statement, whether an exception occurred or not. It is used for cleanup; context managers are often safer for resources.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "How do you raise a custom exception?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Define a class inheriting from Exception and raise it for a domain-specific failure. Include useful context in its message or attributes.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is exception chaining?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Exception chaining preserves the original exception as context when another exception is raised. Use `raise NewError(...) from exc` to make the relationship explicit.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "How do you read a text file safely?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Use open() with a context manager, specify an encoding such as UTF-8, and choose a mode such as 'r'. The context manager closes the file reliably.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "read() versus readline() versus readlines()?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "read() reads all or a requested number of characters; readline() reads one line; readlines() returns remaining lines as a list. Iterate over a file for memory efficiency.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "Text mode versus binary mode?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Text mode decodes bytes to strings using an encoding and may translate newlines. Binary mode reads and writes bytes without text decoding.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "How do you work with JSON?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Use json.dump() to write an object to a file and json.dumps() to serialize it to a string. Use json.load() or json.loads() to parse JSON.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "How do you process a large file?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Stream it incrementally instead of reading it all into memory. Iterate over lines or fixed-size chunks and validate malformed records as you go.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How does Python manage memory?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "In CPython, objects live in a private heap managed by the interpreter. Reference counting and a cyclic garbage collector reclaim unused objects; details vary by implementation.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is garbage collection?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Garbage collection reclaims memory occupied by objects that are no longer reachable. CPython combines reference counting with a cyclic collector to detect reference cycles.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is reference counting?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Reference counting tracks references to an object. In CPython, an object's count reaching zero generally allows deallocation, subject to cycles and implementation details.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is the GIL?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Traditional GIL-enabled CPython builds limit simultaneous execution of Python bytecode by threads in one interpreter. Free-threaded builds also exist; behavior depends on build and extensions.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "Threads versus processes?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Threads often suit I/O-bound tasks because they overlap waiting and share memory. Processes can run CPU-bound Python work across cores but add communication and startup overhead.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is asyncio?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "asyncio provides an event loop and async/await syntax for cooperative concurrency. It suits workloads with many concurrent I/O operations when libraries support async execution.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "Concurrency versus parallelism?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Concurrency structures tasks so they make progress during overlapping periods. Parallelism means tasks execute at the same time, typically on multiple cores.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is a race condition?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A race condition occurs when results depend on timing or ordering of concurrent operations. Use synchronization, atomic operations or message passing to protect shared state.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What are locks and semaphores?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A lock provides mutual exclusion around a critical section. A semaphore permits a bounded number of concurrent acquisitions and can limit resource usage.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is a thread-safe data structure?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A thread-safe structure protects its invariants under concurrent access. Do not assume compound operations on ordinary containers are safe; use locks or concurrency primitives.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "Shallow copy versus deep copy?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A shallow copy creates a new outer container but keeps references to nested objects. A deep copy recursively copies nested objects where supported.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "Assignment versus copying?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Assignment binds another name to the same object; it does not duplicate it. Use copy.copy() or copy.deepcopy() when a separate object is required.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is pickling?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Pickling serializes Python objects into a byte stream and unpickling reconstructs them. Never unpickle untrusted data because deserialization can execute arbitrary code.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is PYTHONPATH?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "PYTHONPATH is an environment variable that adds directories to Python's module search path. Prefer proper packages and project configuration for repeatable deployments.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "Module versus package?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A module is a Python file or importable module object. A package organizes related modules under a namespace, using regular or namespace-package rules.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "Why use if __name__ == '__main__'?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "When a file is run as the program entry point, __name__ is '__main__'. The guard keeps script-only behavior from running when the module is imported.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is a virtual environment?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A virtual environment isolates a project's interpreter environment and package installation location, reducing dependency conflicts between projects.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is pip?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "pip is the commonly used Python package installer. It installs packages from configured indexes and can install from requirements files or project metadata.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "requirements.txt versus pyproject.toml?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "requirements.txt commonly records install requirements for an environment. pyproject.toml is standardized project configuration used for metadata, build systems and tool settings.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you manage application secrets?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Keep secrets outside source code, inject them through a secret manager or protected environment configuration, restrict access, rotate them and avoid logging values.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you test Python code?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Write focused tests that arrange inputs, execute behavior and assert outcomes. unittest is in the standard library; pytest adds concise discovery, fixtures and parameterization.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is mocking in unit tests?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Mocking replaces a dependency with a controlled test double so a test isolates the unit and verifies interactions. Avoid excessive mocking that stops tests checking real behavior.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is test-driven development?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "TDD follows a short cycle: write a failing test, implement the smallest change to pass, then refactor while keeping tests green.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is code coverage?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Coverage measures which lines or branches executed during tests. High coverage does not prove correctness; tests need meaningful assertions and edge cases.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What are logging levels?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Common levels are DEBUG, INFO, WARNING, ERROR and CRITICAL. Choose levels by operational significance and configure handlers and formatting centrally.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "Logging versus print()?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "print() writes straightforward output. logging supports severity levels, timestamps, handlers, filtering and consistent application-wide diagnostics.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is a linter?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A linter analyzes source code for style issues, suspicious patterns and potential bugs. Ruff and Pylint are examples; formatters focus on consistent layout.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is profiling?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Profiling measures where a program spends time or memory. Use tools such as cProfile or tracemalloc before optimizing a suspected bottleneck.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you debug a Python application?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Reproduce the issue, inspect the traceback, isolate a minimal failing case, inspect state with a debugger or logs, fix the root cause and add a regression test.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is a traceback?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A traceback shows the call stack leading to an exception, including files, line numbers and calls. Read the exception at the bottom, then trace calls upward.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is NumPy used for?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "NumPy provides efficient multidimensional arrays and vectorized numerical operations. It is useful when homogeneous array operations outperform Python-level loops.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "NumPy array versus Python list?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A NumPy array typically stores homogeneous typed values compactly and supports vectorized operations. A list stores references and can contain mixed object types.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is broadcasting in NumPy?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Broadcasting lets NumPy operate on arrays with compatible shapes without explicitly copying data. Dimensions are compatible when equal or one of them is 1.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is a pandas Series?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A Series is a one-dimensional labeled array that can hold values and has an associated index.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is a pandas DataFrame?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "A DataFrame is a two-dimensional labeled data structure with rows and columns. Columns can have different types and can be selected, filtered, joined and transformed.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you handle missing values in pandas?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Inspect missingness with isna(), then choose to drop, fill or model missing values based on why values are missing and the analysis requirements.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "pandas loc versus iloc?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "loc selects by labels and label-based slices. iloc selects by integer position and uses Python-style stop-exclusive slices.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "pandas merge versus concat?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "merge() combines DataFrames using database-style keys or indexes. concat() stacks or aligns objects along an axis without requiring a relational join key.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How can you improve pandas performance?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Select needed columns, use vectorized operations, choose suitable dtypes, avoid row-wise apply when possible, and process large data in chunks or with distributed tools.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "apply() versus vectorized operations?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "apply() invokes a function across rows or columns and can add Python-level overhead. Vectorized operations use optimized array operations and are generally preferable when available.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you check whether all list elements are unique?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Compare list length with set length when all values are hashable. For unhashable values, use a suitable comparison or canonicalization strategy.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you count character frequencies?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Use collections.Counter to count characters. For large text streams, update a Counter incrementally rather than loading the whole file.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you solve Two Sum?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Track previously seen values in a set or dictionary. For each number, check whether target minus that number has appeared; this is average O(n) time.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you remove duplicates while preserving order?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "For hashable items, use dict.fromkeys(iterable) to preserve first-seen order. For unhashable items, track a suitable comparison key.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you flatten a nested list one level?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Use a nested comprehension such as `[item for row in matrix for item in row]`. For arbitrary nesting, use recursion or an explicit stack.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you merge two dictionaries?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Use the union operator `a | b` in supported Python versions or `{**a, **b}`. When keys overlap, values from the right dictionary win.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you sort dictionaries by a field?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Use sorted(records, key=lambda item: item['field']). Add a secondary key or reverse=True when the required ordering calls for it.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you check for a palindrome?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Normalize the string as required, then compare it with its reverse. Clarify whether case, whitespace and punctuation should be ignored.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you find the second-largest distinct number?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Remove duplicates and sort, or maintain the largest and second-largest distinct values in one pass. Handle inputs with fewer than two distinct values.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "How do you parse command-line arguments?",
    "prompt": "Explain the concept, give a practical example, and describe an edge case an interviewer may ask about.",
    "answer": "Use argparse to define positional arguments, options, types, defaults and validation. It also generates help and useful error messages.",
    "tip": "Answer in your own words, then support it with a small example. Mention trade-offs and edge cases rather than memorizing a definition."
  }
,

  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is the difference between == and is?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "== compares values for equality, while is checks whether two references point to the exact same object. Use is None for None checks; do not use is as a general value comparison.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is the difference between / and // in Python?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "/ performs true division and returns a floating-point result for ordinary numeric operands. // performs floor division, rounding the quotient down toward negative infinity; its result type depends on the operands.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "How do you floor a number in Python?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Use math.floor(value) to return the greatest integer less than or equal to a number. Be careful with negative values: floor(-2.3) is -3, not -2.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "How is a set different from a dictionary?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "A set stores unique hashable values and is useful for membership tests and removing duplicates. A dictionary stores key-value pairs and provides lookup by unique hashable keys.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "How is a dictionary different from a list?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "A list stores an ordered sequence accessed mainly by integer position. A dictionary stores key-value mappings and is accessed by keys; dictionaries preserve insertion order in modern Python.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is the difference between Python arrays and lists?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "A list is a flexible built-in container that can hold mixed object types. The array module stores elements of a declared type more compactly; NumPy arrays provide efficient vectorized numerical operations.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "When should you use a for loop versus a while loop?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Use for to iterate over an iterable or known sequence of items. Use while when repetition depends on a condition that may change during execution; ensure the condition eventually becomes false.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What do map(), filter() and reduce() do?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "map() transforms each item, filter() keeps items matching a predicate, and functools.reduce() combines items into one accumulated result. In Python 3, map() and filter() return iterators.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "How are arguments passed to Python functions?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Python uses object sharing (call by assignment): the function receives a reference to the same object. Mutating a shared mutable object can be visible to the caller, while rebinding a local parameter does not rebind the caller's name.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "How do append() and extend() differ?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "append(item) adds the supplied object as one element. extend(iterable) adds each item from the iterable to the list.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is the difference between remove(), pop() and del?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "remove(value) deletes the first matching value; pop(index) removes and returns an item (last by default); del removes an indexed item, slice or name binding and does not return the removed value.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is list comprehension?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "A list comprehension builds a new list from an iterable using an expression and optional condition, for example [n * n for n in numbers if n > 0]. It is concise but should remain readable.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "Does Python support tuple comprehension?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Python has no dedicated tuple-comprehension syntax. Parentheses around a comprehension expression create a generator expression; pass it to tuple(...) to materialize a tuple.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "Which sorting algorithm does Python use?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Python's built-in sorting uses Timsort, a stable adaptive sorting algorithm derived from merge sort and insertion sort. Its worst-case time complexity is O(n log n).",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What is the difference between sort() and sorted()?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "list.sort() sorts a list in place and returns None. sorted(iterable) accepts any iterable and returns a new sorted list, leaving the original iterable unchanged.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is a namespace in Python?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "A namespace maps names to objects and helps keep identifiers distinct. Common namespaces include built-in, global/module and local namespaces; scope rules determine how names are resolved.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "How do you delete a file using Python?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Use pathlib.Path(path).unlink() or os.remove(path) to remove a file. Handle FileNotFoundError and PermissionError where appropriate, and verify the target path before deletion.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Basic",
    "title": "What does zip() do in Python?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "zip(*iterables) returns an iterator of tuples containing items at matching positions. By default it stops at the shortest input; use strict=True in supported Python versions when unequal lengths should raise an error.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What is the difference between __new__() and __init__()?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "__new__() creates and returns an instance, while __init__() initializes an already-created instance. __new__ is especially relevant for immutable types and customized instance creation.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What are public, protected and private attributes in Python?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Public names have no leading underscore. A single leading underscore signals an internal-use convention; a double leading underscore triggers name mangling, not strict access control.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Advanced",
    "title": "What are Exception Groups in Python?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "ExceptionGroup, introduced in Python 3.11, groups multiple exceptions so they can be raised together. The except* syntax handles matching exception types within the group.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What are function annotations in Python?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Annotations attach metadata to parameters and return values, commonly used for type hints. Python does not enforce those types automatically; static checkers and tools can interpret the annotations.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is the walrus operator (:=)?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "The assignment expression operator := assigns a value as part of a larger expression. It can avoid repeating a calculation, but should be used only when it improves clarity; it was introduced in Python 3.8.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "Does Python have a switch statement?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "Python has no traditional switch statement. Python 3.10 introduced structural pattern matching with match and case, which can express many switch-like branches and richer patterns.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  },
  {
    "topic": "Python",
    "level": "Intermediate",
    "title": "What is xrange() and how does it differ from range()?",
    "prompt": "Explain the concept, show a short example, and mention a version detail or edge case an interviewer may ask about.",
    "answer": "xrange() existed in Python 2 and is not available in Python 3. In Python 3, range() is a lazy, immutable sequence-like object and covers the common use case that xrange() served.",
    "tip": "Clarify the behavior with a small example, then explain when you would choose this approach in production code."
  }
]
