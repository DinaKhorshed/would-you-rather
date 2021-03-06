import { SET_AUTHED_USER } from "../actions/loggedInUser";

export default function loggedInUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
