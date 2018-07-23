import React from 'react';
import classes from './hero.css';

import Button from './../../Utilities/Button/Button'

const Hero = () => {
  return(
    <section className={classes.hero}>
      <div className={classes.heroContentArea}>
        <h1>Mountain Travel</h1>
        <h3>Unmissable Adventure Tours Around The World</h3>
        <Button text='Contact Us Now' />
      </div>
    </section>
  );
};

export default Hero;