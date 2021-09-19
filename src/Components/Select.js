import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box >
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          City
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'city',
            id: 'uncontrolled-native',
          }}
        >
          <option>Mumbai</option>
          <option>Delhi</option>
          <option>Kolkata</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
