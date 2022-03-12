import React, { useState } from "react";
import { Container, makeStyles, Typography } from "@material-ui/core";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import clsx from "clsx";
import ItemsCarousel from "react-items-carousel";
import useMobileView from "../../../../shared/utils/hooks/useMobileView";
import CarouselIndicators from "../../../../shared/components/CarouselIndicators";
import { theme } from "../../../../../assets/styles/muiTheme";
import useAutoUpdate from "../../../../shared/utils/hooks/useAutoUpdate";
import { AUTO_LOGOS_SCROLL_INTERVAL } from "../../../../shared/constants/util.const";

const displayClientsListStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      padding: 0,
    },
    padding: "7% 10%",
  },
  contentWrapper: {
    backgroundColor: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(4),
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: "5%",
  },
  imagesList: {
    textAlign: "center",
    padding: "5%",
  },
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
  carouselItem: {
    height: "90%",
  },
  imageContainer: {
    width: "30vw",
    [theme.breakpoints.up("sm")]: {
      width: "15vw",
    },
  },
}));

function DisplayClientsList(props) {
  const classes = displayClientsListStyles();
  const layoutStyles = useLayoutStyles();
  const isMobileView = useMobileView();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  useAutoUpdate(() => {
    setActiveItemIndex(activeItemIndex + 1);
  }, AUTO_LOGOS_SCROLL_INTERVAL);

  return (
    <Container
      className={clsx(
        classes.root,
        layoutStyles.smallSection,
        props.background
      )}
    >
      <Container className={classes.contentWrapper}>
        <Typography variant="h3" className={classes.heading}>
          Clients who trust us
        </Typography>
        <ItemsCarousel
          classes={{
            itemsInnerWrapper: classes.carouselContainer,
            itemWrapper: classes.carouselItem,
          }}
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={isMobileView ? 2 : 4}
          gutter={15}
          infiniteLoop
        >
          {props.displayClientsList.map((displayItem) => (
            <img
              src={displayItem.img}
              alt={displayItem.alt}
              className={classes.imageContainer}
            />
          ))}
        </ItemsCarousel>
        <CarouselIndicators
          array={props.displayClientsList}
          color={theme.palette.highlight.main}
          activeItemIndex={activeItemIndex}
        />
      </Container>
    </Container>
  );
}

export default DisplayClientsList;
