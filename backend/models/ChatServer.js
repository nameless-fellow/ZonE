import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid'

const ChatServerSchema = new mongoose.Schema({
  name: { type: String, default: 'Private Chat', trim: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  inviteToken: { type: String, default: () => uuidv4(), unique: true },
  maxClients: { type: Number, default: 5, min: 1, max: 20 },
  clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now },
  expiresAt: { type: Date, default: () => new Date(Date.now() + 24 * 60 * 60 * 1000) }
})

export default mongoose.model('ChatServer', ChatServerSchema)
