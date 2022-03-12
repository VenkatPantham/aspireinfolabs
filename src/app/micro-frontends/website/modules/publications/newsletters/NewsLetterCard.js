import React from "react";
import { Card, CardMedia, Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  ROUTE_ALUMNI_SPEAKS,
  ROUTE_ALUMNI_SPEAKS_DETAILS,
} from "../../../shared/constants/route.const";

const usePublicationsNewsLetterStyles = makeStyles((theme) => ({
  card: {
    objectFit: "contain",
    borderRadius: 3,
    width: "100%",
    height: "100%",
  },
}));

const NewsLetterCard = ({ item }) => {
  const classes = usePublicationsNewsLetterStyles(item);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        component={Link}
        to={{
          pathname: ROUTE_ALUMNI_SPEAKS.path + "/" + item.url,
          // state: {
          //   id: item.id,
          // },
        }}
      >
        <CardMedia
          className={classes.card}
          component="img"
          alt={item.alt}
          src={item.image}
        />
      </Card>
    </Grid>
  );
};

export default NewsLetterCard;
