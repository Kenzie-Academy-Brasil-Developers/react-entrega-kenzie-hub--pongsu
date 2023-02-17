import { useContext } from "react";

import { Page } from "./style";
import Button from "../../components/Button";
import SectionSpacer from "../../components/SectionSpacer";
import Logo from "../../components/Logo";
import TechSection from "../../components/TechsSection";
import { UserContext } from "../../contexts/UserContext";
import { TechProvider } from "../../contexts/TechContext";

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
      <TechProvider>
        <TechSection />
      </TechProvider>
    </Page>
  );
};

export default DashBoardPage;
