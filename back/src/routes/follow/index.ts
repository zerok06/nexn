import { PrismaClient } from '@prisma/client'
import e from 'express'
import { decoreToken } from '../../lib/jwt'

const app = e()
const prisma = new PrismaClient()

/* Follow */
/**
 *
 * @params id = id del perfil a seguir
 */
app.post('/follow/:id', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']

    /* @ts-ignore */
    const { idProfile: follower } = decoreToken(token)

    const following = req.params.id

    await prisma.follow.create({
      data: {
        followerId: follower,
        followingId: following,
      },
    })

    await prisma.chat.create({
      data: {
        profileSenderId: follower,
        profileReceptorId: following,
      },
    })

    res.json({ success: true })
  } catch (error) {
    res.json({ success: false, error })
  }
})

/* UnFollow */

/**
 * @params id = id del perfil a dejar de seguir
 */

app.post('/unfollow/:id', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']
    /* @ts-ignore */
    const { idProfile: follower } = decoreToken(token)
    const following = req.params.id
    const followData = await prisma.follow.findFirst({
      where: {
        OR: [
          {
            AND: [
              {
                followerId: follower,
              },
              {
                followingId: following,
              },
            ],
          },
          {
            AND: [
              {
                followerId: following,
              },
              {
                followingId: follower,
              },
            ],
          },
        ],
      },
    })
    if (!followData) {
      new Error('No existe follow')
    }
    await prisma.follow.delete({
      where: {
        id: followData?.id,
      },
    })
    const chat = await prisma.chat.findFirst({
      where: {
        profileSenderId: follower,
        profileReceptorId: following,
      },
    })
    console.log(3)
    await prisma.chat.delete({
      where: {
        id: chat?.id,
      },
    })
    res.json({ success: true })
  } catch (error) {
    res.json({ success: false, error })
  }
})

app.post('/followers/:id', async (req, res) => {
  try {
    const id = req.params.id

    const count = await prisma.follow.count({
      where: {
        followingId: id,
      },
    })
    res.json({ success: true, count })
  } catch (error) {
    res.json({ success: false })
  }
})

export default app
