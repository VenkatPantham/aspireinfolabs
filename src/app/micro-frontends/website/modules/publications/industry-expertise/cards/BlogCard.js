import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ROUTE_BLOG_DETAILS } from "../../../../shared/constants/route.const";

const usePublicationsBlogStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: (props) => props.backgroundColor,
    height: "100%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardTitle: {
    color: (props) => props.color,
    textTransform: "uppercase",
    fontWeight: 700,
  },
  cardDescription: {
    color: (props) => props.color,
    fontWeight: "bold",
  },
  cardFooter: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    justifyContent: "space-between",
    gridColumnGap: 10,
    margin: theme.spacing(1),
  },
  cardFooterItems: {
    color: (props) => props.color,
  },
}));

const BlogCard = ({ item }) => {
  const classes = usePublicationsBlogStyles(item);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        className={classes.card}
        component={Link}
        to={{
          pathname: ROUTE_BLOG_DETAILS.path + "/" + item.url,
          // state: {
          //   id: item.id,
          // },
        }}
        style={{
          textDecoration: "none",
        }}
      >
        <CardMedia
          component="img"
          alt={item.title}
          height="200"
          src={item.image}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" className={classes.cardDescription}>
            {item.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardFooter}>
          <Typography variant="subtitle2" className={classes.cardFooterItems}>
            {item.date && (
              <>
                {new Date(item.date).toLocaleString("default", {
                  month: "short",
                })}
                &nbsp;
                {("0" + new Date(item.date).getDate()).slice(-2)}
                ,&nbsp;{new Date(item.date).getFullYear()}
              </>
            )}
          </Typography>
          <Typography variant="subtitle2" className={classes.cardFooterItems}>
            By {item.author}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BlogCard;
