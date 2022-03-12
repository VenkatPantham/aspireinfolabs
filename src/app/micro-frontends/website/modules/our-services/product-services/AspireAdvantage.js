import React, { Fragment, useState } from "react";
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
import { useLayoutStyles } from "../../../../../../assets/styles/layoutStyles";
import useMobileView from "../../../../../shared/utils/hooks/useMobileView";
import useAutoUpdate from "../../../../../shared/utils/hooks/useAutoUpdate";
import { AUTO_CONTENT_SCROLL_INTERVAL } from "../../../../../shared/constants/util.const";
import CarouselIndicators from "../../../../../shared/components/CarouselIndicators";
import { theme } from "../../../../../../assets/styles/muiTheme";
import {
  ASPIRE_ADVANTAGE,
  ASPIRE_ADVANTAGE_DATA,
} from "./ProductService.content";
import { DASHED } from "../../../shared/images/practiceImages";

const useAspireAdvantageStyles = makeStyles(() => ({
  root: {
    padding: "0% 5%",
    paddingTop: "10%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: "center",
  },
  carouselContainer: {
    padding: "0% 2%",
    paddingTop: "5%",
    textAlign: "left",
  },
  card: {
    backgroundColor: "transparent",
    color: theme.palette.primary.contrastText,
    paddingLeft: "10%",
    paddingTop: 0,
  },
  cardContent: {
    textAlign: "left",
    minHeight: "15vw",
  },
  cardMedia: {
    backgroundSize: "90% 90%",
    height: "60vh",
  },
  mobileCardMedia: {
    width: "30vw",
  },
  textSubHeader: {
    fontWeight: "bold",
    paddingBottom: "5%",
  },
  textHeader: {
    padding: 0,
    textAlign: "left",
    color: theme.palette.primary.contrastText,
    opacity: "0.8",
    fontSize: "10rem",
    fontWeight: "bold",
  },
  navIcon: {
    fontSize: theme.typography.h2.fontSize,
    color: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderWidth: theme.spacing(0.3),
    borderRadius: "50%",
    borderStyle: "solid",
  },
  leftChevron: {
    paddingLeft: "35%",
  },
  rightChevron: {
    paddingRight: "35%",
  },
  practiceHeading: {
    fontWeight: "bold",
    fontStyle: "italic",
  },
  practiceSection: {
    padding: "10% 0 10% 0",
  },
  practiceBlock: {
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${DASHED})`,
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
    },
  },
  practiceCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25px",
    backgroundColor: theme.palette.info.main,
    padding: "10% 20% 10% 20%",
    [theme.breakpoints.only("xs")]: {
      padding: "5%",
    },
  },
  practiceImage: {
    objectFit: "contain",
  },
  practiceCardContent: {
    padding: 0,
    margin: 0,
    "&:last-child": {
      padding: 0,
    },
  },
  practiceTitle: {
    textAlign: "center",
    textTransform: "uppercase",
    color: theme.palette.primary.main,
    paddingTop: "10%",
    margin: 0,
  },
  practiceLine: {
    borderWidth: "2px",
    borderColor: theme.palette.background.default,
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  practiceIndex: {
    position: "absolute",
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    borderRadius: "50px",
    fontWeight: "bold",
    fontSize: "30px",
    zIndex: "1",
    [theme.breakpoints.only("xs")]: {
      display: "none",
    },
  },
  practiceInfo: {
    textAlign: "left",
    [theme.breakpoints.only("xs")]: {
      width: "100%",
      padding: "5% 0 10% 0",
    },
    paddingTop: "5%",
    width: "70%",
  },
}));

function AspireAdvantage() {
  const classes = useAspireAdvantageStyles();
  const layoutStyles = useLayoutStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const isMobileView = useMobileView();
  const chevronWidth = 50;

  useAutoUpdate(() => {
    if (isMobileView) setActiveItemIndex(activeItemIndex + 1);
  }, AUTO_CONTENT_SCROLL_INTERVAL);

  return (
    <Grid
      container
      justify="center"
      className={clsx(classes.root, layoutStyles.largeSection)}
    >
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          {ASPIRE_ADVANTAGE.heading}
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
        <Grid item xs={12} sm={7} md={5} className={classes.carouselContainer}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={1}
            infiniteLoop
          >
            {ASPIRE_ADVANTAGE_DATA.aspireAdvantageContent.map(
              (advantageContent, index) => (
                <Fragment key={index}>
                  <Card className={classes.card}>
                    <Typography variant="h1" className={classes.textHeader}>
                      .{index + 1}
                      {isMobileView ? (
                        <img
                          className={classes.mobileCardMedia}
                          src={advantageContent.image}
                          alt=""
                        />
                      ) : (
                        ""
                      )}
                    </Typography>
                  </Card>
                  <Card
                    className={classes.card}
                    style={{ paddingBottom: chevronWidth * 2 }}
                  >
                    <CardContent
                      className={classes.cardContent}
                      style={{ paddingBottom: chevronWidth }}
                    >
                      <Typography
                        variant="h6"
                        className={classes.textSubHeader}
                      >
                        {advantageContent.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.textInfo}
                      >
                        {advantageContent.info}
                      </Typography>
                    </CardContent>
                    {isMobileView ? (
                      <CarouselIndicators
                        array={ASPIRE_ADVANTAGE_DATA.aspireAdvantageContent}
                        color={theme.palette.highlight.main}
                        activeItemIndex={activeItemIndex}
                      />
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
                        leftChevron={<ArrowLeft className={classes.navIcon} />}
                        rightChevron={
                          <ArrowRight className={classes.navIcon} />
                        }
                        chevronWidth={chevronWidth * 0.5}
                        infiniteLoop
                      >
                        {ASPIRE_ADVANTAGE_DATA.aspireAdvantageContent.map(
                          (index) => (
                            <Fragment key={index}>{""}</Fragment>
                          )
                        )}
                      </ItemsCarousel>
                    )}
                  </Card>
                </Fragment>
              )
            )}
          </ItemsCarousel>
        </Grid>
        {isMobileView ? (
          ""
        ) : (
          <Grid item xs={5}>
            {/* <ParallaxContainer xOffset={0} yOffset={0} width="30vw"> */}
            <ItemsCarousel
              className={classes.carouselContainer}
              activeItemIndex={activeItemIndex}
              numberOfCards={1}
              infiniteLoop
              gutter={20}
            >
              {ASPIRE_ADVANTAGE_DATA.aspireAdvantageContent.map(
                (advantageContent, index) => (
                  <Card
                    className={classes.card}
                    key={index}
                    style={{ alignItems: "center" }}
                  >
                    <CardMedia
                      className={classes.cardMedia}
                      image={advantageContent.image}
                    ></CardMedia>
                  </Card>
                )
              )}
            </ItemsCarousel>
            {/* </ParallaxContainer> */}
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h3" className={classes.practiceHeading}>
          Build-Operate-Lead Practice
        </Typography>
      </Grid>
      <Grid
        container
        item
        direction="row"
        justify="space-around"
        align="center"
        xs={12}
        className={classes.practiceSection}
      >
        {ASPIRE_ADVANTAGE_DATA.practicesData.map((practice, index) => (
          <Grid
            container
            item
            xs={12}
            md={10}
            key={index}
            direction={index % 2 === 0 ? "row" : "row-reverse"}
          >
            <Grid
              container
              item
              xs={12}
              sm={6}
              className={classes.practiceBlock}
            >
              <Grid
                container
                item
                xs={12}
                direction={index % 2 === 0 ? "row" : "row-reverse"}
                alignItems="center"
                justify="flex-end"
              >
                <Grid item xs={12} sm={6}>
                  <Card className={classes.practiceCard}>
                    <CardMedia
                      component="img"
                      height="75px"
                      image={practice.image}
                      alt={practice.title}
                      className={classes.practiceImage}
                    />
                    <CardContent className={classes.practiceCardContent}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        className={classes.practiceTitle}
                      >
                        {practice.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item sm={5}>
                  <hr className={classes.practiceLine} />
                </Grid>
                <Typography
                  variant="p"
                  className={classes.practiceIndex}
                  style={{
                    right: index % 2 === 0 ? "-25px" : "calc(100% - 25px)",
                  }}
                >
                  {index + 1}
                </Typography>
              </Grid>
              <Typography
                variant="subtitle2"
                className={classes.practiceInfo}
                style={{
                  margin: index % 2 === 0 ? "0 auto 0 0" : "0 0 0 auto",
                }}
              >
                {practice.info}
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={6}
              className={classes.practiceBlock}
            ></Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default AspireAdvantage;
