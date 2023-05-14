import { success, notFound } from '../../services/response/'
import { Myanimelist } from '.'
import getAccessToken from '../../services/malAuth'
import pkceChallenge from 'pkce-challenge'

const pkceCode = pkceChallenge()
let loginDone = true

const malAPI = require('@chris-kode/myanimelist-api-v2')

if (process.env.NODE_ENV === 'production') {
    let malURL = 'https://api.b68dev.xyz/api/private'
} else {
    let malURL = 'http://localhost:9000/api/private'
}
export const create = ({ bodymen: { body } }, res, next) => {
    Myanimelist.create(body)
        .then((myanimelist) => myanimelist.view(true))
        .then(success(res, 201))
        .catch(next)
}
export const login = (req, res) => {
    let config = {
        method: 'get',
        url: `https://myanimelist.net/v1/oauth2/authorize?response_type=code&client_id=${process.env.MAL_CLIENT_ID}&code_challenge=${pkceCode.code_challenge}&redirect_uri=${malURL}/mal/callback&state=apiLogin&code_challenge_method=plain`,
    }
    setTimeout(() => {
        res.redirect(config.url)
    }, 2000)
}
export const show = ({ params }, res, next) =>
    Myanimelist.findById(params.id)
        .then(notFound(res))
        .then((myanimelist) => (myanimelist ? myanimelist.view() : null))
        .then(success(res))
        .catch(next)
export const update = ({ bodymen: { body }, params }, res, next) =>
    Myanimelist.findById(params.id)
        .then(notFound(res))
        .then((myanimelist) =>
            myanimelist ? Object.assign(myanimelist, body).save() : null
        )
        .then((myanimelist) => (myanimelist ? myanimelist.view(true) : null))
        .then(success(res))
        .catch(next)
export const destroy = ({ params }, res, next) =>
    Myanimelist.findById(params.id)
        .then(notFound(res))
        .then((myanimelist) => (myanimelist ? myanimelist.remove() : null))
        .then(success(res, 204))
        .catch(next)
export const loginCallback = (req, res, next) => {
    const { code } = req.query
    let request = require('request')
    let options = {
        method: 'POST',
        url: 'https://myanimelist.net/v1/oauth2/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: process.env.MAL_COOKIE,
        },
        form: {
            client_id: `${process.env.MAL_CLIENT_ID}`,
            client_secret: `${process.env.MAL_CLIENT_SECRET}`,
            grant_type: 'authorization_code',
            code: `${code}`,
            code_verifier: `${pkceCode.code_challenge}`,
            redirect_uri: `${malURL}/mal/callback`,
        },
    }
    // console.log(options.redirect_uri)
    setTimeout(() => {
        if (loginDone) {
            request(options, async function (error, response, body) {
                if (error) throw new Error(error)

                body = JSON.parse(body)
                const event = new Date()

                let bodyToStore = {}
                bodyToStore.token = body.access_token
                bodyToStore.lastUpdate = event.toISOString()
                bodyToStore.refreshToken = body.refresh_token

                await Myanimelist.deleteMany({}).catch((err) =>
                    console.log(err)
                )
                await Myanimelist.create(bodyToStore)
                    .then((myanimelist) => myanimelist.view(true))
                    .then(success(res, 201))
                    .catch(next)
            })
        } else {
            res.send("Something isn't Right")
        }
    }, 3000)
}
export const tokenGrab = async (req, res, next) => {
    // console.log(malURL)
    let keys = await getAccessToken()
    console.log(keys)
    res.send('Token Grabed successfully. Check console for token ...')
}
export const searchAnime = (req, res, next) => {
    let request = require('request')
    let options = {
        method: 'GET',
        url: `https://api.jikan.moe/v3/search/anime?q=${req.query.name}&limit=25`,
        headers: {
            'Content-Type': 'application/json',
        },
    }
    request(options, function (error, response, body) {
        if (error) throw new Error(error)
        body = JSON.parse(body)
        res.json(body.results)
    })
}
export const searchManga = (req, res, next) => {
    let request = require('request')
    let options = {
        method: 'GET',
        url: `https://api.jikan.moe/v3/search/manga?q=${req.query.name}&limit=25`,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    request(options, function (error, response, body) {
        if (error) throw new Error(error)
        body = JSON.parse(body)
        res.json(body.results)
    })
}
export const animeById = async (req, res, next) => {
    let keys = await getAccessToken()
    // console.log(keys[0])
    const malclient = new malAPI.API_USER(keys[0].token)
    await malclient
        .anime(req.params.malId)
        .then((resp) => {
            res.send(resp)
        })
        .catch((err) => {
            console.log(err)
        })
}
export const mangaById = async (req, res, next) => {
    let keys = await getAccessToken()
    // console.log(keys[0])
    const malclient = new malAPI.API_USER(keys[0].token)
    await malclient
        .manga(req.params.malId)
        .then((resp) => {
            res.send(resp)
        })
        .catch((err) => {
            console.log(err)
        })
}
export const animeBySeason = (req, res, next) => {
    let request = require('request')
    let options = {
        method: 'GET',
        url: `https://api.jikan.moe/v3/season/${req.params.year}/${req.params.season}`,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    request(options, function (error, response, body) {
        if (error) throw new Error(error)
        body = JSON.parse(body)
        res.send(body.anime)
    })
}
export const userAnimeList = async (req, res, next) => {
    let keys = await getAccessToken()
    // console.log(keys[0])
    const malclient = new malAPI.API_USER(keys[0].token)
    await malclient
        .getList(req.params.username)
        .then((resp) => {
            res.send(resp.data)
        })
        .catch((err) => {
            console.log(err)
        })
}
export const me = async (req, res, next) => {
    let keys = await getAccessToken()
    // console.log(keys[0])
    const malclient = new malAPI.API_USER(keys[0].token)
    await malclient
        .me()
        .then((resp) => {
            res.send(resp)
        })
        .catch((err) => {
            console.log(err)
        })
}
