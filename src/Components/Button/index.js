import React from "react";
import { Button } from "./StyledComponents";

function FormButton(props) {
  const { children, primary, handleClick } = props;
  return (
    <Button primary={primary} onClick={(e) => handleClick(e, children)}>
      {children}
    </Button>
  );
}

export default FormButton;
