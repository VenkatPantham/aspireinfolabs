import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import { useLayoutStyles } from "../../../../../assets/styles/layoutStyles";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RoomIcon from "@material-ui/icons/Room";
import MapComponent from "../../shared/components/MapComponent";
import { OUR_OFFICES } from "./Contact.content";

const useDisplayPersonsStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.lightBackground.main,
    textAlign: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      padding: "5% 0",
    },
  },
  cardsList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
  },
  displayCard: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "45%",
    },
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "35%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%",
    },
    margin: theme.spacing(1),
    textAlign: "left",
    backgroundColor: theme.palette.lightBackground.main,
  },
  media: {
    height: 250,
    [theme.breakpoints.up("md")]: {
      height: 300,
    },
  },
  cardContent: {
    paddingTop: "10%",
  },
  addressItems: {
    padding: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: theme.spacing(1),
  },
  addressItem: {
    paddingLeft: theme.spacing(1),
  },
  cityName: {
    fontWeight: "bold",
    marginTop: theme.spacing(5),
    [theme.breakpoints.up("xl")]: {
      marginTop: "10%",
    },
  },
}));

function ContactAddress(props) {
  const classes = useDisplayPersonsStyles();
  const layoutStyles = useLayoutStyles();
  return (
    <Container className={clsx(classes.root, layoutStyles.mediumSection)}>
      <Typography variant="h3" style={{ fontWeight: "bold" }}>
        {OUR_OFFICES.heading}
      </Typography>
      <Container className={classes.cardsList}>
        {props.addressList.map((addressInfo) => (
          <Card className={classes.displayCard} key={addressInfo.id}>
            <CardActionArea>
              <CardMedia className={classes.media}>
                <MapComponent addressInfo={addressInfo} />
              </CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography
                  gutterBottom
                  variant="h3"
                  className={classes.cityName}
                >
                  {addressInfo.city}
                </Typography>
                <Container className={classes.addressItems}>
                  <CallIcon />
                  <Typography
                    variant="subtitle1"
                    className={classes.addressItem}
                  >
                    {addressInfo.contact}
                  </Typography>
                </Container>
                <Container className={classes.addressItems}>
                  <MailOutlineIcon />
                  <Typography
                    variant="subtitle1"
                    className={classes.addressItem}
                  >
                    {addressInfo.email}
                  </Typography>
                </Container>
                <Container className={classes.addressItems}>
                  <RoomIcon
                    style={{ alignSelf: "flex-start", marginTop: 10 }}
                  />
                  <Typography
                    variant="subtitle1"
                    className={classes.addressItem}
                  >
                    {addressInfo.address}
                  </Typography>
                </Container>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </Container>
  );
}

export default ContactAddress;
