import React, { useState } from "react";

export default function TextForrrm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    //console.log("Uppercase was clicked : " + text);
    let newText = " ";
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
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
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            placeholder="Enter text here......"
          ></textarea>
        </div>
        <button
          button
          className="btn btn-primary mx-3 my-1"
          onClick={handleUpClick}
        >
          Click to Uppercase
        </button>
        <button
          button
          className="btn btn-primary mx-3 my-1"
          onClick={handleLowClick}
        >
          Click to Lowercase
        </button>
        <button
          button
          className="btn btn-primary mx-2 my-1"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} charaters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter in text box to preview  here"}</p>
      </div>
    </>
  );
}
