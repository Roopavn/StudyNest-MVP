export const tracks = [
  { id: 'it', title: 'IT & technology', subtitle: 'Grow practical, job-ready skills', icon: 'code', color: 'teal', topics: 28 },
]

export const initialTasks = [
  { id: 1, title: 'Review Python decorators', detail: 'Python · 20 min', done: false },
  { id: 2, title: 'Solve 5 SQL query problems', detail: 'SQL · 30 min', done: false },
  { id: 3, title: 'Practice REST API status codes', detail: 'REST APIs · 15 min', done: false },
]

export const courses = [
  { id: 1, title: 'Python Foundations', category: 'IT · Programming', progress: 76, lessons: '19 of 25 lessons', color: 'teal', icon: 'code' },
  { id: 2, title: 'Database & SQL Essentials', category: 'IT · Data skills', progress: 51, lessons: '12 of 24 lessons', color: 'teal', icon: 'code' },
  { id: 3, title: 'REST API Development', category: 'IT · Backend', progress: 60, lessons: '15 of 25 lessons', color: 'blue', icon: 'code' },
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
