import { dashboardActionTypes } from "./dashboard.types";

const initialState = {
  loading: false,
  items: [],
  error: "",
};

export default function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case dashboardActionTypes.FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case dashboardActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.response,
      };
    case dashboardActionTypes.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case dashboardActionTypes.STATUS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case dashboardActionTypes.STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case dashboardActionTypes.STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
