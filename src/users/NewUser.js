import { useState } from "react";
import axios from "axios";

function NewUser(props) {
  let [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    gender: true,
  });
  const addNewUser = () => {
    axios
      .post("http://localhost:3000/results", state)
      .then((res) => {
        setState({
          name: "",
          email: "",
          phone: "",
          gender: true,
        });
        axios
          .get("http://localhost:3000/results")
          .then((res) => {
            props.state.setUsers(res.data);
          })
          .catch(() => {
            alert("error whle getting the data");
          });
      })
      .catch(() => {
        alert("Error while creating the user");
      });
  };
  return (
    <div className="container mt-5">
      <div className="row">
        {/* <div className="col-4"></div> */}
        <div className="col-12 shadow p-4 bg-dark">
          <h4 className="text-center text-primary">Register Newuser</h4>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
              value={state.name}
              onChange={(e) => {
                setState({
                  ...state,
                  name: e.target.value,
                });
              }}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email Id"
              value={state.email}
              onChange={(e) => {
                setState({
                  ...state,
                  email: e.target.value,
                });
              }}
            />
          </div>
          <div className="my-3">
            <input
              type="number"
              className="form-control"
              placeholder="Phone"
              value={state.phone}
              onChange={(e) => {
                setState({
                  ...state,
                  phone: e.target.value,
                });
              }}
            />
          </div>
          <div className="text-center">
            <div className="my-3 form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                className="form-check-input"
                value={state.gender ? "male" : null}
                onChange={(e) => {
                  setState({
                    ...state,
                    gender: "male",
                  });
                }}
              />
              <label className="text-white mx-2">Male</label>
            </div>
            <div className="my-3 form-check form-check-inline">
              <input
                name="gender"
                type="radio"
                className="form-check-input"
                value={!state.gender ? "female" : null}
                onChange={(e) => {
                  setState({
                    ...state,
                    gender: "female",
                  });
                }}
              />
              <label className="text-white mx-2">Female</label>
            </div>
          </div>
          <div className="text-center my-3">
            <button
              className="btn btn-outline-primary mx-auto"
              onClick={addNewUser}
            >
              Register User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
