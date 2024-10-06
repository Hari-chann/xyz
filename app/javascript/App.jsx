import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Routes, Route, useNavigate, useHref } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export const App = () => {
  const navigate = useNavigate();

  return (
    <NextUIProvider navigate={navigate} useHref={useHref}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/books/:isbn" element={<></>} />
      </Routes>
    </NextUIProvider>
  );
};

export default App;
