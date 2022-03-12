import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const FormDialog = ({ open, handleDialog }) => {
  return (
    <Dialog
      open={open}
      onClose={handleDialog}
      style={{ textAlign: "center" }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Thank you for contacting us!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          We'll get back to you soon.
        </DialogContentText>
      </DialogContent>
      <DialogActions
        style={{
          justifyContent: "center",
        }}
      >
        <Button
          onClick={handleDialog}
          variant="contained"
          color="secondary"
          autoFocus
        >
          Okay
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
