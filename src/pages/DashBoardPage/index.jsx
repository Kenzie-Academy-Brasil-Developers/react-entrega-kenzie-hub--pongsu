import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { toast } from "react-hot-toast";
import { Page } from "./style";
import SectionSpacer from "../../components/SectionSpacer";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

const DashBoardPage = ({ user, setUser }) => {
  const navigate = useNavigate();
  const userId = window.localStorage.getItem('userId')
  const [userName, setUserName] = useState(user.name)
  const [userModule, setUserModule] = useState(user.course_module)

  useEffect(()=> {
    const loadUser = async () =>{
      try {
        const response = await api.get(`/users/${userId}`)
        setUser(response.data)
        setUserName(response.data.name)
        setUserModule(response.data.course_module)
        console.log(response.data)
      } catch (error) {
        console.error(error)
        window.localStorage.clear()
        setUser([])
        navigate('/login')
        toast.error('Não encontramos uma sessão ativa, por favor faça o login para acessar')
      }
    }

    loadUser()
  }, [navigate, userId])

  const logout = () => {
    window.localStorage.clear();
    setUser([]);
    toast.success("Sessão encerrada. Aguardamos seu retorno!");
    navigate("/login");
  };

  return (
    <Page>
      <nav>
        <img
          className="logo"
          src="../../../src/assets/logo.svg"
          alt="Kenzie Hub Logo"
        />
        <Button className="headerBttn" onClick={logout} innerText="Sair" />
      </nav>
      <SectionSpacer />
      <header className="userInfo">
        <h2>Olá, {userName}</h2>
        <h4>{userModule}</h4>
      </header>
      <SectionSpacer />
      <main className="provisorySection">
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <h3>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </h3>
      </main>
    </Page>
  );
};

export default DashBoardPage;
