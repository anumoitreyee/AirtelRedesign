import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function AppStoreButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Button variant="contained" color="primary" href="https://apps.apple.com/in/app/airtel-thanks-recharge-upi/id543184334">
        Download on the App Store
      </Button>
      
    </div>
  );
}
