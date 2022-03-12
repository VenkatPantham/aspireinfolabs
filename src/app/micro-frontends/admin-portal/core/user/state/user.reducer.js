import { userActionTypes } from "./user.types";

const initialState = {
  loading: false,
  items: {},
  error: "",
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.GETALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case userActionTypes.GETALL_SUCCESS:
      return {
        ...state,
        items: action.users,
      };
    case userActionTypes.GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case userActionTypes.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map((user) =>
          user.id === action.id ? { ...user, deleting: true } : user
        ),
      };
    case userActionTypes.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        ...state,
        items: state.items.filter((user) => user.id !== action.id),
      };
    case userActionTypes.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        items: state.items.map((user) => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }
          return user;
        }),
      };
    default:
      return state;
  }
}
