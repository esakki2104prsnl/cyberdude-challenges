import { Outlet } from "react-router-dom";
import TheNavBar from "../components/TheNavBar";

const Guest = () => {
  return (
    <div className=" max-w-full min-h-screen pb-5 bg-sage">
      <TheNavBar />
      <Outlet />
    </div>
  );
};

export default Guest;
