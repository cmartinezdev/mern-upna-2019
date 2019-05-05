const logger = require('../../utils/logger')

const { getTodosCollection } = require('./todos.utils')

const getHandler = (req, res, next) => {
    const todosCollection = getTodosCollection(req.app)

    todosCollection.find().toArray((err, result) => {
        if (err) {
            logger.error(err)
            return next({
                status: 500,
                message: err.message,
            })
        }

        res.status(200).json({ result })
    })
}

const postHandler = (req, res, next) => {
    const { description } = req.body

    if (!description) {
        return next({
            status: 400,
            message: '"description" is mandatory',
        })
    }

    const todosCollection = getTodosCollection(req.app)

    const createdAt = new Date()

    todosCollection.insertOne({ description, createdAt }, (err, result) => {
        if (err) {
            logger.error(err)
            return next({
                status: 500,
                message: err.message,
            })
        }

        return res.status(200).json({
            result: { _id: result.insertedId, description, createdAt },
        })
    })
}

module.exports = { getHandler, postHandler }
