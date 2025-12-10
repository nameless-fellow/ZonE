import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema({
  server: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatServer', required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  text: { type: String, required: true, trim: true, maxlength: 2000 },
  createdAt: { type: Date, default: Date.now, index: true }
})

// Index for efficient queries
MessageSchema.index({ server: 1, createdAt: -1 })

export default mongoose.model('Message', MessageSchema)
