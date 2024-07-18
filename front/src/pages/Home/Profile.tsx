import Button from '@/components/Button'
import HomeLayout from '@/layout/HomeLayout'
import { sendRequest } from '@/lib/sendRequest'
import { useEffect } from 'react'

const Profile = () => {
  useEffect(() => {
    ;(async () => {
      const fetching = await sendRequest(`http://localhost:3000/api/profile`)
      const res = await fetching.json()

      console.log(res)
    })()
  }, [])

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
                <h3 className="font-medium text-lg">John Doe</h3>
                <p className="text-white/70 text-sm">@zerok06</p>
              </div>
              <div>
                <Button>Seguir</Button>
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
    </HomeLayout>
  )
}

export default Profile
