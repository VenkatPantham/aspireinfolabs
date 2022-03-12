import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import LightPageHead from "../../../shared/components/page-head-sections/LightPageHead";
import OurServicesInfo from "../../../shared/components/OurServicesInfo";
import TakeAction from "../../../shared/components/TakeAction";
import DisplayClientsList from "../../../shared/components/DisplayClientsList";
import { collegesList } from "../CollegesList.data";
import ProductServicesPageImage from "./ProductServicesPageImage";
import {
  DISPLAY_CLIENTS,
  OUR_SERVICES,
  PAGE_HEAD,
  TAKE_ACTION,
} from "./ProductService.content";
import Helmet from "react-helmet";
import ProductServicesMetrics from "./ProductServicesMetrics";
import AspireAdvantage from "./AspireAdvantage";
import GraduatesInfo from "../GraduatesInfo";

const useCollegeServicesStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  pageHeadImage: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50vw",
    },
  },
  graduateBackground: {
    backgroundColor: theme.palette.lightBackground.main,
  },
  graduateTitle: {
    color: "#000  ",
  },
  graduateTextHeader: {
    color: theme.palette.primary.main,
  },
  graduateNavIcon: {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));

function CollegeServices() {
  const classes = useCollegeServicesStyles();
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Help your students navigate to the fast track with Aspire’s intense Talent Elevation Programs. We’ve built 12,000+ strong careers. Our recruitment programs and transformational IT training is the best in the industry, and bridge the gap between college education and recruiter expectations. We make your students 100% job-ready."
        />
        <title>
          Aspire for Colleges- Student training and placement support
        </title>
      </Helmet>
      <Container className={classes.root}>
        <LightPageHead heading={PAGE_HEAD.heading}>
          <ProductServicesPageImage />
        </LightPageHead>
        <OurServicesInfo
          leftSideContent={OUR_SERVICES.leftSideContent}
          rightSideContent={OUR_SERVICES.rightSideContent}
        />
        <ProductServicesMetrics />
        <AspireAdvantage />
        <GraduatesInfo
          graduateBackground={classes.graduateBackground}
          graduateTitle={classes.graduateTitle}
          graduateTextHeader={classes.graduateTextHeader}
          graduateNavIcon={classes.graduateNavIcon}
        />
        <DisplayClientsList
          title={DISPLAY_CLIENTS.title}
          displayClientsList={collegesList}
        />
        <TakeAction actionInfo={TAKE_ACTION.actionInfo} />
      </Container>
    </>
  );
}

export default CollegeServices;
