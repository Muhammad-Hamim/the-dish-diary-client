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
import NotFound from './Components/ErrorPage/NotFound'
import Contact from "./Components/Pages/Contact/Contact";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound/>,
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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/recipe/:id",
        element: <PrivateRoute><Recipe></Recipe></PrivateRoute>,
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
