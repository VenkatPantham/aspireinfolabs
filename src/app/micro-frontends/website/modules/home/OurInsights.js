import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import { Link } from "react-router-dom";
import useMobileView from "../../../../shared/utils/hooks/useMobileView";
import { AUTO_INSIGHTS_SCROLL_INTERVAL } from "../../../../shared/constants/util.const";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { INSIGHTS_INFO } from "./Home.content";

const ourInsightsStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "0% 3%",
  },
  heading: {
    fontWeight: "bold",
    paddingBottom: "10%",
  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "25px",
    height: "100%",
    margin: "0% 5%",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      margin: "0 15%",
    },
  },
  cardMedia: {
    borderRadius: "25px",
    height: "20vh",
  },
  cardContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "5% 10%",
  },
  cardTitle: {
    borderRadius: "25px",
    fontWeight: "bold",
  },
  cardFooter: {
    paddingTop: "5%",
  },
  button: {
    marginTop: "10%",
  },
  buttonText: {
    textTransform: "none",
    fontWeight: "bold",
    fontStyle: "italic",
  },
}));

function OurInsights() {
  const classes = ourInsightsStyles();
  const layoutStyles = useLayoutStyles();
  const isMobileView = useMobileView();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Container className={clsx(layoutStyles.largeSection, classes.root)}>
      <Typography variant="h3" className={classes.heading}>
        {INSIGHTS_INFO.title}
      </Typography>
      <Carousel
        arrows={false}
        showDots={false}
        swipeable={true}
        draggable={true}
        keyBoardControl={true}
        infinite={true}
        centerMode={!isMobileView}
        autoPlay={true}
        autoPlaySpeed={AUTO_INSIGHTS_SCROLL_INTERVAL}
        responsive={responsive}
        customTransition="transform 1500ms ease-in-out"
      >
        {INSIGHTS_INFO.ourInsightsData.map((ourInsight, index) => (
          <Card className={classes.card} key={index}>
            <CardMedia
              component="img"
              image={ourInsight.image}
              alt={ourInsight.title + " image"}
              className={classes.cardMedia}
            />
            <CardContent className={classes.cardContent}>
              <Typography
                gutterBottom
                variant="h5"
                className={classes.cardTitle}
              >
                {ourInsight.title}
              </Typography>
              <Grid
                container
                direction="row"
                justify="space-between"
                className={classes.cardFooter}
              >
                <Grid item>
                  <Typography variant="subtitle2" className={classes.cardDate}>
                    {ourInsight.date}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="subtitle2"
                    className={classes.cardAuthor}
                  >
                    {ourInsight.author}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        ))}
      </Carousel>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        className={classes.button}
      >
        <Typography variant="subtitle1" className={classes.buttonText}>
          {INSIGHTS_INFO.buttonText}
        </Typography>
      </Button>
    </Container>
  );
}

export default OurInsights;
