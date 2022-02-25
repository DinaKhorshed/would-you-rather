import {
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION,
  ANSWER_QUESTION,
  RECEIVE_QUESTIONS,
  UNDO_QUESTION_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_ANSWER_TO_QUESTION:
      const { loggedInUser, QuestionID, answer } = action;

      return {
        ...state,
        [QuestionID]: {
          ...state[QuestionID],
          [answer]: {
            ...state[QuestionID][answer],
            votes: state[QuestionID][answer].votes.concat(loggedInUser),
          },
        },
      };
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION: {
      const { loggedInUser, QuestionID, answer } = action;
      return {
        ...state,
        [QuestionID]: {
          ...state[QuestionID],
          [answer]: {
            ...state[QuestionID][answer],
            votes: state[QuestionID][answer].votes.concat([loggedInUser]),
          },
        },
      };
    }
    case UNDO_QUESTION_ANSWER: {
      const { loggedInUser, QuestionID, answer } = action;
      return {
        ...state,
        [QuestionID]: {
          ...state[QuestionID],
          [answer]: {
            votes: state.questions[QuestionID][answer].filter(
              (user) => user !== loggedInUser
            ),
          },
        },
      };
    }
    default:
      return state;
  }
}
