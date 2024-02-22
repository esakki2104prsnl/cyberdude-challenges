import AlertResults from "./AlertResults";

const Alert = () => {
  return (
    <div className=" border-l-2 px-3 pt-4 pb-8 text-gray-100">
      <nav className=" text-white mb-3">
        <ul className="flex items-center text-center space-x-2">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
              ></path>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.91 15.242q-.168 0-.289-.11q-.121-.112-.121-.294V9.162q0-.182.124-.293q.124-.111.289-.111q.04 0 .283.13l2.677 2.677q.092.093.142.2q.05.107.05.235t-.05.235q-.05.107-.142.2l-2.677 2.677q-.056.055-.129.093t-.157.037"
              ></path>
            </svg>
          </li>
          <li>
            <small>Components </small>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M10.91 15.242q-.168 0-.289-.11q-.121-.112-.121-.294V9.162q0-.182.124-.293q.124-.111.289-.111q.04 0 .283.13l2.677 2.677q.092.093.142.2q.05.107.05.235t-.05.235q-.05.107-.142.2l-2.677 2.677q-.056.055-.129.093t-.157.037"
              ></path>
            </svg>
          </li>
          <li>
            <small className="bg-gray-200 bg-opacity-10 rounded-full px-1.5 py-0.5">
              Alerts
            </small>
          </li>
        </ul>
      </nav>

      <main>
        <div>
          <h2 className="text-4xl font-semibold mb-5">Alerts </h2>
          <p className="text-xl font-sans font-thin mb-6">
            Provide contextual feedback messages for typical user actions with
            the handful of available and flexible alert messages.
          </p>
        </div>

        <div>
          <h2 className="flex text-2xl font-semibold mb-5" id="example">
            Examples{" "}
            <div className="hover:text-blue-400">
              <a
                href="#example"
                className="text-body  pl-2 hover:text-purple-600 hover:underline cursor-pointer"
              >
                #
              </a>{" "}
            </div>
          </h2>
          <p className="text-base font-sans font-thin mb-4">
            Alerts are available for any length of text, as well as an optional
            dismiss button. For proper styling, use one of the eight
            <code className="bg-pink-300 text-pink-700 rounded-lg bg-opacity-15 ml-1 px-0.5">
              variant
            </code>
            s.
          </p>
        </div>

        <AlertResults />
      </main>
    </div>
  );
};

export default Alert;
