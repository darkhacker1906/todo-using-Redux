import React, { useState } from "react";

function InputField({value,onChange,inputTextId,inputTextType}) {
 
  return (
    <div>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-5 mb-2"
        id={inputTextId}
        type={inputTextType}
        placeholder="Enter your todo"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
