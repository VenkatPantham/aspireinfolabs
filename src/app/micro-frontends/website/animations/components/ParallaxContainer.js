import { makeStyles } from "@material-ui/core";
import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / -10}px,${y / 10}px,0)`;
const trans3 = (x, y) => `translate3d(${x / -10}px,${y / -10}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 10}px,${y / -10}px,0)`;
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`;
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`;
// const trans4 = (x, y) => `translate3d(${x / 6}px,${y / 6}px,0)`;

const useParallaxStyles = makeStyles({
  parallaxContainer: (props) => ({
    position: "absolute",
    willChange: "transform",
    width: props.width,
  }),
});

function ParallaxContainer(props) {
  const classes = useParallaxStyles(props);
  const [springProps, set] = useSpring(() => ({
    xy: [props.xOffset, props.yOffset],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  let trans;
  switch (props.trans) {
    case 2:
      trans = trans2;
      break;
    case 3:
      trans = trans3;
      break;
    case 4:
      trans = trans4;
      break;
    default:
      trans = trans1;
      break;
  }

  return (
    <Fragment style={{ position: "relative" }}>
      <animated.div
        className={classes.parallaxContainer}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        // onScroll={() => console.log("scroll")}
        style={{
          transform: springProps.xy.interpolate(trans),
        }}
      >
        {props.children}
      </animated.div>
    </Fragment>
  );
}

export default ParallaxContainer;
