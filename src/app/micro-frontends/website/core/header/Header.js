import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import MainNav from "./MainNav";
import SideNav from "../../../../shared/components/SideNav";
import useMobileView from "../../../../shared/utils/hooks/useMobileView";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    minHeight: (props) => (props ? 0 : "10vh"),
  },
}));

export default function Header() {
  const isMobileView = useMobileView();
  const classes = useStyles(isMobileView);

  return (
    <AppBar position="sticky" className={classes.root}>
      {isMobileView ? <SideNav /> : <MainNav />}
    </AppBar>
  );
}
