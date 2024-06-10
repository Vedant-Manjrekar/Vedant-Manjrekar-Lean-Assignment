import React from "react";
import Label from "./Label";
import Title from "./Title";
import Divider from "./Divider";
import DropDown from "./DropDown";
import DescribeBox from "./DescribeBox";
import EmailForUpdate from "./EmailForUpdate";

function Suggestions({ title, isLoggedIn }) {
  const elements = [
    "Interview Questions",
    "Concept Cards",
    "Practice Questions",
    "Quizzes",
  ];

  return (
    <>
      <Title title={title} />

      <Divider />

      <Label text={"Choose a section"} />
      <DropDown elements={elements} />

      <Label text={"Describe the suggestion in detail"} isMandatory={true} />

      <DescribeBox addAttachment={true} />

      {!isLoggedIn && <EmailForUpdate />}
    </>
  );
}

export default Suggestions;
