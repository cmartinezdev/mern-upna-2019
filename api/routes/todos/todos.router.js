const express = require('express')

const { getHandler, postHandler } = require('./todos.handlers')

const todosRouter = express.Router()

todosRouter.get('/', getHandler)

todosRouter.post('/', postHandler)

module.exports = todosRouter
