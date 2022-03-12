import { makeStyles } from "@material-ui/core";

export const useLayoutStyles = makeStyles({
  largeSection: {
    minHeight: "90vh",
    overflow: "hidden",
  },
  mediumSection: {
    minHeight: "60vh",
    overflow: "hidden",
  },
  smallSection: {
    minHeight: "40vh",
    overflow: "hidden",
  },
  xSmallSection: {
    minHeight: "25vh",
    overflow: "hidden",
  },
});
