import React from 'react';
import classes from './topbar.css';


const TopBar = () => {
  return <div className={classes.container}>
      <div className={classes.logo}>Mountain Co.</div>
      <div className={classes.items}>
        <div className={classes.item}>Project</div>
        <div className={classes.item}>About</div>
        <div className={classes.item}>Contact</div>
      </div>
    </div>;
};

export default TopBar;