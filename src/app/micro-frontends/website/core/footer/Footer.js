import {
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { footerIcons } from "./Footer.data";
import SpreadedFooterLinks from "./SpreadedFooterLinks";
import CollapsibleFooterLinks from "./CollapsibleFooterLinks";
import useMobileView from "../../../../shared/utils/hooks/useMobileView";

const useFooterStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "black",
    color: theme.palette.primary.contrastText,
  },
  footerSections: {
    paddingTop: 0,
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
    },
    paddingBottom: theme.spacing(6),
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  socialIconsList: {
    color: theme.palette.secondary.main,
    justifyContent: "center",
    alignSelf: "flex-start",
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
  },
  socialIcon: {
    width: "2vw",
    margin: theme.spacing(1.5),
    [theme.breakpoints.down("xs")]: {
      width: "20px",
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(1),
    },
  },
  copyRightsSection: {
    textAlign: "center",
    justifyContent: "center",
    marginLeft: "3%",
    marginRight: "3%",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderTopWidth: theme.spacing(0.25),
    borderTopColor: theme.palette.primary.contrastText,
    borderTopStyle: "solid",
  },
}));

function Footer() {
  const classes = useFooterStyles();
  const isMobileView = useMobileView();
  return (
    <Grid className={classes.root}>
      <Grid container direction="column">
        <Grid container className={classes.footerSections}>
          {isMobileView ? <CollapsibleFooterLinks /> : <SpreadedFooterLinks />}
          <Grid
            container
            item
            xs={12}
            md={3}
            className={classes.socialIconsList}
          >
            {footerIcons.map((footerIcon) => (
              <IconButton
                key={footerIcon.id}
                color="secondary"
                style={{ padding: 0 }}
              >
                <img
                  alt={footerIcon.name}
                  src={footerIcon.icon}
                  className={classes.socialIcon}
                  onClick={() => window.open(`${footerIcon.url}`, "_blank")}
                />
              </IconButton>
            ))}
          </Grid>
        </Grid>
        <Toolbar className={classes.copyRightsSection}>
          <Typography variant="body2">
            &copy; Copyrights {new Date().getFullYear()} Aspire. All rights
            reserved.
          </Typography>
        </Toolbar>
      </Grid>
    </Grid>
  );
}

export default Footer;
