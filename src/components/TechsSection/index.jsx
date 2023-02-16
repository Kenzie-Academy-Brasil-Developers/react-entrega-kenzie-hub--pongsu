import React, { useContext } from 'react'
import { MdAdd } from "react-icons/md";

import { StyledTechSection } from './style'
import Button from "../Button";
import { TechContext } from '../../contexts/TechContext';
import TechsModal from '../TechsModal';

const TechSection = () => {
  const { openAddModal, openEditModal, techList, setSelectedTech } = useContext(TechContext);
  
  const handleClick = ([id, title, status]) => {
    return ()=>{
      openEditModal()
      setSelectedTech({id: id, title: title, status: status})
    }
  }

  return (
    <StyledTechSection>
      <div>
        <h2>Tecnologias</h2>
        <Button id="addTechBttn" onClick={openAddModal} className="darkBttn addBttn" innerText={ <MdAdd /> }/>
      </div>
      <ul >
        {techList && techList.map((tech) => 
          <li key={tech.id} onClick={handleClick([tech.id, tech.title, tech.status])}>
            <h2>{tech.title}</h2>
            <h4>{tech.status}</h4>
          </li>
        )}
        {techList && techList.length == 0  && 
        <li className='empytTechList' onClick={openAddModal}>
          <h2>Sua lista está vazia :(</h2>
          <h4>Clique aqui para adicionar</h4>
        </li>
        }
      </ul>
      <TechsModal/>
    </StyledTechSection>
  )
}

export default TechSection