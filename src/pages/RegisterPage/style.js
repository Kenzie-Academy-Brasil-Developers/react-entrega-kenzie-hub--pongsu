import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    max-width: 370px;
        
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 25px;
        padding-bottom: 20px;
    }

    h2{        
        font-weight: 700;
        font-size: 20px;        
    }

    h5{        
        font-weight: 600;
        font-size: 10.6px;
        line-height: 14px;
        letter-spacing: 0.1px;
        color: var(--grey1);
    }
`;