import React from "react";
import { Card, CardMedia, Grid, makeStyles } from "@material-ui/core";

const usePublicationsEventStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: (props) => props.backgroundColor,
    height: "100%",
    cursor: "pointer",
  },
}));

const EventCard = ({ item }) => {
  const classes = usePublicationsEventStyles(item);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          component="iframe"
          title={item.title}
          height="350"
          src={item.video}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </Card>
    </Grid>
  );
};

export default EventCard;
