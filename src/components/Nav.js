import React from 'react';
import { Link } from 'react-router-dom';

// import './Nav.css';

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
            <div className="nav-links-item">Countries</div>
          </Link>

          <Link style={navStyle} to="/about">
            <div className="nav-links-item">About</div>
          </Link>
        </div>

      </div>
    </nav>
  ); // return

} // Nav

export default Nav;
