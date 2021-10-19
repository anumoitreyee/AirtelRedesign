import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import FormPropsTextFields from './Number text';
import Recharge from './RechargeButton';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(2.95),
     margin: '5',
    
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <div style={{ gridColumnEnd: 'span 8' }}>
        <FormPropsTextFields/>
        </div>
        <div style={{ gridColumnEnd: 'span 4' }}>
          <Recharge/>
        </div>
      </div>
    </div>
  );
}