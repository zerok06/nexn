import { PrismaClient } from '@prisma/client'
import express from 'express'
import type { Request, Response } from 'express'
import { comparePassword } from '../lib/hash'
import { decoreToken, encodeToken } from '../lib/jwt'
import { Creadenciales, Profile, Usuario } from '../lib/database'

const app = express()

interface SignInProps {
  username: string
  password: string
}
const prisma = new PrismaClient()

// Sign In
app.post('/signin', async (req, res) => {
  try {
    const { password, username } = req.body

    // Buscar credenciales por nombre de usuario
    const creadenciales = await Creadenciales.findOne({ username }).exec()

    if (!creadenciales) {
      throw new Error('Usuario no registrado')
    }

    // Buscar usuario asociado con las credenciales
    const usuario = await Usuario.findOne({ credenciales: creadenciales._id })
      .populate('credenciales')
      .exec()

    if (!usuario) {
      throw new Error('Usuario no registrado')
    }

    // Comparar contraseñas
    if (!comparePassword(password, creadenciales.password)) {
      throw new Error('Credenciales incorrectas')
    }

    // Buscar perfil asociado con el usuario
    const profile = await Profile.findOne({ usuario: usuario._id }).exec()

    // Generar token
    const token = encodeToken({
      id: usuario._id,
      role: usuario.role,
      idProfile: profile ? profile._id : null,
    })

    res
      .cookie('auth-nexn', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 900000, // 15 minutos
        path: '/',
      })
      .json({
        success: true,
        token,
        user: usuario,
      })
  } catch (error) {
    console.error('Error en /signin:', error)
    /* @ts-ignore */
    res.json({ success: false, error: error.message })
  }
})

// Verify Auth
app.post('/verify', async (req, res) => {
  try {
    const token = req.cookies['auth-nexn']

    if (!token) {
      throw new Error('Token no proporcionado')
    }

    const payload = decoreToken(token)

    // Buscar perfil del usuario
    /* @ts-ignore */
    const profile = await Profile.findOne({ usuario: payload.id })
      .populate('usuario')
      .exec()

    if (!profile) {
      throw new Error('Usuario no encontrado')
    }

    res.json({ success: true, user: profile })
  } catch (error) {
    console.error('Error en /verify:', error)
    /* @ts-ignore */
    res.json({ success: false, error: error.message })
  }
})

export default app
