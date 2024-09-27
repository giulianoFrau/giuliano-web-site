import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "primeicons/primeicons.css";
import HomeView from "./view/Home.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
