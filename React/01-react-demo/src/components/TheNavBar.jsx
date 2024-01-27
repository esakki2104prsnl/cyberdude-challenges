import React from "react";
import { Link } from "react-router-dom";
import Logo from "../pages/Logo";

const TheNavBar = () => {
  return (
    <div className=" flex items-center justify-between px-14 py-3">
      <Logo />
      <ul className="flex space-x-10">
        <li>
          <Link to="/" className="nav group">
            Home
            <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav group">
            About
            <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
          </Link>
        </li>
        <li>
          <Link to="/investment" className="nav group">
            Investment
            <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
          </Link>
        </li>
        <li>
          <Link to="/business" className="nav group">
            Business
            <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TheNavBar;
