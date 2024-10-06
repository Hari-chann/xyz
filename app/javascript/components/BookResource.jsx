import React, { useEffect, useState } from "react";

const BookResource = (props) => {
  const { book, searchErrorCode } = props;

  return (
    <div style={{ marginBlock: "4rem", marginInline: "9rem" }}>
      <h4 className="hero-text h4-hero-text search-header">Search result</h4>
      <div className="flex" style={{ marginInline: "unset" }}>
        <img
          src={book.book.attributes.image_url}
          className="img-search-result"
        />
        <div>
          <h4 className="search-title">{book.book.attributes.title}</h4>
          <h4 className="search-detail" style={{ marginBlock: "1.5rem", maxWidth: "50rem" }}>
            {`by ${book.book.attributes.author_list}`}
          </h4>

          <div className="div-flex">
            <h4 className="search-detail">Edition:</h4>
            <h4
              className="search-detail"
              style={{
                color: "#6160f6",
              }}
            >
              {book.book.attributes.edition}
            </h4>
          </div>

          <div className="div-flex">
            <h4 className="search-detail">Price:</h4>
            <h4
              className="search-detail"
              style={{
                color: "#6160f6",
              }}
            >
              {`PHP ${book.book.attributes.price}`}
            </h4>
          </div>

          <div className="div-flex">
            <h4 className="search-detail">ISBN:</h4>
            <h4
              className="search-detail"
              style={{
                color: "#6160f6",
              }}
            >
              {book.book.attributes.isbn_13}
            </h4>
          </div>

          <div className="div-flex">
            <h4 className="search-detail">Publication Year:</h4>
            <h4
              className="search-detail"
              style={{
                color: "#6160f6",
              }}
            >
              {book.book.attributes.publication_year}
            </h4>
          </div>

          <div className="div-flex">
            <h4 className="search-detail">Publisher:</h4>
            <h4
              className="search-detail"
              style={{
                color: "#6160f6",
              }}
            >
              {book.publisher_name}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookResource;
