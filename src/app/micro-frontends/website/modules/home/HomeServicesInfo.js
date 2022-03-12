import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import { HOME_SERVICES } from "./Home.content";

const useHomeServicesStyles = makeStyles((theme) => ({
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

function HomeServicesInfo() {
  const classes = useHomeServicesStyles();
  const layoutStyles = useLayoutStyles();

  return (
    <Grid
      conatiner
      direction="row"
      align="center"
      className={clsx(classes.root, layoutStyles.mediumSection)}
    >
      <Grid item xs={10} md={8} className={classes.textSection}>
        <Typography variant="subtitle1" className={classes.subText}>
          {HOME_SERVICES.text}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default HomeServicesInfo;
