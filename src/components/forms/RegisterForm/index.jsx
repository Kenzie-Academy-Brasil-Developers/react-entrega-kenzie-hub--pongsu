import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import Select from "react-select";

import { StyledForm, selectStyle } from "./style";
import InputDiv from "../InputDiv";
import Button from "../../Button";
import { UserContext } from "../../../contexts/UserContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const options = [
  { value: "Primeiro módulo (Introdução ao Frontend)", label: "Primeiro módulo",},
  { value: "Segundo módulo (Frontend intermédiario)", label: "Segundo módulo" },
  { value: "Terceiro módulo (Frontend junior)", label: "Terceiro módulo" },
  { value: "Quarto módulo (Introdução ao Backend)", label: "Quarto módulo" },
];

const RegisterForm = ({ className }) => {
  const { userRegister, loading } = useContext(UserContext);

  const schema = yup.object({
    name: yup.string().required("É preciso informar seu nome"),
    email: yup
      .string()
      .required("É preciso informar seu email")
      .email("E-mail inválido"),
    password: yup
      .string()
      .required("É preciso cadastrar uma senha")
      .matches(/[a-z]|[A-Z]/, "Deve conter ao menos 1 letra")
      .matches(/(\d)/, "Deve conter ao menos 1 número")
      .matches(/(\W|_)/, "Deve conter no mínimo 1 caracter especial")
      .matches(/.{8,}/, "Deve conter no mínimo 8 caracteres"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "As senhas devem coincidir")
      .required("A confirmação da senha é obrigatória"),
    bio: yup.string().required("A descrição é obrigatória"),
    contact: yup.string().required("É preciso informar seu contato"),
    course_module: yup.string().required("Modulo atual obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleChange = (selectedOption) => {
    setValue("course_module", selectedOption.value);
    clearErrors("course_module");
  };

  return (
    <StyledForm className={className} onSubmit={handleSubmit(userRegister)}>
      <InputDiv
        labelText="Nome"
        name="name"
        placeHolder="Digite seu nome..."
        errorMsg={errors.name?.message}
        register={register}
      />
      <InputDiv
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
      <InputDiv
        type="password"
        labelText="Confirmar senha"
        name="passwordConfirm"
        placeHolder="Digite a senha novamente..."
        errorMsg={errors.passwordConfirm?.message}
        register={register}
      />
      <InputDiv
        labelText="Bio"
        name="bio"
        placeHolder="Conte sobre você..."
        errorMsg={errors.bio?.message}
        register={register}
      />
      <InputDiv
        labelText="Contato"
        name="contact"
        placeHolder="Informe seu contato..."
        errorMsg={errors.contact?.message}
        register={register}
      />
      <div>
        <label className="selectLabel">Selecionar módulo</label>
        <Select
          styles={selectStyle}
          placeholder="Selecione..."
          defaultValue="null"
          onChange={handleChange}
          options={options}
          isSearchable={false}
        />
        <p>{errors.course_module?.message}</p> 
      </div>
      {!loading ? (
        <Button type="submit" innerText="Cadastrar" className="primaryBttn registerBttn" />
      ) : (
        <Button className="primaryBttn loading" innerText={<AiOutlineLoading3Quarters className="loading" />} />
      )}
    </StyledForm>
  );
};

export default RegisterForm;
