// SQL course curriculum derived and expanded from the uploaded SQL interview guide.
// The lessons are paraphrased into AR CodeLab's teaching format with runnable examples,
// expected results, practice tasks, solution guidance, and interview follow-ups.
export const sqlCourseLessons = [
  {
    id: 'sql-pdf-01', track: 'SQL', level: 'Basic', title: 'SQL introduction and why databases use it', duration: '10 min', kind: 'flow',
    summary: 'Understand SQL, relational databases, tables, rows and columns before writing queries.',
    explain: 'SQL (Structured Query Language) is used to define, read, insert, update and delete data in relational database systems. A database contains objects such as tables, views and indexes. A table organizes records into rows and attributes into columns. SQL is the language; MySQL, SQL Server and PostgreSQL are database systems that implement SQL with their own features.',
    code: 'SELECT name, salary\nFROM employees;\n\n-- Example result:\n-- Asha | 65000\n-- Ravi | 52000',
    output: 'A result set containing the name and salary columns for every row in employees.',
    task: 'Explain the difference between SQL and a database management system, then write a query that returns only employee names.',
    solutionHint: 'SQL is the language used to communicate with a relational database. A DBMS stores and manages the data and executes SQL. Select only the name column when that is all the application needs.',
    interviewQuestion: 'What is SQL, and how is it different from MySQL or SQL Server?'
  },
  {
    id: 'sql-pdf-02', track: 'SQL', level: 'Basic', title: 'DDL, DML, DCL, TCL and DQL commands', duration: '12 min', kind: 'table',
    summary: 'Classify the major SQL command groups and know what each group changes.',
    explain: 'SQL commands are commonly grouped by purpose. DDL defines database structures using CREATE, ALTER, DROP and TRUNCATE. DML changes stored rows with INSERT, UPDATE and DELETE. DCL manages permissions with GRANT and REVOKE. TCL controls transactions with COMMIT, ROLLBACK and SAVEPOINT. SELECT is often called DQL because it retrieves data.',
    code: 'CREATE TABLE courses (id INT PRIMARY KEY, title VARCHAR(100));\nINSERT INTO courses VALUES (1, \'Python\');\nSELECT * FROM courses;\nUPDATE courses SET title = \'Python Foundations\' WHERE id = 1;\nCOMMIT;',
    output: 'After the statements, the courses table contains one row whose title is Python Foundations, assuming the transaction is committed.',
    task: 'Classify CREATE, SELECT, INSERT, UPDATE, DELETE, GRANT, COMMIT and ROLLBACK into their command groups.',
    solutionHint: 'Remember structure = DDL, row changes = DML, permissions = DCL, transaction control = TCL, and retrieval = DQL.',
    interviewQuestion: 'What is the difference between DELETE, TRUNCATE and DROP?'
  },
  {
    id: 'sql-pdf-03', track: 'SQL', level: 'Basic', title: 'CREATE TABLE, data types and constraints', duration: '14 min', kind: 'layers',
    summary: 'Create a table with appropriate types and constraints that protect data quality.',
    explain: 'Choose a data type based on the value being stored. Use primary keys for identity, NOT NULL for required values, UNIQUE for values that must not repeat, CHECK for valid ranges, and DEFAULT for safe initial values. Constraints are database-level protection, so they remain useful even when multiple applications write to the same database.',
    code: 'CREATE TABLE employees (\n  employee_id INT PRIMARY KEY,\n  name VARCHAR(100) NOT NULL,\n  email VARCHAR(255) UNIQUE,\n  salary DECIMAL(12,2) CHECK (salary >= 0),\n  active BOOLEAN DEFAULT TRUE\n);',
    output: 'The employees table is created with identity, required-field, uniqueness, range and default-value rules.',
    task: 'Design a courses table with a course_id, unique course_code, title, lesson_count and published flag.',
    solutionHint: 'Use a primary key for course_id, UNIQUE for course_code, NOT NULL for title, CHECK for a non-negative lesson_count, and DEFAULT for published.',
    interviewQuestion: 'Why should important data rules be enforced in the database instead of only in application code?'
  },
  {
    id: 'sql-pdf-04', track: 'SQL', level: 'Basic', title: 'INSERT, SELECT, UPDATE and DELETE', duration: '14 min', kind: 'flow',
    summary: 'Practice the four common row-level operations and verify every change.',
    explain: 'INSERT adds rows, SELECT retrieves rows, UPDATE changes matching rows, and DELETE removes matching rows. UPDATE and DELETE are especially important to review because an incorrect WHERE condition can affect many records. For risky changes, use a transaction, inspect the affected rows and commit only after verification.',
    code: 'CREATE TABLE learners (id INT PRIMARY KEY, name VARCHAR(50), score INT);\nINSERT INTO learners VALUES (1, \'Asha\', 82), (2, \'Ravi\', 71);\nUPDATE learners SET score = 85 WHERE id = 1;\nSELECT * FROM learners WHERE id = 1;',
    output: 'id | name | score\n1 | Asha | 85',
    task: 'Insert three learners, update one score, delete one learner, and verify the final table with SELECT.',
    solutionHint: 'Use a primary key to target one row. Run a SELECT with the same WHERE condition before the UPDATE or DELETE when working with important data.',
    interviewQuestion: 'What can happen when UPDATE or DELETE is executed without a WHERE clause?'
  },
  {
    id: 'sql-pdf-05', track: 'SQL', level: 'Basic', title: 'WHERE, comparison operators and logical conditions', duration: '12 min', kind: 'table',
    summary: 'Filter rows using comparison, range, membership and boolean conditions.',
    explain: 'WHERE filters individual rows. Use =, <>, >, >=, < and <= for comparisons; BETWEEN for ranges; IN for a list of allowed values; LIKE for pattern matching; and AND, OR and NOT to combine conditions. Parentheses make mixed AND/OR logic explicit.',
    code: 'SELECT name, salary\nFROM employees\nWHERE department = \'Engineering\'\n  AND salary BETWEEN 50000 AND 90000\nORDER BY salary DESC;',
    output: 'Engineering employees whose salary is between 50,000 and 90,000, ordered from highest salary to lowest.',
    task: 'Find learners whose score is 60 or higher and whose status is either Active or Pending.',
    solutionHint: 'Use score >= 60 AND status IN (\'Active\', \'Pending\'). Use parentheses when combining OR conditions with other filters.',
    interviewQuestion: 'What is the difference between WHERE and HAVING?'
  },
  {
    id: 'sql-pdf-06', track: 'SQL', level: 'Basic', title: 'ORDER BY, LIMIT and TOP', duration: '10 min', kind: 'flow',
    summary: 'Sort results and retrieve only the rows required by the application.',
    explain: 'ORDER BY controls result order and can sort by multiple columns. LIMIT is common in MySQL and PostgreSQL, while SQL Server commonly uses TOP. Pagination should always have a deterministic ordering, especially when rows can share the same value.',
    code: '-- MySQL / PostgreSQL\nSELECT name, salary\nFROM employees\nORDER BY salary DESC, name ASC\nLIMIT 3;\n\n-- SQL Server equivalent\n-- SELECT TOP 3 name, salary FROM employees ORDER BY salary DESC, name ASC;',
    output: 'The three highest-paid employees are returned; ties are ordered alphabetically by name.',
    task: 'Write queries for the highest salary, the top five salaries and the first five learners ordered by name.',
    solutionHint: 'Sort descending for highest-first results. Add a second stable sort column when ties are possible.',
    interviewQuestion: 'How would you fetch the top N records in MySQL versus SQL Server?'
  },
  {
    id: 'sql-pdf-07', track: 'SQL', level: 'Basic', title: 'DISTINCT, aliases and expressions', duration: '10 min', kind: 'table',
    summary: 'Produce cleaner result sets with unique values, readable names and calculated columns.',
    explain: 'DISTINCT removes duplicate result combinations. Aliases rename columns or tables for readability. SQL expressions can calculate derived values without storing them as separate columns. Use expressions carefully when the result needs a specific numeric or date type.',
    code: 'SELECT DISTINCT department AS department_name,\n       salary * 12 AS annual_salary\nFROM employees\nORDER BY annual_salary DESC;',
    output: 'Unique department/annual-salary combinations, sorted by calculated annual salary.',
    task: 'Return each unique course level and calculate a 10 percent discounted price from a price column.',
    solutionHint: 'Use SELECT DISTINCT for uniqueness and an expression such as price * 0.90 for the calculated value.',
    interviewQuestion: 'Does DISTINCT remove duplicate rows from the table itself?'
  },
  {
    id: 'sql-pdf-08', track: 'SQL', level: 'Basic', title: 'NULL values and safe NULL handling', duration: '12 min', kind: 'layers',
    summary: 'Understand unknown values and avoid incorrect comparisons with NULL.',
    explain: 'NULL represents missing, unknown or inapplicable data. NULL is not equal to zero or an empty string. Use IS NULL and IS NOT NULL for checks. COALESCE returns the first non-NULL expression, while NULLIF can intentionally turn an equal pair into NULL. Database-specific functions such as IFNULL also exist.',
    code: 'SELECT name,\n       COALESCE(phone, \'Not provided\') AS phone_display\nFROM employees\nWHERE manager_id IS NULL;',
    output: 'Employees without a manager are returned, and missing phone values display as Not provided.',
    task: 'Write a query that shows a default value when email is NULL and finds all records where email is not NULL.',
    solutionHint: 'Use COALESCE(email, default_value) for display and IS NOT NULL for filtering.',
    interviewQuestion: 'Why does `WHERE column = NULL` not work as expected?'
  },
  {
    id: 'sql-pdf-09', track: 'SQL', level: 'Basic', title: 'Aggregate functions and GROUP BY', duration: '14 min', kind: 'table',
    summary: 'Summarize data with COUNT, SUM, AVG, MIN and MAX.',
    explain: 'Aggregate functions turn multiple rows into summary values. GROUP BY creates one result group for each distinct combination of grouping columns. WHERE filters rows before grouping. Common aggregates include COUNT, SUM, AVG, MIN and MAX.',
    code: 'SELECT department_id,\n       COUNT(*) AS employee_count,\n       AVG(salary) AS average_salary,\n       MAX(salary) AS highest_salary\nFROM employees\nGROUP BY department_id\nORDER BY employee_count DESC;',
    output: 'One row per department showing employee count, average salary and highest salary.',
    task: 'Calculate the number of learners and average score for every course.',
    solutionHint: 'Group by course_id and use COUNT(*) and AVG(score). Decide how NULL scores should be handled before interpreting the average.',
    interviewQuestion: 'Why must non-aggregated selected columns generally appear in GROUP BY?'
  },
  {
    id: 'sql-pdf-10', track: 'SQL', level: 'Intermediate', title: 'HAVING versus WHERE', duration: '11 min', kind: 'flow',
    summary: 'Filter individual rows with WHERE and aggregated groups with HAVING.',
    explain: 'WHERE operates before grouping, while HAVING filters groups after aggregate values are calculated. For performance and clarity, filter ordinary row conditions with WHERE whenever possible, then use HAVING for conditions such as COUNT(*) > 5.',
    code: 'SELECT department_id, COUNT(*) AS employee_count\nFROM employees\nWHERE active = TRUE\nGROUP BY department_id\nHAVING COUNT(*) >= 5\nORDER BY employee_count DESC;',
    output: 'Only departments with at least five active employees are returned.',
    task: 'Find courses having at least 10 enrolled learners and only count active enrollments.',
    solutionHint: 'Filter active enrollments in WHERE, group by course, then use HAVING COUNT(*) >= 10.',
    interviewQuestion: 'Can HAVING be used without GROUP BY? Explain when that is valid.'
  },
  {
    id: 'sql-pdf-11', track: 'SQL', level: 'Intermediate', title: 'INNER, LEFT, RIGHT and FULL JOINs', duration: '16 min', kind: 'layers',
    summary: 'Combine related tables while understanding which unmatched rows remain.',
    explain: 'INNER JOIN keeps only matching rows. LEFT JOIN keeps every row from the left table and matching rows from the right. RIGHT JOIN reverses that perspective. FULL OUTER JOIN keeps unmatched rows from both sides where the database supports it. Always verify relationship cardinality before aggregating after a join.',
    code: 'SELECT d.name, e.name AS employee_name\nFROM departments d\nLEFT JOIN employees e\n  ON e.department_id = d.id\nORDER BY d.name, e.name;',
    output: 'Every department appears, including departments with no employees. For an empty department, employee_name is NULL.',
    task: 'Explain which join you would use to find customers who have never placed an order.',
    solutionHint: 'Use LEFT JOIN from customers to orders and filter where the order key IS NULL.',
    interviewQuestion: 'When would LEFT JOIN be preferable to INNER JOIN?'
  },
  {
    id: 'sql-pdf-12', track: 'SQL', level: 'Intermediate', title: 'Self JOIN and hierarchical data', duration: '13 min', kind: 'flow',
    summary: 'Join a table to itself to compare related rows such as employees and managers.',
    explain: 'A self join uses two aliases for the same table. It is useful when a row references another row in the same table, such as employee.manager_id pointing to employee.id. The aliases make the two roles distinguishable.',
    code: 'SELECT e.name AS employee, e.salary AS employee_salary,\n       m.name AS manager, m.salary AS manager_salary\nFROM employees e\nJOIN employees m ON e.manager_id = m.employee_id\nWHERE e.salary > m.salary;',
    output: 'Employees whose salary is greater than their manager’s salary, with both salaries displayed.',
    task: 'Write a self join that lists each employee and their manager, including employees who do not have a manager.',
    solutionHint: 'Use LEFT JOIN when top-level employees must remain in the result. Join e.manager_id to m.employee_id.',
    interviewQuestion: 'How would you find employees who earn more than their managers?'
  },
  {
    id: 'sql-pdf-13', track: 'SQL', level: 'Intermediate', title: 'Subqueries and nested queries', duration: '14 min', kind: 'layers',
    summary: 'Use one query as input to another when the condition depends on another result set.',
    explain: 'A subquery is a query nested inside another statement. A scalar subquery returns one value; a multi-row subquery can work with IN or other operators. Subqueries can appear in WHERE, HAVING, FROM or SELECT depending on the database and query design. Compare readability and performance with an equivalent join or CTE.',
    code: 'SELECT name, salary\nFROM employees\nWHERE salary > (\n  SELECT AVG(salary)\n  FROM employees\n);',
    output: 'Employees whose salary is greater than the overall average salary.',
    task: 'Find learners whose score is above the average score for all learners.',
    solutionHint: 'Calculate AVG(score) in the inner query and compare each learner score in the outer query.',
    interviewQuestion: 'What is a correlated subquery, and why can it be more expensive?'
  },
  {
    id: 'sql-pdf-14', track: 'SQL', level: 'Intermediate', title: 'Correlated subqueries', duration: '15 min', kind: 'layers',
    summary: 'Compare each outer row against a value calculated specifically for that row’s group.',
    explain: 'A correlated subquery refers to a column from the outer query. Conceptually, the inner query is evaluated using the current outer row. This makes some problems expressive but can be expensive on large datasets. Window functions or joins can often provide a more scalable alternative.',
    code: 'SELECT e.name, e.department_id, e.salary\nFROM employees e\nWHERE e.salary > (\n  SELECT AVG(x.salary)\n  FROM employees x\n  WHERE x.department_id = e.department_id\n);',
    output: 'Employees whose salary is above the average salary of their own department.',
    task: 'Rewrite the example using a window function and compare the two approaches conceptually.',
    solutionHint: 'Use AVG(salary) OVER (PARTITION BY department_id) to calculate the department average alongside each row.',
    interviewQuestion: 'When would a window function be preferable to a correlated subquery?'
  },
  {
    id: 'sql-pdf-15', track: 'SQL', level: 'Intermediate', title: 'CTEs and readable multi-step queries', duration: '14 min', kind: 'table',
    summary: 'Use Common Table Expressions to name intermediate query stages.',
    explain: 'A Common Table Expression starts with WITH and defines a temporary named result for one SQL statement. CTEs can make complex logic easier to read, test and extend. They do not automatically mean better performance; the optimizer and database engine determine execution behavior.',
    code: 'WITH department_stats AS (\n  SELECT department_id, AVG(salary) AS avg_salary\n  FROM employees\n  GROUP BY department_id\n)\nSELECT e.name, e.salary, d.avg_salary\nFROM employees e\nJOIN department_stats d\n  ON d.department_id = e.department_id\nWHERE e.salary > d.avg_salary;',
    output: 'Employees whose salary is above their department average, with the average displayed.',
    task: 'Create a CTE that counts enrollments per course and then returns only courses with more than 20 learners.',
    solutionHint: 'First aggregate in the CTE, then filter the CTE result in the outer query.',
    interviewQuestion: 'What is a CTE and how is it different from a permanent table?'
  },
  {
    id: 'sql-pdf-16', track: 'SQL', level: 'Intermediate', title: 'Window functions and ROW_NUMBER', duration: '16 min', kind: 'layers',
    summary: 'Rank rows within groups without collapsing the original result set.',
    explain: 'Window functions calculate values across related rows while preserving row-level detail. ROW_NUMBER assigns a unique sequence, RANK allows ties to share a rank, and DENSE_RANK removes gaps after ties. PARTITION BY defines the group and ORDER BY defines the ranking order.',
    code: 'SELECT name, department_id, salary,\n       ROW_NUMBER() OVER (\n         PARTITION BY department_id\n         ORDER BY salary DESC\n       ) AS salary_rank\nFROM employees;',
    output: 'Each employee receives a row number starting at 1 within their department, highest salary first.',
    task: 'Return the highest-paid employee in each department using ROW_NUMBER().',
    solutionHint: 'Put the window query in a CTE, then filter salary_rank = 1 in the outer query.',
    interviewQuestion: 'What is the difference between ROW_NUMBER, RANK and DENSE_RANK?'
  },
  {
    id: 'sql-pdf-17', track: 'SQL', level: 'Intermediate', title: 'Finding second-highest and Nth-highest values', duration: '14 min', kind: 'table',
    summary: 'Solve common interview ranking problems with subqueries and window functions.',
    explain: 'Ranking questions have multiple valid solutions. A subquery can find the maximum below the maximum, while DENSE_RANK or ROW_NUMBER can rank all rows. Choose the solution based on whether duplicate salary values should share the same rank.',
    code: 'WITH ranked AS (\n  SELECT name, salary,\n         DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk\n  FROM employees\n)\nSELECT name, salary\nFROM ranked\nWHERE rnk = 2;',
    output: 'All employees tied at the second-highest distinct salary are returned.',
    task: 'Modify the query to return the third-highest distinct salary.',
    solutionHint: 'Change the rank filter to 3. Use DENSE_RANK when equal salaries should share a rank.',
    interviewQuestion: 'How do you find the second-highest salary when duplicate salaries exist?'
  },
  {
    id: 'sql-pdf-18', track: 'SQL', level: 'Intermediate', title: 'Duplicate records and duplicate emails', duration: '13 min', kind: 'flow',
    summary: 'Detect duplicate values and understand how grouping exposes repeated data.',
    explain: 'GROUP BY plus HAVING COUNT(*) > 1 identifies repeated values. This is useful for duplicate emails, codes or business keys. Detection and deletion are separate tasks: always identify the rows to keep, back up or use a transaction, and verify the final count before deleting anything.',
    code: 'SELECT email, COUNT(*) AS occurrences\nFROM employees\nGROUP BY email\nHAVING COUNT(*) > 1;',
    output: 'Only email values appearing more than once are returned, along with their occurrence count.',
    task: 'Find duplicate course codes and then design a safe strategy for keeping only the newest record.',
    solutionHint: 'First identify duplicate groups. For deletion, use ROW_NUMBER with a deterministic ordering and remove only rows with row_number > 1 inside a controlled transaction.',
    interviewQuestion: 'How would you delete duplicate rows safely without deleting the record you want to keep?'
  },
  {
    id: 'sql-pdf-19', track: 'SQL', level: 'Intermediate', title: 'DELETE versus TRUNCATE', duration: '11 min', kind: 'table',
    summary: 'Know the operational differences before removing data from a table.',
    explain: 'DELETE can remove selected rows with WHERE and is generally logged at the row-operation level. TRUNCATE removes all rows and is commonly optimized as a bulk operation, but exact rollback, identity-reset and locking behavior depends on the DBMS. Never assume every database behaves identically; verify the platform documentation before production use.',
    code: 'BEGIN;\nDELETE FROM learners WHERE active = FALSE;\n-- inspect the result\nROLLBACK;',
    output: 'The inactive learner rows are removed inside the transaction and then restored by ROLLBACK.',
    task: 'Explain why DELETE is appropriate for removing selected rows and why TRUNCATE should be treated as a destructive operation.',
    solutionHint: 'DELETE supports a WHERE condition. TRUNCATE is intended for clearing a table and should not be used casually when data must be retained.',
    interviewQuestion: 'What are the key differences between DELETE and TRUNCATE?'
  },
  {
    id: 'sql-pdf-20', track: 'SQL', level: 'Advanced', title: 'Transactions and ACID properties', duration: '16 min', kind: 'layers',
    summary: 'Keep related database operations reliable with atomic transactions.',
    explain: 'A transaction groups operations into one logical unit. Atomicity means all-or-nothing, consistency preserves valid database rules, isolation controls concurrent visibility, and durability means committed changes persist. BEGIN/START TRANSACTION, COMMIT and ROLLBACK are common transaction controls; SAVEPOINT allows partial rollback where supported.',
    code: 'BEGIN;\nUPDATE accounts SET balance = balance - 500 WHERE id = 1;\nUPDATE accounts SET balance = balance + 500 WHERE id = 2;\nCOMMIT;',
    output: 'If both updates succeed, the transfer is committed. If a required step fails and the transaction is rolled back, neither balance change is retained.',
    task: 'Design a transaction for placing an order that creates an order row, decreases inventory and records payment status.',
    solutionHint: 'Keep all changes that must succeed together in one transaction. Validate business rules and roll back if a required operation cannot complete.',
    interviewQuestion: 'Explain ACID using a bank transfer example.'
  },
  {
    id: 'sql-pdf-21', track: 'SQL', level: 'Advanced', title: 'COMMIT, ROLLBACK and SAVEPOINT', duration: '13 min', kind: 'flow',
    summary: 'Control transaction boundaries and partially undo work when appropriate.',
    explain: 'COMMIT makes the transaction durable according to the database’s transaction rules. ROLLBACK undoes uncommitted work. SAVEPOINT establishes an intermediate point so a later ROLLBACK TO SAVEPOINT can undo only part of a transaction. Exact behavior can differ by engine and storage technology.',
    code: 'BEGIN;\nUPDATE learners SET score = 80 WHERE id = 1;\nSAVEPOINT before_bonus;\nUPDATE learners SET score = score + 5 WHERE id = 1;\nROLLBACK TO SAVEPOINT before_bonus;\nCOMMIT;',
    output: 'The learner ends with score 80 because the bonus update is rolled back while the first update is committed.',
    task: 'Create a transaction with two independent changes and roll back only the second change using a savepoint.',
    solutionHint: 'Set the savepoint after the first successful operation, then roll back to it when the second operation should be undone.',
    interviewQuestion: 'When is SAVEPOINT useful?'
  },
  {
    id: 'sql-pdf-22', track: 'SQL', level: 'Advanced', title: 'IN versus EXISTS', duration: '13 min', kind: 'table',
    summary: 'Choose between membership checks and existence checks in subqueries.',
    explain: 'IN compares a value against a set of values. EXISTS checks whether a correlated or uncorrelated subquery returns at least one row. Performance depends on the DBMS, indexes and query shape, so do not assume EXISTS is always faster. Use the form that expresses the intent clearly and verify important performance claims with an execution plan.',
    code: 'SELECT c.id, c.name\nFROM customers c\nWHERE EXISTS (\n  SELECT 1\n  FROM orders o\n  WHERE o.customer_id = c.id\n);',
    output: 'Customers who have at least one matching order are returned.',
    task: 'Rewrite the query using IN and explain a situation where EXISTS communicates the intent more directly.',
    solutionHint: 'IN can compare customer IDs against a subquery result. EXISTS directly expresses “there is at least one matching row.”',
    interviewQuestion: 'What is the conceptual difference between IN and EXISTS?'
  },
  {
    id: 'sql-pdf-23', track: 'SQL', level: 'Advanced', title: 'Indexes and composite indexes', duration: '16 min', kind: 'layers',
    summary: 'Understand why indexes speed selected queries and how composite indexes match access patterns.',
    explain: 'An index is an additional data structure that helps the database locate rows without scanning the whole table. Indexes consume storage and can slow inserts or updates. Composite indexes contain multiple columns and should reflect common filtering and ordering patterns. The best index depends on the database engine, data distribution and workload.',
    code: 'CREATE INDEX idx_orders_customer_created\nON orders(customer_id, created_at);\n\nSELECT order_id, created_at\nFROM orders\nWHERE customer_id = 42\nORDER BY created_at DESC\nLIMIT 20;',
    output: 'The query can use the composite index efficiently when the DBMS and statistics choose that plan; verify with the execution plan.',
    task: 'Given frequent queries filtering by customer_id and ordering by created_at, propose an index and explain the column order.',
    solutionHint: 'Put the equality-filtered column first for this access pattern, then the ordering column. Confirm with a real execution plan and representative data.',
    interviewQuestion: 'Why can adding too many indexes hurt performance?'
  },
  {
    id: 'sql-pdf-24', track: 'SQL', level: 'Advanced', title: 'Query execution plans and optimization', duration: '18 min', kind: 'layers',
    summary: 'Read execution plans and optimize based on measured database work.',
    explain: 'An execution plan shows how the database intends to retrieve and combine data. Look for full scans, expensive joins, sorting, large row estimates, spills and missing or unused indexes. Avoid premature optimization. Compare logical reads, duration and plan changes before and after a modification.',
    code: '-- SQL Server-style investigation\nSET STATISTICS IO ON;\nSET STATISTICS TIME ON;\nSELECT id, name\nFROM candidates\nWHERE email = @email;\n-- Inspect the actual execution plan.',
    output: 'The database reports I/O and timing information; the execution plan shows the operators used to satisfy the query.',
    task: 'A query scans ten million rows to find one email. List the evidence you would collect before changing the query or adding an index.',
    solutionHint: 'Inspect the execution plan, row estimates, existing indexes, data distribution, predicate types and logical reads. Then test a targeted index or query rewrite.',
    interviewQuestion: 'What is a query execution plan and why is it useful?'
  },
  {
    id: 'sql-pdf-25', track: 'SQL', level: 'Advanced', title: 'Deadlocks and concurrency troubleshooting', duration: '16 min', kind: 'flow',
    summary: 'Understand why transactions can block each other and how to reduce deadlock risk.',
    explain: 'A deadlock occurs when transactions hold resources while waiting for resources held by each other. Databases usually detect the cycle and abort one transaction. Reduce risk by accessing tables in a consistent order, keeping transactions short, avoiding unnecessary user interaction inside transactions, and using appropriate indexes and isolation levels. Do not treat NOLOCK or READ UNCOMMITTED as a universal fix because they can allow inconsistent reads.',
    code: '-- Transaction A and B should acquire shared resources in the same order.\nBEGIN;\nUPDATE accounts SET balance = balance - 10 WHERE id = 1;\nUPDATE accounts SET balance = balance + 10 WHERE id = 2;\nCOMMIT;',
    output: 'Consistent resource ordering reduces the chance of circular waiting; the actual locking behavior depends on the DBMS and isolation level.',
    task: 'Draw two transactions that deadlock by locking resources in opposite order, then rewrite them to use a consistent order.',
    solutionHint: 'Both transactions should acquire account 1 before account 2, or use another consistent strategy. Keep the transaction short.',
    interviewQuestion: 'What causes a database deadlock and how can it be prevented?'
  },
  {
    id: 'sql-pdf-26', track: 'SQL', level: 'Advanced', title: 'Stored procedures versus functions', duration: '14 min', kind: 'table',
    summary: 'Understand database-side reusable logic and when to keep business logic in application code.',
    explain: 'Stored procedures package database operations and may perform multiple data changes depending on the DBMS. Functions generally return a value or table and are commonly used inside expressions, with platform-specific restrictions. The exact capabilities differ between MySQL, SQL Server, PostgreSQL and other systems, so interview answers should name the database when behavior matters.',
    code: '-- Conceptual parameterized function call\nSELECT calculate_discount(1000, 10) AS discounted_price;',
    output: 'For a function that applies a 10 percent discount, the result would be 900.00. The exact function definition is database-specific.',
    task: 'Compare stored procedures and functions by return behavior, side effects, parameters and common use cases for your chosen DBMS.',
    solutionHint: 'Avoid claiming one universal rule for all databases. State which DBMS you are discussing and verify its restrictions.',
    interviewQuestion: 'What is the difference between a stored procedure and a function?'
  },
  {
    id: 'sql-pdf-27', track: 'SQL', level: 'Advanced', title: 'Views and reusable reporting queries', duration: '12 min', kind: 'table',
    summary: 'Create a reusable query abstraction for applications and reporting.',
    explain: 'A view is a named query that can simplify repeated reporting logic and expose only selected columns. Views can improve maintainability and access control, but they do not automatically make a query faster. Materialized views, where supported, physically store results and introduce refresh considerations.',
    code: 'CREATE VIEW active_courses AS\nSELECT id, title, level\nFROM courses\nWHERE published = TRUE;\n\nSELECT * FROM active_courses;',
    output: 'The SELECT reads the rows defined by the view query, showing only published courses and the selected columns.',
    task: 'Create a view for active learners and explain why hiding sensitive columns in a view can help access control.',
    solutionHint: 'Expose only columns needed by the consumer and keep the underlying table permissions restricted when appropriate.',
    interviewQuestion: 'What is a view, and does a normal view store a separate copy of the data?'
  },
  {
    id: 'sql-pdf-28', track: 'SQL', level: 'Advanced', title: 'Dynamic SQL and SQL injection prevention', duration: '16 min', kind: 'layers',
    summary: 'Understand dynamic query generation without turning user input into executable SQL.',
    explain: 'Dynamic SQL builds SQL text at runtime and can be useful for administrative or flexible query scenarios. The danger is mixing untrusted input into executable SQL. Use parameterized queries for values, allowlists for identifiers such as column names, and database permissions that limit damage if a mistake occurs.',
    code: '-- Safe value parameterization concept\nSELECT id, name\nFROM employees\nWHERE email = @email;\n\n-- Do not build: \n-- SELECT ... WHERE email = \' + user_input + \'\';',
    output: 'The parameterized query treats the supplied email as a value rather than SQL syntax.',
    task: 'Explain why parameters can safely represent a search value but cannot blindly replace a table name or column name.',
    solutionHint: 'Values should be bound as parameters. Identifiers need a strict allowlist mapped from known application choices.',
    interviewQuestion: 'How does parameterized SQL prevent SQL injection?'
  },
  {
    id: 'sql-pdf-29', track: 'SQL', level: 'Advanced', title: 'JSON and semi-structured data in SQL', duration: '13 min', kind: 'table',
    summary: 'Understand how relational databases can store and query JSON data.',
    explain: 'Modern relational databases can store JSON documents alongside relational columns. This is useful for flexible attributes or external payloads, but important business fields should usually remain strongly modeled when they need constraints, joins or frequent filtering. JSON syntax and functions differ between database engines.',
    code: '-- PostgreSQL-style example\nCREATE TABLE profiles (\n  id INT PRIMARY KEY,\n  preferences JSONB\n);\n\nSELECT preferences ->> \'theme\' AS theme\nFROM profiles;',
    output: 'The query extracts the theme value from the JSON document. Exact JSON operators differ by DBMS.',
    task: 'Give two reasons to keep a field relational instead of placing it inside JSON.',
    solutionHint: 'Consider constraints, indexing, joins, reporting and frequent filtering. Keep JSON for genuinely flexible or semi-structured attributes.',
    interviewQuestion: 'When would you choose JSON in a relational database instead of a separate column?'
  },
  {
    id: 'sql-pdf-30', track: 'SQL', level: 'Advanced', title: 'Real-world SQL problem solving: top salary by department', duration: '15 min', kind: 'flow',
    summary: 'Combine grouping and ranking techniques to solve a common interview and reporting problem.',
    explain: 'A common real-world query asks for the highest-paid employee in each department. MAX() gives the highest value but not necessarily the employee row. A window function can rank rows and preserve all columns, making it useful when the full employee record is required.',
    code: 'WITH ranked AS (\n  SELECT employee_id, name, department_id, salary,\n         ROW_NUMBER() OVER (\n           PARTITION BY department_id\n           ORDER BY salary DESC, employee_id\n         ) AS rn\n  FROM employees\n)\nSELECT employee_id, name, department_id, salary\nFROM ranked\nWHERE rn = 1;',
    output: 'One employee per department is returned: the highest salary, with employee_id breaking salary ties deterministically.',
    task: 'Change the query to return every employee tied for the highest salary in each department.',
    solutionHint: 'Replace ROW_NUMBER with RANK or DENSE_RANK and filter rank = 1 when ties should all be returned.',
    interviewQuestion: 'How would you find the highest salary in every department while also returning the employee name?'
  },
  {
    id: 'sql-pdf-31', track: 'SQL', level: 'Advanced', title: 'Real-world SQL problem solving: employees joined recently', duration: '14 min', kind: 'table',
    summary: 'Filter records by date ranges while accounting for database-specific date functions.',
    explain: 'Date arithmetic differs across SQL engines. MySQL uses functions such as DATE_ADD and DATEDIFF; SQL Server uses DATEADD and DATEDIFF; PostgreSQL uses intervals and date arithmetic. Prefer a half-open range such as >= start and < end when querying timestamps so index usage and boundary behavior are clear.',
    code: '-- PostgreSQL-style timestamp range\nSELECT employee_id, name, joined_at\nFROM employees\nWHERE joined_at >= CURRENT_DATE - INTERVAL \'3 months\'\n  AND joined_at < CURRENT_DATE\nORDER BY joined_at DESC;',
    output: 'Employees whose joined_at timestamp falls in the specified three-month window are returned.',
    task: 'Write the equivalent query for your preferred DBMS and explain the difference between a DATE and a TIMESTAMP.',
    solutionHint: 'Use the date functions supported by your DBMS and define whether the current day is included. Use a clear lower and upper boundary.',
    interviewQuestion: 'How would you find records created in the last three months?'
  },
  {
    id: 'sql-pdf-32', track: 'SQL', level: 'Advanced', title: 'Real-world SQL problem solving: alternate rows and pagination', duration: '15 min', kind: 'layers',
    summary: 'Use window functions for row numbering and stable pagination.',
    explain: 'ROW_NUMBER can assign an ordered position to every row. Filtering odd or even row numbers is useful for interview exercises, while production pagination should generally use a stable order and preferably keyset/cursor pagination for large datasets rather than relying only on OFFSET.',
    code: 'WITH numbered AS (\n  SELECT id, name,\n         ROW_NUMBER() OVER (ORDER BY id) AS rn\n  FROM employees\n)\nSELECT id, name\nFROM numbered\nWHERE MOD(rn, 2) = 1;',
    output: 'Rows with odd row numbers are returned according to the chosen id ordering.',
    task: 'Explain why pagination using only OFFSET can become expensive for very large tables and describe keyset pagination.',
    solutionHint: 'Keyset pagination uses the last seen ordered key, such as WHERE id > :last_id ORDER BY id LIMIT :page_size, which avoids skipping a growing number of rows.',
    interviewQuestion: 'What is the difference between OFFSET pagination and keyset pagination?'
  },
  {
    id: 'sql-pdf-33', track: 'SQL', level: 'Advanced', title: 'Table partitioning and large datasets', duration: '16 min', kind: 'layers',
    summary: 'Understand range, list and hash partitioning and when partitioning can help.',
    explain: 'Partitioning divides a large logical table into physical partitions based on a partition key. Common strategies include range, list and hash partitioning. Partition pruning can reduce the amount of data scanned when a query filters on the partition key. Partitioning is not a substitute for indexes or good query design, and exact syntax is database-specific.',
    code: '-- Conceptual range partitioning\n-- Partition orders by order_date so a month-specific query can scan fewer partitions.\nSELECT COUNT(*)\nFROM orders\nWHERE order_date >= DATE \'2026-01-01\'\n  AND order_date < DATE \'2026-02-01\';',
    output: 'A well-designed partitioned table may allow the optimizer to scan only the relevant date partition; verify using the execution plan.',
    task: 'Choose a partition key for a large orders table and explain why order_date might be a good or bad choice.',
    solutionHint: 'Choose a column commonly used in bounded filters and with a useful distribution. Consider retention and maintenance as well as query performance.',
    interviewQuestion: 'What is table partitioning and how can partition pruning improve performance?'
  },
  {
    id: 'sql-pdf-34', track: 'SQL', level: 'Advanced', title: 'OLTP versus OLAP', duration: '13 min', kind: 'table',
    summary: 'Distinguish transactional workloads from analytical workloads.',
    explain: 'OLTP systems support frequent small transactions such as orders, payments and account updates. They emphasize consistency, concurrency and fast point operations. OLAP systems support large analytical scans, aggregations and historical reporting. They often use dimensional models, columnar storage or data warehouses optimized for analysis.',
    code: '--- OLTP example\nUPDATE inventory\nSET quantity = quantity - 1\nWHERE product_id = 42;\n\n--- OLAP example\nSELECT product_id, SUM(amount)\nFROM sales\nGROUP BY product_id;',
    output: 'The first example represents a small transactional update; the second summarizes a large set of sales records for analysis.',
    task: 'Classify a banking transaction system, an e-commerce checkout system and a business intelligence warehouse as OLTP or OLAP and explain why.',
    solutionHint: 'Focus on workload pattern: small concurrent writes and point reads indicate OLTP; large scans, aggregations and historical reporting indicate OLAP.',
    interviewQuestion: 'What is the difference between OLTP and OLAP?'
  },
  {
    id: 'sql-pdf-35', track: 'SQL', level: 'Advanced', title: 'SQL optimization checklist for production', duration: '18 min', kind: 'layers',
    summary: 'Apply a repeatable process for diagnosing and improving slow SQL.',
    explain: 'Start with measurement rather than assumptions. Select only needed columns, verify joins, filter early where appropriate, use suitable indexes, avoid unnecessary functions on indexed columns, bound result sets, consider EXISTS for existence checks when appropriate, and inspect the execution plan. For large data, evaluate partitioning and pre-aggregation. After a change, compare the same workload and confirm correctness.',
    code: '-- Before optimization: measure the query and plan.\nSELECT id, name\nFROM employees\nWHERE department_id = @department_id\nORDER BY created_at DESC\nLIMIT 20;\n\n-- Possible supporting index (syntax varies):\n-- CREATE INDEX ... ON employees(department_id, created_at);',
    output: 'A well-tuned query should return the same correct rows while reducing unnecessary scans, sorting, I/O or CPU according to measured evidence.',
    task: 'Create a 10-point SQL performance checklist and apply it to one slow query from a sample project.',
    solutionHint: 'Include indexing, select-list reduction, join correctness, predicates, pagination, execution plan analysis, statistics, data volume, transaction behavior and measured before/after results.',
    interviewQuestion: 'Walk through how you would troubleshoot a SQL query that suddenly became slow in production.'
  },
  {
    id: 'sql-pdf-36', track: 'SQL', level: 'Advanced', title: 'SQL interview challenge: build a learning analytics report', duration: '25 min', kind: 'layers',
    summary: 'Combine joins, aggregation, CTEs and window functions in one practical project.',
    explain: 'This capstone simulates a learning platform with learners, courses, enrollments and lesson progress. The report should show each course, enrollment count, average completion percentage and the top learner by completion. Build it in stages: validate relationships, aggregate enrollments, calculate learner progress, rank learners per course, then combine the results.',
    code: 'WITH learner_progress AS (\n  SELECT e.course_id, e.learner_id,\n         AVG(p.completed::int) * 100 AS completion_pct\n  FROM enrollments e\n  JOIN lesson_progress p\n    ON p.learner_id = e.learner_id\n   AND p.course_id = e.course_id\n  GROUP BY e.course_id, e.learner_id\n), ranked AS (\n  SELECT *,\n         ROW_NUMBER() OVER (\n           PARTITION BY course_id\n           ORDER BY completion_pct DESC, learner_id\n         ) AS rn\n  FROM learner_progress\n)\nSELECT course_id, learner_id, completion_pct\nFROM ranked\nWHERE rn = 1;',
    output: 'One top learner per course is returned, with deterministic tie-breaking by learner_id. Exact percentages depend on the sample data and database casting syntax.',
    task: 'Extend the report with course title, total enrollments, average completion and the top learner name. Add a query plan review and indexes for the main joins.',
    solutionHint: 'Build each CTE independently and verify row counts before combining them. Check that joins do not multiply lesson rows incorrectly. Use indexes on foreign keys and common filtering columns after measuring.',
    interviewQuestion: 'How would you design and optimize a SQL report that joins millions of progress records?'
  }
];
