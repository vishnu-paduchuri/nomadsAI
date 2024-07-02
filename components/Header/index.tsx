"use client";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-dark-blue p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src="https://scout.diginomad.xyz/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdigitalnomads.e785ddd7.png&w=128&q=75"
            alt="DigitalNomads AI"
            className="h-8 w-8"
          />
          <span className="text-white font-semibold">DigitalNomads AI</span>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-black-300 hover:text-gray-700">
            Home
          </a>
          <a href="/discover" className="text-black-300 hover:text-gray-700">
            Discover
          </a>
        </div>
        <div className="hidden md:flex items-center">
          <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
            Sign In
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a
            href="/"
            className="block text-black-300 hover:text-gray-700 px-4 py-2"
          >
            Home
          </a>
          <a
            href="/discover"
            className="block text-black-300 hover:text-gray-700 px-4 py-2"
          >
            Discover
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
