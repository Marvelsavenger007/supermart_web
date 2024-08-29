import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom';
import logo from "../../images/LOGO.png";

const Navbar = () => {
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
            <ul className='navbar-links'>
                <li>
                    <Link to="/faqs" className='navbar-props'>Faqs</Link>
                </li>
                <li>
                    <Link to="/contact" className='navbar-props'>Contact us</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar