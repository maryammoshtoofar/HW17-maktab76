import React from "react";
import { Button } from "./StyledComponents";

function FormButton(props) {
  const { children, primary } = props;
  return <Button primary={primary}>{children}</Button>;
}

export default FormButton;
