import React from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../../assets/styles/layoutStyles";
import AutoFillButton from "../../../animations/components/AutoFillButton";
import { theme } from "../../../../../../assets/styles/muiTheme";

const usePageHeadStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      marginTop: "15%",
      flexDirection: "column",
    },
    alignItems: "center",
    justifyContent: "space-around",
    overflowY: "hidden",
  },
  contentSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    padding: "5% 0 5% 5%",
  },
  textSection: {
    padding: 0,
    paddingBottom: "5%",
  },
  buttonSection: {
    margin: "5%",
    padding: "5%",
  },
  secondSection: {
    alignSelf: "flex-end",
    padding: (props) => (props.contactPage ? "5% 5% 0 2%" : 0),
    [theme.breakpoints.down("xs")]: {
      padding: (props) => (props.contactPage ? 0 : 0),
    },
  },
}));

function PageHeadSection(props) {
  const classes = usePageHeadStyles(props);
  const layoutStyles = useLayoutStyles();

  return (
    <Container
      className={clsx(
        classes.root,
        props.backgroundClass,
        layoutStyles.largeSection
      )}
    >
      <Container className={classes.contentSection}>
        <Container className={classes.textSection}>
          <Typography variant="h1" className={props.headingClass}>
            {props.heading}
          </Typography>
          <Typography variant="h5" className={props.subHeadingClass}>
            {props.subHeading}
          </Typography>
        </Container>
        {props.contactPage ? null : (
          <Container classes={classes.buttonSection}>
            <AutoFillButton
              width={180}
              height={60}
              units={"px"}
              color={theme.palette.secondary.main}
              classes={props.buttonClass}
              path="/contact"
            >
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Contact Us
              </Typography>
            </AutoFillButton>
          </Container>
        )}
      </Container>
      <Container className={classes.secondSection}>{props.children}</Container>
    </Container>
  );
}

export default PageHeadSection;
