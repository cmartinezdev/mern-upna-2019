const MongoClient = require('mongodb').MongoClient

const logger = require('./logger')
const config = require('../config')

const client = new MongoClient(config.mongodb.uri)

const connectToMongoDB = () => {
    return new Promise((resolve, reject) => {
        client.connect(err => {
            if (err) {
                return reject(err)
            }

            logger.info('Connected successfully to mongod server')

            resolve(client.db(config.mongodb.db))
        })
    })
}

module.exports = { connectToMongoDB }
