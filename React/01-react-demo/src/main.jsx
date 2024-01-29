import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { Route, RouterProvider, createBrowserRouter } from "react-router-dom";

import Guest from "./layout/Guest";
import Home from "./pages/Home";
import Image from "./pages/Image";
import About from "./pages/About";
import Education from "./pages/Education";
import Achievement from "./pages/Achievement";
import Certificate from "./pages/Certificate";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: (
          <div className="sm:flex h-[600px] ">
            <Home />
            <Image />
          </div>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/achievement",
        element: <Achievement />,
      },
      {
        path: "/achievement/:dynamic",
        element: <Achievement />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <div className="bg-gradient-to-tr via-white from-blue-300 to-pink-500 h-screen">

  <RouterProvider router={router} />

  // </div>
);
