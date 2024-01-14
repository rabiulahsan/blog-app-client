import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import CountryPage from "../Pages/CountryPage/CountryPage";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import BlogPage from "../Pages/BlogPage/BlogPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/countries",
        element: <CountryPage></CountryPage>,
      },
      {
        path: "/categories",
        element: <CategoryPage></CategoryPage>,
      },
    ],
  },
]);
