import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
// import { VIDEO_PLACEHOLDER_IMAGE } from "../../shared/images/commonImages";

const useVideoTestimonialStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(12),
    },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "unsafe center",
    alignItems: "center",
    textAlign: "center",
    maxHeight: "70%",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      background: `linear-gradient(90deg, transparent 40%, ${theme.palette.info.main} 40%)`,
      paddingLeft: "5%",
      paddingRight: "10%",
      textAlign: "left",
    },
  },
  video: {
    position: "relative",
    top: 40,
    minWidth: "40vw",
    height: "45vh",
    padding: "5%",
    backgroundColor: theme.palette.primary.main,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.up("sm")]: {
      marginBottom: 0,
      height: "55vh",
      marginLeft: "5%",
    },
    [theme.breakpoints.only("md")]: {
      height: "50vh",
    },
    [theme.breakpoints.only("lg")]: {
      height: "65vh",
    },
    [theme.breakpoints.only("xl")]: {
      height: "50vh",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  videoText: {
    color: "white",
    lineHeight: 1.25,
  },
  videoContent: {
    paddingTop: theme.spacing(2),
    color: "white",
  },
  content: {
    padding: theme.spacing(4),
    margin: "auto",
  },
  heading: {
    fontWeight: "bold",
  },
  text: {
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingRight: theme.spacing(6),
    },
  },
}));

function VideoTestimonial(props) {
  const classes = useVideoTestimonialStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Container
      className={clsx(
        classes.root,
        layoutStyles.mediumSection,
        props.background
      )}
    >
      <Container className={classes.container}>
        {/* <iframe
          id="video"
          title="Testimonial"
          className={classes.video}
          src={props.src}
          frameBorder="0"
          allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        /> */}
        {/* <img
          src={VIDEO_PLACEHOLDER_IMAGE}
          className={classes.video}
          alt="video"
        /> */}
        <Container className={classes.video}>
          <Typography variant="subtitle1" className={classes.videoText}>
            {props.videoText}
          </Typography>
          <Typography variant="subtitle1" className={classes.videoContent}>
            {props.videoContent}
          </Typography>
        </Container>
        <Container className={classes.content}>
          <Typography variant="h3" className={classes.heading}>
            <i>{props.heading1}</i>
          </Typography>
          <Typography variant="h4" className={classes.heading}>
            {props.heading2}
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            {props.content}
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}

export default VideoTestimonial;
