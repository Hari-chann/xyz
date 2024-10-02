import React from "react";
import { Button, Link } from "@nextui-org/react";

const ExploreSection = () => {
  const bookList = [
    { name: "Doughnuts and Doom", img: "/images/doughnuts & Doom.png" },
    { name: "The bend of luck", img: "/images/The Bend of Luck.png" },
    { name: "The underwater welder", img: "/images/The Underwater Welder.png" },
  ];

  return (
    <div id="explore-bg-section-top-half">
      <div>
        <h4
          className="hero-text h4-hero-text"
          style={{ color: "#151c55", textAlign: "center" }}
        >
          Explore our books
        </h4>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8rem",
            textAlign: "center",
          }}
        >
          With our dedicated customer support team, you can rest easy knowing
          that we’re doing everything
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8rem",
            textAlign: "center",
          }}
        >
          we can to save you time, money, and stress.
        </p>
      </div>
      <div
        className="inline-stack flex-center"
        style={{ marginTop: "5rem", paddingBottom: "4rem" }}
      >
        {bookList.map((book, index) => (
          <div key={index} style={{ marginInline: "1.5rem" }}>
            <img src={book.img} style={{ width: "20rem" }} />
            <h4
              className="book-title"
              style={{ color: "white" }}
            >
              {book.name}
            </h4>
            <div className="inline-stack flex-center">
              <Link
                showAnchorIcon
                href="/"
                className="book-detail-link"
                anchorIcon={
                  <img
                    src="/images/Path 329.svg"
                    className="greater-than-img"
                    style={{ color: "#53bde3", marginLeft: "0.4rem" }}
                  />
                }
              >
                View book details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;
