import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchActive(!isSearchActive);
  };

  return (
    <nav id="navbox">
      <div id="Logo">
        <img src="Logo.png" alt="Logo" />
      </div>

      <div id="navinfo">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/services">Services</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/aboutus">About Us</Link>
      </div>

      <div id="navuses">
        {/* Search icon */}
        <img
          id="search"
          src="Search.png"
          alt="Search"
          onClick={toggleSearchBar}
          className={isSearchActive ? 'hidden' : ''}
        />

        {/* Search bar inside the navbar */}
        <div className={`search-bar ${isSearchActive ? 'active' : ''}`}>
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
          />
          <button className="close-btn" onClick={toggleSearchBar}>×</button>
        </div>

        <img id="account" src="Account.png" alt="Account" />
      </div>
    </nav>
  );
};

export default Navbar;
