import { $year, $tasksWrapper } from '../DOMelements.js'

export default class UI {

  static renderTasks(tasks) {
    while ($tasksWrapper.firstChild) {
      $tasksWrapper.removeChild($tasksWrapper.firstChild)
    }

    if (!tasks.length) return $tasksWrapper.setHTMLUnsafe('<p>Sin tareas pendientes</p>')
  }

  static {
    $year.textContent = new Date().getFullYear()
  }
}


