import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import Modal from "react-modal";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";

import { TechContext } from "../../contexts/TechContext";
import { modalStyle, selectStyle, StyledTechCreateModal } from "./style";
import Button from "../Button";
import TechCreateForm from "../TechCreateForm";

const options = [
  { value: "Iniciante", label: "Iniciante" },
  { value: "Intermediário", label: "Intermediário" },
  { value: "Avançado", label: "Avançado" },
];

const TechCreateModal = () => {
  const { addTechModalOpened, openAddTechModal, closeAddTechModal } =
    useContext(TechContext);

  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
  });
  
  const methods = useForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectValue, setSelectValue] = useState("Iniciante");
  
  const addTechFunction = (data) => {
    const envData = {...data, status: selectValue}
    console.log(envData);
    
  };

  const handleChange = (selectedOption, actionMeta) => {
    console.log("handleChange", selectedOption, actionMeta);
    setSelectValue(selectedOption.value)
    console.log(selectValue);
  };

  return (
    <StyledTechCreateModal>
      <button onClick={openAddTechModal}>open teste</button>
      <Modal
        id="addTechModal"
        isOpen={addTechModalOpened}
        onRequestClose={closeAddTechModal}
        style={modalStyle}
      >
        {/* <TechCreateForm/> */}
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
            placeholder="Iniciante"
            defaultValue="Iniciante"
            onChange={handleChange}
            options={options}
          /> 
          
          {/* <input value={value} className="selectAux" {...register("status")} /> */}
          <p>{errors.status?.message}</p>
          <Button className="primaryBttn" innerText="Cadastrar Tecnologia" />
        </form>
      </Modal>
    </StyledTechCreateModal>
  );
};

export default TechCreateModal;
