import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import {
  TALENT_HIRING_AND_TRAINING_1,
  TALENT_HIRING_AND_TRAINING_2,
  TALENT_HIRING_AND_TRAINING_3,
  TALENT_HIRING_AND_TRAINING_4,
  TALENT_HIRING_AND_TRAINING_5,
  TALENT_HIRING_AND_TRAINING_6,
  TALENT_HIRING_AND_TRAINING_7,
  TALENT_HIRING_AND_TRAINING_8,
  TALENT_HIRING_AND_TRAINING_9,
  TALENT_HIRING_AND_TRAINING_10,
} from "../../../shared/images/pageheadIcons";
import ParallaxContainer from "../../../animations/components/ParallaxContainer";
import useMobileView from "../../../../../shared/utils/hooks/useMobileView";

const useTalentHiringAndTrainingIconStyles = makeStyles((theme) => ({
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
    gridColumn: "1/2",
    gridRow: "1/2",
  },
  two: {
    gridColumn: "2/3",
    gridRow: "1/2",
  },
  three: {
    gridColumn: "3/5",
    gridRow: "1/3",
  },
  four: {
    gridColumn: "2/3",
    gridRow: "2/4",
  },
  five: {
    gridColumn: "1/2",
    gridRow: "3/4",
  },
  six: {
    gridColumn: "2/3",
    gridRow: "3/4",
  },
  seven: {
    gridColumn: "3/4",
    gridRow: "3/4",
  },
  eight: {
    gridColumn: "2/3",
    gridRow: "4/5",
    zIndex: 1,
  },
  nine: {
    gridColumn: "2/5",
    gridRow: "4/5",
  },
  ten: {
    gridColumn: "4/5",
    gridRow: "4/5",
    zIndex: 1,
  },
  image: {
    width: "100%",
  },
}));

const TalentHiringAndTrainingPageImage = () => {
  const classes = useTalentHiringAndTrainingIconStyles();
  const isMobileView = useMobileView();

  return (
    <Container className={classes.root}>
      <div className={classes.one}>
        <ParallaxContainer
          xOffset={0}
          yOffset={0}
          trans={3}
          width={isMobileView ? "25vw" : "12.5vw"}
        >
          <img
            className={classes.image}
            src={TALENT_HIRING_AND_TRAINING_1}
            alt="Aspire has made countless successful careers and we are proud of our Alumni"
          />
        </ParallaxContainer>
      </div>
      <div className={classes.two}>
        <img
          className={classes.image}
          src={TALENT_HIRING_AND_TRAINING_2}
          alt="We bridge the gap between academic training and industry expectations, bringing together great jobs and talented students"
        />
      </div>
      <div className={classes.three}>
        <img
          className={classes.image}
          src={TALENT_HIRING_AND_TRAINING_3}
          alt="No matter what your goal, we can help put you on the right path"
        />
      </div>
      <div className={classes.four}>
        <img
          className={classes.image}
          src={TALENT_HIRING_AND_TRAINING_4}
          alt="Each student is different, and so is our approach to putting them on the right path and a glorious career "
        />
      </div>
      <div className={classes.five}>
        <img
          className={classes.image}
          src={TALENT_HIRING_AND_TRAINING_5}
          alt="We create a seamless fit from education to real world corporate jobs "
        />
      </div>
      <div className={classes.six}>
        <img
          className={classes.image}
          src={TALENT_HIRING_AND_TRAINING_6}
          alt="Programs made by industry experts that ensure the client sees value in our work and students fit right in to the client expectations "
        />
      </div>
      <div className={classes.seven}>
        <img
          className={classes.image}
          src={TALENT_HIRING_AND_TRAINING_7}
          alt="Our curriculum is custom-made to ensure the best fit with the client’s teams and goals "
        />
      </div>
      <div className={classes.eight}>
        <ParallaxContainer
          xOffset={0}
          yOffset={0}
          trans={4}
          width={isMobileView ? "25vw" : "12.5vw"}
        >
          <img
            className={classes.image}
            src={TALENT_HIRING_AND_TRAINING_8}
            alt="Our curriculum is custom-made to ensure the best fit with the client’s teams and goals "
          />
        </ParallaxContainer>
      </div>
      <div className={classes.nine}>
        <img
          className={classes.image}
          src={TALENT_HIRING_AND_TRAINING_9}
          alt="Our curriculum is custom-made to ensure the best fit with the client’s teams and goals "
        />
      </div>
      <div className={classes.ten}>
        <img
          className={classes.image}
          src={TALENT_HIRING_AND_TRAINING_10}
          alt="Our curriculum is custom-made to ensure the best fit with the client’s teams and goals "
        />
      </div>
    </Container>
  );
};

export default TalentHiringAndTrainingPageImage;
