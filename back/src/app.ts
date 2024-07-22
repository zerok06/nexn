import express from 'express'
import auth from './routes/auth'
import users from './routes/users/'
import user from './routes/user'
import follow from './routes/follow'
import chat from './routes/chat'
import morgan from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

const PORT = process.env.PORT || 3000
// Variables de entorno
app.set('port', PORT)

// Configuración de express
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(
  cors({
    origin: process.env.HOST_FRONTEND,
    credentials: true,
  })
)
app.use(morgan('dev'))
app.use(cookieParser())

// Levantamiento de API
app.use('/api/', auth)
app.use('/api/users/', users)
app.use('/api/', user)
app.use('/api/', follow)
app.use('/api/', chat)

app.listen(app.get('port'), () => {
  console.log('server in port 3000')
})
