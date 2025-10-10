import Tasks from './classes/Tasks.js'
import UI from './classes/UI.js'
import ClientValidations from './classes/ClientValidations.js'
import { $form } from './DOMelements.js'

async function InitApp() {
  const tasks = await Tasks.getTasks()
  UI.renderTasks(tasks)
  $form.addEventListener('submit', handleSubmit)
}

async function handleSubmit(event) {
  event.preventDefault()
  const formData = new FormData($form)
  const task = formData.get('task').trim()
  const priority = formData.get('priority')
  const isValidTask = ClientValidations.validateTasks({ task, priority })
  if (!isValidTask) return UI.feedbackMessage('Por favor, completa todos los campos', 'error')
  const formattedTask = task.replace(/^\w/, character => character.toUpperCase())
  const data = await Tasks.addTask({ task: formattedTask, priority })
  if (!data.tasks) return UI.feedbackMessage(data.message, 'error')
  UI.renderTasks(data.tasks)
  UI.feedbackMessage(data.message)
}

InitApp()
