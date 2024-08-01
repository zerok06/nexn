import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import type { Chat } from '@/context/MessagesProvider'
import TimeFormat from '../TimeFormat'

interface ChatButton {
  chat: Chat
  handle: (_id: string) => void
}

const ChatButton: React.FC<ChatButton> = ({
  chat: { nombre, messages, _id },
  handle,
}) => {
  return (
    <button
      onClick={() => handle(_id)}
      className="w-full flex gap-3 items-center py-3 transition-colors duration-300 hover:bg-white/5 px-3 rounded-md outline-none"
    >
      <Avatar>
        <AvatarImage src="https://github.com/zerok06.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <h4 className="font-medium">{nombre}</h4>
          <p className="text-xs text-white/70">
            <TimeFormat
              date={
                messages.length > 0
                  ? new Date(messages[messages.length - 1]?.createAt)
                  : new Date()
              }
            />
          </p>
        </div>
        <p className="text-sm text-white/70 text-start">
          {messages.length > 0
            ? messages[messages.length - 1].message.slice(0, 20)
            : 'Saluda a tu amigo'}
        </p>
      </div>
    </button>
  )
}

export default ChatButton
