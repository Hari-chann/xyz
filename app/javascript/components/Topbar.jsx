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
        <NavbarItem>
          <NavbarBrand className="mr-4">
            <img
              src="/images/sample-logo.svg"
              style={{ minWidth: "7.5rem", height: "auto" }}
            />
          </NavbarBrand>
        </NavbarItem>
        <NavbarItem>
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
              inputWrapper: "search-input-border-color",
              base: "w-24 search-input",
            }}
            placeholder="Search"
            startContent={
              <img
                src="/images/Icon feather-search.svg"
                style={{ minWidth: "1.1rem" }}
              />
            }
          />
          {/* <NavbarContent></NavbarContent> */}
        </NavbarItem>

        <NavbarContent
          justify="end"
          className="sm:flex md-hidden"
          style={{ gap: "2rem" }}
        >
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
          <NavbarContent></NavbarContent>
        </NavbarContent>
        <NavbarContent className="hidden">
          <NavbarItem>
            <img
              src="/images/Icon feather-globe.svg"
              style={{ minWidth: "1rem" }}
            />
          </NavbarItem>
          <NavbarItem>
            <p>En</p>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent>
          <NavbarContent
            justify="end"
            className=""
            style={{ gap: "0.4rem" }}
          >
            <NavbarItem>
              <img
                src="/images/Icon feather-globe.svg"
                style={{ minWidth: "1rem" }}
              />
            </NavbarItem>
            <NavbarItem>
              <p>En</p>
            </NavbarItem>
          </NavbarContent>
          <Button size="lg" color="primary" variant="shadow">
            Contact
          </Button>
        </NavbarContent>
      </NavbarContent>
    </Navbar>
  );
};

export default Topbar;
