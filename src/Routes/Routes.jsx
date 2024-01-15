import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import CountryPage from "../Pages/CountryPage/CountryPage";
import CategoryPage from "../Pages/CategoryPage/CategoryPage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SingleBlogPage from "../Pages/SingleBlogPage/SingleBlogPage";
import SingleCategoryPage from "../Pages/SingleCategoryPage/SingleCategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/:id",
        element: <SingleBlogPage></SingleBlogPage>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
      {
        path: "/countries",
        element: <CountryPage></CountryPage>,
      },
      {
        path: "/categories",
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "/categories/:category",
        element: <SingleCategoryPage></SingleCategoryPage>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.category}`),
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
    ],
  },
]);
