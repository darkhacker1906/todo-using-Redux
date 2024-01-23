import React from "react";
import { useDispatch } from "react-redux";
import "./Button.css";

function Button({ title,handleClick }) {
  return (
    <div>
      <button
        className="btn btn-blue bg-blue-400 hover:bg-blue-500 mb-3"
        type="submit"
        onClick={handleClick}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
