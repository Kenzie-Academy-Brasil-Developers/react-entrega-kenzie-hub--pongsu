import React from "react";
import { StyledInputDiv } from "./style";

const InputDiv = ( { type, placeHolder, register, name, labelText, errorMsg } ) => {
    return (
        <StyledInputDiv>
            <label>{labelText}</label>
            <input type={type} placeholder={placeHolder} {...register(name)} ></input>
            <p>{errorMsg}</p>
        </StyledInputDiv>
    )
}

export default InputDiv;