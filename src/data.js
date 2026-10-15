import { djangoCourseLessons } from './djangoCourseLessons.js'
import { flaskCourseLessons } from './flaskCourseLessons.js'
import { fastapiCourseLessons } from './fastapiCourseLessons.js'
import { drfCourseLessons } from './drfCourseLessons.js'
import { machineLearningCourseLessons } from './machineLearningCourseLessons.js'
import { dataScienceCourseLessons } from './dataScienceCourseLessons.js'
import { dataAnalystCourseLessons } from './dataAnalystCourseLessons.js'
import { ecosystemCourseSpecs, ecosystemCourseLessons } from './ecosystemCourseLessons.js'
import { javascriptEcosystemLessons } from './javascriptEcosystemLessons.js'
import { manualTestingCourseLessons } from './manualTestingCourseLessons.js'
import { dataEngineeringAdvancedLessons } from './dataEngineeringAdvancedLessons.js'

export const tracks = [
  { id: 'it', title: 'IT & technology', subtitle: 'Grow practical, job-ready skills', icon: 'code', color: 'teal', topics: 28 },
]

export const initialTasks = [
  { id: 1, title: 'Review Python decorators', detail: 'Python · 20 min', done: false },
  { id: 2, title: 'Solve 5 SQL query problems', detail: 'SQL · 30 min', done: false },
  { id: 3, title: 'Practice REST API status codes', detail: 'REST APIs · 15 min', done: false },
]

export const courses = [
  ...ecosystemCourseSpecs.map((course, index) => ({ id: 24 + index, title: course.title, category: course.cat, progress: 0, lessons: `${ecosystemCourseLessons.filter((lesson) => lesson.track === course.track).length} lessons`, color: course.color, icon: 'code', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85', imageAlt: course.intro })),
  { id: 1, title: 'Python Foundations', category: 'IT · Programming', progress: 0, lessons: '51 lessons', color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85', imageAlt: 'Laptop showing a programming workspace' },
  { id: 17, title: 'Django Web Development', category: 'IT · Backend', progress: 0, lessons: `${djangoCourseLessons.length} lessons`, color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=85', imageAlt: 'Django backend web development' },
  { id: 18, title: 'Flask Web Development', category: 'IT · Backend', progress: 0, lessons: `${flaskCourseLessons.length} lessons`, color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=85', imageAlt: 'Flask Python web development' },
  { id: 19, title: 'FastAPI Development', category: 'IT · Backend APIs', progress: 0, lessons: `${fastapiCourseLessons.length} lessons`, color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85', imageAlt: 'FastAPI backend API development' },
  { id: 20, title: 'Django REST Framework', category: 'IT · Backend APIs', progress: 0, lessons: `${drfCourseLessons.length} lessons`, color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=900&q=85', imageAlt: 'Django REST API development' },
  { id: 21, title: 'Machine Learning', category: 'AI · Machine Learning', progress: 0, lessons: `${machineLearningCourseLessons.length} lessons`, color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=85', imageAlt: 'Machine learning and data model development' },
  { id: 22, title: 'Data Science', category: 'AI · Data Science', progress: 0, lessons: `${dataScienceCourseLessons.length} lessons`, color: 'orange', icon: 'code', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85', imageAlt: 'Data science analytics dashboard' },
  { id: 23, title: 'Data Analyst', category: 'IT · Data Analytics', progress: 0, lessons: `${dataAnalystCourseLessons.length} lessons`, color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85', imageAlt: 'Data analytics charts and reporting dashboard' },
  { id: 2, title: 'Database & SQL Essentials', category: 'IT · Data skills', progress: 0, lessons: `${sqlCourseLessons.length} lessons`, color: 'orange', icon: 'code', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=85', imageAlt: 'Abstract data and database visualization' },
  { id: 3, title: 'REST API Development', category: 'IT · Backend', progress: 0, lessons: '12 lessons', color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85', imageAlt: 'Server infrastructure representing backend APIs' },
  { id: 4, title: 'Java Foundations', category: 'IT · Programming', progress: 0, lessons: '10 lessons', color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=85', imageAlt: 'Laptop with a code editor open' },
  { id: 5, title: 'JavaScript Essentials', category: 'IT · Web development', progress: 0, lessons: '10 lessons', color: 'orange', icon: 'code', image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=900&q=85', imageAlt: 'JavaScript development on a screen' },
  { id: 100, title: 'Manual Testing', category: 'IT · Quality Assurance', progress: 0, lessons: `${manualTestingCourseLessons.length} lessons`, color: 'orange', icon: 'book-open', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85', imageAlt: 'Software quality assurance and manual testing checklist' },
  { id: 99, title: 'JavaScript Frameworks & Libraries', category: 'IT · Frontend ecosystem', progress: 0, lessons: `${javascriptEcosystemLessons.length} lessons`, color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85', imageAlt: 'JavaScript framework and library learning path' },
  { id: 6, title: 'C Programming', category: 'IT · Programming', progress: 0, lessons: '53 lessons', color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85', imageAlt: 'Programming code on a monitor' },
  { id: 7, title: 'HTML & CSS Web Design', category: 'IT · Frontend', progress: 0, lessons: '10 lessons', color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=85', imageAlt: 'Website design and responsive layout' },
  { id: 8, title: 'DevOps Foundations', category: 'IT · DevOps', progress: 0, lessons: '10 lessons', color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=85', imageAlt: 'Cloud infrastructure and DevOps technology' },
  { id: 9, title: 'Cloud Fundamentals', category: 'IT · Cloud computing', progress: 0, lessons: '10 lessons', color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85', imageAlt: 'Global digital cloud network' },
  { id: 10, title: 'Linux & Shell', category: 'IT · Systems', progress: 0, lessons: '10 lessons', color: 'orange', icon: 'code', image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=900&q=85', imageAlt: 'Linux terminal on a developer workstation' },
  { id: 11, title: 'Docker & Containers', category: 'IT · DevOps', progress: 0, lessons: '10 lessons', color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=900&q=85', imageAlt: 'Container technology concept' },
  { id: 12, title: 'Git & GitHub', category: 'IT · Developer tools', progress: 0, lessons: '10 lessons', color: 'orange', icon: 'code', image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=900&q=85', imageAlt: 'Software development collaboration' },
  { id: 13, title: 'Kubernetes Basics', category: 'IT · Cloud native', progress: 0, lessons: '10 lessons', color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=85', imageAlt: 'Cloud native infrastructure' },
  { id: 14, title: 'Generative AI Foundations to Production', category: 'AI · Generative AI', progress: 0, lessons: '8 detailed lessons', color: 'blue', icon: 'code', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85', imageAlt: 'Abstract artificial intelligence neural network visualization' },
  { id: 15, title: 'Agentic AI: Beginner to Advanced', category: 'AI · Agentic AI', progress: 0, lessons: '8 detailed lessons', color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=900&q=85', imageAlt: 'Artificial intelligence system visualization' },
  { id: 16, title: 'Data Engineering / Big Data (PySpark)', category: 'IT · Data Engineering', progress: 0, lessons: `${10 + dataEngineeringAdvancedLessons.length} lessons`, color: 'teal', icon: 'code', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85', imageAlt: 'Data analytics dashboard representing data engineering' },
]

export const activities = [
  { day: 'M', value: 35 }, { day: 'T', value: 62 }, { day: 'W', value: 46 },
  { day: 'T', value: 82 }, { day: 'F', value: 54 }, { day: 'S', value: 95 }, { day: 'S', value: 28 },
]

export const quizQuestion = {
  question: 'Which HTTP method is commonly used to retrieve a resource?',
  options: ['POST', 'GET', 'DELETE', 'PATCH'],
  answer: 1,
  explanation: 'GET retrieves a representation of a resource and should not change server state.',
}
