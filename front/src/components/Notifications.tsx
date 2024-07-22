import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useMessages } from '@/context/MessagesProvider'
import { Bell } from 'lucide-react'

const Notifications = () => {
  const { notifications } = useMessages()

  return (
    <Popover>
      <PopoverTrigger>
        <button className="h-10 w-10 flex justify-center items-center rounded-full hover:bg-black relative">
          {notifications.length > 0 && (
            <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-primary"></div>
          )}
          <Bell size={20} />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="bg-black border-white/10 rounded-2xl text-white"
      >
        {notifications.length == 0 && <h4>Sin Notificaciones</h4>}
        {notifications.map(item => (
          <div>{JSON.stringify(item)}</div>
        ))}
      </PopoverContent>
    </Popover>
  )
}

export default Notifications
