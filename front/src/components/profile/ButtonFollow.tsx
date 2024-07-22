import { useState } from 'react'
import Button from '../Button'
import { sendRequest } from '@/lib/sendRequest'

interface ButtonFollowProps {
  idProfile: string
  isFollow: boolean
}

const ButtonFollow: React.FC<ButtonFollowProps> = ({ idProfile, isFollow }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      {!isFollow ? (
        <Button
          onClick={async () => {
            setIsLoading(true)
            const { success } = await (
              await sendRequest(`/api/follow/${idProfile}`, 'post')
            ).json()
            setIsLoading(false)
          }}
        >
          {!isLoading ? 'Follow' : 'Loading...'}
        </Button>
      ) : (
        <Button
          className="bg-transparent border-2 border-primary"
          onClick={async () => {
            setIsLoading(true)
            const { success } = await (
              await sendRequest(`/api/unfollow/${idProfile}`, 'post')
            ).json()
            setIsLoading(false)
          }}
        >
          UnFollow
        </Button>
      )}
    </>
  )
}

export default ButtonFollow
