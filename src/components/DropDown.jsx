import React from "react";

function DropDown({ elements }) {
  return (
    <select className='dropdown'>
      <option value='none'>Select</option>
      {elements.map((elem, i) => (
        <option value={elem} key={i}>
          {elem}
        </option>
      ))}
    </select>
  );
}

export default DropDown;
