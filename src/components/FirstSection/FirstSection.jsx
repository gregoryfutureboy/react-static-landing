import React from 'react';

//COMPONENTS
import TopBar from "./TopBar/TopBar";
import Main from './Main/Main';
import classes from './firstsection.css'

const FirstSection = () => {
  return (
    <div className={classes.firstSection}>
      <TopBar />
      <Main />
    </div>
  );
};

export default FirstSection;