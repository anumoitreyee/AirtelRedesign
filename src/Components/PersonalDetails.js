import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '@material-ui/core';

export default function PersonalDetails() {
  return (
    <Card sx={{ maxWidth: 345 }}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          Mobile Number
          id="outlined-required"
          label="Mobile number"
          defaultValue="8357654312"
        />
        <br></br>
        <TextField
          id="outlined-password-input"
          label="OTP"
          type="password"
          autoComplete="current-password"
        />
        <br></br>
        <TextField
          id="outlined-read-only-input"
          label="Email ID"
          defaultValue="deven.korde23@gmail.com"
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br>
        <TextField
          Mobile Number
          id="outlined-required"
          label="Alternate Mobile number"
          defaultValue="Enter your alternate mobile number"
       />
       <br></br>
       
        
      </div>
    </Box>
    </Card>
  );
}
