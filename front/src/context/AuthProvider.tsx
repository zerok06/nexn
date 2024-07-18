import { sendRequest } from '@/lib/sendRequest'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext({
  isAuth: true,
  /* @ts-ignore */
  setToken: (user: UserProps) => {},
  user: {
    nombres: '',
    apellidos: '',
    id: '',
  },
})

interface AuthProviderProps {
  children?: React.ReactNode
}

interface UserProps {
  nombres: string
  apellidos: string
  id: string
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(true)
  const [user, setUser] = useState<UserProps>({
    nombres: '',
    apellidos: '',
    id: '',
  })

  const setToken = (user: UserProps) => {
    setIsAuth(true)
    setUser(user)
  }

  const verifyAuth = async () => {
    const fetching = await sendRequest(
      'http://localhost:3001/api/verify',
      'post'
    )
    const res = await fetching.json()
    if (res.success) {
      setUser({
        apellidos: res.user.apellidos,
        id: res.user.id,
        nombres: res.user.nombres,
      })
      setIsAuth(true)
      console.log(res.user)
    } else {
      setIsAuth(false)
    }
  }

  useEffect(() => {
    verifyAuth()
  }, [])

  const contextValue = useMemo(
    () => ({
      isAuth,
      setToken,
      user,
    }),
    [isAuth, user]
  )

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthProvider
