import { Redirect, Route, Switch } from 'react-router';
import Navbar from './component/Navbar';
import About from './component/pages/About';
import { AddProducts } from './component/pages/AddProduct';
import { Cart } from './component/pages/Cart';
import { Cashout } from './component/pages/Castout';
import Category from './component/pages/Category';
import Contact from './component/pages/Contact';
import Home from './component/pages/Home';
import Test from './component/pages/Test';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/category" component={Category}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/add" component={AddProducts}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/test" component={Test}/>
      <Route exact path="/cashout" component={Cashout}/>
      <Redirect to="/" />
    </Switch>
    </>
  );
}

export default App;
