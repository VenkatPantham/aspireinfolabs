import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const ExpandArrow = ({ index, children }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [arrowHovered, setArrowHovered] = useState(false);

  const animation = useSpring({
    transform: arrowHovered
      ? "translateX(25%) scaleX(1.5)"
      : "translateX(0%) scaleX(1)",
  });

  return (
    <animated.div
      style={index === hoveredIndex ? animation : null}
      onMouseEnter={() => {
        setHoveredIndex(index);
        setArrowHovered(true);
      }}
      onMouseLeave={() => {
        setHoveredIndex(index);
        setArrowHovered(false);
      }}
    >
      {children}
    </animated.div>
  );
};

export default ExpandArrow;
