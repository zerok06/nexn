import { PrismaClient } from '@prisma/client'
import e, { Request, Response } from 'express'
import { decoreToken } from '../../lib/jwt'
import { Follow, Profile } from '../../lib/database'

const app = e()
const prisma = new PrismaClient()

const findOneUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const token = req.cookies['auth-nexn']

    /* @ts-ignore */
    const { idProfile: idUser } = decoreToken(token)
    const profile = await Profile.findById(id).exec()

    if (!profile) {
      return res.json({ success: false, message: 'Profile not found' })
    }

    const existFollow = !!(await Follow.findOne({
      follower: idUser,
      following: id,
    }).exec())

    res.json({ success: true, profile: { ...profile.toObject(), existFollow } })
  } catch (error) {
    console.error('Error en findOneUser:', error)
    res.json({ success: false })
  }
}

const searchProfiles = async (req: Request, res: Response) => {
  try {
    const text = req.params.text
    const token = req.cookies['auth-nexn']
    /* @ts-ignore */
    const { idProfile: idUser } = decoreToken(token)
    const profiles = await Profile.find({
      $or: [
        { username: { $regex: text, $options: 'i' } },
        { 'usuario.nombres': { $regex: text, $options: 'i' } },
        { 'usuario.apellidos': { $regex: text, $options: 'i' } },
      ],
      _id: { $ne: idUser },
    }).exec()

    res.json({ success: true, profiles })
  } catch (error) {
    console.error('Error en searchProfiles:', error)
    res.json({ success: false, error })
  }
}

const findUser = async (req: Request, res: Response) => {
  try {
    const token = req.cookies['auth-nexn']

    /* @ts-ignore */
    const { id } = decoreToken(token)

    const profile = await Profile.findById(id).exec()
    res.json({ success: true, profile })
  } catch (error) {
    console.error('Error en findUser:', error)
    res.json({ success: false, error })
  }
}

app.get('/profile/:id', findOneUser)
app.get('/profile/search/:text', searchProfiles)
app.get('/profile', findUser)

export default app
