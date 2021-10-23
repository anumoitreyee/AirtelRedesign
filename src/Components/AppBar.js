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
import {useState, useEffect} from 'react'
import { Button1 } from './Button1';
import './AppBar.css';
import { IconContext } from 'react-icons/lib';
import Grid from '@material-ui/core/Grid';

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
    
  };

  useEffect(() => {
   showButton();
}, [])

  window.addEventListener('resize', showButton);




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
    <>
    <IconContext.Provider value={{ color: '#E40001'}}>
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        
         
      </FormGroup>
      <AppBar position="relative" color="default">
        <Toolbar>
        
          <div className="menu-icon" onClick={handleClick} >
         {click ? <FaTimes /> : <FaBars align="left"/>}</div>
         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
           <li className="nav-item">
            <Link to='/PREPAID' className="nav-links" onClick={closeMobileMenu}>
            PREPAID
            </Link>        
        
           </li>
           <li className="nav-item">
            <Link to='/DTH' className="nav-links" onClick={closeMobileMenu}>
            DTH
            </Link> 
            </li>
           <li className="nav-item">
            <Link to='/POSTPAID' className="nav-links" onClick={closeMobileMenu}>
            POSTPAID
             </Link>                  

          </li>
           <li className="nav-item">
            <Link to='/BROADBAND' className="nav-links" onClick={closeMobileMenu}>
            BROADBAND
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/BANK' className="nav-links" onClick={closeMobileMenu}>
            BANK
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/AIRTELBLANK' className="nav-links" onClick={closeMobileMenu}>
            AIRTEL BLACK
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/HELP' className="nav-links" onClick={closeMobileMenu}>
            HELP
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/XSTREAM' className="nav-links" onClick={closeMobileMenu}>
            XSTREAM
            </Link>           
            </li>
            <li className="nav-item">
            <Link to='/SIGNIN' className="nav-links" onClick={closeMobileMenu}>
            SIGN IN
            </Link>           
            </li>



           </ul>


           
           

           <Grid item xs={12} sm={12} md={12} lg={12} xl={12}  grid-xs-12>
              <Link to={process.env.PUBLIC_URL + '/'}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={image} alt={image} height="70px" width="200px" align="center"/>
          </Typography></Link></Grid>
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
                position="relative"
              >
                <PersonOutlineIcon sx={{ color: pink[700] }}  fontSize="large"/>
                <Grid item xs={1} sm={6} md={6} lg={3} xl={2}></Grid>
              </IconButton>
              
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
    </IconContext.Provider>
    </>
  );
}
