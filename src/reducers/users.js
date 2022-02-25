import {
  RECEIVE_USERS,
  UPDATE_USER_QUESTIONS,
  UPDATE_USER_ANSWERS,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_USER_ANSWERS:
      const { loggedInUser, QuestionID, answer } = action;

      return {
        ...state,
        [loggedInUser]: {
          ...state[loggedInUser],
          answers: {
            ...state[loggedInUser].answers,
            [QuestionID]: answer,
          },
        },
      };
    case UPDATE_USER_QUESTIONS:
      const { id, author } = action;

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
}
