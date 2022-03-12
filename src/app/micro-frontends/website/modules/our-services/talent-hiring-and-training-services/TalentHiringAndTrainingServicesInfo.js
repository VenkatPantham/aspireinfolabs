import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../../assets/styles/layoutStyles";
import { TALENT_HIRING_AND_TRAINING_CONTENT } from "./TalentHiringAndServices.content";

const useTalentHiringAndTrainingServicesStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightBackground.main,
    padding: "5%",
  },
  textSection: {
    textAlign: "center",
    padding: "3%",
  },
  text: {
    padding: theme.spacing(1),
    fontWeight: "bold",
    margin: "auto",
    width: "75%",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
    },
  },
  subText: {
    padding: theme.spacing(1),
  },
  buttons: {
    padding: theme.spacing(2),
    justifyContent: "center",
    [theme.breakpoints.up("xs")]: {
      justifyContent: "space-around",
    },
  },
  button: {
    textTransform: "none",
    margin: theme.spacing(2),
  },
}));

function TalentHiringAndTrainingServicesInfo() {
  const classes = useTalentHiringAndTrainingServicesStyles();
  const layoutStyles = useLayoutStyles();

  return (
    <Grid
      conatiner
      direction="row"
      align="center"
      className={clsx(classes.root, layoutStyles.mediumSection)}
    >
      <Grid item xs={10} md={8} className={classes.textSection}>
        <Typography variant="h2" className={classes.text}>
          {TALENT_HIRING_AND_TRAINING_CONTENT.title}
        </Typography>
        <Typography variant="subtitle1" className={classes.subText}>
          {TALENT_HIRING_AND_TRAINING_CONTENT.text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TalentHiringAndTrainingServicesInfo;
