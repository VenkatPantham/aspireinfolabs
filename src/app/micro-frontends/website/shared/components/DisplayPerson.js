import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

const useDisplayPersonStyles = makeStyles((theme) => ({
  displayCard: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    textAlign: "center",
    margin: "5% 10%",
    cursor: "pointer",
  },
  wrapper: {
    [theme.breakpoints.down("xs")]: {
      height: "50vw",
    },
    height: "20vw",
  },
  media: {
    height: "100%",
    width: "100%",
    backgroundSize: "contain",
  },
}));

function DisplayPerson(props) {
  const person = props.person;
  const [displayInfo, setDisplayInfo] = useState(false);
  const classes = useDisplayPersonStyles(displayInfo);

  return (
    <Grid item xs={12} sm={5} key={props.key} justify="center">
      <Card
        className={classes.displayCard}
        onClick={() => setDisplayInfo(!displayInfo)}
      >
        {!displayInfo ? (
          <>
            <div className={classes.wrapper}>
              <CardMedia
                classes={{ root: classes.media }}
                image={person.image}
                title={person.name}
              />
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5">
                {person.name}
              </Typography>
              <Typography variant="subtitle1">{person.designation}</Typography>
            </CardContent>
          </>
        ) : (
          <CardContent>
            <Typography gutterBottom variant="h5">
              {person.name}
            </Typography>
            <Typography variant="subtitle1" style={{ marginBottom: 25 }}>
              {person.designation}
            </Typography>
            <Typography variant="body2">{person.info}</Typography>
          </CardContent>
        )}
      </Card>
    </Grid>
  );
}

export default DisplayPerson;
