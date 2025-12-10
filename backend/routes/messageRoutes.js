import express from 'express'
import { getMessages, postMessage } from '../controllers/messageController.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/:serverId', auth, getMessages)
router.post('/:serverId', auth, postMessage)

export default router
