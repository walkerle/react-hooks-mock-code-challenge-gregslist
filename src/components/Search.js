import React, {useState} from "react";

function Search({onSearchSubmit}) {
  // React state(s):
  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(search);
    setSearch('');
  }

  // Event Handler: Make search field a controlled input
  const handleSearch = (e) => setSearch(e.target.value);

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => handleSearch(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
