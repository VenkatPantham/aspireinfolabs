import { contentActionTypes } from "./content.types";
import { contentService } from "./content.service";
import { alertActions } from "../../../shared/components/alert/alert.actions";

export const contentActions = {
  fetchContent,
  postContent,
  editContent,
  deleteContent,
};

function fetchContent() {
  return (dispatch) => {
    dispatch(request());
    contentService.fetchContent().then(
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
    return { type: contentActionTypes.FETCH_REQUEST };
  }
  function success(response) {
    return { type: contentActionTypes.FETCH_SUCCESS, response };
  }
  function failure(error) {
    return { type: contentActionTypes.FETCH_FAILURE, error };
  }
}

function postContent(formData) {
  return (dispatch) => {
    dispatch(request());
    contentService.postContent(formData).then(
      (response) => {
        dispatch(success());
        dispatch(contentActions.fetchContent());
        dispatch(alertActions.success("Publication is posted successfully"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: contentActionTypes.POST_REQUEST };
  }
  function success() {
    return { type: contentActionTypes.POST_SUCCESS };
  }
  function failure(error) {
    return { type: contentActionTypes.POST_FAILURE, error };
  }
}

function editContent(formData) {
  return (dispatch) => {
    dispatch(request());
    contentService.editContent(formData).then(
      (response) => {
        dispatch(success());
        dispatch(contentActions.fetchContent());
        dispatch(alertActions.success("Publication is updated successfully"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: contentActionTypes.EDIT_REQUEST };
  }
  function success() {
    return { type: contentActionTypes.EDIT_SUCCESS };
  }
  function failure(error) {
    return { type: contentActionTypes.EDIT_FAILURE, error };
  }
}

function deleteContent(id) {
  return (dispatch) => {
    dispatch(request());
    contentService.deleteContent(id).then(
      (response) => {
        dispatch(success());
        dispatch(contentActions.fetchContent());
        dispatch(alertActions.success("Publication is deleted successfully"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: contentActionTypes.DELETE_REQUEST };
  }
  function success() {
    return { type: contentActionTypes.DELETE_SUCCESS };
  }
  function failure(error) {
    return { type: contentActionTypes.DELETE_FAILURE, error };
  }
}
