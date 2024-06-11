import React from 'react';
import './style.css';
const Header = () => {
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item"><a href="/">Home</a></li>
          <li className="nav__item"><a href="/about">About</a></li>
          <li className="nav__item"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
