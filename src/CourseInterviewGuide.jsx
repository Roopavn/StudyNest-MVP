import { BookOpen, BriefcaseBusiness, CheckCircle2, ExternalLink, Lightbulb, ListChecks, Target } from 'lucide-react'
import InterviewPrep from './InterviewPrep.jsx'
import './CourseInterviewGuide.css'

const bankTopicByTrack = {
  Python: 'Python',
  'Operating Systems': 'Operating Systems',
  'Operating System': 'Operating Systems',
  OS: 'Operating Systems',
  DBMS: 'DBMS',
  'Database Management Systems': 'DBMS',
  'Computer Networks': 'Computer Networks',
  Networking: 'Computer Networks',
  'Data Structures & Algorithms': 'Data Structures & Algorithms',
  DSA: 'Data Structures & Algorithms',
  React: 'React',
  'React.js': 'React',
  'ReactJS': 'React',
  'Object-Oriented Programming': 'Object-Oriented Programming',
  OOP: 'Object-Oriented Programming',
  'Software Testing': 'Software Testing',
  'System Design': 'System Design',
  SQL: 'SQL',
  'Database & SQL Essentials': 'SQL',
  'DBMS & Database Design': 'SQL',
  'Oracle Database': 'SQL',
  PostgreSQL: 'SQL',
  MongoDB: 'SQL',
  'NoSQL & MongoDB': 'SQL',
  'REST APIs': 'REST APIs',
  'REST API Development': 'REST APIs',
  'Django & FastAPI': 'Django',
  'Django Web Development': 'Django',
  Django: 'Django',
  'Flask Web Development': 'Flask',
  Flask: 'Flask',
  'FastAPI Development': 'FastAPI',
  FastAPI: 'FastAPI',
  'Django REST Framework': 'Django REST Framework',
  DRF: 'Django REST Framework',
  'Machine Learning': 'Machine Learning',
  'Data Science': 'Data Science',
  'Data Analyst': 'Data Analyst',
  'Manual Testing': 'Manual Testing',
  'JavaScript Frameworks & Libraries': 'JavaScript Frameworks & Libraries',
  'JavaScript Ecosystem': 'JavaScript Frameworks & Libraries',
  'Node.js & Express': 'JavaScript Frameworks & Libraries',
  Java: 'Java',
  'Java Foundations': 'Java',
  JavaScript: 'JavaScript',
  'JavaScript Essentials': 'JavaScript',
  TypeScript: 'JavaScript',
  'C Programming': 'C Programming',
  'HTML & CSS': 'HTML & CSS',
  'HTML & CSS Web Design': 'HTML & CSS',
  DevOps: 'DevOps',
  'DevOps Foundations': 'DevOps',
  'Cloud Fundamentals': 'Cloud Fundamentals',
  'Microsoft Azure': 'Cloud Fundamentals',
  'AWS Cloud': 'Cloud Fundamentals',
  'Google Cloud': 'Cloud Fundamentals',
  'Linux & Shell': 'Linux & Shell',
  'Docker & Containers': 'Docker & Containers',
  'Git & GitHub': 'Git & GitHub',
  Kubernetes: 'Kubernetes',
  'Kubernetes Basics': 'Kubernetes',
  'Generative AI': 'Generative AI',
  'Generative AI & LLMs': 'Generative AI',
  'Agentic AI': 'Agentic AI',
  'Data Engineering / Big Data': 'Data Engineering / Big Data',
  Databricks: 'Data Engineering / Big Data',
}

const interviewResourcesByTopic = {
  Python: [
    ['GeeksforGeeks', 'Python interview questions', 'https://www.geeksforgeeks.org/python/python-interview-questions/'],
    ['InterviewBit', 'Python interview questions', 'https://www.interviewbit.com/python-interview-questions/'],
  ],
  Django: [
    ['GeeksforGeeks', 'Django interview questions', 'https://www.geeksforgeeks.org/python/django-interview-questions/'],
  ],
  Flask: [
    ['GeeksforGeeks', 'Flask interview questions', 'https://www.geeksforgeeks.org/python/flask-interview-questions-and-answers/'],
  ],
  FastAPI: [
    ['GeeksforGeeks', 'FastAPI interview questions', 'https://www.geeksforgeeks.org/python/fastapi-interview-questions-and-answers/'],
  ],
  'Machine Learning': [
    ['GeeksforGeeks', 'Machine Learning interview questions', 'https://www.geeksforgeeks.org/machine-learning/machine-learning-interview-questions/'],
  ],
  'Data Science': [
    ['GeeksforGeeks', 'Data Science interview questions', 'https://www.geeksforgeeks.org/data-science/data-science-interview-questions-and-answers/'],
  ],
  'Data Analyst': [
    ['GeeksforGeeks', 'Data Analyst interview questions', 'https://www.geeksforgeeks.org/data-analysis/data-analyst-interview-questions-and-answers/'],
  ],
  'Manual Testing': [
    ['GeeksforGeeks', 'Manual Testing interview questions', 'https://www.geeksforgeeks.org/category/software-testing/manual-testing/'],
    ['InterviewBit', 'Manual Testing interview questions', 'https://www.interviewbit.com/manual-testing-interview-questions/'],
  ],
  'JavaScript Frameworks & Libraries': [
    ['GeeksforGeeks', 'JavaScript interview questions', 'https://www.geeksforgeeks.org/javascript/javascript-interview-questions/'],
    ['InterviewBit', 'JavaScript interview questions', 'https://www.interviewbit.com/javascript-interview-questions/'],
  ],
  SQL: [
    ['GeeksforGeeks', 'SQL interview questions', 'https://www.geeksforgeeks.org/sql/sql-interview-questions/'],
    ['InterviewBit', 'SQL interview questions', 'https://www.interviewbit.com/sql-interview-questions/'],
  ],
  'REST APIs': [
    ['GeeksforGeeks', 'Software developer interview preparation', 'https://www.geeksforgeeks.org/interview-experiences/software-developer-interview-questions/'],
    ['InterviewBit', 'System design interview questions', 'https://www.interviewbit.com/system-design-interview-questions/'],
  ],
  Java: [
    ['GeeksforGeeks', 'Java interview questions', 'https://www.geeksforgeeks.org/java/java-interview-questions/'],
    ['InterviewBit', 'Java interview questions', 'https://www.interviewbit.com/java-interview-questions/'],
  ],
  JavaScript: [
    ['GeeksforGeeks', 'JavaScript interview questions', 'https://www.geeksforgeeks.org/javascript/javascript-interview-questions/'],
    ['InterviewBit', 'JavaScript interview questions', 'https://www.interviewbit.com/javascript-interview-questions/'],
  ],
  'C Programming': [
    ['GeeksforGeeks', 'C interview questions', 'https://www.geeksforgeeks.org/c/c-interview-questions/'],
    ['InterviewBit', 'C interview questions', 'https://www.interviewbit.com/c-interview-questions/'],
  ],
  'HTML & CSS': [
    ['GeeksforGeeks', 'Web technology interview questions', 'https://www.geeksforgeeks.org/interview-experiences/web-technologies-questions/'],
    ['InterviewBit', 'HTML and CSS interview questions', 'https://www.interviewbit.com/html-css-interview-questions/'],
  ],
  DevOps: [
    ['GeeksforGeeks', 'DevOps interview questions', 'https://www.geeksforgeeks.org/devops/devops-interview-questions/'],
    ['InterviewBit', 'DevOps interview questions', 'https://www.interviewbit.com/devops-interview-questions/'],
  ],
  'Cloud Fundamentals': [
    ['GeeksforGeeks', 'Cloud computing interview questions', 'https://www.geeksforgeeks.org/cloud-computing/cloud-computing-interview-questions/'],
    ['InterviewBit', 'Cloud computing interview questions', 'https://www.interviewbit.com/cloud-computing-interview-questions/'],
  ],
  'Linux & Shell': [
    ['GeeksforGeeks', 'Linux interview questions', 'https://www.geeksforgeeks.org/linux-unix/linux-interview-questions/'],
    ['InterviewBit', 'Linux interview questions', 'https://www.interviewbit.com/linux-interview-questions/'],
  ],
  'Docker & Containers': [
    ['GeeksforGeeks', 'Docker interview questions', 'https://www.geeksforgeeks.org/devops/docker-interview-questions/'],
    ['InterviewBit', 'Docker interview questions', 'https://www.interviewbit.com/docker-interview-questions/'],
  ],
  'Git & GitHub': [
    ['GeeksforGeeks', 'Git interview questions', 'https://www.geeksforgeeks.org/git/git-interview-questions/'],
    ['InterviewBit', 'Git interview questions', 'https://www.interviewbit.com/git-interview-questions/'],
  ],
  Kubernetes: [
    ['GeeksforGeeks', 'Kubernetes interview questions', 'https://www.geeksforgeeks.org/devops/kubernetes-interview-questions/'],
    ['InterviewBit', 'Kubernetes interview questions', 'https://www.interviewbit.com/kubernetes-interview-questions/'],
  ],
  'Generative AI': [
    ['GeeksforGeeks', 'Generative AI interview questions', 'https://www.geeksforgeeks.org/artificial-intelligence/generative-ai-interview-questions/'],
    ['InterviewBit', 'Machine learning interview questions', 'https://www.interviewbit.com/machine-learning-interview-questions/'],
  ],
  'Agentic AI': [
    ['GeeksforGeeks', 'Software developer interview preparation', 'https://www.geeksforgeeks.org/interview-experiences/software-developer-interview-questions/'],
    ['InterviewBit', 'System design interview questions', 'https://www.interviewbit.com/system-design-interview-questions/'],
  ],
  'Data Engineering / Big Data': [
    ['GeeksforGeeks', 'Big data interview questions', 'https://www.geeksforgeeks.org/big-data/big-data-interview-questions/'],
    ['InterviewBit', 'Data engineering interview questions', 'https://www.interviewbit.com/data-engineering-interview-questions/'],
  ],
  'Operating Systems': [
    ['GeeksforGeeks', 'Operating system interview questions', 'https://www.geeksforgeeks.org/operating-systems/operating-systems-interview-questions/'],
    ['InterviewBit', 'Operating system interview questions', 'https://www.interviewbit.com/operating-system-interview-questions/'],
  ],
  DBMS: [
    ['GeeksforGeeks', 'DBMS interview questions', 'https://www.geeksforgeeks.org/dbms/commonly-asked-dbms-interview-questions/'],
    ['InterviewBit', 'DBMS interview questions', 'https://www.interviewbit.com/dbms-interview-questions/'],
  ],
  'Computer Networks': [
    ['GeeksforGeeks', 'Computer networks interview questions', 'https://www.geeksforgeeks.org/computer-networks/computer-network-interview-questions/'],
    ['InterviewBit', 'Computer networks interview questions', 'https://www.interviewbit.com/computer-network-interview-questions/'],
  ],
  'Data Structures & Algorithms': [
    ['GeeksforGeeks', 'DSA practice and interview preparation', 'https://www.geeksforgeeks.org/dsa/'],
    ['InterviewBit', 'Programming and data structures practice', 'https://www.interviewbit.com/courses/programming/'],
  ],
  React: [
    ['GeeksforGeeks', 'React interview questions', 'https://www.geeksforgeeks.org/reactjs/reactjs-interview-questions/'],
    ['InterviewBit', 'React interview questions', 'https://www.interviewbit.com/react-interview-questions/'],
  ],
  'Object-Oriented Programming': [
    ['GeeksforGeeks', 'OOP interview questions', 'https://www.geeksforgeeks.org/object-oriented-programming-oops/'],
    ['InterviewBit', 'OOP interview questions', 'https://www.interviewbit.com/oops-interview-questions/'],
  ],
  'Software Testing': [
    ['GeeksforGeeks', 'Software testing interview questions', 'https://www.geeksforgeeks.org/software-testing/software-testing-interview-questions/'],
    ['InterviewBit', 'Software testing interview questions', 'https://www.interviewbit.com/software-testing-interview-questions/'],
  ],
  'System Design': [
    ['GeeksforGeeks', 'System design interview questions', 'https://www.geeksforgeeks.org/system-design/microsoft-system-design-interview-questions/'],
    ['InterviewBit', 'System design interview questions', 'https://www.interviewbit.com/system-design-interview-questions/'],
  ],
}

const focusByPattern = [
  { test: /python|django|flask|fastapi|rest|api|backend/i, areas: ['Python fundamentals, collections, functions and OOP', 'HTTP methods, status codes, validation and authentication', 'Database access, ORM queries, transactions and API performance', 'Debugging, logging, testing and production troubleshooting'], practice: 'Explain how you would design, secure, test and troubleshoot an API endpoint. Practise writing a small endpoint and validating its input.' },
  { test: /sql|database|postgres|oracle|mongo|nosql|dbms/i, areas: ['Data modelling, keys, constraints and normalization', 'Joins, grouping, subqueries, CTEs and window functions', 'Indexes, execution plans, transactions and isolation', 'NoSQL document modelling, indexes and aggregation where relevant'], practice: 'Write queries from a business requirement, explain the expected result, then discuss how you would improve a slow query.' },
  { test: /javascript|react|node|typescript|html|css|web/i, areas: ['Language fundamentals, scope, closures and asynchronous execution', 'Components, state, props, hooks and rendering (for React)', 'DOM, semantic HTML, CSS layout, responsive design and accessibility', 'API integration, error handling, browser performance and testing'], practice: 'Build a small interactive component, explain its state flow, and debug a broken API request or rendering issue.' },
  { test: /devops|cloud|azure|aws|google cloud|linux|shell|docker|kubernetes|git/i, areas: ['Core concepts, architecture and the request/deployment lifecycle', 'CI/CD, configuration, identity, secrets and least privilege', 'Logs, metrics, health checks, networking and incident diagnosis', 'Reliability, scaling, rollback, security and cost trade-offs'], practice: 'Walk through a failed deployment or unhealthy service. Explain the evidence you would collect, the likely causes and how you would validate recovery.' },
  { test: /spark|pyspark|data engineering|data science|data analyst|machine learning|databricks/i, areas: ['Data preparation, schemas, quality checks and transformations', 'SQL and Python problem-solving for realistic datasets', 'Distributed processing, partitions, shuffles and performance (where relevant)', 'Model evaluation, experiment design and communicating results (where relevant)'], practice: 'Describe an end-to-end data workflow, identify failure points, and explain how you would validate output quality and performance.' },
  { test: /generative ai|agentic ai|llm|artificial intelligence|machine learning/i, areas: ['Core model concepts, limitations and evaluation', 'Prompting, retrieval, embeddings and structured outputs', 'Tool permissions, validation, privacy and prompt-injection risks', 'Latency, cost, observability and human review in production'], practice: 'Design a small AI feature and explain how you would evaluate quality, protect data and prevent unsafe tool actions.' },
  { test: /testing|quality assurance|manual testing|software testing/i, areas: ['Test levels, test design techniques and requirement analysis', 'Positive, negative, boundary and exploratory test cases', 'Defect lifecycle, severity, priority and clear bug reports', 'API, database, regression and automation fundamentals'], practice: 'Take one feature and write test scenarios for normal, invalid, boundary and failure cases. Explain how you would prioritize them.' },
]

function getGuide(track) {
  return focusByPattern.find((item) => item.test.test(track)) || {
    areas: ['Explain the core concepts and terminology in your own words', 'Describe the architecture, workflow and common use cases', 'Practise hands-on tasks and troubleshoot common failures', 'Discuss security, performance, maintainability and trade-offs'],
    practice: 'Choose a realistic task from this course, solve it step by step, explain your decisions and discuss how you would test and improve the result.',
  }
}

export default function CourseInterviewGuide({ track }) {
  const bankTopic = bankTopicByTrack[track]
  const guide = getGuide(track)

  return <section className="course-interview-guide" aria-labelledby="course-interview-title">
    <div className="course-interview-heading">
      <span className="course-interview-kicker"><BriefcaseBusiness size={14}/> CAREER PREPARATION</span>
      <h3 id="course-interview-title">{track} · Interview guide</h3>
      <p>Prepare for interviews alongside the lessons. Revise the concepts, practise explaining your decisions and solve realistic problems aloud.</p>
    </div>
    <div className="course-interview-grid">
      <article className="course-interview-card">
        <div className="course-interview-card-title"><Target size={17}/><h4>What to prepare</h4></div>
        <ul>{guide.areas.map((area) => <li key={area}><CheckCircle2 size={15}/><span>{area}</span></li>)}</ul>
      </article>
      <article className="course-interview-card">
        <div className="course-interview-card-title"><Lightbulb size={17}/><h4>Practice like an interview</h4></div>
        <p>{guide.practice}</p>
        <div className="course-interview-prompt"><strong>Try this routine</strong><ol><li>Answer in 60–90 seconds.</li><li>Give a small example or draw the flow.</li><li>Explain one trade-off or edge case.</li><li>Write or debug code without looking at the solution.</li></ol></div>
      </article>
    </div>
    {bankTopic ? <div className="course-interview-bank"><div className="course-interview-bank-heading"><BookOpen size={17}/><div><h4>Question bank and model answers</h4><p>Use the course question bank below, filtered to the matching subject.</p></div></div><InterviewPrep initialTopic={bankTopic} /></div> : <div className="course-interview-coming"><ListChecks size={18}/><p><strong>Course-specific question bank</strong><br/>Use the preparation roadmap above while the dedicated question set for this subject is being expanded.</p></div>}
    {bankTopic && interviewResourcesByTopic[bankTopic] && <div className="course-interview-resources"><h4>Explore trusted interview references</h4>{interviewResourcesByTopic[bankTopic].map(([source, label, url]) => <a className="course-interview-resource" href={url} target="_blank" rel="noreferrer" key={source}><ExternalLink size={15}/> {source} · {label} <span>Open reference</span></a>)}</div>}
  </section>
}
