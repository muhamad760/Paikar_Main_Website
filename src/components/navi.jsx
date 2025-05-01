// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

function Navi() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const location = useLocation();
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    const isHomePage = location.pathname === '/';
    const logoSrc = isHomePage ? '/logo/white.png' : '/logo/red.png';
    const fontColor = isHomePage ? 'white' : 'darkred';

  return (<nav className="navbar" style={{color:fontColor}} >
    <div className="navbar-logo">
  <Link to="/">
    <img src={logoSrc} alt="Logo" />
  </Link>
</div> 
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>
            Work
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-content">
              <li>
                <Link to="/work/photography">Photography</Link>
              </li>
              <li>
                <Link to="/work/cgimages">CG Images</Link>
              </li>
              <li>
                <Link to="/work/film">Film</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
     
  );
}

export default Navi;
