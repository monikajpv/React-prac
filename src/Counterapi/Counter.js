import React, { useState } from "react";

function Counter(){

    let [state,setState]= useState(0);
    let updatecount = () => {
        setState(state +1);
    };

    //Tradition Approach
    // var countv = 90;
    // let fnc = () =>{

    //     countv =countv +1;
    //     console.log(countv);

    // }
    return(

        <div style={{boxShadow:"0 0 10px",padding:"40px",
         width:"400px",
         marginLeft:"400px" ,
         marginTop:"50px" }}
         >

            <h4>Counter Value : {state} </h4>
            <button onClick={updatecount}>Submit</button>


        </div>

    );
}
export default Counter;