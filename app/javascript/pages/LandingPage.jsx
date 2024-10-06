import React, { useEffect, useState } from "react";
import axios from "axios";

// import {} from "../components/utilities";

import Topbar from "../components/Topbar";
import MainAbout from "../components/MainAbout";
import ExploreTopSection from "../components/ExploreTopSection";
import ExploreBottomSection from "../components/ExploreBottomSection";
import Profile from "../components/Profile";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const LandingPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isIsbnInvalid, setIsIsbnInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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
      <Topbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        isIsbnInvalid={isIsbnInvalid}
        errorMsg={errorMsg}
      />
      <MainAbout />
      <ExploreTopSection />
      <ExploreBottomSection />
      <Profile />
      <FAQ />
      <Footer />
    </>
  );
};

export default LandingPage;
