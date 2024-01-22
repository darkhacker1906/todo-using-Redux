import React from "react";
import './InputField.css'

function InputField() {
  return (
    <div className="input_div" >
      <input 
      className="text_todo"
        type="text"
        placeholder="Enter your text"
        // value={todoText}
      />
  
    </div>
  );
}

export default InputField;