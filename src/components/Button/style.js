import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  line-height: 17px;

  &.headerBttn {
  color: var(--grey0);
  border: none;
  height: 40px; 
  padding: 0px 13.25px;
  background: var(--grey3);
  width: 80px;
  font-weight: 600;
  letter-spacing: 0.2px;
  }

  &.headerBttn:hover {
    background: var(--grey1);
  }

  &.greyBttn {
    padding: 0px 22.3px;
    gap: 10.15px;
    height: 48px; 
    width: 100%;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.35px;
    background: var(--grey);
    border: 1.2182px solid var(--grey1);
    color: var(--grey0);
  }

  &.greyBttn:hover {
    background: var(--grey2);
  }

  &.primaryBttn {
    padding: 0px 22.3px;
    gap: 10.15px;
    height: 48px; 
    color: var(--grey0);
    width: 100%;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.35px;
  }

  &.primaryBttn:hover {
    background-color: var(--primaryFocus);
  }

  &.loginBttn{
    background: var(--primary);
    border: 1.2px solid var(--primary);

  }
  &.registerBttn{
    background: var(--primaryNegative);
    border: 1.2px solid var(--primaryNegative);

  }

  &.loading{
    background-color: var(--primaryNegative);
  }

  .loading {
    animation: rotate 1.5s infinite;
  }

  @keyframes rotate {
    50% {
      transform: rotate(360deg);
    }
  }
`;