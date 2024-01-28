import { Outlet } from "react-router-dom";
import TheNavBar from "../components/TheNavBar";


const Guest = () => {
  return (
    <div className="bg-gradient-to-tr via-gray-50 from-blue-600 to-pink-600 max-h-full">
      <div>
      <TheNavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Guest;
