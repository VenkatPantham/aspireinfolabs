import React, { useState } from "react";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import clsx from "clsx";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import useMobileView from "../../../../shared/utils/hooks/useMobileView";
import useTabView from "../../../../shared/utils/hooks/useTabView";
import useAutoUpdate from "../../../../shared/utils/hooks/useAutoUpdate";
import { AUTO_CONTENT_SCROLL_INTERVAL } from "../../../../shared/constants/util.const";
import { RIGHT_ARROW } from "../../shared/images/commonImages";
import { TALENT_INFO } from "./Home.content";

const useTalentsInfoStyles = makeStyles((theme) => ({
  root: {
    padding: "10% 3%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textAlign: "center",
  },
  cardContainer: {
    position: "relative",
  },
  card: {
    borderRadius: "25px",
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    minHeight: "20vh",
    backgroundSize: "50% 50%",
  },
  cardContent: {
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: "25px",
    textAlign: "center",
    height: "100%",
    padding: "10% 5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  textInfo: {
    fontWeight: 300,
  },
  title: {
    paddingBottom: "10%",
    fontWeight: "bold",
  },
  subText: {
    marginTop: "10%",
  },
}));

function TalentsInfo() {
  const layoutStyles = useLayoutStyles();
  const isMobileView = useMobileView();
  const isTabView = useTabView();
  const matches = useMediaQuery("(min-width:960px)");
  const classes = useTalentsInfoStyles(isMobileView, matches);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

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
        <Typography variant="h3" className={classes.title}>
          {TALENT_INFO.title}
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={10} justify="center">
        {TALENT_INFO.talentsInfo.map((graduateInfoCard, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className={classes.cardContainer}
            key={index}
          >
            <Card className={clsx(classes.card)}>
              <CardMedia
                className={classes.cardMedia}
                image={graduateInfoCard.image}
              />
              <CardContent className={classes.cardContent}>
                <Typography variant="subtitle1" className={classes.textInfo}>
                  {graduateInfoCard.title}
                </Typography>
              </CardContent>
            </Card>
            {index < 3 && (
              <img
                src={RIGHT_ARROW}
                alt="right arrow icon"
                style={{
                  display: isTabView && !isMobileView ? "none" : "block",
                  position: "absolute",
                  transform: `rotate(${isMobileView ? 90 : 0}deg)`,
                  right: isMobileView ? "46%" : "-4%",
                  top: isMobileView ? "95%" : "45%",
                }}
              />
            )}
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="subtitle1" className={classes.subText}>
          {TALENT_INFO.description}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TalentsInfo;
