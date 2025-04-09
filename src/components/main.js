import Home from './Pages/Home/home.js';
import Menu from './Pages/Menu/menu.js';
import About from './Pages/About/about.js';
import Reservations from './Pages/reservations.js';
import References from './Pages/References/references.js';
import ScrollToTop from '../components/ScrollToTop.js';

import { useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function Main() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/reservations' element={<Reservations />}></Route>
        <Route path='/references' element={<References />}></Route>
      </Routes>
    </>
  );
}

export default Main;