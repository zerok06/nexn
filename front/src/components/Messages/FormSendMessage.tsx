import { useMessages } from '@/context/MessagesProvider'
import { Send } from 'lucide-react'
import { useState } from 'react'

interface FormSendMessageProps {
  idReceptor: string
}

const FormSendMessage: React.FC<FormSendMessageProps> = ({ idReceptor }) => {
  const [message, setMessage] = useState('')
  const { sendMessage } = useMessages()
  /* Fix */
  /* @ts-ignore */
  const handleMessage = e => {
    setMessage(e.target.value)
  }

  return (
    <div className=" h-[50px] rounded-2xl bg-white/20 flex">
      <input
        type="text"
        className="flex-1 bg-transparent outline-none px-4"
        placeholder="Escriba un mensaje..."
        onChange={handleMessage}
        defaultValue={message}
      />
      <div className="flex items-center pr-2">
        <button
          className="bg-primary h-10 w-10 rounded-2xl flex justify-center items-center"
          onClick={() => sendMessage(message, idReceptor)}
        >
          <Send color="#fff" />
        </button>
      </div>
    </div>
  )
}

export default FormSendMessage
