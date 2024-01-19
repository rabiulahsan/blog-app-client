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
import SingleCountryPage from "../Pages/SingleCountryPage/SingleCountryPage";
import PrivateRoute from "./PrivateRoute";
import FavoritesPage from "../Pages/FavoritesPage/FavoritesPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import Write from "../Pages/Write/Write";
import MyBlogPage from "../Pages/MyBlogPage/MyBlogPage";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";

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
        path: "/search/:value",
        element: <SearchPage></SearchPage>,
      },
      {
        path: "/countries",
        element: <CountryPage></CountryPage>,
      },
      {
        path: "/countries/:country",
        element: <SingleCountryPage></SingleCountryPage>,
      },

      {
        path: "/categories",
        element: <CategoryPage></CategoryPage>,
      },
      {
        path: "/categories/:category",
        element: <SingleCategoryPage></SingleCategoryPage>,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/favourites",
        element: (
          <PrivateRoute>
            <FavoritesPage></FavoritesPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/write",
        element: (
          <PrivateRoute>
            <Write></Write>
          </PrivateRoute>
        ),
      },
      {
        path: "/myblogs",
        element: (
          <PrivateRoute>
            <MyBlogPage></MyBlogPage>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdatePage></UpdatePage>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
