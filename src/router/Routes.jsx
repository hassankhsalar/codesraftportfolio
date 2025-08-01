import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
import Error from "../Pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/contact',
            element: <Contact/>
        },
        {
            path: '/gallery',
            element: <Gallery/>
        }
    ]
  },
  {
    path: '*',
    element: <Error/>
  }
]);