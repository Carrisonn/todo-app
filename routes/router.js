import express from 'express'
import Controller from '../controller/Controller.js'

const router = express.Router()

router.get('/api/tasks', Controller.getTasks)


export default router