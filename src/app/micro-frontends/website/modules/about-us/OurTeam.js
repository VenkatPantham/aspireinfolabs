import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import clsx from "clsx";
import DisplayPersonsList from "../../shared/components/DisplayPersonsList";
import { teamData } from "./OurTeam.data";

const useOurTeamStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightBackground.main,
    padding: "5%",
  },
  heading: {
    fontWeight: "bold",
    padding: theme.spacing(2),
    textAlign: "center",
    marginBottom: theme.spacing(5),
  },
}));

function OurTeam() {
  const classes = useOurTeamStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Container className={clsx(classes.root, layoutStyles.mediumSection)}>
      <Typography variant="h3" className={classes.heading}>
        Our <i>Team</i>
      </Typography>
      <DisplayPersonsList personsList={teamData} />
    </Container>
  );
}

export default OurTeam;
