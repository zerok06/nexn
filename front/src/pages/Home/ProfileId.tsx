/* interface ProfileProps {
  params: { id: string }
} */

import ButtonFollow from '@/components/profile/ButtonFollow'
import { useAuth } from '@/context/AuthProvider'
import HomeLayout from '@/layout/HomeLayout'
import { useLoaderData, useNavigate } from 'react-router-dom'

const Profile = () => {
  const data = useLoaderData()
  const { isAuth } = useAuth()
  const navigate = useNavigate()
  if (!isAuth) {
    navigate('/signin')
  }
  return (
    <HomeLayout>
      <div className="banner rounded-2xl h-[200px]" />
      <div className="relative">
        <div className="py-6 flex flex-col gap-4 items-start">
          <div className="flex flex-row gap-6">
            <img
              src="https://github.com/shadcn.png"
              className="h-20 w-20 rounded-full"
              alt=""
            />
            <div>
              <div>
                <h3 className="font-medium text-lg">
                  {/* @ts-ignore */}
                  {data?.profile?.nombres}
                </h3>
                <p className="text-white/70 text-sm">@zerok06</p>
              </div>
              <div>
                <ButtonFollow
                  /* @ts-ignore */
                  idProfile={data?.profile?._id}
                  /* @ts-ignore */
                  isFollow={data?.profile?.existFollow}
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <div className="text-sm flex gap-1 items-center text-white/70">
                <span className="font-bold text-base text-white">200</span>
                Siguiendo
              </div>
              <div className="text-sm flex gap-1 items-center text-white/70">
                <span className="font-bold text-base text-white">200</span>
                Seguidores
              </div>
              <div className="text-sm flex gap-1 items-center text-white/70">
                <span className="font-bold text-base text-white">200</span>
                Me gustas
              </div>
            </div>
            <p>{}</p>
          </div>
        </div>
      </div>
      {JSON.stringify(data)}
    </HomeLayout>
  )
}

export default Profile
