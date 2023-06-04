import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <div className=" ">
        <div className="max-w flex bg-yellow-300 items-center flex-col lg:flex-row justify-between p-4">
          <div className=" flex w-11/12 items-center justify-between">
            <h1 className="font-bold text-2xl lg:text-3xl flex ">UNDEFINED</h1>
            <button
            onClick={toggleNav}
            type="button"
            className=" w-1/6 my-auto text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isNavOpen}
          >
            <span className="sr-only ">Open main menu</span>
            <svg
              className="w-6 mx-auto h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          </div>
          

          <div
            className={`${
              isNavOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
              <li className="block py-2 pl-3 pr-4  rounded md:bg-transparent lg:hover:text-white  md:p-0">
                <Link to={`/government`} onClick={toggleNav}>
                  Home
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:hover:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0">
                <Link to={`/government`} onClick={toggleNav}>
                  Verified
                </Link>
              </li>
              <li className="block py-2 pl-3 pr-4 text-gray-900 rounded lg:hover:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 ">
                <Link to={`/government`} onClick={toggleNav}>
                  Volunteering
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
