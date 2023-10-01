import React from "react";

function Search({searchVal, setSearchVal}) {

  function handleChange(e) {
    setSearchVal(e.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchVal}
        placeholder="Type a name to search..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default Search;
