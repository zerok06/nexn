import { PrismaClient } from '@prisma/client'
import e from 'express'
import { decoreToken } from '../../lib/jwt'
import { Chat, Follow } from '../../lib/database'

const app = e()
const prisma = new PrismaClient()

app.post('/follow/:id', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']
    /* @ts-ignore */
    const { idProfile: follower } = decoreToken(token)
    const following = req.params.id

    // Crear nuevo registro de seguimiento
    await Follow.create({
      follower: follower,
      following: following,
    })

    // Crear nuevo chat entre el seguidor y el seguido
    await Chat.create({
      sender: follower,
      receptor: following,
    })

    res.json({ success: true })
  } catch (error) {
    console.error('Error en /follow:', error)
    res.json({ success: false, error })
  }
})

// Unfollow
app.post('/unfollow/:id', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']
    /* @ts-ignore */
    const { idProfile: follower } = decoreToken(token)
    const following = req.params.id

    // Buscar el seguimiento existente
    const followData = await Follow.findOne({
      $or: [
        { follower: follower, following: following },
        { follower: following, following: follower },
      ],
    }).exec()

    if (!followData) {
      throw new Error('No existe follow')
    }

    // Eliminar el registro de seguimiento
    await Follow.deleteOne({ _id: followData._id }).exec()

    // Buscar y eliminar el chat asociado
    const chat = await Chat.findOne({
      sender: follower,
      receptor: following,
    }).exec()

    if (chat) {
      await Chat.deleteOne({ _id: chat._id }).exec()
    }

    res.json({ success: true })
  } catch (error) {
    console.error('Error en /unfollow:', error)
    res.json({ success: false, error })
  }
})

// Count Followers
app.post('/followers/:id', async (req, res) => {
  try {
    const id = req.params.id

    // Contar el número de seguidores
    const count = await Follow.countDocuments({ following: id }).exec()

    res.json({ success: true, count })
  } catch (error) {
    console.error('Error en /followers:', error)
    res.json({ success: false })
  }
})

export default app
