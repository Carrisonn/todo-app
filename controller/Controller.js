import TaskModel from '../model/TaskModel.js'

export default class Controller {

  static async getTasks(req, res) {
    try {
      const tasks = await TaskModel.findAll()
      res.status(200).json({ tasks })
    } catch (error) {
      console.error('Error fetching tasks:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }

  static async addTask(req, res) {
    try {
      const { task, priority } = req.body
      if (!task || !priority) return res.status(400).json({ message: 'Faltan datos en el formulario' })
      await TaskModel.create({ task, priority })
      const tasks = await TaskModel.findAll()
      res.status(200).json({ tasks, message: 'Tarea creada correctamente' })
    } catch (error) {
      console.error('Error fetching tasks:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
