import { contentActionTypes } from "./content.types";

const initialState = {
  loading: false,
  items: [],
  error: "",
};

export default function contentReducer(state = initialState, action) {
  switch (action.type) {
    case contentActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case contentActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.response,
      };
    case contentActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case contentActionTypes.POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case contentActionTypes.POST_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case contentActionTypes.POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case contentActionTypes.EDIT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case contentActionTypes.EDIT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case contentActionTypes.EDIT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case contentActionTypes.DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case contentActionTypes.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case contentActionTypes.DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
