import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./Settings.styles";
import { ExpandMore } from "@material-ui/icons";
import SettingsForm from "./SettingsForm";
import SettingsTable from "./SettingsTable";
import { useSelector, useDispatch } from "react-redux";
import { settingsActions } from "./state/settings.actions";

const NotificationsAccordion = () => {
  const classes = useStyles();
  const state = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const [data, setData] = useState({ id: "", name: "", emailId: "" });
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => dispatch(settingsActions.fetchMails()), []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
    setData({
      id: "",
      name: "",
      emailId: "",
    });
    setEdit(false);
  };

  const editHandler = (row) => {
    setOpen(true);
    setData({
      id: row.id,
      name: row.name,
      emailId: row.emailId,
    });
    setEdit(true);
  };

  return (
    <Accordion
      classes={{
        root: classes.accordian,
      }}
      defaultExpanded
    >
      <AccordionSummary
        classes={{
          root: classes.accordionSummary,
          content: classes.accordionSummaryContent,
        }}
        expandIcon={<ExpandMore fontSize="large" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5" className={classes.notificationsText}>
          Notifications
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Container className={classes.accordionDetails}>
          <Typography variant="body1" className={classes.notifyText}>
            Emails to notify
          </Typography>
          <SettingsTable mails={state.items} editHandler={editHandler} />
          <Button
            variant="contained"
            type="button"
            className={classes.button}
            onClick={handleClickOpen}
          >
            Add an Email
          </Button>
          <SettingsForm
            open={open}
            data={data}
            edit={edit}
            handleClickClose={handleClickClose}
          />
        </Container>
      </AccordionDetails>
    </Accordion>
  );
};

export default NotificationsAccordion;
