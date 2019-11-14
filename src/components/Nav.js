import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function Nav() {
  const navStyle = {
    color: 'cyan',
    textDecoration: 'none'
  }   

  return (
    <nav>
      <div className="row">
        <div className="col">
          <Link style={navStyle} to="/">
            <span className="app-logo">CFS</span>
          </Link>
        </div>
        <div className="nav-links row">
          <Link style={navStyle} to="/countries">
            <li className="nav-links-item">Countries</li>
          </Link>
          <Link style={navStyle} to="/about">
            <li className="nav-links-item">About</li>
          </Link>
        </div>
      </div>
    </nav>
  );

} // end Nav()

export default Nav;