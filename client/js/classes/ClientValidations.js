export default class ClientValidations {
  static validateTasks({ task, priority }) {
    if (!task || !priority) return false
    const validPriorities = ['Alta', 'Media', 'Baja']
    if (!validPriorities.includes(priority)) return false
    return true
  }
}