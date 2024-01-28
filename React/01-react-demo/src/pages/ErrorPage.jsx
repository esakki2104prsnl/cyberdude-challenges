import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const {
    status,
    statusText,
    error: { message },
  } = error;
  return (
    <div className="bg-black h-screen  mx-auto py-60">
      <div className=" bg-red-500 max-w-xl mx-auto p-10 text-center shadow-md shadow-white rounded-md ">
        <span className="font-bold text-2xl block">{"Oops :("} </span>
        <span className="font-bold text-2xl">#{status}</span>
        <span className="font-semibold text-lg pl-2">{statusText}</span>
        <div className="mb-3">{message}</div>
        <Link className="flex  items-center text-white text-center hover:underline ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H21v2H6.8l3.6 3.6z"
            />
          </svg>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
