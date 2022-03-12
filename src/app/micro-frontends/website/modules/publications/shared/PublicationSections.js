import React from "react";
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";

const usePublicationsSectionStyles = makeStyles((theme) => ({
  cardSection: {
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(10),
    },
  },
  cardBlock: {
    marginBottom: theme.spacing(10),
    [theme.breakpoints.up("xs")]: {
      marginLeft: "5%",
      marginRight: "5%",
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: "10%",
      marginRight: "10%",
    },
    [theme.breakpoints.up("lg")]: {
      marginLeft: "15%",
      marginRight: "15%",
    },
  },
  toolBar: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "flex-start",
      marginTop: 25,
      marginBottom: 15,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
    justifyContent: "space-between",
    padding: 0,
    marginBottom: 10,
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(1),
    },
    textTransform: "none",
    fontSize: theme.typography.h6.fontSize,
  },
}));

const PublicationSections = ({ title, children }) => {
  const classes = usePublicationsSectionStyles();
  return (
    <Paper className={classes.cardBlock} elevation="1">
      <Toolbar className={classes.toolBar}>
        <Typography variant="h3">{title}</Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type="button"
        >
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            See More
          </Typography>
        </Button>
      </Toolbar>
      <Grid container justify="center" spacing={3}>
        {children}
      </Grid>
    </Paper>
  );
};

export default PublicationSections;
