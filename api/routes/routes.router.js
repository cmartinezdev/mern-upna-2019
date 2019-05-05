const express = require('express')

const { notFoundHandler, errorHandler } = require('./routes.handlers')
const todosRouter = require('./todos')

const routesRouter = express.Router()

routesRouter.use('/todos', todosRouter)

routesRouter.use(notFoundHandler)
routesRouter.use(errorHandler)

module.exports = routesRouter
