export default (task) => ({
  id: task.id,
  title: task.content,
  description: task.description,
  assignee: task['responsible-party-names'] || 'Anybody',
})
