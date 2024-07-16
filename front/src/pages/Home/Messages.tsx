import ChatButton from '@/components/Messages/ChatButton'
import { Separator } from '@/components/ui/separator'
import HomeLayout from '@/layout/HomeLayout'

const Messages = () => {
  return (
    <HomeLayout>
      <div className="flex min-h-[calc(100svh-80px-32px)]">
        <div className="min-w-[312px] bg-black py-4 px-2 rounded-tl-2xl rounded-bl-2xl">
          <div className="px-2 mb-4">
            <h2>Messages (12)</h2>
          </div>
          <Separator className="my-2 bg-white/10" />

          {[1, 2, 3, 4].map(item => (
            <ChatButton />
          ))}
        </div>
        <div className="flex-1 border-t-2 border-b-2 border-r-2 border-black"></div>
        <div className="min-w-[312px] bg-black p-4 rounded-tr-2xl rounded-br-2xl">
          asd
        </div>
      </div>
    </HomeLayout>
  )
}

export default Messages
