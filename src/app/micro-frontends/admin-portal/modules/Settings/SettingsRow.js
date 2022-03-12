import React from "react";
import PropTypes from "prop-types";
import { Box, TableCell, TableRow } from "@material-ui/core";
import { Delete, Edit } from "@material-ui/icons";
import { useStyles } from "./Settings.styles";
import { useDispatch } from "react-redux";
import { settingsActions } from "./state/settings.actions";

const SettingsRow = ({ row, editHandler }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteHandler = (mailId) => {
    dispatch(settingsActions.deleteMail(mailId));
  };

  return (
    <TableRow hover className={classes.dataRows}>
      <TableCell className={classes.tableCell}>{row.name}</TableCell>
      <TableCell
        className={classes.tableCell}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {row.emailId}
        <Box>
          <Edit
            fontSize="small"
            classes={{ root: classes.icons }}
            onClick={() => editHandler(row)}
          />
          <Delete
            fontSize="small"
            classes={{ root: classes.icons }}
            onClick={() => deleteHandler(row.id)}
          />
        </Box>
      </TableCell>
    </TableRow>
  );
};

SettingsRow.propTypes = {
  row: PropTypes.object,
  editHandler: PropTypes.func,
};

export default SettingsRow;
