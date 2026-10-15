// Practical data analyst curriculum covering spreadsheets, SQL, BI, statistics and stakeholder reporting.
const topics = [
["Data analyst role and analytical thinking","Translate stakeholder requests into clear, answerable business questions.","Clarify the decision, target audience, unit of analysis, time window and success metric before opening a tool."],
["Analyst environment and workflow","Organize files, notebooks, documentation and repeatable analysis steps.","Keep raw data unchanged, store transformations separately, document assumptions and use version control for scripts."],
["Spreadsheet fundamentals","Use clean tables, data types, sorting, filtering and reliable formulas.","Use one header row, one record per row, consistent types and explicit handling of blanks; avoid merged cells in datasets."],
["Spreadsheet formulas and conditional logic","Apply IF, SUMIFS, COUNTIFS, lookup functions and error handling.","Use XLOOKUP where available, verify lookup keys are unique, and test formulas against a few hand-calculated examples."],
["Pivot tables and spreadsheet dashboards","Summarize large tables by category, date and business segment.","Check source ranges, refresh pivots after data changes and label units and reporting periods."],
["SQL SELECT, filtering and sorting","Retrieve exactly the rows and columns needed for an analysis.","Use SELECT, WHERE, ORDER BY, DISTINCT and LIMIT/TOP; avoid SELECT * in reusable reports."],
["SQL aggregation and business metrics","Calculate totals, averages, counts and grouped KPIs.","Use GROUP BY and HAVING correctly; define the denominator and time period for every rate."],
["SQL joins and data modeling basics","Combine related tables without accidentally duplicating records.","Understand primary and foreign keys, join cardinality, NULL behavior and row-count checks after joins."],
["SQL CTEs, subqueries and window functions","Build readable multi-step analysis and rank or compare rows.","Use CTEs to name steps and window functions such as ROW_NUMBER, LAG and SUM OVER for trends and cohorts."],
["Data cleaning and quality assurance","Find missing values, duplicates, invalid dates and inconsistent categories.","Profile before cleaning, document every rule, and reconcile record counts before and after transformations."],
["Statistics for analysts","Interpret distributions, percentiles, variance, sampling and confidence intervals.","Distinguish statistical significance from practical impact and explain uncertainty in plain language."],
["Exploratory data analysis and visualization","Choose charts that make comparisons, distributions and trends clear.","Use bars for category comparisons, lines for time trends and histograms for distributions; label axes and units."],
["Python with Pandas for analysis","Load, clean, transform and summarize data with Python.","Use read_csv, isna, drop_duplicates, groupby, merge and to_datetime; validate results with shape and value counts."],
["Power BI or Tableau fundamentals","Connect data, create measures and build an interactive report.","Separate dimensions from measures, define KPI calculations consistently, and avoid cluttered dashboards."],
["Dashboard design and data storytelling","Turn analysis into a concise finding, explanation and recommendation.","Lead with the key insight, show comparison and context, state the period and source, and explain limitations."],
["Business analysis: funnels, cohorts and retention","Measure conversion, repeat behavior and performance over time.","Define event order, cohort assignment, observation window and denominator before comparing segments."],
["Data-informed decisions and A/B test basics","Compare variants carefully and recognize common sources of bias.","Check random assignment, sample size, exposure and guardrail metrics; do not repeatedly peek and stop without a plan."],
["Data privacy, governance and reproducible reporting","Share reliable results while protecting sensitive information.","Apply least-privilege access, minimize exported personal data, record metric definitions and schedule quality checks."],
["Data analyst portfolio project","Complete a stakeholder-style analysis from raw data to recommendations.","Submit cleaned data, SQL or notebook, a dashboard, metric definitions, findings, limitations and practical next steps."],
["Data analyst interview preparation","Practice SQL, spreadsheet, visualization and business case questions.","Explain assumptions first, walk through edge cases, validate the result and connect the analysis to a business decision."]
];
export const dataAnalystCourseLessons = topics.map(([title, summary, explain], i) => ({
  id: `da-${i+1}`,
  track: 'Data Analyst',
  level: i < 6 ? 'Basic' : i < 15 ? 'Intermediate' : 'Advanced',
  title,
  duration: '20 min',
  kind: 'layers',
  summary,
  explain,
  code: [
    "SELECT region, SUM(revenue) AS total_revenue\nFROM sales\nWHERE order_date >= '2026-01-01'\nGROUP BY region\nORDER BY total_revenue DESC;",
    "import pandas as pd\n\ndf = pd.read_csv('sales.csv')\nprint(df.shape)\nprint(df.isna().sum())\nprint(df.groupby('region')['revenue'].sum())",
    "Revenue = SUM(Sales[Revenue])\n\n-- In a BI model, define this as a measure and validate its filters and date context."
  ][i % 3],
  output: 'Validate the result against source records and explain what the metric means for the business.',
  task: `Practice “${title}” using a small sample dataset and document one finding and one validation check.`,
  hint: 'Start with the question and metric definition, inspect the data, verify row counts and edge cases, then explain the result in business language.',
  interview: [
    'How would you investigate a sudden drop in a key business metric?',
    'How do you validate a SQL join and prevent duplicate counting?',
    'How would you explain an analytical finding and its limitations to a non-technical stakeholder?'
  ]
}));
