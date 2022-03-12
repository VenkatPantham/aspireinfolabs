import { makeStyles } from "@material-ui/core";
import React from "react";

const useRouteNotFoundStyles = makeStyles({
  routeNotfound: {
    padding: "10%",
    textAlign: "center",
  },
});

export default function RouteNotFound() {
  const classes = useRouteNotFoundStyles();
  return (
    <div className={classes.routeNotfound}>
      <h3>Sorry, page not found!</h3>
    </div>
  );
}
