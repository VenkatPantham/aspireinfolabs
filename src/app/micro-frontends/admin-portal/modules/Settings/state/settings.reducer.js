import { settingsActionTypes } from "./settings.types";

const initialState = {
  loading: false,
  items: [],
  error: "",
};

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case settingsActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case settingsActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.response,
      };
    case settingsActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case settingsActionTypes.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case settingsActionTypes.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case settingsActionTypes.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case settingsActionTypes.EDIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case settingsActionTypes.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case settingsActionTypes.EDIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case settingsActionTypes.DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case settingsActionTypes.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case settingsActionTypes.DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
