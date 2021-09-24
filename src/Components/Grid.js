import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3} sm={4} lg={3} md={3}>
        
        <FacebookIcon/>
      
        </Grid>
        <Grid item xs={3} sm={4} md={6} lg={3}>
        
        <InstagramIcon />
      
        </Grid>
        <Grid item xs={6} sm={3} lg={3}>
        
        <TwitterIcon />
      
        </Grid>
        <Grid item xs={6} sm={3} lg={3}>
        
        <YouTubeIcon />
      
        </Grid>
        
      </Grid>
    </div>
  );
}
