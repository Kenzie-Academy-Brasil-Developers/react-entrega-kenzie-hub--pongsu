import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { api } from "../services/api";
import { UserContext } from "./userContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { user, setUser, setLoading, setLoadingDel } = useContext(UserContext);

  const [modalOpened, setModalOpened] = useState(false);
  const [addingTech, setAddingTech] = useState(false);
  const [editingTech, setEditingTech] = useState(false);
  const [selectValue, setSelectValue] = useState(null);
  const [techList, setTechList] = useState([]);
  const [selectedTech, setSelectedTech] = useState(null);

  useEffect(() => (user ? setTechList(user.techs) : undefined), [user]);

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
    setSelectedTech(null);
  }

  const techDeleteFunction = async () => {
    const authToken = window.localStorage.getItem("authToken");
    setLoadingDel(true);
    try {
      const response = await api.delete(`/users/techs/${selectedTech.id}`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      toast("Tecnologia excluida com sucesso");
      const removeOldToUpdateUser = user.techs.filter(
        (tech) => tech.id != selectedTech.id
      );
      setUser({ ...user, techs: [...removeOldToUpdateUser] });
      setLoadingDel(false);
      closeModal();
    } catch (error) {
      console.log(error);
      setLoadingDel(false);
    }
  };

  const editTechFunction = async (data) => {
    if (data.status === selectedTech.status) {
      closeModal();
      toast(`Nenhuma alteração foi feita em ${selectedTech.title}`);
    } else {
      const authToken = window.localStorage.getItem("authToken");
      setLoading(true);
      try {
        const response = await api.put(
          `/users/techs/${selectedTech.id}`,
          data,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        toast.success("Tecnologia atualizada com sucesso");
        console.log(response);
        const removeOldToUpdateUser = user.techs.filter(
          (tech) => tech.id != selectedTech.id
        );
        removeOldToUpdateUser.length > 0
          ? setUser({
              ...user,
              techs: [...removeOldToUpdateUser, response.data],
            })
          : setUser({ ...user, techs: [response.data] });
        closeModal();
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const addTechFunction = async (data) => {
    const authToken = window.localStorage.getItem("authToken");
    setLoading(true);
    try {
      const response = await api.post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      closeModal();
      toast.success("Tecnologia adicionada com sucesso");
      setUser({ ...user, techs: [response.data, ...user.techs] });
      setLoading(false);
    } catch (error) {
      console.log(error);
      if (
        error.response.data.message ===
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Essa tecnologia já esta cadastrada, selecione na lista para editar ou excluir");
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
        techList,
        setTechList,
        selectedTech,
        setSelectedTech,
        editTechFunction,
        techDeleteFunction,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export { TechProvider };
