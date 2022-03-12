import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import AccordionList from "../AccordionList";
import { ourProgramsData } from "./OurPrograms.data";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../../assets/styles/layoutStyles";

const ourProgramsStyles = makeStyles((theme) => ({
  root: {
    padding: "7%",
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
  },
}));

function OurPrograms() {
  const classes = ourProgramsStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Container className={clsx(layoutStyles.largeSection, classes.root)}>
      <Typography variant="h3" className={classes.heading}>
        Our Programs
      </Typography>
      <AccordionList accordionList={ourProgramsData} />
    </Container>
  );
}

export default OurPrograms;
