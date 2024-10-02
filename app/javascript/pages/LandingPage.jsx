import React from "react";
import Topbar from "../components/Topbar";
import MainAbout from "../components/MainAbout";

const LandingPage = () => {
  return (
    <>
      <div id="gradient-background" className="flex-center">
        <img src="/images/26.svg" style={{ transform: "rotateY(180deg)" }} />
        <p
          style={{
            marginTop: "0.5rem",
            marginLeft: "0.8rem",
            marginRight: "0.8rem",
            fontSize: "1rem",
          }}
        >
          Save up to $500 per year on millions of book titles!
        </p>
        <img src="/images/26.svg" />
      </div>
      <Topbar />
      <MainAbout />
    </>
  );
};

export default LandingPage;
