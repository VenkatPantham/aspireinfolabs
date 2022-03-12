import React from "react";
import { Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useSelector, useDispatch } from "react-redux";
import { alertActions } from "./alert/alert.actions";

const AlertComponent = () => {
  const { alertType, message, displayAlert } = useSelector(
    (state) => state.alert
  );
  const dispatch = useDispatch();

  return (
    <Snackbar
      open={displayAlert}
      autoHideDuration={5000}
      onClose={() => dispatch(alertActions.clear())}
    >
      <Alert
        onClose={() => dispatch(alertActions.clear())}
        severity={alertType}
        style={{ alignItems: "center" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default AlertComponent;
