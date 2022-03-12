import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./Settings.styles";
import AlertComponent from "../../shared/components/AlertComponent";
import NotificationsAccordion from "./NotificationsAccordion";

const Settings = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h3" className={classes.settingsText}>
        Settings
      </Typography>
      <NotificationsAccordion />
      <AlertComponent />
    </Container>
  );
};

export default Settings;
