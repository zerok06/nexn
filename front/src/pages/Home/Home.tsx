import { useAuth } from '@/context/AuthProvider'
import HomeLayout from '@/layout/HomeLayout'
import { Navigate } from 'react-router-dom'

const Home = () => {
  const { isAuth } = useAuth()

  return (
    <HomeLayout>
      asd {!isAuth && <Navigate to={'/signin'} />} {isAuth + ''}
    </HomeLayout>
  )
}

export default Home
