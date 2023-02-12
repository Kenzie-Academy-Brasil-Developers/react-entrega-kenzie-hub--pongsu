import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import DashBoardPage from "../pages/DashBoardPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  const [user, setUser] = useState([])

  return (
    <Routes>        
      <Route path="/dashboard" element={ <DashBoardPage setUser={setUser} user={user} /> } />
      <Route path="*" element={ <DashBoardPage setUser={setUser} user={user} /> } />
      <Route path="login" element={ <LoginPage setUser={setUser} /> } />
      <Route path="register" element={ <RegisterPage /> } />
    </Routes>
  );
};

export default AppRoutes;