import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountries, setSearchTerm } from "../../redux/countries/countriesSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const [selectedRegion, setSelectedRegion] = useState("");
  const searchTerm = useSelector((state) => state.countries.searchTerm);

  const handleRegionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedRegion(selectedValue);

    // Reset the search term when a region is selected
    dispatch(setSearchTerm(""));

    dispatch(filterCountries(selectedValue));
  };

  return (
    <div>
      <select
        className="bg-dark border border-light text-white py-2 px-4 rounded-md placeholder:text-white"
        id="region"
        onChange={handleRegionChange}
        value={selectedRegion}
      >
        <option value="">Select Region</option>
        <option value="all">All</option>
        <option value="Eastern Europe">Eastern Europe</option>
        <option value="Southern Europe">Southern Europe</option>
        <option value="Western Europe">Western Europe</option>
        <option value="Northern Europe">Northern Europe</option>
        <option value="Central Europe">Central Europe</option>
        <option value="Southeast Europe">Southeast Europe</option>
      </select>
    </div>
  );
};

export default Filter;
