export const tracks = [
  { id: 'upsc', title: 'UPSC preparation', subtitle: 'Build your civil services foundation', icon: 'landmark', color: 'blue', topics: 42 },
  { id: 'it', title: 'IT & technology', subtitle: 'Grow practical, job-ready skills', icon: 'code', color: 'teal', topics: 28 },
]

export const initialTasks = [
  { id: 1, title: 'Revise Fundamental Rights', detail: 'Polity · 25 min', done: true },
  { id: 2, title: 'Practice Indian Geography quiz', detail: 'Geography · 15 min', done: false },
  { id: 3, title: 'Read today’s current affairs', detail: 'Current affairs · 20 min', done: false },
  { id: 4, title: 'Review Python decorators', detail: 'IT course · 20 min', done: false },
]

export const courses = [
  { id: 1, title: 'Indian Polity', category: 'UPSC · GS Paper 2', progress: 68, lessons: '17 of 25 lessons', color: 'blue', icon: 'landmark' },
  { id: 2, title: 'Modern Indian History', category: 'UPSC · GS Paper 1', progress: 42, lessons: '8 of 19 lessons', color: 'orange', icon: 'book-open' },
  { id: 3, title: 'Python Foundations', category: 'IT · Programming', progress: 76, lessons: '19 of 25 lessons', color: 'teal', icon: 'code' },
]

export const activities = [
  { day: 'M', value: 35 }, { day: 'T', value: 62 }, { day: 'W', value: 46 },
  { day: 'T', value: 82 }, { day: 'F', value: 54 }, { day: 'S', value: 95 }, { day: 'S', value: 28 },
]

export const quizQuestion = {
  question: 'Which Article of the Indian Constitution guarantees the Right to Life and Personal Liberty?',
  options: ['Article 14', 'Article 19', 'Article 21', 'Article 32'],
  answer: 2,
  explanation: 'Article 21 states that no person shall be deprived of life or personal liberty except according to procedure established by law.',
}