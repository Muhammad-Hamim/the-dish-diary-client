import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Layout/Home/Home.jsx";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import Main from "./Components/Layout/Home/Main";
import AuthProvider from "./Components/Providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./Components/ErrorPage/NotFound";
import Recipe from "./Components/Layout/Main/Chef/Recipe/Recipe";
import SingleChef from "./Components/Layout/Main/Chef/SingleChef";
import Chef from "./Components/Layout/Main/Chef/Chef";
import Blog from "./Components/Layout/Main/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/recipe",
        element: <Chef></Chef>,
      },
      {
        path: "/recipe/:id",
        element: <Recipe></Recipe>,
        loader: ({ params }) => {
          return fetch(
            `https://the-dish-diary-server.vercel.app/recipe/${params.id}`
          );
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastContainer></ToastContainer>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
