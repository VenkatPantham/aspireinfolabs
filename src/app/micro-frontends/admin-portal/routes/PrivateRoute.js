import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        sessionStorage.getItem("token") ? (
          // logged in so return component
          <Component {...props} />
        ) : (
          // not logged in so redirect to login page with the return url
          <Redirect
            to={{ pathname: "/admin/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
