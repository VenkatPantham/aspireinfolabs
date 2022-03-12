import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { menuItems } from "../../micro-frontends/website/core/header/menu.data";
import { adminMenuItems } from "../../micro-frontends/admin-portal/core/menu-bar/admin-menu.data";
import {
  Accordion,
  AccordionDetails,
  Grid,
  Link,
  withStyles,
} from "@material-ui/core";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { Close, ExpandMore } from "@material-ui/icons";
import { ASPIRE_LOGO, ASPIRE_MOBILE_LOGO } from "../images/aspireLogos";
import useMobileView from "../utils/hooks/useMobileView";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    padding: 0,
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: (props) => `calc(100% - ${props ? "100%" : "20%"})`,
    marginRight: (props) => (props ? "100%" : "20%"),
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuContainer: {
    flexGrow: 1,
  },
  menuLogo: {
    marginTop: (props) => (props ? 0 : "15%"),
    height: "50%",
    width: "50%",
  },
  menuItem: {
    flexGrow: 1,
  },
  menuButton: {
    color: "black",
    marginLeft: "0",
  },
  childMenuButton: {
    color: "black",
  },
  childMenuText: {
    padding: "1%",
  },
  header: {
    flexGrow: 1,
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
  },
  headerImage: {
    width: "10vw",
  },
  headerText: {
    fontWeight: "bold",
    paddingLeft: "2%",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: (props) => (props ? "100%" : "20%"),
    flexShrink: 0,
  },
  drawerPaper: {
    width: (props) => (props ? "100%" : "20%"),
    backgroundColor: theme.palette.lightBackground.main,
    color: "black",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 5%",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: (props) => (props.halfNav ? "-25%" : "-100%"),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  childMenuDropdown: {
    backgroundColor: theme.palette.lightBackground.main,
    color: "black",
  },
}));

const AccordionSummary = withStyles({
  content: {
    justifyContent: "center",
    margin: 0,
  },
})(MuiAccordionSummary);

export default function SideNav(props) {
  const isMobileView = useMobileView();
  const classes = useStyles(isMobileView);
  const [sideMenuOpen, setSideMenuOpen] = useState(
    props.halfNav && isMobileView
  );
  const [childMenuExpanded, setChildMenuExpanded] = useState(false);
  const [MenuItems] = useState(props.halfNav ? adminMenuItems : menuItems);

  const handleChange = (panel) => (event, childMenuExpanded) => {
    setChildMenuExpanded(childMenuExpanded ? panel : false);
  };

  const handleDrawerOpen = () => {
    setSideMenuOpen(true);
  };

  const handleDrawerClose = () => {
    setSideMenuOpen(false);
  };

  return (
    <div className={classes.root}>
      {isMobileView ? (
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: sideMenuOpen,
          })}
        >
          <Toolbar>
            {props.halfNav ? null : (
              <Link href="/" className={classes.header}>
                <img
                  src={ASPIRE_MOBILE_LOGO}
                  alt="Aspire Logo"
                  className={classes.headerImage}
                />
                <Typography variant="h4" className={classes.headerText}>
                  Aspire
                </Typography>
              </Link>
            )}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge={props.halfNav ? "start" : "end"}
              className={clsx(classes.menuButton, sideMenuOpen && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      ) : null}
      <Drawer
        className={classes.drawer}
        variant={props.halfNav && !isMobileView ? "permanent" : "persistent"}
        anchor={props.halfNav ? "left" : "right"}
        open={sideMenuOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {isMobileView ? (
          <IconButton
            onClick={handleDrawerClose}
            className={classes.drawerHeader}
          >
            <Close />
          </IconButton>
        ) : null}
        <Grid
          container
          direction="column"
          justify="space-around"
          align="center"
          className={classes.menuContainer}
        >
          <Grid item className={classes.menuItem}>
            <Link className={classes.menuButton} href={"/"}>
              <img
                src={ASPIRE_LOGO}
                alt="Aspire Logo"
                className={classes.menuLogo}
              />
            </Link>
          </Grid>
          {MenuItems.map((menuItem) =>
            menuItem.children.length > 0 ? (
              <Grid item className={classes.menuItem} key={menuItem.id}>
                <Accordion
                  className={classes.childMenuDropdown}
                  expanded={childMenuExpanded === menuItem.id}
                  onChange={handleChange(menuItem.id)}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.accordionSummary}
                  >
                    <Typography
                      className={classes.menuText}
                      variant={props.halfNav ? "body1" : "h3"}
                    >
                      {menuItem.name} <ExpandMore />
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      direction="column"
                      justify="center"
                      align="center"
                    >
                      {menuItem.children.map((menuItemChild) => (
                        <Link
                          key={menuItemChild.id}
                          className={classes.childMenuButton}
                          href={menuItemChild.path}
                        >
                          <Typography
                            className={classes.childMenuText}
                            variant={props.halfNav ? "subtitle1" : "h4"}
                          >
                            {menuItemChild.name}
                          </Typography>
                        </Link>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ) : (
              <Grid item className={classes.menuItem} key={menuItem.id}>
                <Link className={classes.menuButton} href={menuItem.path}>
                  <Typography
                    className={classes.menuText}
                    variant={props.halfNav ? "body1" : "h3"}
                  >
                    {menuItem.name}
                  </Typography>
                </Link>
              </Grid>
            )
          )}
        </Grid>
      </Drawer>
    </div>
  );
}
