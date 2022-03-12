import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5%",
  },
  content: {
    marginTop: "3%",
    border: `2px dashed ${theme.palette.highlight.main}`,
  },
  inputField: {
    padding: 0,
    marginRight: "7%",
    display: "flex",
    alignItems: "center",
    borderColor: "#c9c9c9",
  },
  inputRoot: {
    marginLeft: theme.spacing(1),
    fontSize: 16,
  },
  iconButton: {
    padding: 10,
    fontSize: 40,
  },
  paper: {
    width: "100%",
  },
  header: {
    padding: "2% 0",
  },
  buttonSection: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  button: {
    textTransform: "none",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: theme.palette.primary.main,
    margin: "0 2%",
  },
  filterButton: {
    textTransform: "none",
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
    margin: "0 2%",
  },
  buttonText: {
    fontSize: 14,
    color: "black",
    display: "flex",
    flexWrap: "nowrap",
  },
  table: {
    minWidth: 750,
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
  tableCell: {
    fontSize: 12,
  },
}));
