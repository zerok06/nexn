/* interface ProfileProps {
  params: { id: string }
} */

import { useAuth } from '@/context/AuthProvider'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Profile = () => {
  const data = useLoaderData()
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  if (!isAuth) {
    navigate('/signin')
  }
  return <div>{JSON.stringify(data)}</div>
}

export default Profile
