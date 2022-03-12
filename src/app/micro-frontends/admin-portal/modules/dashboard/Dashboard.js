import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./Dashboard.styles";
import DashboardFilters from "./DashboardFilters";
import AlertComponent from "../../shared/components/AlertComponent";

export default function EnhancedTable() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h3">Dashboard</Typography>
      <DashboardFilters />
      <AlertComponent />
    </Container>
  );
}
