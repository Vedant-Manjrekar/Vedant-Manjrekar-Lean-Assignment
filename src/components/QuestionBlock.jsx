import React from "react";
import Button from "../components/Button";
import { IoEye, IoInformationCircleOutline } from "react-icons/io5";
import { BiSolidMessageDetail } from "react-icons/bi";
import rocket from "../../src/assets/rocket.svg";

function QuestionBlock() {
  return (
    <div className='ques block'>
      <div>
        <div className='btn'>
          <div className='bdiv'>
            <div className='deskBtn'>
              <Button text={"Design"} bgColor={"#A9D9FF"} />
              <Button text={"Technology"} bgColor={"#A9D9FF"} />
            </div>
            <div className='mobBtn'>Posted on 28 Jun 2023</div>
          </div>
          <div className='startup'>
            <img width={50} className='strt' src={rocket} alt='img' />
            <p>Startup </p>
          </div>
        </div>
      </div>

      <p className='p1'>
        A travel startup wants Amazon to pre-install their personal travel agent
        bot on existing Amazon Echos. What is the value of the partnership to
        the travel startup?{" "}
      </p>

      <div className='bdiv2'>
        <div className='bdiv1'>
          <Button text={"Design"} bgColor={"#DBEFFF"} fontSize={"8px"} />
          <Button text={"UX"} bgColor={"#DBEFFF"} fontSize={"8px"} />
        </div>
        <Button
          text={"EASY"}
          bgColor={"#98FD75"}
          textColor={"black"}
          fontSize={"8px"}
        />
      </div>

      <p className='p2'>
        Lorem ipsum dolor sit amet consectetur. Orci elementum aliquet nec
        viverra tincidunt ? Amet ullamcorper velit tristique scelerisque donec
        sed viverra arcu. Amet arcu vitae sit scelerisque ultrices magna cursus
        se?
      </p>

      <div className='foot'>
        <div className='answ'>
          <BiSolidMessageDetail color='#3BCA09' />
          23 Answers
        </div>

        <div className='views'>
          <IoEye />
          100 Views
        </div>
        <div className='info'>
          <IoInformationCircleOutline />
          <span>How should you word your answer?</span>
        </div>
      </div>
    </div>
  );
}

export default QuestionBlock;
