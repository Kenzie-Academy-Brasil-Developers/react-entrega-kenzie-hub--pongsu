import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React from "react";

import { StyledForm } from "./style";
import InputDiv from "../../components/InputDiv";
import { schema } from "./validation.js";
import Button from "../Button";

const RegisterForm = ( { className, onSubmit } ) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  return (
    <StyledForm className={className} onSubmit={handleSubmit(onSubmit)}>
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
        <div>
          <label className="selectLabel">Selecionar módulo</label>
        </div>
        <select className="select" {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo</option>
          <option value="Segundo módulo (Frontend intermédiario)">Segundo módulo</option>
          <option value="Terceiro módulo (Frontend junior)">Terceiro módulo</option>
          <option value="Quarto módulo (Introdução ao Backend)">Quarto módulo</option>
        </select>
      </div>
      <Button disabled={!isDirty || !isValid} innerText="Cadastrar" className="primaryBttn registerBttn" />
    </StyledForm>
  );
};

export default RegisterForm;
