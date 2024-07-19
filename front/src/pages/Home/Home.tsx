import { useAuth } from '@/context/AuthProvider'
import HomeLayout from '@/layout/HomeLayout'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  if (!isAuth) {
    navigate('/signin')
  }

  return <HomeLayout>asd</HomeLayout>
}

export default Home
