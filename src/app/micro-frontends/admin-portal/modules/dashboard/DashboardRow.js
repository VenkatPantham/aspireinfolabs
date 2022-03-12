import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  IconButton,
  makeStyles,
  TableCell,
  TableRow,
  Typography,
  Grid,
  Dialog,
  withStyles,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { KeyboardArrowDown, Close } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { dashboardActions } from "./state/dashboard.actions";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  tableCell: {
    fontSize: 12,
  },
  button: {
    textTransform: "none",
    borderWidth: 1,
    borderColor: "#000079",
  },
  buttonText: {
    fontSize: 12,
    color: "black",
    display: "flex",
    flexWrap: "nowrap",
  },
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  closeButton: {
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={onClose}
      >
        <Close />
      </IconButton>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DashboardRow = ({ row, contactButton }) => {
  const classes = useRowStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = () => {
    setAnchorEl(null);
    dispatch(
      dashboardActions.changeStatus(
        contactButton ? "contact" : "talent",
        row.clientId,
        row.queryStatus === "Pending" ? "Resolved" : "Pending"
      )
    );
  };

  const handleDialogOpen = () => {
    setOpen(true);
  };

  const handleDialogClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow hover className={classes.root}>
        <TableCell className={classes.tableCell}>
          {new Date(row.date).getDate()}
          {["st", "nd", "rd"][
            ((((new Date(row.date).getDate() + 90) % 100) - 10) % 10) - 1
          ] || "th"}
          &nbsp;
          {new Date(row.date).toLocaleString("default", {
            month: "short",
          })}
          ,&nbsp;{new Date(row.date).getFullYear()}
        </TableCell>
        <TableCell className={classes.tableCell}>{row.clientName}</TableCell>
        <TableCell className={classes.tableCell}>{row.clientEmailId}</TableCell>
        <TableCell className={classes.tableCell}>{row.clientContact}</TableCell>
        {!contactButton ? (
          <>
            <TableCell className={classes.tableCell}>
              {row.clientDesignation}
            </TableCell>
            <TableCell className={classes.tableCell}>{row.queryType}</TableCell>
          </>
        ) : null}
        {contactButton ? (
          <TableCell
            className={classes.tableCell}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {row.typeOfQuery}
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={handleDialogOpen}
            >
              <KeyboardArrowDown />
            </IconButton>
          </TableCell>
        ) : (
          <TableCell className={classes.tableCell}>
            {row.clientOrganization}
          </TableCell>
        )}
        <TableCell className={classes.tableCell}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleMenuOpen}
            className={classes.button}
            style={{
              backgroundColor:
                row.queryStatus === "Resolved" ? "#32CD32" : "#edd107",
            }}
          >
            <Typography className={classes.buttonText}>
              {row.queryStatus}
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
            <MenuItem
              selected={row.queryStatus === "Pending"}
              onClick={handleMenuItemClick}
            >
              <Typography style={{ fontSize: 12 }}>Pending</Typography>
            </MenuItem>
            <MenuItem
              selected={row.queryStatus === "Resolved"}
              onClick={handleMenuItemClick}
            >
              <Typography style={{ fontSize: 12 }}>Resolved</Typography>
            </MenuItem>
          </Menu>
        </TableCell>
      </TableRow>
      <Dialog
        onClose={handleDialogClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleDialogClose}
          style={{ color: "#000079" }}
        >
          Query Message
        </DialogTitle>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={4}>
              <Typography gutterBottom style={{ fontWeight: "bold" }}>
                Name
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom>{row.clientName}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom style={{ fontWeight: "bold" }}>
                Email
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom>{row.clientEmailId}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom style={{ fontWeight: "bold" }}>
                Phone
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom>{row.clientContact}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom style={{ fontWeight: "bold" }}>
                Type of Query
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom>{row.typeOfQuery}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography gutterBottom style={{ fontWeight: "bold" }}>
                Message
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom>{row.queryMessage}</Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};

DashboardRow.propTypes = {
  contactButton: PropTypes.bool,
  row: PropTypes.object,
};

export default DashboardRow;
