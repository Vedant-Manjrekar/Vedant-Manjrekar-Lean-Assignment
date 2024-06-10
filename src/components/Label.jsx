import React from "react";

function Label({ text, isMandatory }) {
  return (
    <p className='labelstyle'>
      {text} {isMandatory && <span className='mandatory'>*</span>}
    </p>
  );
}

export default Label;
