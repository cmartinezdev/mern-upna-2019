const todosCollectionName = 'todos'

const getTodosCollection = app => app.get('db').collection(todosCollectionName)

module.exports = { getTodosCollection }
