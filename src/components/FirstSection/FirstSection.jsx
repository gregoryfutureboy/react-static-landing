import React from 'react';

//COMPONENTS
import TopBar from "./TopBar/TopBar";
import Main from './Main/Main';


const FirstSection = () => {
  return (
    <div className='firstSection'>
      <TopBar />
      <Main />
    </div>
  );
};

export default FirstSection;