import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import DisplayPerson from "./DisplayPerson";

const useDisplayPersonsStyles = makeStyles((theme) => ({
  cardsList: {
    paddingLeft: "5%",
    paddingRight: "5%",
  },
}));

function DisplayPersonsList(props) {
  const classes = useDisplayPersonsStyles();

  return (
    <Grid
      container
      justify="center"
      align="center"
      direction="row"
      className={classes.cardsList}
    >
      {props.personsList.map((person, index) => (
        <DisplayPerson person={person} key={index} />
      ))}
    </Grid>
  );
}

export default DisplayPersonsList;
