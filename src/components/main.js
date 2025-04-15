import Home from './Pages/Home/home.js';
import Gallery from './Pages/Gallery/gallery.js';
import About from './Pages/About/about.js';
import Reservations from './Pages/reservations.js';
import References from './Pages/References/references.js';
import Order from './Pages/Order/order.js';

import { Routes, Route } from 'react-router-dom';

function Main() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/reservations' element={<Reservations />}></Route>
        <Route path='/references' element={<References />}></Route>
        <Route path='/order' element={<Order />}></Route>
      </Routes>
    </>
  );
}

export default Main;