import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

import Button from "../Button";
import { StyledTechEditForm, selectStyle } from "./style";
import { TechContext } from "../../contexts/TechContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const options = [
  { value: "Iniciante", label: "Iniciante" },
  { value: "Intermediário", label: "Intermediário" },
  { value: "Avançado", label: "Avançado" },
];

const TechEditForm = () => {
  const { addTechFunction, loading, closeModal } = useContext(TechContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório")
  });  

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });
  

  const handleChange = (selectedOption) => {
    setValue('status', selectedOption.value)
    clearErrors('status')
  };

  return (
    <StyledTechEditForm>
      <div>
        <h3>EDITAR Tecnologia</h3>
        <button onClick={closeModal}>X</button>
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
        ? ( <Button className="primaryBttn" innerText="Cadastrar Tecnologia" /> ) 
        : ( <Button className="primaryBttn loading" innerText={ <AiOutlineLoading3Quarters className="loading" /> } /> )
        }
        
      </form>
    </StyledTechEditForm>
  );
};

export default TechEditForm;
