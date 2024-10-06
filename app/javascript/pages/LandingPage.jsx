import React, { useEffect, useState } from "react";
import axios from "axios";
import { isValidIsbn13, isValidIsbn10 } from "../services/utilities";
import { ToastContainer, toast } from "react-toastify";

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
  const [errorMsg, setErrorMsg] = useState("Invalid ISBN format");

  const handleSearch = async () => {
    var filteredSearchInput = searchInput.replaceAll(/\s/g, "");
    if (filteredSearchInput.length === 10) {
      if (!isValidIsbn10(filteredSearchInput)) {
        setIsIsbnInvalid(true);
        setErrorMsg("Invalid ISBN-10 format");
        toast.error("Invalid ISBN-10 format");
        return;
      }
    } else if (filteredSearchInput.length === 13) {
      if (!isValidIsbn13(filteredSearchInput)) {
        setIsIsbnInvalid(true);
        setErrorMsg("Invalid ISBN-13 format");
        toast.error("Invalid ISBN-13 format");
        return;
      }
    } else {
      setIsIsbnInvalid(true);
      setErrorMsg("Invalid ISBN format");
      toast.error("Invalid ISBN format");
      return;
    }
    /*
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=isbn:${filteredSearchInput}`
      );
      if (response.data.totalItems === 0) {
        setIsIsbnInvalid(true);
        setErrorMsg("Book not found");
        return;
      }
      window.location = `/book/${filteredSearchInput}`;
    } catch (error) {
      setIsIsbnInvalid(true);
      setErrorMsg("Invalid ISBN format");
    }
    */
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
    </>
  );
};

export default LandingPage;
