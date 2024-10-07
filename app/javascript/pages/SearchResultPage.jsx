import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { isValidIsbn13, isValidIsbn10 } from "../services/utilities";
import toast, { Toaster } from "react-hot-toast";

import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import BookResource from "../components/BookResource";

const SearchResultPage = () => {
  const { isbn } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [searchErrorCode, setSearchErrorCode] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [isIsbnInvalid, setIsIsbnInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`/api/v1/books/${isbn}`);

        if (response?.data?.book) {
          setBook(response?.data);
        }
      } catch (error) {
        setIsIsbnInvalid(true);
        setErrorMsg(error);
        toast.error(error);
      }
    };
    if (isbn) {
      fetchBookData();
    }
  }, [isbn]);

  useEffect(() => {
    if (searchInput.length === 0) {
      setIsIsbnInvalid(false);
      setErrorMsg("");
    }
  }, [searchInput]);

  const handleErrorResponse = (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 400) {
        setErrorMsg("Invalid ISBN format.");
        toast.error("Invalid ISBN format.");
      } else if (status === 404) {
        setErrorMsg("Book not found.");
        toast.error("Book not found.");
      } else {
        setErrorMsg(
          `Error ${status}: ${
            error.response.data.error || "An unexpected error occurred"
          }`
        );
        toast.error(
          `Error ${status}: ${
            error.response.data.error || "An unexpected error occurred"
          }`
        );
      }
    } else if (error.request) {
      msg = "No response from server. Please try again later.";
      setErrorMsg(msg);
      toast.error(msg);
    } else {
      msg = "An error occurred. Please try again.";
      setErrorMsg(msg);
      toast.error(msg);
    }
    setIsIsbnInvalid(true);
  };

  const handleSearch = async () => {
    var filteredSearchInput = searchInput
      .replaceAll(/\s/g, "")
      .replaceAll(/[^0-9xX]/g, "");
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

    setIsIsbnInvalid(false);
    setErrorMsg("");
    try {
      const response = await axios.get(`/api/v1/books/${filteredSearchInput}`);

      if (response?.data?.book) {
        const book = response?.data?.book;
        navigate(`/books/${book?.attributes?.isbn_13}`);
      }
    } catch (error) {
      handleErrorResponse(error);
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
      {book && <BookResource book={book} searchErrorCode={searchErrorCode} />}
      <Footer />
      <Toaster />
    </>
  );
};

export default SearchResultPage;
