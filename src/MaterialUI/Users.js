import { useState } from "react";
import { Button } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";

function Users() {
  const [state, setState] = useState([]);
  const [users, setUsers] = useState([]);

  const [checkedbtn, setCheckedbtn] = useState("all");
  const [showRadio, setShowRadio] = useState(false);

  const getUsers = async () => {
    var res = await axios.get("https://randomuser.me/api/?results=30");
    console.log(res.data.results);
    setState(res.data.results);
    setUsers(res.data.results);
    setShowRadio(true);
  };

  const hideUsers = () => {
    setShowRadio(false);
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>Users Information</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        illum velit tempora excepturi rem! Eligendi consequatur soluta
        aspernatur velit nobis expedita. Doloremque dolore quae amet ex officiis
        porro debitis tempore odio eum! Possimus obcaecati eum, magni excepturi
        rem dolore voluptates eligendi illo quia nam aspernatur, soluta quis
        accusantium consectetur ab, harum dolorum. Ab dolores assumenda incidunt
        laboriosam consectetur accusantium voluptatem voluptatum officiis quia
        illum, eius molestias possimus iure earum ipsa ipsam temporibus autem
        doloremque vero est corrupti magni vel. Suscipit consectetur repellat
        quam nostrum ad dolores officia facilis praesentium voluptatum porro
        quaerat beatae omnis vel amet magni iste iure voluptatem, illo molestiae
        eos dolor culpa at ex. Ducimus, est dolores deleniti et quaerat incidunt
        eveniet repellat officiis similique reiciendis recusandae iste rem
        magnam blanditiis laudantium numquam, dicta consequatur ex esse ea?
        Excepturi harum quaerat dolorum saepe at ad blanditiis ex deleniti
        veniam dolor officiis, quia reprehenderit esse? Ducimus, iusto maiores!
      </p>
      <Button variant="outlined" color="success" onClick={getUsers}>
        Show Users
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="outlined" color="error" onClick={hideUsers}>
        Hide Users
      </Button>
      <div
        style={{ textAlign: "center", display: showRadio ? "block" : "none" }}
      >
        <FormControl>
          <RadioGroup row>
            <FormControlLabel
              checked={checkedbtn === "all" ? true : false}
              value="all"
              control={<Radio />}
              label="ALL"
              onChange={() => {
                setCheckedbtn("all");
                setState(users);
              }}
            />
            <FormControlLabel
              checked={checkedbtn === "female" ? true : false}
              value="female"
              control={<Radio />}
              label="Female"
              onChange={() => {
                setCheckedbtn("female");
                setState(users.filter((user) => user.gender === "female"));
              }}
            />
            <FormControlLabel
              checked={checkedbtn === "male" ? true : false}
              value="male"
              control={<Radio />}
              label="Male"
              onChange={() => {
                setCheckedbtn("male");
                setState(users.filter((user) => user.gender === "male"));
              }}
            />
          </RadioGroup>
        </FormControl>
        <h4>Number of Users :{state.length}</h4>
      </div>
      <div
        style={{
          width: "1100px",
          margin: "50px auto",
          display: showRadio ? "block" : "none",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>IMAGE</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>GENDER</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>PHONE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.map((user) => {
                return (
                  <TableRow>
                    <TableCell>
                      <img
                        style={{ borderRadius: "50%" }}
                        src={user.picture.medium}
                        width={70}
                        height={70}
                      />
                    </TableCell>
                    <TableCell>
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {user.name.title}
                      </span>{" "}
                      {user.name.first}
                    </TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Users;
