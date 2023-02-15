import React, { useContext } from 'react'
import { MdAdd } from "react-icons/md";

import { StyledTechSection } from './style'
import Button from "../Button";
import { TechContext } from '../../contexts/TechContext';
import { UserContext } from '../../contexts/userContext';
import TechsModal from '../TechsModal';

const TechSection = () => {
  const { openAddModal, openEditModal } = useContext(TechContext);
  const { user } = useContext(UserContext)

  return (
    <StyledTechSection>
      <div>
        <h2>Tecnologias</h2>
        <Button onClick={openAddModal} className="darkBttn addBttn" innerText={ <MdAdd /> }/>
      </div>
      <ul>
        {user && user.techs.map((tech) => 
          <li onClick={openEditModal} id={tech.id}>
            <h2>{tech.title}</h2>
            <h4>{tech.status}</h4>
          </li>
        )}
      </ul>
      <TechsModal/>
    </StyledTechSection>
  )
}

export default TechSection