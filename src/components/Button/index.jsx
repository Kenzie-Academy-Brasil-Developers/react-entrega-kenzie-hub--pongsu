import React from "react";

import { StyledButton } from "./style";

const Button = ({ disabled, onClick, id, innerText, className }) => {
  return (
    <StyledButton
      disabled={disabled}
      className={className}
      onClick={onClick}
      id={id}
    >
      {innerText}
    </StyledButton>
  );
};

export default Button;