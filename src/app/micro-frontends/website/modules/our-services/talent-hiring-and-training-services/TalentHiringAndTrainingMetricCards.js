import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useTalentHiringAndTrainingMetricsStyles = makeStyles((theme) => ({
  displayCard: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    margin: "2%",
    padding: "5%",
    textAlign: "center",
  },
  media: {
    height: "15vh",
    backgroundSize: "contain",
  },
  content: {
    height: "25vh",
  },
}));

function TalentHiringAndTrainingMetricCards(props) {
  const classes = useTalentHiringAndTrainingMetricsStyles();
  return (
    <Grid container justify="center" className={classes.cardsList}>
      {props.metricsList.map((metric, index) => (
        <Grid item xs={6} sm={3} key={index}>
          <Card className={classes.displayCard}>
            <CardMedia className={classes.media} image={metric.image} />
            <CardContent className={classes.content}>
              <Typography variant="h6">{metric.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default TalentHiringAndTrainingMetricCards;
