import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /coming-soon Retrieve coming soons
 * @apiName RetrieveComingSoons
 * @apiGroup ComingSoon
 * @apiUse listParams
 * @apiSuccess {Object[]} comingSoons List of coming soons.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
