import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (question) {
  console.log('SAVE QUESTION')
  return _saveQuestion(question)
}

export function saveAnswer (info) {
  return _saveAnswer(info)
}