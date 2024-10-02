import React from "react";
import { Button } from "@nextui-org/react";

const MainAbout = () => {
  return (
    <div id="main-about-bg">
      {/* Cheapest Textbooks section */}
      <div className="inline-stack" style={{ marginBlock: "3rem" }}>
        <div style={{ marginTop: "4rem" }}>
          <h1
            className="hero-text"
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
            id="get-started-btn"
            endContent={
              <img src="/images/Path 329.svg" className="greater-than-img" />
            }
          >
            Get Started
          </Button>
        </div>
        <img
          src="/images/hero illustration.svg"
          className="img-hero-style md-hidden"
        />
      </div>
      {/* Our Commitment section */}
      <div
        className="inline-stack"
        style={{ marginBlock: "3rem", marginTop: "8rem" }}
      >
        <img
          src="/images/Group 13597.png"
          className="img-hero-style md-hidden"
        />
        <div style={{ alignContent: "center" }}>
          <h4 className="hero-text h4-hero-text">Our Commitment</h4>
          <p id="commitment-p">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum
          </p>
          <Button
            size="lg"
            // color="#151c55"
            color="primary"
            variant="shadow"
            style={{
              marginTop: "2rem",
              padding: "1rem 2rem",
              backgroundColor: "#151c55",
              color: "#5fd2fa",
            }}
            endContent={
              <img
                src="/images/Path 329.svg"
                className="greater-than-img"
                style={{ color: "#5fd2fa" }}
              />
            }
          >
            Learn More
          </Button>
        </div>
      </div>
      <div style={{ marginBlock: "3rem" }}>
        <div className="inline-stack flex-center">
          <h4 className="hero-text h4-hero-text hidden md-show">
            Trusted by awesome clients
          </h4>
          <h4 className="hero-text h4-hero-text md-hidden">
            Trusted by awesome
          </h4>
          <h4
            className="hero-text md-hidden"
            style={{
              fontSize: "2.6rem",
              color: "#f6c644",
              marginLeft: "0.8rem",
            }}
          >
            clients
          </h4>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
