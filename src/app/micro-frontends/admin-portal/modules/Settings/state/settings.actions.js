import { settingsActionTypes } from "./settings.types";
import { settingsService } from "./settings.service";
import { alertActions } from "../../../shared/components/alert/alert.actions";

export const settingsActions = {
  fetchMails,
  addMail,
  editMail,
  deleteMail,
};

function fetchMails() {
  return (dispatch) => {
    dispatch(request());
    settingsService.fetchMails().then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: settingsActionTypes.FETCH_REQUEST };
  }
  function success(response) {
    return { type: settingsActionTypes.FETCH_SUCCESS, response };
  }
  function failure(error) {
    return { type: settingsActionTypes.FETCH_FAILURE, error };
  }
}

function addMail(data) {
  return (dispatch) => {
    dispatch(request());
    settingsService.addMail(data).then(
      (response) => {
        dispatch(success());
        dispatch(settingsActions.fetchMails());
        dispatch(alertActions.success("MailId is successfully subscribed."));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: settingsActionTypes.ADD_REQUEST };
  }
  function success() {
    return { type: settingsActionTypes.ADD_SUCCESS };
  }
  function failure(error) {
    return { type: settingsActionTypes.ADD_FAILURE, error };
  }
}

function editMail(data) {
  return (dispatch) => {
    dispatch(request());
    settingsService.editMail(data).then(
      (response) => {
        dispatch(success());
        dispatch(settingsActions.fetchMails());
        dispatch(alertActions.success("Details are successfully updated."));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: settingsActionTypes.EDIT_REQUEST };
  }
  function success() {
    return { type: settingsActionTypes.EDIT_SUCCESS };
  }
  function failure(error) {
    return { type: settingsActionTypes.EDIT_FAILURE, error };
  }
}

function deleteMail(id) {
  return (dispatch) => {
    dispatch(request());
    settingsService.deleteMail(id).then(
      (response) => {
        dispatch(success());
        dispatch(settingsActions.fetchMails());
        dispatch(alertActions.success("MailId is successfully unsubscribed."));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: settingsActionTypes.DELETE_REQUEST };
  }
  function success() {
    return { type: settingsActionTypes.DELETE_SUCCESS };
  }
  function failure(error) {
    return { type: settingsActionTypes.DELETE_FAILURE, error };
  }
}
