export default class Tasks {

  static async getTasks() {
    const url = '/api/tasks'
    try {
      const response = await fetch(url)
      const tasks = await response.json()
      return tasks
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }
}