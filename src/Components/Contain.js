import { useState, useRef } from "react";
import "./Nav.css";

function Contain() {
  let checkboxReference = useRef(null);

  let [theme, setTheme] = useState({
    bgColor: "white",
    textColor: "black",
    text: "Check to Switch Dark Mode",
  });

  const changeTheme = () => {
    if (checkboxReference.current.checked) {
      setTheme({
        bgColor: "black",
        textColor: "white",
        text: "Uncheck to Switch Light Mode",
      });
    } else {
      setTheme({
        bgColor: "white",
        textColor: "black",
        text: "Check to Switch Dark Mode",
      });
    }
  };
  return (
    <div className="profilecontainer">
      <div className="image">
        <img
          src="https://i.pinimg.com/originals/82/bd/ef/82bdef60bb32bab81a5d5f2c9cd8a3fe.jpg"
          width="100%"
          height="100%"
        />
      </div>

      <div
        className="content"
        style={{ backgroundColor: theme.bgColor, color: theme.textColor }}
      >
        <dl>
          <dt>
            <b>User Name</b>
          </dt>
          <dd>Chris Adam</dd>
          <dt>
            <b>Email Id</b>
          </dt>
          <dd>chrisadam@gmail.com</dd>
          <dt>
            <b>Gender</b>
          </dt>
          <dd>Male</dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et
            quidem at molestias possimus, ex ea explicabo totam architecto
            dignissimos dolorum fugit voluptas eos asperiores deleniti? Fugit
            recusandae consequatur quod?
          </dd>
        </dl>
        <button>More Details</button>
        <br />
        <br />

        <input type="checkbox" ref={checkboxReference} onClick={changeTheme} />

        <label>{theme.text}</label>
      </div>
    </div>
  );
}

export default Contain;
