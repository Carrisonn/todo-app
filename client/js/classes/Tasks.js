export default class Tasks {

  static async getTasks() {
    try {
      const url = '/tasks'
      const response = await fetch(url)
      const data = await response.json()
      return data.tasks
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  static async addTask({ task, priority }) {
    const url = '/tasks'
    const POST_CONFIG = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task, priority })
    }
    try {
      const response = await fetch(url, POST_CONFIG)
      const data = await response.json()
      if (!response.ok) return data // mensaje de error del servidor
      return data
    } catch (error) {
      console.error(error)
    }
  }
}