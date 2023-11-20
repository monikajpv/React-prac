import { useState } from "react";

function TextColor() {
  let [colord,setColor] = useState("Yellow");

    
    
      const Redc = (event) => {  


       setColor(event.target.value);


      };
      
  return (
    <div style={{ textAlign: "center", marginTop: "50px",  }}>
    <p style={{color:colord}} >React is a Javascript Library </p>
      {/* <button onClick={Redc}> Click</button> */}

       <select onChange={Redc}  >
        <option  value="red">Red</option>
        <option value="black">Black</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <optio value="coral">Coral</optio>
      </select> 
    </div>
  );
}

export default TextColor;