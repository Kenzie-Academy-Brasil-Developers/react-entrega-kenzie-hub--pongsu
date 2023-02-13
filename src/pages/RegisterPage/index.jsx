import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import Button from "../../components/Button";
import { api } from "../../services/api";
import { Page } from "./style";
import RegisterForm from "../../components/RegisterForm";
import Logo from "../../components/Logo";

const RegisterPage = () => {
  const navigate = useNavigate();

  const onSubmitFunction = async (data) => {
    try {
      await api.post("/users", data);
      toast.success("Cadastro efetuado! Faça o Login");
      navigate("/login");
    } catch (error) {
      error.response.data.message == "Email already exists"?
        toast.error("Este email já esta cadastrado"):
        toast.error("Algo deu errado, se o problema persistir entre em contato com o responsável pela página");
    }
  };

  const onClickFunction = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <Page>
        <header>    
          <Logo/>      
          <Button className="headerBttn" onClick={onClickFunction} innerText="Voltar" />
        </header>
        <main className="formSection">
          <h2>Crie sua conta</h2>
          <h5>Rápido e grátis, vamos nessa</h5>
          <RegisterForm className="registerForm" onSubmit={onSubmitFunction} />
        </main>
      </Page>
    </div>
  );
};

export default RegisterPage;