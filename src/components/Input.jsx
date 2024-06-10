import React from "react";

function Input({ placeholder, style }) {
  return (
    <input
      style={style}
      type='text'
      className='inp'
      placeholder={placeholder}
    />
  );
}

export default Input;
