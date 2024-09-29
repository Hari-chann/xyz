import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useHref } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Topbar from "../components/Topbar";
import Home from "../components/Home";

export default function App() {
  const navigate = useNavigate();

  return (
    <Router>
      <NextUIProvider navigate={navigate} useHref={useHref}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </NextUIProvider>
    </Router>
  );
}
