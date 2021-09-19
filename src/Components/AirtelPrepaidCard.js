import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ContainedButtons from './Button';

const useStyles = makeStyles({
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
});
export default function AirtelPrepaidCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <br></br><br></br><br></br>
          <Typography variant="body2" color="text.secondary">
           <center> Airtel Unlimited Prepaid </center>
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Talk Unlimited
           <br></br>
          </Typography>
          <ContainedButtons/>
          <br></br><br></br><br></br>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
