import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import { Link } from "react-router-dom";
import { SERVICES_INFO } from "./Home.content";

const ourServicesStyles = makeStyles((theme) => ({
  root: {
    padding: "10% 3%",
    textAlign: "center",
  },
  card: {
    backgroundColor: theme.palette.lightBackground.main,
    borderRadius: "25px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    padding: 0,
  },
  heading: {
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: "10%",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 15%",
    height: "20vh",
    borderRadius: "25px",
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.main,
  },
  subText1: {
    padding: "5% 10%",
  },
  subText2: {
    padding: "0% 10%",
  },
  cardAction: {
    marginTop: "auto",
    paddingTop: "5%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "5%",
  },
  button: {
    textTransform: "none",
    fontWeight: "bold",
    fontStyle: "italic",
  },
}));

function OurServices() {
  const classes = ourServicesStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Container className={clsx(layoutStyles.largeSection, classes.root)}>
      <Typography variant="h3" className={classes.heading}>
        {SERVICES_INFO.title}
      </Typography>
      <Grid container spacing={10} justify="center">
        {SERVICES_INFO.ourServicesData.map((ourService, index) => (
          <Grid item xs={10} sm={5} key={index}>
            <Card className={classes.card}>
              <CardContent className={classes.cardContent}>
                <Typography variant="h4" className={classes.title} gutterBottom>
                  {ourService.title}
                </Typography>
                <Typography variant="body2" className={classes.subText1}>
                  {ourService.subText1}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.subText2}
                >
                  {ourService.subText2}
                </Typography>
              </CardContent>
              <CardActions className={classes.cardAction}>
                <Button variant="contained" color="secondary" component={Link}>
                  <Typography variant="subtitle1" className={classes.button}>
                    Learn More
                  </Typography>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default OurServices;
