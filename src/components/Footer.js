import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import './Footer.css'
import Logo from '../assets/images/oc_logo-inv-edit.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/" className="footer-logo">
          <img src={Logo} alt="Logo" className="footer-logo-image" />
        </Link> 

        <div className="footer-right">
          <h2 className="footer-title">Contact Us</h2>
          <div className="divider"></div>
          <div className="footer-text">
            Socials: <br />
            <a className="footer-link" href="https://www.instagram.com/ocvball" target="_blank" rel="noopener noreferrer">Instagram</a> <br />
            <a className="footer-link" href="https://www.facebook.com/ocvball" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
