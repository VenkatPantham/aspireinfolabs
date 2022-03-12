import React from "react";
import { Route } from "react-router";
import {
  ROUTE_ABOUT_US,
  ROUTE_BLOG_DETAILS,
  ROUTE_BUSINESS_SERVICES,
  ROUTE_CASE_STUDY_DETAILS,
  ROUTE_COLLEGE_SERVICES,
  ROUTE_CONTACT,
  ROUTE_HOME,
  ROUTE_INDUSTRY_EXPERTISE,
  ROUTE_NEWSLETTERS,
  ROUTE_NEWSLETTER_DETAILS,
  ROUTE_STUDENT_SERVICES,
  ROUTE_TALENT_FOR_COLLEGES,
  ROUTE_TALENT_FOR_COMPANIES,
} from "../../app/micro-frontends/website/shared/constants/route.const";

export default (
  <Route>
    <Route path={ROUTE_HOME.path}></Route>
    <Route exact path={ROUTE_ABOUT_US.path}></Route>
    <Route exact path={ROUTE_BUSINESS_SERVICES.path}></Route>
    <Route exact path={ROUTE_STUDENT_SERVICES.path}></Route>
    <Route exact path={ROUTE_COLLEGE_SERVICES.path}></Route>
    <Route exact path={ROUTE_TALENT_FOR_COMPANIES.path}></Route>
    <Route exact path={ROUTE_TALENT_FOR_COLLEGES.path}></Route>
    <Route exact path={ROUTE_CONTACT.path}></Route>
    <Route exact path={ROUTE_INDUSTRY_EXPERTISE.path}></Route>
    <Route exact path={ROUTE_NEWSLETTERS.path}></Route>
    <Route path={`${ROUTE_BLOG_DETAILS.path}` + "/:blogId"}></Route>
    <Route path={`${ROUTE_CASE_STUDY_DETAILS.path}` + "/:caseStudyId"}></Route>
    <Route path={`${ROUTE_NEWSLETTER_DETAILS.path}` + "/:newsLetterId"}></Route>
    <Route path="/"></Route>
  </Route>
);
