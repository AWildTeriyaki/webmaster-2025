import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Components
import NavbarLocal from './components/NavbarLocal/NavbarLocal.js'
import Hero from './components/Hero/Hero.js'
import Breadcrumb from './components/Breadcrumb/Breadcrumb.js'
import Cards from './components/Cards/Cards.js'

import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <NavbarLocal />
    <Hero/>
    <Breadcrumb />
    <Cards />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
