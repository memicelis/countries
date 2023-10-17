import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
  const { code } = useParams(); // Get the country code from the route parameters
  const countriesData = useSelector((state) => state.countries.data);

  // Find the country with the matching code
  const country = countriesData.find((country) => country.cca3 === code);

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="flex flex-col md:px-48 md:pt-6 justify-between items-center">
      <div className="flex w-1/3 h-36 md:w-1/5 md:h-96 mb-8">
        <img className="w-full h-full" src={country.coatOfArms.svg} alt={country.flags.alt} />
      </div>
      <div className="text-white w-full p-4 md:w-1/2 md:text-xl text-start">
        <div className="bg-light p-3 flex justify-between">
          <span className="font-bold">Country Name:</span>
          <p>{country.name.official}</p>
        </div>
        <div className="bg-dark p-3 flex justify-between">
          <span className="font-bold">Area:</span>
          <p>{country.population}</p>
        </div>
        <div className="bg-light p-3 flex justify-between">
          <span className="font-bold">Population:</span>
          <p>{country.population}</p>
        </div>
        <div className="bg-dark p-3 flex justify-between">
          <span className="font-bold">Region:</span>
          <p>{country.subregion}</p>
        </div>
        <div className="bg-light p-3 flex justify-between">
          <span className="font-bold">Timezone:</span>
          <p>{country.timezones.join(', ')}</p>
        </div>
        <div className="bg-dark p-3 flex justify-between">
          <span className="font-bold">Capital:</span>
          <p>{country.capital}</p>
        </div>
        <div className="bg-light p-3 flex justify-between">
          <span className="font-bold">Languages:</span>
          <p>{Object.values(country.languages).join(', ')}</p>
        </div>
      </div>

    </div>
  );
};

export default CountryDetails;
