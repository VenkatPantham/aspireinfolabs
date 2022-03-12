import React from "react";
import { Link, makeStyles, Toolbar, Typography } from "@material-ui/core";
import DropdownMenuList from "./DropdownMenuList";
import { menuItems } from "./menu.data";
import { ASPIRE_MOBILE_LOGO } from "../../../../shared/images/aspireLogos";

const useMainNavStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: "10vh",
    boxShadow: "none",
    padding: "1% 0",
  },
  menuButton: {
    color: "black",
    fontWeight: "bold",
    paddingRight: "2%",
    cursor: "pointer",
  },
  title: {
    paddingLeft: "8%",
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  titleImage: {
    width: "5vw",
  },
  titleText: {
    fontWeight: "bold",
    paddingLeft: "2%",
  },
  text: {
    textTransform: "none",
    verticalAlign: "bottom",
  },
  linkColor: {
    color: "black",
  },
  expandIcon: {
    [theme.breakpoints.up("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: theme.typography.h4.fontSize,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: theme.typography.h3.fontSize,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: theme.typography.h2.fontSize,
    },
  },
}));
function MainNav() {
  const classes = useMainNavStyles();

  return (
    <Toolbar className={classes.toolbar}>
      <Link className={classes.title} href="/">
        <img
          src={ASPIRE_MOBILE_LOGO}
          alt="Aspire Logo"
          className={classes.titleImage}
        />
        <Typography className={classes.titleText} variant="h5">
          Aspire
        </Typography>
      </Link>
      {menuItems.map((menuItem) =>
        menuItem.children.length > 0 ? (
          <DropdownMenuList menuItem={menuItem} classes={classes} />
        ) : (
          <>
            <Link
              key={menuItem.id}
              className={classes.menuButton}
              href={menuItem.path}
            >
              <Typography className={classes.text} variant="subtitle1">
                {menuItem.name}
              </Typography>
            </Link>
          </>
        )
      )}
    </Toolbar>
  );
}

export default MainNav;
