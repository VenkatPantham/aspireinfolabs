import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import { FiberManualRecord } from "@material-ui/icons";
import { theme } from "../../../assets/styles/muiTheme";

const useIndicatorStyles = makeStyles({
  inActiveIndicator: {
    paddingTop: "2%",
    marginBottom: "1%",
    color: (props) => props.color,
    opacity: "0.5",
    fontSize: "1.4rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },
  indicator: {
    paddingTop: "2%",
    marginBottom: "1%",
    color: (props) => props.color,
    fontSize: "1.5rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
  },
});

function CarouselIndicators(props) {
  const classes = useIndicatorStyles(props);
  return (
    <Grid container direction="row" justify="center">
      {props.array.map((item, index) => (
        <FiberManualRecord
          className={
            index === props.activeItemIndex % props.array.length
              ? classes.indicator
              : classes.inActiveIndicator
          }
          key={index}
        />
      ))}
    </Grid>
  );
}

CarouselIndicators.propTypes = {
  color: PropTypes.string,
  array: PropTypes.array,
  activeItemIndex: PropTypes.number,
};

export default CarouselIndicators;
