import { Router } from 'express'
import {
    userdata,
    myorgs,
    repos,
    trophy,
    topLang,
    stats,
    streaks,
    wakatime,
    userEvent,
} from './controller'

const router = new Router()

/**
 * @api {get} /github/:id Retrieve github
 * @apiName RetrieveGithub
 * @apiGroup Github
 * @apiSuccess {Object} github Github's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Github not found.
 */
router.get('/userdata', userdata)

router.get('/orgs', myorgs)

router.get('/repos', repos)

router.get('/banner/trophy', trophy)

router.get('/banner/topLang', topLang)

router.get('/banner/stats', stats)

router.get('/banner/streaks', streaks)

router.get('/banner/wakatime', wakatime)

router.get('/userEvent', userEvent)

export default router
