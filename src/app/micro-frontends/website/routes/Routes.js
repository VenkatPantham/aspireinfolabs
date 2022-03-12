import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../modules/home/Home";
import AboutUs from "../modules/about-us/AboutUs";
import Contact from "../modules/contact/Contact";
import TalentHiringAndTrainingServices from "../modules/our-services/talent-hiring-and-training-services/TalentHiringAndTrainingServices";
import ProductServices from "../modules/our-services/product-services/ProductServices";
import BlogDetails from "../modules/publications/industry-expertise/details/BlogDetails";
import CaseStudyDetails from "../modules/publications/industry-expertise/details/CaseStudyDetails";
import IndustryExpertise from "../modules/publications/industry-expertise/IndustryExpertise";
import NewsLetter from "../modules/publications/newsletters/NewsLetter";
import NewsLetterDetails from "../modules/publications/newsletters/NewsLetterDetails";
import {
  ROUTE_ABOUT_US,
  ROUTE_ALUMNI_SPEAKS,
  ROUTE_BLOG_DETAILS,
  ROUTE_CASE_STUDY_DETAILS,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_INDUSTRY_EXPERTISE,
  ROUTE_PRODUCT_SERVICES,
  ROUTE_TALENT_AND_TRAINING_SERVICES,
} from "../shared/constants/route.const";
import RouteNotFound from "../../../routes/RouteNotFound";

export default function Routes() {
  return (
    <Switch>
      <Route path={ROUTE_HOME.path}>
        <Home />
      </Route>
      <Route exact path={ROUTE_ABOUT_US.path}>
        <AboutUs />
      </Route>
      <Route exact path={ROUTE_TALENT_AND_TRAINING_SERVICES.path}>
        <TalentHiringAndTrainingServices />
      </Route>
      <Route exact path={ROUTE_PRODUCT_SERVICES.path}>
        <ProductServices />
      </Route>
      <Route exact path={ROUTE_CONTACT.path}>
        <Contact />
      </Route>
      <Route exact path={ROUTE_INDUSTRY_EXPERTISE.path}>
        <IndustryExpertise />
      </Route>
      <Route exact path={ROUTE_ALUMNI_SPEAKS.path}>
        <NewsLetter />
      </Route>
      <Route path={`${ROUTE_BLOG_DETAILS.path}` + "/:blogUrl"}>
        <BlogDetails />
      </Route>
      <Route path={`${ROUTE_CASE_STUDY_DETAILS.path}` + "/:caseStudyUrl"}>
        <CaseStudyDetails />
      </Route>
      <Route path={`${ROUTE_ALUMNI_SPEAKS.path}` + "/:alumniSpeaksUrl"}>
        <NewsLetterDetails />
      </Route>
      <Route path="/">
        <Redirect to={ROUTE_HOME.path} />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <RouteNotFound />
      </Route>
    </Switch>
  );
}
