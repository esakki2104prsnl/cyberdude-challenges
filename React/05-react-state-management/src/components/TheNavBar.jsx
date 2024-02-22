import { Link } from "react-router-dom";

const TheNavBar = () => {
  return (
    <div>
      <div className=" mx-36 sm:mx-auto sm:flex sm:items-center justify-between px-2 sm:px-14 py-3 ">
        <div className="text-center flex items-center p-2 space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 14 14"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M13.5 1H9m4.5 3H9m4.5 3H9m4.5 6H.5m13-3H.5"></path>
              <rect width="6" height="6" x=".5" y="1" rx=".5"></rect>
            </g>
          </svg>
          <p className="font-bold  text-2xl text-customBlue cursor-pointer">
            State Management
          </p>
        </div>
        {/* <div className="">
          <ul className="flex pl-5 space-x-3 justify-center mt-2 sm:flex sm:gap-x-6 ">
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
              <Link to="/project" className="nav group">
                Project
                <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/certificate" className="nav group">
                Certificate
                <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav group">
                Contact
                <span className="block max-w-0  transition-all duration-700  h-1 bg-black group-hover:max-w-full"></span>
              </Link>
            </li>
          </ul>
        </div> */}

        <div className="invisible sm:visible px-16">
          <div className="p-1 sm:p-2  flex items-center space-x-1 sm:space-x-5">
            <Link to="https://www.linkedin.com/in/esakki-m/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="text-black hover:text-sky-500 hover:bg-black hover:rounded cursor-pointer"
              >
                <path
                  fill="currentColor"
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
                ></path>
              </svg>
            </Link>
            <Link
              to="https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/React/02-react-portfolio-data-json/src/components/forms"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 32 32"
                className="text-black hover:text-white  hover:bg-black hover:rounded-full cursor-pointer"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheNavBar;
