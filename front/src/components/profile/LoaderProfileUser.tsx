import { sendRequest } from '@/lib/sendRequest'

const LoaderProfileUser = async () => {
  const res = await (await sendRequest('/api/profile')).json()

  return { profile: res.profile }
}

export default LoaderProfileUser
