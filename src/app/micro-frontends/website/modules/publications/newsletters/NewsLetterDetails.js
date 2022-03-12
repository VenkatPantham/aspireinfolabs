import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { NewsLetters } from "../data/PublicationsContent.data";
import {
  NewsLetterDetailsData,
  BlogIcons,
} from "../data/PublicationsDetails.data";
import {
  Container,
  Grid,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const usePublicationsNewsLetterStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    marginBottom: "5%",
    color: "black",
    position: "relative",
  },
  socialIconsSideList: {
    position: "absolute",
    flexDirection: "column",
    padding: 0,
    top: "15%",
    right: 0,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  socialSideIcon: {
    marginBottom: theme.spacing(4),
    cursor: "pointer",
    width: "25%",
    height: "auto",
  },
  newsletterImage: {
    objectFit: "contain",
    width: "100%",
    height: 400,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  title: {
    marginTop: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
    },
    textAlign: "center",
    fontWeight: "bold",
  },
  description: {
    fontSize: 20,
    lineHeight: 1.5,
    marginTop: theme.spacing(5),
  },
}));

const NewsLetterDetails = () => {
  const classes = usePublicationsNewsLetterStyles();
  let { alumniSpeaksUrl } = useParams();
  // const id = useLocation().state.id;
  const [newsletter] = useState(
    () => NewsLetters.filter((el) => el.url === alumniSpeaksUrl)[0]
  );
  const [newsletterDetails] = useState(
    () => NewsLetterDetailsData.filter((el) => el.id === newsletter.id)[0]
  );
  const [blogIcons] = useState(() => BlogIcons);

  return (
    <Container className={classes.root}>
      <img
        src={newsletter.cover}
        className={classes.newsletterImage}
        alt={newsletter.title}
      />
      <Toolbar className={classes.socialIconsSideList}>
        {blogIcons.map((icon) => (
          <img
            key={icon.name}
            src={icon.image}
            alt={icon.name}
            className={classes.socialSideIcon}
            onClick={() => window.open(`${icon.url}`, "_blank")}
          />
        ))}
      </Toolbar>
      <Grid container direction="row" justify="center">
        <Grid item xs={10} md={8}>
          <Typography variant="h3" className={classes.title}>
            {newsletter.title}
          </Typography>
          <hr color="#888" style={{ width: "15%", height: 1.25 }} />
          {newsletterDetails.details.map((el, index) => (
            <Typography
              variant="subtitle1"
              className={classes.description}
              key={index}
            >
              <strong>{el.heading}</strong>
              {el.data}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewsLetterDetails;
