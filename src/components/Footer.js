import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Footer.css";
import Logo from "../assets/images/oc_logo-inv-edit.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <Link to='/ocvb' className='footer-logo'>
          <img src={Logo} alt='Logo' className='footer-logo-image' />
        </Link>

        <div className='footer-right'>
          <h2 className='footer-title'>Socials</h2>
          <div className='divider'></div>
          <div className='footer-text'>
            <a
              className='footer-link'
              href='https://www.instagram.com/ocvball'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size='2x'
                className='InstaIcon'
              />
            </a>
            <a
              className='footer-link'
              href='https://www.facebook.com/p/OC-Volleyball-100093042030850/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} size='2x' className='FbIcon' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
