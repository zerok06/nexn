import { PrismaClient } from '@prisma/client'
import express from 'express'
import type { Request, Response } from 'express'
import { comparePassword } from '../lib/hash'
import { decoreToken, encodeToken } from '../lib/jwt'

const app = express()

interface SignInProps {
  username: string
  password: string
}
const prisma = new PrismaClient()

const signIn = async (req: Request, res: Response) => {
  try {
    const { password, username }: SignInProps = req.body
    const existUser = await prisma.usuario.findFirst({
      where: {
        credenciales: {
          username,
        },
      },
      include: {
        credenciales: true,
      },
    })
    if (!existUser) {
      new Error('Usuario no registrado')
    }

    if (!comparePassword(password, existUser?.credenciales.password!)) {
      new Error('Credenciales incorrectas')
    }

    const token = encodeToken({ id: existUser?.id, role: existUser?.role })
    res
      .cookie('auth-nexn', token, {
        httpOnly: false,
        secure: true,
        maxAge: 900000,
        path: '/',
        partitioned: true,
      })
      .json({
        success: true,
        token,
        user: existUser,
      })
  } catch (error) {
    res.json({ success: false, error })
  }
}

const verifyAuth = async (req: Request, res: Response) => {
  try {
    const token = req.cookies['auth-nexn']

    const payload = decoreToken(token)
    const user = await prisma.usuario.findUnique({
      where: {
        /* @ts-ignore */
        id: payload.id,
      },
    })
    res.json({ success: true, user })
  } catch (error) {
    res.json({ success: false, error })
  }
}

app.post('/signin', signIn)
app.post('/verify', verifyAuth)

export default app
