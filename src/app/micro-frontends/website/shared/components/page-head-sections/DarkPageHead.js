import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import PageHeadSection from "./PageHeadSection";

const useDarkPageHeadStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(10),
    },
  },
  background: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up("sm")]: {
      borderTopLeftRadius: theme.spacing(10),
    },
  },
  heading: {
    color: theme.palette.primary.contrastText,
    fontWeight: "bold",
  },
  subHeading: {
    color: theme.palette.info.main,
    marginTop: "5%",
  },
  button: {
    color: "white",
    textDecoration: "underline",
  },
}));

function DarkPageHead(props) {
  const classes = useDarkPageHeadStyles();
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

export default DarkPageHead;
