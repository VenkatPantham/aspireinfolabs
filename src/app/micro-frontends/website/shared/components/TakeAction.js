import { Button, Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ROUTE_CONTACT } from "../constants/route.const";

const useTakeActionStyles = makeStyles((theme) => ({
  actionSection: {
    textAlign: "center",
    backgroundColor: theme.palette.lightBackground.main,
    padding: "3%",
    [theme.breakpoints.down("sm")]: {
      padding: "5%",
    },
  },
  text: {
    fontWeight: "bold",
    padding: "1%",
    marginBottom: theme.spacing(1),
  },
  description: {
    paddingBottom: "2%",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      paddingBottom: "5%",
    },
    width: "50%",
  },
  button: {
    textTransform: "none",
  },
}));

function TakeAction(props) {
  const classes = useTakeActionStyles();
  const layoutStyles = useLayoutStyles();

  return (
    <Container
      className={clsx(layoutStyles.xSmallSection, classes.actionSection)}
    >
      <Typography variant="h6" className={classes.text}>
        {props.actionInfo}
      </Typography>
      <Typography variant="subtitle2" className={classes.description}>
        {props.descriptionInfo}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to={ROUTE_CONTACT.path}
      >
        <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
      </Button>
    </Container>
  );
}

export default TakeAction;
