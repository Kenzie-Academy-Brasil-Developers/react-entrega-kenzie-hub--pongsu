import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import * as yup from "yup";

import { StyledForm } from "./style";
import InputDiv from "../InputDiv";
import Button from "../../Button";
import { UserContext } from "../../../contexts/UserContext";

const LoginForm = ({ className }) => {
  const { userLogin, loading } = useContext(UserContext);

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <StyledForm className={className} onSubmit={handleSubmit(userLogin)}>
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
      {!loading 
        ? ( <Button type="submit" className="primaryBttn loginBttn" innerText="Entrar" /> ) 
        : ( <Button className="primaryBttn loading" innerText={ <AiOutlineLoading3Quarters className="loading" />} /> )
      }
    </StyledForm>
  );
};

export default LoginForm;
