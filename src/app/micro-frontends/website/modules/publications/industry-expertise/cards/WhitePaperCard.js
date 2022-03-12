import React from "react";
import { Card, Grid, makeStyles } from "@material-ui/core";

const usePublicationsBlogStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: (props) => props.backgroundColor,
    height: 350,
    cursor: "pointer",
  },
}));

const BlogCard = ({ item }) => {
  const classes = usePublicationsBlogStyles(item);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}></Card>
    </Grid>
  );
};

export default BlogCard;
