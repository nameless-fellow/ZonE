import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const JWT_SECRET = process.env.JWT_SECRET || 'secret'
const JWT_EXPIRY = '7d'

export async function signup(req, res) {
  try {
    const { name, username, email, password } = req.body

    // Validation
    if (!name || !username || !email || !password) {
      return res.status(400).json({ error: 'All fields required' })
    }

    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] })
    if (existingUser) {
      return res.status(409).json({ error: 'Email or username already exists' })
    }

    // TODO: Replace with bcrypt hash in production
    const user = await User.create({ name, username, email, passwordHash: password })
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRY })
    
    res.status(201).json({
      user: { id: user._id, username: user.username, email: user.email },
      token
    })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password required' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    // TODO: Replace with bcrypt compare in production
    if (user.passwordHash !== password) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRY })
    res.json({
      user: { id: user._id, username: user.username, email: user.email },
      token
    })
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
