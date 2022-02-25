import { saveQuestionAnswer } from "../utils/api";
import { addAnswerToQuestion } from "../actions/questions";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER_ANSWERS = "UPDATE_USER_ANSWERS";
export const UPDATE_USER_QUESTIONS = "UPDATE_USER_QUESTIONS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
function updateUserAnswers(loggedInUser, QuestionID, answer) {
  return {
    type: UPDATE_USER_ANSWERS,
    loggedInUser,
    QuestionID,
    answer,
  };
}

export function handleSaveQuestionAnswer(loggedInUser, QuestionID, answer) {
  return (dispatch) => {
    dispatch(updateUserAnswers(loggedInUser, QuestionID, answer));
    dispatch(addAnswerToQuestion(loggedInUser, QuestionID, answer));

    return saveQuestionAnswer(loggedInUser, QuestionID, answer).catch((e) => {
      console.warn("Error in handleSaveQuestionAnswer:", e);
    });
  };
}

export function updateUserQuestions({ id, author }) {
  return {
    type: UPDATE_USER_QUESTIONS,
    id,
    author,
  };
}
