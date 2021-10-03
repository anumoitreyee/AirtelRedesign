import React from 'react';
import Container from '@material-ui/core/Container';
import PlatinumCard from '../Components/PlatinumCard';
import Card399 from '../Components/Card399'; 
import Card499 from '../Components/Card499';
import Card999 from '../Components/Card999';
import Card1599 from '../Components/Card1599';
import BuyNowButton from '../Components/BuyNowButton';





export default function PostpaidOptions() {
  return (
    <React.Fragment>
        <Container fixed>
          <center>
          
         <PlatinumCard/>
         <p>
           Explore our Best Plans
         </p>
        <Card399/>
        
        <Card499/>
        
        <Card999/>
        
        <Card1599/>
        
        <BuyNowButton/>






        </center>
        </Container>         
    </React.Fragment>
  );
}