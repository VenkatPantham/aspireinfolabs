import {
  Accordion,
  AccordionDetails,
  Grid,
  Link,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { ExpandMore } from "@material-ui/icons";
import React from "react";
import { footerLinks } from "./Footer.data";

const useCollapsibleFooterStyles = makeStyles((theme) => ({
  footerSections: {
    paddingTop: "5%",
  },
  footerSection: {
    alignItems: "flex-start",
  },
  childMenuDropdown: {
    backgroundColor: "black",
    color: "white",
  },
  navLinks: {
    color: theme.palette.secondary.main,
    paddingBottom: theme.spacing(1),
  },
  childMenuLinks: {
    margin: "-10px 0",
  },
}));

const AccordionSummary = withStyles({
  root: {},
  content: {
    justifyContent: "center",
    margin: 0,
  },
})(MuiAccordionSummary);

function CollapsibleFooterLinks(props) {
  const classes = useCollapsibleFooterStyles();
  const [childMenuExpanded, setChildMenuExpanded] = React.useState(false);
  const handleChange = (panel) => (event, childMenuExpanded) => {
    setChildMenuExpanded(childMenuExpanded ? panel : false);
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-around"
      align="center"
      className={classes.footerSections}
    >
      {footerLinks.map((footerLink) => (
        <Grid item className={classes.footerSection} key={footerLink.id}>
          <Accordion
            className={classes.childMenuDropdown}
            expanded={childMenuExpanded === footerLink.id}
            onChange={handleChange(footerLink.id)}
          >
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.sectionTitle} variant="h4">
                {footerLink.name} <ExpandMore />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                container
                direction="column"
                className={classes.childMenuLinks}
              >
                {footerLink.links.map((link) => (
                  <Link key={link.id} href={link.path}>
                    <Typography variant="h6" className={classes.navLinks}>
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
}

export default CollapsibleFooterLinks;
