import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ViewPlanContainedButton from './Button';
import Postpaid from'./../Assets/postpaid.png'
import { Grid } from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
    backgroundcolor: '#720001',
    height:'100%',
    width:'100%'
  },
  media: {
    height:'100%',
    width:'100%'
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
     
      <CardActionArea>
        <CardContent style={{ backgroundColor: '#720001' }}>
        <CardMedia>
          
        <img src={Postpaid} width= "100%" height= "100%" alt="postpaid"/>
        </CardMedia>
          <ViewPlanContainedButton/>
          
        </CardContent>
      </CardActionArea>
  
    </Card>
  );
}