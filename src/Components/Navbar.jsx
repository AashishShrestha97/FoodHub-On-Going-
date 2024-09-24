import React from "react";
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav id="navbox">
      <div id="Logo">
        <img src="Logo.png" alt="Logo" />
      </div>
      <div id="navinfo">
        <Link to="/">Home</Link> {/* Use Link for Home */}
        <Link to="/menu">Menu</Link> {/* Use Link for Menu */}
        <Link to="/services">Services</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/aboutus">About Us</Link>
      </div>
      <div id="navuses">
        <img id="search" src="Search.png" alt="Search" />
        <img id="account" src="Account.png" alt="Account" />
      </div>
    </nav>
  );
}

export default Navbar;
