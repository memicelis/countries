import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegion, setSearchTerm } from '../../redux/countries/countriesSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const selectedRegion = useSelector((state) => state.countries.selectedRegion);
  const handleRegionChange = (event) => {
    const filterValue = event.target.value;
    dispatch(setSearchTerm(''));
    dispatch(setRegion(filterValue));
  };

  return (
    <div className="w-2/3 md:w-48">
      <select
        className="w-full bg-dark border border-light text-white py-2 px-4 rounded-md placeholder:text-white"
        id="region"
        onChange={handleRegionChange}
        value={selectedRegion}
      >
        <option value="">Select Region</option>
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
