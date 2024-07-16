import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Init from './pages/Init'
import Home from './pages/Home/Home'
import RootLayout from './layout/RootLayout'
import ProfileId from './pages/Home/ProfileId'
import Profile from './pages/Home/Profile'
import Videos from './pages/Home/Videos'
import VideoId from './pages/Home/VideoId'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Init />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'profile',
    element: <Profile />,
  },
  {
    path: 'profile/:id',
    element: <ProfileId />,
  },
  {
    path: 'videos',
    element: <Videos />,
  },
  {
    path: 'video/:id',
    element: <VideoId />,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </React.StrictMode>
)
