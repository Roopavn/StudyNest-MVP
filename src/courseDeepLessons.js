// Combined course lesson export used by LearningCenter.
import { courseDeepLessons as baseCourseDeepLessons } from './courseDeepLessonsBase'
import { sqlCourseLessons } from './sqlCourseLessons'
import { djangoCourseLessons } from './djangoCourseLessons'
import { flaskCourseLessons } from './flaskCourseLessons'
import { fastapiCourseLessons } from './fastapiCourseLessons'
import { drfCourseLessons } from './drfCourseLessons'
import { machineLearningCourseLessons } from './machineLearningCourseLessons'
import { dataScienceCourseLessons } from './dataScienceCourseLessons'
import { dataAnalystCourseLessons } from './dataAnalystCourseLessons'
import { ecosystemCourseLessons } from './ecosystemCourseLessons'
import { cCourseLessons } from './cCourseLessons'

export const courseDeepLessons = [
  ...baseCourseDeepLessons,
  ...sqlCourseLessons,
  ...djangoCourseLessons,
  ...flaskCourseLessons,
  ...fastapiCourseLessons,
  ...drfCourseLessons,
  ...machineLearningCourseLessons,
  ...dataScienceCourseLessons,
  ...dataAnalystCourseLessons,
  ...ecosystemCourseLessons,
  ...cCourseLessons,
]
