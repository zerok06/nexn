const mongoose = require('mongoose')

// URL de la base de datos, reemplaza con tu URL de MongoDB
const dbUrl = process.env.DATABASE_URL

export const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Conexión a MongoDB exitosa')
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error)
    process.exit(1) // Sale del proceso con un código de error
  }
}

// Exportar la función de conexión para usarla en otros archivos
