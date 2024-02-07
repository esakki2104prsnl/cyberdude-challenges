import { useState } from "react";
import TheNavBar from "./components/TheNavBar";
import Alert from "./pages/Alert";
import LeftList from "./pages/LeftList";
import Button from "./pages/Button";
import Nav from "./pages/Nav";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Nav />
        {/* <TheNavBar /> */}
        <div className="flex-row   sm:flex sm:pt-20 bg-body min-h-screen">
          <div className="invisible sm:visible">
            <LeftList />
          </div>
          <div className="flex-1 max-w-4xl">
            <Alert />
          </div>
          <div className="sm:w-60">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
