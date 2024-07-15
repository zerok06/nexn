import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Init from './pages/Init'
import Home from './pages/Home/Home'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Init />,
  },
  {
    path: '/home',
    element: <Home />,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
