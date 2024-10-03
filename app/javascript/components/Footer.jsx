import React from "react";
import { Input, Button, Link, Avatar } from "@nextui-org/react";

const Footer = () => {
  const socialItems = ["linkedin.svg", "twitter.svg"];

  const menuItems = ["Shop All", "About Us", "Community", "FAQs"];

  const supportItems = [
    "Shipping & Returns",
    "Help & FAQ",
    "Terms & Conditions",
    "Privacy Policy",
    "Contact",
    "Login",
  ];

  const linkHeaders = [
    { title: "Menu", items: menuItems },
    { title: "Support", items: supportItems },
    { title: "Resources", items: supportItems },
  ];

  return (
    <div style={{ paddingInline: "6rem", paddingBlock: "5rem" }}>
      <div id="grid-link-stack">
        <div style={{ gridColumn: 1, maxWidth: "15rem" }}>
          <img src="/images/sample-logo.svg" />
          <p style={{ paddingBlock: "3rem" }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod
          </p>
          <Input
            style={{ borderWidth: "0 !important", minWidth: "7rem" }}
            type="search"
            size="md"
            radius="full"
            variant="bordered"
            fullWidth={false}
            classNames={{
              input: "bg-transparent",
              innerWrapper: "border-primary-100",
              inputWrapper: "search-input-border-color",
              // base: "w-24",
            }}
            placeholder="Email address"
            endContent={
              <Button color="primary" variant="light" id="send-btn">
                {`>`}
              </Button>
            }
          />
        </div>
        <div
          className="md-hidden"
          style={{ gridColumn: 2, maxWidth: "15rem" }}
        ></div>
        {linkHeaders.map((header, index) => {
          const col = 3 + index;
          return (
            <div
              style={{
                display: "grid",
                gap: "1rem",
                gridColumn: col,
              }}
            >
              <h4 className="h4-footer">{header.title}</h4>
              {header.items.map((item, index) => (
                <Link key={index} href="#" style={{ color: "dimgray" }}>
                  {item}
                </Link>
              ))}
            </div>
          );
        })}
        <div id="chat-avatar" className="inline-stack flex-center">
          <Avatar isBordered color="primary" src="/images/Path 335.svg" />
        </div>
      </div>
      <div className="inline-stack flex-center" style={{ marginTop: "5rem" }}>
        <p style={{ marginRight: "auto" }}>@ 2022 Brainly.</p>
        <div className="inline-stack" id="media-stack">
          <div id="fb-div">
            <Avatar src="/images/fb.svg" style={{ marginRight: "1.5rem" }} />
          </div>
          {socialItems.map((item, index) => {
            const src = `/images/${item}`;
            return (
              <Avatar key={index} src={src} style={{ marginRight: "1.5rem" }} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
