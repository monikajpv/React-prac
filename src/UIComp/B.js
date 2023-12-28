import React from "react";
import { useContext } from "react";
import myContext from "./myContext";
function B() {
  let imp = useContext(myContext);


  return (
    <div
      style={{
        width: "400px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px green",
        margin: "30px auto",
      }}
    >
      <h2>CHILD Component</h2>
      <p style={{fontStyle:"italic",color:"green", fontWeight:"bold"}}> 
      {imp} 
      </p> 
     
      
      {/* <C /> */}
    </div>
  );
}

export default B;