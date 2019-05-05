const notFoundHandler = (req, res, next) =>
    next({ status: 404, message: 'Not found' })

const errorHandler = (err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'An error has occurred'
    res.status(status).json({ status, message })
}

module.exports = { notFoundHandler, errorHandler }
