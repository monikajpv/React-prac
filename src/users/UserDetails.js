import { useEffect, useState } from "react";
import axios from "axios";
function UserDetails(props) {
  useEffect(() => {
    axios
      .get("http://localhost:3000/results")
      .then((res) => {
        console.log(res.data);
        props.state.setUsers(res.data);
      })
      .catch(() => {
        alert("error whle getting the data");
      });
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:3000/results/${id}`)
      .then(() => {
        axios
          .get("http://localhost:3000/results")
          .then((res) => {
            console.log(res.data);
            props.state.setUsers(res.data);
          })
          .catch(() => {
            alert("error whle getting the data");
          });
      })
      .catch(() => {
        alert("error while deleting the user");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
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
              {props.state.users.length > 0 &&
                props.state.users.map((user, index) => {
                  return (
                    <tr>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.gender}</td>
                      <td>{user.phone}</td>
                      <td>
                        <button className="btn btn-outline-success">
                          Update
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {
                            deleteUser(user.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
