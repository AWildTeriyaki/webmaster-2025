import Home from './Pages/Home/home.js';
import About from './Pages/about.js';
import Reservations from './Pages/reservations.js';
import References from './Pages/references.js';
import Order from './Pages/order.js';
import { Routes, Route } from 'react-router-dom';
const Main = () => (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/reservations' element={<Reservations />}></Route>
      <Route path='/references' element={<References />}></Route>
      <Route path='/order' element={<Order />}></Route>
    </Routes>
  );

export default Main;