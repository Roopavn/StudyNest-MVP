// Django curriculum inspired by the public Very Academy Django ORM and Django project
// repositories. Topics are restructured for AR CodeLab and written as original lessons.
export const djangoCourseLessons = [
  {
    id: 'django-orm-1', track: 'Django', level: 'Basic', title: 'Django project architecture and request flow', duration: '20 min', kind: 'flow',
    summary: 'Understand projects, apps, settings, URLs, views, models, templates and the request-response lifecycle.',
    explain: 'A Django project contains configuration while Django apps contain focused business functionality. A browser request is routed through URL patterns to a view, which can read models through the ORM and return a template or API response. Start by understanding this flow before adding database logic.',
    code: "# urls.py\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [path('products/', views.products)]\n\n# views.py\ndef products(request):\n    return HttpResponse('Products')",
    output: 'GET /products/ -> Django URL resolver -> products view -> HTTP response: Products',
    task: 'Create a products app, register it, add a /products/ route and return a simple response.', solutionHint: 'Use startapp, add the app to INSTALLED_APPS, connect the app URLs from the project URL configuration, and test with the Django development server.', interviewQuestion: 'What is the difference between a Django project and a Django app?'
  },
  {
    id: 'django-orm-2', track: 'Django', level: 'Basic', title: 'Models and database tables', duration: '22 min', kind: 'layers',
    summary: 'Create Django models and understand how model fields map to database columns.',
    explain: 'A Django model is the Python representation of stored data. Model classes define fields and relationships; migrations turn model changes into database schema changes. The ORM then lets application code work with model objects instead of manually writing SQL for common operations.',
    code: "from django.db import models\n\nclass Product(models.Model):\n    name = models.CharField(max_length=120)\n    price = models.DecimalField(max_digits=10, decimal_places=2)\n    active = models.BooleanField(default=True)",
    output: 'A Product model is created with name, price and active fields after migrations are applied.',
    task: 'Add sku, stock_quantity and created_at fields to Product and explain the database column each creates.', solutionHint: 'Choose field types from the data being stored. Run makemigrations and migrate after changing the model.', interviewQuestion: 'How does a Django model relate to a database table?'
  },
  {
    id: 'django-orm-3', track: 'Django', level: 'Basic', title: 'Database connection: SQLite for development', duration: '20 min', kind: 'setup',
    summary: 'Configure the default SQLite database, run migrations and verify that Django can connect.',
    explain: 'SQLite is convenient for local development because it is file based. Django stores the database configuration in DATABASES. The first database operation normally opens the connection, and migrations create the required Django tables.',
    code: "# settings.py\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.sqlite3',\n        'NAME': BASE_DIR / 'db.sqlite3',\n    }\n}\n\n# Terminal\npython manage.py migrate\npython manage.py shell",
    output: 'Migrations apply successfully and the Django shell opens. Querying a model now uses the configured SQLite database.',
    task: 'Create a Product model, migrate it, open the Django shell and create one Product row.', solutionHint: 'Check DATABASES, run makemigrations followed by migrate, then use Product.objects.create(...) in the shell.', interviewQuestion: 'Why is SQLite useful for development but not always the preferred production database?'
  },
  {
    id: 'django-orm-4', track: 'Django', level: 'Intermediate', title: 'Connect Django to PostgreSQL', duration: '30 min', kind: 'setup',
    summary: 'Configure a real relational database for a Django project and verify the connection.',
    explain: 'Production Django applications commonly use a server database such as PostgreSQL. Configure the backend, database name, user, password and host through environment variables rather than hard-coding credentials. Install the PostgreSQL driver supported by the Django version used by the project.',
    code: "# settings.py\nimport os\n\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.postgresql',\n        'NAME': os.environ['DB_NAME'],\n        'USER': os.environ['DB_USER'],\n        'PASSWORD': os.environ['DB_PASSWORD'],\n        'HOST': os.environ.get('DB_HOST', 'localhost'),\n        'PORT': os.environ.get('DB_PORT', '5432'),\n    }\n}\n\n# verify\npython manage.py check\npython manage.py migrate",
    output: 'python manage.py check reports no configuration errors; migrate connects to PostgreSQL and applies pending migrations.',
    task: 'Configure a local PostgreSQL database for a Django project without committing credentials to Git.', solutionHint: 'Create environment variables, keep secrets out of settings committed to source control, install the correct PostgreSQL driver, then run migrate.', interviewQuestion: 'Why should database credentials come from environment variables?'
  },
  {
    id: 'django-orm-5', track: 'Django', level: 'Intermediate', title: 'Migrations: makemigrations, migrate and sqlmigrate', duration: '25 min', kind: 'flow',
    summary: 'Understand the complete model-change-to-database workflow.',
    explain: 'makemigrations creates migration files describing model changes. migrate applies those migrations to the configured database. sqlmigrate lets you inspect the SQL Django plans to execute for a migration, which is useful for learning and troubleshooting schema changes.',
    code: "python manage.py makemigrations\npython manage.py sqlmigrate products 0001\npython manage.py migrate",
    output: 'makemigrations creates a migration file; sqlmigrate prints SQL for that migration; migrate applies it to the database.',
    task: 'Add a field, generate a migration, inspect its SQL and apply it. Record which SQL statements Django generated.', solutionHint: 'Do not edit the database manually for ordinary schema changes. Treat migration files as version-controlled schema history.', interviewQuestion: 'What is the difference between makemigrations and migrate?'
  },
  {
    id: 'django-orm-6', track: 'Django', level: 'Basic', title: 'Create, retrieve, update and delete with the ORM', duration: '25 min', kind: 'crud',
    summary: 'Perform CRUD operations through QuerySets and model managers.',
    explain: 'The ORM provides a model manager, commonly objects, that creates QuerySets. Use create or save to insert, get or filter to retrieve, save to update, and delete to remove records. QuerySets are lazy, so constructing a query does not necessarily execute SQL immediately.',
    code: "product = Product.objects.create(name='Keyboard', price=1500)\nitem = Product.objects.get(pk=product.pk)\nitem.price = 1400\nitem.save()\nProduct.objects.filter(pk=item.pk).delete()",
    output: 'A Product row is inserted, retrieved, updated from 1500 to 1400, then deleted.',
    task: 'Implement CRUD for a Course model and verify each operation in the Django shell.', solutionHint: 'Use get for a single expected row, filter for zero-or-more results, and handle DoesNotExist or MultipleObjectsReturned where appropriate.', interviewQuestion: 'What is a QuerySet and why is it called lazy?'
  },
  {
    id: 'django-orm-7', track: 'Django', level: 'Intermediate', title: 'filter, exclude and lookup expressions', duration: '25 min', kind: 'queries',
    summary: 'Build precise ORM filters and exclusions using Django field lookups.',
    explain: 'filter narrows a QuerySet while exclude removes matching rows. Field lookups such as exact, icontains, gte, lte, in and isnull translate Python-style expressions into SQL predicates.',
    code: "active = Product.objects.filter(active=True)\nexpensive = Product.objects.filter(price__gte=1000)\nsearch = Product.objects.filter(name__icontains='phone')\nnot_sold_out = Product.objects.exclude(stock_quantity=0)",
    output: 'Each QuerySet represents a database query that is evaluated when its results are needed.',
    task: 'Write filters for active products above a price, products whose names contain a word, and products with NULL values.', solutionHint: 'Use double-underscore lookup syntax and combine conditions only when they describe the intended SQL predicate.', interviewQuestion: 'What is the difference between filter() and exclude()?'
  },
  {
    id: 'django-orm-8', track: 'Django', level: 'Intermediate', title: 'Q objects for AND, OR and NOT logic', duration: '25 min', kind: 'queries',
    summary: 'Build complex WHERE clauses using Q objects.',
    explain: 'Q objects let you compose database conditions dynamically. The bitwise operators & and | represent AND and OR, while ~ represents NOT. They are useful when a query cannot be expressed cleanly as simple keyword arguments.',
    code: "from django.db.models import Q\n\nproducts = Product.objects.filter(\n    Q(name__icontains='phone') | Q(name__icontains='tablet'),\n    Q(active=True)\n)\n\nnot_free = Product.objects.filter(~Q(price=0))",
    output: 'The first query returns active products whose name contains phone or tablet; the second excludes zero-priced products.',
    task: 'Build a search query that matches name or SKU and also requires active=True.', solutionHint: 'Group OR conditions inside Q objects and pass mandatory conditions separately or combine them with &.', interviewQuestion: 'When would you use Q objects instead of normal filter keyword arguments?'
  },
  {
    id: 'django-orm-9', track: 'Django', level: 'Intermediate', title: 'Relationships: ForeignKey, OneToOne and ManyToMany', duration: '35 min', kind: 'database',
    summary: 'Design relational models and query related records through the ORM.',
    explain: 'Django maps relationships to relational database structures. ForeignKey represents many-to-one relationships, OneToOneField represents one-to-one relationships, and ManyToManyField represents many-to-many relationships through an intermediate table.',
    code: "class Category(models.Model):\n    name = models.CharField(max_length=80)\n\nclass Product(models.Model):\n    category = models.ForeignKey(Category, on_delete=models.PROTECT)\n    name = models.CharField(max_length=120)\n\nclass ProductTag(models.Model):\n    product = models.ForeignKey(Product, on_delete=models.CASCADE)\n    tag = models.CharField(max_length=50)",
    output: 'The database contains a category table, product rows referencing categories, and tag rows referencing products.',
    task: 'Build Course, Instructor and Student models with sensible relationships. Explain why each relationship type is appropriate.', solutionHint: 'Start from the business relationship and then select the Django relationship field. Decide deliberately what deletion should do.', interviewQuestion: 'When should you use ForeignKey versus ManyToManyField?'
  },
  {
    id: 'django-orm-10', track: 'Django', level: 'Intermediate', title: 'select_related and prefetch_related', duration: '30 min', kind: 'performance',
    summary: 'Avoid N+1 queries when loading related objects.',
    explain: 'A loop that accesses related objects can accidentally issue one query for the main rows and one additional query per row. select_related uses SQL joins for single-valued relationships such as ForeignKey and OneToOne. prefetch_related performs separate queries and joins results in Python for multi-valued relationships.',
    code: "orders = Order.objects.select_related('customer').all()\nfor order in orders:\n    print(order.customer.email)\n\nproducts = Product.objects.prefetch_related('tags').all()",
    output: 'Related data is loaded efficiently instead of repeatedly querying the database for every loop iteration.',
    task: 'Use Django Debug Toolbar or query logging to compare a naive loop with select_related/prefetch_related.', solutionHint: 'Count SQL queries before and after optimization. Choose select_related for single-valued joins and prefetch_related for collections.', interviewQuestion: 'Explain the N+1 query problem and how Django helps prevent it.'
  },
  {
    id: 'django-orm-11', track: 'Django', level: 'Intermediate', title: 'values, values_list and selecting only needed fields', duration: '20 min', kind: 'optimization',
    summary: 'Return lightweight query results when full model objects are unnecessary.',
    explain: 'values and values_list can reduce object construction when a view only needs selected columns. This is useful for reports, dropdowns and API preparation, but should not be used blindly when model behavior is required.',
    code: "rows = Product.objects.filter(active=True).values('id', 'name')\nids = Product.objects.filter(active=True).values_list('id', flat=True)",
    output: "rows produces dictionaries such as {'id': 1, 'name': 'Keyboard'}; ids produces a flat sequence of IDs.",
    task: 'Create a report query that returns only course id, title and instructor name.', solutionHint: 'Select only the fields required by the consumer and use select_related when the selected field comes from a ForeignKey relationship.', interviewQuestion: 'When would values() be preferable to loading complete model instances?'
  },
  {
    id: 'django-orm-12', track: 'Django', level: 'Advanced', title: 'Aggregation and annotation', duration: '30 min', kind: 'analytics',
    summary: 'Use Count, Sum, Avg, Min and Max to build database-backed reports.',
    explain: 'Django aggregation lets the database calculate summaries. annotate adds calculated values to each row, while aggregate returns a final summary dictionary. This keeps suitable reporting work close to the database.',
    code: "from django.db.models import Count, Avg\n\ncourse_stats = Course.objects.annotate(student_count=Count('students'))\naverage_price = Product.objects.aggregate(avg_price=Avg('price'))\n\nfor course in course_stats:\n    print(course.title, course.student_count)",
    output: 'Each course receives a student_count annotation; aggregate returns a dictionary containing the average price.',
    task: 'Build a course report with enrollment count and average lesson completion.', solutionHint: 'Define relationships clearly, then use Count/Avg with annotations. Verify generated SQL and grouping when results look unexpected.', interviewQuestion: 'What is the difference between annotate() and aggregate()?'
  },
  {
    id: 'django-orm-13', track: 'Django', level: 'Advanced', title: 'Transactions and transaction.atomic', duration: '30 min', kind: 'transactions',
    summary: 'Keep related database writes consistent with atomic transactions.',
    explain: 'A transaction groups database operations so they succeed or roll back together. Django provides transaction.atomic for this purpose. Use it for workflows such as creating an order and its payment record where a partial update would leave inconsistent data.',
    code: "from django.db import transaction\n\n@transaction.atomic\ndef create_order(customer, product):\n    order = Order.objects.create(customer=customer)\n    OrderItem.objects.create(order=order, product=product)\n    return order",
    output: 'If an exception occurs inside the atomic block, the database changes in that transaction are rolled back.',
    task: 'Implement an order workflow where stock deduction and order creation must succeed together.', solutionHint: 'Place all related writes inside one atomic block and allow database errors to trigger rollback. Do not catch exceptions without deciding how transaction state should be handled.', interviewQuestion: 'What problem does transaction.atomic solve?'
  },
  {
    id: 'django-orm-14', track: 'Advanced', title: 'Inspect generated SQL and understand ORM-to-SQL translation', duration: '25 min', kind: 'debugging',
    summary: 'Connect Django ORM code to the SQL actually executed by the database.',
    explain: 'Django ORM is an abstraction over SQL, but production developers still need to understand the generated query. QuerySet.query can expose the SQL representation for inspection, while database logging and Django Debug Toolbar help inspect executed queries and timing.',
    code: "qs = Product.objects.filter(active=True).order_by('-price')\nprint(qs.query)",
    output: 'The shell prints a SQL representation containing a SELECT, FROM, WHERE and ORDER BY corresponding to the QuerySet.',
    task: 'Compare the SQL generated by filter, exclude, select_related and annotate.', solutionHint: 'Treat generated SQL as a learning and debugging aid. For actual performance decisions, measure executed queries and inspect the database execution plan.', interviewQuestion: 'Why should a Django developer understand the SQL generated by the ORM?'
  },
  {
    id: 'django-orm-15', track: 'Django', level: 'Advanced', title: 'Django Debug Toolbar for database performance', duration: '25 min', kind: 'performance',
    summary: 'Inspect SQL query count, duplicate queries and request performance during development.',
    explain: 'The Django Debug Toolbar can expose useful development-time information about SQL queries and request execution. It is especially valuable when learning to identify N+1 queries and unnecessary database work.',
    code: "# development settings\nINSTALLED_APPS += ['debug_toolbar']\n\n# Then inspect a page that loads a list of products and related categories.",
    output: 'The development page shows debugging panels, including database queries, allowing comparison of query count and timing.',
    task: 'Create an intentionally inefficient related-object loop, measure it, then optimize it with select_related.', solutionHint: 'Do not install development-only debugging tools in production. Compare query count and execution time before and after the change.', interviewQuestion: 'How would you find an N+1 query in a Django application?'
  },
  {
    id: 'django-orm-16', track: 'Django', level: 'Advanced', title: 'Raw SQL and when to bypass the ORM', duration: '30 min', kind: 'database',
    summary: 'Use raw SQL carefully when a query cannot be expressed effectively through the ORM.',
    explain: 'The ORM should be the default for normal application queries, but there are cases where raw SQL is appropriate. Django supports raw queries and direct database cursor operations. Parameterized queries must be used for user-controlled values to avoid SQL injection.',
    code: "from django.db import connection\n\nwith connection.cursor() as cursor:\n    cursor.execute(\n        'SELECT id, name FROM products WHERE price >= %s',\n        [1000]\n    )\n    rows = cursor.fetchall()",
    output: 'rows contains tuples returned by the parameterized SQL query.',
    task: 'Take a complex reporting query and decide whether ORM, raw SQL, or a database view is the most maintainable option.', solutionHint: 'Do not concatenate user input into SQL. Prefer ORM expressions when they remain readable and correct.', interviewQuestion: 'When would you choose raw SQL instead of Django ORM?'
  },
  {
    id: 'django-orm-17', track: 'Django', level: 'Advanced', title: 'Multiple database configuration and routing', duration: '35 min', kind: 'database',
    summary: 'Understand how a Django project can work with more than one database.',
    explain: 'Django supports multiple configured databases. A project can route reads and writes based on application or model rules, although multiple databases introduce consistency and transaction complexity that must be designed carefully.',
    code: "DATABASES = {\n    'default': {...},\n    'analytics': {...},\n}\n\nReport.objects.using('analytics').filter(active=True)",
    output: 'The QuerySet is executed against the analytics database alias instead of the default database.',
    task: 'Design a read/reporting database configuration and document which models use each database.', solutionHint: 'Use explicit database aliases and routers only when there is a clear architectural reason. Consider transaction boundaries across databases.', interviewQuestion: 'What challenges appear when a Django application uses multiple databases?'
  },
  {
    id: 'django-orm-18', track: 'Django', level: 'Advanced', title: 'Database connection lifecycle and CONN_MAX_AGE', duration: '25 min', kind: 'performance',
    summary: 'Understand how Django opens, reuses and closes database connections.',
    explain: 'Django opens a database connection when it first needs to query the database. Connection persistence can be controlled per database with CONN_MAX_AGE. The correct setting depends on deployment mode, database capacity and the database driver or connection pool strategy.',
    code: "DATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.postgresql',\n        'NAME': 'appdb',\n        'CONN_MAX_AGE': 60,\n    }\n}",
    output: 'Django can reuse a connection for up to the configured lifetime when the deployment and database setup support persistent connections.',
    task: 'Document the database connection strategy for a Django deployment and explain why the chosen value is appropriate.', solutionHint: 'Measure connection counts and latency rather than choosing a value arbitrarily. Review Django and database deployment guidance for your serving model.', interviewQuestion: 'What does CONN_MAX_AGE control?'
  },
  {
    id: 'django-project-19', track: 'Django', level: 'Intermediate', title: 'Project: product catalog with real database persistence', duration: '45 min', kind: 'project',
    summary: 'Build a database-backed product catalog from model to UI.',
    explain: 'Create Category and Product models, connect Django to SQLite first, migrate the schema, seed records through the admin or shell, query them with the ORM, and render them in a view. This creates the foundation for larger projects.',
    code: "class Category(models.Model):\n    name = models.CharField(max_length=80)\n\nclass Product(models.Model):\n    category = models.ForeignKey(Category, on_delete=models.PROTECT)\n    name = models.CharField(max_length=120)\n    price = models.DecimalField(max_digits=10, decimal_places=2)",
    output: 'A working /products/ page reads Product rows from the configured database and displays their category and price.',
    task: 'Add product creation, editing, deletion and category filtering.', solutionHint: 'Implement the schema first, then migrations, then data creation, then query/view/template logic. Test every CRUD path.', interviewQuestion: 'Walk through how a product created in a Django form reaches the database.'
  },
  {
    id: 'django-project-20', track: 'Django', level: 'Intermediate', title: 'Project: normalized accounts and multiple addresses', duration: '45 min', kind: 'project',
    summary: 'Model a normalized account/address relationship and implement CRUD.',
    explain: 'Instead of storing several addresses in one account row, create a separate Address model linked to the account. This demonstrates relational modeling, normalization, ForeignKey relationships and CRUD operations.',
    code: "class Address(models.Model):\n    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='addresses')\n    line1 = models.CharField(max_length=200)\n    city = models.CharField(max_length=100)\n    postal_code = models.CharField(max_length=20)",
    output: 'One user can have multiple address rows, and user.addresses.all() retrieves them through the ORM.',
    task: 'Implement add, edit, delete and list-address features with validation.', solutionHint: 'Use a ForeignKey for the one-user-to-many-address relationship and enforce ownership checks in every update/delete operation.', interviewQuestion: 'Why is a separate Address table better than storing multiple addresses in one user row?'
  },
  {
    id: 'django-project-21', track: 'Django', level: 'Advanced', title: 'Project: order workflow with transaction safety', duration: '50 min', kind: 'project',
    summary: 'Build an order workflow that combines models, ORM relationships and atomic transactions.',
    explain: 'Create Customer, Order and OrderItem models. When an order is placed, create the order, create its items, validate stock and update inventory within an atomic transaction. This combines relational modeling with real production-style consistency requirements.',
    code: "with transaction.atomic():\n    order = Order.objects.create(customer=customer, status='PENDING')\n    for item in cart_items:\n        product = Product.objects.select_for_update().get(pk=item.product_id)\n        if product.stock_quantity < item.quantity:\n            raise ValueError('Insufficient stock')\n        product.stock_quantity -= item.quantity\n        product.save(update_fields=['stock_quantity'])\n        OrderItem.objects.create(order=order, product=product, quantity=item.quantity)",
    output: 'A successful request creates the order, order items and stock changes together. An exception rolls back the transaction.',
    task: 'Add payment status and prevent two concurrent requests from consuming the same inventory.', solutionHint: 'Use an atomic transaction and row locking where appropriate. Test both success and failure paths.', interviewQuestion: 'Why might select_for_update be needed in an inventory workflow?'
  },
  {
    id: 'django-project-22', track: 'Django', level: 'Advanced', title: 'Project: ORM performance review and optimization', duration: '45 min', kind: 'project',
    summary: 'Measure and optimize database queries in a realistic Django page.',
    explain: 'Build a dashboard that displays courses, instructors, enrollment counts and recent learners. First implement the straightforward ORM version. Then inspect query count, identify N+1 patterns, use select_related/prefetch_related, annotations and field selection, and compare measurements.',
    code: "courses = (\n    Course.objects\n    .select_related('instructor')\n    .prefetch_related('students')\n    .annotate(enrollment_count=Count('students'))\n)",
    output: 'The optimized dashboard returns the required data with fewer database round trips than the naive implementation.',
    task: 'Capture before/after query counts and document every optimization with the reason it works.', solutionHint: 'Optimization must be evidence-driven. Inspect queries, identify the expensive pattern, change one thing, measure again and verify correctness.', interviewQuestion: 'How would you optimize a slow Django API endpoint that returns related database data?'
  },
  {
    id: 'django-project-23', track: 'Django', level: 'Advanced', title: 'Django database project: development to production checklist', duration: '35 min', kind: 'deployment',
    summary: 'Prepare a database-backed Django project for deployment.',
    explain: 'A production-ready database setup needs environment-based credentials, migrations applied during deployment, backups, appropriate connection settings, secure secret handling, logging and monitoring. Development SQLite configuration should not simply be copied into production without considering the workload.',
    code: "# Deployment checklist\npython manage.py check --deploy\npython manage.py migrate\npython manage.py collectstatic --noinput",
    output: 'Deployment checks and migrations complete successfully; static assets are collected when configured.',
    task: 'Write a deployment runbook for a Django application using PostgreSQL.', solutionHint: 'Document environment variables, database provisioning, migration order, rollback strategy, backups, health checks and monitoring.', interviewQuestion: 'What database-related checks would you perform before deploying Django to production?'
  },
  {
    id: 'django-orm-24', track: 'Django', level: 'Advanced', title: 'ORM interview challenge: design and optimize a reporting query', duration: '35 min', kind: 'challenge',
    summary: 'Combine relationships, filtering, annotation, aggregation and query optimization.',
    explain: 'Design a report that lists each course, its instructor, enrollment count and most recent enrollment. Start with correct relationships and filters, then optimize related-object loading and aggregation. Inspect the generated SQL and explain the resulting database work.',
    code: "from django.db.models import Count, Max\n\nreport = (\n    Course.objects\n    .select_related('instructor')\n    .annotate(\n        enrollment_count=Count('enrollments'),\n        latest_enrollment=Max('enrollments__created_at'),\n    )\n)",
    output: 'Each Course row contains instructor information plus enrollment_count and latest_enrollment annotations.',
    task: 'Extend the report with a completion percentage and restrict it to active courses.', solutionHint: 'Verify joins and aggregation carefully; inspect SQL and query counts rather than assuming the ORM produced the most efficient query.', interviewQuestion: 'How do annotate(), select_related() and database indexes work together when optimizing a Django report?'
  },
  {
    id: 'django-project-25', track: 'Django', level: 'Advanced', title: 'Capstone: e-commerce Django database architecture', duration: '60 min', kind: 'capstone',
    summary: 'Build a complete relational Django project inspired by real project-based learning.',
    explain: 'Design an e-commerce backend with users, categories, products, multiple product types, addresses, wish lists, orders and order items. Implement migrations, ORM CRUD, relationships, transactions, query optimization and tests. The goal is to move from isolated ORM exercises to a maintainable database-backed application.',
    code: "# Example architecture\naccounts -> addresses\nproducts -> categories, product_types\norders -> order_items -> products\nusers -> wish_list -> products",
    output: 'A working Django application persists business data in a relational database and exposes tested workflows for catalog, account and ordering operations.',
    task: 'Implement the project incrementally: schema, migrations, seed data, CRUD, relationships, order transaction, optimized queries, tests and deployment checklist.', solutionHint: 'Build one vertical slice at a time. Keep models normalized, use the ORM for ordinary queries, inspect SQL for complex operations, and measure performance before optimizing.', interviewQuestion: 'Explain the database architecture of your Django project and justify your ORM, relationship, transaction and optimization choices.'
  }
]
