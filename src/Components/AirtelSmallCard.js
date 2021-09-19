import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function AirtelSmallCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography variant="body2" color="text.secondary" >
            open an airtel money wallet 
            <br></br>
            and get upto ₹40 cashback

          </Typography>
         
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
