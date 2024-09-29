import React from "react";
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
  Button,
  Divider,
} from "@nextui-org/react";

import { Search, Globe } from "react-feather";

const Topbar = () => {
  return (
    <Navbar maxWidth="full">
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
          <h1 style={{ fontSize: "1.6rem", fontWeight: "bolder" }}>XYZASDLAKjd</h1>
        </NavbarBrand>
        <Input
          style={{ borderWidth: "0 !important" }}
          type="search"
          size="md"
          radius="full"
          variant="bordered"
          fullWidth={false}
          classNames={{
            input: "bg-transparent",
            innerWrapper: "border-primary-100",
            base: "w-24",
          }}
          placeholder="Search"
          startContent={<Search size={18} />}
        />
      </NavbarContent>
      <NavbarContent></NavbarContent>

      <NavbarContent as="div" className="items-center" justify="start">
        <NavbarContent className="sm:flex" style={{ gap: "1.5rem" }}>
          <NavbarItem>
            <Link color="foreground" href="#">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" aria-current="page">
              Rent Textbooks
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Buy Textbooks
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Sell Textbooks
            </Link>
          </NavbarItem>
          <Divider orientation="vertical" className="h-10" />
          <NavbarContent className="sm:flex gap-1">
            <NavbarItem>
              <Globe size={18} color="skyblue" />
            </NavbarItem>
            <NavbarItem>
              <p>En</p>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
        <Button size="lg" color="primary" variant="shadow">
          Contact
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default Topbar;
