import { $year, $tasksWrapper, $messageContainer, $form, deleteSvg } from '../constants.js'
import { handleDeleteTask } from '../index.js'

export default class UI {
  static orderByPriority (tasks) {
    if (tasks.length === 0) return $tasksWrapper.setHTMLUnsafe('<p>Sin tareas pendientes</p>')
    const priorityOrder = { Baja: 0, Media: 1, Alta: 2 }
    tasks.sort((obj1, obj2) => priorityOrder[obj2.priority] - priorityOrder[obj1.priority])
    this.renderTasks(tasks)
  }

  static renderTasks (tasks) {
    this.removePreviousHTML()

    tasks.forEach(taskObj => {
      const { id, task, priority } = taskObj

      const $taskCard = document.createElement('div')
      $taskCard.classList.add('task-card')

      const $taskContent = document.createElement('div')
      $taskContent.classList.add('task-content')
      $taskContent.setHTMLUnsafe(`
        <p>Acción: <span class="primary-color">${task}</span></p>
        <p>Prioridad: <span class="primary-color">${priority}</span></p>
      `)

      const $deleteButton = document.createElement('button')
      $deleteButton.classList.add('btn', 'btn-delete')
      $deleteButton.setHTMLUnsafe(`Borrar ${deleteSvg}`)
      $deleteButton.addEventListener('click', () => handleDeleteTask(id))

      $taskCard.append($taskContent, $deleteButton)
      $tasksWrapper.append($taskCard)
    })
    $form.reset()
  }

  static removePreviousHTML () {
    while ($tasksWrapper.firstChild) {
      $tasksWrapper.removeChild($tasksWrapper.firstChild)
    }
  }

  static feedbackMessage (message, type = 'success') {
    $messageContainer.querySelector('.feedback-message')?.remove()

    const $message = document.createElement('p')
    $message.classList.add('feedback-message', `${type}`)
    $message.textContent = message
    $messageContainer.classList.remove('display-none')
    $messageContainer.append($message)
    setTimeout(() => {
      $message.remove()
      $messageContainer.classList.add('display-none')
    }, 4000)
  }

  static {
    $year.textContent = new Date().getFullYear()
  }
}
