import React, { useContext } from "react";
import { IoMdAttach } from "react-icons/io";
import { Context } from "../Context";

function DescribeBox({ addAttachment }) {
  const { setIsEmpty } = useContext(Context);

  return (
    <div className='describe'>
      <div className='area'>
        <textarea
          className='textarea'
          maxLength='1000'
          placeholder='Write here...'
          onChange={(e) =>
            e.target.value !== "" ? setIsEmpty(false) : setIsEmpty(true)
          }
          rows={3.3}
        ></textarea>

        {addAttachment ? (
          <label htmlFor='file1' className='attach'>
            <IoMdAttach /> Attach
          </label>
        ) : (
          ""
        )}

        <input type='file' name='Attach' id='file1' />
      </div>
    </div>
  );
}

export default DescribeBox;
