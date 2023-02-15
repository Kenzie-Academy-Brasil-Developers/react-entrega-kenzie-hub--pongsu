import React, { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

import Button from "../Button";
import { StyledTechCreateForm, selectStyle } from "./style";


const options = [
  { value: "Iniciante", label: "Iniciante" },
  { value: "Intermediário", label: "Intermediário" },
  { value: "Avançado", label: "Avançado" },
];

const TechCreateForm = () => {

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });  

  const { register, handleSubmit,  formState: { errors } } = useForm({resolver: yupResolver(schema), mode: 'onChange'});

  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState('');

  const addTechFunction = (data) => {
    console.log(data);
  }

 

    const setValuer =  (e) => {
      setValue({
        ...value,
        name: e.target.value
      });
      console.log(test);
      console.log(value);
    };

  return (
    <StyledTechCreateForm>
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <button>X</button>
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
          defaultValue={value}
          onChange={setValuer}
          options={options}
          {...register("status")}
        />
        <input value={value} onChange={setValuer(value)} className="selectAux"  />
        <p>{errors.status?.message}</p>
        <Button className="primaryBttn" innerText="Cadastrar Tecnologia" />
      </form>
    </StyledTechCreateForm>
  );
};

export default TechCreateForm;
