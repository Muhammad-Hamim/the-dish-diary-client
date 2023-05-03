import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Layout/Home/Home.jsx";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import Main from "./Components/Layout/Home/Main";
import { AuthContext } from "../../../../Firebase/firebase-auth-recap/src/providers/AuthProviders";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContext.Provider>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider>
  </React.StrictMode>
);
