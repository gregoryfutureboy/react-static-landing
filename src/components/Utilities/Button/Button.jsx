import React from 'react';
import classes from './button.css';

const Button = (props) => {
  return (
    <button className={classes.button}>{props.text}</button>
  );
};

export default Button;