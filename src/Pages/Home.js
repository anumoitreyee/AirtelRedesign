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




export default function Home() {
  return (
    <React.Fragment>
        <Container>
          <center>
          <img src={vector} alt="vector" height="220px" width="370px" />

        
            
          <FullWidthTabs/>  
         
          <CarouselStepper/>
          
          <AirtelPrepaidCard/>
          <br></br>
          <AirtelPostpaidCard/>
          <br></br>
          <AirtelBlackCard/>
          <br></br>
          <AirtelSmallCard/>
          <br></br>
          <p> Entertainment</p>
          <SingleLineImageList/>
          <AirtelThanksCard/>
         
         <TextButton/>
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
                
    </React.Fragment>
  );
}