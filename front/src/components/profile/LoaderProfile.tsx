import { sendRequest } from '@/lib/sendRequest'

/* @ts-ignore */
const LoaderProfile = async ({ params }) => {
  const fetching = await sendRequest(`/api/profile/${params.id}`)
  const res = await fetching.json()

  return { profile: res.profile }
}

export default LoaderProfile
