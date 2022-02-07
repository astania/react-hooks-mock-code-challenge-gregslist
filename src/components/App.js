import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [listings, setListings] = useState([])
  

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setListings(listings))
  },[])

  const handleDeleteListing = (deletedListing) => {

    const updatedListings = listings.filter(listing => listing.id !== deletedListing.id)
    setListings(updatedListings)
    
  }

  const handleAddListing = (addedListing) => {
    const updatedListings = [...listings, addedListing]
    setListings(updatedListings)
  }

  return (
    <div className="app">
      <Header listings={listings} setListings={setListings} />
      <ListingsContainer listings={listings} onDeleteListing={handleDeleteListing} onAddListing={handleAddListing}/>
      
    </div>
  );
}

export default App;
