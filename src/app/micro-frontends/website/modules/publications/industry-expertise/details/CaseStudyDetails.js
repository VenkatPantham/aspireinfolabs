import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CaseStudies } from "../../data/PublicationsContent.data";
import { CaseStudyDetailsData } from "../../data/PublicationsDetails.data";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import CaseStudyContent from "./CaseStudyContent";

const usePublicationsCaseStudyStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    color: "black",
  },
  header: {
    backgroundColor: theme.palette.secondary.main,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
  },
  headerText: {
    fontWeight: "bold",
    marginBottom: theme.spacing(4),
  },
  quoteText: {
    textAlign: "center",
    width: "75%",
    margin: "auto",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(7),
  },
  footer: {
    backgroundColor: theme.palette.primary.main,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    color: "white",
  },
  footerText: {
    marginTop: theme.spacing(3),
  },
}));

const BlogDetails = () => {
  const classes = usePublicationsCaseStudyStyles();
  let { caseStudyUrl } = useParams();
  const [caseStudy] = useState(
    () => CaseStudies.filter((el) => el.url === caseStudyUrl)[0]
  );
  const [caseStudyDetails] = useState(
    () => CaseStudyDetailsData.filter((el) => el.id === caseStudy.id)[0]
  );

  return (
    <Container className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.header}
      >
        <Grid item xs={10}>
          <Typography variant="h2" className={classes.headerText}>
            {caseStudy.description}
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="row" justify="center">
        <Grid item xs={10} md={8}>
          <CaseStudyContent details={caseStudyDetails.details} />
        </Grid>
        <Grid item xs={10} md={8}>
          <Typography variant="body1" className={classes.quoteText}>
            "{caseStudyDetails.quote}"
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.footer}
      >
        <Grid item xs={10} md={8}>
          <Typography
            variant="h3"
            className={classes.sectionHeaders}
            style={{ marginTop: 0 }}
          >
            Results
          </Typography>
          {caseStudyDetails.results.map((el, index) => (
            <Typography
              variant="subtitle1"
              key={index}
              className={classes.footerText}
            >
              {el.text}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default BlogDetails;
