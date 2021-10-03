import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
    },
  },
}));

export default function FooterButton1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="text" style={{color:'white'}}>
        PRIVACY POLICY
      </Button>
    

  
    </div>
  );
}
