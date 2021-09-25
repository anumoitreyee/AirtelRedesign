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

export default function PlayStoreButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Button variant="contained" color="secondary" href="https://play.google.com/store/apps/details?id=com.myairtelapp&hl=en_IN&gl=US">
        Get it on Google Play
      </Button>
      
    </div>
  );
}
