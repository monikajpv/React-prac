import React from "react";
import {useState} from "react";
import B from "./B";
import mycontext from "./mycontext";

function A() {
   let[state,setState]=useState("");
   let[data,setData]=useState("");

  return (
    <div
      style={{
        width: "500px",
        padding: "20px",
        textAlign: "center",
        boxShadow: "0 0 10px black",
        margin: "20px auto",
      }}
    >
      <h2>PARENT Component</h2>
       <input
        type="text" placeholder="Enter product id"
          onChange={(e) => {
          setState(e.target.value);
        }}/> &nbsp;
      <button onClick={  () =>{setData(state)}  }>Submit</button> 
      <mycontext.Provider value={data}> 
      <B />
      </mycontext.Provider> 
    </div>
  );
 }
export default A;