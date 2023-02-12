import React from "react";
import { StyledButton } from "./style";

const Button = ( { onClick, id, innerText, className } ) => {
    return (
        <StyledButton className={className} onClick={onClick} id={id}>{innerText}</StyledButton>
    )
}

export default Button;