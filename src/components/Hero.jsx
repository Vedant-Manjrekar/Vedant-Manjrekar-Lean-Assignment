import React, { useContext } from "react";
import QuestionBlock from "./QuestionBlock";
import AnswerBlock from "./AnswerBlock";
import contactus from "../../src/assets/contactus.svg";
import flag from "../../src/assets/flag.svg";
import suggestion from "../../src/assets/suggestions.svg";
import likedislike from "../../src/assets/feedback.svg";
import FloatingActionBtn from "./FloatingActionBtn";
import reportClicked from "../../src/assets/reportClicked.svg";
import feedbackClicked from "../../src/assets/feedbackClicked.svg";
import suggestionClicked from "../../src/assets/suggestionClicked.svg";
import contactusClicked from "../../src/assets/contactusClicked.svg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Context } from "../Context";

const options = [
  {
    label: "Contact Us",
    option: "contactus",
    img: contactus,
    clickedImg: contactusClicked,
    no: 0,
  },
  {
    label: "Share Feedback",
    option: "feedback",
    img: likedislike,
    clickedImg: feedbackClicked,
    no: 1,
  },
  {
    label: "Report an issue",
    option: "report",
    img: flag,
    clickedImg: reportClicked,
    no: 2,
  },
  {
    label: "Give Suggestion",
    option: "suggestion",
    img: suggestion,
    clickedImg: suggestionClicked,
    no: 3,
  },
];

function Hero() {
  const { isClicked, isOptionClicked } = useContext(Context);

  return (
    <div className='outer'>
      <div className='back'>
        <FaArrowLeftLong className='icon' />
        Back to questions
      </div>

      {(isOptionClicked || isClicked) && <div className='overlay'></div>}

      <FloatingActionBtn options={options} />

      <QuestionBlock />

      <div className='mob'>
        <QuestionBlock />
        <QuestionBlock />
        <QuestionBlock />
        <QuestionBlock />
        <QuestionBlock />
      </div>

      <div className='divider'>
        <p className='answer'>Answers (23)</p>

        <div className='sort'>
          Sort By:
          <select className='button'>
            <option value=''>Popular</option>
          </select>
        </div>
      </div>

      <AnswerBlock />
    </div>
  );
}

export default Hero;
