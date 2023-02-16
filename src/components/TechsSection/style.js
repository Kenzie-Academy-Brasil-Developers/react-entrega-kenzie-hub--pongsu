import styled from "styled-components";

export const StyledTechSection = styled.main`   
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    padding: 20px 7vw;
    max-width: 1020px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    #addTechBttn{
        height: 30px;
        width: 30px;
        border-radius: 4px;
    }

    ul{
        background: var(--grey3);
        border-radius: 4px;
        width: 100%;
        padding: 22px 3vw;
        display: flex;
        flex-direction: column;
        gap: 16px;
        border-radius: 4px;
        margin-top: 13px;
    }

    li{
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 3vw;
        width: 100%;
        background: var(--grey4);
        border-radius: 4px;
        cursor: pointer;
    }

    li:hover{
        background: var(--grey2);
    }

    h2{
        font-weight: 600;
        font-size: 18px;
        line-height: 28px;
    }

    .empytTechList{
        cursor: pointer;
        flex-direction: column;
        height: 75px;
        padding: 10px 15px;
    }
    
    .empytTechList h2{
        font-size: 15px;
    }

    @media (min-width: 1600px) {
        max-width: 1300px;
    }
    
    `;
