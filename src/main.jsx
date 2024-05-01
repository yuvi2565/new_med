import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Home } from "./components/Home.jsx";
import MedicalForm from "./components/MedicalForm.jsx";
import Team from "./components/Team.jsx";
import Services from "./components/Services.jsx";
import Auth from "./components/Auth.jsx";
import { Result } from "./components/Result.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "form",
        element: <MedicalForm />,
      },

      {
        path: "team",
        element: <Team />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "results",
        element: <Result />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
