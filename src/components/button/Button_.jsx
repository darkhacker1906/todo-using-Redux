import React from "react";
import { useDispatch } from "react-redux";
import "./Button.css";

function Button({ title,handleClick }) {
  return (
    <div>
      <button
        className="btn btn-blue bg-green-200 hover:bg-green-400"
        type="submit"
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
