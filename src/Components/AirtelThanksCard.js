import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import AppStoreButton from './AirtelBlackButton';
import PlayStoreButton from './PlayStoreButton';

export default function AirtelThanksCard() {
  return (
    <Card >
      <CardActionArea>
        
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           <center> Experience the all new Airtel Thanks App </center>
          </Typography>
          <br></br>
          <Typography gutterBottom variant="h5" component="div">
          #airtel Thanks
          </Typography>
          <br></br>
          <Typography  variant="body2" color="text.secondary">
          Get exclusive offers and account information at one place
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary">
          Download Airtel Thanks App on
          </Typography>
        </CardContent>
        <br></br>
        <AppStoreButton/><br></br>
        <PlayStoreButton/>
      </CardActionArea>
      
    </Card>
  );
}
