import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";


import Button from "../../components/Button";
import InputDiv from "../../components/InputDiv";
import {api} from "../../services/api"
import { Page } from "./style";

const LoginPage = ( {setUser} ) => {
  const navigate = useNavigate();
  const [loginLoading, setloginLoading] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatória"),        
  });

  const {  register,  handleSubmit,  formState: { errors }, 
    } = useForm({ resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    setloginLoading(true)
    try {
      const response = await api.post("/sessions", data)
      window.localStorage.clear()
      window.localStorage.setItem('authToken', response.data.token)
      window.localStorage.setItem('userId', response.data.user.id)
      setUser(response.data.user)
      toast.success('Login bem sucedido!')
      navigate('/dashboard')
      setloginLoading(false)

    } catch (error) {
      console.error(error)
      toast.error("Email e/ou senha incorreto(s)")
      setloginLoading(false)
    }

  }

  const onClickFunction = () => {
    navigate("/register");
  };

  return (
    <div className="container">
      <Page>
        <header>
          <img className="logo" src="../../../src/assets/logo.svg" alt="Kenzie Hub Logo" />
        </header>
        <main className="formSection">
          <h2>Login</h2>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <InputDiv
              type="email"
              labelText="Email"
              name="email"
              placeHolder="Digite seu email..."
              errorMsg={errors.email?.message}
              register={register}
              />
            <InputDiv
              type="password"
              labelText="Senha"
              name="password"
              placeHolder="Digite sua senha..."
              errorMsg={errors.password?.message}
              register={register}
              />
            {!loginLoading?
              <Button className="primaryBttn loginBttn" innerText="Entrar"/>:
              <Button className="primaryBttn loading" innerText={<AiOutlineLoading3Quarters className="loading"/>}/>
            }
          </form>
          <h5>Ainda não possui uma conta?</h5>
          <Button className="greyBttn" innerText="Cadastre-se" onClick={onClickFunction} />
        </main>
      </Page>
    </div>
  );
};

export default LoginPage;
