import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import clsx from "clsx";
import {
  OUR_MISSION_IMAGE,
  OUR_MISSION_IMAGE1,
  OUR_MISSION_IMAGE2,
} from "../../shared/images/ourMissionImages";
import ParallaxContainer from "../../animations/components/ParallaxContainer";
import { MISSIONS } from "./AboutUs.content";

const useOurMissionStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "10%",
    margin: "auto",
  },
  heading: {
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
      textAlign: "center",
    },
  },
  text: {
    paddingTop: theme.spacing(3),
  },
  pieImage: {
    padding: "1%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  rocketImage: {
    padding: "1%",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  circleImage: {
    padding: "1%",
    alignSelf: "flex-end",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  mobileMisson: {
    margin: "10% 0",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function OurMission() {
  const classes = useOurMissionStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      className={clsx(classes.root, layoutStyles.mediumSection)}
    >
      <Grid item xs={2} sm={1} classes={{ root: classes.pieImage }}>
        <ParallaxContainer xOffset={0} yOffset={0} width="5vw">
          <img src={OUR_MISSION_IMAGE1} alt="" />
        </ParallaxContainer>
      </Grid>
      <Grid item xs={3} sm={2} classes={{ root: classes.rocketImage }}>
        <ParallaxContainer xOffset={0} yOffset={0} width="15vw">
          <img
            src={OUR_MISSION_IMAGE}
            alt="Aspire seeks to get better with time and grow our customers’ businesses the best way we can.  We are actively contributing to the talent recruitment and training industry and would like to continue transforming the IT recruitment space. "
          />
        </ParallaxContainer>
      </Grid>
      <Grid item xs={12} sm={8} style={{ padding: "0 2%" }}>
        <Typography variant="h3" className={classes.heading}>
          Our <i>Mission</i>
        </Typography>
        <Grid container justify="center" className={classes.mobileMisson}>
          <Grid item xs={2} classes={{ root: classes.pieMobileImage }}>
            <img src={OUR_MISSION_IMAGE1} alt="" />
          </Grid>
          <Grid item xs={3} classes={{ root: classes.rocketMobileImage }}>
            <img
              src={OUR_MISSION_IMAGE}
              alt="Aspire seeks to get better with time and grow our customers’ businesses the best way we can.  We are actively contributing to the talent recruitment and training industry and would like to continue transforming the IT recruitment space. "
            />
          </Grid>
          <Grid item xs={2} classes={{ root: classes.circleMobileImage }}>
            <img src={OUR_MISSION_IMAGE2} alt="" />
          </Grid>
        </Grid>
        <Typography variant="h5">{MISSIONS.heading}</Typography>
        <Typography variant="subtitle1" className={classes.text}>
          {MISSIONS.subText}
        </Typography>
      </Grid>
      <Grid item xs={2} sm={1} classes={{ root: classes.circleImage }}>
        <ParallaxContainer xOffset={0} yOffset={0} width="5vw">
          <img src={OUR_MISSION_IMAGE2} alt="" />
        </ParallaxContainer>
      </Grid>
    </Grid>
  );
}

export default OurMission;
