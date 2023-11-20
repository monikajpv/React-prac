import { useState } from "react";
import Data from "./Data";

function Textc(){
      let[state,setState]=useState();

    return(
        <div>
        <input type="text" onChange={(event)=>{
            setState(event.target.value);
        }      
    }/>
    <Data data={state}/>
    </div>

    );
}

export default Textc;