import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { clientsList } from "../../home/ClientsList.data";
import DisplayClientsList from "../../../shared/components/DisplayClientsList";
import OurPrograms from "../../../shared/components/our-programs/OurPrograms";
import LightPageHead from "../../../shared/components/page-head-sections/LightPageHead";
import TalentElevationModel from "../../../shared/components/talent-elevation-model/TalentElevationModel";
import VideoTestimonial from "../../../shared/components/VideoTestimonial";
import TalentHiringAndTrainingMetricCards from "./TalentHiringAndTrainingMetricCards";
import TakeAction from "../../../shared/components/TakeAction";
import TalentHiringAndTrainingPageImage from "./TalentHiringAndTrainingPageImage";
import {
  PAGE_HEAD,
  TAKE_ACTION,
  TALENT_ELEVATION,
  TALNET_HIRING_AND_TRAINING_METRICS,
  VIDEO_TESTIMONIAL,
} from "./TalentHiringAndServices.content";
import Helmet from "react-helmet";
import TalentHiringAndTrainingServicesInfo from "./TalentHiringAndTrainingServicesInfo";
import GraduatesInfo from "../GraduatesInfo";

const useTalentHiringAndTrainingServicesStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  videoTestimonial: {
    backgroundColor: theme.palette.lightBackground.main,
  },
  pageHeadImage: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50vw",
    },
  },
}));

function TalentHiringAndTrainingServices() {
  const classes = useTalentHiringAndTrainingServicesStyles();
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Aspire’s Talent Elevation Program is comprehensive, and ensures the highest success rates and minimum attrition for our clients. From sourcing the right talent, to training them for your specific requirements, to deploying them on the job, we’ve pioneered 360-degree talent onboarding that works best for your business."
        />
        <title>
          Aspire for Business- New hire recruitment, training and onboarding
        </title>
      </Helmet>
      <Container className={classes.root}>
        <LightPageHead
          heading={PAGE_HEAD.heading}
          subHeading={PAGE_HEAD.subHeading}
        >
          <TalentHiringAndTrainingPageImage />
        </LightPageHead>
        <TalentHiringAndTrainingServicesInfo />
        <VideoTestimonial
          src={VIDEO_TESTIMONIAL.src}
          videoText={VIDEO_TESTIMONIAL.videoText}
          videoContent={VIDEO_TESTIMONIAL.videoContent}
          heading1={VIDEO_TESTIMONIAL.heading1}
          heading2={VIDEO_TESTIMONIAL.heading2}
          content={VIDEO_TESTIMONIAL.content}
          background={classes.videoTestimonial}
        />
        <GraduatesInfo />
        <TalentElevationModel
          content={TALENT_ELEVATION.content}
          alt1="Aspire’s training programs bring together functional skills, placement skills, communication skills, behavioral skills, analytical skills, along with career guidance and counseling, to ensure holistic talent development."
          alt2=""
        />
        <OurPrograms />
        <TalentHiringAndTrainingMetricCards
          metricsList={TALNET_HIRING_AND_TRAINING_METRICS}
        />
        <DisplayClientsList displayClientsList={clientsList} />
        <TakeAction actionInfo={TAKE_ACTION.actionInfo} />
      </Container>
    </>
  );
}

export default TalentHiringAndTrainingServices;
