import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirtelBlackSmall from './../Assets/AirtelBlackSmall.jpg';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import AirtelBlackButton from './AirtelBlackButton';
import AirtelBlack from './../Assets/AirtelBlack.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  
  }));


export default function AirtelBlackCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
     <Card className={classes.root} style={{flex:2, backgroundColor:'black'}} variant="outlined">
         
    
      <CardActionArea>
        
        <CardContent>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <img src={AirtelBlackSmall} alt="airtel" />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography  variant="h2" color="white">
                    <center> BLACK</center>
          </Typography> 
          <Typography gutterBottom variant="h5" component="div" color="white">
          Enjoy first 30 days free of a new service with Airtel Black
          </Typography></Grid>
          <AirtelBlackButton/>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <img src={AirtelBlack} alt="airtelblack" width="100%" height="100%"/>
          </Grid>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
    
  );
}
