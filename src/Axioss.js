import {useState} from "react";
import axios from "axios";

function Axioss(){
    let[data,setData]=useState();

    const api = axios.get(" http://localhost:3000/results")
    .then((res)=>{
        setData(res.data);

    })
    .catch((error)=>{
        console.log(error);

        
    })

    return(
        <div style={{style:"display:grid", gridColumn: "1fr 1fr 1fr"}}>


        </div>


    )

}
export default Axioss;