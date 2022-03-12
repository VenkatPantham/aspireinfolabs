import "date-fns";
import React, { useState } from "react";
import { Button, TextField, Box } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";
import { useStyles } from "../PublicationContent.styles";
import StepperForm from "../StepperForm";
import { ROUTE_CONTENT_PUBLICATIONS } from "../../../shared/constants/route.const";
import { useHistory, useLocation } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateRangeIcon from "@material-ui/icons/DateRange";
import CancelIcon from "@material-ui/icons/Cancel";
import { useDispatch } from "react-redux";
import { contentActions } from "../state/content.actions";
import AlertComponent from "../../../shared/components/AlertComponent";

const CaseStudies = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useLocation().state;
  const [activeStep, setActiveStep] = useState(0);
  const [data, setData] = useState(state ? state.row : { details: "" });
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [date, setDate] = useState(null);
  const history = useHistory();

  const initialValues = {
    title: data.title ? data.title : "",
    author: data.author ? data.author : "",
    date: data.date ? new Date(data.date).toDateString() : null,
    publicationType: "case study",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    author: Yup.string().required("Required"),
    date: Yup.date().nullable().required("Required"),
  });

  const formHandler = (values) => {
    setData({ ...data, ...values });
    handleNext();
  };

  const imageAddHandler = (event) => {
    let url = URL.createObjectURL(event.target.files[0]);
    setImageURL(url);
    setImage(event.target.files[0]);
  };

  const imageRemoveHandler = () => {
    setImageURL(null);
    setImage(null);
  };

  const detailsHandler = (details) => {
    setData({ ...data, details: details });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const formData = new FormData();
    Object.keys({ ...data, date: date }).map((row) =>
      formData.append(row, data[row])
    );
    formData.append("image1", image);
    dispatch(contentActions.postContent(formData));
    setTimeout(() => history.push(ROUTE_CONTENT_PUBLICATIONS.path), 1500);
  };

  const firstStep = () => (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        setDate(new Date(values.date).toISOString());
        values.date = new Date(values.date).toISOString().slice(0, 10);
        formHandler(values);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className={classes.form}
          autoComplete="off"
        >
          <TextField
            id="title"
            className={classes.formField}
            label="Title"
            {...formik.getFieldProps("title")}
            error={formik.touched.title && formik.errors.title}
            helperText={formik.touched.title ? formik.errors.title : null}
          />
          <TextField
            id="author"
            className={classes.formField}
            label="Author"
            {...formik.getFieldProps("author")}
            error={formik.touched.author && formik.errors.author}
            helperText={formik.touched.author ? formik.errors.author : null}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Box className={classes.datePicker}>
              <DatePicker
                id="date"
                className={classes.formField}
                style={{ margin: "12px 0" }}
                label="Date"
                format="dd/MM/yyyy"
                showTodayButton
                value={formik.values.date}
                onChange={(value) => formik.setFieldValue("date", value)}
                error={formik.touched.date && formik.errors.date}
                helperText={formik.touched.date ? formik.errors.date : null}
              />
              <DateRangeIcon className={classes.calendarIcon} />
            </Box>
          </MuiPickersUtilsProvider>
          <Box
            className={classes.imageBlock}
            style={{ display: image ? "flex" : "none" }}
          >
            <img
              src={imageURL}
              alt="uploaded_photo"
              className={classes.image}
            />
            <CancelIcon
              className={classes.closeIcon}
              fontSize="large"
              onClick={imageRemoveHandler}
            />
          </Box>
          <div className={classes.buttons}>
            <label for="upload-photo" className={classes.imageButton}>
              Upload an Image
            </label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              onChange={imageAddHandler}
              style={{
                display: "none",
              }}
            />
            <Button
              variant="contained"
              type="submit"
              className={classes.button}
            >
              Next
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );

  return (
    <>
      <StepperForm
        activeStep={activeStep}
        data={data}
        image={imageURL}
        firstStep={firstStep}
        detailsHandler={detailsHandler}
        handleNext={handleNext}
        handleBack={handleBack}
        handleSubmit={handleSubmit}
      />
      <AlertComponent />
    </>
  );
};

export default CaseStudies;
