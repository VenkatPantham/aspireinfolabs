import { Container, makeStyles } from "@material-ui/core";
import React from "react";
import { ABOUT_US_BACKGROUND_IMAGE } from "../../shared/images/pageHeadImages";
import Metrics from "../../shared/components/metrics/Metrics";
import { metricsData } from "../../shared/components/metrics/Metrics.data";
import DarkPageHead from "../../shared/components/page-head-sections/DarkPageHead";
import AboutUsInfo from "./AboutUsInfo";
import OurAdvisors from "./OurAdvisors";
import OurMission from "./OurMission";
import OurTeam from "./OurTeam";
import TakeAction from "../../shared/components/TakeAction";
import { PAGE_HEAD, METRICS, TAKE_ACTION } from "./AboutUs.content";
import Helmet from "react-helmet";

const useAboutUsStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
  },
  pageHeadImage: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50vw",
    },
  },
}));

function AboutUs() {
  const classes = useAboutUsStyles();
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Aspire gives recruiters access to the most suitable and trained talent from across the country. We transform our customers’ businesses through the most dependable, efficient and robust talent supply chain solutions.
At the same time, we’ve given students access to the best jobs, and an opportunity to learn and grow, to achieve their full potential"
        />
        <title>Aspire Infolabs- About Us</title>
      </Helmet>
      <Container className={classes.root}>
        <DarkPageHead heading={PAGE_HEAD.heading}>
          <img
            src={ABOUT_US_BACKGROUND_IMAGE}
            alt="Aspire brings together talent from different backgrounds, skillsets and demographics, and trains them to create a cohesive batch of students for our clients, who work together and deliver great results. "
            className={classes.pageHeadImage}
          />
        </DarkPageHead>
        <AboutUsInfo />
        <OurMission />
        <OurTeam />
        <OurAdvisors />
        <Metrics title={METRICS.title} metrics={metricsData} />
        <TakeAction actionInfo={TAKE_ACTION.actionInfo} />
      </Container>
    </>
  );
}

export default AboutUs;
