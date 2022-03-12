import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import clsx from "clsx";
import DisplayPersonsList from "../../shared/components/DisplayPersonsList";
import { advisorsData } from "./OurAdvisors.data";
import { ADVISORS } from "./AboutUs.content";

const useOurAdvisorsStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightBackground.main,
    padding: "5%",
    paddingTop: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    padding: theme.spacing(2),
  },
  subHeading: {
    padding: "5%",
    paddingTop: 0,
    textAlign: "center",
  },
}));

function OurAdvisors() {
  const classes = useOurAdvisorsStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Container className={clsx(classes.root, layoutStyles.mediumSection)}>
      <Typography variant="h3" className={classes.heading}>
        Our <i>Advisors</i>
      </Typography>
      <Typography variant="subtitle1" className={classes.subHeading}>
        {ADVISORS.text}
      </Typography>
      <DisplayPersonsList personsList={advisorsData} />
    </Container>
  );
}

export default OurAdvisors;
