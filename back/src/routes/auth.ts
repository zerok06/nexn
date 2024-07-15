import { PrismaClient } from '@prisma/client'
import express from 'express'
import type { Request, Response } from 'express'
import { comparePassword } from '../lib/hash'
import { encodeToken } from '../lib/jwt'

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
    res.cookie('auth-token', token)
    res.json({
      success: true,
    })
  } catch (error) {
    res.json({ success: false, error })
  }
}

const verifyAuth = async (req: Request, res: Response) => {
  try {
    const cookies = req.cookies
    res.json({ success: true, cookies })
  } catch (error) {
    res.json({ success: false })
  }
}

app.post('/signIn', signIn)
app.post('/verify', verifyAuth)

export default app
