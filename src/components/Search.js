import React, { useState } from "react";

function Search({setSearch}) {
  // React state(s)
  const [searchTextBox, setSearchTextBox] = useState('');

  // Event Handler: Search Submit
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchTextBox);
    setSearchTextBox('');
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTextBox}
        onChange={(e) => setSearchTextBox(e.target.value)}
        name="searchbox" // name attribute required to find e.target.name.value
      />
      <button type="submit" className="emoji-button">🔍</button>
    </form>
  );
}

export default Search;
