import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import './index.css'
import Home from "./pages/home";
import ErrorPage from './error-page';
import Minhalista from "./pages/minhalista";

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/minhalista",
    element: <Minhalista />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

