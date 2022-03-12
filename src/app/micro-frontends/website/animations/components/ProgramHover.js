import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import useMobileView from "../../../../shared/utils/hooks/useMobileView";

const ProgramHover = ({ index, expanded, children }) => {
  const [hoveredProgram, setHoveredProgram] = useState(null);
  const [programHovered, setProgramHovered] = useState(false);
  const isMobileView = useMobileView();

  const animation = useSpring({
    transform:
      programHovered && !expanded && !isMobileView ? "scale(1.05)" : "scale(1)",
  });

  return (
    <animated.div
      style={index === hoveredProgram ? animation : null}
      onMouseEnter={() => {
        setHoveredProgram(index);
        setProgramHovered(true);
      }}
      onMouseLeave={() => {
        setHoveredProgram(index);
        setProgramHovered(false);
      }}
    >
      {children}
    </animated.div>
  );
};

export default ProgramHover;
