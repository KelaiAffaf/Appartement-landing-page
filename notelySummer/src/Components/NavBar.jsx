import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"; // Importing the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        {/* User Initials */}
        <li className="user-initials">
          <div className="user-circle">AB</div>
        </li>

        {/* Navigation Links */}
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/vendor">Vendor</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      {/* Right-side buttons */}
      <div className="right-side">
        {/* Sign In Button */}
        <button className="btn-signin">
          <i className="fas fa-user"></i> Sign In
        </button>

        {/* Add Property Button */}
        <button className="btn-add-property">
          <i className="fas fa-plus"></i> Add Property
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
