import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /error Retrieve errors
 * @apiName RetrieveErrors
 * @apiGroup Error
 * @apiUse listParams
 * @apiSuccess {Object[]} errors List of errors.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
