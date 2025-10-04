import TaskModel from '../model/TaskModel.js'

export default class Controller {

  static async getTasks(req, res) {
    try {
      const tasks = await TaskModel.findAll()
      if (!tasks.length) return res.json({ message: 'Sin tareas pendientes' })
      res.json({ tasks })
    } catch (error) {
      console.error('Error fetching tasks:', error)
      res.status(500).json({ error: 'Internal Server Error' })
    }
  }
}
