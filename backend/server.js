import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
import cors from 'cors'
import { initSockets } from './socket/index.js'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import serverRoutes from './routes/serverRoutes.js'
import messageRoutes from './routes/messageRoutes.js'

dotenv.config()
const app = express()
const server = http.createServer(app)

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api/users', userRoutes)
app.use('/api/servers', serverRoutes)
app.use('/api/messages', messageRoutes)

// health
app.get('/api/health', (req, res) => res.json({ ok: true }))

// start
const PORT = process.env.PORT || 3000
async function start() {
  await connectDB(process.env.MONGO_URI)
  initSockets(server) // attach socket.io handlers
  server.listen(PORT, () => {
    console.log(`Backend listening on http://localhost:${PORT}`)
  })
}
start()
