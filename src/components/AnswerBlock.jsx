import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { BiMessageDots } from "react-icons/bi";
import dp from "../../src/assets/dp.svg";

function AnswerBlock() {
  return (
    <div className='ans block'>
      <div>
        <div className='btn1'>
          <div className='bdiv'>
            <img src={dp} alt='dp' />
            <div className='uname'>
              <p>Neha Bhat (You)</p>
              <span>Jun 27, 2023</span>
            </div>
          </div>
          <div className='edit'>
            <AiFillEdit width={"20px"} height={"20px"} />
            Edit
          </div>
        </div>
      </div>

      <p className='anc'>
        Lorem ipsum dolor sit amet consectetur. Elit et ut at vestibulum enim
        ornare feugi vitae. Eget proin aliquam blandit eget vitae erat fermentum
        lacus. Dignissim done mi vel fermentum. Id ultrices risus sit pel sit
        elit morbi. Mi sed mauris aenean odio egestas ullamcorper. Dignissim in
        vel fusce id. Sit blandit diam ridiculus ipsum interdum ut velit quam.
        Bibendum amet mi
      </p>

      <div className='aFoot'>
        <BiLike />
        Like
        <BiMessageDots />
        <input type='text' className='inp1' placeholder='Add a comment' />
        <button className='pst'>Post</button>
      </div>
    </div>
  );
}

export default AnswerBlock;
