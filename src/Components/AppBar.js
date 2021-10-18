import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import FormGroup from '@mui/material/FormGroup';
import image from './../Assets/LogoAirtel.jpg';
import { pink } from '@mui/material/colors';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import {useState} from 'react'
import { Button1 } from './Button1';
import './AppBar.css';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
    
  }

  window.addEventListener('resize',
  showButton);




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
    <Box sx={{ flexGrow: 2 }}>
      <FormGroup>
        
         
      </FormGroup>
      <AppBar position="relative" color="default">
        <Toolbar>
        
          <div className="menu-icon" onClick={handleClick} >
         {click ? <FaTimes /> : <FaBars align="left"/>}</div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           <li className="nav-item">
            <Link to='/PREPAID' className="nav-links">
            PREPAID
            </Link>        
        
           </li>
           <li className="nav-item">
            <Link to='/DTH' className="nav-links">
            DTH
            </Link> 
            </li>
           <li className="nav-item">
            <Link to='/POSTPAID' className="nav-links">
            POSTPAID
            </Link>                  

          </li>
           <li className="nav-item">
            <Link to='/BROADBAND' className="nav-links">
            BROADBAND
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/BANK' className="nav-links">
            BANK
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/AIRTELBLANK' className="nav-links">
            AIRTEL BLACK
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/HELP' className="nav-links">
            HELP
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/XSTREAM' className="nav-links">
            XSTREAM
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/SIGNIN' className="nav-links">
            SIGN IN
            </Link>           
            </li>



           </ul>






         
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
