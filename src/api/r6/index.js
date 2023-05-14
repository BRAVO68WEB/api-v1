import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /r6s/:id Retrieve r 6
 * @apiName RetrieveR6
 * @apiGroup R6
 * @apiSuccess {Object} r6 R 6's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 R 6 not found.
 */
router.get('/', show)

export default router
