// @ts-nocheck
import { PrismaClient } from '@prisma/client'
import e from 'express'
import { decoreToken } from '../../lib/jwt'
import { Chat, Message, Profile } from '../../lib/database'

const app = e()

/**
 *  Enviar todos los chats
 *
 *
 *
 */

// Obtener todos los chats
app.get('/chats', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']
    /* @ts-ignore */
    const { id, idProfile } = decoreToken(token)

    const chats = await Chat.find({
      $or: [{ sender: idProfile }, { receptor: idProfile }],
    })
      .populate('sender', 'nombres')
      .populate('receptor', 'nombres')
      .populate('Message')
      .exec()
    console.log(chats)
    console.log(await Message.find())

    /* @ts-ignore */
    const result = chats.map(chat => {
      return {
        id: chat._id,
        nombre:
          chat.sender._id.toString() === idProfile
            ? chat.receptor.nombres
            : chat.sender.nombres,
        sender: chat.sender,
        receptor: chat.receptor,
        /* @ts-ignore */
        messages: chat.Message.map(message => {
          const isSend = message.profile.toString() === idProfile
          return {
            message: message.message,
            role: isSend ? 'SEND' : 'RECEPTOR',
            name: message.nombre,
            createAt: message.createAt,
            idProfile: idProfile,
            idMessage: message.profile.toString(),
          }
        }),
      }
    })

    res.json({ success: true, chats: result })
  } catch (error) {
    console.error('Error en /chats:', error)
    /* @ts-ignore */
    res.json({ success: false, error: error.message })
  }
})

// Enviar mensaje
app.post('/message/:id', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']
    const chatId = req.params.id
    const { message } = req.body
    console.log(message)

    /* @ts-ignore */
    const { idProfile } = decoreToken(token)

    const profile = await Profile.findById(idProfile).exec()

    await new Message({
      chat: chatId,
      profile: idProfile,
      nombre: profile?.nombres || '',
      message,
    }).save()
    console.log(await Message.find())

    res.json({ success: true })
  } catch (error) {
    console.error('Error en /message:', error)
    /* @ts-ignore */
    res.json({ success: false, error: error.message })
  }
})

export default app
