import styled from "styled-components";

export const StyledTechsModal = styled.span`
    
`;

export const modalStyle = {
    overlay: {
        backgroundColor: "var(--greyTransparent)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        position: "relative",
        top: "0px",
        left: "0px",
        right: "0px",
        bottom: "0px",
        backgroundColor: "var(--grey3)",
        borderColor: 'none',
        border: "none",
        width: "369px",
        maxWidth: "90%",
        height: "357px",
        padding: "0",
        borderRadius: "3.2px",
    },
    control: {
        borderColor: 'none',
    },
}

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
    menu: {
        backgroundColor: 'var(--grey2)',
        border: 'var(--grey0) 0.5px solid',
    },
    control: (baseStyles, state) => ({
        ...baseStyles,
        height: '48px',
        backgroundColor: 'var(--grey2)',
        border: 'var(--grey0) 1.5px solid',
        outline: 'var(--grey0) 1.5px solid',
        borderColor: 'none',
        border: state.isSelected ? 'none' : 'none',
        outline: state.isFocused ? 'none' : 'none',
    }),
    menuList: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: state.isFocused ? 'var(--grey1)' : 'var(--grey3)',
    }),
}