import ChatButton from '@/components/Messages/ChatButton'
import FormSendMessage from '@/components/Messages/FormSendMessage'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/context/AuthProvider'
import { useMessages } from '@/context/MessagesProvider'
import HomeLayout from '@/layout/HomeLayout'
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import TimeFormat from '@/components/TimeFormat'

const Messages = () => {
  const { isAuth, user } = useAuth()

  const { chats, handleSelectChat, selectChat, onlineUsers } = useMessages()

  const navigate = useNavigate()
  if (!isAuth) {
    navigate('/signin')
  }
  return (
    <HomeLayout>
      <div className="flex min-h-[calc(100svh-80px-32px)]">
        <div className="min-w-[312px] bg-black py-4 px-2 rounded-tl-2xl rounded-bl-2xl">
          <div className="px-2 mb-4">
            <h2>Messages (12)</h2>
          </div>
          <Separator className="my-2 bg-white/10" />

          {chats.map(e => (
            <ChatButton key={e.id} {...{ chat: e, handle: handleSelectChat }} />
          ))}
        </div>

        <div className="flex-1 border-t-2 border-b-2 border-r-2 border-black relative flex flex-col z-0">
          {chats.find(item => item.id === selectChat) && (
            <>
              <div className="h-20 bg-black flex px-4 items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/zerok06.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex-1 flex flex-col gap-1">
                  <h4 className="text-base font-medium leading-none">
                    {chats.find(item => item.id === selectChat)?.nombre}
                  </h4>
                  {onlineUsers.some(
                    item =>
                      item.userId ===
                      chats.find(item => item.id === selectChat)?.id
                  ) && <p className="text-white/70 text-xs">En linea</p>}
                </div>
              </div>
              <div className="flex-1 bg-transparent pt-4 px-4  pb-12 overflow-y-scroll max-h-[calc(100svh-80px-80px)]">
                <div className=" flex flex-col gap-8 py-12">
                  {chats
                    .find(item => item.id === selectChat)
                    ?.messages.map(element =>
                      element.role != 'SEND' ? (
                        <div className=" flex flex-col items-start">
                          <div className="flex gap-2 mb-1">
                            <p className="text-xs font-medium text-white">
                              {element.name}
                            </p>
                            <p className="text-xs font-medium text-white/70">
                              <TimeFormat date={new Date(element.createAt)} />
                            </p>
                          </div>
                          <div className="bg-white/30 px-4 py-3 rounded-xl max-w-[70%] text-sm">
                            {element.message}
                          </div>
                        </div>
                      ) : (
                        <div className=" flex flex-col items-end">
                          <div className="flex gap-2 mb-1">
                            <p className="text-xs font-medium text-white">
                              {element.name}
                            </p>
                            <p className="text-xs font-medium text-white/70">
                              <TimeFormat date={new Date(element.createAt)} />
                            </p>
                          </div>
                          <div className="bg-primary px-4 py-2 rounded-xl max-w-[70%] text-sm ">
                            {element.message}
                          </div>
                        </div>
                      )
                    )}
                  {/* <div className=" flex flex-col items-end">
                    <div className="flex gap-2 mb-1">
                      <p className="text-xs font-medium text-white">John Doe</p>
                      <p className="text-xs font-medium text-white/70">10:30</p>
                    </div>
                    <div className="bg-white/30 px-4 py-2 rounded-xl max-w-[70%] text-sm ">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Architecto animi ex reprehenderit labore? Mollitia ipsa
                      molestias sapiente, earum omnis officiis fugiat a rem
                      cumque velit magni, architecto, laborum quaerat. Eius,
                      ducimus quisquam laboriosam ab minus molestiae voluptates
                      ratione omnis quasi distinctio sunt nobis libero dolorem
                      beatae cupiditate deleniti asperiores laborum at error,
                      aliquid repellendus excepturi quo exercitationem dolorum.
                      Quisquam tempora animi sit eum, reiciendis ut fuga, illum
                      natus ratione sed vero quam sunt voluptatem repellat
                      accusamus quos rem! Rem cupiditate error a consectetur
                      tempore non magnam accusantium vitae consequuntur commodi
                      adipisci reprehenderit quia hic laudantium maiores aperiam
                      qui incidunt iste, esse tempora deserunt blanditiis
                      aliquam. Nesciunt quo aut itaque? Quod magnam blanditiis
                      omnis, id provident vitae debitis?
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="bg-transparent  absolute bottom-8 left-0 z-10 w-full px-4">
                <FormSendMessage
                  idReceptor={
                    chats.find(item => item.id === selectChat)?.receptor.id ==
                    user.id
                      ? chats.find(item => item.id === selectChat)?.sender.id!
                      : chats.find(item => item.id === selectChat)?.receptor.id!
                  }
                />
              </div>
            </>
          )}
        </div>

        <div className="min-w-[312px] bg-black p-4 rounded-tr-2xl rounded-br-2xl">
          <div>
            <h3 className="text-lg font-medium">Profile</h3>
          </div>
          <div className="flex flex-col items-center gap-2 py-4">
            <img
              src="https://github.com/zerok06.png"
              className="rounded-full h-20 w-20"
              alt=""
            />
            <div>
              <h4 className="text-sm font-medium">John Doe</h4>
              <p className="text-xs text-white/70">@johndoe</p>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Messages
