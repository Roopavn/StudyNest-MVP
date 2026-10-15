import test from 'node:test'
import assert from 'node:assert/strict'
import { courses, initialTasks, quizQuestion } from '../src/data.js'

test('course catalog has unique IDs and readable lesson counts', () => {
  const ids = courses.map((course) => course.id)
  assert.equal(new Set(ids).size, ids.length, 'course IDs must be unique')
  assert.ok(courses.length >= 15, 'the catalog should include the main learning tracks')
  for (const course of courses) {
    assert.ok(course.title.trim(), 'each course needs a title')
    assert.match(course.lessons, /^\d+\s+(lessons?|detailed lessons)$/i, `invalid lesson count for ${course.title}`)
  }
})

test('starter study tasks have the expected shape', () => {
  assert.ok(initialTasks.length > 0)
  for (const task of initialTasks) {
    assert.ok(task.id !== undefined)
    assert.ok(task.title.trim())
    assert.ok(task.detail.trim())
    assert.equal(typeof task.done, 'boolean')
  }
})

test('sample quiz answer points to a valid option', () => {
  assert.ok(quizQuestion.options.length >= 2)
  assert.ok(Number.isInteger(quizQuestion.answer))
  assert.ok(quizQuestion.answer >= 0 && quizQuestion.answer < quizQuestion.options.length)
  assert.match(quizQuestion.explanation, /GET|retriev/i)
})
