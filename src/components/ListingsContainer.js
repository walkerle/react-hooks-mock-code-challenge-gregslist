import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing, searchSubmit}) {
  // Render each listing
  const renderListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(searchSubmit.toLowerCase())
  })
  .map(listing => {
    return <ListingCard key={listing.id} listing={listing} onDeleteListing={onDeleteListing} />
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
