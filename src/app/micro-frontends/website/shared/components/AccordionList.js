import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import TrendingFlatIcon from "@material-ui/icons/TrendingFlat";
import ExpandArrow from "../../animations/components/ExpandArrow";
import ProgramHover from "../../animations/components/ProgramHover";

const Accordion = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightBackground.main,
  },
}))(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expandIcon: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    padding: "0 10%",
    alignSelf: "stretch",
  },
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    },
  },
  heading: {
    padding: "2% 0",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  summaryText: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

export default function AccordionList(props) {
  const classes = useStyles();
  const [accordionExpanded, setAccordionExpanded] = useState(false);
  const handleChange = (panel) => (event, accordionExpanded) => {
    setAccordionExpanded(accordionExpanded ? panel : false);
  };

  return (
    <Container className={classes.root}>
      {props.accordionList.map((accordion, index) => (
        <ProgramHover
          index={index}
          key={accordion.id}
          expanded={accordionExpanded}
        >
          <Accordion
            className={classes.accordion}
            style={{ margin: "1%" }}
            expanded={accordionExpanded === accordion.id}
            onChange={handleChange(accordion.id)}
          >
            <AccordionSummary
              className={classes.accordionSummary}
              expandIcon={
                <ExpandArrow index={index}>
                  <TrendingFlatIcon style={{ fontSize: "4vw" }} />
                </ExpandArrow>
              }
              expanded={accordionExpanded === index}
              onChange={handleChange(index)}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h5" className={classes.heading}>
                {accordion.summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul>
                {accordion.details.map((detail, index) => (
                  <li key={index}>
                    <Typography variant="body1" className={classes.summaryText}>
                      {detail}
                    </Typography>
                  </li>
                ))}
              </ul>
            </AccordionDetails>
          </Accordion>
        </ProgramHover>
      ))}
    </Container>
  );
}
