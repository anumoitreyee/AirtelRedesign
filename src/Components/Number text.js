import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Recharge from './RechargeButton';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '20ch',
      height: '5ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
        <TextField
          id="outlined-number"
          label="Enter Your Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        </Grid>
      </div>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
      </Grid>
    </form>
  );
}