import React from "react";
function NewUser() {
  return (
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4 shadow p-4 bg-dark">
          <h4 className="text-center text-primary">Register Newuser</h4>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="User Name"
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Email Id"
            />
          </div>
          <div className="my-3">
            <input type="number" className="form-control" placeholder="Phone" />
          </div>
          <div className="text-center">
            <div className="my-3 form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                className="form-check-input"
                placeholder="Email Id"
              />
              <label className="text-white mx-2">Male</label>
            </div>
            <div className="my-3 form-check form-check-inline">
              <input
                name="gender"
                type="radio"
                className="form-check-input"
                placeholder="Email Id"
              />
              <label className="text-white mx-2">Female</label>
            </div>
          </div>
          <div className="text-center my-3">
            <button className="btn btn-outline-primary mx-auto">
              Register User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
