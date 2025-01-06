import Home from './home.js';
import About from './about.js';

const Main = () => (
    <Switch>
      <Route path='/' component={Home}></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/reservations' component={Reservations}></Route>
      <Route path='/references' component={References}></Route>
    </Switch>
  );