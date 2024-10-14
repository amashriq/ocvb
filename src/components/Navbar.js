import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../assets/images/oc_logo-rbg.png";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/ocvb' className='navbar-logo'>
            <img src={logo} alt='Logo' className='navbar-logo-image' />
          </Link>
          <div className='navbar-title'></div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className='nav-item'>
              <Link to='/ocvb' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ocvb/schedule'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Schedule
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ocvb/photos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Photos
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ocvb/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/ocvb/FAQ'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                FAQ's
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
