import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5%",
  },
  headerSection: {
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  headerRow: {
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
  },
  headerText: {
    display: "inline-block",
    marginRight: "3%",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    textTransform: "none",
    fontWeight: "bold",
    margin: "3% 0",
    padding: "0.5% 1.5%",
    backgroundColor: theme.palette.secondary.main,
  },
  imageButton: {
    display: "flex",
    alignItems: "center",
    textTransform: "none",
    fontWeight: "bold",
    margin: "3% 0",
    padding: "6px 16px",
    fontSize: 14,
    borderRadius: 3,
    color: "#000000DE",
    backgroundColor: theme.palette.secondary.main,
    cursor: "pointer",
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  headerRows: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 3.5%",
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      padding: "0 10%",
    },
  },
  formField: {
    width: "100%",
    margin: theme.spacing(1.5),
    fontSize: theme.typography.subtitle1.fontSize,
    textAlign: "left",
  },
  stepperData: {
    padding: "2% 3.5%",
  },
  stepperHeads: {
    fontWeight: "bold",
    textTransform: "capitalize",
    margin: "3% 0",
  },
  datePicker: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  calendarIcon: {
    position: "absolute",
    right: "6.25%",
  },
  imageBlock: {
    width: "100%",
    justifyContent: "center",
    position: "relative",
    margin: "5% 0",
  },
  image: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  closeIcon: {
    position: "absolute",
    cursor: "pointer",
    color: "black",
    right: "25%",
    [theme.breakpoints.down("xs")]: {
      right: 0,
    },
  },
  imageSection: {
    [theme.breakpoints.down("xs")]: {
      margin: "5% 0",
    },
    margin: "2% 0",
  },
}));
