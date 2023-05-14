import { Router } from 'express'
import { middleware as query } from 'querymen'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /screenshot Retrieve screenshots
 * @apiName RetrieveScreenshots
 * @apiGroup Screenshot
 * @apiUse listParams
 * @apiSuccess {Object[]} screenshots List of screenshots.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
