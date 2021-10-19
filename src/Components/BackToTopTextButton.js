import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function TextButton() {
  return (
     
      <Button align="center" color="primary" style={{color:'#720001'}} >
        Back To Top
      <ArrowUpwardIcon size="small"/>
      </Button>
  );
}