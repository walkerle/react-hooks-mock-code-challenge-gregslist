import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import AddForm from "./AddForm";

function App() {
  // Fetch data => Remember! useEffect is asynchronous!
  const baseUrl = 'http://localhost:6001/listings'
  useEffect(() => {
    fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      setListings(data);
    })
  }, [])
  
  // React state(s)
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState(''); // state is set on search submit button
  const [sortAlpha, setSortAlpha] = useState(false);

  // Event Handler: Delete button click => frontend
  function onDeleteButton(id) {
    const newListings = listings.filter(listing => {
      return listing.id !== id;
    })
    setListings(newListings);
  }

  // Event Handler: Add listing => frontend
  function onAddButton(formData) {
    // console.log('App FormData:', formData);
    setListings([...listings, formData]);
    // console.log(listings);
  }
  
  // Filters listings based on the search text box, set at start and on submit, does not delete the original listings array, basically treated as READ-ONLY
  const currentListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })
  // Sort current listings alphabetically
    .sort((list1, list2) => {
      return (sortAlpha ? list1.location.localeCompare(list2.location) : '')
    })

  return (
    <div className="app">
      <Header setSearch={setSearch} sortAlpha={sortAlpha} setSortAlpha={setSortAlpha} />
      <AddForm onAddButton={onAddButton} />
      <ListingsContainer listings={currentListings} onDeleteButton={onDeleteButton} />
    </div>
  );
}

export default App;
