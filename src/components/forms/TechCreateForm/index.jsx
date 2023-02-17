import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Button from "../../Button";
import { StyledTechCreateForm, selectStyle } from "./style";
import { TechContext } from "../../../contexts/TechContext";
import { UserContext } from "../../../contexts/UserContext";

const options = [
  { value: "Iniciante", label: "Iniciante" },
  { value: "Intermediário", label: "Intermediário" },
  { value: "Avançado", label: "Avançado" },
];

const TechCreateForm = () => {
  const { addTechFunction, closeModal } = useContext(TechContext);
  const { loading } = useContext(UserContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const handleChange = (selectedOption) => {
    setValue("status", selectedOption.value);
    clearErrors("status");
  };

  return (
    <StyledTechCreateForm>
      <div className="modalHeader">
        <h3>Cadastrar Tecnologia</h3>
        <button className="closeModalBttn" onClick={closeModal}>x</button>
      </div>
      <form onSubmit={handleSubmit(addTechFunction)}>
        <label>Nome</label>
        <input
          placeholder="Digite o nome da tecnologia..."
          {...register("title")}
        />
        <p>{errors.title?.message}</p>
        <label htmlFor="">Selecionar status</label>
        <Select
          styles={selectStyle}
          placeholder="Selecione..."
          defaultValue="null"
          onChange={handleChange}
          options={options}
          isSearchable={false}
        />
        <p>{errors.status?.message}</p>
        {!loading 
        ? ( <Button type="submit" className="primaryBttn" innerText="Cadastrar Tecnologia" /> ) 
        : ( <Button className="primaryBttn loading" innerText={ <AiOutlineLoading3Quarters className="loading" /> } /> )
        }        
      </form>
    </StyledTechCreateForm>
  );
};

export default TechCreateForm;
