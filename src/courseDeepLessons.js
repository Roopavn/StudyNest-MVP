// Combined course lesson export used by LearningCenter.
// The existing deep curriculum is preserved in courseDeepLessonsBase.js and the
// SQL curriculum is maintained separately so course-specific updates stay manageable.
import { courseDeepLessons as baseCourseDeepLessons } from './courseDeepLessonsBase'
import { sqlCourseLessons } from './sqlCourseLessons'

export const courseDeepLessons = [
  ...baseCourseDeepLessons,
  ...sqlCourseLessons,
]
