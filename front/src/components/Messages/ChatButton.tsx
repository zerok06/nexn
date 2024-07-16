import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const ChatButton = () => {
  return (
    <div className="w-full flex gap-3 items-center py-3 transition-colors duration-300 hover:bg-white/5 px-3 rounded-md">
      <Avatar>
        <AvatarImage src="https://github.com/zerok06.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-medium">John Doe</h4>
          <p className="text-xs text-white/70">10:15</p>
        </div>
        <p className="text-sm text-white/70">Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default ChatButton
