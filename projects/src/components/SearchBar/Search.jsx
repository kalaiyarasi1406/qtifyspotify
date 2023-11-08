import React from "react";
import "./Search.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
const Search = () => {
  return (
    <form className="wrappers">
      <input className="search" placeholder="Search a album of your choice" />
      <button className="searchButton">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
