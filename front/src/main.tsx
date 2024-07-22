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
import AuthProvider from './context/AuthProvider'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NoFoundPage from './pages/NoFoundPage'
import LoaderProfile from './components/profile/LoaderProfile'
import LoaderProfileUser from './components/profile/LoaderProfileUser'
import SearchProfile from './pages/Home/SearchProfile'
import LoaderProfiles from './components/profile/LoaderProfiles'
import MessagesProvider from './context/MessagesProvider'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Init />,
    errorElement: <NoFoundPage />,
  },
  {
    path: 'home',
    element: <Home />,
  },
  {
    path: 'profile',
    element: <Profile />,
    loader: LoaderProfileUser,
  },
  {
    path: 'profile/:id',
    element: <ProfileId />,
    loader: LoaderProfile,
  },
  {
    path: 'profile/search/',
    element: <SearchProfile />,
    /* loader: LoaderProfiles, */
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

  {
    path: 'signin',
    element: <SignIn />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootLayout>
      <AuthProvider>
        <MessagesProvider>
          <RouterProvider router={router} />
        </MessagesProvider>
      </AuthProvider>
    </RootLayout>
  </React.StrictMode>
)
