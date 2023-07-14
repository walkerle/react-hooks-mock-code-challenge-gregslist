import React from "react";
import Search from "./Search";

function Header({setSearch, sortAlpha, setSortAlpha}) {
  // Event Handler: Sort Alphabetically Button
  function handleSortButton() {
    setSortAlpha(!sortAlpha);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search setSearch={setSearch} />
      <h2>
        {'Sort Alphabetically: '}
        <button onClick={handleSortButton}>{(sortAlpha ? 'Yes' : 'No')}</button>
      </h2>
    </header>
  );
}

export default Header;
