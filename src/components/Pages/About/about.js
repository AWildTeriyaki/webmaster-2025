import React from 'react';
import './About.css'; 

import Top from '../../AboutComponents/Top/Top.js';
import RestaurantIntro from '../../AboutComponents/RestaurantIntro/RestaurantIntro.js';
import Seasonal from '../../AboutComponents/Seasonal/Seasonal.js';
import StaffIntro from '../../AboutComponents/StaffIntro/StaffIntro.js';

const About = () => {
  return (
    <div className="about">
      <Top />
      <StaffIntro />
      <RestaurantIntro />
      <Seasonal />
    </div>
  );
};

export default About;
