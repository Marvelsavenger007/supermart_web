import React from 'react';
import './home.css';
import logo from "../images/LOGO.png";
import x from "../images/twitter.png";
import gram from "../images/instagram.png";
import face from "../images/facebook.png";
import linked from "../images/linkedin.png";
import playstore from "../images/playstoreicon.png";
import appstore from "../images/appstoreicon.png";

const Footer = ()=> {
    return(
        <div className="home-btm">
        <div className="footer-title">
          <img src={logo} width="auto" height="auto" alt="logo" />
          <h1>SuperMart</h1>
        </div>
        <h1>Swift Food and Grocery Delivery</h1>
        <div className="home-btm-dld">
          <img src={playstore} width="auto" height="auto" alt="icon" />
          <img src={appstore} width="auto" height="auto" alt="icon" />
        </div>
        <div className="footer-ctn">
          <a href="/" className="footer-links">
            <img src={x} width="auto" height="auto" alt="icon" />
            <p>Twitter</p>
          </a>
          <a
            href="https://www.instagram.com/supermartapp/"
            className="footer-links"
          >
            <img src={gram} width="auto" height="auto" alt="icon" />
            <p>Instagram</p>
          </a>
          <a href="/" className="footer-links">
            <img src={face} width="auto" height="auto" alt="icon" />
            <p>Facebook</p>
          </a>
          <a href="/" className="footer-links">
            <img src={linked} width="auto" height="auto" alt="icon" />
            <p>Linkedin</p>
          </a>
        </div>
      </div>
    );
}
export default Footer;
