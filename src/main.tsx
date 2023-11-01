import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import { Piadas } from "./piadas";
import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Piadas />
    },
    {
      path: "/favoritos",
      element: <Piadas />
    }
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Outlet/>
  </React.StrictMode>
);