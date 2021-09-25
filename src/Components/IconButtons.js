import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import FacebookIcon from '@material-ui/icons/Facebook';

import LinkedInIcon from '@material-ui/icons/LinkedIn';import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      [theme.breakpoints.up('md')]: {

      margin: theme.spacing(11),
      },
    },
  },
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton color="inherit" aria-label="facebook" href="https://www.facebook.com/pg/AirtelIndia/community/">
        <FacebookIcon/>
      </IconButton>
      <IconButton color="inherit" aria-label="linkedin" href="https://www.linkedin.com/company/airtel/?originalSubdomain=in">
        <LinkedInIcon/>
      </IconButton>
      <IconButton color="inherit" aria-label="twitter" href="https://twitter.com/airtelindia">
        <TwitterIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="youtube" href="https://www.youtube.com/c/airtel">
        <YouTubeIcon />
      </IconButton>
    </div>
  );
}
