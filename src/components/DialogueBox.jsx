import React, { useContext } from "react";
import Label from "./Label";
import DescribeBox from "./DescribeBox";
import DropDown from "./DropDown";
import Title from "./Title";
import Input from "./Input";
import EmailForUpdate from "./EmailForUpdate";
import { Context } from "../Context";
import Divider from "./Divider";

const elements = [
  "Interview Questions",
  "Concept Cards",
  "Practice Questions",
  "Quizzes",
];

const titles = {
  report: "Let us know about the Issue you are facing right now!",
  contactus: "Let us know what your queries are!",
  suggestions: "Share your Suggestions with us for a chance to earn rewards!",
  feedback: "Let us know your Feedback about us!",
};

const thanks = {
  report:
    "Thanks for bringing the issue to our attention. We'll review it shortly and provide an update soon!",
  contactus:
    "Thanks for reaching out to us! We will get back to you as soon as possible",
  suggestions: "Thanks for your valuable Suggestion!",
  feedback: "Thanks for your valuable feedback!",
};

function DialogueBox({ optionValue, isLoggedIn }) {
  const {
    isEmpty,
    setIsEmpty,
    isSubmitted,
    setIsSubmitted,
    setIsClicked,
    setElement,
    setIsOptionClicked,
  } = useContext(Context);

  const dialogueStyle = {
    width: isSubmitted && "max-content",
  };

  const submitStyle = { backgroundColor: !isEmpty ? "black" : "#6c6c6c" };

  function removeDialoge() {
    setTimeout(() => {
      setIsOptionClicked(false);
    }, 3000);
  }

  return (
    <div className='dialogue' style={dialogueStyle}>
      {isSubmitted ? (
        <p className='thnks'>
          {(optionValue === "report" && thanks.report) ||
            (optionValue === "contactus" && thanks.contactus) ||
            (optionValue === "feedback" && thanks.feedback) ||
            (optionValue === "suggestion" && thanks.suggestions)}
        </p>
      ) : (
        <>
          {optionValue === "report" && (
            <>
              <Title title={titles.report} />

              <Divider />

              <Label text={"Choose a section"} />
              <DropDown elements={elements} />

              <Label text={"Describe the issue in detail"} isMandatory={true} />

              <DescribeBox addAttachment={true} />

              {!isLoggedIn && <EmailForUpdate />}
            </>
          )}

          {optionValue === "contactus" && (
            <>
              <Title title={titles.contactus} />

              <Divider />

              <Label text={"Your Name"} isMandatory={!isLoggedIn} />
              <Input placeholder={"Enter your name"} />

              {!isLoggedIn && (
                <>
                  <Label text={"Your Email"} isMandatory={true} />
                  <Input placeholder={"Enter your Email"} />

                  <Label text={"Your Phone Number"} isMandatory={false} />
                  <Input placeholder={"Enter your Phone Number"} />
                </>
              )}

              <Label text={"What would you like to ask"} isMandatory={true} />
              <DescribeBox addAttachment={false} />
            </>
          )}

          {optionValue === "suggestion" && (
            <>
              <Title title={titles.suggestions} />

              <Divider />

              <Label text={"Choose a section"} />
              <DropDown elements={elements} />

              <Label
                text={"Describe the suggestion in detail"}
                isMandatory={true}
              />

              <DescribeBox addAttachment={true} />

              {!isLoggedIn && <EmailForUpdate />}
            </>
          )}

          {optionValue === "feedback" && (
            <>
              <Title title={titles.feedback} />

              <Divider />

              <DescribeBox addAttachment={true} />

              {isLoggedIn ? (
                <div className='anon'>
                  <input type='checkbox' />
                  <span>Send feedback anonymously</span>
                </div>
              ) : (
                <EmailForUpdate />
              )}
            </>
          )}

          <div className='submit'>
            <button
              style={submitStyle}
              className='submit-btn'
              disabled={isEmpty}
              onClick={() => {
                setIsClicked(false);
                setElement("");
                setIsSubmitted(true);
                removeDialoge();
              }}
            >
              Submit
            </button>
          </div>
        </>
      )}
      {isSubmitted && <div className='inv-tri'></div>}
    </div>
  );
}

export default DialogueBox;
