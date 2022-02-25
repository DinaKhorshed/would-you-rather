import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveAnswer,
  _saveQuestionAnswer,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
}

export function saveQuestion(question) {
  console.log("SAVE QUESTION");
  return _saveQuestion(question);
}

export function saveAnswer(info) {
  return _saveAnswer(info);
}

export function saveQuestionAnswer(loggedInUser, QuestionID, answer) {
  return _saveQuestionAnswer({ loggedInUser, QuestionID, answer });
}
