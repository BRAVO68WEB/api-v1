import express from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import { errorHandler as queryErrorHandler } from 'querymen'
import { errorHandler as bodyErrorHandler } from 'bodymen'
let timeout = require('connect-timeout')
import { env } from '../../config'
let favicon = require('serve-favicon')
let path = require('path')
import pageNotFound from '../../api/page-not-found'
let health = require('express-ping')

import chalk from 'chalk' // or you can use the require('chalk') syntax too

export const morganMiddleware = morgan(function (tokens, req, res) {
    return [
        '\n',
        chalk.hex('#ff4757').bold('🤖 Morgan --> '),
        chalk.hex('#34ace0').bold(tokens.method(req, res)),
        chalk.hex('#ffb142').bold(tokens.status(req, res)),
        chalk.hex('#ff5252').bold(tokens.url(req, res)),
        chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
        chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res)),
        chalk.yellow(tokens['remote-addr'](req, res)),
        chalk.hex('#fffa65').bold('from '),
        chalk.hex('#1e90ff')(tokens['user-agent'](req, res)),
        '\n',
    ].join(' ')
})

function haltOnTimedout(req, res, next) {
    console.log(req.timedout)
    if (!req.timedout) {
        next()
    } else res.redirect('/timeout')
}
export default (apiRoot, routes) => {
    const app = express()
    // app.use(timeout("5s"));
    // app.use(haltOnTimedout);
    /* istanbul ignore next */
    if (env === 'production' || env === 'development') {
        app.use(cors())
        app.use(compression())
        // app.use(morgan('dev'))
        app.use(morganMiddleware)
    }

    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())
    app.use(apiRoot, routes)
    app.use(health.ping())
    app.use(queryErrorHandler())
    app.use(bodyErrorHandler())
    app.use(favicon(path.join(__dirname, 'bravo68web.ico')))
    app.use('*', pageNotFound)

    return app
}
