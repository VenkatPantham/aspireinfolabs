import { alertActionTypes } from "./alert.types";

const initialState = {
  alertType: "",
  message: "",
  displayAlert: false,
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case alertActionTypes.SUCCESS:
      return {
        ...state,
        alertType: "success",
        message: action.message,
        displayAlert: true,
      };
    case alertActionTypes.ERROR:
      return {
        ...state,
        alertType: "error",
        message: action.message,
        displayAlert: true,
      };
    case alertActionTypes.CLEAR:
      return { ...state, ...initialState };
    default:
      return state;
  }
}
