import { sendRequest } from '@/lib/sendRequest'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext({
  isAuth: true,
  /* @ts-ignore */
  setToken: (user: UserProps) => {},
  user: {
    nombres: '',
    apellidos: '',
    username: '',
    _id: '',
  },
})

interface AuthProviderProps {
  children?: React.ReactNode
}

interface UserProps {
  nombres: string
  apellidos: string
  username: string
  _id: string
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(true)
  const [user, setUser] = useState<UserProps>({
    nombres: '',
    apellidos: '',
    username: '',
    _id: '',
  })

  const setToken = (user: UserProps) => {
    setIsAuth(true)
    setUser(user)
  }

  const verifyAuth = async () => {
    const fetching = await sendRequest('/api/verify', 'post')
    const res = await fetching.json()
    if (res.success) {
      setUser({
        apellidos: res.user.usuario.apellidos,
        _id: res.user._id,
        nombres: res.user.nombres,
        username: res.user.username,
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
