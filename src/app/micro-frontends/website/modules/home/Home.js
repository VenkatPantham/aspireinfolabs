import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import DisplayClientsList from "../../shared/components/DisplayClientsList";
import DarkPageHead from "../../shared/components/page-head-sections/DarkPageHead";
import { clientsList } from "./ClientsList.data";
import TalentsInfo from "./TalentsInfo";
import OurServices from "./OurServices";
import OurInsights from "./OurInsights";
import HomeServicesInfo from "./HomeServicesInfo";
import HomePageImage from "./HomePageImage";
import { PAGE_HEAD, CLIENTS_LIST, TAKE_ACTION } from "./Home.content";
import Helmet from "react-helmet";
import TakeAction from "../../shared/components/TakeAction";

const useHomePageStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  videoTestimonial: {
    backgroundColor: theme.palette.lightBackground.main,
  },
}));

export default function Home() {
  const classes = useHomePageStyles();
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Aspire Infolabs is a talent recruitment, training and onboarding organization. We work with the world’s top IT companies to transform IT talent and bridge the gap between academic training and recruiter expectations. With over 12000 successful placements, we are the most dependable recruitment partner."
        />
        <title>Aspire Infolabs- IT Talent Recruitment and Transformation</title>
      </Helmet>
      <Container maxWidth={false} className={classes.root}>
        <DarkPageHead heading={PAGE_HEAD.heading}>
          <HomePageImage />
        </DarkPageHead>
        <HomeServicesInfo />
        <TalentsInfo />
        <OurServices />
        <OurInsights />
        <DisplayClientsList
          title={CLIENTS_LIST.title}
          displayClientsList={clientsList}
        />
        <TakeAction
          actionInfo={TAKE_ACTION.actionInfo}
          descriptionInfo={TAKE_ACTION.descriptionInfo}
        />
      </Container>
    </>
  );
}
