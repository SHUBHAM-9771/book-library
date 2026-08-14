import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singlebooks from "./pages/Singlebooks";
import Allbooks from "./pages/Allbooks";
import Createbooks from "./pages/Createbooks";
import Navbar from "./components/Navbar";
const App = () => {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <Createbooks />,
        },
        {
          path: "/all-books",
          element: <Allbooks />,
        },
        {
          path: "/single-books",
          element: <Singlebooks />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routers} />;
};

export default App;
