import { userActionTypes } from "./user.types";

let user = JSON.parse(sessionStorage.getItem("user"));
const initialState = {
  user: user ? user : {},
  loggedIn: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loggedIn: false,
        user: action.user,
      };
    case userActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user,
      };
    case userActionTypes.LOGIN_FAILURE:
      return { ...state, ...initialState };
    case userActionTypes.LOGOUT:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
