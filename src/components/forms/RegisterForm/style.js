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
    border: 1.5182px solid var(--grey0);
  }

  p{
    padding-left: 7px;
    display: flex;
    margin-top: -7px;
    height: 15px;
    margin-bottom: 5px;
    align-self: flex-start;
    width: 100%;
    font-size: 11px;
    color: var(--warning);      
  }
  
  button{
    margin-top: 13px;
  }

`;


export const selectStyle = {
  placeholder: (baseStyles, state) => ({
    ...baseStyles,
    color: 'var(--grey1)',
    fontSize: '13px',
    paddingLeft : '7px',
  }),
  singleValue: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '13px',
    color: 'var(--grey0)',
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
    margin: '13px 0',
    height: '48px',
    backgroundColor: 'var(--grey2)',
    outline: state.isFocused ? 'var(--grey0) 1.5px solid' : 'none',
    border: 'none',
    cursor: 'pointer',
  }),
  menuList: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: 'var(--grey2)',
    margin: '0',
  }),
}