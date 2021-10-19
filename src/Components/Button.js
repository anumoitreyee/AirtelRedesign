import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      color:'#920909de'
      
    },
  },
}));

export default function ViewPlanContainedButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="#ffffff">
        <Typography>View Plans </Typography>
      </Button>
    </div>
  );
}