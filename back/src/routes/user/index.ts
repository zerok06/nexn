import { PrismaClient } from '@prisma/client'
import e, { Request, Response } from 'express'
import { decoreToken } from '../../lib/jwt'

const app = e()
const prisma = new PrismaClient()

const findOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id

    const profile = await prisma.profile.findFirst({
      where: {
        usuario: {
          id,
        },
      },
    })
    res.json({ success: true, profile })
  } catch (error) {
    res.json({ success: false })
  }
}

const findUser = async (req: Request, res: Response) => {
  try {
    const token = req.cookies['auth-nexn']

    /* @ts-ignore */
    const { id } = decoreToken(token)

    const profile = await prisma.profile.findFirst({
      where: {
        usuario: {
          id,
        },
      },
    })
    res.json({ success: true, profile })
  } catch (error) {
    res.json({ success: false, error })
  }
}

app.get('/profile/:id', findOneUser)
app.get('/profile', findUser)

export default app
