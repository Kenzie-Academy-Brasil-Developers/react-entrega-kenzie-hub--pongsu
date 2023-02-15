import React from "react";
import { Routes, Route } from 'react-router-dom';

import DashBoardPage from "../pages/DashBoardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {

  return (
    <Routes>        
      <Route path="/dashboard" element={ <DashBoardPage /> } />
      <Route path="*" element={ <DashBoardPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
    </Routes>
  );
};

export default AppRoutes;