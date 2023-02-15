import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";

import { Page } from "./style";
import Button from "../../components/Button";
import SectionSpacer from "../../components/SectionSpacer";
import { api } from "../../services/api";
import Logo from "../../components/Logo";
import { UserContext } from "../../contexts/userContext";
import TechSection from "../../components/TechsSection";

const DashBoardPage = ({  }) => {
  const { setUser, userName, userModule } = useContext(UserContext)

  const navigate = useNavigate();

  const logout = () => {
    window.localStorage.clear();
    setUser([]);
    toast.success("Sessão encerrada. Aguardamos seu retorno!");
    navigate("/login");
  };

  return (
    <Page>
      <nav>
        <Logo/>
        <Button className="darkBttn" onClick={logout} innerText="Sair" />
      </nav>
      <SectionSpacer />
      <header className="userInfo">
        <h2>Olá, {userName}</h2>
        <h4>{userModule}</h4>
      </header>
      <SectionSpacer />
      <TechSection/>
    </Page>
  );
};

export default DashBoardPage;
