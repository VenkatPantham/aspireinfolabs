import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./PublicationContent.styles";
import { Link } from "react-router-dom";
import {
  ROUTE_CONTENT_PUBLICATIONS_BLOGS,
  ROUTE_CONTENT_PUBLICATIONS_CASE_STUDIES,
} from "../../shared/constants/route.const";
import PublicationContentTable from "./PublicationContentTable";
import { useSelector, useDispatch } from "react-redux";
import { contentActions } from "./state/content.actions";
import AlertComponent from "../../shared/components/AlertComponent";

const options = ["Blogs", "Case Studies"];

const paths = [
  ROUTE_CONTENT_PUBLICATIONS_BLOGS.path,
  ROUTE_CONTENT_PUBLICATIONS_CASE_STUDIES.path,
];

const PublicationContent = () => {
  const classes = useStyles();
  const state = useSelector((state) => state.content);
  const dispatch = useDispatch();
  const [publications, setPublications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => dispatch(contentActions.fetchContent()), []);

  useEffect(
    () =>
      setPublications(
        state.items.filter((item) => item.publicationType === "blog")
      ),
    [state.loading]
  );

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    setPublications(
      state.items.filter((item) =>
        index
          ? item.publicationType !== "blog"
          : item.publicationType === "blog"
      )
    );
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className={classes.root}>
      <Container className={classes.headerSection}>
        <Container className={classes.headerRow}>
          <Typography variant="h3" className={classes.headerText}>
            Publications
          </Typography>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClickListItem}
            className={classes.button}
          >
            <Typography variant="subtitle1">
              {options[selectedIndex]}
            </Typography>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={index}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Container>
        <Button
          component={Link}
          to={paths[selectedIndex]}
          className={classes.button}
        >
          <Typography variant="subtitle1">Add&nbsp;Item</Typography>
        </Button>
      </Container>
      <PublicationContentTable
        publications={publications}
        path={paths[selectedIndex]}
      />
      <AlertComponent />
    </Container>
  );
};

export default PublicationContent;
