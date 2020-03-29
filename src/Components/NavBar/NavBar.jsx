import React, { useState } from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuIsDisplayed, setMenuIsDisplayed] = useState(false);
  return (
    <nav
      className="navbar has-shadow is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>COVID-404</h1>
        </Link>

        <div
          className={`navbar-burger ${menuIsDisplayed ? "is-active" : ""}`}
          onClick={() => setMenuIsDisplayed(!menuIsDisplayed)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={`navbar-menu ${menuIsDisplayed ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link to="/Data" className="navbar-item">
            Data
          </Link>
          <Link to="/Food" className="navbar-item">
            Food
          </Link>
          <Link to="/News" className="navbar-item">
            News
          </Link>
          <Link to="Support" className="navbar-item">
            Support
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
