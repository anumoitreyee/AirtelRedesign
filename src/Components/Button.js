import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link, Router} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Button variant="contained" color="primary" align="center">
        View Plans
      </Button>
      <Link to={process.env.PUBLIC_URL + '/PostpaidOptions'}>
      
      <Button variant="contained" color="primary" href="">
        Link
      </Button>
      </Link>
    </div>
  );
}
