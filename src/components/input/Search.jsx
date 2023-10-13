import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redux/countries/countriesSlice';

const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.countries.searchTerm);
  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    dispatch(setSearchTerm(searchValue));
  };

  return (
    <div className="w-2/3 mb-2 md:w-48">
      <input
        type="text"
        className="w-full bg-dark border border-light text-white py-2 px-4 rounded-md placeholder:text-white"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Search;
