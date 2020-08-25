import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("Please enter you search text here");

  const onFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  const onInputChange = (e) => {
    setTerm(e.target.value);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="">Image Search</label>
          <input
            type="text"
            onClick={(e) => setTerm("")}
            onChange={(e) => onInputChange(e)}
            name="search"
            id="search"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
