import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      outerHeight: 50,
      borderRadius: 28
    },
  },
}));

export default function Recharge() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Button variant="contained">Default</Button> */}
      <Button variant="contained" color="primary" style={{ backgroundColor: '#8e0202' }}>
        Recharge
      </Button>
    </div>
  );
}