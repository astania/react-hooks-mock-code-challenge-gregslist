import React, { useState, useEffect } from "react";
import AddListing from "./AddListing";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [listingsToDisplay, setListingsToDisplay] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(listings => setListingsToDisplay(listings))
  },[])

  const handleDeleteListing = (deletedListing) => {

    const updatedListings = listingsToDisplay.filter(listing => listing.id !== deletedListing.id)
    setListingsToDisplay(updatedListings)
    
  }

  const handleAddListing = (addedListing) => {
    const updatedListings = [...listingsToDisplay, addedListing]
    setListingsToDisplay(updatedListings)
  }

  return (
    <div className="app">
      <Header listingsToDisplay={listingsToDisplay} setListingsToDisplay={setListingsToDisplay} />
      <ListingsContainer listingsToDisplay={listingsToDisplay} onDeleteListing={handleDeleteListing} />
      <AddListing onAddListing={handleAddListing}/>
    </div>
  );
}

export default App;
