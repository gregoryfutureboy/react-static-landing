import React from 'react';

//COMPONENTS
import HeaderNav from "./HeaderNav/HeaderNav";
import Hero from './Hero/Hero';
import classes from './firstsection.css'

const FirstSection = () => {
  return (
    <div className={classes.firstSection}>
      <HeaderNav />
      <Hero />
    </div>
  );
};

export default FirstSection;