import React from "react";

export default function TextForrrm(props) {
  return (
    <div>
      <div className="heading">
        <h1>{props.heading}</h1>
      </div>

      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="14"></textarea>
      </div>
      <div className="btn btn-primary">Click to Uppercase</div>
    </div>
  );
}
