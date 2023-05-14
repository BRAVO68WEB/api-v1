import { Router } from 'express'
import { index } from './controller'

const router = new Router()

/**
 * @api {get} /page-not-found Retrieve page not founds
 * @apiName RetrievePageNotFounds
 * @apiGroup PageNotFound
 * @apiUse listParams
 * @apiSuccess {Object[]} pageNotFounds List of page not founds.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/', index)

export default router
