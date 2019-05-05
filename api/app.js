const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const routes = require('./routes')

const app = express()

app.use((req, res, next) => setTimeout(next, Math.random() * 500 + 500))
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(routes)

module.exports = app
