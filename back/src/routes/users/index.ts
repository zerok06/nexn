import { PrismaClient } from '@prisma/client'
import e from 'express'
import type { Request, Response } from 'express'

const prisma = new PrismaClient()
const app = e()

interface RegisterUserProps {
  username: string
  password: string
  nombres: string
  apellidos: string
}

const registerUser = async (req: Request, res: Response) => {
  try {
    const { password, username, apellidos, nombres }: RegisterUserProps =
      req.body

    const newCredentials = await prisma.creadenciales.create({
      data: {
        username,
        password,
      },
    })

    await prisma.usuario.create({
      data: {
        apellidos,
        nombres,
        role: 'user',
        creadencialesId: newCredentials.id,
      },
    })

    res.json({ success: true })
  } catch (error) {
    res.json({ success: false })
  }
}

app.post('/register', registerUser)

export default app
