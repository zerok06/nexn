import { PrismaClient } from '@prisma/client'
import e from 'express'
import type { Request, Response } from 'express'
import { Creadenciales, Profile, Usuario } from '../../lib/database'
import { encryptPassword } from '../../lib/hash'

const prisma = new PrismaClient()
const app = e()
interface RegisterUserProps {
  username: string
  password: string
  apellidos: string
  nombres: string
}

const DEFAULT_AVATAR = 'default-avatar-url' // Define tu URL de avatar por defecto

const registerUser = async (req: Request, res: Response) => {
  try {
    console.log(req.body)

    const { password, username, apellidos, nombres }: RegisterUserProps =
      req.body

    // Hash de la contraseña antes de guardar
    const hashedPassword = await encryptPassword(password)

    // Crear nuevas credenciales
    const newCredentials = new Creadenciales({
      username,
      password: hashedPassword,
    })
    await newCredentials.save()

    // Crear nuevo usuario
    const newUser = new Usuario({
      nombres,
      apellidos,
      credenciales: newCredentials._id,
    })
    await newUser.save()

    // Crear nuevo perfil
    await new Profile({
      username,
      nombres,
      usuario: newUser._id,
      avatar: DEFAULT_AVATAR,
    }).save()

    res.json({ success: true })
  } catch (error) {
    console.error('Error en registerUser:', error)
    /* @ts-ignore */
    res.json({ success: false, error: error.message })
  }
}

app.post('/register', registerUser)

export default app
