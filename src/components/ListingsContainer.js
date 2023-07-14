import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteButton}) {
  // Iterate through each listing data
  const renderListings = listings.map(listing => {
      return <ListingCard key={listing.id} listing={listing} onDeleteButton={onDeleteButton} />
  })

  return (
    <main>
      <ul className="cards">
        {renderListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
