import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

export const App = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </NextUIProvider>
  );
};

export default App;
