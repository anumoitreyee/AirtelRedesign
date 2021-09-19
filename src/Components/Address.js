import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Card } from '@material-ui/core';
import SelectTextFields from './Select';

export default function Address() {
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
          <SelectTextFields/>
        <TextField
          Address Line
          id="outlined-required"
          label="Address Line"
          defaultValue="Enter your Address"
        />
        <br></br>
        <TextField
          HouseFlat Number
          id="outlined-required"
          label="House/Flat Number"
          defaultValue="Enter your Flat Number"
        />
       <br></br>
        <TextField
          id="outlined-read-only-input"
          label="Pin Code"
          defaultValue="Enter your Pin"
          InputProps={{
            readOnly: true,
          }}
        />
        
       
        
      </div>
    </Box>
    </Card>
  );
}
