import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Layout/Home/Home.jsx'
import Login from './Components/Login/Login/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: ([
      {
        path: '/login',
        element: <Login></Login>
      }
    ])
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
