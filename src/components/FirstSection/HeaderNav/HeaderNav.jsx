import React from 'react';
import classes from './headernav.css';


const HeaderNav = () => {
  return (
    <header>
      <h1>Mountain Co.</h1>
      <nav>
        <li><a href="#">Tours</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </nav>
    </header>
  )
};

export default HeaderNav;