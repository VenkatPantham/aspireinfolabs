import React, { useRef } from "react";
import PropTypes from "prop-types";
import { useStyles } from "./Settings.styles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { settingsActions } from "./state/settings.actions";

const SettingsForm = ({ open, handleClickClose, data, edit }) => {
  const classes = useStyles();
  const state = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const submitButton = useRef(null);

  const initialValues = {
    name: data.name,
    emailId: data.emailId,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    emailId: Yup.string().email("Invalid email address").required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(
      edit
        ? settingsActions.editMail({ ...values, id: data.id })
        : settingsActions.addMail(values)
    );
    handleClickClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClickClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <TextField
                margin="dense"
                id="name"
                label="Full Name"
                fullWidth
                {...formik.getFieldProps("name")}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name ? formik.errors.name : null}
              />
              <TextField
                margin="dense"
                id="emailId"
                label="Email Address"
                type="email"
                fullWidth
                {...formik.getFieldProps("emailId")}
                error={formik.touched.emailId && formik.errors.emailId}
                helperText={
                  formik.touched.emailId ? formik.errors.emailId : null
                }
              />
              <Button
                ref={submitButton}
                type="submit"
                style={{ display: "none" }}
              >
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClickClose}
          className={classes.button}
          disabled={state.loading}
        >
          Cancel
        </Button>
        <Button
          onClick={() => submitButton.current.click()}
          className={classes.button}
          disabled={state.loading}
        >
          {edit ? "Update" : "Subscribe"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

SettingsForm.propTypes = {
  open: PropTypes.bool,
  edit: PropTypes.bool,
  data: PropTypes.object,
  handleClickClose: PropTypes.func,
};

export default SettingsForm;
