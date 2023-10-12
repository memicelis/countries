import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaMicrophone, FaCog, FaChevronLeft } from 'react-icons/fa';

const NavBar = () => (
  <>
    <nav className="flex justify-between items-center bg-dark p-4">
      <NavLink to="/">
        <FaChevronLeft className="text-white" />
      </NavLink>
      <h1 className="text-white">Countries</h1>
      <div className="flex items-center gap-2">
        <FaMicrophone className="text-white" />
        <FaCog className="text-white" />
      </div>
    </nav>
  </>
);

export default NavBar;
