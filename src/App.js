
import './App.css';
import { useState } from 'react';
import Nav from './Components/Nav';
import Profile from './Routing/Profile';
import Home from './Routing/Home';
import Cart from './Routing/Cart';
import Product from './Routing/Product';
import Electronics from './Routing/NestedComponents/Electronics';
import Jewelery from './Routing/NestedComponents/Jewelery';
import MensClothing from './Routing/NestedComponents/MensClothing';
import WomensClothing from './Routing/NestedComponents/WomensClothing';
import { Route,Routes,Navigate} from 'react-router-dom';


function App() {
  let [isLoggedIn,setIsLoggedIn] = useState(false);

  
  return (
    <div className='App' >
      <Nav isLoggedIn = {isLoggedIn}  setIsLoggedIn = {setIsLoggedIn}/> 

      <Routes>
        <Route path="/product" element={<Product />}>
          <Route path="" element={<Navigate to="Electronics" />} /> 
          <Route path="electronics" element={<Electronics />} />
          <Route path="jewelery" element={<Jewelery />} />
          <Route path="mens" element={<MensClothing />} />
          <Route path="womens" element={<WomensClothing />} />

        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      
    
    </div>
  );

}

export default App;
