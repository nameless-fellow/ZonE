import Message from '../models/Message.js'

export async function getMessages(req, res) {
  try {
    const { serverId } = req.params
    const { limit = 50, skip = 0 } = req.query

    const messages = await Message.find({ server: serverId })
      .populate('sender', 'username')
      .sort({ createdAt: 1 })
      .limit(parseInt(limit))
      .skip(parseInt(skip))

    res.json(messages)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}

export async function postMessage(req, res) {
  try {
    const { serverId } = req.params
    const { text } = req.body
    const sender = req.userId

    if (!text || text.trim().length === 0) {
      return res.status(400).json({ error: 'Message text required' })
    }

    const message = await Message.create({ server: serverId, sender, text: text.trim() })
    await message.populate('sender', 'username')

    res.status(201).json(message)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
}
