import React from "react";

function Login({setIsLoggedIn}) {
  return (
    <div
      style={{
        width: "400px",
        padding: "30px",
        margin: "100px auto",
        textAlign: "center",
        boxShadow: "0 0 10px black",
      }}
    >
      <h2>Login Form</h2>
      <br />
      <div>
        <input type="text" placeholder="Email Id" />
      </div>
      <br />

      <div>
        <input type="password" placeholder="Password" />
      </div>
      <br />

      <button onClick={()=> {setIsLoggedIn(true)}}>Login</button>
    </div>
  );
}

export default Login;
