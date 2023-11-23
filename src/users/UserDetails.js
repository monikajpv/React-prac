import {useEffect, useState} from "react";
import axios from "axios";

function UserDetails() {
  let [users,setUsers]= useState([]);

  useEffect( ()=>{
    axios
    .get("http://localhost:3000/results")
    .then((res)=>{
      console.log(res.data);
      setUsers(res.data);
  })
    .catch(()=>{
      alert( " error while getting the data");
    });
  },[])


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <table className="table table-hover">
            <thead className="table-dark">
              <tr>
                <th>NAME</th>
                <th>EMAIL ID</th>
                <th>GENDER</th>
                <th>PHONE</th>
                <th colSpan={2}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {
                users.length > 0 && users.map((user,index)=>{

                  return<tr>
                  <td> {user.name}</td> 
                  <td> {user.email}</td> 
                  <td> {user.phone}</td> 
                  <td> <button className="btn btn-outline-success"> Update </button></td> 
                  <td> <button className="btn btn-outline-danger"> Delete </button> </td>                    
                   
                  </tr>
                })
              }


              {/* <tr>
                <td>Raj Verma</td>
                <td>raj@gmail.com</td>
                <td>male</td>
                <td>9999999999</td>
                <td>
                  <button className="btn btn-outline-success">Update</button>
                </td>
                <td>
                  <button className="btn btn-outline-danger">Delete</button>
                </td>
              </tr> */}
            
             
              
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
