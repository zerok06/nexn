import express from 'express'
import auth from './routes/auth'
import users from './routes/users/'
import morgan from 'morgan'

const app = express()

const PORT = process.env.PORT || 3000
// Variables de entorno
app.set('port', PORT)

// Configuración de express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

// Levantamiento de API
app.use('/api/', auth)
app.use('/api/users/', users)

app.listen(app.get('port'), () => {
  console.log('server in port 3000')
})
