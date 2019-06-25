import React from "react";
import "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={
            props.inValid && props.shouldValidate && props.touched
              ? "InputElement Invalid"
              : "InputElement"
          }
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    default:
      inputElement = (
        <input
          className="InputElement"
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <div className="Input">
      <label className="Label">{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
