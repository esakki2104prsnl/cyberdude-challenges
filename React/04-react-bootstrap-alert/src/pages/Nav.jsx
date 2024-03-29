import { Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import ListCollapse from "../components/ListCollapse";
import LeftList from "./LeftList";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap sm:flex-grow fixed bg-header z-10 left-0 top-0 right-0">
      <div className="flex items-center flex-shrink text-white sm:mr-6">
        <div className=" flex items-center justify-between text-gray-200 font-bold p-2">
          <div className="flex items-center space-x-2 ">
            <img
              src="https://react-bootstrap.netlify.app/img/logo.svg "
              alt="react-bootstrap-logo"
              className="w-14 h-14 bg-transparent p-2"
            />
            <a href="#" className="text-sm sm:text-xl hover:text-white ">
              React Bootstrap
            </a>
          </div>
          <div className="flex items-center sm:space-x-5 sm:pl-5 text-md">
            <a href="#" className="text-sm sm:text-xl hover:text-white">
              Getting Started
            </a>
            <a href="#" className="text-sm sm:text-xl  hover:text-white">
              Componenets
            </a>
          </div>
        </div>

        <div className="p-1 sm:p-5 sm:mr-8 flex items-center space-x-1 sm:space-x-5">
          <a href="https://www.linkedin.com/in/esakki-m/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="text-gray-50 hover:text-sky-500 hover:bg-black cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"
              ></path>
            </svg>
          </a>
          <a
            href="https://github.com/esakki2104prsnl/cyberdude-challenges/tree/master/React/04-react-bootstrap-alert"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 32 32"
              className="text-gray-50 hover:text-white  hover:bg-black hover:rounded-full cursor-pointer"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2"
              ></path>
            </svg>
          </a>
        </div>

        <div className="p-2 sm:invisible">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            {isOpen ? (
              <XIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="w-full block flex-grow sm:flex sm:items-center sm:w-auto"
          >
            <LeftList />
            {/* <div className="text-sm sm:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Link 1
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Link 2
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white"
              >
                Link 3
              </a>
            </div> */}
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Nav;
