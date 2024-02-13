import { Outlet } from "react-router-dom";
import TheNavBar from "../components/TheNavBar";

const Guest = () => {
  return (
    <div className="bg-gradient-to-tr via-gray-50 from-blue-600 to-pink-600 max-h-fit">
      <div>
        <div className="sticky z-20 left-0 top-0 right-0 shadow-md backdrop-blur-2xl">
          <TheNavBar />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Guest;
