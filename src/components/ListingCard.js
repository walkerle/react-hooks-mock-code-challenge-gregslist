import React, {useState} from "react";

function ListingCard({listing, onDeleteListing}) {
  // Destructure listing
  const {description, image, location} = listing;

  // React state(s):
  const [fav, setFav] = useState(false);

  // Event Handler: On favorite icon click
  const handleFavClick = () => {
    setFav(!fav);
  }

  // Event Handler: Delete listing
  const handleDeleteListing = () => {
    onDeleteListing(listing);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button className="emoji-button favorite active" onClick={handleFavClick}>★</button>
        ) : (
          <button className="emoji-button favorite"onClick={handleFavClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
