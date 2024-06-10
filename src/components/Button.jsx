import React, { useContext } from "react";
import { Context } from "../Context";

function Button({ bgColor, text, textColor, isEmpty, fontSize }) {
  const { value, setValue } = useContext(Context);

  return (
    <button
      className='button'
      disabled={isEmpty}
      style={{
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        fontSize: `${fontSize}`,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
