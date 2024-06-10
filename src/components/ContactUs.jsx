import React from "react";
import Label from "./Label";
import Title from "./Title";
import Divider from "./Divider";
import DescribeBox from "./DescribeBox";
import Input from "./Input";

function ContactUs({ title, isLoggedIn }) {
  return (
    <>
      <Title title={title} />

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
  );
}

export default ContactUs;
