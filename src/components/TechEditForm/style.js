import styled from "styled-components";

export const StyledTechEditForm = styled.span`
  width: 100%;
  height: 100%;

  .modalHeader{
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: var(--grey2);
  }

  h3{
    font-size: 16px;
    font-weight: 600;
  }

  .closeModalBttn{
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
    color: var(--grey0);
    font-size: 18px;
    border: none;
    margin: 0;
    margin-top: -4px;
    width: auto;
    overflow: visible;
    background: transparent;
  }

  form{
    height: 302px;
    background-color: var(--grey3);
    display: flex;
    flex-direction: column;
    padding: 18px;
    justify-content: space-around;
  }

  input{
      height: 48px;
      background-color: var(--grey2);
      border: var(--grey0) 1.5px solid;
      outline: var(--grey0) 1.5px solid;
      border-radius: 3.2px;
      color: var(--grey1);
      font-family: 'Inter',sans-serif;
      font-size: 16px;
      padding-left: 10px;
      cursor: not-allowed;      
  }
  
  input::placeholder{
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    color: var(--grey1);
  }

  label{
    font-size: 14px;
  }

  p{
    margin-top: -7px;
    height: 13px;
    font-size: 12px;
    color: var(--warning);
  }

  .editTechBttns{
    display: flex;
    justify-content: space-between;
    gap: 17px;
    max-width: 100%;
    overflow: hidden;
  }

  button{
    max-width: 190px;
    font-family: 'Inter',sans-serif;
    border-radius: 4px;    
  }
`;

export const selectStyle = {
  placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: 'var(--grey1)',
      marginTop: '-7px',
  }),
  dropdownIndicator: (baseStyles, state) => ({
      ...baseStyles,
      marginTop: '-7px',
  }),
  singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: 'var(--grey0)',
      marginTop: '-7px',
  }),
  indicatorSeparator: (baseStyles, state) => ({
      ...baseStyles,
      display: 'none',
  }),
  option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isSelected ? 'var(--grey0)' : 'var(--grey3)',
      backgroundColor: state.isSelected ? 'var(--grey2)' : 'var(--grey1)',
      cursor: 'pointer',
      borderTop: '0.5px solid var(--grey2)'
  }),
  menu: (baseStyles, state) => ({
      ...baseStyles,
      padding: 0,
      backgroundColor: 'var(--grey0)',
      marginTop: '-5px', 
  }),
  control: (baseStyles, state) => ({
      ...baseStyles,
      height: '48px',
      backgroundColor: 'var(--grey2)',
      border: 'var(--grey0) 1.5px solid',
      outline: 'var(--grey0) 1.5px solid',
      cursor: 'pointer',
  }),
  menuList: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: 'var(--grey2)',
      margin: '0',
  }),
}