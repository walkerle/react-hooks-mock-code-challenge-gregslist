import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  
    // React state(s)
    const [listings, setListings] = useState([]);
    const [searchSubmit, setSearchSubmit] = useState('');
    const [alphaSort, setAlphaSort] = useState(false);

  // Fetch data on load
  useEffect(() => {
    fetch(`http://localhost:6001/listings`)
    .then(res => res.json())
    .then(data => setListings(data))
  }, [])

  // Event Handler: On search submit
  const onSearchSubmit = (searchObj) => {
    setSearchSubmit(searchObj)
  }

  // Event Handler: Delete listing
  const onDeleteListing = (listingObj) => {
    // Backend render
    fetch(`http://localhost:6001/listings/${listingObj.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    // => response is an empty object

    // Frontend render
    setListings(listings.filter(listing => listingObj.id !== listing.id));
  }

  // Event Handler: Add listing *STRETCH GOAL*
  const onAddListing = (listingObj) => {
    // Backend render
    fetch(`http://localhost:6001/listings`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(listingObj)
    })
    .then(res => res.json())
    .then(data => setListings([...listings, data]));
  }

  return (
    <div className="app">
      <Header onSearchSubmit={onSearchSubmit} onAddListing={onAddListing} setAlphaSort={setAlphaSort} alphaSort={alphaSort}/>
      <ListingsContainer listings={listings} onDeleteListing={onDeleteListing} searchSubmit={searchSubmit} alphaSort={alphaSort} />
    </div>
  );
}

export default App;

// Core Deliverables Complete in 68 mins
// Advanced Deliverables Complete