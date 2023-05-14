import { Router } from 'express'
import osu from './osu'
import github from './github'
import gitlab from './gitlab'
import twitter from './twitter'
import spotify from './spotify'
import instagram from './instagram'
import hashnode from './hashnode'
import wakatime from './wakatime'
import rocketLeague from './rocket-league'
import csgo from './csgo'
import valorant from './valorant'
import discord from './discord'
import lastfm from './lastfm'
import docs from './docs'
import root from './root'
import genPassword from './genPassword'
import rollADie from './roll-a-die'
import cat from './cat'
import catgirl from './catgirl'
import tossACoin from './toss-a-coin'
import nhentai from './nhentai'
import ask from './ask'
import contactme from './contactme'
import authApi from './auth'
import { authCheck } from './auth/authCheck'
import minecraft from './minecraft'
import myanimelist from './myanimelist'
import youtube from './youtube'
import apiHome from './apiHome'
import gists from './gists'
import vscode from './vscode'
import mail from './mail'
import files from './files'
import urlMinify from './url-minify'
import r6 from './r6'
import spotifyAPI from './spotify/api'
import osuAPI from './osu/api'
import comingSoon from './coming-soon'
import error from './error'
import underMaintainance from './under-maintainance'
import timeout from './timeout'
import appStatus from '../services/status'
import screenshot from './screenshot'
import gogoanime from './gogoanime'
import ipinfo from './ipinfo'
import openLibrary from './openLibrary'
import portfolio from './portfolio'

const router = new Router()

router.use('/', root)

// ROIT verification
let path = require('path')
let options = {
    root: path.join(__dirname),
}
let fileName = 'roit.txt'
router.use('/riot.txt', (req, res) => {
    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('Sent:', fileName)
        }
    })
})

// Server Error Handling
router.use('/coming-soon', comingSoon)
router.use('/error', error)
router.use('/under-maintainance', underMaintainance)
router.use('/timeout', timeout)
router.use('/mail', mail)
router.use('/status', appStatus)

router.use('/me/osu', osu)
router.use('/me/github', github)
router.use('/me/gitlab', gitlab)
router.use('/me/twitter', twitter)
router.use('/me/spotify', spotify)
router.use('/me/instagram', instagram)
router.use('/me/hashnode', hashnode)
router.use('/me/wakatime', wakatime)
router.use('/me/rocket-league', rocketLeague)
router.use('/me/csgo', csgo)
router.use('/me/valorant', valorant)
router.use('/me/discord', discord)
router.use('/me/lastfm', lastfm)
router.use('/me/vscode', vscode)
router.use('/me/r6s', r6)

router.use('/docs', docs)

router.use('/api/public/generate-password', genPassword)
router.use('/api/public/roll-a-die', rollADie)
router.use('/api/public/cat', cat)
router.use('/api/public/catgirl', catgirl)
router.use('/api/public/toss-a-coin', tossACoin)
router.use('/api/public/gists', gists)
router.use('/api/public/ask', ask)

router.use('/api/private/nhentai', authCheck, nhentai)
router.use('/api/private/mal', myanimelist)
router.use('/api/private/mc', authCheck, minecraft)
router.use('/api/private/yt', authCheck, youtube)
router.use('/api/private/files', authCheck, files)
router.use('/api/private/url-minify', authCheck, urlMinify)
router.use('/api/private/spotify', authCheck, spotifyAPI)
router.use('/api/private/osu', authCheck, osuAPI)
router.use('/api/private/screenshot', authCheck, screenshot)
router.use('/api/private/gogoanime', gogoanime)
router.use('/api/private/ipinfo', ipinfo)
router.use('/api/private/olib', openLibrary)

router.use('/api', apiHome)
router.use('/api/auth', authApi)

router.use('/contactme', contactme)
router.use('/portfolio', portfolio)

// router.use('*', pageNotFound)

/**
 * @apiDefine master Master access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine admin Admin access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine user User access only
 * You must pass `access_token` parameter or a Bearer Token authorization header
 * to access this endpoint.
 */
/**
 * @apiDefine listParams
 * @apiParam {String} [q] Query to search.
 * @apiParam {Number{1..30}} [page=1] Page number.
 * @apiParam {Number{1..100}} [limit=30] Amount of returned items.
 * @apiParam {String[]} [sort=-createdAt] Order of returned items.
 * @apiParam {String[]} [fields] Fields to be returned.
 */

export default router
