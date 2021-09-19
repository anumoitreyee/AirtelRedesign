import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function IconButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <IconButton color="inherit" aria-label="facebook">
        <FacebookIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="instagram" >
        <InstagramIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="twitter">
        <TwitterIcon />
      </IconButton>
      <IconButton color="inherit" aria-label="youtube">
        <YouTubeIcon />
      </IconButton>
    </div>
  );
}
