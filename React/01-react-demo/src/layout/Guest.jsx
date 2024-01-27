import { Outlet } from "react-router-dom";
import TheNavBar from "../components/TheNavBar";
import Home from "../pages/Home";
import Image from "../pages/Image";

const Guest = () => {
  return (
    <div>
      <TheNavBar />
      <div className="flex">
        <Home />
        <Image />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Guest;
