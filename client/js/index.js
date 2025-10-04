import Tasks from './classes/Tasks.js'
import UI from './classes/UI.js'

async function InitApp() {
  const tasks = await Tasks.getTasks()
  UI.renderTasks(tasks)
}

InitApp()
