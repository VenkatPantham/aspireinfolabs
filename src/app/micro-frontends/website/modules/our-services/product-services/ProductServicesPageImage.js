import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import {
  PRODUCT_1,
  PRODUCT_2,
  PRODUCT_3,
  PRODUCT_4,
  PRODUCT_5,
  PRODUCT_6,
  PRODUCT_7,
  PRODUCT_8,
  PRODUCT_9,
  PRODUCT_10,
} from "../../../shared/images/pageheadIcons";
import ParallaxContainer from "../../../animations/components/ParallaxContainer";
import useMobileView from "../../../../../shared/utils/hooks/useMobileView";

const useProductServicesPageIconStyles = makeStyles((theme) => ({
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
    gridColumn: "3/4",
    gridRow: "1/2",
  },
  four: {
    gridColumn: "4/5",
    gridRow: "1/2",
  },
  five: {
    gridColumn: "2/3",
    gridRow: "2/4",
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
    gridColumn: "4/5",
    gridRow: "3/4",
  },
  nine: {
    gridColumn: "1/2",
    gridRow: "4/5",
  },
  ten: {
    gridColumn: "2/5",
    gridRow: "4/5",
  },
  image: {
    width: "100%",
  },
}));

const ProductServicesPageImage = () => {
  const classes = useProductServicesPageIconStyles();
  const isMobileView = useMobileView();

  return (
    <Container className={classes.root}>
      <div className={classes.one}>
        <img
          className={classes.image}
          src={PRODUCT_1}
          alt="We get your students access to the best jobs"
        />
      </div>
      <div className={classes.two}>
        <img
          className={classes.image}
          src={PRODUCT_2}
          alt="Placement season needn’t all you depend on for the success of your students"
        />
      </div>
      <div className={classes.three}>
        <img
          className={classes.image}
          src={PRODUCT_3}
          alt="We bring together the best jobs from the most sought after IT companies"
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
            src={PRODUCT_4}
            alt="By giving recruiters a better method to assess and pick candidates, we guarantee placements for your students "
          />
        </ParallaxContainer>
      </div>
      <div className={classes.five}>
        <img
          className={classes.image}
          src={PRODUCT_5}
          alt="We bridge the gap between academic curriculum and recruiter expectations, and train your students to become industry ready professionals "
        />
      </div>
      <div className={classes.six}>
        <ParallaxContainer
          xOffset={0}
          yOffset={0}
          trans={4}
          width={isMobileView ? "25vw" : "12.5vw"}
        >
          <img
            className={classes.image}
            src={PRODUCT_6}
            alt="We not only provide technical training but also behavioral and communication skills training, mentoring and guidance "
          />
        </ParallaxContainer>
      </div>
      <div className={classes.seven}>
        <img
          className={classes.image}
          src={PRODUCT_7}
          alt="With real world experiences and practical based learning, your students will perform on the job from day one"
        />
      </div>
      <div className={classes.eight}>
        <img
          className={classes.image}
          src={PRODUCT_8}
          alt="IT recruitment and training made simple. We bring together the best IT jobs and ensure placements for your students"
        />
      </div>
      <div className={classes.nine}>
        <img
          className={classes.image}
          src={PRODUCT_9}
          alt=" IT placements simplified. Most trusted placements partner for India’s top colleges. "
        />
      </div>
      <div className={classes.ten}>
        <img
          className={classes.image}
          src={PRODUCT_10}
          alt=" IT placements simplified. Most trusted placements partner for India’s top colleges. "
        />
      </div>
    </Container>
  );
};

export default ProductServicesPageImage;
