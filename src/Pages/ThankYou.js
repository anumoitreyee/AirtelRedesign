import React from 'react';
import Container from '@material-ui/core/Container';
import ViewMore from '../Components/ViewMoreButton';
import done from './../Assets/done.jpg';




export default function ThankYou() {
  return (
    <React.Fragment>
        <Container fixed>
            <center>

            <p> <h2>Thank You! </h2></p>
          
          <img src={done} alt="done" />
          <p> Your Request has been created.</p>
           <br></br>
           <p>Keep Documents Ready</p>
           <br></br>
           <p>Expect a Call.
           </p>    
         <br></br>
         <ViewMore/>






        </center>
        </Container>         
    </React.Fragment>
  );
}