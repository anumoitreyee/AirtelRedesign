import React from 'react';
import Container from '@material-ui/core/Container';

import vector from './../Assets/vector.jpg';
import AirtelPrepaidCard from '../Components/AirtelPrepaidCard';
import AirtelPostpaidCard from '../Components/AirtelPostpaidCard';
import FullWidthTabs from '../Components/FullWidhTab';
import AirtelBlackCard from '../Components/AirtelBlack';
import AirtelSmallCard from '../Components/AirtelSmallCard';
import AirtelThanksCard from '../Components/AirtelThanksCard';
import TextButton from '../Components/BackToTopTextButton';
import SingleLineImageList from '../Components/ImageList';
import IconButtons from '../Components/IconButtons';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FooterButton from '../Components/FooterButton';
import FooterButton1 from '../Components/FooterButton1';
import FooterButton2 from '../Components/FooterButton2';
import FooterButton3 from '../Components/FooterButton3';
import FooterButton4 from '../Components/FooterButton4';
import CarouselStepper from '../Components/CarouselStepper';
import Grid from '@material-ui/core/Grid';

import HorizontalScrollRow from '../Components/HorizontalScroll';

const divStyle = {
  color: '#720001',
  fontSize: 30,
  textDecorationLine: 'underline',
  fontWeight: 'bold'
};

export default function Home() {
  return (
    <React.Fragment>
        <Grid container spacing={3}>
        <Container>
          <center>
      
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <img src={vector} alt="vector" height="100%" width="100%" />
          </Grid>

        
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>  
          <FullWidthTabs/>  
          </Grid>
         
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CarouselStepper/>
          </Grid>
          
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <AirtelPrepaidCard/>
          </Grid><br/>
          
          <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <AirtelPostpaidCard/><br/>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <AirtelBlackCard/><br/>
          </Grid>
          
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <AirtelSmallCard/>
          </Grid><br/>
         
          <div style={divStyle}>
                    Entertainment
        </div>
        <br/>
         

          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <SingleLineImageList/>
          </Grid>
          <HorizontalScrollRow/>

          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <AirtelThanksCard/>
          </Grid>
         
         
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
         <TextButton/>
         </Grid>
     
         </center>
         </Container> 
         
          
         
        
        
        <footer className="App-footer">   
        
        <IconButtons/> 
       
        <FooterButton/>
        <FooterButton1/>
        <FooterButton2/>
        <FooterButton3/>
        <FooterButton4/>
        
        <p>
        <CopyrightIcon/> 2021 Airtel India. All Rights Reserved.
        </p> 
      
        </footer>
        </Grid>
                
    </React.Fragment>
  );
}