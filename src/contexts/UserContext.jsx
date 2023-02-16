import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { api } from "../services/api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingDel, setLoadingDel] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userModule, setUserModule] = useState(null);

  const userId = window.localStorage.getItem("userId");

  const navigate = useNavigate();

  const userLogin = async (data) => {
    setLoading(true);
    setUser(null);
    try {
      const response = await api.post("/sessions", data);
      window.localStorage.clear();
      window.localStorage.setItem("authToken", response.data.token);
      window.localStorage.setItem("userId", response.data.user.id);
      setUser(response.data.user);
      toast.success("Login bem sucedido!");
      navigate("/dashboard");
      setLoading(false);

    } catch (error) {
      (error.response.data.message == "Incorrect email / password combination")
        ? toast.error("Email e/ou senha incorreto(s)")
        : toast.error("Algo deu errado, se o problema persistir entre em contato com o responsável pela página")
      setLoading(false);
    }
  };

  const userRegister = async (data) => {
    setLoading(true);
    try {
      const response = await api.post("/users", data);
      toast.success("Cadastro efetuado! Faça o Login");
      navigate("/login");
      setLoading(false);
    } catch (error) {
      console.log(error);
      (error.response.data.message == "Email already exists")
        ? toast.error("Este email já esta cadastrado")
        : toast.error("Algo deu errado, se o problema persistir entre em contato com o responsável pela página");
      setLoading(false);
    }
  };

  useEffect(() => {
    const authToken = window.localStorage.getItem("authToken");
    if (authToken) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          window.localStorage.clear();
          setUser([]);
          toast.error("Não encontramos uma sessão ativa, por favor faça o login para acessar");
          if (window.location.pathname != "/register") {
            navigate("/login");
          }
        }
      };
      userAutoLogin();
    }
  }, []);

  const logout = () => {
    window.localStorage.clear();
    setUser([]);
    toast.success("Sessão encerrada.");
    navigate("/login");
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await api.get(`/users/${userId}`);
        setUser(response.data);
        setUserName(response.data.name);
        setUserModule(response.data.course_module);
      } catch (error) {
        window.localStorage.clear();
        setUser([]);
        if (window.location.pathname != "/register") {
          if (window.location.pathname != "/login") {
            toast.error("Não encontramos uma sessão ativa, por favor faça o login para acessar");
          }
          navigate("/login");
        }
      }
    };

    loadUser();
  }, [navigate, userId]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        userRegister,
        loading,
        setLoading,
        userName,
        userModule,
        loadingDel,
        setLoadingDel,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };