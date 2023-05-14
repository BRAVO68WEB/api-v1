import { Router } from 'express'
import {
    userData,
    recentPlay,
    bestScores,
    beatmapScore,
    userInfov2,
    beatmapsScorev2,
    bestScoresv2,
    recentScoresv2,
    favouriteBeatmapsv2,
} from './controller'

const router = new Router()

/**
 * @api {post} /osu Create osu
 * @apiName CreateOsu
 * @apiGroup Osu
 * @apiSuccess {Object} osu Osu's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Osu not found.
 */
router.get('/v1/user', userData)

/**
 * @api {get} /osu Retrieve osus
 * @apiName RetrieveOsus
 * @apiGroup Osu
 * @apiUse listParams
 * @apiSuccess {Object[]} osus List of osus.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/v1/recent', recentPlay)

/**
 * @api {get} /osu Retrieve osus
 * @apiName RetrieveOsus
 * @apiGroup Osu
 * @apiUse listParams
 * @apiSuccess {Object[]} osus List of osus.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/v1/bestScores', bestScores)

/**
 * @api {get} /osu/:id Retrieve osu
 * @apiName RetrieveOsu
 * @apiGroup Osu
 * @apiSuccess {Object} osu Osu's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Osu not found.
 */
router.get('/v1/beatmap/:mapid', beatmapScore)

router.get('/v2/user', userInfov2)
router.get('/v2/beatmapsScore/:scoreId', beatmapsScorev2)
router.get('/v2/bestScores', bestScoresv2)
router.get('/v2/recentScores', recentScoresv2)
router.get('/v2/favouriteBeatmaps', favouriteBeatmapsv2)

export default router
