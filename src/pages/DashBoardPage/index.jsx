import { useContext } from "react";

import { Page } from "./style";
import Button from "../../components/Button";
import SectionSpacer from "../../components/SectionSpacer";
import Logo from "../../components/Logo";
import { UserContext } from "../../contexts/userContext";
import TechSection from "../../components/TechsSection";

const DashBoardPage = ({}) => {
  const { logout, userName, userModule } = useContext(UserContext);

  return (
    <Page>
      <nav>
        <Logo />
        <Button className="darkBttn" onClick={logout} innerText="Sair" />
      </nav>
      <SectionSpacer />
      <header className="userInfo">
        <h2>Olá, {userName}</h2>
        <h4>{userModule}</h4>
      </header>
      <SectionSpacer />
      <TechSection />
    </Page>
  );
};

export default DashBoardPage;
