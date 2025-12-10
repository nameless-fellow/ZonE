import jwt from 'jsonwebtoken'

export default function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || ''
    const token = authHeader.replace('Bearer ', '')
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' })
    }
    
    const payload = jwt.verify(token, process.env.JWT_SECRET || 'secret')
    req.userId = payload.id
    next()
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' })
  }
}
