import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingsToDisplay, onDeleteListing}) {
  return (
    <main>
      <ul className="cards">
        {listingsToDisplay.map(listing => <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing} />) /* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
