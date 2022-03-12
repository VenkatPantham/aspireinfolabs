import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import RouteNotFound from "../../../routes/RouteNotFound";
import Dashboard from "../modules/dashboard/Dashboard";
import PublicationContent from "../modules/content/PublicationContent";
import Settings from "../modules/Settings/Settings";
import PrivateRoute from "./PrivateRoute";
import {
  ROUTE_DASHBOARD,
  // ROUTE_CONTENT,
  ROUTE_CONTENT_PUBLICATIONS,
  ROUTE_CONTENT_PUBLICATIONS_BLOGS,
  ROUTE_CONTENT_PUBLICATIONS_CASE_STUDIES,
  ROUTE_SETTINGS,
} from "../shared/constants/route.const";
import Blogs from "../modules/content/Blogs/Blogs";
import CaseStudies from "../modules/content/Case Studies/CaseStudies";

function Routes() {
  return (
    <Switch>
      <PrivateRoute exact path="/admin">
        <Redirect to={ROUTE_DASHBOARD.path} />
      </PrivateRoute>
      <PrivateRoute exact path={ROUTE_DASHBOARD.path} component={Dashboard} />
      <PrivateRoute
        exact
        path={ROUTE_CONTENT_PUBLICATIONS.path}
        component={PublicationContent}
      />
      <PrivateRoute
        exact
        path={ROUTE_CONTENT_PUBLICATIONS_BLOGS.path}
        component={Blogs}
      />
      <PrivateRoute
        exact
        path={ROUTE_CONTENT_PUBLICATIONS_CASE_STUDIES.path}
        component={CaseStudies}
      />
      <PrivateRoute exact path={ROUTE_SETTINGS.path} component={Settings} />
      {/* Finally, catch all unmatched routes */}
      <Route>
        <RouteNotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
