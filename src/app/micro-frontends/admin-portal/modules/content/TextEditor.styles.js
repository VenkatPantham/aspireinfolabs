import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 3.5%",
    margin: "2% 0",
  },
  editor: {
    height: "40vh",
    backgroundColor: "#f8f8f8",
    padding: "0 2%",
  },
  button: {
    textTransform: "none",
    fontWeight: "bold",
    margin: "3% 0",
    backgroundColor: theme.palette.secondary.main,
  },
  buttons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
}));
