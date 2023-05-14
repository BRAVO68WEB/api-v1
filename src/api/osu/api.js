import { Router } from 'express'
import {
    userDataAll,
    recentPlayAll,
    bestScoresAll,
    beatmapScoreAll,
} from './controller'

const router = new Router()

router.get('/user/:username', userDataAll)

/**
 * @api {get} /osu Retrieve osus
 * @apiName RetrieveOsus
 * @apiGroup Osu
 * @apiUse listParams
 * @apiSuccess {Object[]} osus List of osus.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/recent/:username', recentPlayAll)

/**
 * @api {get} /osu Retrieve osus
 * @apiName RetrieveOsus
 * @apiGroup Osu
 * @apiUse listParams
 * @apiSuccess {Object[]} osus List of osus.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/bestScores/:username', bestScoresAll)

/**
 * @api {get} /osu/:id Retrieve osu
 * @apiName RetrieveOsu
 * @apiGroup Osu
 * @apiSuccess {Object} osu Osu's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Osu not found.
 */
router.get('/beatmap/:mapid/:username', beatmapScoreAll)

export default router
