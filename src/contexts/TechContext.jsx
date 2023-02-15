import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./userContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { user, setUser, loading, setLoading } = useContext(UserContext);

  const [modalOpened, setModalOpened] = useState(false);
  const [addingTech, setAddingTech] = useState(false);
  const [editingTech, setEditingTech] = useState(false);
  const [selectValue, setSelectValue] = useState(null);

  function openAddModal() {
    setModalOpened(true);
    setAddingTech(true);
  }

  function openEditModal() {
    setModalOpened(true);
    setEditingTech(true);
  }

  function closeModal() {
    setModalOpened(false);
    setEditingTech(false);
    setAddingTech(false);
  }

  const addTechFunction = async (data) => {
    const authToken = window.localStorage.getItem("authToken");
    setLoading(true);
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      console.log(response);
      closeAddTechModal();
      toast.success("Tecnologia adicionada com sucesso");
      setUser({ ...user, tech: response.data });
      console.log(user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (
        error.response.data.message ===
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Essa tecnoloia já esta cadastrada");
      }
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        addTechFunction,
        setSelectValue,
        selectValue,
        openAddModal,
        openEditModal,
        closeModal,
        modalOpened,
        setModalOpened,
        addingTech,
        editingTech,
        loading,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export { TechProvider };
// export default TechProvider;
