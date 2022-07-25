import React from "react";
import { Button } from "./styledcomponents";

function FormButton(props) {
  const { children, bg, color } = props;
  console.log(bg);
  console.log(color);
  return <Button>{children}</Button>;
}

export default FormButton;
