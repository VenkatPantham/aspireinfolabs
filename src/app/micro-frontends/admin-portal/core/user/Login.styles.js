import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5%",
  },
  imageSection: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  formSection: {
    textAlign: "center",
    padding: "0 5%",
  },
  loginImage: {
    width: "100%",
  },
  formLogo: {
    width: "12vw",
    [theme.breakpoints.down("xs")]: {
      width: "45%",
    },
  },
  formHeader: {
    margin: "5% 0",
    fontStyle: "italic",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: theme.palette.primary.main,
    padding: "0 10%",
    [theme.breakpoints.down("sm")]: {
      padding: "0 5%",
    },
  },
  formField: {
    width: "100%",
    margin: theme.spacing(1.5),
    fontSize: theme.typography.subtitle1.fontSize,
  },
  button: {
    textTransform: "none",
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2),
    },
  },
}));
