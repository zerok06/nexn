import { PrismaClient } from '@prisma/client'
import e from 'express'
import { decoreToken } from '../../lib/jwt'

const app = e()
const prisma = new PrismaClient()

/**
 *  Enviar todos los chats
 *
 *
 *
 */

app.get('/chats', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']
    /* @ts-ignore */
    const { id, idProfile } = decoreToken(token)
    console.log(id)

    const chats = await prisma.chat.findMany({
      where: {
        OR: [
          {
            profileReceptorId: idProfile,
          },
          {
            profileSenderId: idProfile,
          },
        ],
      },
      include: {
        Message: true,
        receptor: true,
        sender: true,
      },
    })

    const tmp = chats.map(item => {
      const itemTmp = {
        id: item.id,
        nombre:
          item.sender.id == idProfile
            ? item.receptor.nombres
            : item.sender.nombres,
        sender: item.sender,
        receptor: item.receptor,
        messages: item.Message.map(element => {
          const isSend = element.profileId == idProfile
          return {
            message: element.message,
            role: isSend ? 'SEND' : 'RECEPTOR',
            name: element.nombre,
            createAt: element.createAt,
            idProfile: idProfile,
            idMessage: element.profileId,
          }
        }),
      }
      return itemTmp
    })

    res.json({ success: true, chats: tmp })
  } catch (error) {
    res.json({ success: false, error })
  }
})

/* Enviar mensaje */
/**
 * @params id = id del chat
 */
app.post('/message/:id', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']
    const chatId = req.params.id
    const body = req.body
    /* @ts-ignore */
    const { idProfile } = decoreToken(token)

    const profile = await prisma.profile.findUnique({
      where: {
        id: idProfile,
      },
    })

    await prisma.message.create({
      data: {
        chatId,
        profileId: idProfile,
        nombre: profile?.nombres!,
        message: body.message,
      },
    })
    res.json({ success: true })
  } catch (error) {
    res.json({ success: false, error })
  }
})

export default app
