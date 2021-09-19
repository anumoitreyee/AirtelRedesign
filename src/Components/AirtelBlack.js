import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AirtelBlackSmall from './../Assets/AirtelBlackSmall.jpg';
import Typography from '@mui/material/Typography';
import {  CardActionArea } from '@mui/material';
import AirtelBlackButton from './AirtelBlackButton';
import AirtelBlack from './../Assets/AirtelBlack.jpg';

export default function AirtelBlackCard() {
  return (
    <Card>
      <CardActionArea>
        
        <CardContent>
          <br></br><br></br><br></br><br></br><br></br>
          <img src={AirtelBlackSmall} alt="airtel" />
          <Typography  variant="body2" color="text.secondary">
           <center> BLACK</center>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          Enjoy first 30 days free of a new service with Airtel Black
          </Typography>
          <AirtelBlackButton/>
          <img src={AirtelBlack} alt="airtelblack" />
          <br></br><br></br><br></br><br></br><br></br>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
