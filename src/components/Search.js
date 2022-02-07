import React, { useState } from "react";

function Search({listings, setListings}) {
  const [search, setSearch] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    const lowerCaseSearch = search.toLowerCase()
    const filteredListings = listings.filter(listing => listing.description.toLowerCase().includes(lowerCaseSearch))
    setListings(filteredListings)
    setSearch("")
  }

  const alphabetizeLocations = () => {
    listings.sort((a, b) => (a.location.toLowerCase() > b.location.toLowerCase()) ? 1 : -1)
    // console.log(alphabetizedListings)
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
      <button onClick={alphabetizeLocations}>Location A -> Z</button>
    </form>
  );
}

export default Search;
