import { Server } from 'socket.io'
import ChatServer from '../models/ChatServer.js'
import Message from '../models/Message.js'

export function initSockets(httpServer) {
  const io = new Server(httpServer, {
    cors: { origin: process.env.CLIENT_URL || '*', methods: ['GET', 'POST'] },
    maxHttpBufferSize: 1e5 // 100KB
  })

  const chatNS = io.of('/chat')

  chatNS.on('connection', (socket) => {
    console.log(`[Socket] Client connected: ${socket.id}`)

    socket.on('join', async ({ serverId, userId }) => {
      try {
        if (!serverId || !userId) {
          socket.emit('error', { message: 'serverId and userId required' })
          return
        }

        const server = await ChatServer.findById(serverId)
        if (!server) {
          socket.emit('error', { message: 'Server not found' })
          return
        }

        const roomClients = chatNS.adapter.rooms.get(serverId) || new Set()
        if (roomClients.size >= server.maxClients) {
          socket.emit('error', { message: 'Server is full' })
          return
        }

        socket.join(serverId)
        socket.data = { userId, serverId }
        socket.emit('joined', { serverId, message: 'Successfully joined' })
        chatNS.to(serverId).emit('user-joined', { userId, timestamp: new Date() })
      } catch (err) {
        socket.emit('error', { message: err.message })
      }
    })

    socket.on('message', async ({ serverId, text, sender }) => {
      try {
        if (!text || text.trim().length === 0) {
          socket.emit('error', { message: 'Message cannot be empty' })
          return
        }

        const message = await Message.create({ server: serverId, sender, text: text.trim() })
        await message.populate('sender', 'username')

        chatNS.to(serverId).emit('message', {
          _id: message._id,
          text: message.text,
          sender: message.sender,
          createdAt: message.createdAt
        })
      } catch (err) {
        socket.emit('error', { message: err.message })
      }
    })

    socket.on('typing', ({ serverId }) => {
      socket.to(serverId).emit('user-typing', { userId: socket.data.userId })
    })

    socket.on('disconnect', () => {
      const { serverId, userId } = socket.data || {}
      if (serverId && userId) {
        chatNS.to(serverId).emit('user-left', { userId })
      }
      console.log(`[Socket] Client disconnected: ${socket.id}`)
    })

    socket.on('error', (err) => {
      console.error(`[Socket] Error on ${socket.id}:`, err)
    })
  })
}
