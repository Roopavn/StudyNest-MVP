// Data science curriculum from analysis and statistics through communication and capstone practice.
const topics = [
["Data science lifecycle and problem framing","Translate a business question into measurable analytical work.","Clarify the decision, unit of analysis, outcome, constraints and success metric before collecting data."],
["Python and notebook workflow","Use notebooks for exploration while keeping reusable logic in modules.","Keep cells reproducible, restart and run all before sharing, and move stable functions into tested Python modules."],
["NumPy and numerical computing","Use arrays, vectorized math, shapes and aggregations.","Understand dimensions and dtypes, use vectorized operations, and check units and missing values."],
["Pandas DataFrames and data ingestion","Read CSV/Excel/JSON data and inspect schema and quality.","Use read_csv/read_json, dtypes, head, describe and info; explicitly parse dates and identifiers."],
["Data cleaning and quality checks","Handle missing, duplicated, inconsistent and invalid records.","Define quality rules and quantify dropped or corrected rows so cleaning choices remain auditable."],
["Descriptive statistics and distributions","Summarize central tendency, spread, quantiles and skew.","Mean is sensitive to outliers; median and quantiles can better describe skewed data."],
["Probability and common distributions","Understand conditional probability, sampling and uncertainty.","Use conditional probability carefully and distinguish sample estimates from population parameters."],
["Hypothesis testing and confidence intervals","Interpret p-values, effect sizes, uncertainty and statistical power.","A p-value is not the probability that the null hypothesis is true; report effect sizes and confidence intervals."],
["Exploratory analysis and visualization","Choose plots that answer a specific analytical question.","Use histograms for distributions, scatterplots for relationships and clear labels; avoid misleading axes."],
["SQL for analytics","Aggregate and join relational data for reporting.","Filter before aggregation where appropriate, prevent join fan-out, and verify row counts after joins."],
["Business metrics and cohort analysis","Define KPIs, funnels, retention and cohorts consistently.","Write the numerator, denominator, time window and inclusion rules for every metric."],
["Sampling, correlation and causal caution","Recognize selection bias, confounding and limits of observational data.","Correlation can be confounded; randomization or careful causal designs are needed for causal claims."],
["Dashboards and data storytelling","Communicate findings with a concise narrative and actionable visuals.","Lead with the decision-relevant insight, show uncertainty and label the data period and source."],
["Reproducibility and responsible data work","Version code, document assumptions and protect sensitive information.","Use controlled access, data minimization, reproducible environments and documented transformations."],
["Data science capstone and interview practice","Deliver an analysis from raw data to recommendations.","Include a clear question, data-quality checks, analysis, visualizations, limitations and reproducible conclusions."]
];
export const dataScienceCourseLessons = topics.map(([title, summary, explain], i) => ({
 id: `ds-${i+1}`, track: 'Data Science', level: i < 5 ? 'Basic' : i < 11 ? 'Intermediate' : 'Advanced',
 title, duration: '20 min', kind: 'layers', summary, explain,
 code: i === 3 ? "import pandas as pd\n\ndf = pd.read_csv('data.csv')\nprint(df.shape)\nprint(df.dtypes)\nprint(df.isna().sum())\nprint(df.describe(include='all'))" : "import pandas as pd\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv('data.csv')\nprint(df.head())\nprint(df.describe())",
 output: 'Use a real or sample dataset; interpret outputs in context rather than relying on a single statistic.',
 task: `Apply “${title}” to a small dataset and write down one finding plus one limitation.`,
 solutionHint: 'Check data types and quality first, show the relevant evidence, and explain assumptions and uncertainty.',
 interviewQuestion: ['How do you frame a data science problem?','Why are notebooks useful and risky?','What is vectorization?','How do you inspect a new dataset?','How do you validate data quality?','When prefer median over mean?','Explain conditional probability.','What does a p-value mean?','Which plot would you choose for a distribution?','How do joins cause duplicate counts?','How do you define a KPI?','Why does correlation not imply causation?','How do you present an analytical finding?','How do you make analysis reproducible and responsible?','Describe an end-to-end data science project.'][i]
}));