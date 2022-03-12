import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import {
  HOME_PAGE_1,
  HOME_PAGE_2,
  HOME_PAGE_3,
  HOME_PAGE_4,
  HOME_PAGE_5,
  HOME_PAGE_6,
  HOME_PAGE_7,
  HOME_PAGE_8,
} from "../../shared/images/pageheadIcons";
import ParallaxContainer from "../../animations/components/ParallaxContainer";
import useMobileView from "../../../../shared/utils/hooks/useMobileView";

const useHomePageIconStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gridTemplateRows: "repeat(4,1fr)",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "50vw",
    },
  },
  one: {
    gridColumn: "2/3",
    gridRow: "1/2",
  },
  two: {
    gridColumn: "3/4",
    gridRow: "1/2",
  },
  three: {
    gridColumn: "4/5",
    gridRow: "1/3",
  },
  four: {
    gridColumn: "4/5",
    gridRow: "1/2",
  },
  five: {
    gridColumn: "2/4",
    gridRow: "2/4",
  },
  six: {
    gridColumn: "3/4",
    gridRow: "2/3",
  },
  seven: {
    gridColumn: "1/3",
    gridRow: "3/5",
  },
  eight: {
    gridColumn: "3/5",
    gridRow: "3/5",
  },
  image: {
    width: "100%",
  },
}));

const HomePageImage = () => {
  const classes = useHomePageIconStyles();
  const isMobileView = useMobileView();

  return (
    <Container className={classes.root}>
      <div className={classes.one}>
        <img
          className={classes.image}
          src={HOME_PAGE_1}
          alt="Aspire students are not only satisfied with our programs, they recommend us to their peers"
        />
      </div>
      <div className={classes.two}>
        <img
          className={classes.image}
          src={HOME_PAGE_5}
          alt="each student is different, as are our training programs"
        />
      </div>
      <div className={classes.three}>
        <img
          className={classes.image}
          src={HOME_PAGE_6}
          alt="We customize class content based on each student’s individual needs and aptitude "
        />
      </div>
      <div className={classes.four}>
        <ParallaxContainer
          xOffset={0}
          yOffset={0}
          trans={3}
          width={isMobileView ? "25vw" : "12.5vw"}
        >
          <img
            className={classes.image}
            src={HOME_PAGE_2}
            alt="Aspire students and their success stories speak for the effectiveness of our talent training programs "
          />
        </ParallaxContainer>
      </div>
      <div className={classes.five}>
        <img
          className={classes.image}
          src={HOME_PAGE_7}
          alt="Our programs are tailor made to the needs of our clients, making sure our talent fits the bill "
        />
      </div>
      <div className={classes.six}>
        <ParallaxContainer
          xOffset={0}
          yOffset={0}
          trans={3}
          width={isMobileView ? "25vw" : "12.5vw"}
        >
          <img
            className={classes.image}
            src={HOME_PAGE_3}
            alt="We fast track our students’ careers and make them 100% job ready "
          />
        </ParallaxContainer>
      </div>
      <div className={classes.seven}>
        <img
          className={classes.image}
          src={HOME_PAGE_4}
          alt=" IT training that prepares students for the real world through intensive, updated and holistic curriculum "
        />
      </div>
      <div className={classes.eight}>
        <img
          className={classes.image}
          src={HOME_PAGE_8}
          alt="Constant feedback mechanisms make sure each student is fully prepared for their job"
        />
      </div>
    </Container>
  );
};

export default HomePageImage;
