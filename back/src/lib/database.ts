import mongoose from 'mongoose'
const { Schema } = mongoose

// Creadenciales Schema
const creadencialesSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
)

const Creadenciales = mongoose.model('Creadenciales', creadencialesSchema)

// Usuario Schema
const usuarioSchema = new Schema(
  {
    nombres: { type: String, required: true },
    apellidos: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    credenciales: {
      type: Schema.Types.ObjectId,
      ref: 'Creadenciales',
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

const Usuario = mongoose.model('Usuario', usuarioSchema)

// Profile Schema
const profileSchema = new Schema(
  {
    avatar: { type: String },
    username: { type: String, required: true },
    nombres: { type: String, required: true },
    likes: { type: Number, default: 0 },
    desc: { type: String, default: 'Welcome to my profile!' },
    usuario: {
      type: Schema.Types.ObjectId,
      ref: 'Usuario',
      required: true,
      unique: true,
    },
    follows: [{ type: Schema.Types.ObjectId, ref: 'Follow' }],
    followers: [{ type: Schema.Types.ObjectId, ref: 'Follow' }],
    Message: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
    senders: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
    receptors: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
  },
  { timestamps: true }
)

const Profile = mongoose.model('Profile', profileSchema)

// Follow Schema
const followSchema = new Schema(
  {
    follower: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    following: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
  },
  { timestamps: true }
)

const Follow = mongoose.model('Follow', followSchema)

// Chat Schema
const chatSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    receptor: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    Message: [{ type: Schema.Types.ObjectId, ref: 'Message' }],
  },
  { timestamps: true }
)

const Chat = mongoose.model('Chat', chatSchema)

// Message Schema
const messageSchema = new Schema(
  {
    message: { type: String, required: true },
    nombre: { type: String, required: true },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat', required: true },
    profile: { type: Schema.Types.ObjectId, ref: 'Profile', required: true },
    createAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
)

const Message = mongoose.model('Message', messageSchema)

// Export Models
export { Creadenciales, Usuario, Profile, Follow, Chat, Message }
