import { useState } from "react";

function Imgc() {
  let [image, setImage] = useState(
    "https://jslib.dev/wp-content/uploads/2022/03/Reactlogo.jpg"
  );

  const updateToReact = () => {
    setImage("https://jslib.dev/wp-content/uploads/2022/03/Reactlogo.jpg");
  };
  const updateToAngular = () => {
    setImage("https://angular.de/artikel/angular-10/header.jpg");
  };
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <img src={image} width={500} height={300} /> <br />
      <br />
      <button onClick={updateToReact}>React</button>&nbsp;&nbsp;&nbsp;
      <button onClick={updateToAngular}>Angular</button>
    </div>
  );
}

export default Imgc;
