import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Repositories from "./pages/Repositories";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/repositories" element={<Repositories />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
