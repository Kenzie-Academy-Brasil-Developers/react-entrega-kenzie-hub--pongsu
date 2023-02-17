import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0px 0px;
  width: 100%;

  .selectLabel{
    justify-self: flex-start;
    color: var(--grey0);
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px; 
    margin-top: 9px;
    letter-spacing: 0.2px;
    margin-bottom: 10px;
  }

  select{      
    margin: 13px 0 23px;
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

  select:focus{
    border: 1.2182px solid var(--grey0);
  }

  button{
    margin-top: 13px;
  }
`;
