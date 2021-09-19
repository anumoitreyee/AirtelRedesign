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
          <br></br>
         <PlatinumCard/>
         <p>
           Explore our Best Plans
         </p>
        <Card399/>
        <br></br>
        <Card499/>
        <br></br>
        <Card999/>
        <br></br>
        <Card1599/>
        <br></br>
        <BuyNowButton/>






        </center>
        </Container>         
    </React.Fragment>
  );
}