import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../redux/countries/countriesSlice";
import { Link } from "react-router-dom";

const CountryList = () => {
  const countriesData = useSelector((state) => state.countries.data);
  const searchTerm = useSelector((state) => state.countries.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const filteredCountries = countriesData.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {filteredCountries ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCountries.map((country, index) => (
            <li key={index}>
              <Link to={`/${country.cca3}`}>
                <div
                  className={`${
                    index % 4 === 2 || index % 4 === 3
                      ? "bg-light"
                      : "bg-dark"
                  } flex md:px-16 md:py-4 items-center justify-between transition-transform transform hover:scale-105 cursor-pointer`}
                >
                  <div className="w-1/4 md:w-1/4 h-12 md:h-48">
                      <img
                        className="w-full h-full object-cover md:object-contain"
                        src={country.flags.svg}
                        alt={country.flags.alt}
                      />
                    </div>
                  <div className="text-center md:w-1/2">
                    <p className="text-white text-sm md:text-2xl font-bold">
                      {country.name.common}
                    </p>
                    <p className="text-white text-xs md:text-xl">
                      {country.population}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CountryList;
