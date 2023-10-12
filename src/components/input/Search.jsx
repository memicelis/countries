import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, filterCountries } from "../../redux/countries/countriesSlice";

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.countries.searchTerm);
  console.log(searchTerm);
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    dispatch(setSearchTerm(searchValue));
  };

  return (
    <div>
      <input
        type="text"
        className="bg-dark border border-light text-white py-2 px-4 rounded-md placeholder:text-white"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
