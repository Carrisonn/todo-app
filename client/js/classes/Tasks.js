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

  //static async addTask(task) {
  //
  //}
}