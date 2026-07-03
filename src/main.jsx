import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/themes/md-light-deeppurple/theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "primeicons/primeicons.css";
import HomeView from "./view/Home.jsx";
import { LanguageProvider } from "./i18n/LanguageContext.jsx";
import "./index.css";
import "./assets/style/Sito.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeView />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>
);
