import React, { useState } from "react";

function Search({listingsToDisplay, setListingsToDisplay}) {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const lowerCaseSearch = search.toLowerCase()
    const filteredListings = listingsToDisplay.filter(listing => listing.description.toLowerCase().includes(lowerCaseSearch))
    setListingsToDisplay(filteredListings)
  }


  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(() => e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
