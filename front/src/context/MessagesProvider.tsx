import { sendRequest } from '@/lib/sendRequest'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import type { Socket } from 'socket.io-client'
import { useAuth } from './AuthProvider'

interface MessagesContextProps {
  chats: Array<Chat>
  handleSelectChat: (id: string) => void
  selectChat: string
  sendMessage: (message: string, receptorId: string) => void
  notifications: Notification[]
  onlineUsers: onlineUser[]
}

export type onlineUser = {
  socketId: string
  userId: string
}

export type Chat = {
  nombre: string
  id: string
  sender: {
    id: string
    avatar: string
    username: string
    nombres: string
    likes: number
    desc: string
    usuarioId: string
  }
  receptor: {
    id: string
    avatar: string
    username: string
    nombres: string
    likes: number
    desc: string
    usuarioId: string
  }
  name?: string
  isActive?: boolean
  isWriting?: boolean
  messages: Array<Message>
}

export type Notification = {
  id: string
  title: string
  desc: string
  createAt: Date
}
export type Message = {
  message: string
  name: string
  role: 'SEND' | 'RECEPTOR'
  createAt: Date
}
const MessagesContext = createContext<MessagesContextProps>({
  chats: [],
  handleSelectChat: () => {},
  selectChat: '',
  sendMessage: () => {},
  notifications: [],
  onlineUsers: [],
})

interface MessagesProviderProps {
  children?: React.ReactNode
}

const MessagesProvider: React.FC<MessagesProviderProps> = ({ children }) => {
  const { user } = useAuth()
  const [chats, setChats] = useState<Array<Chat>>([])
  const [selectChat, setSelectChat] = useState('')
  const [socket, setSocket] = useState<Socket | null>(null)
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [onlineUsers, setOnlineUsers] = useState<onlineUser[]>([])

  const loadChats = async () => {
    /* @ts-ignore */
    const { success, chats: all } = await (
      await sendRequest('/api/chats')
    ).json()
    if (success) {
      console.log(all)
      console.log(user.id)
      setChats(all)
    }
  }

  const handleSelectChat = (id: string) => setSelectChat(id)
  const sendMessage = async (message: string, receptorId: string) => {
    await sendRequest(`/api/message/${selectChat}`, 'post', {
      message,
    })
    socket?.emit('sendMessage', {
      idChat: selectChat,
      senderId: user.id,
      receptorId: receptorId,
      message,
      name: user.nombres,
      role: 'SEND',
      createAt: new Date(),
    })

    socket?.emit('sendNotifications', {
      id: receptorId,
      title: 'Notificación',
      desc: 'Nueva Not',
      createAt: new Date(),
      receptorId,
    })

    setChats(state =>
      state.map(item => {
        if (item.id == selectChat) {
          return {
            ...item,
            messages: [
              ...item.messages,
              {
                idChat: selectChat,
                senderId: user.id,
                receptorId: receptorId,
                message,
                name: user.nombres,
                role: 'SEND',
                createAt: new Date(),
              },
            ],
          }
        }
        return item
      })
    )
  }

  useEffect(() => {
    loadChats()
    const newSocket = io(import.meta.env.VITE_HOST_MESSAGES)
    setSocket(newSocket)
    return () => {
      newSocket.disconnect()
    }
  }, [])

  useEffect(() => {
    if (socket === null) return
    socket?.emit('joinUser', { id: user.id })
  }, [socket, user])

  useEffect(() => {
    if (socket === null) return
    socket.on('onlineUser', usersList => {
      /* console.log(message) */

      setOnlineUsers(usersList)
    })
    return () => {
      socket.off('onlineUser')
    }
  }, [socket])

  useEffect(() => {
    if (socket === null) return
    socket.on('getMessage', message => {
      /* console.log(message) */

      setChats(state =>
        state.map(item => {
          if (item.id == message.idChat) {
            return { ...item, messages: [...item.messages, message] }
          }
          return item
        })
      )
    })
    return () => {
      socket.off('getMessage')
    }
  }, [socket, selectChat])
  useEffect(() => {
    if (socket === null) return
    socket.on('getNotification', req => {
      console.log(req)

      const notificationAudio = new Audio('/assets/sounds/notification.mp3')
      notificationAudio.volume = 0.5
      setNotifications(state => [...state, req])
      notificationAudio.play()
    })
    return () => {
      socket.off('getNotification')
    }
  }, [socket])

  const context = {
    chats: chats,
    handleSelectChat,
    selectChat,
    sendMessage,
    notifications,
    onlineUsers,
  }

  return (
    <MessagesContext.Provider value={context}>
      {children}
    </MessagesContext.Provider>
  )
}
export const useMessages = () => {
  return useContext(MessagesContext)
}

export default MessagesProvider
