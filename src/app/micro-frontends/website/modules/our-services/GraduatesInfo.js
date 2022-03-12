import React, { Fragment, useState } from "react";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ItemsCarousel from "react-items-carousel";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import { graduatesInfo } from "./GraduatesInfo.data";
import useMobileView from "../../../../shared/utils/hooks/useMobileView";
import useTabView from "../../../../shared/utils/hooks/useTabView";
import useAutoUpdate from "../../../../shared/utils/hooks/useAutoUpdate";
import { AUTO_CONTENT_SCROLL_INTERVAL } from "../../../../shared/constants/util.const";
import CarouselIndicators from "../../../../shared/components/CarouselIndicators";
import { theme } from "../../../../../assets/styles/muiTheme";

const useGraduatesInfoStyles = makeStyles((themeData) => ({
  root: {
    padding: "10% 3%",
    backgroundColor: themeData.palette.primary.main,
    color: themeData.palette.primary.contrastText,
    textAlign: "center",
  },
  carouselContainer: {
    padding: "5%",
  },
  card: {
    backgroundColor: themeData.palette.primary.contrastText,
    height: "100%",
    display: "flex",
    borderRadius: "25px",
    flexDirection: "column",
    [themeData.breakpoints.down("xs")]: {
      margin: "0 15%",
    },
  },
  inActiveCard: {
    backgroundColor: themeData.palette.primary.contrastText,
    borderRadius: "25px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    opacity: "0.5",
  },
  cardMedia: {
    backgroundColor: themeData.palette.secondary.main,
    padding: "5%",
    minHeight: "20vh",
    backgroundSize: "50% 50%",
    borderRadius: "25px",
  },
  cardContent: {
    height: "100%",
    textAlign: "left",
    padding: "5%",
  },
  textInfo: {
    fontWeight: 300,
  },
  textHeader: {
    padding: themeData.spacing(1),
    color: themeData.palette.secondary.main,
    fontWeight: "bold",
  },
  title: {
    paddingBottom: "10%",
    fontWeight: "bold",
  },
  navIcon: {
    fontSize: themeData.typography.h3.fontSize,
    color: themeData.palette.secondary.main,
    borderColor: themeData.palette.secondary.main,
    borderWidth: themeData.spacing(0.3),
    borderRadius: "50%",
    borderStyle: "solid",
  },
  leftChevron: {
    paddingTop: "15%",
    paddingLeft: "35%",
  },
  rightChevron: {
    paddingTop: "15%",
    paddingRight: "35%",
  },
}));

function GraduatesInfo(props) {
  const layoutStyles = useLayoutStyles();
  const isMobileView = useMobileView();
  const isTabView = useTabView();
  const classes = useGraduatesInfoStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  const noOfCards = isMobileView ? 1 : isTabView ? 2 : 3;

  useAutoUpdate(() => {
    if (isMobileView) setActiveItemIndex(activeItemIndex + 1);
  }, AUTO_CONTENT_SCROLL_INTERVAL);

  return (
    <Grid
      container
      justify="center"
      className={clsx(
        classes.root,
        layoutStyles.largeSection,
        props.graduateBackground
      )}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Typography
          variant="h3"
          className={clsx(classes.title, props.graduateTitle)}
        >
          Aspire graduates are <i>masters</i> of the technical skills you need
          in your <i>teams</i>
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        align="center"
        item
        xs={12}
      >
        <Grid item xs={6} sm={3} md={2}>
          <ItemsCarousel
            className={classes.carouselContainer}
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            showSlither
            numberOfCards={1}
            infiniteLoop
          >
            {graduatesInfo.map((graduateInfoCard, index) => (
              <Typography
                variant="h5"
                className={clsx(classes.textHeader, props.graduateTextHeader)}
                key={index}
              >
                {graduateInfoCard.title}
              </Typography>
            ))}
          </ItemsCarousel>
          {isMobileView ? (
            ""
          ) : (
            <ItemsCarousel
              className={classes.carouselContainer}
              classes={{
                leftChevronWrapper: classes.leftChevron,
                rightChevronWrapper: classes.rightChevron,
              }}
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={1}
              leftChevron={
                <ArrowLeft
                  className={clsx(classes.navIcon, props.graduateNavIcon)}
                />
              }
              rightChevron={
                <ArrowRight
                  className={clsx(classes.navIcon, props.graduateNavIcon)}
                />
              }
              chevronWidth={chevronWidth * 0.5}
              infiniteLoop
            >
              {graduatesInfo.map((index) => (
                <Fragment key={index}>{""}</Fragment>
              ))}
            </ItemsCarousel>
          )}
        </Grid>
        <Grid item xs={12} sm={8}>
          <ItemsCarousel
            className={classes.carouselContainer}
            activeItemIndex={activeItemIndex}
            numberOfCards={noOfCards}
            infiniteLoop
            gutter={20}
          >
            {graduatesInfo.map((graduateInfoCard, index) => (
              <Card
                className={clsx(
                  index ===
                    (activeItemIndex % graduatesInfo.length < 0
                      ? (activeItemIndex % graduatesInfo.length) +
                        graduatesInfo.length
                      : activeItemIndex % graduatesInfo.length)
                    ? classes.card
                    : classes.inActiveCard
                )}
                key={index}
              >
                <CardMedia
                  className={classes.cardMedia}
                  image={graduateInfoCard.image}
                ></CardMedia>
                <CardContent className={classes.cardContent}>
                  <Typography variant="subtitle1" className={classes.textInfo}>
                    {graduateInfoCard.info}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </ItemsCarousel>
          {isMobileView ? (
            <CarouselIndicators
              array={graduatesInfo}
              color={
                props
                  ? theme.palette.primary.main
                  : theme.palette.secondary.main
              }
              activeItemIndex={activeItemIndex}
            />
          ) : (
            ""
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default GraduatesInfo;
