import React from "react";
import { Button } from "@nextui-org/react";

const MainAbout = () => {
  return (
    <div className="main-about-bg cus-inline-stack">
      <div className="cus-block-stack">
        <h1
          className="hero-text parimary-50"
          style={{
            fontSize: "4rem",
            color: "#151c55",
          }}
        >
          The Cheapest Textbooks
        </h1>
        <h4
          className="hero-text secondary-200"
          style={{ fontSize: "1.8rem", color: "#6160f6" }}
        >
          Save up to 90% on millions of titles
        </h4>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8rem" }}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
        <Button
          size="lg"
          color="primary"
          variant="shadow"
          style={{ marginTop: "2rem" }}
          endContent={
            <img src="/images/Path 329.svg" className="greater-than-img" />
          }
        >
          Get Started
        </Button>
      </div>
      <img src="/images/hero illustration.svg" className="hero-style" />
    </div>
  );
};

export default MainAbout;
