import React from "react";
import { Link } from "react-router-dom";

const TheNavBar = () => {
  return (
    <div>
      <div className=" flex items-center justify-between px-2 sm:px-14 py-3">
        <div className="flex items-center p-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4922/4922057.png"
            alt="logo"
            className="w-14 cursor-pointer"
          />
          <p className="font-bold underline text-xl sm:text-4xl text-customBlue cursor-pointer">
            EBlog's
          </p>
        </div>
        <ul className="flex space-x-1 sm:space-x-10">
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
            <Link to="/education" className="nav group">
              Education
              <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/achievement" className="nav group">
              Achievement
              <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
            </Link>
          </li>
          <li>
            <Link to="/certificate" className="nav group">
              Certificate
              <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TheNavBar;
