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
import Feed from './pages/Home/Feed'
import Projects from './pages/Home/Projects'
import Messages from './pages/Home/Messages'
import MessageId from './pages/Home/MessageId'
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
  {
    path: 'feed',
    element: <Feed />,
  },
  {
    path: 'projects',
    element: <Projects />,
  },
  {
    path: 'messages',
    element: <Messages />,
  },
  {
    path: 'messages/:id',
    element: <MessageId />,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootLayout>
      <RouterProvider router={router} />
    </RootLayout>
  </React.StrictMode>
)
