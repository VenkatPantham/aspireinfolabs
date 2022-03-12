import React, { useState } from "react";
import { useStyles } from "./PublicationContent.styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  TableSortLabel,
  Paper,
  IconButton,
} from "@material-ui/core";
import { Delete, Edit, KeyboardArrowDown } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contentActions } from "./state/content.actions";

const tableHeads = [
  { id: "author", label: "Author" },
  { id: "title", label: "Title" },
];

const PublicationContentTable = ({ publications, path }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, publications.length - page * rowsPerPage);

  const viewHandler = () => {
    console.log("view");
  };

  const deleteHandler = (publication) => {
    dispatch(contentActions.deleteContent(publication.id));
  };

  return (
    <Paper className={classes.paper}>
      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <TableHead>
            <TableRow>
              {tableHeads.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  sortDirection={orderBy === headCell.id ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : "asc"}
                    onClick={createSortHandler(headCell.id)}
                    className={classes.headerRows}
                  >
                    {headCell.label}
                    {orderBy === headCell.id ? (
                      <span className={classes.visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </span>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(publications, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover className={classes.root} key={index}>
                    <TableCell>{row.author}</TableCell>
                    <TableCell
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      {row.title}
                      <IconButton
                        aria-label="expand row"
                        size="large"
                        onClick={() => viewHandler(row)}
                      >
                        <KeyboardArrowDown />
                      </IconButton>
                      <IconButton
                        aria-label="edit"
                        size="large"
                        style={{ color: "grey" }}
                        component={Link}
                        to={{
                          pathname: path,
                          state: {
                            row: row,
                          },
                        }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => deleteHandler(row)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                    {/* <img
                      src={"data:image/png;base64," + row.image2}
                      alt=" base64"
                    /> */}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 60 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 7, 10, 25]}
        component="div"
        count={publications.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default PublicationContentTable;
