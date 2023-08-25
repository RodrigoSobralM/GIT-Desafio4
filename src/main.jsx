import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./views/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);