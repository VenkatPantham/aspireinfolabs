import { Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { footerLinks } from "./Footer.data";

const spreadedFooterLinksStyles = makeStyles((theme) => ({
  footerSection: {
    padding: "2%",
    alignItems: "flex-start",
    [theme.breakpoints.down("xs")]: {
      alignItems: "center",
    },
  },
  navLinks: {
    color: theme.palette.secondary.main,
    marginTop: theme.spacing(1),
  },
  sectionTitle: {
    fontWeight: 700,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginTop: 0,
      marginBottom: theme.spacing(1.5),
    },
  },
}));

function SpreadedFooterLinks() {
  const classes = spreadedFooterLinksStyles();
  return (
    <>
      {footerLinks.map((footerLink) => (
        <Grid
          container
          item
          direction="column"
          xs={12}
          sm={4}
          md={3}
          key={footerLink.id}
          className={classes.footerSection}
        >
          <Typography variant="body1" className={classes.sectionTitle}>
            {footerLink.name}
          </Typography>
          {footerLink.links.map((link) => (
            <Link key={link.id} href={link.path}>
              <Typography variant="subtitle1" className={classes.navLinks}>
                {link.name}
              </Typography>
            </Link>
          ))}
        </Grid>
      ))}
    </>
  );
}

export default SpreadedFooterLinks;
