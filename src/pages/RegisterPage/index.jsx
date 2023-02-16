import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { Page } from "./style";
import RegisterForm from "../../components/RegisterForm";
import Logo from "../../components/Logo";

const RegisterPage = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      <Page>
        <header>    
          <Logo/>      
          <Button className="darkBttn" onClick={() => {navigate("/login")}} innerText="Voltar" />
        </header>
        <main className="formSection">
          <h2>Crie sua conta</h2>
          <h5>Rápido e grátis, vamos nessa</h5>
          <RegisterForm className="registerForm" />
        </main>
      </Page>
    </div>
  );
};

export default RegisterPage;