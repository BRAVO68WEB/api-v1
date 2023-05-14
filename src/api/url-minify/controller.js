import { success, notFound } from '../../services/response/'
import { UrlMinify } from '.'
import axios from 'axios'

export const create = (req, res, next) => {
    let config = {
        url: `${process.env.SHLINK_API_HOST}/rest/v2/short-urls/shorten?apiKey=${process.env.SHLINK_API_KEY}&longUrl=${req.body.originalURL}&format=json`,
        method: 'get',
        headers: {
            accept: 'application/json',
        },
    }

    axios(config)
        .then(function (response) {
            req.body.minifiedURL = response.data.shortUrl
            req.body.shortURL = response.data.shortCode
            req.body.minifiedBy = req.headers.email
            UrlMinify.create(req.body)
                .then((urlMinify) => urlMinify.view(true))
                .then(success(res, 201))
                .catch(next)
        })
        .catch(function (error) {
            console.log(error)
        })
}

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
    UrlMinify.find(query, select, cursor)
        .then((urlMinifies) => urlMinifies.map((urlMinify) => urlMinify.view()))
        .then(success(res))
        .catch(next)

export const show = ({ params }, res, next) =>
    UrlMinify.findById(params.id)
        .then(notFound(res))
        .then((urlMinify) => (urlMinify ? urlMinify.view() : null))
        .then(success(res))
        .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
    UrlMinify.findById(params.id)
        .then(notFound(res))
        .then((urlMinify) =>
            urlMinify ? Object.assign(urlMinify, body).save() : null
        )
        .then((urlMinify) => (urlMinify ? urlMinify.view(true) : null))
        .then(success(res))
        .catch(next)

export const destroy = ({ params }, res, next) =>
    UrlMinify.findById(params.id)
        .then(notFound(res))
        .then((urlMinify) => (urlMinify ? urlMinify.remove() : null))
        .then(success(res, 204))
        .catch(next)

export const indexForUser = (req, res, next) => {
    UrlMinify.find({ minifiedBy: req.headers.email })
        .then(notFound(res))
        .then((urlMinifies) => urlMinifies.map((urlMinify) => urlMinify.view()))
        .then(success(res))
        .catch(next)
}

export const shortCodeRef = (req, res, next) => {
    UrlMinify.findOne({ shortURL: req.params.code })
        .then(notFound(res))
        .then((urlMinify) => (urlMinify ? urlMinify.view() : null))
        .then(success(res))
        .catch(next)
}
