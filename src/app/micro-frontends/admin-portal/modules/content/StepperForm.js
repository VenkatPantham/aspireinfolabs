import React from "react";
import {
  Button,
  Stepper,
  Step,
  StepLabel,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import TextEditor from "./TextEditor";
import { useStyles } from "./PublicationContent.styles";

const steps = ["Add Details", "Add Content", "Submit"];

const StepperForm = ({
  activeStep,
  data,
  image,
  firstStep,
  detailsHandler,
  handleNext,
  handleBack,
  handleSubmit,
}) => {
  const classes = useStyles();

  const stepperHandler = () => {
    switch (activeStep) {
      case 0:
        return firstStep();
      case 1:
        return secondStep();
      case 2:
        return thirdStep();
      default:
        return;
    }
  };

  const secondStep = () => (
    <TextEditor
      details={data.details}
      detailsHandler={detailsHandler}
      handleBack={handleBack}
      handleNext={handleNext}
    />
  );

  const thirdStep = () => (
    <>
      <Grid container className={classes.stepperData}>
        {Object.keys(data).map((row, index) => (
          <>
            <Grid item xs={12} sm={4}>
              <Typography className={classes.stepperHeads}>{row}</Typography>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Typography dangerouslySetInnerHTML={{ __html: data[row] }} />
            </Grid>
          </>
        ))}
        <Grid
          item
          xs={12}
          className={classes.imageSection}
          style={{ display: image ? "block" : "none" }}
        >
          <img src={image} className={classes.image} alt="uploaded_photo" />
        </Grid>
      </Grid>
      <Container className={classes.buttons}>
        <Button
          variant="contained"
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          className={classes.button}
        >
          Finish
        </Button>
      </Container>
    </>
  );

  return (
    <Container className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {stepperHandler()}
    </Container>
  );
};

export default StepperForm;
