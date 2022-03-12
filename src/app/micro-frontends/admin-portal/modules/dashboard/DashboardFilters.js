import "date-fns";
import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  InputBase,
  Grid,
  Box,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "./Dashboard.styles";
import { KeyboardArrowDown, Search } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DashboardTable from "./DashboardTable";
import { useSelector, useDispatch } from "react-redux";
import { dashboardActions } from "./state/dashboard.actions";

const talentOptions = ["All", "Company", "College"];
const contactOptions = [
  "All",
  "Business Enquiry",
  "College Enquiry",
  "Student Enquiry",
];

const DashboardFilters = () => {
  const classes = useStyles();
  const state = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [data, setData] = useState(state.items);
  const [search, setSearch] = useState("");
  const [contactButton, setContactButton] = useState(false);
  const [selectedFrom, setSelectedFrom] = useState(null);
  const [selectedTo, setSelectedTo] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => dispatch(dashboardActions.fetchDashboard("talent")), []);

  useEffect(() => fetchHandler(), [
    state.loading,
    selectedIndex,
    search,
    selectedFrom,
    selectedTo,
  ]);

  const talentButtonHandler = () => {
    setSelectedIndex(0);
    setContactButton(false);
    dispatch(dashboardActions.fetchDashboard("talent"));
  };

  const contactButtonHandler = () => {
    setSelectedIndex(0);
    setContactButton(true);
    dispatch(dashboardActions.fetchDashboard("contact"));
  };

  const fetchHandler = () => {
    var tempData = search
      ? state.items.filter((el) =>
          Object.keys(el).some((row) =>
            el[row].toString().toLowerCase().includes(search.toLowerCase())
          )
        )
      : state.items;
    if (selectedFrom && selectedTo) {
      tempData = tempData.filter(
        (el) =>
          selectedFrom <= new Date(el.date) && selectedTo >= new Date(el.date)
      );
    } else if (selectedFrom) {
      tempData = tempData.filter((el) => selectedFrom <= new Date(el.date));
    } else if (selectedTo) {
      tempData = tempData.filter((el) => selectedTo >= new Date(el.date));
    }
    setData(
      selectedIndex
        ? tempData.filter(
            (el) =>
              (contactButton ? el.typeOfQuery : el.queryType) ===
              (contactButton
                ? contactOptions[selectedIndex]
                : talentOptions[selectedIndex])
          )
        : tempData
    );
  };

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container className={classes.content}>
      <Grid
        container
        alignItems="center"
        justify="space-between"
        className={classes.header}
      >
        <Grid item xs={12} sm={6} className={classes.buttonSection}>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={talentButtonHandler}
            style={{
              backgroundColor: !contactButton ? "#000079" : "white",
              color: !contactButton ? "white" : "black",
            }}
          >
            Talent Form
          </Button>
          <Button
            className={classes.button}
            variant="outlined"
            onClick={contactButtonHandler}
            style={{
              backgroundColor: contactButton ? "#000079" : "white",
              color: contactButton ? "white" : "black",
            }}
          >
            Contact Form
          </Button>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClickListItem}
            className={classes.filterButton}
          >
            <Typography className={classes.buttonText}>
              {contactButton
                ? contactOptions[selectedIndex]
                : talentOptions[selectedIndex]}
              <KeyboardArrowDown fontSize="small" />
            </Typography>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {(contactButton ? contactOptions : talentOptions).map(
              (option, index) => (
                <MenuItem
                  key={index}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  <Typography className={classes.buttonText}>
                    {option}
                  </Typography>
                </MenuItem>
              )
            )}
          </Menu>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box borderBottom={1} component="form" className={classes.inputField}>
            <InputBase
              classes={{ root: classes.inputRoot }}
              placeholder="Search Query"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
            />
            <Search className={classes.iconButton} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-evenly" alignItems="center">
              <Grid item xs={6} style={{ marginBottom: "5%" }}>
                <KeyboardDatePicker
                  clearable
                  size="small"
                  label="From"
                  format="dd/MM/yyyy"
                  maxDate={selectedTo ? selectedTo : new Date("2100-01-01")}
                  value={selectedFrom}
                  onChange={setSelectedFrom}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
              <Grid item xs={5} style={{ marginBottom: "5%" }}>
                <KeyboardDatePicker
                  clearable
                  size="small"
                  label="To"
                  format="dd/MM/yyyy"
                  minDate={selectedFrom ? selectedFrom : new Date("1900-01-01")}
                  value={selectedTo}
                  onChange={setSelectedTo}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
      </Grid>
      <DashboardTable contactButton={contactButton} data={data} />
    </Container>
  );
};

export default DashboardFilters;
