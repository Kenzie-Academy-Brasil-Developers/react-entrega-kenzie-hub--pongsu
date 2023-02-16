import React, { useContext } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "react-select";
import { ConfirmToast } from "react-confirm-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import Button from "../Button";
import { StyledTechEditForm, selectStyle } from "./style";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";

const options = [
  { value: "Iniciante", label: "Iniciante" },
  { value: "Intermediário", label: "Intermediário" },
  { value: "Avançado", label: "Avançado" },
];

const TechEditForm = () => {
  const {
    editTechFunction,
    closeModal,
    selectedTech,
    setSelectedTech,
    techDeleteFunction,
  } = useContext(TechContext);
  const { loading, loadingDel } = useContext(UserContext);

  const schema = yup.object().shape({
    status: yup.string().required("Campo obrigatório"),
  });

  const {
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
    <StyledTechEditForm>
      <div className="modalHeader">
        <h3>Editar Tecnologia</h3>
        <button className="closeModalBttn" onClick={closeModal}>x</button>
      </div>
      <form>
        <label>Nome</label>
        <input disabled value={selectedTech.title} />
        <p>{errors.title?.message}</p>
        <label htmlFor="">Selecionar status</label>
        <Select
          styles={selectStyle}
          placeholder={selectedTech.status}
          defaultValue={selectedTech.status}
          onChange={handleChange}
          options={options}
          isSearchable={false}
        />
        <p>{errors.status?.message}</p>
        <div className="editTechBttns">
        {!loading 
          ? ( <Button onClick={handleSubmit(editTechFunction)} className="primaryBttn" innerText="Salvar alteração" /> ) 
          : ( <Button className="primaryBttn loading" innerText={ <AiOutlineLoading3Quarters className="loading" /> } /> )
        }
          <ConfirmToast 
            customFunction={techDeleteFunction}
            asModal={true}
            customCancel={'Cancelar'}
            customConfirm={'Confirmar'}
            message={'Tem certeza que quer excluir a tecnologia?'}
            position={'top-left'}
            showCloseIcon={false}
            margin={'15px'}
            theme={'dark'}
          >
            {!loadingDel 
              ? ( <Button onClick={(e) => e.preventDefault()} type="button" className="greyBttn" innerText="Excluir" /> ) 
              : ( <Button className="primaryBttn loading" innerText={ <AiOutlineLoading3Quarters className="loading" /> } /> )
            }            
          </ConfirmToast>
        </div>
      </form>
    </StyledTechEditForm>
  );
};

export default TechEditForm;
