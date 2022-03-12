import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useOurServicesInfoStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    textAlign: "left",
    padding: 0,
  },
  leftSection: {
    backgroundColor: theme.palette.highlight.main,
    padding: "5%",
    minWidth: "50%",
    fontWeight: "bold",
  },
  rightSection: {
    backgroundColor: theme.palette.secondary.main,
    padding: "5%",
    minWidth: "50%",
    fontWeight: "bold",
  },
  content: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.info.main,
    padding: "10%",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "15%",
      paddingRight: "15%",
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: "25%",
      paddingRight: "25%",
    },
    minWidth: "50%",
    fontWeight: "bold",
    textAlign: "center",
  },
}));

function OurServicesInfo(props) {
  const classes = useOurServicesInfoStyles();
  return (
    <Container className={classes.root}>
      {props.leftSideContent ? (
        <Typography variant="h6" className={classes.leftSection}>
          {props.leftSideContent}
        </Typography>
      ) : (
        ""
      )}
      {props.rightSideContent ? (
        <Typography
          variant="h6"
          className={
            props.leftSideContent ? classes.rightSection : classes.content
          }
        >
          {props.rightSideContent}
        </Typography>
      ) : (
        ""
      )}
    </Container>
  );
}

export default OurServicesInfo;
