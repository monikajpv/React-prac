import React from 'react';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';
function Nav()
{
    let [isLoggedIn,setIsLoggedIn] = useState(false);

    return(
    <div className="navcontainer">
        <div className="title">  <h2>Portfolio</h2>  </div>

    <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/product">Product</Link>
        <Link to="/cart">Cart</Link>

        {/* {
            isLoggedIn ? <button>Logout</button>:null
        } */}
    </div>
    

        
    </div>
    
    );
}
export default Nav;