import { useRouteError } from "react-router-dom";

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
        <span className="font-bold text-2xl">#{status}</span>
        <span className="font-semibold text-lg pl-2">{statusText}</span>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default ErrorPage;
