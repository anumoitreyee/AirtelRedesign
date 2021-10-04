import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import image from './../Assets/LogoAirtel.jpg';
import LeftButton from './LeftButton';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import TemporaryDrawer from './Drawer';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // eslint-disable-next-line no-unused-vars
  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        
         
      </FormGroup>
      <AppBar position="relative" color="default">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            fontSize="large"
            sx={{ color: pink[700] }}
            
          >
            <TemporaryDrawer/>
          </IconButton>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={image} alt={image} height="70px" width="200px"/>
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                fontSize="large"
              >
                <PersonOutlineIcon sx={{ color: pink[700] }}  fontSize="large"/>
              </IconButton>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
