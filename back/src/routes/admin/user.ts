import { PrismaClient } from '@prisma/client'
import e from 'express'
import type { Request, Response } from 'express'
import { Usuario } from '../../lib/database'

const prisma = new PrismaClient()
const app = e()

const fetchUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await Usuario.find() // Usa Mongoose para buscar todos los usuarios
    res.json({ success: true, users: allUsers })
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    res.json({ success: false, message: 'Error al obtener usuarios' })
  }
}

app.get('/users', fetchUsers)

export default app
