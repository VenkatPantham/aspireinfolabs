import React, { useEffect } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { ASPIRE_LOGO } from "../../../../shared/images/aspireLogos";
import { Formik } from "formik";
import * as Yup from "yup";
import { LOGIN_BACKGROUND_IMAGE } from "../../shared/images/commonImages";
import { userActions } from "./state/user.actions";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useStyles } from "./Login.styles";
import AlertComponent from "../../shared/components/AlertComponent";

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();

  // reset login status
  useEffect(() => dispatch(userActions.logout()), []);

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Password Required"),
  });

  function handleSubmit({ email, password }) {
    if (email && password) {
      // get return url from location state or default to home page
      const { from } = location.state || {
        from: { pathname: "/admin/dashboard" },
      };
      dispatch(userActions.login(email, password, from));
    }
  }

  return (
    <Grid
      container
      className={classes.root}
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item xs={12} sm={6} className={classes.imageSection}>
        <img
          src={LOGIN_BACKGROUND_IMAGE}
          alt=""
          className={classes.loginImage}
        />
      </Grid>
      <Grid item xs={12} sm={5} className={classes.formSection}>
        <img src={ASPIRE_LOGO} alt="Aspire Logo" className={classes.formLogo} />
        <Typography variant="body1" className={classes.formHeader}>
          Welcome Aspire Warriors!
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values);
            resetForm();
          }}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className={classes.form}
              autoComplete="off"
            >
              <TextField
                id="email"
                className={classes.formField}
                label="Email ID"
                {...formik.getFieldProps("email")}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email ? formik.errors.email : null}
              />
              <TextField
                id="password"
                className={classes.formField}
                type="password"
                label="Password"
                {...formik.getFieldProps("password")}
                error={formik.touched.password && formik.errors.password}
                helperText={
                  formik.touched.password ? formik.errors.password : null
                }
              />
              <Button
                variant="contained"
                type="submit"
                className={classes.button}
              >
                <Typography variant="subtitle1">Log in</Typography>
              </Button>
            </form>
          )}
        </Formik>
      </Grid>
      <AlertComponent />
    </Grid>
  );
};

export default Login;
