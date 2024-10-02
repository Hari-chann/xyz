import React from "react";
import { Button, Link } from "@nextui-org/react";

const ExploreBottomSection = () => {
  const reasonList = [
    {
      labels: "All textbook rentals come\nwith free return shipping.",
      img: "/images/package-box.svg",
    },
    {
      labels: "Dedicated customer\nsupport and help portal.",
      img: "/images/help.svg",
    },
    {
      labels: "Buy or rent cheap textbooks\n& save up to $500 per year!",
      img: "/images/piggy-bank.svg",
    },
  ];

  return (
    <div id="explore-bg-section-bottom-half">
      <div>
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8rem",
            color: "#e1b742",
          }}
        >
          LOREM IPSUM
        </p>
        <h4
          className="hero-text"
          style={{
            color: "white",
            lineHeight: "4rem !important",
            fontSize: "2.6rem",
          }}
        >
          3 Reasons to shop with us
        </h4>
      </div>
      <div
        id="reason-list"
        className="inline-stack flex-center"
        style={{ marginTop: "5rem", paddingBottom: "4rem" }}
      >
        {reasonList.map((reason, index) => (
          <div key={index} style={{ marginInline: "1.5rem" }}>
            <img src={reason.img} style={{ width: "4rem" }} />
            <h4 className="reason-label">{reason.labels}</h4>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8rem",
                color: "white",
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore Stet clita kasd
              gubergren, no sea takimata.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreBottomSection;
