import React, { useEffect, useState } from "react";
import axios from "axios";
import { isValidIsbn13, isValidIsbn10 } from "../services/utilities";

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

  useEffect(() => {
    if (searchInput.length === 0) {
      setIsIsbnInvalid(false);
      setErrorMsg("");
    }
  }, [searchInput]);

  const handleSearch = async () => {
    var filteredSearchInput = searchInput.replaceAll(/\s/g, "").replaceAll(/[^0-9xX]/g, "");
    console.log(`filteredSearchInput: ${filteredSearchInput}`);
    if (filteredSearchInput.length === 10) {
      if (!isValidIsbn10(filteredSearchInput)) {
        setIsIsbnInvalid(true);
        setErrorMsg("Invalid ISBN-10 format");
        return;
      }
    } else if (filteredSearchInput.length === 13) {
      if (!isValidIsbn13(filteredSearchInput)) {
        setIsIsbnInvalid(true);
        setErrorMsg("Invalid ISBN-13 format");
        return;
      }
    } else {
      setIsIsbnInvalid(true);
      setErrorMsg("Invalid ISBN format");
      return;
    }
    /*
    */
    try {
      const response = await axios.get(
        `/api/v1/books/${filteredSearchInput}`
      );
      console.log(`response`);
      console.dir(response.data);
      // if (response.data.totalItems === 0) {
      //   setIsIsbnInvalid(true);
      //   setErrorMsg("Book not found");
      //   return;
      // }
      // window.location = `/book/${filteredSearchInput}`;
    } catch (error) {
      setIsIsbnInvalid(true);
      setErrorMsg("Book not found");
    }
  };

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
        handleSearch={handleSearch}
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
