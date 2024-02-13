import ReactDOM from "react-dom/client";

import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Guest from "./layout/Guest";
import Home from "./pages/Home";
import Image from "./pages/Image";
import About from "./pages/About";
import Education from "./pages/Education";
import Certificate from "./pages/Certificate";
import ErrorPage from "./pages/ErrorPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Guest />,
    children: [
      {
        path: "/",
        element: (
          <div className="sm:flex h-[617px] sm:h-[599px] ">
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
        path: "/project",
        element: <ProjectPage />,
      },
      {
        path: "/certificate",
        element: <Certificate />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
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
