import styled from "styled-components";

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 20px 7vw;
        max-width: 1020px;
    }

    header{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 15px;
        padding: 20px 7vw;
        max-width: 1020px;
    }

    h2{
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        letter-spacing: 0.2px;
    }

    h4{
        font-weight: 400;
        font-size: 13px;
        line-height: 22px;
        color: var(--grey1);
    }
    
    .provisorySection{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 15px;
        padding: 20px 7vw;
        max-width: 1020px;
    }

    h3{
        font-size: 18px;
        font-weight: 400; 
    }    

    @media (min-width: 700px) {
        header{
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
        }
    }

    @media (min-width: 1600px) {
        .provisorySection, nav, header{
            max-width: 1300px;
        }
    }
`;