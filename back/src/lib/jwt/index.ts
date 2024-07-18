import { sign, verify } from 'jsonwebtoken'
import type { JwtPayload } from 'jsonwebtoken'

const SECRET_KEY = process.env.JWT_SECRET_KEY

export const encodeToken = (params: Object): string => {
  if (!SECRET_KEY || typeof SECRET_KEY == 'undefined') {
    new Error('Llave secreta no configurada "JWT_SECRET_KEY"')
  }
  const token = sign(params, SECRET_KEY!)
  return token
}

export const decoreToken = (token: string) => {
  if (!SECRET_KEY || typeof SECRET_KEY == 'undefined') {
    new Error('Llave secreta no configurada "JWT_SECRET_KEY"')
  }
  const payload = verify(token, SECRET_KEY!)
  return payload
}
