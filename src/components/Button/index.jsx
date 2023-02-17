import React from "react";

import { StyledButton } from "./style";

const Button = ({ type, onClick, id, innerText, className }) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      id={id}
      type={type}
    >
      {innerText}
    </StyledButton>
  );
};

export default Button;