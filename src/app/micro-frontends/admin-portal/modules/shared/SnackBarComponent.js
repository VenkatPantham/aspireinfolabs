import React from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar } from "@material-ui/core";

const SnackBarComponent = ({ snack, alert, message, handleClose }) => {
  return (
    <Snackbar open={snack} autoHideDuration={5000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={alert}
        style={{ alignItems: "center" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBarComponent;
