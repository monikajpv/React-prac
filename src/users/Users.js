import { useState } from "react";
import NewUser from "./NewUser";
import UserDetails from "./UserDetails";
import "./Users.css";

function Users() {
  let [users, setUsers] = useState([]);
  return (
    <div className="userscontainer container">
      <NewUser state={{ users, setUsers }} />

      <UserDetails state={{ users, setUsers }} />
    </div>
  );
}

export default Users;
