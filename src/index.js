import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'

import './index.css';

// Components
import NavbarLocal from './components/NavbarLocal/NavbarLocal.js'
import Hero2 from './components/Hero2/Hero2.js'
import Cards from './components/Cards/Cards.js'
import MoralAppeal from './components/MoralAppeal/MoralAppeal.js'
import Footer from './components/Footer/Footer.js'
// unused
// import Hero from './components/Hero/Hero.js'
// import Breadcrumb from './components/Breadcrumb/Breadcrumb.js'

import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render((
<BrowserRouter>

<App />

</BrowserRouter>
));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
