import React from "react";
import { UserProvider } from "./userContext";
import { TechProvider } from "./TechContext";

const Providers = ({ children }) => {
  
  return (
    <UserProvider>
      <TechProvider>
        {children}
      </TechProvider>
    </UserProvider>
  );
};

export default Providers;
