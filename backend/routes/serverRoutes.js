import express from 'express'
import { createServer, getServer, joinServer } from '../controllers/serverController.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/create', auth, createServer)
router.get('/:id', auth, getServer)
router.post('/join', auth, joinServer)

export default router
