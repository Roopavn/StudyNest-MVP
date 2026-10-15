// Combined course lesson export used by LearningCenter.
// Course-specific curricula are maintained separately so each track can grow independently.
import { courseDeepLessons as baseCourseDeepLessons } from './courseDeepLessonsBase'
import { sqlCourseLessons } from './sqlCourseLessons'
import { djangoCourseLessons } from './djangoCourseLessons'

export const courseDeepLessons = [
  ...baseCourseDeepLessons,
  ...sqlCourseLessons,
  ...djangoCourseLessons,
]
