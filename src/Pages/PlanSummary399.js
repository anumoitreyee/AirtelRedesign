import React from 'react';
import Container from '@material-ui/core/Container';
import PlanSummary from '../Components/PlanSummary399';
import PersonalDetails from '../Components/PersonalDetails';
import Address from '../Components/Address';
import ConfirmButton from '../Components/ConfirmButton';





export default function PlanSummary399() {
  return (
    <React.Fragment>
        <Container fixed>
            <center>
         <PlanSummary/> 
<p>Personal Details</p>
<br></br>
<PersonalDetails/>
<br></br>
<p>Address</p>
<Address/>
<br></br>
<ConfirmButton/>








        </center>
        </Container>         
    </React.Fragment>
  );
}