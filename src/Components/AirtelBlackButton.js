import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      borderRadius: 28
    },
  },
}));

export default function AirtelBlack() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" style={{ backgroundColor: '#e40001' }}>
        Explore Airtel Black
      </Button>
    </div>
  );
}