import React from 'react';
import './About.css'; 

import Top from '../../AboutComponents/Top/Top.js';
import StaffIntro from '../../AboutComponents/StaffIntro/StaffIntro.js';

const About = () => {
  return (
    <div className="about">
      <Top />
      <StaffIntro />
    </div>
  );
};

export default About;
