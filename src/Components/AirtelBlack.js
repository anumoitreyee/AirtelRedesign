import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirtelBlackSmall from './../Assets/AirtelBlackSmall.jpg';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import AirtelBlackButton from './AirtelBlackButton';
import AirtelBlack from './../Assets/AirtelBlack.jpg';
import { makeStyles } from '@material-ui/core/styles';

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
  const classes = useStyles()
  return (
    
     <Card className={classes.root} style={{flex:1, backgroundColor:'black'}}>
         
    
      <CardActionArea>
        
        <CardContent>
          <br></br><br></br><br></br><br></br><br></br>
          <img src={AirtelBlackSmall} alt="airtel" />
          <Typography  variant="h2" color="white">
           <center> BLACK</center>
          </Typography>
          <Typography gutterBottom variant="h5" component="div" color="white">
          Enjoy first 30 days free of a new service with Airtel Black
          </Typography>
          <AirtelBlackButton/>
          <img src={AirtelBlack} alt="airtelblack" width="70%" height="70%"/>
          <br></br><br></br><br></br><br></br><br></br>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
