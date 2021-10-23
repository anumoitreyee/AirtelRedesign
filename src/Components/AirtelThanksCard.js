import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import AppStoreButton from './AirtelBlackButton';
import PlayStoreButton from './PlayStoreButton';
import { Grid } from '@material-ui/core';
import Appstore from './Appstore';
import Googlebutton from './Googlebutton';
import AirtelThanks from './../Assets/AirtelThanks.png';
import image from './../Assets/Phone.png';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    background: 'linear-gradient(#d2001a, #8f0000 ,#000000,#000000)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    color:'black',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


    

export default function AirtelThanksCard() {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        
        <CardContent>
        <Grid container spacing={1}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography style={{color:'white'}} margin="normal" align={'center'}>
           <center> Experience the all new Airtel Thanks App </center>
          </Typography>
          </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <img src={AirtelThanks} alt={AirtelThanks}/>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <img src={image} alt={image} width="50%" height= "100%"/>
        </Grid>
        <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
        <Typography style={{color:'#ffffff'}} align={'right'} >
          Get exclusive offers and account information at one place 
        </Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <PlayStoreButton/>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
          <Appstore/>
          </Grid>
          </Grid>
        </CardContent>
        
        
      </CardActionArea>
      
    </Card>
  );
}
