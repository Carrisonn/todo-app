import express from 'express'
import Controller from '../controller/Controller.js'

const router = express.Router()

router.get('/tasks', Controller.getTasks)
router.post('/tasks', Controller.addTask)
router.delete('/tasks/:id', Controller.deleteTask)

export default router
