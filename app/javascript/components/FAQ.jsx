import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = () => {
  return (
    <div
      className="flex-center"
      id="main-faq-div"
    >
      <h4
        className="hero-text h4-hero-text"
        style={{ color: "#151c55", marginBottom: "2rem", minWidth: "40vw" }}
      >
        Fequently asked questions
      </h4>
      <Accordion defaultExpandedKeys={["1"]}>
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          className="accordion-item"
          title="Dedicated customer support and help portal"
        >
          With our dedicated customer support team, you can rest easy knowing
          that we’re doing everything we can to save you time, money, and
          stress.
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          className="accordion-item"
          title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore Stet clita kasd
          gubergren, no sea takimata.
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          className="accordion-item"
          title="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed"
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore Stet clita kasd
          gubergren, no sea takimata.
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
