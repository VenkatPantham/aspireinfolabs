import React from "react";
import { Route, Switch } from "react-router-dom";
import { ROUTE_ADMIN_PORTAL } from "../shared/constants/route.const";
import Website from "../micro-frontends/website/Website";
import AdminPortal from "../micro-frontends/admin-portal/AdminPortal";

export default function Routes() {
  return (
    <Switch>
      <Route path={ROUTE_ADMIN_PORTAL.path}>
        <AdminPortal />
      </Route>
      <Route path="/">
        <Website />
      </Route>
    </Switch>
  );
}
