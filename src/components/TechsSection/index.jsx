import React, { useContext } from 'react'
import { MdAdd } from "react-icons/md";

import { UserContext } from '../../contexts/userContext'
import { StyledTechSection } from './style'
import Button from "../Button";
import TechCreateModal from '../TechCreateModal';

const TechSection = () => {
  const { user, loading } = useContext(UserContext)

  return (
    <StyledTechSection>
      <div>
        <h2>Tecnologias</h2>
        <Button className="darkBttn addBttn" innerText={ <MdAdd /> }/>
      </div>
      <TechCreateModal/>
    </StyledTechSection>
  )
}

export default TechSection