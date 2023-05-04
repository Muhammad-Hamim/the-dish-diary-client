import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Layout/Home/Home.jsx";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import Main from "./Components/Layout/Home/Main";
import AuthProvider from "./Components/Providers/AuthProvider";
import Recipe from "./Components/Layout/Main/Chef/Recipe/Recipe";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import NotFound from "./Components/ErrorPage/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
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
        path: "/recipe/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/recipe/${params.id}`);
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
