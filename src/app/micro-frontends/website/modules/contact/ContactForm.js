import React, { useState } from "react";
import {
  Button,
  Container,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import FormDialog from "../../shared/components/FormDialog";
import { BASE_URL } from "../../../../shared/constants/api.const";
import axios from "axios";
import { FORM } from "./Contact.content";

const useContactFormStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: "5%",
    alignSelf: "flex-end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.up("sm")]: {
      height: "90vh",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "20vw",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      padding: "0 10%",
    },
  },
  formHeader: {
    fontWeight: "bold",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2),
  },
  formField: {
    width: "100%",
    margin: theme.spacing(1),
    fontSize: theme.typography.subtitle1.fontSize,
    textAlign: "left",
  },
  button: {
    textTransform: "none",
    fontWeight: "bold",
    fontSize: theme.typography.subtitle1.fontSize,
    margin: theme.spacing(2),
    backgroundColor: "black",
    color: theme.palette.secondary.main,
  },
  menuItem: {
    justifyContent: "center",
  },
}));

function ContactForm() {
  const classes = useContactFormStyles();
  const [open, setOpen] = useState(() => false);
  const [buttonDisabled, setButtonDisabled] = useState(() => false);

  const handleDialog = () => {
    setOpen(false);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h4" className={classes.formHeader}>
        {FORM.heading}
      </Typography>
      <FormDialog open={open} handleDialog={handleDialog} />
      <Formik
        initialValues={{
          clientName: "",
          clientEmailId: "",
          clientContact: "",
          typeOfQuery: "",
          queryMessage: "",
          queryStatus: "Pending",
          date: new Date().toISOString(),
        }}
        validationSchema={Yup.object({
          clientName: Yup.string()
            .max(130, "Must be 30 characters or less")
            .required("Required"),
          clientEmailId: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          clientContact: Yup.string()
            .matches(
              /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
              "Invalid phone number"
            )
            .required("Required"),
          typeOfQuery: Yup.string().required("Required"),
          queryMessage: Yup.string().required("Required"),
        })}
        onSubmit={(values, { resetForm }) => {
          setButtonDisabled(true);
          axios
            .post(`${BASE_URL}/website/query/contactQuery`, values, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => {
              setOpen(true);
              resetForm();
              setButtonDisabled(false);
            })
            .catch((error) => {
              setButtonDisabled(false);
            });
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.form}
            autoComplete="off"
          >
            <TextField
              id="clientName"
              className={classes.formField}
              label="Your Name"
              {...formik.getFieldProps("clientName")}
              error={formik.touched.clientName && formik.errors.clientName}
              helperText={
                formik.touched.clientName ? formik.errors.clientName : null
              }
            />
            <TextField
              id="clientEmailId"
              className={classes.formField}
              label="Email ID"
              {...formik.getFieldProps("clientEmailId")}
              error={
                formik.touched.clientEmailId && formik.errors.clientEmailId
              }
              helperText={
                formik.touched.clientEmailId
                  ? formik.errors.clientEmailId
                  : null
              }
            />
            <TextField
              id="clientContact"
              className={classes.formField}
              label="Phone Number"
              {...formik.getFieldProps("clientContact")}
              error={
                formik.touched.clientContact && formik.errors.clientContact
              }
              helperText={
                formik.touched.clientContact
                  ? formik.errors.clientContact
                  : null
              }
            />
            <TextField
              id="typeOfQuery"
              select
              className={classes.formField}
              label="Type of Query"
              {...formik.getFieldProps("typeOfQuery")}
              error={formik.touched.typeOfQuery && formik.errors.typeOfQuery}
              helperText={
                formik.touched.typeOfQuery ? formik.errors.typeOfQuery : null
              }
            >
              <MenuItem value={"Business Enquiry"} className={classes.menuItem}>
                Business Enquiry
              </MenuItem>
              <MenuItem value={"College Enquiry"} className={classes.menuItem}>
                College Enquiry
              </MenuItem>
              <MenuItem value={"Student Enquiry"} className={classes.menuItem}>
                Student Enquiry
              </MenuItem>
            </TextField>
            <TextField
              id="queryMessage"
              className={classes.formField}
              label="Your Message"
              {...formik.getFieldProps("queryMessage")}
              error={formik.touched.queryMessage && formik.errors.queryMessage}
              helperText={
                formik.touched.queryMessage ? formik.errors.queryMessage : null
              }
            />
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
              disabled={buttonDisabled}
            >
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Container>
  );
}

export default ContactForm;
