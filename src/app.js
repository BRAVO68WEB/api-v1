import http from 'http'
import { env, mongo, port, ip, apiRoot } from './config'
import mongoose from './services/mongoose'
import express from './services/express'
import api from './api'
const figchalk = require('figchalk')
const chalk = require('chalk')
const log = console.log

const app = express(apiRoot, api)
const server = http.createServer(app)

if (mongo.uri) {
    mongoose.connect(mongo.uri)
}
mongoose.Promise = Promise

setImmediate(() => {
    server.listen(port, ip, () => {
        log(figchalk.mix('BRAVO68WEB - API', 'magentaBright', 'Bloody'))
        log(
            chalk.red.bgYellowBright(
                `API listening on http://localhost:%d, in %s mode`
            ),
            port,
            env
        )
    })
})

export default app
