import { sendRequest } from '@/lib/sendRequest'

/* @ts-ignore */
const LoaderProfiles = async ({ params }) => {
  const fetching = await sendRequest(`/api/profile/search/${params.text}`)
  const res = await fetching.json()

  return { profiles: res.profiles }
}

export default LoaderProfiles
