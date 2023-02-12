import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    max-width: 370px;    

    header{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 25px;
        padding-bottom: 20px;
    }    

    h2{        
        font-weight: 700;
        font-size: 20px;        
    }

    form{
        width: 100%;
    }

    h5{
        font-weight: 600;
        font-size: 10.6px;
        line-height: 14px;
        color: var(--grey1);
        letter-spacing: 0.1px;
    }
`;