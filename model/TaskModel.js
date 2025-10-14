import DB from '../config/DB.js'
import { DataTypes } from 'sequelize'

const TaskModel = DB.define('tasks', {
  task: { type: DataTypes.STRING },
  priority: { type: DataTypes.STRING }
})

export default TaskModel
