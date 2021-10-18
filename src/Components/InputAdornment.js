import * as React from 'react';
import Box from '@mui/material/Box';

import InputAdornment from '@mui/material/InputAdornment';


import TextField from '@mui/material/TextField';


export default function InputAdornments() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
        <TextField
          label="Mobile Number"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            startAdornment: <InputAdornment position="start">+91</InputAdornment>,
          }}
        />
        
      </div>
    </Box>
  );
}
