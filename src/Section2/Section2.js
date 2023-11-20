import React from "react";
import ImageComp from "./ImageComp";

function Section2() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "100px",
        textAlign: "center",
      }}
    >
      <ImageComp
        image="https://images.pexels.com/photos/4065864/pexels-photo-4065864.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="Profile"
      />
      <ImageComp
        image="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="Resume"
      />
      <ImageComp
        image="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        title="Project"
      />
      <ImageComp
        image="https://images.pexels.com/photos/33999/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        title="Contact"
      />
    </div>
  );
}

export default Section2;
