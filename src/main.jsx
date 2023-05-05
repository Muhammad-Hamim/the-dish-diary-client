import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./Components/Providers/AuthProvider";
import { ToastContainer } from "react-toastify";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Components/Layout/Main";
import Home from "./Components/Layout/Home";
import Blog from "./Components/Pages/Blog/Blog";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import Chef from "./Components/Pages/Chef/Chef/Chef";
import Recipe from "./Components/Pages/Chef/Recipe/Recipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/chef",
        element: <Chef />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
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
