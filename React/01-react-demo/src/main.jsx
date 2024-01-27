import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import TheNavBar from "./components/TheNavBar";
import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
// import Logo from "./pages/Logo";
import Guest from "./layout/Guest";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    // children: [
    //   {
    //     // path: "/",
    //     // element: <Home />,
    //   },
    // {
    //   path: "/about",
    //   element: <About
    // }
    // ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <div className="bg-gradient-to-tr via-white from-blue-300 to-pink-500 h-screen">
  <div className="bg-gradient-to-tr via-gray-200 from-blue-400 to-pink-500 h-screen">
    <RouterProvider router={router} />
  </div>
  // </div>
);
