import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { Page } from "./style";
import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";

const LoginPage = ({ }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Page>
        <header> 
          <Logo/>         
        </header>
        <main className="formSection">
          <h2>Login</h2>
          <LoginForm/>
          <h5>Ainda não possui uma conta?</h5>
          <Button
            className="greyBttn"
            innerText="Cadastre-se"
            onClick={() => {navigate("/register")}}
          />
        </main>
      </Page>
    </div>
  );
};

export default LoginPage;
