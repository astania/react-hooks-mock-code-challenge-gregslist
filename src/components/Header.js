import React from "react";
import Search from "./Search";

function Header({ listingsToDisplay, setListingsToDisplay }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listingsToDisplay={listingsToDisplay} setListingsToDisplay={setListingsToDisplay} />
    </header>
  );
}

export default Header;
