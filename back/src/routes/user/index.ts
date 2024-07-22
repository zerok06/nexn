import { PrismaClient } from '@prisma/client'
import e, { Request, Response } from 'express'
import { decoreToken } from '../../lib/jwt'

const app = e()
const prisma = new PrismaClient()

const findOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const token = req.cookies['auth-nexn']

    /* @ts-ignore */
    const { idProfile: idUser } = decoreToken(token)
    const profile = await prisma.profile.findFirst({
      where: {
        id,
      },
    })

    const existFollow = !!(await prisma.follow.findFirst({
      where: {
        followerId: idUser,
        followingId: id,
      },
    }))

    res.json({ success: true, profile: { ...profile, existFollow } })
  } catch (error) {
    res.json({ success: false })
  }
}

const searchProfiles = async (req: Request, res: Response) => {
  try {
    const text = req.params.text
    const token = req.cookies['auth-nexn']

    /* @ts-ignore */
    const { idProfile: idUser } = decoreToken(token)
    const find = await prisma.profile.findMany({
      where: {
        OR: [
          {
            username: {
              contains: text,
            },
          },
          {
            usuario: {
              nombres: {
                contains: text,
              },
            },
          },
          {
            usuario: {
              apellidos: {
                contains: text,
              },
            },
          },
        ],
        AND: {
          id: {
            not: idUser,
          },
        },
      },
    })
    res.json({ success: true, profiles: find })
  } catch (error) {
    res.json({ success: false, error })
  }
}

const findUser = async (req: Request, res: Response) => {
  try {
    const token = req.cookies['auth-nexn']

    /* @ts-ignore */
    const { id } = decoreToken(token)

    const profile = await prisma.profile.findFirst({
      where: {
        id,
      },
    })
    res.json({ success: true, profile })
  } catch (error) {
    res.json({ success: false, error })
  }
}

app.get('/profile/:id', findOneUser)
app.get('/profile/search/:text', searchProfiles)
app.get('/profile', findUser)

export default app
