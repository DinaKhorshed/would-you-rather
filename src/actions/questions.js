import { saveQuestion, saveAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'


export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const UNDO_QUESTION_ANSWER = 'UNDO_QUESTION_ANSWER'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { loggedInUser } = getState()
    dispatch(showLoading)
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: loggedInUser,
    })
    .then(question => dispatch(addQuestion(question)))
    .then(() => dispatch(hideLoading()))
  }
}

function answerQuestion ({ loggedInUser, QuestionID, answer }) {
  return {
    type: ANSWER_QUESTION,
    loggedInUser,
    QuestionID,
    answer,
  }
}

function undoQuestionAnswer ({ loggedInUser, QuestionID, answer }) {
  return {
    type: UNDO_QUESTION_ANSWER,
    loggedInUser,
    QuestionID,
    answer,
  }
}

export function handleAnswerQuestion(info) {
  return dispatch => {
    dispatch(answerQuestion(info))
    return saveAnswer(info)
      .catch(e => {
      console.error('There was an error answering the question. Try again, Error Code: ', e)
      dispatch(undoQuestionAnswer(info))
    })
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}