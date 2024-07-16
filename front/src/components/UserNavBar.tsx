import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

const UserNavBar = () => {
  return (
    <div className="pr-4 pl-3 py-2 bg-white/10 rounded-full flex items-center gap-2 max-w-[250px]">
      <Avatar>
        <AvatarImage src="https://github.com/shadcns.png" />
        <AvatarFallback className="bg-white/30">CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start ">
        <h3 className="text-sm  font-medium">John Doe</h3>
        <p className="text-xs text-white/70">johndoe@gmail.com</p>
      </div>
    </div>
  )
}

export default UserNavBar
