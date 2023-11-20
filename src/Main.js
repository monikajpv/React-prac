import Login from "./Login";
import Home from "./Home";
import { useState } from "react";

function Main({isLoggedIn,setIsLoggedIn}){



    return(
    <div>{ isLoggedIn ? <Home/> :  <Login setIsLoggedIn ={setIsLoggedIn}/>} </div>);

    
}
export default Main;