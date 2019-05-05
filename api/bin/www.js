const http = require('http')

const app = require('../app')
const config = require('../config')
const { normalizePort, onError, onListening } = require('../utils/http')
const { killApp } = require('../utils/nodemon')
const { connectToMongoDB } = require('../utils/mongodb')

const port = normalizePort(config.port)
app.set('port', port)

connectToMongoDB().then(db => app.set('db', db))

const server = http.createServer(app)

server.listen(port)
server.on('error', onError(port))
server.on('listening', onListening(server))

process.once('SIGUSR2', killApp)
