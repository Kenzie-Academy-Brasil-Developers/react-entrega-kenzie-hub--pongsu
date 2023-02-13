import styled from "styled-components";

export const StyledInputDiv = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 13px;
    align-items: flex-start;
    padding: 0px 0px;
    width: 100%;


    label{
      justify-self: flex-start;
      color: var(--grey0);
      font-weight: 400;
      font-size: 12.182px;
      line-height: 0px; 
      margin-top: 9px;
      letter-spacing: 0.2px;
      margin-bottom: 10px;
    }

    input{      
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px 16.2426px;
      gap: 10.15px;
      height: 48px;
      background: var(--grey2);
      border: 1.2182px solid var(--grey2);
      border-radius: 4px;
      color: var(--grey0);
      width: 100%;
    }

    input:focus{
      border: 1.2182px solid var(--grey0);

      ::placeholder {
        color: var(--grey0);
        filter: brightness(0.8);
        opacity: 1;
      }

      :-ms-input-placeholder {
        color: var(--grey0);
        filter: brightness(0.8);
      }

      ::-ms-input-placeholder {
        color: var(--grey0);
        filter: brightness(0.8);
      }
    }

    p{
      padding-left: 7px;
      display: flex;
      margin-top: -7px;
      margin-bottom: 15px;
      align-self: flex-start;
      width: 100%;
      font-size: 11px;
      color: var(--warning);
    }    
`