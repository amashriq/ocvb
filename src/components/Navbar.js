import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'
import logo from '../assets/images/oc_logo-rbg-rtext.png'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
             <Link to="/" className="navbar-logo">
                <img src={logo} alt="Logo" className="navbar-logo-image" />
             </Link> 
             <div className='menu-icon' onClick={handleClick}>
                 <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
             </div>
             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className = 'nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                  </Link>
              </li>
              <li className = 'nav-item'>
                  <Link to='/schedule' className='nav-links' onClick={closeMobileMenu}>
                      Schedule
                  </Link>
              </li>
              <li className = 'nav-item'>
                  <Link to='/photos' className='nav-links' onClick={closeMobileMenu}>
                      Photos
                  </Link>
              </li>
              <li className = 'nav-item'>
                  <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                      Contact Us
                  </Link>
              </li>
             </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
