import { useState } from "react";
import "./Table.css";

function Table() {

    function Previous()
{
  let [state, setState] = useState([
    {
      name: "Anuj Verma",
      gender: "male",
      city: "Delhi",
    },
    {
      name: "Ashwini Patil",
      gender: "female",
      city: "Pune",
    },
    {
      name: "Priya Jadhav",
      gender: "female",
      city: "Nashik",
    },
    {
      name: "Swati Kumari",
      gender: "female",
      city: "Banglore",
    },
    {
      name: "Rohan Sharma",
      gender: "male",
      city: "Hyderabad",
    },
  ]);

    
  return (
    <div>
      <table id="table">
        <thead>
          <tr style={{backgroundColor:"black", color:"white", padding:"50px"}}>
            <th>NAME</th>
            <th>GENDER</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
            {/* <tr>
            <td >  {state[0].name}</td>
            <td>  {state[0].gender} </td>
            <td> {state[0].city}</td>
            </tr>
            <tr>
            <td >  {state[1].name}</td>
            <td>  {state[1].gender} </td>
            <td> {state[1].city}</td>
            </tr> */}
            {state.map((element,index)=>
            {
                return(
                        <tr>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>{element.city}</td>

                        </tr>

                );
            })}
            
        </tbody>
    
      </table>
            <button onClick={Previous}>Previous User</button>
            <button onClick={Newu}>New User</button>
    </div>
  );
}
}



function Newu()
{
  let [state, setState] = useState([
    {
      name: "Anuja Verma",
      gender: "male",
      city: "Delhi",
    },
    {
      name: "Ashwin Patil",
      gender: "female",
      city: "Pune",
    },
    {
      name: "Priya Jadhav",
      gender: "female",
      city: "Nashik",
    },
    {
      name: "Swati Kumari",
      gender: "female",
      city: "Banglore",
    },
    {
      name: "Rohan Sharma",
      gender: "male",
      city: "Hyderabad",
    },
  ]);

    
  return (
    <div>
      <table id="table">
        <thead>
          <tr style={{backgroundColor:"black", color:"white", padding:"50px"}}>
            <th>NAME</th>
            <th>GENDER</th>
            <th>CITY</th>
          </tr>
        </thead>
        <tbody>
            {/* <tr>
            <td >  {state[0].name}</td>
            <td>  {state[0].gender} </td>
            <td> {state[0].city}</td>
            </tr>
            <tr>
            <td >  {state[1].name}</td>
            <td>  {state[1].gender} </td>
            <td> {state[1].city}</td>
            </tr> */}
            {state.map((element,index)=>
            {
                return(
                        <tr>
                            <td>{element.name}</td>
                            <td>{element.gender}</td>
                            <td>{element.city}</td>

                        </tr>

                );
            })}
            
        </tbody>
    
      </table>
            
    </div>
  );
}


export default Table;
