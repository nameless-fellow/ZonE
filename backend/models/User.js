import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  username: { type: String, trim: true, unique: true, sparse: true, required: true },
  email: { type: String, trim: true, unique: true, sparse: true, required: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('User', UserSchema)
