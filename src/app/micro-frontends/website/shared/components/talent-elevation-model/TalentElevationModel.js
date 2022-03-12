import { Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../../assets/styles/layoutStyles";
import {
  ASPIRE_TALENT_ELEVATION_IMAGE_1,
  ASPIRE_TALENT_ELEVATION_IMAGE_2,
} from "../../../shared/images/commonImages";
import ScrollTrigger from "react-scroll-trigger";
import TalentElevation from "../../../animations/components/TalentElevation";

const useTalentElevationModelStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightBackground.main,
    padding: "10% 0",
    justifyContent: "center",
    alignItems: "flex-end",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },
  leftSection: {
    width: "40%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(10),
    },
    position: "relative",
  },
  rightSection: {
    width: "40%",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(5),
    },
    fontWeight: "bold",
    paddingBottom: theme.spacing(2),
  },
  image_1: {
    position: "absolute",
    left: "48%",
    width: "31.3%",
  },
  image_2: {
    width: "95%",
  },
}));

function TalentElevationModel({ content, alt1, alt2 }) {
  const classes = useTalentElevationModelStyles();
  const layoutStyles = useLayoutStyles();
  const [animating, setAnimating] = useState(false);

  return (
    <Grid container className={clsx(classes.root, layoutStyles.mediumSection)}>
      <Grid item classes={{ root: classes.leftSection }}>
        <ScrollTrigger
          onEnter={() => setAnimating(true)}
          onExit={() => setAnimating(false)}
        >
          <>
            <TalentElevation
              animating={animating}
              src={ASPIRE_TALENT_ELEVATION_IMAGE_1}
              className={classes.image_1}
              alt={alt1}
            />
            <img
              src={ASPIRE_TALENT_ELEVATION_IMAGE_2}
              className={classes.image_2}
              alt={alt2}
            />
          </>
        </ScrollTrigger>
      </Grid>
      <Grid item classes={{ root: classes.rightSection }}>
        <Typography variant="h3" className={classes.text}>
          The Aspire <br />
          <i>Talent</i> Elevation Model
        </Typography>
        <Typography variant="h6">{content}</Typography>
      </Grid>
    </Grid>
  );
}

export default TalentElevationModel;
