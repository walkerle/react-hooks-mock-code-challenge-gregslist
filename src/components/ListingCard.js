import React, { useState } from "react";

function ListingCard({listing, onDeleteButton}) {
  // Destructured listing key-value pairs
  const {description, image, location, id} = listing;

  // React state(s)
  const [isFav, setIsFav] = useState(false);

  // Event Handler: Favorite button click
  function handleFavButton() {
    setIsFav(!isFav);
  }

  // Event Handler: Delete button click => backend
  function handleDeleteButton() {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    })

    onDeleteButton(id);
  }
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFav ? (
          <button className="emoji-button favorite active" onClick={handleFavButton}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavButton}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteButton}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
