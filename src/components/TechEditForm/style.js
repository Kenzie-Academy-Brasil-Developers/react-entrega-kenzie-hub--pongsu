import styled from "styled-components";

export const StyledTechEditForm = styled.span`
  width: 100%;
  height: 100%;

  .selectAux{
    display: flex;
  }
`;

export const selectStyle = {
  placeholder: (baseStyles, state) => ({
      ...baseStyles,
      color: 'var(--grey1)',
  }),
  singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: 'var(--grey0)',
  }),
  indicatorSeparator: (baseStyles, state) => ({
      ...baseStyles,
      display: 'none',
  }),
  option: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isSelected ? 'var(--grey3)' : 'var(--grey0)',
      backgroundColor: state.isSelected ? 'var(--grey1)' : 'var(--grey2)',
  }),
  menu: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: 'var(--grey2)',
  }),
  control: (baseStyles, state) => ({
      ...baseStyles,
      height: '48px',
      backgroundColor: 'var(--grey2)',
      border: 'var(--grey0) 1.5px solid',
      outline: 'var(--grey0) 1.5px solid',
  }),
}