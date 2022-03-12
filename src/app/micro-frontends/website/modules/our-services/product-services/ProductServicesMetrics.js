import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../../assets/styles/layoutStyles";
import { productServicesMetricsData } from "./ProductService.content";
import useMobileView from "../../../../../shared/utils/hooks/useMobileView";

const productServicesMetricsStyles = makeStyles((theme) => ({
  root: {
    padding: "10% 3%",
  },
  heading: {
    fontWeight: "bold",
    paddingBottom: "10%",
  },
  card: {
    borderRadius: "25px",
    margin: "5%",
    display: "flex",
    [theme.breakpoints.only("xs")]: {
      margin: "5% 15%",
    },
  },
  cardContent: {
    backgroundColor: theme.palette.lightBackground.main,
    display: "flex",
    flexDirection: "column",
    width: "50%",
    padding: "5%",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  cardMedia: {
    width: "40%",
    backgroundColor: theme.palette.lightBackground.main,
    [theme.breakpoints.only("xs")]: {
      width: "100%",
    },
  },
  cardTitle: {
    fontWeight: "bold",
  },
  cardBody: {
    paddingTop: "3%",
  },
}));

function ProductServicesMetrics() {
  const classes = productServicesMetricsStyles();
  const layoutStyles = useLayoutStyles();
  const isMobileView = useMobileView();

  return (
    <Container className={clsx(layoutStyles.largeSection, classes.root)}>
      {productServicesMetricsData.map((productService, index) => (
        <Card
          style={{
            flexDirection: isMobileView
              ? "column-reverse"
              : index % 2 === 0
              ? "row"
              : "row-reverse",
          }}
          className={classes.card}
          key={index}
        >
          <CardContent className={classes.cardContent}>
            <Typography
              component="h5"
              variant="h5"
              className={classes.cardTitle}
            >
              {productService.title}
            </Typography>
            <Typography
              variant="subtitle2"
              component="p"
              className={classes.cardBody}
            >
              {productService.body}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            className={classes.cardMedia}
            style={{
              borderRadius: isMobileView
                ? "25px 25px 0 0"
                : index % 2 === 0
                ? "0 25px 25px 0"
                : "25px 0 0 25px",
            }}
            image={productService.image}
            alt={productService.title}
          />
        </Card>
      ))}
    </Container>
  );
}

export default ProductServicesMetrics;
