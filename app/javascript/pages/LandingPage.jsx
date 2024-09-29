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
      <div className="gradient-background" style={{
        backgroundImage: "url('https://ik.imagekit.io/hj8dhpyuyh1/Mask-Group_4_PWM-Hi8Le.png?updatedAt=1727597492061')"
      }}>
        <p style={{color: "black"}}>Save up to $500 per year on millions of book titles!</p>
      </div>
      <Topbar />
    </>
  );
};

export default LandingPage;
