import React, { createContext } from 'react';

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
    
  const [addTechModalOpened, setAddTechModalOpened] = React.useState(false);

  function openAddTechModal() {
    setAddTechModalOpened(true);
  }

  function closeAddTechModal() {
    setAddTechModalOpened(false);
  }


    return (
        <TechContext.Provider value={{addTechModalOpened, setAddTechModalOpened, openAddTechModal, closeAddTechModal }}>
            {children}
        </TechContext.Provider>
    );
}

export default TechProvider;