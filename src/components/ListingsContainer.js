import React from "react";
import ListingCard from "./ListingCard";
import AddListing from "./AddListing";

function ListingsContainer({listings, onDeleteListing, onAddListing}) {
  return (
    <main>
      <AddListing onAddListing={onAddListing}/>
      <ul className="cards">
        {listings.map(listing => <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing} />) /* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
