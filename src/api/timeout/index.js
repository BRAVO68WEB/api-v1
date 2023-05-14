import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /timeout Retrieve timeouts
 * @apiName RetrieveTimeouts
 * @apiGroup Timeout
 * @apiUse listParams
 * @apiSuccess {Object[]} timeouts List of timeouts.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', query(), index)

export default router
