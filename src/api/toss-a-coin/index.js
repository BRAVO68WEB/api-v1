import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /toss-a-coin/:id Retrieve toss a coim
 * @apiName RetrieveTossACoim
 * @apiGroup TossACoim
 * @apiSuccess {Object} tossACoim Toss a coim's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Toss a coim not found.
 */
router.get('/', show)

export default router
