import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Link, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useAutoFillStyles = makeStyles((theme) => ({
  main: (props) => ({
    position: "relative",
    width: `${props.width}${props.units}`,
    height: `${props.height}${props.units}`,
    opacity: "1",
    cursor: "pointer",
  }),
  clickFill: (props) => ({
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    opacity: "1",
    backgroundColor: props.color,
    borderRadius: `${props.height / 2}${props.units}`,
  }),

  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function AutoFillButton(props) {
  const classes = useAutoFillStyles(props);
  const history = useHistory();
  const [openClickAnimation, toggleClick] = useState(false);
  const clickSpringProps = useSpring({
    width: openClickAnimation
      ? `${props.width}${props.units}`
      : `${props.height}${props.units}`,
  });

  const onButtonClick = (event) => {
    event.preventDefault(); //prevent transition
    toggleClick(!openClickAnimation);

    window.setTimeout(() => {
      history.push(props.path);
    }, 1000);
  };

  return (
    <div className={classes.main} onClick={onButtonClick}>
      {/* <animated.div className={classes.hoverFill} style={hoverSpringProps} /> */}
      <animated.div className={classes.clickFill} style={clickSpringProps} />
      <animated.div className={classes.content}>
        <Link className={props.classes}>{props.children}</Link>
      </animated.div>
    </div>
  );
}

export default AutoFillButton;
