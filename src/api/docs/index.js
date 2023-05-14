import { Router } from 'express'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /docs Retrieve docs
 * @apiName RetrieveDocs
 * @apiGroup Docs
 * @apiUse listParams
 * @apiSuccess {Object[]} docs List of docs.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
