// import { Outlet } from "react-router-dom";

import TheNavBar from "./components/TheNavBar";
import ItemsWrapper from "./components/items/ItemsWrapper";

function App() {
  return (
    <div className="bg-[#92acbe] max-w-screen min-h-screen pb-5">
      <TheNavBar />
      <ItemsWrapper />
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
