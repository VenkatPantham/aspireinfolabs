import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5%",
    margin: 0,
  },
  settingsText: {
    margin: "2% 0",
  },
  accordian: {
    position: "unset",
  },
  accordionSummary: {
    backgroundColor: theme.palette.info.main,
    color: theme.palette.primary.main,
  },
  accordionSummaryContent: {
    margin: "2% 0",
  },
  accordionDetails: {
    padding: 0,
    textAlign: "center",
  },
  notifyText: {
    margin: "2% 0",
    textAlign: "left",
    color: theme.palette.secondary.main,
  },
  icons: {
    margin: 10,
    cursor: "pointer",
  },
  button: {
    textTransform: "none",
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    width: "100%",
    marginBottom: "5%",
  },
  table: {
    minWidth: 750,
  },
  headerRows: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
  },
  dataRows: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));
