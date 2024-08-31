import React, { useState } from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import logo from "../../images/LOGO.png";
import responsivebtn from "../../images/hamburger.png";

const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    
  return (
    <div className='navbar-main'>
        <div className='navbar-ctn'>
            <div className='navbar-title'>
                <img
                    src={logo}
                    width="auto"
                    height="auto"
                    alt='logo'
                />
                <h1>SuperMart</h1>
            </div>
            <ul className={isOpen ? "navbar-menu active" : "navbar-menu"}>
                <li>
                    <Link to="/#frequently-asked-questions" className='navbar-link'>Faqs</Link>
                </li>
                <li>
                    <Link to="/#contact-us" className='navbar-link'>Contact us</Link>
                </li>
            </ul>
            <div className="navbar-ham-btn">
                <img 
                    src={responsivebtn}
                    width="100%"
                    height="100%"
                    alt='icon'
                    onClick={toggleMenu}
                />
            </div>
        </div>
    </div>
  )
}

export default Navbar