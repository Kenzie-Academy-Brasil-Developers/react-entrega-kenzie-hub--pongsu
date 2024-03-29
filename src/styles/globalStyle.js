import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .ReactModal__Body--open,
  .ReactModal__Html--open {
    overflow: hidden;
  }
  
  :root {
  --primary: #FF577F;
  --primaryFocus: #FF427F;
  --primaryNegative: #59323F;
  --grey0: #F8F9FA;
  --grey1: #868E96;
  --grey2: #343B41;
  --grey3: #212529;
  --grey4: #121214;
  --greyTransparent: #333435ad;
  --warning: #E83F5B;
  --sucess: #3FE864;
  }

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    list-style: none;
  }

  body,html{
    background-color: var(--grey4);
    color: var(--grey0);
    font-family: 'Inter', sans-serif;
    font-style: normal;
  }

  button, a {
    cursor: pointer;
  }
  
  .container{
    width: 100vw;
    max-width: 100%;
    padding: 0 5vw;
    display: flex;
    justify-content: center;
  }
  
  .formSection{        
    background-color: var(--grey3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 35px 15px 20px 18px;
    margin-bottom: 40px;
  }  
`;

export default GlobalStyle;
