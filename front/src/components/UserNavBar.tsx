import { useAuth } from '@/context/AuthProvider'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const UserNavBar = () => {
  const {
    user: { nombres, apellidos, username },
  } = useAuth()

  return (
    <a
      href="/profile"
      className="pr-4 pl-3 py-2 bg-white/10 rounded-full flex items-center gap-2 max-w-[250px]"
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcns.png" />
        <AvatarFallback className="bg-white/30">
          {''.concat(nombres[0], apellidos[0]).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start ">
        <h3 className="text-sm  font-medium">{nombres}</h3>
        <p className="text-xs text-white/70">@{username}</p>
      </div>
    </a>
  )
}

export default UserNavBar
