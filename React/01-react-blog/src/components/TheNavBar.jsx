import React from "react";
import { Link } from "react-router-dom";
// import icon from "././assets/img/news-icon.jpg";

const TheNavBar = () => {
  return (
    <div className="p-2 sm:p-5  bg-head z-5 sticky text-white  shadow-lg">
      <div className="mx-2 sm:mx-10 flex-row sm:flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-1 justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/7108/7108096.png"
              alt="news-icon"
              className="w-10 h-10"
            />
            <h1 className="text-2xl font-bold"> Blog</h1>
          </div>
        </Link>

        {/* Products */}
        <div className="mt-2  flex space-x-5 sm:space-x-10 font-semibold text-sm sm:text-lg justify-center text-center">
          <Link to="/" className="link">
            Latest Product
          </Link>
          <Link to="/product-updates" className="link">
            Product Updates
          </Link>
          <Link to="/company-news" className="link">
            Company News
          </Link>
        </div>

        {/* menu */}
        <div className="flex items-center space-x-5 justify-center invisible sm:visible">
          <div className="flex  items-center space-x-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m18.031 16.617l4.283 4.282l-1.415 1.415l-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9s9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617m-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.867-3.133-7-7-7s-7 3.133-7 7s3.133 7 7 7a6.977 6.977 0 0 0 4.875-1.975z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="M10 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
              ></path>
            </svg>
          </div>
          <button
            type="button"
            className=" font-bold bg-sage p-1 rounded text-black  w-full mx-auto "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default TheNavBar;
