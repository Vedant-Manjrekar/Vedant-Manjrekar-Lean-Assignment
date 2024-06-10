import React from "react";
import Title from "./Title";
import Divider from "./Divider";
import DescribeBox from "./DescribeBox";
import EmailForUpdate from "./EmailForUpdate";
import AnonymityCheckbox from "./AnonymityCheckbox";

function Feedback({ title, isLoggedIn }) {
  return (
    <>
      <Title title={title} />

      <Divider />

      <DescribeBox addAttachment={true} />

      {isLoggedIn ? <AnonymityCheckbox /> : <EmailForUpdate />}
    </>
  );
}

export default Feedback;
