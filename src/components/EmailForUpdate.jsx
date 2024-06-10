import React from "react";
import Label from "./Label";
import Input from "./Input";

function EmailForUpdate() {
  const style = {
    border: "1px solid #999999",
    backgroundColor: "transparent",
    color: "#999999",
  };

  return (
    <>
      <Label
        text={"Enter your email to receive an update"}
        isMandatory={true}
      />
      <Input placeholder={"Enter your Email"} style={style} />
    </>
  );
}

export default EmailForUpdate;
