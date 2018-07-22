import React from 'react';
import classes from './main.css';

import Button from './../../Utilities/Button/Button'

const Main = () => {
  return (
    <div className={classes.main}>
      <h1 className={classes.mainHeader}>Mountain Travel</h1>
      <h3 className={classes.subtitle}>Unmissable Adventure Tours Around The World</h3>
      <Button text='Contact Us Now'/>
    </div>
  );
};

export default Main;