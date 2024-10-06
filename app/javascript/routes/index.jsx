import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useHref,
} from "react-router-dom";
// import { ToastContainer } from "react-toastify";
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
          <Route path="/books/:isbn" element={<></>} />
        </Routes>
        {/*
        <ToastContainer
          limit={1}
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          pauseOnFocusLoss={false}
          closeOnClick
          rtl={false}
          draggable
        />
        */}
      </NextUIProvider>
    </Router>
  );
}
