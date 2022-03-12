import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import clsx from "clsx";
import { INFO } from "./AboutUs.content";

// To-Do : redundant styles in component. refactor it with home services component.
const useAboutUsInfoStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightBackground.main,
    textAlign: "center",
    padding: "5%",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
  },
  heading: {
    fontWeight: "bold",
    padding: theme.spacing(1),
  },
  text: {
    padding: theme.spacing(1),
  },
}));

function AboutUsInfo() {
  const classes = useAboutUsInfoStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Container className={clsx(classes.root, layoutStyles.smallSection)}>
      <Typography variant="h3" className={classes.heading}>
        We’re truly <i>one</i> of a kind
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        {INFO.firstText}
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        {INFO.secondText}
      </Typography>
    </Container>
  );
}

export default AboutUsInfo;
