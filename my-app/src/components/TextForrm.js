import React, { useState } from "react";

export default function TextForrrm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <div className="heading">
        <h1>{props.heading}</h1>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="14"
        ></textarea>
      </div>
      <div className="btn btn-primary" onClick={handleUpClick}>
        Click to Uppercase
      </div>
    </div>
  );
}
