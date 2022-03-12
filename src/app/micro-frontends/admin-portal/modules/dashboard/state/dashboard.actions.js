import { dashboardActionTypes } from "./dashboard.types";
import { dashboardService } from "./dashboard.service";
import { alertActions } from "../../../shared/components/alert/alert.actions";

export const dashboardActions = {
  fetchDashboard,
  changeStatus,
};

function fetchDashboard(type) {
  return (dispatch) => {
    dispatch(request());
    dashboardService.fetchDashboard(type).then(
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
    return { type: dashboardActionTypes.FETCH_REQUEST };
  }
  function success(response) {
    return { type: dashboardActionTypes.FETCH_SUCCESS, response };
  }
  function failure(error) {
    return { type: dashboardActionTypes.FETCH_FAILURE, error };
  }
}

function changeStatus(type, id, status) {
  return (dispatch) => {
    dispatch(request());
    dashboardService.changeStatus(type, id, status).then(
      (response) => {
        dispatch(success());
        dispatch(dashboardActions.fetchDashboard(type));
        dispatch(alertActions.success("Status is updated successfully."));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request() {
    return { type: dashboardActionTypes.STATUS_REQUEST };
  }
  function success() {
    return { type: dashboardActionTypes.STATUS_SUCCESS };
  }
  function failure(error) {
    return { type: dashboardActionTypes.STATUS_FAILURE, error };
  }
}
