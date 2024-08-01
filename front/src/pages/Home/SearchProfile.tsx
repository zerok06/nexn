import { useAuth } from '@/context/AuthProvider'
import HomeLayout from '@/layout/HomeLayout'
import { Link, useNavigate } from 'react-router-dom'
import { Skeleton } from '@/components/ui/skeleton'
import { useState } from 'react'
import { sendRequest } from '@/lib/sendRequest'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const SearchProfile = () => {
  const [text, setText] = useState<string>('')
  const [profiles, setProfiles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const handleText = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    setIsLoading(true)
    const fetching = await sendRequest(`/api/profile/search/${text}`)
    const res = await fetching.json()
    console.log(res)
    if (!res.success) return
    setProfiles(res.profiles)
    setIsLoading(false)
  }

  const { isAuth } = useAuth()
  const navigate = useNavigate()
  if (!isAuth) {
    navigate('/signin')
  }
  return (
    <HomeLayout>
      <div className="max-w-4xl mx-auto">
        <div>
          <input
            type="text"
            className="px-4 py-3 rounded-xl bg-white/10  w-full outline-none"
            onChange={handleText}
            defaultValue={text}
            placeholder="Buscar..."
          />
        </div>
        <div className="pt-10">
          {profiles.length > 0 ? (
            profiles.map(({ username, nombres, likes, _id }) => (
              <Link to={`/profile/${_id}`}>
                <div className="flex items-center px-2 py-2 gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcns.png" />
                    <AvatarFallback className="bg-white/30">
                      {''
                        /* @ts-ignore */
                        .concat(nombres[0])
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 flex-col flex gap-1">
                    <h3>@{username}</h3>
                    <div className="flex gap-2">
                      <p className="text-xs text-white/70">{nombres}</p>
                      {'-'}
                      <p className="text-xs text-white/70">{likes} likes</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : isLoading ? (
            <div className="flex items-center px-2 py-2 gap-2">
              <Skeleton className="w-10 h-10 rounded-full bg-white/10" />
              <div className="flex-1 flex-col flex gap-1">
                <Skeleton className="h-4 w-full rounded-full bg-white/10" />
                <div className="flex gap-2">
                  <Skeleton className="h-4 w-[100px] rounded-full bg-white/10" />
                  <Skeleton className="h-4 w-[100px] rounded-full bg-white/10" />
                </div>
              </div>
            </div>
          ) : (
            <p className="w-full text-center">No hay búsquedas recientes</p>
          )}
        </div>
      </div>
    </HomeLayout>
  )
}

export default SearchProfile
