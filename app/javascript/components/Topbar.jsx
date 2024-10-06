import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Input,
  Button,
  Divider,
} from "@nextui-org/react";

import { Search, Globe } from "react-feather";

const Topbar = (props) => {
  const { searchInput, setSearchInput, handleSearch, isIsbnInvalid, errorMsg } =
    props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Home",
    "Rent Textbooks",
    "Buy Textbooks",
    "Sell Textbooks",
  ];

  const navbarMenu = () => {
    return (
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    );
  };

  return (
    <Navbar
      maxWidth="full"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="hidden md-show"
        />
        <NavbarBrand className="mr-4">
          <img
            src="/images/sample-logo.svg"
            style={{ minWidth: "7.5rem", height: "auto" }}
          />
        </NavbarBrand>
        <NavbarItem>
          <Input
            style={{ borderWidth: "0 !important" }}
            type="search"
            size="md"
            radius="full"
            variant="bordered"
            fullWidth={false}
            value={searchInput}
            isInvalid={isIsbnInvalid}
            errorMessage={errorMsg}
            onValueChange={setSearchInput}
            classNames={{
              input: "bg-transparent",
              mainWrapper: `${isIsbnInvalid ? "margin-top-2" : ""}`,
              innerWrapper: "border-primary-100",
              inputWrapper: "search-input-border-color min-right-padding",
              base: "w-24 search-input",
            }}
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            startContent={
              <img
                src="/images/Icon feather-search.svg"
                style={{ minWidth: "1.1rem" }}
              />
            }
            endContent={
              searchInput.length > 0 && (
                <Button
                  size="sm"
                  radius="full"
                  color="primary"
                  variant="shadow"
                  style={{ padding: "0.5rem 1rem" }}
                  onClick={handleSearch}
                >
                  Search
                </Button>
              )
            }
          />
        </NavbarItem>

        <NavbarContent
          justify="end"
          className="sm:flex md-hidden"
          style={{ gap: "2rem" }}
        >
          <NavbarItem>
            <Link className="topbar-links" color="foreground" href="/">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="topbar-links" color="foreground" href="#">
              Rent Textbooks
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="topbar-links" color="foreground" href="#">
              Buy Textbooks
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="topbar-links" color="foreground" href="#">
              Sell Textbooks
            </Link>
          </NavbarItem>
          <Divider
            orientation="vertical"
            style={{
              marginLeft: "-1rem",
              marginRight: "-1rem",
              height: "2rem",
            }}
          />
          <NavbarContent style={{ gap: "0.4rem" }}>
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
        <NavbarContent justify="end">
          <NavbarContent
            justify="end"
            className="hidden"
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
          <Button
            size="lg"
            color="primary"
            variant="shadow"
            style={{ padding: "1rem 2rem" }}
          >
            Contact
          </Button>
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu id="backdrop-blur-fix">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item == "Home" ? "/" : "#"}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Topbar;
