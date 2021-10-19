import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import SmallCard from './../Assets/SmallCard.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: '100%',
  },
});

export default function AirtelSmallCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent style={{ backgroundColor: '#720001' }}>
        <img src={SmallCard} width= "100%" height= "100%" alt="SmallCard"/>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}