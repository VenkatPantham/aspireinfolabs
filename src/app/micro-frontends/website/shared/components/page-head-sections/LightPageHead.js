import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import PageHeadSection from "./PageHeadSection";

const useLightPageHeadStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(10),
    },
  },
  background: {
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up("sm")]: {
      borderTopLeftRadius: theme.spacing(10),
    },
  },
  heading: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  subHeading: {
    color: theme.palette.info.main,
    marginTop: "5%",
  },
  button: {
    color: "black",
    textDecoration: "underline",
  },
}));

function LightPageHead(props) {
  const classes = useLightPageHeadStyles();
  return (
    <Container className={classes.root}>
      <PageHeadSection
        backgroundClass={classes.background}
        heading={props.heading}
        headingClass={classes.heading}
        subHeading={props.subHeading}
        subHeadingClass={classes.subHeading}
        buttonClass={classes.button}
        contactPage={props.contactPage}
      >
        {props.children}
      </PageHeadSection>
    </Container>
  );
}

export default LightPageHead;
