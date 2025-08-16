import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);
