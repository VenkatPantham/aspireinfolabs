import { userActionTypes } from "./user.types";
import { userService } from "../user.service";
import { alertActions } from "../../../shared/components/alert/alert.actions";
import history from "../../../../../routes/history";

export const userActions = {
  login,
  logout,
  getAll,
  delete: _delete,
};

function login(username, password, from) {
  return (dispatch) => {
    dispatch(request({ username }));
    userService.login(username, password).then(
      (user) => {
        dispatch(success(user));
        dispatch(alertActions.success("You're loggedin successfully"));
        sessionStorage.setItem("token", user.headers.authorization);
        history.push(from);
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userActionTypes.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userActionTypes.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userActionTypes.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  sessionStorage.clear();
  return { type: userActionTypes.LOGOUT };
}

function getAll() {
  return (dispatch) => {
    dispatch(request());

    userService.getAll().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: userActionTypes.GETALL_REQUEST };
  }
  function success(users) {
    return { type: userActionTypes.GETALL_SUCCESS, users };
  }
  function failure(error) {
    return { type: userActionTypes.GETALL_FAILURE, error };
  }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
  return (dispatch) => {
    dispatch(request(id));

    userService.delete(id).then(
      (user) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: userActionTypes.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: userActionTypes.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: userActionTypes.DELETE_FAILURE, id, error };
  }
}
