const logger = require('./logger')

function normalizePort(val) {
    const port = parseInt(val, 10)

    if (isNaN(port)) {
        return val
    }

    if (port >= 0) {
        return port
    }

    return false
}

const onError = port => error => {
    if (error.syscall !== 'listen') {
        throw error
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port

    switch (error.code) {
        case 'EACCES':
            logger.error(bind + ' requires elevated privileges')
            process.exit(1)
            break
        case 'EADDRINUSE':
            logger.error(bind + ' is already in use')
            process.exit(1)
            break
        default:
            throw error
    }
}

const onListening = server => () => {
    const addr = server.address()
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
    logger.info('Listening on ' + bind)
}

module.exports = { normalizePort, onError, onListening }
