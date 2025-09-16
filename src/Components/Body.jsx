import React from "react";
import Browse from "./Browse.jsx";
import Login from "./login.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
