import React from "react";
import Button from "../Button/Button";
import "./NavBar.css";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/Search";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <SearchBar />
      <Button children="Give Feedback" />
    </nav>
  );
};

export default Navbar;
