import { Router } from 'express'
import { playerHistory, profile, playerHistoryRating } from './controller'

const router = new Router()

/**
 * @api {get} /rocket-league/:id Retrieve rocket league
 * @apiName RetrieveRocketLeague
 * @apiGroup RocketLeague
 * @apiSuccess {Object} rocketLeague Rocket league's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Rocket league not found.
 */
router.get('/me', profile)
router.get('/playerHistory', playerHistory)
router.get('/rating', playerHistoryRating)

export default router
