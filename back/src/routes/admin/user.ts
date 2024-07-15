import { PrismaClient } from '@prisma/client'
import e from 'express'
import type { Request, Response } from 'express'

const prisma = new PrismaClient()
const app = e()

const fetchUsers = async (req: Request, res: Response) => {
  try {
    const all = prisma.usuario.findMany()
    res.json({ success: true, users: all })
  } catch (error) {
    res.json({ success: false })
  }
}

app.get('/users', fetchUsers)

export default app
