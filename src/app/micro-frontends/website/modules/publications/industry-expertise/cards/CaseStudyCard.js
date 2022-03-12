import React from "react";
import {
  Card,
  // CardActions,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { ROUTE_CASE_STUDY_DETAILS } from "../../../../shared/constants/route.const";

const usePublicationsCaseStudyStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: (props) => props.backgroundColor,
    height: "100%",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardDescription: {
    color: (props) => props.color,
    fontWeight: "bold",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

const CaseStudyCard = ({ item }) => {
  const classes = usePublicationsCaseStudyStyles(item);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        className={classes.card}
        component={Link}
        to={{
          pathname: ROUTE_CASE_STUDY_DETAILS.path + "/" + item.url,
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
          alt={item.alt}
          height="200"
          src={item.image}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" className={classes.cardDescription}>
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CaseStudyCard;
