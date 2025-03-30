import React from 'react';
import './About.css'; 

import Top from '../../AboutComponents/Top/Top.js';
import StaffIntro from '../../AboutComponents/StaffIntro/StaffIntro.js';
import StaffGallery from '../../AboutComponents/StaffGallery/StaffGallery.js';

const About = () => {
  return (
    <div className="about">
      <Top />
      <StaffIntro />
      <StaffGallery />
    </div>
  );
};

export default About;
