import React from "react";
import { Button } from "./styledcomponents";

function FormButton(props) {
  const { children } = props;
  return <Button>{children}</Button>;
}

export default FormButton;
