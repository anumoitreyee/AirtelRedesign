import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ViewMore() {
  return (
    <Stack direction="column" spacing={2}>
      <Button>View More</Button>
      
      <Button color="secondary">Back To Home</Button>
      
    </Stack>
  );
}
