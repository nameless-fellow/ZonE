import ChatServer from '../models/ChatServer.js'

export async function createServer(req, res) {
  try {
    const ownerId = req.userId
    const { name, maxClients } = req.body

    if (!ownerId) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const server = await ChatServer.create({
      owner: ownerId,
      name: name || 'Private Chat',
      maxClients: maxClients || 5
    })

    res.status(201).json(server)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export async function getServer(req, res) {
  try {
    const { id } = req.params
    const server = await ChatServer.findById(id).populate('owner clients')
    
    if (!server) {
      return res.status(404).json({ error: 'Server not found' })
    }

    res.json(server)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export async function joinServer(req, res) {
  try {
    const { token } = req.body
    const clientId = req.userId

    if (!token || !clientId) {
      return res.status(400).json({ error: 'Token and user required' })
    }

    const server = await ChatServer.findOne({ inviteToken: token })
    if (!server) {
      return res.status(404).json({ error: 'Server not found' })
    }

    if (server.clients.length >= server.maxClients) {
      return res.status(403).json({ error: 'Server is full' })
    }

    if (!server.clients.includes(clientId)) {
      server.clients.push(clientId)
      await server.save()
    }

    res.json(server)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
