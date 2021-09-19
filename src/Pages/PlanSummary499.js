import React from 'react';
import Container from '@material-ui/core/Container';
import PlanSummary499 from '../Components/PlanSummary399';
import PersonalDetails from '../Components/PersonalDetails';
import Address from '../Components/Address';
import ConfirmButton from '../Components/ConfirmButton';





export default function PlanSummary2() {
  return (
    <React.Fragment>
        <Container fixed>
            <center>
         <PlanSummary499/> 
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