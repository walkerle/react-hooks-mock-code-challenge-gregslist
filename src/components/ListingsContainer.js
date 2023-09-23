import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDeleteListing, searchSubmit, alphaSort}) {
  // Sort listings
  const sortListings = (alphaSort ? listings.sort((a, b) => a.location.toLowerCase().localeCompare(b.location.toLowerCase())) : listings.sort((a, b) => a.id - b.id))

  // Render each listing
  const renderListings = sortListings.filter(listing => {
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
