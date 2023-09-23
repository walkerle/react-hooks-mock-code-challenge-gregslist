import React from "react";
import Search from "./Search";
import AddListingForm from "./AddListingForm";

function Header({onSearchSubmit, onAddListing, setAlphaSort, alphaSort}) {

  const handleSortClick = () => {
    setAlphaSort(!alphaSort);
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchSubmit={onSearchSubmit} />
      <AddListingForm onAddListing={onAddListing} />
      <div>
        <input type='checkbox' checked={alphaSort} onChange={handleSortClick}/><br/>
        <label>Alphabetize by location</label>
      </div>
    </header>
  );
}

export default Header;
