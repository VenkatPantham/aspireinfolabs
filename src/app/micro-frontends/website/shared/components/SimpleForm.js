import {
  Container,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";

const useSimpleForm = makeStyles((theme) => ({
  root: {},
  form: {},
}));
function SimpleForm(props) {
  const classes = useSimpleForm();
  return (
    <Container className={classes.root}>
      <Typography variant="h6">{props.title}</Typography>
      <form className={classes.form} noValidate autoComplete="off">
        <TextField id="standard-basic" label="Standard" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </form>
    </Container>
  );
}

export default SimpleForm;
