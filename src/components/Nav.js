import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'yellow',
    textDecoration: 'none'
  }   

  return (
    <nav>
      <Link style={navStyle} to="/">
        <div className="app-logo">SFS</div>
      </Link>
      <ul className="nav-links">
        <Link style={navStyle} to="/countries">
          <li className="nav-links-item">Countries</li>
        </Link>
        <Link style={navStyle} to="/about">
          <li className="nav-links-item">About</li>
        </Link>
      </ul>
    </nav>
  );

} // end Nav()

export default Nav;