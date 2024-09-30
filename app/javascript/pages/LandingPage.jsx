import React from "react";
import Topbar from "../components/Topbar";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";

const LandingPage = () => {
  return (
    <>
      <div className="gradient-background">
        <img src="/images/26.svg" style={{ transform: "rotateY(180deg)" }} />
        <p
          style={{
            marginTop: "0.5rem",
            marginLeft: "0.8rem",
            marginRight: "0.8rem",
          }}
        >
          Save up to $500 per year on millions of book titles!
        </p>
        <img src="/images/26.svg" />
      </div>
      <Topbar />
    </>
  );
};

export default LandingPage;
