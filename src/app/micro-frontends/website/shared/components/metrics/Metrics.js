import React from "react";
import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { useLayoutStyles } from "../../../../../../assets/styles/layoutStyles";
import clsx from "clsx";

const useMetricsStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    padding: "5% 10%",
  },
  title: {
    fontWeight: "bold",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
      paddingRight: 0,
      marginBottom: theme.spacing(2),
    },
    padding: "3%",
  },
  cardsList: {
    paddingLeft: "25%",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "25%",
    },
  },
  displayCard: {
    marginBottom: "5%",
    display: "flex",
    justifyContent: "flex-end",
    color: theme.palette.primary.main,
  },
  metricValue: {
    fontWeight: "bold",
    alignSelf: "flex-start",
    paddingRight: theme.spacing(1),
  },
  verticalLine: {
    borderLeftWidth: theme.spacing(0.5),
    borderLeftColor: theme.palette.primary.main,
    borderLeftStyle: "solid",
    minHeight: "12vh",
  },
  metricInfo: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    paddingBottom: 0,
    marginBottom: 0,
    alignSelf: "flex-end",
    width: "10vw",
  },
}));

function Metrics(props) {
  const classes = useMetricsStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Container className={clsx(classes.root, layoutStyles.mediumSection)}>
      <Typography variant="h3" className={classes.title}>
        <i>{props.title}</i>
      </Typography>
      <Grid container className={classes.cardsList}>
        {props.metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} className={classes.displayCard} key={index}>
            <Typography className={classes.metricValue} variant="h2">
              {metric.value}
            </Typography>
            <Typography className={classes.verticalLine}></Typography>
            <Typography variant="body1" className={classes.metricInfo}>
              {metric.info}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Metrics;
