import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
 const [click, setClick] = useState(false)

 const handleClick = () => setClick(!click);

    return (
        <>
        <div className="navbar">
           <div className="navbar-container container">
           
         <div className="menu-icon" onClick={handleClick}>
         {click ? <FaTimes /> : <FaBars />}

         
    

         </div>
         
           </div>
           </div>
           </>
    )
}

export default NavBar
