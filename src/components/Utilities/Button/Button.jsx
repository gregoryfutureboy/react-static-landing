import React from 'react';
import classes from './button.css';

const Button = (props) => {
  return (
    <a href="#" className={classes.btn}>{props.text}</a>
  );
};

export default Button;