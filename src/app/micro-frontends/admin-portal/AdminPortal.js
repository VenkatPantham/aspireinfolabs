import React from "react";
import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./redux-data/store";
import SideNav from "../../shared/components/SideNav";
import { Container, makeStyles } from "@material-ui/core";
import useMobileView from "../../shared/utils/hooks/useMobileView";
import { Route, Switch } from "react-router-dom";
import Login from "./core/user/Login";
import { ROUTE_LOGIN } from "./shared/constants/route.const";
import { ROUTE_ADMIN_PORTAL } from "../../shared/constants/route.const";

const useStyles = makeStyles((theme) => ({
  mainBlock: {
    padding: 0,
    display: "flex",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
    },
  },
  sideBlock: {
    padding: 0,
    width: (props) => (props ? "100%" : "20%"),
  },
  contentBlock: {
    width: (props) => (props ? "100%" : "80%"),
    [theme.breakpoints.only("xs")]: {
      marginTop: "15%",
    },
  },
}));

function AdminPortal() {
  const isMobileView = useMobileView();
  const classes = useStyles(isMobileView);

  return (
    <Provider store={store}>
      <Switch>
        <Route exact path={ROUTE_LOGIN.path}>
          <Login />
        </Route>
        <Route path={ROUTE_ADMIN_PORTAL.path}>
          <Container className={classes.mainBlock}>
            <Container className={classes.sideBlock}>
              <SideNav halfNav={true} />
            </Container>
            <Container className={classes.contentBlock}>
              <Routes />
            </Container>
          </Container>
        </Route>
      </Switch>
    </Provider>
  );
}

export default AdminPortal;
