import { Router } from 'express'
import { show } from './controller'

const router = new Router()

/**
 * @api {get} /cat/ Retrieve cat
 * @apiName RetrieveCat
 * @apiGroup Cat
 * @apiSuccess {Object} cat Cat's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Cat not found.
 */
router.get('/', show)

export default router
