import './App.css';
// import { useState } from 'react';
import Quiz from './QuizApp/Quiz';
// import A from './UIComp/A';
// import B from './UIComp/B';
// import myContext from './UIComp/myContext';
// import { Route,Routes,Navigate} from 'react-router-dom';
// import Nav from './Components/Nav';
// import Profile from './Routing/Profile';
// import Home from './Routing/Home';
// import Product from './Routing/Product';
// import Electronics from './Routing/NestedComponents/Electronics';
// import Jewelery from './Routing/NestedComponents/Jewelery';
// import MensClothing from './Routing/NestedComponents/MensClothing';
// import WomensClothing from './Routing/NestedComponents/WomensClothing';

//optional
// import Main from './Main';
// import Practice from './practice';
// import Axioss from './Axioss';
 //import Login from './Login/Login';
//import Loginboard from './Login/Loginboard';

//import Profileclass from './Components/Profileclass';

// import Users from './users/Users';
function App() {
  //  let [isLoggedIn,setIsLoggedIn] = useState(false);

  return (
    <div className='App' >
      <Quiz></Quiz>
      {/* <A></A>
      <B></B> */}
      {/* <Profileclass></Profileclass> */}
      {/* <Axioss /> */}
    {/* <Main></Main> */}
    {/* <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Loginboard" element={<Loginboard />} />

    </Routes>  */}


       {/* <Nav isLoggedIn = {isLoggedIn}  setIsLoggedIn = {setIsLoggedIn}/> 
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
        <Route path="/user" element={<Users />} />
      </Routes>  
    */}
    </div>
  );

}

export default App;
