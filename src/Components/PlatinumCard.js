import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';
import PlatinumButton from './PlatinumButton';

export default function PlatinumCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
        <br></br><br></br><br></br>
          <Typography  variant="body2" color="text.secondary">
           <center> Try out Airtel Thanks PlatinumCard </center>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          To get amazing rewards
          </Typography>
          <PlatinumButton/>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
