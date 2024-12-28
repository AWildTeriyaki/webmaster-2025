import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Components
import Navbar_Local from './components/Navbar-Local/Navbar-Local.js'
import Hero from './components/Hero/Hero.js'

import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const hero_image = "https://images.pexels.com/photos/674576/pexels-photo-674576.jpeg";

root.render(
  <React.StrictMode>
    <Navbar_Local />
    <Hero/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
