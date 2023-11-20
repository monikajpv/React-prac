import { useState } from "react";
import Text from "./Text";
function Inputcomp() 
{
    let[state,setState]=useState("");
    let[data,setData]=useState("");



    return(
        <div>
            <h2>Text Components</h2>

            <input type="text" placeholder="Enter the text" onChange={(event)=>{
                setState(event.target.value);
            }}/>
            <button onClick={()=>{setData(state);}}>SUBMIT</button>
            <br/><hr/><br/>
             <h1> {data}</h1> 

            <Text data={data}/>
    
        </div>


    );
    
    
    
     

  
}

export default Inputcomp;