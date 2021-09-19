import React from 'react';
import Container from '@material-ui/core/Container';
import PlanSummary from '../Components/PlanSummary399';
import PersonalDetails from '../Components/PersonalDetails';
import Address from '../Components/Address';





export default function PlanSummary399() {
  return (
    <React.Fragment>
        <Container fixed>
            <center>
         <PlanSummary/> 
<p>Personal Details</p>
<br></br>
<PersonalDetails/>
<p>Address</p>
<Address/>








        </center>
        </Container>         
    </React.Fragment>
  );
}