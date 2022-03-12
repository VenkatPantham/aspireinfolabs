import React from "react";
import { useSpring, animated } from "react-spring";

const TalentElevation = (props) => {
  const animation = useSpring({
    top: props.animating ? "-18.85%" : "-45%",
    config: {
      duration: 1500,
    },
  });

  return <animated.img style={animation} {...props} />;
};

export default TalentElevation;
