import React from "react";
import logo from '../images/europe.svg';
import CountryList from "./CountryList";
import Filter from "./input/Filter";
import Search from "./input/Search";

const Home = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col items-center">
        <p className="w-full text-center text-white font-bold text-2xl">Europe</p>
        <div className="grid place-items-center w-full">
          <img src={logo} className="w-1/2" alt="Logo" />
        </div>
        <p className="w-full text-center text-white font-bold text-xl mb-4">All Countries</p>
      </div>
      <div className="mb-8 flex flex-col md:flex-rowjustify-between">
      <Search />
      <Filter />
      </div>
      <CountryList /> 
    </div>
  );
};

export default Home;
