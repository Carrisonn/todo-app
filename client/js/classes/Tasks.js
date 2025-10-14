import { API_TASKS } from '../constants.js'

export default class Tasks {
  static async getTasks () {
    try {
      const response = await fetch(API_TASKS)
      const data = await response.json()
      return data.tasks
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  static async addTask ({ task, priority }) {
    const POST_CONFIG = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, priority })
    }
    try {
      const response = await fetch(API_TASKS, POST_CONFIG)
      const data = await response.json()
      if (!response.ok) return data // mensaje de error del servidor
      return data
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  static async deleteTask (id) {
    try {
      const response = await fetch(`${API_TASKS}/${id}`, { method: 'DELETE' })
      const data = await response.json()
      if (!response.ok) return data // mensaje de error del servidor
      return data
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }
}
